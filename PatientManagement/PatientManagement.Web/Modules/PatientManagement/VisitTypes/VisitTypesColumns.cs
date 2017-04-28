
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
        [EditLink]
        public String Name { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
    }
}