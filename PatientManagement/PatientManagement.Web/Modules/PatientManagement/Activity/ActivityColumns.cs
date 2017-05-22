
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
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PatientId { get; set; }
        [EditLink]
        public String MovementAndTraining { get; set; }
        public String Profession { get; set; }
    }
}