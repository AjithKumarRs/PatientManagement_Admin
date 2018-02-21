
using PatientManagement.Common;
using PatientManagement.PatientManagement;
using PatientManagement.PatientManagement.Entities;
namespace PatientManagement.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data; 
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.SentEmails")]
    [BasedOnRow(typeof(Entities.SentEmailsRow))]
    public class SentEmailsForm
    {
        [LKCodeDescr(LookupKey = "PatientManagement.Patients", CodeFieldName = "Email", DescrFieldName = "Name")]
        public String ToEmail { get; set; }
        public String Email { get; set; }
        public String Name { get; set; }
        // public String ToName { get; set; }
        public String Subject { get; set; }
        public String Body { get; set; }

        public string EmailSignature { get; set; }
    }
}