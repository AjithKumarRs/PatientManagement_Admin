using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.SignalR.Infrastructure;
using PatientManagement.Administration.Entities;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.PatientManagement.Repositories;
using PatientManagement.Web.Hubs;
using Serenity;
using Serenity.Data;

namespace PatientManagement.Web.Modules.Common.Helpers
{
    public class NotificationHelpers
    {
        private static readonly IHubContext notificationHub = Dependency.Resolver.Resolve<IConnectionManager>().GetHubContext<NotificationHub>();
 
        public static void SendVisitNotification(int VisitId, DateTime start, DateTime end, int patientId, EVisitNotificationStatus status)
        {
            var user = (UserDefinition)Authorization.UserDefinition;

            var connection = SqlConnections.NewFor<PatientsRow>();
            var patientName = connection.First<PatientsRow>(new Criteria(PatientsRow.Fields.PatientId) == patientId.ToString()).Name;
            var users = connection.List<UserRow>().Where(e => e.TenantId == user.TenantId && e.UserId != Int32.Parse(user.Id)).Select(e => e.UserId.ToString());

            var notification = string.Empty;
            switch (status)
            {
                case EVisitNotificationStatus.Created:
                    notification = string.Format(Texts.Site.Notifications.VisitAddedNotification, user.DisplayName, patientName);
                    break;
                case EVisitNotificationStatus.Updated:
                    notification = string.Format(Texts.Site.Notifications.VisitChangedNotification, user.DisplayName, patientName);
                    break;
                case EVisitNotificationStatus.Deleted:
                    notification = string.Format(Texts.Site.Notifications.VisitDeletedNotification, user.DisplayName, patientName);
                    break;

                default: break;
            }
          
            notificationHub.Clients.Users(users.ToList()).visitChangedNotification(notification, start, end);

            var notificationId = connection.InsertAndGetID(new NotificationsRow
            {
                EntityType = VisitsRow.Fields.TableName,
                EntityId = VisitId,
                Text = notification,
                InsertDate = DateTime.Now,
                InsertUserId = user.UserId
            });


        }
    }


    public enum EVisitNotificationStatus
    {
        Created = 0,
        Updated = 1,
        Deleted = 2,

    }
}
