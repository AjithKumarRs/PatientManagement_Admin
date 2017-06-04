
namespace PatientManagement.PatientManagement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PatientManagement.UserNotifications")]
    [BasedOnRow(typeof(Entities.UserNotificationsRow))]
    public class UserNotificationsForm
    {
        public Int32 NotificationId { get; set; }
        public DateTime SeenAt { get; set; }
        public Int32 UserId { get; set; }
    }
}