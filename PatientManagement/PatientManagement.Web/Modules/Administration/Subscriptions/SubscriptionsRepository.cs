

using System.Linq;
using MVC;
using PatientManagement.Administration.Entities;

namespace PatientManagement.Administration.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.SubscriptionsRow;

    public class SubscriptionsRepository
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
            protected override void BeforeSave()
            {
                base.AfterSave();

                var user = (UserDefinition)Authorization.UserDefinition;

                if (Row.IsActive == 1)
                {
                    var tenantFld = TenantRow.Fields;
                    var con = SqlConnections.NewFor<TenantRow>();
                    var tenant = con.First<TenantRow>(tenantFld.TenantId == user.TenantId);
                    tenant.SubscriptionId = Row.SubscriptionId;
                    con.UpdateById(tenant);

                    var tmp = Connection.List<MyRow>().Where(p => p.IsActive == 1 && p.TenantId == user.TenantId);

                    foreach (var subscriptionsRow in tmp)
                    {
                        subscriptionsRow.IsActive = 0;
                        Connection.UpdateById(subscriptionsRow);
                    }
                }
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}