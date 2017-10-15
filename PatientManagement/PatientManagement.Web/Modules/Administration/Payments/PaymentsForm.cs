
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
        [DisplayName("Customer Name"), Required]
        public string CustomerName { get; set; }
        [HalfWidth]
        [DisplayName("Customer IBAN"), Required]
        public string CustomerIban { get; set; }

        [Hidden]
        public Int64 SubscriptionId { get; set; }
        [Category("Extra Info for Payment")]

        [DisplayName("Reason for Payment "), Required]
        public string ReasonForPayment { get; set; }
       

        [TextAreaEditor]
        public string Description { get; set; }

        [Category("Receiver")]

        [HalfWidth]
        [DisplayName("Receiver"), Required]
        public string Receiver { get; set; }
        [HalfWidth]
        [DisplayName("IBAN Receiver"), Required]
        public string IBANReceiver { get; set; }
        [HalfWidth]
        [DisplayName("BIC Receiver"), Required]
        public string BICReceiver { get; set; }
        [HalfWidth]
        [DisplayName("Bank Name Receiver"), Required]
        public string BankNameReceiver { get; set; }
        [Category("Total cost")]

        [Hidden]
        public List<Int32> CouponId { get; set; }

        [HalfWidth]
        public Int32 PaymentOptionId { get; set; }


        [HalfWidth]
        [DisplayName("Coupon Key")]
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