
namespace PatientManagement.Administration.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.CurrenciesRepository;
    using MyRow = Entities.CurrenciesRow;

    [Route("Services/Administration/Currencies/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CurrenciesController : ServiceEndpoint
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

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse UpdateAllCurrencies(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var fields = MyRow.Fields;

            if (uow.Connection.Exists<MyRow>(fields.CurrencyId == request.Entity.CurrencyId))
            {
                var entity = uow.Connection.First<MyRow>(fields.CurrencyId == request.Entity.CurrencyId);
                request.EntityId = entity.Id;
                return new MyRepository().Update(uow, request);
            }
            return new MyRepository().Create(uow, request);

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
