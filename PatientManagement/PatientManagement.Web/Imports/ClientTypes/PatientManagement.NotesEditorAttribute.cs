using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PatientManagement.PatientManagement
{
    public partial class NotesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "PatientManagement.PatientManagement.NotesEditor";

        public NotesEditorAttribute()
            : base(Key)
        {
        }
    }
}
