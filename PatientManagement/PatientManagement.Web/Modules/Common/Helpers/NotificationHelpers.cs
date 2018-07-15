using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hubs;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.SignalR.Infrastructure;
using Microsoft.CodeAnalysis;
using Newtonsoft.Json;
using PatientManagement.Administration.Entities;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.PatientManagement.Repositories;
using Serenity;
using Serenity.Data;
using Serenity.Services;

namespace PatientManagement.Web.Modules.Common.Helpers
{
    public class NotificationHelpers
    {
        private static readonly IHubContext notificationHub = Dependency.Resolver.Resolve<IConnectionManager>().GetHubContext<NotificationHub>();



        #region Private Methods

        private static List<string> GetOtherUsersIdForTenant(int tenantId, int userId)
        {
            List<string> users = new List<string>();
            using (var connectionUsers = SqlConnections.NewFor<UserRow>())
            {
                users = connectionUsers.List<UserRow>().Where(
                    e => e.TenantId == tenantId && e.UserId != userId).Select(e => e.UserId.ToString()).ToList();
            }
            return users;
        }

        /// <summary>
        /// Formates the message for status.
        /// Check <see cref="EEntityNotificationStatus"/> for order!
        /// </summary>
        /// <param name="status">The status.</param>
        /// <param name="format">The format.</param>
        /// <param name="args">The arguments.</param>
        /// <returns></returns>
        private static string FormatedMessageForStatus(EEntityNotificationStatus status, string[] format, object[] args)
        {
            var message = string.Empty;
            switch (status)
            {
                case EEntityNotificationStatus.Created:
                    message = string.Format(format[0], args);
                    break;
                case EEntityNotificationStatus.Updated:
                    message = string.Format(format[1], args);
                    break;
                case EEntityNotificationStatus.Deleted:
                    message = string.Format(format[2], args);
                    break;

                default: break;
            }
            return message;
        }

        private static void InsertNotificationForCurrentTable(string tableName, int visitId, string message, int? cabinetId = null)
        {
            UserDefinition user = (UserDefinition)Authorization.UserDefinition;
            var seenBy = new List<string>();
            seenBy.Add(user.Id);
            var notificationRow = new NotificationsRow
            {
                EntityType = tableName,
                EntityId = visitId,
                Text = message,
                TenantId = user.TenantId,
                InsertUserId = user.UserId,
                InsertDate = DateTime.Now,
                SeenByUserIds = JsonConvert.SerializeObject(seenBy),
                CabinetId = cabinetId
            };

            using (var connectionNotification = SqlConnections.NewFor<NotificationsRow>())
                connectionNotification.InsertAndGetID(notificationRow);

            // TODO Unit of work is not committing the transaction #49
            //using (var uow = new UnitOfWork(connectionNotification))
            //{
            //    var saveRequest = new SaveRequest<NotificationsRow>
            //    {
            //        Entity = notificationRow
            //    };
            //    new NotificationsRepository().Create(uow, saveRequest);
            //}
        }

        #endregion

        #region Visits Notification
        public static void SendVisitNotification(int VisitId, int? CabinetId, string cabinetName, DateTime start, DateTime end, int patientId, EEntityNotificationStatus status)
        {
            UserDefinition user = (UserDefinition)Authorization.UserDefinition;
            var patientName = string.Empty;
            if (patientId > 0)
                using (var connectionPatients = SqlConnections.NewFor<PatientsRow>())
                {
                    patientName = connectionPatients
                        .First<PatientsRow>(new Criteria(PatientsRow.Fields.PatientId) == patientId.ToString()).Name;
                }
            else
                patientName = LocalText.Get("Db.PatientManagement.Visits.FreeForReservation");

            var message = FormatedMessageForStatus(
                status, new string[]{
                    Texts.Site.Notifications.VisitAddedNotification,
                    Texts.Site.Notifications.VisitChangedNotification,
                    Texts.Site.Notifications.VisitDeletedNotification
                    },
                    new Object[]
                    {
                        cabinetName,
                        user.DisplayName,
                        patientName,
                        start.ToString("HH:mm dd.MM.yyyy"),
                        end.ToString("HH:mm dd.MM.yyyy")
                    }

            );

            List<string> users = GetOtherUsersIdForTenant(user.TenantId, Int32.Parse(user.Id));
            notificationHub.Clients.Users(users.ToList()).visitChangedNotification(user.DisplayName, user.UserImage, message, start, end);

            InsertNotificationForCurrentTable(VisitsRow.Fields.TableName, VisitId, message, CabinetId);
        }

        #endregion

        #region Patient Notification

        public static void SendPatientNotification(int patientId, string patientName, EEntityNotificationStatus status)
        {
            var user = (UserDefinition)Authorization.UserDefinition;

            var message = FormatedMessageForStatus(
                status, new string[]{
                    Texts.Site.Notifications.PatientAddedNotification,
                    Texts.Site.Notifications.PatientChangedNotification,
                    Texts.Site.Notifications.PatientDeletedNotification
                },
                new Object[]
                {
                    user.DisplayName,
                    patientName
                }

            );

            List<string> users = GetOtherUsersIdForTenant(user.TenantId, Int32.Parse(user.Id));
            notificationHub.Clients.Users(users.ToList()).patientChangedNotification(user.DisplayName, user.UserImage, message);

            InsertNotificationForCurrentTable(PatientsRow.Fields.TableName, patientId, message);
        }

        #endregion

    }


    public enum EEntityNotificationStatus
    {
        Created = 0,
        Updated = 1,
        Deleted = 2,

    }
}
