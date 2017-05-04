using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PatientManagement.PatientManagement
{
    public partial class VisitsTypesFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "PatientManagement.PatientManagement.VisitsTypesFormatter";

        public VisitsTypesFormatterAttribute()
            : base(Key)
        {
        }

        public String BackgroundProperty
        {
            get { return GetOption<String>("backgroundProperty"); }
            set { SetOption("backgroundProperty", value); }
        }

        public String BorderProperty
        {
            get { return GetOption<String>("borderProperty"); }
            set { SetOption("borderProperty", value); }
        }
    }
}
