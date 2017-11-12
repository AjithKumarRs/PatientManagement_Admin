
namespace PatientManagement.PatientManagement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PatientManagement.MedicalSpecialty")]
    [BasedOnRow(typeof(Entities.MedicalSpecialtyRow))]
    public class MedicalSpecialtyForm
    {
        public String Name { get; set; }
    }
}