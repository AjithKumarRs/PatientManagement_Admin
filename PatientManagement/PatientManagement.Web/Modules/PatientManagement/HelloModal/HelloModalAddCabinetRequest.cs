
using PatientManagement.PatientManagement.Entities;

namespace PatientManagement.Common
{
    using Serenity.ComponentModel;
    using Serenity.Services;
    using System;
    using System.ComponentModel;
    using Serenity.Data.Mapping;

    [FormScript("Common.HelloModalAddCabinet")]
    [BasedOnRow(typeof(CabinetsRow))]
    public class HelloModalAddCabinetRequest : ServiceRequest
    {
        public String Name { get; set; }

        public Int16 WorkHoursStart { get; set; }

        public Int16 WorkHoursEnd { get; set; }
    }
}
