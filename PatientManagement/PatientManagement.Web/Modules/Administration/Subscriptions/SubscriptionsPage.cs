
using System.Linq;
using PatientManagement.Administration.Entities;
using PatientManagement.Web.Modules.Common;
using Serenity.Data;

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

        [Route("Administration/GetTenantSubscriptionEndDate")]
        public IActionResult GetTenantSubscriptionEndDate()
        {
            if (!Authorization.IsLoggedIn)
                return NotFound();

            var user = Authorization.UserDefinition as UserDefinition;
            var days = UserSubscriptionHelper.GetTenantPaidDays(user.TenantId);

            return Json(days);
        }

        [Route("Administration/GetTenantRole")]
        public IActionResult GetTenantRole()
        {
            if (!Authorization.IsLoggedIn)
                return NotFound();

            var user = Authorization.UserDefinition as UserDefinition;
            var roles = UserSubscriptionHelper.GetUserRolesIdBasedOnSubscription(user.UserId, user.TenantId);
            var roleName = "";
            if(roles.Any())
            using (var connection = SqlConnections.NewFor<RoleRow>())
                roleName = connection.ById<RoleRow>(roles.First()).RoleName;

            return Json(roleName);
        }
    }
}