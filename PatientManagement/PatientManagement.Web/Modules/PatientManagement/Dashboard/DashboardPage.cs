
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
            var startDate = DateTime.ParseExact(start, "yyyy-MM-dd", new CultureInfo("en-US"),
                DateTimeStyles.None);

            var endDate = DateTime.ParseExact(end, "yyyy-MM-dd", new CultureInfo("en-US"),
                DateTimeStyles.None);
            var cabinetIdActive = Request.Cookies["CabinetPreference"];

            var model = new DashboardPageModel();
            using (var connection = SqlConnections.NewFor<VisitsRow>())
            {
                var visitFlds = VisitsRow.Fields.As("vis");
                var listRequest = new ListCriteriaStartDateEndDateRequest();
                listRequest.StartDate = startDate;
                listRequest.EndDate = endDate;
                listRequest.CabinetId = int.Parse(cabinetIdActive);
                var result = new VisitsRepository().ListCriteriaStartDateEndDate(connection, listRequest).Entities;

                foreach (VisitsRow visit in result)
                {

                    var eventOriginal = new Event
                    {
                        id = visit.VisitId ?? 0,
                        patientId = visit.PatientId ?? 0,
                        assignedToUser = visit.AssignedUserName,
                        patientAutoEmailActive = visit.PatientNotifyOnChange ?? false,
                        title = string.Join("\n",
                            string.IsNullOrEmpty(visit.PatientName)
                                ? "* " + LocalText.Get("Db.PatientManagement.Visits.FreeForReservation") + " *"
                                : visit.PatientName
                            , visit.Description),
                        start = (visit.StartDate ?? DateTime.Now).ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz"),
                        end = (visit.EndDate ?? DateTime.Now).ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz"),
                        allDay = false,
                        backgroundColor = visit.VisitTypeBackgroundColor,
                        borderColor = visit.VisitTypeBorderColor
                    };


                    if (visit.RepeatTimes.HasValue && visit.RepeatTimes.Value > 0 && visit.RepeatPeriod.HasValue)
                    {
                        if (visit.RepeatUntilEndDate != null)
                            eventOriginal.title +=
                                LocalText.Get(Texts.Site.Visits.VisitWillRepeatUntilInCalendarDescription) +
                                visit.RepeatUntilEndDate.Value.ToString(DateHelper.CurrentDateFormat);


                        if (visit.StartDate < endDate && visit.EndDate > startDate)
                           model.EventsList.Add(eventOriginal);
                        
                        for (int counter = 1; counter <= visit.RepeatTimes.Value; counter++)
                        {
                            var startDateRepeat = visit.StartDate.Value;
                            var endDateRepeat = visit.EndDate.Value;
                            switch (visit.RepeatPeriod.Value)
                            {
                                case RepeatPeriod.Day:
                                    startDateRepeat = startDateRepeat.AddDays(counter);
                                    endDateRepeat = endDateRepeat.AddDays(counter);
                                    break;
                                case RepeatPeriod.Week:
                                    startDateRepeat = startDateRepeat.AddDays((counter) * 7);
                                    endDateRepeat = endDateRepeat.AddDays((counter) * 7);
                                    break;
                                case RepeatPeriod.Month:
                                    startDateRepeat = startDateRepeat.AddMonths(counter);
                                    endDateRepeat = endDateRepeat.AddMonths(counter);
                                    break;
                                case RepeatPeriod.Year:
                                    startDateRepeat = startDateRepeat.AddYears(counter);
                                    endDateRepeat = endDateRepeat.AddYears(counter);
                                    break;
                            }

                            if(startDateRepeat > endDate || endDateRepeat < startDate )
                                continue;
                            

                            var eventRepeated = new Event
                            {
                                id = visit.VisitId ?? 0,
                                patientId = visit.PatientId ?? 0,
                                assignedToUser = visit.AssignedUserName,
                                patientAutoEmailActive = visit.PatientNotifyOnChange ?? false,
                                title = string.Join("\n",
                                    string.IsNullOrEmpty(visit.PatientName)
                                        ? "* " + LocalText.Get("Db.PatientManagement.Visits.FreeForReservation") + " *"
                                        : visit.PatientName
                                    , visit.Description
                                    ),
                                start = (startDateRepeat).ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz"),
                                end = (endDateRepeat).ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz"),
                                allDay = false,
                                backgroundColor = visit.VisitTypeBackgroundColor,
                                borderColor = visit.VisitTypeBorderColor,
                                isRepeated = true,
                                repeatCounter =  counter
                            };
                            eventRepeated.title +=
                                LocalText.Get(Texts.Site.Visits.VisitRepeatCounterInCalendarDescription.Key) + " " +counter;
                            model.EventsList.Add(eventRepeated);

                        }
                    }
                    else
                    {
                        model.EventsList.Add(eventOriginal);

                    }
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
            var startDate = DateTime.UtcNow.Date;
            var endDate = DateTime.UtcNow.Date.AddDays(2).AddTicks(-1);
            
            var countVisitsForToday = 0;
            var alreadyExpired = 0;

            var endDateToday = DateTime.Now;

            var visitsForToday = (List<Event>)GetVisitsTasks(startDate.ToString("yyyy-MM-dd"), endDate.ToString("yyyy-MM-dd")).Value;
            
            countVisitsForToday = visitsForToday.Where(v =>
            {
                DateTime temp = DateTime.MinValue;
                DateTime.TryParseExact(v.end, "yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz", CultureInfo.InvariantCulture, DateTimeStyles.None, out temp);
                return temp <= endDate;
            }).Count();

            alreadyExpired = visitsForToday.Where(v =>
            {
                DateTime temp = DateTime.MinValue;
                DateTime.TryParseExact(v.end, "yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz", CultureInfo.InvariantCulture, DateTimeStyles.None, out temp);
                return temp <= endDateToday;
            }).Count();
            
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
