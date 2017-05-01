
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
        public Int32 PersonalNumber { get; set; }
        public Int32 PhoneNumber { get; set; }
        [DefaultValue("now")]
        public DateTime FirstRegistrationDate { get; set; }
        public String Address { get; set; }
        public Int32 Height { get; set; }
        public Int32 Weight { get; set; }

        public List<object> NoteList { get; set; }

        // TODO Add when you figure out how to add permissions here
        //public Int32 InsertUserId { get; set; }
        //public DateTime InsertDate { get; set; }
    }
}