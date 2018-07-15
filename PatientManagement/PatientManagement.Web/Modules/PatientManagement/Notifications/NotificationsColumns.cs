
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
        [FilterOnly()]
        public String InsertUserId { get; set; }
        [FilterOnly()]
        public bool SeenByUser { get; set; }
        [NotificationsUserImageFormatter]
        [Width(60)]
        public String InsertUserPicture { get; set; }

       [EditLink]
        public String EntityType { get; set; }

        public Int64 EntityId { get; set; }

        [Width(150)]
        public String SeenByUserNames { get; set; }

        [Width(850)]
        public String Text { get; set; }
        [EditLink, Width(200), CabinetsFormatter]
        public string CabinetName { get; set; }
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