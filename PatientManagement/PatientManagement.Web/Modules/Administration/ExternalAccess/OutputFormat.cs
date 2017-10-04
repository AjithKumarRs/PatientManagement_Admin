using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace PatientManagement.PatientManagement.Entities
{
    public enum OutputFormat
    {
        [Description(".ICS")]
        Ics,
        [Description("JSON")]
        Json
    }
}
