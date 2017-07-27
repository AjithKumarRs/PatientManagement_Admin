
using MVC;
using PatientManagement.Common;
using PatientManagement.PatientManagement.Entities;

namespace PatientManagement.Administration.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.SentEmailsRow;

    public class SentEmailsRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var user = (UserDefinition)Serenity.Authorization.UserDefinition;
            request.Entity.FromEmail = user.Email;
            request.Entity.FromName = user.DisplayName;

            if (string.IsNullOrEmpty(request.Entity.ToName))
            {
                request.Entity.ToName = request.Entity.ToEmail;
            }
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
          
            protected override void AfterSave()
            {
                base.AfterSave();

                EmailHelper.SendToPatient(Row.FromEmail, Row.FromName, Row.Subject, Row.Body, Row.ToEmail, Row.ToName);
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}