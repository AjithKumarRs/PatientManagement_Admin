using System.Collections.Generic;
using System.Linq;
using PatientManagement.Administration;
using PatientManagement.Administration.Entities;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.Web.Modules.Common.Helpers;
using Serenity;

namespace PatientManagement.PatientManagement.Repositories
{
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

                //Added to not try to send notification
                if (this.Row.FreeForReservation??true)
                    return;

                var cabinetName = Connection.ById<CabinetsRow>(Row.CabinetId).Name;
                if (IsUpdate)
                {

                    NotificationHelpers.SendVisitNotification(
                    Row.VisitId ?? 0,
                    cabinetName,
                    Row.StartDate ?? DateTime.Now,
                    Row.EndDate ?? DateTime.Now.AddMonths(1),
                    Row.PatientId ?? 0,
                    EEntityNotificationStatus.Updated);
                }
                else
                {
                    NotificationHelpers.SendVisitNotification(
                        Row.VisitId ?? 0,
                        cabinetName,
                        Row.StartDate ?? DateTime.Now,
                        Row.EndDate ?? DateTime.Now.AddMonths(1),
                        Row.PatientId ?? 0,
                        EEntityNotificationStatus.Created);
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

                //Added to not try to send notification
                if (this.Row.FreeForReservation ?? true)
                    return;

                var cabinetName = Connection.ById<CabinetsRow>(Row.CabinetId).Name;

                NotificationHelpers.SendVisitNotification(
                    Row.VisitId ?? 0, cabinetName,
                    Row.StartDate ?? DateTime.Now,
                    Row.EndDate ?? DateTime.Now.AddMonths(1),
                    Row.PatientId ?? 0,
                    EEntityNotificationStatus.Deleted);

            }
        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            protected override void OnReturn()
            {
                base.OnReturn();

                if (!Authorization.HasPermission(PermissionKeys.AdministrationTenantsVisitPayments))
                    return;

                var currencyIdList = Response.Entities.Where(x => x.VisitTypeCurrencyId != null)
                    .Select(x => x.VisitTypeCurrencyId.Value)
                    .Distinct();

                if (currencyIdList.Any())
                {

                    using (var connection = SqlConnections.NewFor<CurrenciesRow>())
                    {
                        var currencyFlds = CurrenciesRow.Fields;
                        
                        IDictionary<int, List<string>>  currencies = connection.Query(new SqlQuery()
                                .From(currencyFlds)
                                .Select(currencyFlds.Id)
                                .Select(currencyFlds.CurrencyId)
                                .Select(currencyFlds.Name)
                                .Where(currencyFlds.Id.In(currencyIdList)))
                            .ToDictionary(x =>
                                    (int)(x.Id ?? x.ID), x => new List<string>() { x.CurrencyId, x.Name }
                            );
                        List<string> s;
                        foreach (var x in Response.Entities)
                        {
                            if (x.VisitTypeCurrencyId != null &&
                                currencies.TryGetValue(x.VisitTypeCurrencyId.Value, out s))
                            {
                                var currencyName = string.IsNullOrEmpty(s[1]) ? s[0] : s[1];
                                var price = (x.VisitTypePrice != null) ? x.VisitTypePrice.Value.ToString("#.##") : "0";
                                x.VisitTypePriceFormatted = $"{price} {currencyName}";
                            }
                        }
                    }


                }
            }
        }
    }
}