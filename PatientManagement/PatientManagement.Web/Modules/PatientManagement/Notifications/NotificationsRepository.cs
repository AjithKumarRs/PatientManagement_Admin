

using System.Collections.Generic;
using System.Linq;
using PatientManagement.Administration.Entities;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.Web.Modules.PatientManagement.Notifications;

namespace PatientManagement.PatientManagement.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.NotificationsRow;

    public class NotificationsRepository
    {
        public Field Target { get; set; }

        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void AfterSave()
            {
                base.AfterSave();

                //if (IsCreate)
                //{
                //    var user = (UserDefinition)Authorization.UserDefinition;
                //    var connection = SqlConnections.NewFor<UserRow>();
                //    var users = connection.List<UserRow>().Where(e => e.TenantId == user.TenantId && e.UserId != Int32.Parse(user.Id)).Select(e => e.UserId).ToList();

                //    foreach (var userToNotify in users)
                //    {
                //        using (var connectionUserNotifications = SqlConnections.NewFor<UserNotificationsRow>())
                //        using (var uow = new UnitOfWork(connectionUserNotifications))
                //        {
                //            var saveRequest = new SaveRequest<UserNotificationsRow>
                //            {
                //                Entity = new UserNotificationsRow
                //                {
                //                    NotificationId = Row.NotificationId,
                //                    UserId = userToNotify
                //                }
                //            };

                //            new UserNotificationsRepository().Create(uow, saveRequest);
                //        }
                //    }
                //}
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            protected override void OnReturn()
            {
                base.OnReturn();

                // users might be in another database, in another db server, so we can't simply use a join here
                var userIdList = Response.Entities.Where(x => x.InsertUserId != null)
                    .Select(x => x.InsertUserId.Value)
                    .Distinct();

                if (userIdList.Any())
                {
                    var u = UserRow.Fields;
                    IDictionary<int, string> userDisplayNames;
                    using (var connection = SqlConnections.NewFor<UserRow>())
                        userDisplayNames = connection.Query(new SqlQuery()
                                .From(u)
                                .Select(u.UserId)
                                .Select(u.DisplayName)
                                .Where(u.UserId.In(userIdList)))
                            .ToDictionary(x => (int)(x.UserId ?? x.USERID), x => (string)x.DisplayName);

                    string s;
                    foreach (var x in Response.Entities)
                        if (x.InsertUserId != null && userDisplayNames.TryGetValue(x.InsertUserId.Value, out s))
                            x.InsertUserDisplayName = s;
                }

            }
        }
    }
}