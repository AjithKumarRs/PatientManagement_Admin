using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Serenity.Services;

namespace PatientManagement.PatientManagement
{
    public class ListCriteriaStartDateEndDateRequest : ListRequest
    {
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int CabinetId { get; set; }
    }
}
    