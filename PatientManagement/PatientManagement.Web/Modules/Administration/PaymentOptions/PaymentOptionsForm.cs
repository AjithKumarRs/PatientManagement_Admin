
namespace PatientManagement.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.PaymentOptions")]
    [BasedOnRow(typeof(Entities.PaymentOptionsRow))]
    public class PaymentOptionsForm
    {
        public Int32 Months { get; set; }
        public String Name { get; set; }
    }
}