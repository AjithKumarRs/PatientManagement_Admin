
namespace PatientManagement.PatientManagement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PatientManagement.UserNotifications")]
    [BasedOnRow(typeof(Entities.UserNotificationsRow))]
    public class UserNotificationsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UserNotificationId { get; set; }
        public Int32 NotificationId { get; set; }
        public DateTime SeenAt { get; set; }
        public Int32 UserId { get; set; }
    }
}