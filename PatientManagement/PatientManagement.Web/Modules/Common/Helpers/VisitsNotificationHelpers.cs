﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.SignalR.Infrastructure;
using PatientManagement.Administration.Entities;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.Web.Hubs;
using Serenity;
using Serenity.Data;

namespace PatientManagement.Web.Modules.Common.Helpers
{
    public class VisitsNotificationHelpers
    {
        private static readonly IHubContext notificationHub = Dependency.Resolver.Resolve<IConnectionManager>().GetHubContext<NotificationHub>();
 
        public static void SendVisitNotification(DateTime start, DateTime end, int patientId, EVisitNotificationStatus status)
        {
            var user = (UserDefinition)Authorization.UserDefinition;

            var connection = SqlConnections.NewFor<PatientsRow>();
            var patientName = connection.First<PatientsRow>(new Criteria(PatientsRow.Fields.PatientId) == patientId.ToString()).Name;
            var users = connection.List<UserRow>().Where(e => e.TenantId == user.TenantId && e.UserId != Int32.Parse(user.Id)).Select(e => e.UserId.ToString());

            switch (status)
            {
                case EVisitNotificationStatus.Created:
                    var notification = string.Format(Texts.Site.Notifications.VisitAddedNotification, user.DisplayName, patientName);
                    notificationHub.Clients.Users(users.ToList()).visitChangedNotification(notification, start, end);
                    break;
                case EVisitNotificationStatus.Updated:
                    notification = string.Format(Texts.Site.Notifications.VisitChangedNotification, user.DisplayName, patientName);
                    notificationHub.Clients.Users(users.ToList()).visitChangedNotification(notification, start, end);
                    break;
                case EVisitNotificationStatus.Deleted:
                    notification = string.Format(Texts.Site.Notifications.VisitDeletedNotification, user.DisplayName, patientName);
                    notificationHub.Clients.Users(users.ToList()).visitChangedNotification(notification, start, end);
                    break;

                default: break;
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
