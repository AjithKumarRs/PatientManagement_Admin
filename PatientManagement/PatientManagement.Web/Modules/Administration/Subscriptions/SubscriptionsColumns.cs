
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
        public DateTime PaidPeriod { get; set; }

        [DisplayFormat("dd/MM/yyyy")]
        public DateTime ActivatedOn { get; set; }

        [DisplayFormat("dd/MM/yyyy")]
        public DateTime DeactivatedOn { get; set; }

        [DisplayFormat("dd/MM/yyyy")]
        public DateTime SubscriptionEndDate { get; set; }

        public string TenantName { get; set; }

        public String InsertUserName { get; set; }
        [DisplayFormat("dd/MM/yyyy HH:mm")]
        public DateTime InsertDate { get; set; }
        public String UpdateUserName { get; set; }
        [DisplayFormat("dd/MM/yyyy HH:mm")]
        public DateTime UpdateDateField { get; set; }
    }
}