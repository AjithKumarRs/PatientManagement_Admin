
using PatientManagement.PatientManagement;

namespace PatientManagement.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.ExternalAccess")]
    [BasedOnRow(typeof(Entities.ExternalAccessRow))]
    public class ExternalAccessColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 ExternalAccessId { get; set; }
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [Width(300)]
        [ExternalAccessUrlFormatter]
        public String Url { get; set; }

        [CabinetsListFormatter]
        [Width(200)]
        public List<Int32> ExternalAccessCabinets { get; set; }

        public Int32 VisitedCount { get; set; }
        public Int32 AccessType { get; set; }
        public Int32 OutputFormat { get; set; }

        [Width(120)]
        public String TenantName { get; set; }

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