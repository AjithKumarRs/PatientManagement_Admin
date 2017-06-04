
using System;

namespace PatientManagement.PatientManagement.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.UserNotificationsRepository;
    using MyRow = Entities.UserNotificationsRow;

    [Route("Services/PatientManagement/UserNotifications/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class UserNotificationsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse CreateList(IUnitOfWork uow, SaveRequest<MyRow[]> request)
        {
            
            var user = (UserDefinition)Authorization.UserDefinition;

            foreach (var userNotificationsRow in request.Entity)
            {
                userNotificationsRow.UserId = user.UserId;
                userNotificationsRow.SeenAt = DateTime.Now;
                new MyRepository().Create(uow, new SaveRequest<MyRow>() {Entity = userNotificationsRow});
            }

            return new SaveResponse();
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
