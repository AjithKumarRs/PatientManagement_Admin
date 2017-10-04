using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace PatientManagement.PatientManagement.Entities
{
    public enum AccessType
    {
        [Description("Public")]
        Public,
        [Description("Private")]
        Private
    }
}
