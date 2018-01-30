using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PatientManagement
{
    public partial class AddressAutocompleteAttribute : CustomEditorAttribute
    {
        public const string Key = "PatientManagement.AddressAutocomplete";

        public AddressAutocompleteAttribute()
            : base(Key)
        {
        }
    }
}
