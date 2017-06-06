using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PatientManagement.Administration.Entities;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.PatientManagement.Repositories;
using Serenity.Data;
using Serenity.Services;

namespace PatientManagement.Web.Modules.PatientManagement.Notifications
{
    public class NotificationBehavior : BaseSaveDeleteBehavior,  IRetrieveBehavior, IFieldBehavior
    {
        public Field Target { get; set; }

        public void OnAfterExecuteQuery(IRetrieveRequestHandler handler) { }
        public void OnBeforeExecuteQuery(IRetrieveRequestHandler handler) { }
        public void OnPrepareQuery(IRetrieveRequestHandler handler, SqlQuery query) { }
        public void OnValidateRequest(IRetrieveRequestHandler handler) { }

        public void OnReturn(IRetrieveRequestHandler handler)
        {
            if (ReferenceEquals(null, Target) ||
                !handler.AllowSelectField(Target) ||
                !handler.ShouldSelectField(Target))
                return;

            var idField = (handler.Row as IIdRow).IdField;
            var fld = NotificationsRow.Fields;

            var listRequest = new ListRequest
            {
                ColumnSelection = ColumnSelection.List,
                EqualityFilter = new Dictionary<string, object>
                {
                    {fld.EntityType.PropertyName, handler.Row.Table},
                    {fld.EntityId.PropertyName, idField[handler.Row] ?? -1}
                }
            };

            var notifications = new NotificationsRepository().List(handler.Connection, listRequest).Entities;

            // users might be in another database, in another db server, so we can't simply use a join here
            var userIdList = notifications.Where(x => x.InsertUserId != null)
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
                        .ToDictionary(x => (int) (x.UserId ?? x.USERID), x => (string) x.DisplayName);

                string s;
                foreach (var x in notifications)
                    if (x.InsertUserId != null && userDisplayNames.TryGetValue(x.InsertUserId.Value, out s))
                        x.InsertUserDisplayName = s;
            }

            Target.AsObject(handler.Row, notifications);
        }

    
    }
}
