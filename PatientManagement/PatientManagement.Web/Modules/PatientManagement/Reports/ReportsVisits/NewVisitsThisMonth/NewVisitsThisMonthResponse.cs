using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PatientManagement.PatientManagement.Entities
{
    public class NewVisitsThisMonthResponse
    {
        public int Counter { get; set; }
        public int CounterMonthBefore { get; set; }

        public double PercentMonthBefore { get; set; }

    }
}
