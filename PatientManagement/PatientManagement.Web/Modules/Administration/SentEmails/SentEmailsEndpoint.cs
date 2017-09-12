﻿
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
