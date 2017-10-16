
namespace PatientManagement.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.ExternalAccess")]
    [BasedOnRow(typeof(Entities.ExternalAccessRow))]
    public class ExternalAccessForm
    {
        public String Name { get; set; }

        public List<Int32> ExternalAccessCabinets { get; set; }

        public Int32 AccessType { get; set; }
        public Int32 OutputFormat { get; set; }
    }
}