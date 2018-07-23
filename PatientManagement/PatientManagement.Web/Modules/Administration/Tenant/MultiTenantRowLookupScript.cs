﻿
using System.Linq;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.PatientManagement.Repositories;
using Serenity.Services;

namespace PatientManagement.PatientManagement.Scripts
{
    using Administration;
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System;

    public class MultiTenantRowLookupScript<TRow> :
        RowLookupScript<TRow>
        where TRow : Row, IMultiTenantRow, new()
    {
        public MultiTenantRowLookupScript()
        {
            Expiration = TimeSpan.FromTicks(1);
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            AddTenantFilter(query);

            var user = (UserDefinition)Authorization.UserDefinition;
            query.SetParam("@LogedUser", user.Id);
        }

        protected void AddTenantFilter(SqlQuery query)
        {
            var r = new TRow();

            if (!Authorization.HasPermission(PermissionKeys.Tenant))
                query.Where(r.TenantIdField ==
                        ((UserDefinition)Authorization.UserDefinition).TenantId);

            var user = (UserDefinition)Authorization.UserDefinition;

            if (user.RestrictedToCabinets == 1 && (this.ScriptName.Contains("PatientManagement.Visits")) || this.ScriptName.Contains("PatientManagement.Cabinets"))
            {
                using (var connection = SqlConnections.NewFor<CabinetRepresentativesRow>())
                {
                    var listRequest = new ListRequest();
                    listRequest.Criteria = new Criteria(CabinetRepresentativesRow.Fields.UserId.Name) == user.Id;
                    listRequest.ColumnSelection = ColumnSelection.Details;

                    var cabinets = new CabinetRepresentativesRepository().List(connection, listRequest).Entities;
                    if (!cabinets.Any())
                        return;

                    query.Where(CabinetsRow.Fields.CabinetId.In(cabinets.Select(c => c.CabinetId.Value)));

                }
            }
        }

        public override string GetScript()
        {
            return TwoLevelCache.GetLocalStoreOnly("MultiTenantLookup:" +
                                                   this.ScriptName + ":" +
                                                   ((UserDefinition)Authorization.UserDefinition).TenantId,
                TimeSpan.FromMinutes(15),
                new TRow().GetFields().GenerationKey, () =>
                {
                    return base.GetScript();
                });
        }
    }
}
