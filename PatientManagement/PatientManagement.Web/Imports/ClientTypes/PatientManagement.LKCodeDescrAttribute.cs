using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PatientManagement.PatientManagement
{
    public partial class LKCodeDescrAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "PatientManagement.PatientManagement.LKCodeDescr";

        public LKCodeDescrAttribute()
            : base(Key)
        {
        }

        public String CodeFieldName
        {
            get { return GetOption<String>("codeFieldName"); }
            set { SetOption("codeFieldName", value); }
        }

        public String DescrFieldName
        {
            get { return GetOption<String>("descrFieldName"); }
            set { SetOption("descrFieldName", value); }
        }
    }
}
