
namespace PatientManagement.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Offers")]
    [BasedOnRow(typeof(Entities.OffersRow))]
    public class OffersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OfferId { get; set; }
        [EditLink]
        public String Name { get; set; }
        [Width(120)]
        public Int32 MaximumSubscriptionTime { get; set; }
        [Width(120)]
        public Int32 MaximumUsersPerTenant { get; set; }
        [Width(120)]
        public Int32 MaximumVisitsPerTenant { get; set; }
        [Width(120)]
        public Int32 MaximumPatientsPerTenant { get; set; }
        [Width(120)]
        public Int32 MaximumCabinets { get; set; }
        [Width(120)]
        public DateTimeField ExpirationDate { get; set; }
        [Width(180)]
        public String Description { get; set; }
        public Decimal Price { get; set; }
        [Width(90)]
        public Boolean Enabled { get; set; }

        [Width(50)]
        public String CurrencyCurrencyId { get; set; }
        [Width(120)]
        public Boolean CurrencyEnabled { get; set; }
        public String RoleRoleName { get; set; }
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