
namespace PatientManagement.PatientManagement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PatientManagement.Visits")]
    [BasedOnRow(typeof(Entities.VisitsRow))]
    public class VisitsForm
    {
        public Int32 PatientId { get; set; }
        public Int32 VisitInfoId { get; set; }
        public Int32 VisitTypeId { get; set; }
        public DateTime Date { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
    }
}