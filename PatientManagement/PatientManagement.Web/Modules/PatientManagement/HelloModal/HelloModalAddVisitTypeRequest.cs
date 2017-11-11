
using PatientManagement.PatientManagement.Entities;

namespace PatientManagement.Common
{
    using Serenity.ComponentModel;
    using Serenity.Services;
    using System;
    using System.ComponentModel;
    using Serenity.Data.Mapping;

    [FormScript("Common.HelloModalAddVisitType")]
    [BasedOnRow(typeof(VisitTypesRow))]
    public class HelloModalAddVisitTypeRequest : ServiceRequest
    {
        public String Name { get; set; }

        public String BorderColor { get; set; }

        public String BackgroundColor { get; set; }
    }
}
