
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
        [EditLink, DisplayName("Db.Shared.RecordId"), Hidden]
        public Int32 VisitId { get; set; }

        [PatientsFormatter(GenderProperty = "PatientGender")]
        public Int32 PatientName { get; set; }

        [EditLink, Width(130), PatientsPhoneFormatter]
        public string PhoneNumber { get; set; }

        [VisitsTypesFormatter(BackgroundProperty = "VisitTypeBackgroundColor", BorderProperty = "VisitTypeBorderColor")]
        public Int32 VisitTypeName { get; set; }
        [Width(200)]
        public string CabinetName { get; set; }
        [Width(300)]
        public String Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        [Hidden]
        public Int32 InsertUserId { get; set; }

        [Width(80)]
        public String TenantName { get; set; }

        [Width(80)]
        public String InsertUserName { get; set; }
        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [Width(120)]
        public DateTime InsertDate { get; set; }
    }
}