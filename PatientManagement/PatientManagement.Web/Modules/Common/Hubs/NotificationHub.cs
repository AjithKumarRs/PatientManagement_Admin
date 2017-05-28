using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using PatientManagement.Administration.Entities;
using Serenity;
using Serenity.Data;

namespace PatientManagement.Web.Hubs
{
    public class NotificationHub : Hub
    {
        public override Task OnConnected()
        {
            if (Authorization.IsLoggedIn)
            {
                var fieldsUserSupportGroup = UserRow.Fields;

                List<TenantRow> userSupportGroups = null;
                using (var connection = SqlConnections.NewFor<TenantRow>())
                {
                    // retrieve the support groups to which the user belongs
                    userSupportGroups = connection.List<TenantRow>(new Criteria(fieldsUserSupportGroup.UserId) == Authorization.UserDefinition.Id);
                }
                foreach (var userSupportGroup in userSupportGroups)
                {
                    Groups.Add(Context.ConnectionId, userSupportGroup.TenantId.ToString());
                }
            }
            return base.OnConnected();
        }
    }
}
