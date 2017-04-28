
namespace PatientManagement.PatientManagement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PatientManagement.Visits")]
    [BasedOnRow(typeof(Entities.VisitsRow))]
    public class VisitsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 VisitId { get; set; }
        public Int32 PatientId { get; set; }
        public Int32 VisitInfoId { get; set; }
        public Int32 VisitTypeId { get; set; }
        public DateTime Date { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
    }
}