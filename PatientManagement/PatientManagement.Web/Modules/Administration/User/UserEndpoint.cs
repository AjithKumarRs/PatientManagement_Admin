

using PatientManagement.Web.Modules.Common;
using Serenity.Abstractions;
using Serenity.Web;

namespace PatientManagement.Administration.Endpoints
{
    using Entities;
    using Repositories;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.UserRepository;
    using MyRow = Entities.UserRow;

    [Route("Services/Administration/User/[action]")]
    //[ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    [ConnectionKey(typeof(MyRow))]
    public class UserController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var maximumInserts = UserSubscriptionHelper.GetTenantMaximumUsers();
            if (this.List(uow.Connection, new ListRequest()).TotalCount >= maximumInserts)
            {
                throw new ValidationError(string.Format(Texts.Site.Subscriptions.MaximumUsersError, maximumInserts));
            }

            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyRepository().Undelete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            if (request.EntityId.ToString() == Authorization.UserId)
            {
                var perminsion = Dependency.Resolve<IPermissionService>();

                var grantor = new TransientGrantingPermissionService(perminsion);
                grantor.GrantAll();
                try
                {
                    return new MyRepository().Retrieve(connection, request);
                }
                finally
                {
                    grantor.UndoGrant();
                }

            }
            return new MyRepository().Retrieve(connection, request);

        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        private static string[] permissionsUsedFromScript;

        /// <summary>
        /// This declares a dynamic script with key 'UserData' that will be available from client side.
        /// We don't cache it at dynamic script manager, because dynamic scripts are cached globally,
        /// similar to static variables, not per user.
        /// </summary>
        [NonAction, DataScript("UserData", CacheDuration = -1)]
        public ScriptUserDefinition GetUserData()
        {
            var result = new ScriptUserDefinition();
            var user = Authorization.UserDefinition as UserDefinition;

            if (user == null)
            {
                result.Permissions = new Dictionary<string, bool>();
                return result;
            }
            result.UserId = user.UserId;
            result.Username = user.Username;
            result.DisplayName = user.DisplayName;
            result.IsAdmin = user.Username == "admin";
            result.TenantId = user.TenantId;
            result.RestrictedToCabinets = user.RestrictedToCabinets;
            //TODO: Major speed issue when using in the Frond End
            //result.PaidPeriod = UserSubscriptionHelper.GetTenantPaidDays(user.TenantId);
            result.TenantCurrencyId = user.TenantCurrencyId;

            result.Permissions = TwoLevelCache.GetLocalStoreOnly("ScriptUserPermissions:" + user.Id, TimeSpan.Zero,
                UserPermissionRow.Fields.GenerationKey, () =>
                {
                  
                    //TODO: Major speed issue when using in the Frond End
                    //var connection = SqlConnections.NewFor<UserRoleRow>();
                    //var rolesFld = RoleRow.Fields;
                    //var roleIdList = UserSubscriptionHelper.GetUserRolesIdBasedOnSubscription(user.UserId, user.TenantId);
                    //if (roleIdList.Any())
                    //    result.RolesList = connection.List<RoleRow>(rolesFld.RoleId.In(roleIdList)).Select(r => r.RoleName).ToList();


                    var permissions = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);

                    if (permissionsUsedFromScript == null)
                    {
                        permissionsUsedFromScript = new UserPermissionRepository().ListPermissionKeys().Entities
                            .Where(permissionKey =>
                            {
                                // this sends permission information for all permission keys to client side.
                                // if you don't need all of them to be available from script, filter them here.
                                // this is recommended for security / performance reasons...
                                return true;
                            }).ToArray();
                    }

                    foreach (var permissionKey in permissionsUsedFromScript)
                    {
                        if (Authorization.HasPermission(permissionKey))
                            permissions[permissionKey] = true;
                    }

                    return permissions;
                });

            return result;
        }
    }
}
