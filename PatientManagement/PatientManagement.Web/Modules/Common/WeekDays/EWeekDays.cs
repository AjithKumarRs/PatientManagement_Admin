﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using Serenity.ComponentModel;

namespace PatientManagement.PatientManagement
{
    public enum WeekDays
    {
        [Description("Monday")]
        Monday = 1,
        [Description("Tuesday")]
        Tuesday = 2,
        [Description("Wednesday")]
        Wednesday =3,
        [Description("Thursday")]
        Thursday = 4,
        [Description("Friday")]
        Friday = 5,
        [Description("Saturday")]
        Saturday =6 ,
        [Description("Sunday")]
        Sunday = 7
    }
}
