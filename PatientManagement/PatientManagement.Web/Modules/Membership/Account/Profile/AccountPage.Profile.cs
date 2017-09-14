using PatientManagement.Administration;
using PatientManagement.AppServices;
using PatientManagement.PatientManagement.Entities;
using Serenity.IO;

namespace PatientManagement.Membership.Pages
{
    using Administration.Entities;
    using Administration.Repositories;
    using Serenity;
    using Serenity.Abstractions;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using Serenity.Web.Providers;
    using System;
    using Microsoft.AspNetCore.Mvc;

    public partial class AccountController : Controller
    {
        [HttpGet, PageAuthorize]
        public ActionResult Profile()
        {
            var connection = SqlConnections.NewFor<VisitsRow>();
            var user = (UserDefinition)Serenity.Authorization.UserDefinition;

            var visitFields = VisitsRow.Fields;
            var visitsCount = connection.Count<VisitsRow>(visitFields.InsertUserId == user.UserId);
            ViewData["VisitsCount"] = visitsCount;

            var patientFields = PatientsRow.Fields;
            var patientsCount = connection.Count<PatientsRow>(patientFields.InsertUserId == user.UserId);
            ViewData["PatientsCount"] = patientsCount;

            var SentEmailFields = SentEmailsRow.Fields;
            var sentEmailsCount = connection.Count<SentEmailsRow>(SentEmailFields.InsertUserId == user.UserId);
            ViewData["SentEmailsCount"] = sentEmailsCount;

            var tenant = connection.ById<TenantRow>(user.TenantId);
            ViewData["TenantName"] = tenant.TenantName;
            ViewData["TenantWebSite"] = tenant.TenantWebSite;

            return View(MVC.Views.Membership.Account.Profile.AccountProfile);
        }

        [HttpPost, JsonFilter, ServiceAuthorize(PermissionKeys.AdministrationTenantsTenantEditing)]
        public Result<ServiceResponse> EditTenant(EditTenantRequest request)
        {

            return this.UseConnection("Default", connection =>
            {

                request.CheckNotNull();

               var perminsion = Dependency.Resolve<IPermissionService>();

                var grantor = new TransientGrantingPermissionService(perminsion);
                grantor.GrantAll();
                try
                {

                    var user = (UserDefinition)Serenity.Authorization.UserDefinition;

                    var tenant = new TenantRow();
                    tenant.TenantId = user.TenantId;

                    if (request.Name.IsEmptyOrNull())
                        throw new ArgumentNullException("name");

                    tenant.TenantName = request.Name;
                    tenant.TenantWebSite = request.TenantWebSite;

                    if (!request.TenantImage.IsNullOrEmpty())
                        tenant.TenantImage = request.TenantImage;
                    
                    tenant.OverrideUsersEmailSignature = request.OverrideUsersEmailSignature;
                    tenant.TenantEmailSignature = request.TenantEmailSignature;

                    var saveRequest = new SaveRequest<TenantRow>() { Entity = tenant };

                    var uow = new UnitOfWork(connection);


                    new TenantRepository().Update(uow, saveRequest);
                    uow.Commit();

                    UserRetrieveService.RemoveCachedUser(user.UserId, user.Username);
                }
                finally
                {
                    grantor.UndoGrant();
                }


                return new ServiceResponse();
            });
        }


        [HttpPost, JsonFilter]
        public Result<ServiceResponse> EditUserProfile(EditUserProfileRequest request)
        {
           // new TransientGrantingPermissionService(new PermissionService()).Grant("Administration:User:Modify");
            return this.UseConnection("Default", connection =>
            {
                request.CheckNotNull();
                var user = (UserDefinition)Serenity.Authorization.UserDefinition;

                if (request.DisplayName.IsEmptyOrNull())
                    throw new ArgumentNullException("name");

                if (request.UserEmail.IsEmptyOrNull())
                    throw new ArgumentNullException("email");

                var saveRequest = new SaveRequest<UserRow>();
                saveRequest.Entity = new UserRow();
                saveRequest.EntityId = user.UserId;

                saveRequest.Entity.UserId = user.UserId;
                saveRequest.Entity.DisplayName = request.DisplayName;
                saveRequest.Entity.Email = request.UserEmail;

                if (!request.UserImage.IsNullOrEmpty())
                    saveRequest.Entity.UserImage = request.UserImage;

                saveRequest.Entity.EmailSignature = request.USerEmailSignature;
                saveRequest.Entity.WebSite = request.UserWebSite;
                saveRequest.Entity.PhoneNumber = request.UserPhone;

                var uow = new UnitOfWork(connection);
                new UserRepository().Update(uow, saveRequest);
                uow.Commit();
                UserRetrieveService.RemoveCachedUser(user.UserId, user.Username);

                return new ServiceResponse();
            });
        }
    }
}