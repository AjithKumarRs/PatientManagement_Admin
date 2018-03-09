using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PatientManagement
{
    public partial class AddressAutocompleteNoMapAttribute : CustomEditorAttribute
    {
        public const string Key = "PatientManagement.AddressAutocompleteNoMap";

        public AddressAutocompleteNoMapAttribute()
            : base(Key)
        {
        }

        public String Option
        {
            get { return GetOption<String>("option"); }
            set { SetOption("option", value); }
        }
    }
}
