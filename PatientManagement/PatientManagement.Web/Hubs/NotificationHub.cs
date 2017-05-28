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

                var user = (UserDefinition) Authorization.UserDefinition;
                Groups.Add(Context.ConnectionId, user.TenantId.ToString());
            }
            return base.OnConnected();
        }

        
    }
}
