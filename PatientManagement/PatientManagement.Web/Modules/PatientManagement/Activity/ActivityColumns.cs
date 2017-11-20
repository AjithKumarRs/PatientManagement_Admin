
namespace PatientManagement.PatientManagement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PatientManagement.Activity")]
    [BasedOnRow(typeof(Entities.ActivityRow))]
    public class ActivityColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 ActivityId { get; set; }
        [EditLink]
        [Width(250)]
        public String MovementAndTraining { get; set; }
        [Width(250)]
        [EditLink]
        public String Profession { get; set; }
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