

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
    [PageAuthorize(PatientManagementPermissionKeys.Notifications.PagePermission)]
    public class NotificationsController : Controller
    {
        [Route("~/Notifications")]
        public ActionResult Index()
        {
            // TODO All notifications should change to seen issue #223
           
            return View(MVC.Views.PatientManagement.Notifications.NotificationsIndex);
        }
    }
}