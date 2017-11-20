

using PatientManagement.Web.Modules.Administration.Offers;

namespace PatientManagement.PatientManagement.Scripts
{
    using Administration;
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    public class OfferRowLookupScript<TRow> :
        RowLookupScript<TRow>
        where TRow : Row, IOfferRow, new()
    {
        public OfferRowLookupScript()
        {
            Expiration = TimeSpan.FromTicks(1);
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            var r = new TRow();

            query.Where( r.Enabled == 1);
            if (!Authorization.HasPermission(PermissionKeys.Tenants))
                query.Where(r.IsPublic == 1);

        }

        public override string GetScript()
        {
            return TwoLevelCache.GetLocalStoreOnly("OfferRowLookup:" +
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
