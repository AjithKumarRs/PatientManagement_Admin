
namespace PatientManagement.PatientManagement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PatientManagement.Patients")]
    [BasedOnRow(typeof(Entities.PatientsRow))]
    public class PatientsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PatientId { get; set; }

        [EditLink, PatientsFormatter(GenderProperty = "Gender"),    Width(250)]
        public String Name { get; set; }

        [Width(150)]
        public Int64 PersonalNumber { get; set; }
        [Width(150), PatientsPhoneFormatter]
        public Int64 PhoneNumber { get; set; }
        public DateTime FirstRegistrationDate { get; set; }
        public String Address { get; set; }
        public Int32 Height { get; set; }
        public Int32 Weight { get; set; }

        // TODO Add when you figure out how to add permissions here
        //public Int32 InsertUserId { get; set; }

        //public DateTime InsertDate { get; set; }
    }
}