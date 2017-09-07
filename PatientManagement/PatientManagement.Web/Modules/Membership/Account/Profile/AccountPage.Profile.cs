using PatientManagement.Administration;
using PatientManagement.PatientManagement.Entities;

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

            return View(MVC.Views.Membership.Account.Profile.AccountProfile);
        }

        [HttpPost, JsonFilter, ServiceAuthorize(PermissionKeys.AdministrationTenantsTenantEditing)]
        public Result<ServiceResponse> EditTenant(EditTenantRequest request)
        {
            return this.UseConnection("Default", connection =>
            {
                request.CheckNotNull();
                
                return new ServiceResponse();
            });
        }
    }
}