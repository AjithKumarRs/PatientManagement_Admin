﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Serenity.Reporting;

namespace PatientManagement.Common.EmailTemplates
{
    public class UserToPatientEmailModel
    {
        public string Text { get; set; }

        public string EmailSignature { get; set; }

        public string LogoUrl { get; set; }

        public string ExternalUrl { get; set; }
    }
    
}
