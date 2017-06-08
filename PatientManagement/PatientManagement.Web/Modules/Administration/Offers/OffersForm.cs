
namespace PatientManagement.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Offers")]
    [BasedOnRow(typeof(Entities.OffersRow))]
    public class OffersForm
    {
        public String Name { get; set; }
        public Int32Field MaximumSubscriptionTime { get; set; }
        public Int32Field MaximumUsers { get; set; }
        public DateTimeField ExpirationDate { get; set; }
        public String Description { get; set; }
        public Decimal Price { get; set; }
        public Boolean Enabled { get; set; }

        public Int32 CurrencyId { get; set; }
        public Int32 RoleId { get; set; }
    }
}