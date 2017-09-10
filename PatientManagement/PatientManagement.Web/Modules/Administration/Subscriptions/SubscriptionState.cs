using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace PatientManagement.PatientManagement
{
    public enum SubscriptionState
    {
        [Description("Not Active")]
        NotActive = 0,
        [Description("Active")]
        Active = 1
    }
}
