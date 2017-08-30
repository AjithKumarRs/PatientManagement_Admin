using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
    }
}