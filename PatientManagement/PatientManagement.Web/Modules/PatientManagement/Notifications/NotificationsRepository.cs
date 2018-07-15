

using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
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

        public SaveResponse MarkAsSeen(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var user = (UserDefinition)Authorization.UserDefinition;

            var retrieveRequest = new RetrieveRequest();
            retrieveRequest.EntityId = request.EntityId;
            retrieveRequest.ColumnSelection = RetrieveColumnSelection.Details;
            var notification = new MyRetrieveHandler().Process(uow.Connection, retrieveRequest).Entity;

            if (notification.SeenByUserIds.IsNullOrEmpty())
                notification.SeenByUserIds = JsonConvert.SerializeObject(new List<string>());
            //else if (notification.SeenByUserIds.Contains("\"" + user.UserId + "\""))
            //    return new SaveResponse();

            var listIds = JsonConvert.DeserializeObject<List<String>>(notification.SeenByUserIds);
            if (listIds.Contains(user.Id))
                return new SaveResponse();
            listIds.Add(user.Id);
            var jsonIds = JsonConvert.SerializeObject(listIds);
            notification.SeenByUserIds = jsonIds;
            request.Entity = notification;


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

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
           
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            protected override void PrepareQuery(SqlQuery query)
            {
                base.PrepareQuery(query);
                var user = (UserDefinition)Authorization.UserDefinition;
                Query.SetParam("@LogedUser", user.Id);
            }
        }

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            protected override void PrepareQuery(SqlQuery query)
            {
                base.PrepareQuery(query);
                var user = (UserDefinition)Authorization.UserDefinition;
                Query.SetParam("@LogedUser", user.Id);
            }
            
            protected override void OnReturn()
            {
                base.OnReturn();


                // users might be in another database, in another db server, so we can't simply use a join here
                var insertUserIdList = Response.Entities.Where(x => x.InsertUserId != null)
                    .Select(x => x.InsertUserId.Value)
                    .Distinct();
                var seenFromUserIdList = Response.Entities.Where(x => x.SeenByUserIds != null)
                    .Select(x => x.SeenByUserIds)
                    .Distinct().ToList();

                var u = UserRow.Fields;
                IDictionary<int, List<string>> userDisplayNames;

                if (insertUserIdList.Any())
                {
                    using (var connection = SqlConnections.NewFor<UserRow>())
                        userDisplayNames = connection.Query(new SqlQuery()
                                .From(u)
                                .Select(u.UserId)
                                .Select(u.DisplayName)
                                .Select(u.UserImage)
                                .Where(u.UserId.In(insertUserIdList)))
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

                foreach (var seenUsers in seenFromUserIdList)
                {
                    var seenUsersDeserialized = JsonConvert.DeserializeObject<List<string>>(seenUsers);
                    if (seenUsersDeserialized != null && seenUsersDeserialized.Any())
                    {
                        using (var connection = SqlConnections.NewFor<UserRow>())
                            userDisplayNames = connection.Query(new SqlQuery()
                                    .From(u)
                                    .Select(u.UserId)
                                    .Select(u.DisplayName)
                                    .Where(u.UserId.In(seenUsersDeserialized)))
                                .ToDictionary(x =>
                                        (int)(x.UserId ?? x.USERID), x => new List<string>() { x.DisplayName }
                                );


                        foreach (var x in Response.Entities)
                            if (x.SeenByUserIds != null && x.SeenByUserIds == seenUsers)
                            {
                                List<string> s = new List<string>();
                                List<string> temp = new List<string>();
                                var seenUsersResponseDeserialized = JsonConvert.DeserializeObject<List<string>>(x.SeenByUserIds);
                                foreach (var userIdResponse in seenUsersResponseDeserialized)
                                {

                                    userDisplayNames.TryGetValue(int.Parse(userIdResponse), out s);
                                    temp.Add(s[0]);
                                }

                                if (s.Any())
                                {
                                    x.SeenByUserNames = String.Join(", ", temp);
                                }
                            }
                    }
                }

            }
        }

        private class MyListForDropDownHandler : ListRequestHandler<MyRow>
        {
            protected override void PrepareQuery(SqlQuery query)
            {
                base.PrepareQuery(query);
                var user = (UserDefinition)Authorization.UserDefinition;
                Query.SetParam("@LogedUser", user.Id);
            }

            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);
                Request.ColumnSelection = ColumnSelection.Details;
                var user = (UserDefinition)Authorization.UserDefinition;

                //  if (!Authorization.HasPermission(PermissionKeys.Tenant))
                query.Where(fld.SeenByUserIds.IsNull() || (fld.SeenByUserIds.IsNotNull() && fld.SeenByUserIds.NotContains("\"" + user.UserId + "\"")));


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