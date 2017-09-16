
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Microsoft.AspNetCore.Http;
using PatientManagement.Administration;
using PatientManagement.Administration.Entities;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.Dashboard;
using PatientManagement.PatientManagement.Repositories;

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
            var cabinetCookie = Request.Cookies["CabinetPreference"];
            if (!string.IsNullOrEmpty(cabinetCookie))
            {
                var connection = SqlConnections.NewFor<CabinetsRow>();
                var connectionCabint = connection.ById<CabinetsRow>(cabinetCookie);
                ViewData["CabinetHeaderName"] = connectionCabint?.Name;

            }
            //ViewData["WorkHoursStart"] = TimeSpan.FromMinutes(tenant.WorkHoursStart??420);
            //ViewData["WorkHoursEnd"] = TimeSpan.FromMinutes(tenant.WorkHoursEnd ?? 1200);
            ViewData["WorkHoursStart"] = TimeSpan.FromMinutes( 420);
            ViewData["WorkHoursEnd"] = TimeSpan.FromMinutes(1200);
            return View(MVC.Views.PatientManagement.Dashboard.DashboardIndex);
        }


        [PageAuthorize]
        public JsonResult GetVisitsTasks(string start, string end)
        {
            var user = (UserDefinition)Authorization.UserDefinition;

            var startDate = DateTime.ParseExact(start, "yyyy-MM-dd", new CultureInfo("en-US"),
                DateTimeStyles.None);

            var endDate = DateTime.ParseExact(end, "yyyy-MM-dd", new CultureInfo("en-US"),
                DateTimeStyles.None);

            var model = new DashboardPageModel();
            var connection = SqlConnections.NewFor<VisitsRow>();

            var cabinetFlds = CabinetsRow.Fields;
            var cabinets = new List<CabinetsRow>();


            if (Authorization.HasPermission(PermissionKeys.Tenants))
                cabinets = connection.List<CabinetsRow>(cabinetFlds.IsActive == 1);
            else
                cabinets = connection.List<CabinetsRow>(cabinetFlds.TenantId == user.TenantId && cabinetFlds.IsActive == 1);

            var cabinetCookie = Request.Cookies["CabinetPreference"];
            var cabinetIdActive = 0;
            if (string.IsNullOrEmpty(cabinetCookie))
            {
                if (!cabinets.Any())
                    return Json(model);
                else if (cabinets.Count() == 1)
                {
                    cabinetIdActive = cabinets.FirstOrDefault().CabinetId ?? 0;

                    CookieOptions options = new CookieOptions();
                    options.Expires = DateTime.Now.AddDays(365);
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
            }
            else
            {
                if (!cabinets.Any())
                {
                    CookieOptions options = new CookieOptions();
                    options.Expires = DateTime.Now.AddDays(-1);
                    Response.Cookies.Append("CabinetPreference", 0.ToString(),
                        options);
                    return Json(model);
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

            List<VisitsRow> entity = new List<VisitsRow>();

            if (Authorization.HasPermission(PermissionKeys.Tenants))
                entity = connection.List<VisitsRow>()
                    .Where(e => e.StartDate >= startDate && e.EndDate <= endDate && e.CabinetId == cabinetIdActive)
                    .ToList();
            else
                entity = connection.List<VisitsRow>()
                    .Where(e => e.StartDate >= startDate && e.EndDate <= endDate && e.CabinetId == cabinetIdActive && e.TenantId == user.TenantId)
                    .ToList();


            foreach (var visit in entity)
            {
                var patient = connection.ById<PatientsRow>(visit.PatientId);
                var visitType = connection.ById<VisitTypesRow>(visit.VisitTypeId);
                model.EventsList.Add(new Event
                {
                    id = visit.VisitId ?? 0,
                    patientId = visit.PatientId ?? 0,
                    patientAutoEmailActive = patient.NotifyOnChange??false,
                    title = patient.Name + "\n" + visit.Description,
                    start = (visit.StartDate ?? DateTime.Now).ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz"),
                    end = (visit.EndDate ?? DateTime.Now).ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz"),
                    allDay = false,
                    backgroundColor = visitType.BackgroundColor,
                    borderColor = visitType.BorderColor
                });
            }
            return Json(model.EventsList);
        }
    }

}
