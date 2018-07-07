using System;
using Microsoft.Rest;
using PatientManagement.Administration;
using PatientManagement.Administration.Entities;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.Web.Modules.Common;
using Serenity;
using Serenity.Data;
using Serenity.Services;

namespace PatientManagement
{
    public class MultiTenantBehavior : IImplicitBehavior,
        ISaveBehavior, IDeleteBehavior,
        IListBehavior, IRetrieveBehavior
    {
        private Int32Field fldTenantId;

        public bool ActivateFor(Row row)
        {
            var mt = row as IMultiTenantRow;
            if (mt == null)
                return false;

            fldTenantId = mt.TenantIdField;
            return true;
        }

        public void OnPrepareQuery(IRetrieveRequestHandler handler,
            SqlQuery query)
        {
            var user = (UserDefinition)Authorization.UserDefinition;
            if (!Authorization.HasPermission(PermissionKeys.Tenant))
                query.Where(fldTenantId == user.TenantId);
        }

        public void OnPrepareQuery(IListRequestHandler handler,
            SqlQuery query)
        {
            var user = (UserDefinition)Authorization.UserDefinition;
            if (!Authorization.HasPermission(PermissionKeys.Tenant))
                query.Where(fldTenantId == user.TenantId);
        }

        public void OnSetInternalFields(ISaveRequestHandler handler)
        {
            if (handler.IsCreate)
                fldTenantId[handler.Row] =
                ((UserDefinition)Authorization
                    .UserDefinition).TenantId;
        }

        public void OnValidateRequest(ISaveRequestHandler handler)
        {
            if (handler.IsUpdate)
            {
                var user = (UserDefinition)Authorization.UserDefinition;
                if (fldTenantId[handler.Old] != fldTenantId[handler.Row])
                    Authorization.ValidatePermission(PermissionKeys.Tenant);
            }
        }

        public void OnValidateRequest(IDeleteRequestHandler handler)
        {
            var user = (UserDefinition)Authorization.UserDefinition;
            if (fldTenantId[handler.Row] != user.TenantId)
                Authorization.ValidatePermission(PermissionKeys.Tenant);
        }

        public void OnAfterDelete(IDeleteRequestHandler handler) { }
        public void OnAfterExecuteQuery(IRetrieveRequestHandler handler) { }
        public void OnAfterExecuteQuery(IListRequestHandler handler) { }
        public void OnAfterSave(ISaveRequestHandler handler) { }
        public void OnApplyFilters(IListRequestHandler handler, SqlQuery query) { }
        public void OnAudit(IDeleteRequestHandler handler) { }
        public void OnAudit(ISaveRequestHandler handler) { }
        public void OnBeforeDelete(IDeleteRequestHandler handler) { }
        public void OnBeforeExecuteQuery(IRetrieveRequestHandler handler) { }
        public void OnBeforeExecuteQuery(IListRequestHandler handler) { }

        public void OnBeforeSave(ISaveRequestHandler handler)
        {
            if (Authorization.HasPermission(PermissionKeys.Tenant))
                return;

            if (handler.Row is PaymentsRow
                || handler.Row is SubscriptionsRow
                || handler.Row is  PaymentsDetailsRow)
                {
                    return;
                }
            var user = (UserDefinition)Authorization.UserDefinition;

            var tenantFld = TenantRow.Fields;
            var connection = SqlConnections.NewFor<TenantRow>();
            var tenant = connection.First<TenantRow>(tenantFld.TenantId == user.TenantId);

            if (tenant?.SubscriptionRequired != null && tenant.SubscriptionRequired.Value &&
                UserSubscriptionHelper.GetTenantPaidDays(user.TenantId) < DateTime.Now)
            {
                throw new ValidationException(Texts.Site.Subscriptions.Expired.SubscriptionInfoBoxHeader);
            }
        }
        public void OnPrepareQuery(IDeleteRequestHandler handler, SqlQuery query) { }
        public void OnPrepareQuery(ISaveRequestHandler handler, SqlQuery query) { }
        public void OnReturn(IDeleteRequestHandler handler) { }
        public void OnReturn(IRetrieveRequestHandler handler) { }
        public void OnReturn(IListRequestHandler handler) { }
        public void OnReturn(ISaveRequestHandler handler) { }
        public void OnValidateRequest(IRetrieveRequestHandler handler) { }
        public void OnValidateRequest(IListRequestHandler handler) { }
    }
}
