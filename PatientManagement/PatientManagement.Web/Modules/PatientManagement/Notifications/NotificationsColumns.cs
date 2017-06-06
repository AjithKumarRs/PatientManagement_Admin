
using PatientManagement.PatientManagement.Entities;
using Serenity.Data.Mapping;

namespace PatientManagement.PatientManagement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PatientManagement.Notifications")]
    [BasedOnRow(typeof(Entities.NotificationsRow))]
    public class NotificationsColumns
    {
        [DisplayName("Db.Shared.RecordId")]
        public Int32 NotificationId { get; set; }

        [EditLink]
        public String EntityType { get; set; }

        public Int64 EntityId { get; set; }
        
        [Width(500)]
        public String Text { get; set; }

        [Width(150)]
        public String InsertUserDisplayName { get; set; }

        [Width(150)]
        public DateTime InsertDate { get; set; }
    }
}