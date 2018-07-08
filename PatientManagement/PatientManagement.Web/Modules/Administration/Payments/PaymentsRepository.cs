

using System.Linq;
using Microsoft.Rest;
using PatientManagement.Administration.Entities;
using PatientManagement.PatientManagement;

namespace PatientManagement.Administration.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.PaymentsRow;

    public class PaymentsRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            request.Entity.SubTotal = request.Entity.Value;

            if (!String.IsNullOrEmpty(request.Entity.CouponKey) && request.Entity.CouponId.Any())
            {
                var coupon = uow.Connection.ById<CouponsRow>(request.Entity.CouponId.FirstOrDefault());

                if (coupon.EndDate.HasValue && coupon.EndDate < DateTime.Now)
                    throw new ValidationError(Texts.Site.Payments.CouponExpiredError);

                if (coupon.MaxTimeUsing.HasValue && coupon.IsUsed >= coupon.MaxTimeUsing.Value)
                    throw new ValidationError(Texts.Site.Payments.CouponExpiredError);
                
                var price = (request.Entity.Value * coupon.Discount) / 100;
                request.Entity.Value = request.Entity.Value - price;
                request.Entity.CouponDiscount = coupon.Discount;
                coupon.IsUsed = coupon.IsUsed + 1;

                uow.Connection.UpdateById(coupon);


            }
            else if (!String.IsNullOrEmpty(request.Entity.CouponKey))
                throw new ValidationError(Texts.Site.Payments.CouponNotExist);

            request.Entity.MonthsPayed = Int16.Parse(uow.Connection.ById<PaymentOptionsRow>(request.Entity.PaymentOptionId).Months.Value.ToString());
            request.Entity.PaymentCurrency = uow.Connection.ById<CurrenciesRow>(request.Entity.CurrencyId).CurrencyId;

            var details = uow.Connection.ById<PaymentsDetailsRow>(request.Entity.PaymentDetailsId);
            request.Entity.PaymentType = details.PaymentType.ToString();
            request.Entity.CustomerBankName = details.BankName;

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

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void BeforeSave()
            {
                base.BeforeSave();
                if (Row.CouponId.Any())
                {
                    var coupon = Connection.ById<CouponsRow>(Row.CouponId);

                }
            }

            protected override void AfterSave()
            {
                base.AfterSave();

                if (Row.CouponId.Any())
                {
                    var coupon = Connection.ById<CouponsRow>(Row.CouponId);

                }
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}