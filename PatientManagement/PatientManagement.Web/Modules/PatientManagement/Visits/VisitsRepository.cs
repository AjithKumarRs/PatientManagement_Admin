

using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.SignalR.Infrastructure;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.Web.Hubs;

namespace PatientManagement.PatientManagement.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.VisitsRow;

    public class VisitsRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            if (request.Entity.EndDate != null &&
                request.Entity.StartDate != null &&
                request.Entity.StartDate > request.Entity.EndDate ||
                request.Entity.StartDate == request.Entity.EndDate)
            {
                request.Entity.EndDate = request.Entity.StartDate?.AddMinutes(15);
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

                var notificationHub = Dependency.Resolver.Resolve<IConnectionManager>().GetHubContext<NotificationHub>();
                var user = (UserDefinition)Authorization.UserDefinition;
                var patientName = Connection.First<PatientsRow>(new Criteria(PatientsRow.Fields.PatientId) == Row.PatientId.ToString()).Name;

                if (IsUpdate)
                {

                    var notification = string.Format(Texts.Site.Notifications.VisitChangedNotification, user.DisplayName, patientName);
                    notificationHub.Clients.Group(user.TenantId.ToString()).visitChangedNotification(notification, Row.StartDate, Row.EndDate);
                }
                else
                {
                    var notification = string.Format(Texts.Site.Notifications.VisitAddedNotification, user.DisplayName, Row.PatientName);
                    notificationHub.Clients.AllExcept().Group(user.TenantId.ToString()).visitChangedNotification(notification, Row.StartDate, Row.EndDate);
                }
                
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
         
            protected override void ExecuteDelete()
            {
                try
                {
                    base.ExecuteDelete();
                }
                catch (Exception e)
                {
                    SqlExceptionHelper.HandleDeleteForeignKeyException(e);
                    throw;
                }
            }

            protected override void OnAfterDelete()
            {

                base.OnAfterDelete();

                var notificationHub = Dependency.Resolver.Resolve<IConnectionManager>().GetHubContext<NotificationHub>();
                var user = (UserDefinition)Authorization.UserDefinition;
                var patientName = Connection.First<PatientsRow>(new Criteria(PatientsRow.Fields.PatientId) == Row.PatientId.ToString()).Name;

                var notification = string.Format(Texts.Site.Notifications.VisitAddedNotification, user.DisplayName, patientName);
                notificationHub.Clients.Group(user.TenantId.ToString()).visitChangedNotification(notification, Row.StartDate, Row.EndDate);


            }
        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}