

using PatientManagement.Administration;
using PatientManagement.Administration.Entities;
using Serenity.Navigation;

namespace PatientManagement.PatientManagement.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.VisitTypesRow;

    public class VisitTypesRepository
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
        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyUndeleteHandler().Process(uow, request);
        }
        private class MyUndeleteHandler : UndeleteRequestHandler<MyRow> { }
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        public ListResponse<MyRow> ListForMenu(IDbConnection connection, ListRequest request)
        {
            return new MyListForMenuHandler().Process(connection, request);
        }
        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void AfterSave()
            {
                base.AfterSave();

                var user = (UserDefinition)Authorization.UserDefinition;
                //Remove cached navigation for all users in tenant
                using (var connection = SqlConnections.NewFor<UserRow>())
                {
                    var userFlds = UserRow.Fields;
                    foreach (var x in connection.List<UserRow>(userFlds.TenantId == (user.TenantId) && userFlds.IsActive == 1))
                    {
                        TwoLevelCache.Remove("LeftNavigationModel:NavigationItems:" + x.UserId);
                    }
                }
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            protected override void OnAfterDelete()
            {
                base.OnAfterDelete();

                var user = (UserDefinition)Authorization.UserDefinition;
                //Remove cached navigation for all users in tenant
                using (var connection = SqlConnections.NewFor<UserRow>())
                {
                    var userFlds = UserRow.Fields;
                    foreach (var x in connection.List<UserRow>(userFlds.TenantId == (user.TenantId)))
                    {
                        TwoLevelCache.Remove("LeftNavigationModel:NavigationItems:" + x.UserId);
                    }
                }
            }
        }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
        }

        private class MyListForMenuHandler : ListRequestHandler<MyRow>
        {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);


                var user = (UserDefinition)Authorization.UserDefinition;

                if (!Authorization.HasPermission(PermissionKeys.Tenants))
                    query.Where(fld.TenantId == user.TenantId);

                query.Where(fld.ShowInMenu == 1);
            }
        }

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);


                var user = (UserDefinition)Authorization.UserDefinition;

                // if (!Authorization.HasPermission(PermissionKeys.Tenants))
                query.Where(fld.TenantId == user.TenantId);
            }
        }
    }
}