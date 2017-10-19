

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
        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyUndeleteHandler().Process(uow, request);
        }
        private class MyUndeleteHandler : UndeleteRequestHandler<MyRow> { }
        private class MySaveHandler : SaveRequestHandler<MyRow>
        {

            protected override void BeforeSave()
            {
                base.BeforeSave();
                
                if (IsCreate)
                {
                    if (Row.Enabled == 1)
                    {
                        Row.FreeDaysFromOffer = Connection.ById<OffersRow>(Row.OfferId ?? 0).MaximumSubscriptionTime??0;

                        if (Row.ActivatedOn == null)
                            Row.ActivatedOn = DateTime.Now;

                        var tmp = Connection.List<MyRow>().Where(p => p.Enabled == 1 && p.TenantId == Row.TenantId);

                        foreach (var subscriptionsRow in tmp)
                        {
                            subscriptionsRow.Enabled = 0;

                            if (subscriptionsRow.DeactivatedOn == null)
                                subscriptionsRow.DeactivatedOn = DateTime.Now;

                            Connection.UpdateById(subscriptionsRow);
                        }
                    }
                }
                else 
                {
                    if (Row.Enabled == 1)
                    {
                        if (Row.ActivatedOn == null)
                            Row.ActivatedOn = DateTime.Now;

                        var tmp = Connection.List<MyRow>().Where(p => p.Enabled == 1 && p.TenantId == Row.TenantId);

                        foreach (var subscriptionsRow in tmp)
                        {
                            subscriptionsRow.Enabled = 0;

                            if (subscriptionsRow.DeactivatedOn == null)
                                subscriptionsRow.DeactivatedOn = DateTime.Now;

                            Connection.UpdateById(subscriptionsRow);
                        }
                    }
                }
                
            }

            protected override void AfterSave()
            {
                base.AfterSave();

                if (IsCreate || IsUpdate)
                {
                    if (Authorization.HasPermission(PermissionKeys.Tenants))
                        return;

                    var user = (UserDefinition)Authorization.UserDefinition;

                    if (Row.Enabled == 1)
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

                        UserRetrieveService.RemoveCachedUser(user.UserId, user.Username);

                    }
                }
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            protected override void OnBeforeDelete()
            {
                base.OnBeforeDelete();

                if (Row.Enabled == 1)
                {
                    throw new ArgumentException(Texts.Site.Subscriptions.DeleteActiveSubscriptionError);
                }
            }
        }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            
        }


        private class MyListHandler : ListRequestHandler<MyRow>
        {
        }
    }
}