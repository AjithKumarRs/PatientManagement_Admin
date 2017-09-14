
using Serenity.Data.Mapping;

namespace PatientManagement.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Tenant")]
    [BasedOnRow(typeof(Entities.TenantRow))]
    public class TenantForm
    {
        public String TenantName { get; set; }

        public String TenantImage { get; set; }

        public String TenantWebSite { get; set; }

        public Int32 CurrencyId { get; set; }
        public Int64 SubscriptionId { get; set; }
        public Boolean SubscriptionRequired { get; set; }
    }
}