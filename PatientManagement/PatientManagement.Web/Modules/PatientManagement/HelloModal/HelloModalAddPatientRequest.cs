
using PatientManagement.PatientManagement.Entities;

namespace PatientManagement.Common
{
    using Serenity.ComponentModel;
    using Serenity.Services;
    using System;
    using System.ComponentModel;
    using Serenity.Data.Mapping;

    [FormScript("Common.HelloModalAddPatient")]
    [BasedOnRow(typeof(PatientsRow))]
    public class HelloModalAddPatientRequest : ServiceRequest
    {
        public String Name { get; set; }


        public Int32 Gender { get; set; }

        public string PhoneNumber { get; set; }

        [EmailEditor]

        public string Email { get; set; }
        [Hint("When visit for the patient is changed, the user will receive email automatically (if email is added). ")]
        public bool NotifyOnChange { get; set; }
    }
}
