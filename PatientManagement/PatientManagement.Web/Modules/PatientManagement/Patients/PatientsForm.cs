
using PatientManagement.PatientManagement.Entities;

namespace PatientManagement.PatientManagement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PatientManagement.Patients")]
    [BasedOnRow(typeof(Entities.PatientsRow))]
    public class PatientsForm
    {
        [Category("Required Fields")]

        [Hidden]
        public Int32? PatientId { get; set; }

      
        public String Name { get; set; }

        public Int32 Gender { get; set; }
        [HalfWidth]
        public string PhoneNumber { get; set; }
        [HalfWidth]
        public Int64 PersonalNumber { get; set; }
        [EmailEditor]

        public string Email { get; set; }
        [Category("Location")]
        public String Address { get; set; }
        [HalfWidth]
        [AddressAutocompleteNoMap(Option = "city")]
        public String City { get; set; }
        [HalfWidth]
        [AddressAutocompleteNoMap(Option = "country")]
        public String Country { get; set; }

        [Category("Additional Information")]
        public string Picture { get; set; }

        [HalfWidth]
        public Int32 Height { get; set; }
        [HalfWidth]
        public Int32 Weight { get; set; }

        [DefaultValue("now"), ReadOnly(true)]
        public DateTime FirstRegistrationDate { get; set; }

        [Hint("When visit for the patient is changed, the user will receive email automatically (if email is added). ")]
        public bool NotifyOnChange { get; set; }


        public List<object> NoteList { get; set; }
        public Int32? TenantId { get; set; }

        // TODO Add when you figure out how to add permissions here
        //public Int32 InsertUserId { get; set; }
        //public DateTime InsertDate { get; set; }
    }
}