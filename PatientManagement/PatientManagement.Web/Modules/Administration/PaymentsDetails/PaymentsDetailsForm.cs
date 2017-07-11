
namespace PatientManagement.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.PaymentsDetails")]
    [BasedOnRow(typeof(Entities.PaymentsDetailsRow))]
    public class PaymentsDetailsForm
    {
        [Placeholder("Bank transfer, VISA, Mastercard")]
        public String Name { get; set; }
        public String BeneficiaryName { get; set; }
        public String BankName { get; set; }
        public String IbanBeneficient { get; set; }
    }
}