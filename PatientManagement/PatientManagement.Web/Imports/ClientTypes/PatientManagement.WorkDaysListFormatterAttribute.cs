using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PatientManagement.PatientManagement
{
    public partial class WorkDaysListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "PatientManagement.PatientManagement.WorkDaysListFormatter";

        public WorkDaysListFormatterAttribute()
            : base(Key)
        {
        }
    }
}
