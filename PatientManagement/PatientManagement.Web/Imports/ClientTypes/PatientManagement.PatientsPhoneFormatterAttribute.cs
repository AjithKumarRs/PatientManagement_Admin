using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PatientManagement.PatientManagement
{
    public partial class PatientsPhoneFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "PatientManagement.PatientManagement.PatientsPhoneFormatter";

        public PatientsPhoneFormatterAttribute()
            : base(Key)
        {
        }
    }
}
