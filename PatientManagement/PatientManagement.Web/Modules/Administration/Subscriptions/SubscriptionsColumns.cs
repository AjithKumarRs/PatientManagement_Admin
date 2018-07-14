
using PatientManagement.PatientManagement;

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
        
        public SubscriptionState Enabled { get; set; }

        public Int32 OfferName { get; set; }

        [DisplayFormat("dd/MM/yyyy")]
        public DateTime ActivatedOn { get; set; }

        [DisplayFormat("dd/MM/yyyy")]
        public DateTime DeactivatedOn { get; set; }

        [DisplayFormat("dd/MM/yyyy")]
        public DateTime SubscriptionEndDate { get; set; }
        [Width(80)]
        public String TenantName { get; set; }

        [Width(80)]
        public String InsertUserName { get; set; }
        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [Width(120)]
        public DateTime InsertDate { get; set; }
        [Width(80)]
        public String UpdateUserName { get; set; }
        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [Width(120)]
        public DateTime UpdateDate { get; set; }
    }
}