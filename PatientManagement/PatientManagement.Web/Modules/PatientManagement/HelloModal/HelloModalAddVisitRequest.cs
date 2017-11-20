
using PatientManagement.PatientManagement.Entities;

namespace PatientManagement.Common
{
    using Serenity.ComponentModel;
    using Serenity.Services;
    using System;
    using System.ComponentModel;
    using Serenity.Data.Mapping;

    [FormScript("Common.HelloModalAddVisit")]
    [BasedOnRow(typeof(VisitsRow))]
    public class HelloModalAddVisitRequest : ServiceRequest
    {
        public Int32 PatientId { get; set; }
        public Int32 VisitTypeId { get; set; }

        public Int32 CabinetId { get; set; }

        [DefaultValue("now")]
        public DateTime StartDate { get; set; }
        [DefaultValue("now")]
        public DateTime EndDate { get; set; }

        [TextAreaEditor(Cols = 40,Rows = 5)]
        public String Description { get; set; }
    }
}
