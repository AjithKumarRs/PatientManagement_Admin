
namespace PatientManagement.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Currencies")]
    [BasedOnRow(typeof(Entities.CurrenciesRow))]
    public class CurrenciesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String CurrencyId { get; set; }
        public String Name { get; set; }

        public Boolean Enabled { get; set; }

        public Decimal Rate { get; set; }
        public String BaseCurrencyName { get; set; }

        [Width(150)]
        public String UserName { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}