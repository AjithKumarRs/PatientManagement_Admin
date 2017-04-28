
namespace PatientManagement.PatientManagement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PatientManagement.VisitsInfo")]
    [BasedOnRow(typeof(Entities.VisitsInfoRow))]
    public class VisitsInfoForm
    {
        public Int32 VisitId { get; set; }
        public String Remarks { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
    }
}