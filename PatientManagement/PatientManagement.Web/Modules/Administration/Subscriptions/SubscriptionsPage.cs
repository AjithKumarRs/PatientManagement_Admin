
using System;
using System.Collections.Generic;
using System.Linq;
using PatientManagement.Administration.Entities;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.Web.Modules.Common;
using Serenity.Data;
using Serenity.Services;

namespace PatientManagement.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SubscriptionsRow))]
    public class SubscriptionsController : Controller
    {
        [Route("Administration/Subscriptions")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Subscriptions/SubscriptionsIndex.cshtml");
        }

        [Route("Administration/Subscriptions/GetPayments")]
        public JsonResult GetPayments(int subscriptionId)
        {
            
            var model = new SubscriptionPaymentsModel();
            using (var connection = SqlConnections.NewFor<PaymentsRow>())
            {
                if(!connection.ExistsById<SubscriptionsRow>(subscriptionId))
                    throw new ValidationError();

                model.SubscriptionPayedPeriod = UserSubscriptionHelper.GetTenantPaidDaysForSubscription(subscriptionId);
          
            }

            return Json(model);
        }

        public class SubscriptionPaymentsModel
        {
            public DateTime SubscriptionPayedPeriod { get; set; }
            
        }
    }
}