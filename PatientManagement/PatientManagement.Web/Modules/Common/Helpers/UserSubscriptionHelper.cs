using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using PatientManagement.Administration.Entities;
using Serenity.Data;

namespace PatientManagement.Web.Modules.Common
{
    public class UserSubscriptionHelper
    {
        public static HashSet<int> GetUserRolesIdBasedOnSubscription(int userId, int tenantId)
        {
            var fld = UserRoleRow.Fields;

            using (var connection = SqlConnections.NewByKey("Default"))
            {
                var result = new HashSet<int>();

                //TODO Restrict access when subscription is required 
                var tenantFld = TenantRow.Fields;
                var tenant = connection.First<TenantRow>(tenantFld.TenantId == tenantId);
                if (tenant?.SubscriptionRequired != null && tenant.SubscriptionRequired.Value)
                {
                    // We check if the tenant have active subscription
                    var subsFld = SubscriptionsRow.Fields;
                    var subscriptions =
                        connection.List<SubscriptionsRow>(subsFld.TenantId == tenantId);

                    if (subscriptions.Any() && subscriptions.Any(s => s.IsActive == 1))//subscription.SubscriptionEndDate >= DateTime.Now)
                    {
                        //TODO Check user payments here 

                        var offersFld = OffersRow.Fields;
                        var offers = connection.List<OffersRow>(offersFld.OfferId.In(subscriptions.Select(s => s.OfferId)));
                        offers.ForEach(o =>
                        {
                            // Add roles from offers
                            result.Add(o.RoleId ?? 3);
                        });
                    }
                    else
                    {
                        // TODO Don't use this shit like number! 3 = Expired role 
                        result.Add(3);

                        // Return expired role
                        return result;
                    }
                }
                else
                {
                    // All looks fine, get current user roles 

                    // TODO: Clean this code and keep it simple stupid 
                    connection.List<UserRoleRow>(q => q
                            .Select(fld.RoleId)
                            .Where(new Criteria(fld.UserId) == userId))
                        .ForEach(x => result.Add(x.RoleId.Value));
                }



                return result;
            }
        }


        public static DateTime GetTenantPaidDays(int tenantId)
        {
            var connection = SqlConnections.NewFor<TenantRow>();

            var subscriptionId = connection.ById<TenantRow>(tenantId).SubscriptionId;
            if (subscriptionId != null)
                return GetTenantPaidDaysForSubscription((int) subscriptionId);
            else
                return DateTime.MinValue;
        }


        public static DateTime GetTenantPaidDaysForSubscription(int subscriptionId)
        {
            var paymentsFlds = PaymentsRow.Fields;
            var connection = SqlConnections.NewFor<PaymentsRow>();

            var subscriptions = connection.ById<SubscriptionsRow>(subscriptionId);
            var payments = connection.List<PaymentsRow>(paymentsFlds.SubscriptionId == subscriptionId);

            var offer = connection.ById<OffersRow>(subscriptions.OfferId);
            var activatedDate = subscriptions.ActivatedOn ?? DateTime.MinValue;

            if (!payments.Any() && offer.MaximumSubscriptionTime != null)
            {
                return activatedDate.AddMonths(offer.MaximumSubscriptionTime ?? 0);
            }
            else
            {
                var payDays = 0;
                foreach (var payment in payments)
                {
                    payDays += connection.ById<PaymentOptionsRow>(payment.PaymentOptionId).Months ?? 0;
                }
                return activatedDate.AddMonths(payDays);

            }
        }
    }
}
