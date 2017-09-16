﻿
namespace PatientManagement.PatientManagement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PatientManagement.Cabinets")]
    [BasedOnRow(typeof(Entities.CabinetsRow))]
    public class CabinetsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CabinetId { get; set; }
        [EditLink]
        public String Name { get; set; }

        [Width(250), UserListFormatter]
        public String Representatives { get; set; }

        [MinuteFormatter]
        public Int16 WorkHoursStart { get; set; }
        [MinuteFormatter]
        public Int16 WorkHoursEnd { get; set; }

        [Width(80)]
        public String TenantName { get; set; }

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