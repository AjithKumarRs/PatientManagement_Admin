

using System.Collections.Generic;
using System.Linq;
using PatientManagement.Administration;
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

        public ListResponse<MyRow> ListForDropdown(IDbConnection connection, ListRequest request)
        {
            return new MyListForDropDownHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>{ }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                var user = (UserDefinition)Authorization.UserDefinition;

               // if (!Authorization.HasPermission(PermissionKeys.Tenants))
                    query.Where(fld.InsertUserId != user.UserId);
            }

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

                    IDictionary<int, List<string>> userDisplayNames;

                    using (var connection = SqlConnections.NewFor<UserRow>())
                        userDisplayNames = connection.Query(new SqlQuery()
                                .From(u)
                                .Select(u.UserId)
                                .Select(u.DisplayName)
                                .Select(u.UserImage)
                                .Where(u.UserId.In(userIdList)))
                            .ToDictionary(x =>
                                (int) (x.UserId ?? x.USERID), x => new List<string>() { x.DisplayName, x.UserImage }
                            );

                    List<string> s;
                    foreach (var x in Response.Entities)
                        if (x.InsertUserId != null && userDisplayNames.TryGetValue(x.InsertUserId.Value, out s))
                        {
                            x.InsertUserDisplayName = s[0];
                            x.InsertUserPicture = System.Web.VirtualPathUtility.ToAbsolute(
                                (string.IsNullOrEmpty(s[1])) ? "~/Content/adminlte/img/avatar04.png" :
                                    "~/upload/" + s[1]);
                        }
                }

            }
        }

        private class MyListForDropDownHandler : ListRequestHandler<MyRow>
        {
            //TODO Clean next code!!! 
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                var user = (UserDefinition)Authorization.UserDefinition;
                var seenNotifications = Connection.List<UserNotificationsRow>().Where(f => f.UserId == user.UserId).Select(f => f.NotificationId);
                
                query.Where(fld.InsertUserId != user.UserId);

                if (seenNotifications.Any())
                    query.Where(!fld.NotificationId.In(seenNotifications));
            }

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

                    IDictionary<int, List<string>> userDisplayNames;

                    using (var connection = SqlConnections.NewFor<UserRow>())
                        userDisplayNames = connection.Query(new SqlQuery()
                                .From(u)
                                .Select(u.UserId)
                                .Select(u.DisplayName)
                                .Select(u.UserImage)
                                .Where(u.UserId.In(userIdList)))
                            .ToDictionary(x =>
                                    (int)(x.UserId ?? x.USERID), x => new List<string>() { x.DisplayName, x.UserImage }
                            );

                    List<string> s;
                    foreach (var x in Response.Entities)
                        if (x.InsertUserId != null && userDisplayNames.TryGetValue(x.InsertUserId.Value, out s))
                        {
                            x.InsertUserDisplayName = s[0];
                            x.InsertUserPicture = System.Web.VirtualPathUtility.ToAbsolute(
                                (string.IsNullOrEmpty(s[1])) ? "~/Content/adminlte/img/avatar04.png" :
                                    "~/upload/" + s[1]);
                        }
                }

            }
        }
        
    }
}