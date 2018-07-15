
using System;
using System.Collections.Generic;
using PatientManagement.Administration;
using PatientManagement.Web.Modules.PatientManagement.Notifications;
using Serenity.Abstractions;
using Serenity.Reporting;
using Serenity.Web;

namespace PatientManagement.PatientManagement.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.NotificationsRepository;
    using MyRow = Entities.NotificationsRow;

    [Route("Services/PatientManagement/Notifications/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class NotificationsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }


        [HttpPost]
        public SaveResponse MarkAsSeen(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().MarkAsSeen(uow, request);
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
        public ListResponse<MyRow> ListForDropdown(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().ListForDropdown(connection, request);

        }
        public CountNotificationsResponse CountNotifications(IDbConnection connection, ListRequest request)
        {
            var some = new MyRepository().ListForDropdown(connection, request);
            return new CountNotificationsResponse
            {

                Count = some.Entities.Count
            };
        }

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.NotificationsColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "PaymentList_" +
                                                    DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }

    public class CountNotificationsRequest : ServiceRequest
    {
        public decimal Count { get; set; }
    }
    public class CountNotificationsResponse : ServiceResponse
    {
        public int Count { get; set; }
    }

}
