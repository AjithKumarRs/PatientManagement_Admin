
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

    [ColumnsScript("Administration.SentEmails")]
    [BasedOnRow(typeof(Entities.SentEmailsRow))]
    public class SentEmailsColumns
    {
        [DisplayName("Db.Shared.RecordId")]
        public Int64 SentEmailId { get; set; }

        [Width(250)]
        [SentEmailsFromEmailFormatter]
        public String FromEmail { get; set; }
        [Width(250)]
        public String FromName { get; set; }
        [Width(250)]
        public String Subject { get; set; }

        [Width(250)]
        [SentEmailsToEmailFormatter]
        public String ToEmail { get; set; }
        [Width(250)]
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
        public DateTime UpdateDate { get; set; }
    }
}