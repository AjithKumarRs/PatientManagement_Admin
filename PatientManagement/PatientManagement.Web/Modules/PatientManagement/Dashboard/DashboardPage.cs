
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
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
            var user = (UserDefinition)Serenity.Authorization.UserDefinition;
            var connection = SqlConnections.NewFor<TenantRow>();
            var tenant = connection.ById<TenantRow>(user.TenantId);
            
            ViewData["WorkHoursStart"] = TimeSpan.FromMinutes(tenant.WorkHoursStart??420);
            ViewData["WorkHoursEnd"] = TimeSpan.FromMinutes(tenant.WorkHoursEnd ?? 1200);

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
            List<VisitsRow> entity = connection.List<VisitsRow>()
                .Where(e => e.StartDate >= startDate && e.EndDate <= endDate && e.TenantId == user.TenantId)
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
