
using PatientManagement.Administration.Entities;
using PatientManagement.Common.EmailTemplates;
using Serenity.Web;

namespace PatientManagement.Administration.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.SentEmailsRepository;
    using MyRow = Entities.SentEmailsRow;

    [Route("Services/Administration/SentEmails/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class SentEmailsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var emailModel = new UserToPatientEmailModel();

            emailModel.Text = request.Entity.Body;

            var user = (UserDefinition) Authorization.UserDefinition;
            using (var connection = SqlConnections.NewFor<UserRow>())
            {
                //Get Email Signature
                if (connection.ById<TenantRow>(user.TenantId).OverrideUsersEmailSignature.Value)
                    emailModel.EmailSignature = connection.ById<TenantRow>(user.TenantId).TenantEmailSignature;
                else
                    emailModel.EmailSignature = connection.ById<UserRow>(user.UserId).EmailSignature;

                var externalUrl = Config.Get<EnvironmentSettings>().SiteExternalUrl ??
                                  Request.GetBaseUri().ToString();

                //Get External Url
                var userWebsite = connection.ById<UserRow>(user.UserId).WebSite;
                var tenantWebSite = connection.ById<TenantRow>(user.TenantId).TenantWebSite;
                if (!string.IsNullOrWhiteSpace(userWebsite))
                    emailModel.ExternalUrl = userWebsite;
                else if (!string.IsNullOrWhiteSpace(tenantWebSite))
                    emailModel.ExternalUrl = tenantWebSite;
                else
                    emailModel.ExternalUrl = "https://myclario.com";

                //Get Logo url
                var tenantImage = connection.ById<TenantRow>(user.TenantId).TenantImage;
                if (!string.IsNullOrWhiteSpace(tenantImage))
                    emailModel.LogoUrl = UriHelper.Combine(externalUrl, "/upload/" + tenantImage);
                else
                    emailModel.LogoUrl = "http://admin.myclario.com/Content/images/clario/clario-logo-large.png";

            }
            var emailBody = TemplateHelper.RenderViewToString(HttpContext.RequestServices,
                    MVC.Views.Common.EmailTemplates.UserToPatientEmail.EmailTemplates_UserToPatientEmail, emailModel);

            request.Entity.Body = emailBody;

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

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
    }
}
