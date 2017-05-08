
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
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
            return View(MVC.Views.PatientManagement.Dashboard.DashboardIndex);
        }


        [PageAuthorize]
        public JsonResult GetVisitsTasks(string start, string end)
        {
            var user = (UserDefinition)Authorization.UserDefinition;

            var connection = SqlConnections.NewFor<VisitsRow>();
            var startDate = DateTime.ParseExact(start, "yyyy-MM-dd", new CultureInfo("en-US"),
                DateTimeStyles.None);

            var endDate = DateTime.ParseExact(end, "yyyy-MM-dd", new CultureInfo("en-US"),
                DateTimeStyles.None);

            var model = new DashboardPageModel();
            List<VisitsRow> entity = connection.List<VisitsRow>()
                .Where(e => e.StartDate >= startDate && e.EndDate <= endDate && e.TenantId == user.TenantId)
                .ToList();

            foreach (var visit in entity)
            {
                model.EventsList.Add(new Event
                {
                    id = visit.VisitId ?? 0,
                    patientId = visit.PatientId ?? 0,
                    title = connection.ById<PatientsRow>(visit.PatientId).Name,
                    start = (visit.StartDate ?? DateTime.Now).ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz"),
                    end = (visit.EndDate ?? DateTime.Now).ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz"),
                    allDay = false,
                    backgroundColor = connection.ById<VisitTypesRow>(visit.VisitTypeId).BackgroundColor,
                    borderColor = connection.ById<VisitTypesRow>(visit.VisitTypeId).BorderColor
                });
            }
            return Json(model.EventsList);
        }
    }

}
