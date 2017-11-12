using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PatientManagement.PatientManagement
{
    public partial class MedicalSpecialtiesFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "PatientManagement.PatientManagement.MedicalSpecialtiesFormatter";

        public MedicalSpecialtiesFormatterAttribute()
            : base(Key)
        {
        }
    }
}
