using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PatientManagement.Administration.Entities;
using Serenity.Data;
using Serenity.Reporting;

namespace PatientManagement.Payments
{
    [Report("Administration.PaymentInvoice")]
    [ReportDesign(MVC.Views.Administration.Payments.PaymentInvoicePage)]
    [ReadPermission("AdministrationTenants:PaymentsInvoice:Read")]
    public class PaymentInvoice : IReport, ICustomizeHtmlToPdf
    {
        public Int32 PaymentId { get; set; }
        public object GetData()
        {
            var data = new PaymentInvoiceData();
            data.PaymentId = this.PaymentId;
            using (var connection = SqlConnections.NewFor<PaymentsRow>())
            {
                var payment = connection.ById<PaymentsRow>(this.PaymentId);
                data.FromName = payment.CustomerName;
                data.FromBankName = payment.CustomerBankName;
                data.FromIBAN = payment.CustomerIban;

                var couponflds = CouponsRow.Fields;
                if (!string.IsNullOrEmpty(payment.CouponKey))
                {
                    var coupon = connection.First<CouponsRow>(couponflds.Key == payment.CouponKey);
                    data.CouponName = coupon.Name;
                    data.CouponId = coupon.CouponId ?? 0;
                }
                data.CouponDiscount = payment.CouponDiscount ?? 0;
                data.CouponKey = payment.CouponKey;

                data.RecieverName = payment.Receiver;
                data.RecieverBankName = payment.BankNameReceiver;
                data.RecieverBic = payment.BICReceiver;
                data.RecieverIban = payment.IBANReceiver;

                data.SubscriptionId = payment.SubscriptionId??0;

                data.PaymentType = payment.PaymentType;
                data.Currency = payment.PaymentCurrency;
                data.SubTotal = payment.SubTotal ?? 0;
                data.Total = payment.Value ?? 0;
                data.Description = payment.Description;
                data.MonthsPayed = payment.MonthsPayed ?? 0;
                data.ReasonForPayment = payment.ReasonForPayment;
       
            }
            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            // options.MarginsAll = "2cm";
        }

    }

    public class PaymentInvoiceData
    {
        public Int32 PaymentId { get; set; }

        public string FromName { get; set; }

        public string FromPhone { get; set; }

        public string FromEmail { get; set; }

        public string FromAddress { get; set; }

        public string FromBankName { get; set; }

        public string FromIBAN { get; set; }


        public string RecieverName { get; set; }

        public string RecieverIban { get; set; }

        public string RecieverBic { get; set; }

        public string RecieverBankName { get; set; }

        public string RecieverPhone { get; set; }

        public string RecieverAddress { get; set; }

        public string RecieverEmail { get; set; }


        public int CouponId { get; set; }

        public string CouponName { get; set; }

        public string CouponKey { get; set; }



        public Int64 SubscriptionId { get; set; }



        public string Currency { get; set; }

        public int CouponDiscount { get; set; }

        public int MonthsPayed { get; set; }

        public string PaymentType { get; set; }

        public string ReasonForPayment { get; set; }

        public string Description { get; set; }

        public decimal SubTotal { get; set; }

        public decimal Total { get; set; }

    }
}