
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
        [Category("Customer Details")]
        public Int64 PaymentDetailsId { get; set; }

        [HalfWidth]
        public string CustomerName { get; set; }
        [HalfWidth]
        public string CustomerIban { get; set; }

        [Hidden]
        public Int64 SubscriptionId { get; set; }
        [Category("Extra Info for Payment")]
        
        public string ReasonForPayment { get; set; }
       

        [TextAreaEditor]
        public string Description { get; set; }

        [Category("Receiver")]

        [HalfWidth]
        public string Receiver { get; set; }
        [HalfWidth]
        public string IBANReceiver { get; set; }
        [HalfWidth]
        public string BICReceiver { get; set; }
        [HalfWidth]
        public string BankNameReceiver { get; set; }
        [Category("Total cost")]

        [Hidden]
        public List<Int32> CouponId { get; set; }

        [HalfWidth]
        public Int32 PaymentOptionId { get; set; }


        [HalfWidth]
        [Updatable(false)]
        public string CouponKey { get; set; }

        [HalfWidth]
        public Int32 CurrencyId { get; set; }

        [HalfWidth]
        [ReadOnly(true), Required(true)]
        public String Value { get; set; }

        [DefaultValue(2), HideOnInsert]
        public Int32 PaymentStatus { get; set; }

    }
}