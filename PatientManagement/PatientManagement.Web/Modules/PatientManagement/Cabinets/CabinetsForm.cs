
namespace PatientManagement.PatientManagement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PatientManagement.Cabinets")]
    [BasedOnRow(typeof(Entities.CabinetsRow))]
    public class CabinetsForm
    {
        [Category("Required Fields")]

        public String Name { get; set; }
        [Category("Additional Information")]

        public Int16 WorkHoursStart { get; set; }

        public Int16 WorkHoursEnd { get; set; }

        public List<Int32> WorkDays { get; set; }

        public List<Int32> Representatives { get; set; }

        public Int32? TenantId { get; set; }

    }
}