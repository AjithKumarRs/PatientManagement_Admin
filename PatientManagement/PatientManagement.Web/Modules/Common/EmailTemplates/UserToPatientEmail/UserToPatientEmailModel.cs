using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Serenity.Reporting;

namespace PatientManagement.Common.EmailTemplates
{
    public class UserToPatientEmailModel: BasicEmailModel<UserToPatientEmailModel>
    {
        public string Text { get; set; }
        
    }
    
}
