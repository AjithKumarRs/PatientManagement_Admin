using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR.Messaging;

namespace PatientManagement.Web.Modules.Common.SignalR
{
    public class ConnectionMapping
    {
        private static Dictionary<int, HashSet<string>> _connections;

        private static ConnectionMapping _instance = null;

        public ConnectionMapping()
        {
            _connections =  new Dictionary<int, HashSet<string>>();
        }
        public static  ConnectionMapping GetInstance()
        {
            if (_connections == null)
            {
                _instance = new ConnectionMapping();
            }
            return _instance;
        }

        public int Count
        {
            get
            {
                return _connections.Count;
            }
        }

        public void Add(int key, string connectionId)
        {
            lock (_connections)
            {
                HashSet<string> connections;
                if (!_connections.TryGetValue(key, out connections))
                {
                    connections = new HashSet<string>();
                    _connections.Add(key, connections);
                }

                lock (connections)
                {
                    connections.Add(connectionId);
                }
            }
        }

        public IEnumerable<string> GetConnections(int key)
        {
            HashSet<string> connections;
            if (_connections.TryGetValue(key, out connections))
            {
                return connections;
            }

            return Enumerable.Empty<string>();
        }

        public void Remove(int key, string connectionId)
        {
            lock (_connections)
            {
                HashSet<string> connections;
                if (!_connections.TryGetValue(key, out connections))
                {
                    return;
                }

                lock (connections)
                {
                    connections.Remove(connectionId);

                    if (connections.Count == 0)
                    {
                        _connections.Remove(key);
                    }
                }
            }
        }

        public HashSet<string> GetConnectionIdByUserId(int userId)
        {
            HashSet<string> connectionId = null;
            _connections.TryGetValue(userId, out connectionId);
            return connectionId;
        }

    }
}
