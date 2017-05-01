
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
            var cachedModel = TwoLevelCache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromSeconds(30),
                VisitsRow.Fields.GenerationKey, () =>
                {
                    var model = new DashboardPageModel();
                    var v = VisitsRow.Fields;
                    using (var connection = SqlConnections.NewFor<VisitsRow>())
                    {
                        try
                        {
                            var entity = connection.List<VisitsRow>();
                            foreach (var visit in entity)
                            {
                                model.EventsList.Add(new Event
                                {
                                    id = visit.VisitId??0,
                                    title = connection.ById<PatientsRow>(visit.PatientId).Name,
                                    start = visit.StartDate?.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ssZ"),
                                    end = visit.EndDate?.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ssZ"),
                                    allDay = false,
                                    backGroundColor = "#FF0000",
                                    borderColor = "#00FF00"
                                });
                            }
                        }
                        catch (Exception e)
                        {
                            throw;
                        }
                       
                    
                        return model;
                    }
                }
            );
            return View(MVC.Views.PatientManagement.Dashboard.DashboardIndex, cachedModel);
        }
    }
}
