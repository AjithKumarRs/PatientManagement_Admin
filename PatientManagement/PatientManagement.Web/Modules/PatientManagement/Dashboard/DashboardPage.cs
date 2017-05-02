
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
        public JsonResult GetVisitsTasks()
        {
            var cachedModel = TwoLevelCache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromSeconds(30),
                VisitsRow.Fields.GenerationKey, () =>
                {
                    var model = new DashboardPageModel();
                    using (var connection = SqlConnections.NewFor<VisitsRow>())
                    {
                        var entity = connection.List<VisitsRow>();
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
                                backGroundColor = "#FF0000",
                                borderColor = "#00FF00"
                            });
                        }

                        return model;
                    }
                }
            );
            return Json(cachedModel.EventsList);
        }
    }

}
