﻿
namespace PatientManagement.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Tenant")]
    [BasedOnRow(typeof(Entities.TenantRow))]
    public class TenantColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TenantId { get; set; }
        [EditLink]
        public String TenantName { get; set; }
        public Int32 CurrencyId { get; set; }
        public String CurrencyName { get; set; }

        public Boolean SubscriptionRequired { get; set; }
        public Int64 SubscriptionName { get; set; }

        public String TenantWebSite { get; set; }

        public String InsertUserName { get; set; }
        [DisplayFormat("dd/MM/yyyy HH:mm")]
        public DateTime InsertDate { get; set; }
        public String UpdateUserName { get; set; }
        [DisplayFormat("dd/MM/yyyy HH:mm")]
        public DateTime UpdateDateField { get; set; }
    }
}