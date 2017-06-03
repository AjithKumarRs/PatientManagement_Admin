

using System;
using System.Collections.Generic;
using System.Linq;
using PatientManagement.Administration.Entities;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.PatientManagement.Repositories;
using PatientManagement.Web.Modules.Common.Helpers;
using Serenity.Data;
using Serenity.Services;

namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Notifications/[action]")]
    [PageAuthorize(typeof(Entities.NotificationsRow))]
    public class NotificationsController : Controller
    {
        [Route("~/Notifications")]
        public ActionResult Index()
        {
            // TODO Extend notiffications for super admins (primary tenant) with new action 

            return View("~/Modules/PatientManagement/Notifications/NotificationsIndex.cshtml");
        }
        

        [PageAuthorize]
        public JsonResult GetNotifications()
        {
            var user = (UserDefinition)Authorization.UserDefinition;

            var model = new List<NotificationsRow>();
            using (var connection = SqlConnections.NewFor<NotificationsRow>())
            {
                var listRequest = new ListRequest();

                var entities = new NotificationsRepository().List(connection, listRequest).Entities;
                model = entities;
            }
            return Json(model);
        }

        [PageAuthorize]
        public IActionResult SeenAllNotifications()
        {

            using (var connection = SqlConnections.NewFor<NotificationsRow>())
            {
               // TODO Insert every notification in userNotifications table as seen
            }
            return Ok();
        }
    }
}