using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PatientManagement.Common.EmailTemplates
{
    public class ChangedVisitAutomaticEmailModel
    {
        public DateTime VisitDate { get; set; }

        public string PatientName { get; set; }
    }
}
