
namespace PatientManagement.PatientManagement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PatientManagement.MedicalSpecialty")]
    [BasedOnRow(typeof(Entities.MedicalSpecialtyRow))]
    public class MedicalSpecialtyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SpecialtyId { get; set; }
        [Width(150)]
        [EditLink]
        public String Name { get; set; }
        
        [Width(80)]
        public String InsertUserName { get; set; }
        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [Width(120)]
        public DateTime InsertDate { get; set; }
        [Width(80)]
        public String UpdateUserName { get; set; }
        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [Width(120)]
        public DateTime UpdateDateField { get; set; }
    }
}