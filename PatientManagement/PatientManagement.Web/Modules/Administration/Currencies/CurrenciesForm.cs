
namespace PatientManagement.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Currencies")]
    [BasedOnRow(typeof(Entities.CurrenciesRow))]
    public class CurrenciesForm
    {
        public String CurrencyId { get; set; }
        public String Name { get; set; }
        public Decimal Rate { get; set; }
        public Int32 BaseCurrencyId { get; set; }
    }
}