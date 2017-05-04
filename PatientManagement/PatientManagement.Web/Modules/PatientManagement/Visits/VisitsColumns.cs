
namespace PatientManagement.PatientManagement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PatientManagement.Visits")]
    [BasedOnRow(typeof(Entities.VisitsRow))]
    public class VisitsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 VisitId { get; set; }

        [PatientsFormatter(GenderProperty = "PatientGender")]
        public Int32 PatientName { get; set; }

        [EditLink, Width(130), PatientsPhoneFormatter]
        public string PhoneNumber { get; set; }

        [VisitsTypesFormatter(BackgroundProperty = "VisitTypeBackgroundColor", BorderProperty = "VisitTypeBorderColor")]
        public Int32 VisitTypeName { get; set; }

        public String Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        // TODO Add when you figure out how to add permissions here
        //public Int32 InsertUserId { get; set; }
        //public DateTime InsertDate { get; set; }
    }
}