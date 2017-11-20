
namespace PatientManagement.PatientManagement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PatientManagement.VisitTypes")]
    [BasedOnRow(typeof(Entities.VisitTypesRow))]
    public class VisitTypesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 VisitTypeId { get; set; }

        [VisitsTypesFormatter(BackgroundProperty = "BackgroundColor", BorderProperty = "BorderColor")]
        [Width(200)]
        public String Name { get; set; }

        [Width(80)]
        public String TenantName { get; set; }

        [Width(80)]
        public String InsertUserName { get; set; }
        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [Width(120)]
        public DateTime InsertDate { get; set; }
    }
}