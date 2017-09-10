
namespace PatientManagement.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.SentEmails")]
    [BasedOnRow(typeof(Entities.SentEmailsRow))]
    public class SentEmailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 SentEmailId { get; set; }
        [EditLink]
        public String FromEmail { get; set; }
        public String FromName { get; set; }
        public String Subject { get; set; }
        public String ToEmail { get; set; }
        public String ToName { get; set; }

        [Width(80)]
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