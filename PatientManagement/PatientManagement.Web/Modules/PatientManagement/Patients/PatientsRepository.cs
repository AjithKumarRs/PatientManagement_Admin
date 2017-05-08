

using System.Linq;
using PatientManagement.PatientManagement.Entities;

namespace PatientManagement.PatientManagement.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.PatientsRow;

    public class PatientsRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
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

                if (!this.Connection.ExistsById<PatientHealthRow>(Row.PatientId))
                {
                    var ent = new PatientHealthRow
                    {
                        PatientId = Row.PatientId,
                        InsertUserId = Authorization.UserId.TryParseID32(),
                        InsertDate = DateTime.Now,
                        TenantId = ((UserDefinition)Authorization.UserDefinition).TenantId
                    };
                    this.Connection.Insert(ent);
                }
                if (!this.Connection.ExistsById<LifeStylesRow>(Row.PatientId))
                {
                    var ent2 = new LifeStylesRow
                    {
                        PatientId = Row.PatientId,
                        InsertUserId = Authorization.UserId.TryParseID32(),
                        InsertDate = DateTime.Now,
                        TenantId = ((UserDefinition)Authorization.UserDefinition).TenantId
                    };
                    this.Connection.Insert(ent2);
                }
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            protected override void OnBeforeDelete()
            {
                base.OnBeforeDelete();

                using (var connection = SqlConnections.NewFor<PatientHealthRow>())
                using (var uow = new UnitOfWork(connection))
                {
                    if(connection.ExistsById<LifeStylesRow>(Row.PatientId))
                        uow.Connection.DeleteById<LifeStylesRow>(Row.PatientId);

                    if (connection.ExistsById<PatientHealthRow>(Row.PatientId))
                        uow.Connection.DeleteById<PatientHealthRow>(Row.PatientId);

                    var ls = connection.List<VisitsRow>().Where(p => p.PatientId == Row.PatientId);
                    foreach (var item in ls)
                    {

                        uow.Connection.DeleteById<VisitsRow>(item.VisitId);
                    }
                    var fU = connection.List<PatientsFileUploadsRow>().Where(p => p.PatientId == Row.PatientId);
                    foreach (var item in fU)
                    {
                        uow.Connection.DeleteById<PatientsFileUploadsRow>(item.PatientFileUploadId);
                    }
                    uow.Commit();
                }
            }
        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}