
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
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 PaymentId { get; set; }
        public Int64 SubscriptionId { get; set; }
        public Int64 PaymentDetailsId { get; set; }
        public Int32 PaymentOptionId { get; set; }
        public Int32 CurrencyId { get; set; }
        [ReadOnly(true)]
        public Decimal Value { get; set; }
        [EditLink]
        public String RoleBefore { get; set; }
        public String RoleAfter { get; set; }
        public Int32 PaymentStatus { get; set; }

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
        public DateTime UpdateDateField { get; set; }
    }
}