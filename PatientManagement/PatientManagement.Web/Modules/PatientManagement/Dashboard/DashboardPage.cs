
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using PatientManagement.Administration;
using PatientManagement.Administration.Entities;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.Dashboard;
using PatientManagement.PatientManagement.Repositories;
using PatientManagement.Web.Modules.Common;
using Remotion.Linq.Clauses;
using Serenity.Services;
using StackExchange.Exceptional;

namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using Microsoft.AspNetCore.Mvc;

    [Route("Dashboard/[action]")]
    public class DashboardController : Controller
    {
        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            var cabinetIdActive = 0;

            var connection = SqlConnections.NewFor<CabinetsRow>();
            ViewData["WorkDays"] = new List<Int32> { 1, 2, 3, 4, 5 }.ToJson();

            var visitFlds = VisitsRow.Fields;
            var user = (UserDefinition)Authorization.UserDefinition;

            if (connection.Count<VisitsRow>(visitFlds.TenantId == user.TenantId) < 1)
                ViewData["HelloModal"] = true;

            if (GetAndSetActiveCabinetIdIfAny(connection, out cabinetIdActive))
            {
                if (cabinetIdActive != 0)
                {
                    var cabFlds = CabinetsRow.Fields;
                    var connectionCabint = connection.TryFirst<CabinetsRow>(cabFlds.CabinetId == cabinetIdActive);
                    var workDaysFlds = CabinetWorkDaysRow.Fields;

                    if (connectionCabint.CabinetId != null)
                    {
                        var cabinetWorkDays =
                            connection.List<CabinetWorkDaysRow>(workDaysFlds.CabinetId ==
                                                                connectionCabint.CabinetId.Value).Select(x => x.WeekDayId);
                        if (cabinetWorkDays.Any())
                            ViewData["WorkDays"] = cabinetWorkDays.OrderBy(s => s).ToJson();


                    }
                    ViewData["CabinetHeaderName"] = connectionCabint?.Name;


                    ViewData["WorkHoursStart"] = TimeSpan.FromMinutes(connectionCabint?.WorkHoursStart ?? 420).ToString(@"hh\:mm");
                    ViewData["WorkHoursEnd"] = TimeSpan.FromMinutes(connectionCabint?.WorkHoursEnd ?? 1200).ToString(@"hh\:mm");
                    return View(MVC.Views.PatientManagement.Dashboard.DashboardIndex);
                }
            }


            ViewData["WorkHoursStart"] = TimeSpan.FromMinutes(420);
            ViewData["WorkHoursEnd"] = TimeSpan.FromMinutes(1200);
            return View(MVC.Views.PatientManagement.Dashboard.DashboardIndex);
        }

        [Route("~/Exceptions")]
        public async Task Exceptions() => await ExceptionalMiddleware.HandleRequestAsync(HttpContext).ConfigureAwait(false);
        
        [PageAuthorize]
        public JsonResult GetVisitsTasks(string start, string end)
        {
            var user = (UserDefinition)Authorization.UserDefinition;

            var startDate = DateTime.ParseExact(start, "yyyy-MM-dd", new CultureInfo("en-US"),
                DateTimeStyles.None);

            var endDate = DateTime.ParseExact(end, "yyyy-MM-dd", new CultureInfo("en-US"),
                DateTimeStyles.None);
            var cabinetIdActive = Request.Cookies["CabinetPreference"];

            var model = new DashboardPageModel();
            
            using (var connection = SqlConnections.NewFor<VisitsRow>())
            {
                var visitFlds = VisitsRow.Fields.As("vis");
                var patient = PatientsRow.Fields.As("ptn");
                var visitType = VisitTypesRow.Fields.As("vstt");
                var users = UserRow.Fields.As("assUsr");

                var query = new SqlQuery()
                    .From(visitFlds)
                    .Select("*")
                    .Where(~(
                    new Criteria(visitFlds.StartDate) >= startDate
                    & new Criteria(visitFlds.EndDate) <= endDate
                    & new Criteria(visitFlds.IsActive) == 1
                    & new Criteria(visitFlds.CabinetId) == int.Parse(cabinetIdActive)
                        ))
                        .LeftJoin(users, visitFlds.AssignedUserId == users.UserId)
                            .Select(users.DisplayName = visitFlds.AssignedUserName)
                        .LeftJoin(patient, visitFlds.PatientId == patient.PatientId)
                            .Select(patient.Name = visitFlds.PatientName, patient.NotifyOnChange = visitFlds.PatientNotifyOnChange)
                        .LeftJoin(visitType, visitFlds.VisitTypeId == visitType.VisitTypeId)
                            .Select(visitType.BackgroundColor = visitFlds.VisitTypeBackgroundColor, visitType.BorderColor = visitFlds.VisitTypeBorderColor)
                        ;
                


                if (!Authorization.HasPermission(PermissionKeys.Tenant))
                    query.Where(visitFlds.TenantId == user.TenantId);

                var result = connection.Query<VisitsRow>(query);

                foreach (VisitsRow visit in result)
                {
                    model.EventsList.Add(new Event
                    {
                        id = visit.VisitId ?? 0,
                        patientId = visit.PatientId ?? 0,
                        assignedToUser = visit.AssignedUserName,
                        patientAutoEmailActive = visit.PatientNotifyOnChange ?? false,
                        title = string.Join("\n",
                            string.IsNullOrEmpty(visit.PatientName)?"* " +LocalText.Get("Db.PatientManagement.Visits.FreeForReservation") + " *": visit.PatientName
                            , visit.Description),
                        start = (visit.StartDate ?? DateTime.Now).ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz"),
                        end = (visit.EndDate ?? DateTime.Now).ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz"),
                        allDay = false,
                        backgroundColor = visit.VisitTypeBackgroundColor,
                        borderColor = visit.VisitTypeBorderColor
                    });
                }
            }
            
            return Json(model.EventsList);
        }

        private bool GetAndSetActiveCabinetIdIfAny(IDbConnection connection, out int cabinetIdActive)
        {
            cabinetIdActive = 0;
            var user = (UserDefinition)Authorization.UserDefinition;

            var cabinetFlds = CabinetsRow.Fields;
            var cabinets = new List<CabinetsRow>();

            if (Authorization.HasPermission(PermissionKeys.Tenant))
                cabinets = connection.List<CabinetsRow>(cabinetFlds.IsActive == 1);
            else
                cabinets = connection.List<CabinetsRow>(cabinetFlds.TenantId == user.TenantId && cabinetFlds.IsActive == 1);

            var cabinetCookie = Request.Cookies["CabinetPreference"];
            if (string.IsNullOrEmpty(cabinetCookie))
            {
                if (!cabinets.Any())
                    return false;
                else if (cabinets.Count() == 1)
                {
                    cabinetIdActive = cabinets.FirstOrDefault().CabinetId ?? 0;

                    CookieOptions options = new CookieOptions();
                    options.Expires = DateTime.Now.AddDays(1);
                    Response.Cookies.Append("CabinetPreference", cabinets.FirstOrDefault().CabinetId.ToString(),
                        options);
                }
                else
                {

                    var reprFlds = CabinetRepresentativesRow.Fields;
                    var cabinetRepr =
                        connection.List<CabinetRepresentativesRow>(
                            reprFlds.CabinetId.In(cabinets.Select(c => c.CabinetId)) && reprFlds.UserId == user.UserId);
                    if (cabinetRepr.Any())
                    {
                        cabinetIdActive = cabinetRepr.FirstOrDefault().CabinetId ?? 0;

                        CookieOptions options = new CookieOptions();
                        options.Expires = DateTime.Now.AddDays(1);
                        Response.Cookies.Append("CabinetPreference", cabinetRepr.FirstOrDefault().CabinetId.ToString(),
                            options);
                    }
                    else
                    {
                        cabinetIdActive = cabinets.FirstOrDefault().CabinetId ?? 0;

                        CookieOptions options = new CookieOptions();
                        options.Expires = DateTime.Now.AddDays(1);
                        Response.Cookies.Append("CabinetPreference", cabinets.FirstOrDefault().CabinetId.ToString(),
                            options);
                    }
                }
            }
            else
            {
                if (!cabinets.Any())
                {
                    CookieOptions options = new CookieOptions();
                    options.Expires = DateTime.Now.AddDays(-1);
                    Response.Cookies.Append("CabinetPreference", 0.ToString(),
                        options);
                    return false;
                }

                if (cabinets.FirstOrDefault(a => a.CabinetId == Int32.Parse(cabinetCookie)) == null)
                {
                    var reprFlds = CabinetRepresentativesRow.Fields;
                    var cabinetRepr =
                        connection.List<CabinetRepresentativesRow>(
                            reprFlds.CabinetId.In(cabinets.Select(c => c.CabinetId)) && reprFlds.UserId == user.UserId);

                    if (cabinetRepr.Any())
                    {
                        cabinetIdActive = cabinetRepr.FirstOrDefault().CabinetId ?? 0;

                        CookieOptions options = new CookieOptions();
                        options.Expires = DateTime.Now.AddDays(365);
                        Response.Cookies.Append("CabinetPreference", cabinetRepr.FirstOrDefault().CabinetId.ToString(),
                            options);
                    }
                    else
                    {
                        cabinetIdActive = cabinets.FirstOrDefault().CabinetId ?? 0;

                        CookieOptions options = new CookieOptions();
                        options.Expires = DateTime.Now.AddDays(365);
                        Response.Cookies.Append("CabinetPreference", cabinets.FirstOrDefault().CabinetId.ToString(),
                            options);
                    }
                }
                else
                {
                    cabinetIdActive = Int32.Parse(cabinetCookie);
                }

            }
            return true;
        }

        public JsonResult GetTodayVisits()
        {
            var user = (UserDefinition)Authorization.UserDefinition;

            var startDate = DateTime.UtcNow.Date;
            var endDate = DateTime.UtcNow.Date.AddDays(1).AddTicks(-1);

            var connection = SqlConnections.NewFor<VisitsRow>();
            var cabinetIdActive = Request.Cookies["CabinetPreference"];

            var countVisitsForToday = 0;
            var alreadyExpired = 0;
            
            var endDateToday = DateTime.Now;

            var visitFlds = VisitsRow.Fields.As("vs");

            using (var conection = SqlConnections.NewFor<VisitsRow>())
            {
                SqlQuery query = new SqlQuery()
                    .From(visitFlds)
                    .Select(visitFlds.VisitId)
                    .Where(~(
                    new Criteria(visitFlds.StartDate) >= startDate
                    & new Criteria(visitFlds.CabinetId) == cabinetIdActive)
                    & new Criteria(visitFlds.IsActive) == 1
                    );

                if (!Authorization.HasPermission(PermissionKeys.Tenant))
                    query.Where(visitFlds.TenantId == user.TenantId);

                countVisitsForToday = connection.Query(query.Where(visitFlds.EndDate <= endDate)).Count();
                alreadyExpired = connection.Query(query.Where(visitFlds.EndDate <= endDateToday)).Count();
            }

            return Json(new { countVisitsForToday, alreadyExpired });
        }

        [Route("~/Administration/GetTenantSubscriptionEndDate")]
        public IActionResult GetTenantSubscriptionEndDate()
        {
            if (!Authorization.IsLoggedIn)
                return NotFound();

            var user = Authorization.UserDefinition as UserDefinition;
            var days = UserSubscriptionHelper.GetTenantPaidDays(user.TenantId);

            if (days <= DateTime.Now.AddDays(7) || Authorization.HasPermission(AdministrationTenantsPermissionKeys.Payments.ReadPermission))
                return Json(days);
            else
                return Json(DateTime.MinValue);
        }

        [Route("~/Administration/GetTenantRole")]
        public IActionResult GetTenantRole()
        {
            if (!Authorization.IsLoggedIn)
                return NotFound();

            var user = Authorization.UserDefinition as UserDefinition;
            var connection = SqlConnections.NewFor<UserRoleRow>();

            var userRoleFld = UserRoleRow.Fields;
            var userRoles = connection.List<UserRoleRow>(userRoleFld.UserId == user.UserId).Select(s => s.RoleId).ToList();
            var roleNames = new List<string>();
            if (userRoles.Any())
            {
                var roleFlds = RoleRow.Fields;
                roleNames = connection.List<RoleRow>(roleFlds.RoleId.In(userRoles)).Select(s => s.RoleName).ToList();
            }

            return Json(roleNames);
        }
    }

}
