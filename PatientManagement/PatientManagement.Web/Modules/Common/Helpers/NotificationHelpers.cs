using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.SignalR.Infrastructure;
using Microsoft.CodeAnalysis;
using PatientManagement.Administration.Entities;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.PatientManagement.Repositories;
using PatientManagement.Web.Hubs;
using Serenity;
using Serenity.Data;
using Serenity.Services;

namespace PatientManagement.Web.Modules.Common.Helpers
{
    public class NotificationHelpers
    {
        private static readonly IHubContext notificationHub = Dependency.Resolver.Resolve<IConnectionManager>().GetHubContext<NotificationHub>();

        public static void SendVisitNotification(int VisitId, DateTime start, DateTime end, int patientId, EVisitNotificationStatus status)
        {
            var user = (UserDefinition)Authorization.UserDefinition;
            var patientName = string.Empty;
            List<string> users = new List<string>();

            using (var connectionPatients = SqlConnections.NewFor<PatientsRow>())
            {
                patientName = connectionPatients.First<PatientsRow>(new Criteria(PatientsRow.Fields.PatientId) == patientId.ToString()).Name;
            }

            using (var connectionUsers = SqlConnections.NewFor<UserRow>())
            {
                users = connectionUsers.List<UserRow>().Where(e => e.TenantId == user.TenantId && e.UserId != Int32.Parse(user.Id)).Select(e => e.UserId.ToString()).ToList();

            }

            var message = string.Empty;
            switch (status)
            {
                case EVisitNotificationStatus.Created:
                    message = string.Format(Texts.Site.Notifications.VisitAddedNotification, user.DisplayName, patientName);
                    break;
                case EVisitNotificationStatus.Updated:
                    message = string.Format(Texts.Site.Notifications.VisitChangedNotification, user.DisplayName, patientName);
                    break;
                case EVisitNotificationStatus.Deleted:
                    message = string.Format(Texts.Site.Notifications.VisitDeletedNotification, user.DisplayName, patientName);
                    break;

                default: break;
            }

            notificationHub.Clients.Users(users.ToList()).visitChangedNotification(user.DisplayName, user.UserImage, message, start, end);

            var notificationRow = new NotificationsRow
            {
                EntityType = VisitsRow.Fields.TableName,
                EntityId = VisitId,
                Text = message
            };

            using (var connectionNotification = SqlConnections.NewFor<NotificationsRow>())
            using (var uow = new UnitOfWork(connectionNotification))
            {
                var saveRequest = new SaveRequest<NotificationsRow>
                {
                    Entity = notificationRow
                };
                new NotificationsRepository().Create(uow, saveRequest);
            }
        }
    }


    public enum EVisitNotificationStatus
    {
        Created = 0,
        Updated = 1,
        Deleted = 2,

    }
}
