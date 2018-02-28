using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PatientManagement.PatientManagement.Entities
{
    public class NewPatientsThisMonthResponse
    {
        public Double PercentMonthBefore { get; set; }
        public int CounterMonthBefore { get; set; }
        public int Counter { get; set; }
    }
}
