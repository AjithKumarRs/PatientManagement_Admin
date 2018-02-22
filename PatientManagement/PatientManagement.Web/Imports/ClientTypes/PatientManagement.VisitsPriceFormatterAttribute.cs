using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PatientManagement.PatientManagement
{
    public partial class VisitsPriceFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "PatientManagement.PatientManagement.VisitsPriceFormatter";

        public VisitsPriceFormatterAttribute()
            : base(Key)
        {
        }

        public String VisitTypeCurrencyIdProperty
        {
            get { return GetOption<String>("visitTypeCurrencyIdProperty"); }
            set { SetOption("visitTypeCurrencyIdProperty", value); }
        }

        public String VisitTypePriceProperty
        {
            get { return GetOption<String>("visitTypePriceProperty"); }
            set { SetOption("visitTypePriceProperty", value); }
        }
    }
}
