
namespace PatientManagement.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Coupons")]
    [BasedOnRow(typeof(Entities.CouponsRow))]
    public class CouponsForm
    {
        [ReadOnly(true)]
        public String Key { get; set; }
        public String Name { get; set; }
        public Int16 Discount { get; set; }
        public String Description { get; set; }
        public DateTime EndDate { get; set; }
        public Int32 MaxTimeUsing { get; set; }
        [Hidden, DefaultValue(0)]
        public Int32 IsUsed { get; set; }
        public Int16 IsActive { get; set; }
    }
}