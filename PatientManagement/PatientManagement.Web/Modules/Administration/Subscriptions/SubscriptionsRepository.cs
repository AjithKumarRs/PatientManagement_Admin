

using System.Linq;
using MVC;
using PatientManagement.Administration.Entities;
using PatientManagement.Web.Modules.Common;

namespace PatientManagement.Administration.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.SubscriptionsRow;

    public class SubscriptionsRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {

            protected override void BeforeSave()
            {
                base.AfterSave();

                var user = (UserDefinition)Authorization.UserDefinition;

                if (Row.IsActive == 1)
                {
                    if (Row.ActivatedOn == null)
                        Row.ActivatedOn = DateTime.Now;
                    
                    var tmp = Connection.List<MyRow>().Where(p => p.IsActive == 1 && p.TenantId == user.TenantId);

                    foreach (var subscriptionsRow in tmp)
                    {
                        subscriptionsRow.IsActive = 0;
                        subscriptionsRow.DeactivatedOn = DateTime.Now;
                        Connection.UpdateById(subscriptionsRow);
                    }
                }

                if (IsUpdate)
                {
                    if (Row.IsActive == 0)
                    {
                        Row.DeactivatedOn = DateTime.Now;
                    }
                }
            }

            protected override void AfterSave()
            {
                base.AfterSave();

                if (IsCreate || IsUpdate)
                {
                    var user = (UserDefinition)Authorization.UserDefinition;

                    if (Row.IsActive == 1)
                    {
                        var tenantFld = TenantRow.Fields;
                        var tenant = Connection.First<TenantRow>(tenantFld.TenantId == user.TenantId);
                        tenant.SubscriptionId = Row.SubscriptionId;
                        Connection.UpdateById(tenant);
                        
                        var offerRole = Connection.ById<OffersRow>(Row.OfferId).RoleId;
                        
                        var userRoleFld = UserRoleRow.Fields;
                        var userRoles = Connection.First<UserRoleRow>(userRoleFld.UserId == user.UserId);
                        userRoles.RoleId = offerRole;
                        Connection.UpdateById(userRoles);

                    }
                }
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            protected override void OnReturn()
            {
                base.OnReturn();

                Response.Entity.PaidPeriod = UserSubscriptionHelper.GetTenantPaidDaysForSubscription((int)Row.SubscriptionId);

            }
        }


        private class MyListHandler : ListRequestHandler<MyRow>
        {
            protected override void OnReturn()
            {
                base.OnReturn();

                foreach (var subscriptionsRow in Response.Entities)
                {
                    subscriptionsRow.PaidPeriod = UserSubscriptionHelper.GetTenantPaidDaysForSubscription((int)subscriptionsRow.SubscriptionId);
                }
            }
        }
    }
}