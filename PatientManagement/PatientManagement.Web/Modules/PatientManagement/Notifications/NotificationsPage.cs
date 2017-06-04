

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        public IActionResult SeenAllNotifications()
        {

            using (var connection = SqlConnections.NewFor<NotificationsRow>())
            {
               // TODO Insert every notification in userNotifications table as seen
            }
            return Ok("It all looks fine mate");
        }
    }
}