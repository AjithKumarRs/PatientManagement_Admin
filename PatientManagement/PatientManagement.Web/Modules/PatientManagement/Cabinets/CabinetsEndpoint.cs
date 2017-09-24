﻿
using System;
using PatientManagement.Web.Modules.Common;

namespace PatientManagement.PatientManagement.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.CabinetsRepository;
    using MyRow = Entities.CabinetsRow;

    [Route("Services/PatientManagement/Cabinets/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CabinetsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var maximumInserts = UserSubscriptionHelper.GetTenantMaximumCabinets();
            if (this.List(uow.Connection, new ListRequest()).TotalCount >= maximumInserts)
            {
                throw new ValidationError(string.Format(Texts.Site.Subscriptions.MaximumCabinetsError, maximumInserts));
            }

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

        public RetrieveResponse<WorkHours> RetrieveWorkHours(IDbConnection connection, RetrieveRequest request)
        {
             var entity = new MyRepository().Retrieve(connection, request);

            var model = new WorkHours
            {
                start = TimeSpan.FromMinutes(entity.Entity.WorkHoursStart ?? 420).ToString(),
                end = TimeSpan.FromMinutes(entity.Entity.WorkHoursEnd ?? 1200).ToString(),
            };

            var response=  new RetrieveResponse<WorkHours>();
            response.Entity = model;

            return response;
        }

        public class WorkHours
        {
            public string start { get; set; }

            public string end { get; set; }
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
