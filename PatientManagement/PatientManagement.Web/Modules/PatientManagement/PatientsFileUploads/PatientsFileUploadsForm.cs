
namespace PatientManagement.PatientManagement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PatientManagement.PatientsFileUploads")]
    [BasedOnRow(typeof(Entities.PatientsFileUploadsRow))]
    public class PatientsFileUploadsForm
    {
        public Int32 PatientId { get; set; }

        public String Description { get; set; }

        public String FilePath { get; set; }

        //public Int32 InsertUserId { get; set; }
        //public DateTime InsertDate { get; set; }
    }
}