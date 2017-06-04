using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SignalR;
using Serenity;

namespace PatientManagement.Web.Modules.Administration.User
{
    public class CustomUserIdProvider : IUserIdProvider
    {
        public string GetUserId(HttpRequest request)
        {
            var userId = string.Empty;
            if (Authorization.IsLoggedIn)
            {
                userId = Authorization.UserDefinition.Id;
            }
            return userId;
        }
    }
}
