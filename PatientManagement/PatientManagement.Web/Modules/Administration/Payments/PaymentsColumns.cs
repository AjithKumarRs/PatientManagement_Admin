
namespace PatientManagement.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Payments")]
    [BasedOnRow(typeof(Entities.PaymentsRow))]
    public class PaymentsColumns
    {
        [DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int64 PaymentId { get; set; }
        public Int64 SubscriptionName { get; set; }

        public String PaymentDetailName { get; set; }

        public int PaymentOptionMonths { get; set; }

        public Int32 PaymentOptionName { get; set; }
        [ReadOnly(true)]
        public Decimal Value { get; set; }
        [Width(50)]
        public Int32 CurrencyCurrencyId { get; set; }
        
        public Int32 PaymentStatus { get; set; }

        [Width(80), EditLink]
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