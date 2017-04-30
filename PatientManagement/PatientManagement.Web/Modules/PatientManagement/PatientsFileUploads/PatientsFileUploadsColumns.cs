
namespace PatientManagement.PatientManagement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PatientManagement.PatientsFileUploads")]
    [BasedOnRow(typeof(Entities.PatientsFileUploadsRow))]
    public class PatientsFileUploadsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PatientFileUploadId { get; set; }
        public Int32 PatientId { get; set; }
        public String Description { get; set; }

        //public Int32 InsertUserId { get; set; }
        //public DateTime InsertDate { get; set; }
    }
}