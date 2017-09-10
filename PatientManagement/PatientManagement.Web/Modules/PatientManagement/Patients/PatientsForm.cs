
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
        [Hidden]
        public Int32? PatientId { get; set; }

      
        public String Name { get; set; }

        public Int32 Gender { get; set; }
        public Int64 PersonalNumber { get; set; }
        public string PhoneNumber { get; set; }
        [EmailEditor]

        public string Email { get; set; }

        [DefaultValue("now")]
        public DateTime FirstRegistrationDate { get; set; }
        public String Address { get; set; }
        public Int32 Height { get; set; }
        public Int32 Weight { get; set; }
        
        [Hint("When visit for the patient is changed, the user will receive email automatically (if email is added). ")]
        public bool NotifyOnChange { get; set; }


        public List<object> NoteList { get; set; }

        // TODO Add when you figure out how to add permissions here
        //public Int32 InsertUserId { get; set; }
        //public DateTime InsertDate { get; set; }
    }
}