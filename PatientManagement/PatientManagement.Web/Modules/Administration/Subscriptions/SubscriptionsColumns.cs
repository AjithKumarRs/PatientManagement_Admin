
namespace PatientManagement.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Subscriptions")]
    [BasedOnRow(typeof(Entities.SubscriptionsRow))]
    public class SubscriptionsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 SubscriptionId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Int32 OfferId { get; set; }
        public Int32 TenantId { get; set; }
        public DateTime SubscriptionEndDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public DateTime UpdateDateField { get; set; }
    }
}