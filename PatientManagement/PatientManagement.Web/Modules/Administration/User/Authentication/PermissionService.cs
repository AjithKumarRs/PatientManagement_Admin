using System.Linq;
using PatientManagement.Administration.Entities;
using PatientManagement.PatientManagement;

namespace PatientManagement.Administration
{
    using Serenity;
    using Serenity.Abstractions;
    using Serenity.Data;
    using System;
    using System.Collections.Generic;

    public class PermissionService : IPermissionService
    {
        public bool HasPermission(string permission)
        {
            if (Authorization.Username == "admin")
                return true;

            var user = (UserDefinition)Authorization.UserDefinition;
            if (user == null)
                return false;
            
            bool grant;
            if (GetUserPermissions(user.UserId).TryGetValue(permission, out grant))
                return grant;

            foreach (var roleId in GetUserRoles(user.UserId, user.TenantId))
            {
                if (GetRolePermissions(roleId).Contains(permission))
                    return true;
            }

            return false;
        }
        
        private Dictionary<string, bool> GetUserPermissions(int userId)
        {
            var fld = UserPermissionRow.Fields;

            return TwoLevelCache.GetLocalStoreOnly("UserPermissions:" + userId, TimeSpan.Zero, fld.GenerationKey, () =>
            {
                using (var connection = SqlConnections.NewByKey("Default"))
                {
                    var result = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);

                    connection.List<UserPermissionRow>(q => q
                            .Select(fld.PermissionKey)
                            .Select(fld.Granted)
                            .Where(new Criteria(fld.UserId) == userId))
                        .ForEach(x => result[x.PermissionKey] = x.Granted ?? true);

                    return result;
                }
            });
        }

        private HashSet<string> GetRolePermissions(int userId)
        {
            var fld = RolePermissionRow.Fields;

            return TwoLevelCache.GetLocalStoreOnly("RolePermissions:" + userId, TimeSpan.Zero, fld.GenerationKey, () =>
            {
                using (var connection = SqlConnections.NewByKey("Default"))
                {
                    var result = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

                    connection.List<RolePermissionRow>(q => q
                            .Select(fld.PermissionKey)
                            .Where(new Criteria(fld.RoleId) == userId))
                        .ForEach(x => result.Add(x.PermissionKey));

                    return result;
                }
            });
        }

        private HashSet<int> GetUserRoles(int userId, int tenantId)
        {
            var fld = UserRoleRow.Fields;

            return TwoLevelCache.GetLocalStoreOnly("UserRoles:" + userId, TimeSpan.Zero, fld.GenerationKey, () =>
            {
                using (var connection = SqlConnections.NewByKey("Default"))
                {
                    var result = new HashSet<int>();

                    //TODO Restrict access when subscription is required 
                    var tenantFld = TenantRow.Fields;
                    var tenant = connection.First<TenantRow>(tenantFld.TenantId == tenantId);
                    if (tenant?.SubscriptionRequired != null && tenant.SubscriptionRequired.Value)
                    {
                        // We check if the tenant have active subscription
                        var subsFld = SubscriptionsRow.Fields;
                        var subscriptions =
                            connection.List<SubscriptionsRow>(subsFld.TenantId == tenantId);

                        if (subscriptions.Any() && subscriptions.Any(s => s.IsActive == 1) )//subscription.SubscriptionEndDate >= DateTime.Now)
                        {
                            //TODO Check user payments here 


                            // All looks fine, get current user roles 
                            connection.List<UserRoleRow>(q => q
                                    .Select(fld.RoleId)
                                    .Where(new Criteria(fld.UserId) == userId))
                                .ForEach(x => result.Add(x.RoleId.Value));
                        }
                        else
                        {
                            // TODO Don't use this shit like number! 3 = Expired role 
                            result.Add(3);

                            // Return expired role
                            return result;
                        }
                    }
                    else
                    {
                        // TODO: Clean this code and keep it simple stupid 
                        connection.List<UserRoleRow>(q => q
                                .Select(fld.RoleId)
                                .Where(new Criteria(fld.UserId) == userId))
                            .ForEach(x => result.Add(x.RoleId.Value));
                    }



                    return result;
                }
            });
        }
    }
}