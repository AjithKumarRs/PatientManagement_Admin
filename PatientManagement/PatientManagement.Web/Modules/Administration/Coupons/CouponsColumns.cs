
namespace PatientManagement.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Coupons")]
    [BasedOnRow(typeof(Entities.CouponsRow))]
    public class CouponsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CouponId { get; set; }
        [EditLink]
        public String Key { get; set; }
        public String Name { get; set; }
        public Int16 Discount { get; set; }
        public String Description { get; set; }
        public DateTime EndDate { get; set; }
        public Int32 IsUsed { get; set; }

        public Int16 IsActive { get; set; }
        public Int32 MaxTimeUsing { get; set; }

        [Width(80)]
        public String InsertUserName { get; set; }
        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [Width(120)]
        public DateTime InsertDate { get; set; }
        [Width(80)]
        public String UpdateUserName { get; set; }
        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [Width(120)]
        public DateTime UpdateDate { get; set; }
    }
}