
namespace PatientManagement.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Payments")]
    [BasedOnRow(typeof(Entities.PaymentsRow))]
    public class PaymentsForm
    {
        [Category("Required Fields")]

        public Int64 SubscriptionId { get; set; }
        public Int64 PaymentDetailsId { get; set; }
        public Int32 PaymentOptionId { get; set; }
        public Int32 CurrencyId { get; set; }
        [ReadOnly(true), Required(true)]
        public String Value { get; set; }

        [DefaultValue(2), HideOnInsert]
        public Int32 PaymentStatus { get; set; }

    }
}