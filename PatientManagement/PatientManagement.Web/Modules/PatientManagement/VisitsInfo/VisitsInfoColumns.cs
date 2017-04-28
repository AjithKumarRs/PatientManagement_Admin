
namespace PatientManagement.PatientManagement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PatientManagement.VisitsInfo")]
    [BasedOnRow(typeof(Entities.VisitsInfoRow))]
    public class VisitsInfoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 VisitInfoId { get; set; }
        public Int32 VisitId { get; set; }
        [EditLink]
        public String Remarks { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
    }
}