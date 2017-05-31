using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using PatientManagement.Web.Modules.Common.SignalR;
using Serenity;

namespace PatientManagement.Web.Hubs
{

    public class NotificationHub : Hub
    {
        public static ConnectionMapping _connections;

        public NotificationHub()
        {
            _connections = ConnectionMapping.GetInstance();
        }


        public override Task OnConnected()
        {
            if (Authorization.IsLoggedIn)
            {
                var user = (UserDefinition) Authorization.UserDefinition;

                _connections.Add(Convert.ToInt32(user.Id), Context.ConnectionId);

                Groups.Add(Context.ConnectionId, user.TenantId.ToString());
            }
            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            var user = (UserDefinition)Authorization.UserDefinition;

            _connections.Remove(Convert.ToInt32(user.Id), Context.ConnectionId);

            return base.OnDisconnected(stopCalled);
        }

        public override Task OnReconnected()
        {
            var user = (UserDefinition)Authorization.UserDefinition;

            if (!_connections.GetConnections(Convert.ToInt32(user.Id)).Contains(Context.ConnectionId))
            {
                _connections.Add(Convert.ToInt32(user.Id), Context.ConnectionId);
            }

            return base.OnReconnected();
        }
    }

}
