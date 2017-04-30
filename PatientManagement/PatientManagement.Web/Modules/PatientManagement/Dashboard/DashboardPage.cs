
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
                        var entity = connection.List<VisitsRow>();
                        foreach (var visit in entity)
                        {
                            model.EventsList.Add(new Event
                            {
                                Title = "",
                                start = visit.StartDate??DateTime.MinValue,
                                end = visit.EndDate??DateTime.MinValue,
                                AllDay = false,
                                BackGroundColor = "#FF0000",
                                BorderColor = "#00FF00"
                            });
                        }
                    
                        return model;
                    }
                }
            );
            return View(MVC.Views.PatientManagement.Dashboard.DashboardIndex, cachedModel);
        }
    }
}
