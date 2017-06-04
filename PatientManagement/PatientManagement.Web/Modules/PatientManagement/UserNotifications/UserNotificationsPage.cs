

using System;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.PatientManagement.Repositories;
using Serenity.Data;
using Serenity.Services;

namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.UserNotificationsRow))]
    public class UserNotificationsController : Controller
    {
        [Route("PatientManagement/UserNotifications")]
        public ActionResult Index()
        {
            return View("~/Modules/PatientManagement/UserNotifications/UserNotificationsIndex.cshtml");
        }
        
    }
}