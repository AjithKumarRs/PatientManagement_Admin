using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SignalR;
using Serenity;

namespace PatientManagement.Administration
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
