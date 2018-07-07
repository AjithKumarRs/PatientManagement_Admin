using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using PatientManagement.Administration;
using PatientManagement.Administration.Entities;
using PatientManagement.PatientManagement.Entities;
using Serenity;
using Serenity.Data;

namespace PatientManagement.Web.Modules.Common
{
    public class UserSubscriptionHelper
    {
      
        public static DateTime GetTenantPaidDays(int tenantId)
        {
            var connection = SqlConnections.NewFor<SubscriptionsRow>();

            var tenant = connection.ById<TenantRow>(tenantId);
            if (!tenant.SubscriptionRequired.Value)
            {
                return DateTime.MinValue;
            }

            var subsFlds = SubscriptionsRow.Fields;
            var subscriptionId = connection.TryFirst<SubscriptionsRow>(subsFlds.TenantId == tenantId && subsFlds.Enabled == 1);
            if (subscriptionId != null)
                return GetTenantPaidDaysForSubscription((int)subscriptionId.SubscriptionId);
            else
                return DateTime.MinValue;
        }



        public static DateTime GetTenantPaidDaysForSubscription(int subscriptionId)
        {
            using (var connection = SqlConnections.NewFor<PaymentsRow>())
            {
                var subscriptions = connection.ById<SubscriptionsRow>(subscriptionId);
                var activatedDate = subscriptions.ActivatedOn ?? DateTime.MinValue;

                var pf = PaymentsRow.Fields.As("payments");
                var payments = connection.Query<short>(new SqlQuery()
                    .From(pf)
                    .Select(pf.MonthsPayed)
                    .Where(~(
                    new Criteria(pf.MonthsPayed).IsNotNull()
                        & new Criteria(pf.SubscriptionId) == subscriptionId
                           & new Criteria(pf.PaymentStatus) == (int)PaymentStatus.Success)));


                if (!payments.Any())
                    return activatedDate.AddDays(subscriptions.FreeDaysFromOffer ?? 0);
                else
                {
                    var payedMoths = 0;
                    payments.ToList().ForEach(p => payedMoths += p);

                    activatedDate = activatedDate.AddDays(subscriptions.FreeDaysFromOffer ?? 0);

                    return activatedDate.AddMonths(payedMoths);
                }
            }
        }

        public static int GetTenantMaximumVisits()
        {
            var user = (UserDefinition)Serenity.Authorization.UserDefinition;
            using (var uow = new UnitOfWork(SqlConnections.NewFor<OffersRow>()))
            {
                var tenant = uow.Connection.ById<TenantRow>(user.TenantId);
                if (!tenant.SubscriptionRequired.Value || Authorization.HasPermission(PermissionKeys.Tenant))
                {
                    return Int32.MaxValue;
                }

                var subscriptions = uow.Connection.ById<SubscriptionsRow>(tenant.SubscriptionId);

                return uow.Connection.ById<OffersRow>(subscriptions.OfferId).MaximumVisitsPerTenant ?? Int32.MaxValue;
            }
        }


        public static int GetTenantMaximumPatients()
        {
            var user = (UserDefinition)Serenity.Authorization.UserDefinition;
            using (var uow = new UnitOfWork(SqlConnections.NewFor<OffersRow>()))
            {
                var tenant = uow.Connection.ById<TenantRow>(user.TenantId);
                if (!tenant.SubscriptionRequired.Value || Authorization.HasPermission(PermissionKeys.Tenant))
                {
                    return Int32.MaxValue;
                }

                var subscriptions = uow.Connection.ById<SubscriptionsRow>(tenant.SubscriptionId);

                return uow.Connection.ById<OffersRow>(subscriptions.OfferId).MaximumPatientsPerTenant ?? Int32.MaxValue;
            }
        }
        public static int GetTenantMaximumUsers()
        {
            var user = (UserDefinition)Serenity.Authorization.UserDefinition;
            using (var uow = new UnitOfWork(SqlConnections.NewFor<OffersRow>()))
            {
                var tenant = uow.Connection.ById<TenantRow>(user.TenantId);
                if (!tenant.SubscriptionRequired.Value || Authorization.HasPermission(PermissionKeys.Tenant))
                {
                    return Int32.MaxValue;
                }

                var subscriptions = uow.Connection.ById<SubscriptionsRow>(tenant.SubscriptionId);

                return uow.Connection.ById<OffersRow>(subscriptions.OfferId).MaximumUsersPerTenant ?? Int32.MaxValue;
            }
        }


        public static int GetTenantMaximumCabinets()
        {
            var user = (UserDefinition)Serenity.Authorization.UserDefinition;
            using (var uow = new UnitOfWork(SqlConnections.NewFor<OffersRow>()))
            {
                var tenant = uow.Connection.ById<TenantRow>(user.TenantId);
                if (!tenant.SubscriptionRequired.Value || Authorization.HasPermission(PermissionKeys.Tenant))
                {
                    return Int32.MaxValue;
                }


                var subscriptions = uow.Connection.ById<SubscriptionsRow>(tenant.SubscriptionId);

                return uow.Connection.ById<OffersRow>(subscriptions.OfferId).MaximumCabinets ?? Int32.MaxValue;
            }
        }

    }
}
