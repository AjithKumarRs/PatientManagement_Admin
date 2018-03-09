
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

        [Category("Work Hours")]

        public Int16 WorkHoursStart { get; set; }

        public Int16 WorkHoursEnd { get; set; }

        public List<Int32> WorkDays { get; set; }

        [Category("Additional Information")]

        public List<Int32> Representatives { get; set; }

        public String Description { get; set; }


       // public String Country { get; set; }

        public Int32 PhoneNumber { get; set; }

        [AddressAutocomplete]
        public String City { get; set; }
        
        public Int32? TenantId { get; set; }

    }
}