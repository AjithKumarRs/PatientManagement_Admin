

using NodaMoney;
using NUglify.Helpers;
using PatientManagement.Administration.Entities;
using PatientManagement.Web.Modules.Common.Helpers;
using Serenity.Data;

namespace PatientManagement.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PaymentsRow))]
    public class PaymentsController : Controller
    {
        [Route("Administration/Payments")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Payments/PaymentsIndex.cshtml");
        }

        [Route("Administration/Payments/GetPrice")]
        public IActionResult GetPrice(int SubscriptionId, int PaymentOptionId, int CurrencyId)
        {
            if (!Serenity.Authorization.IsLoggedIn)
            {
                return StatusCode(403);
            }

            var price = CalculatePrice(SubscriptionId, PaymentOptionId, CurrencyId);

            return Ok(price);
        }

        private decimal CalculatePrice(int SubscriptionId, int PaymentOptionId, int CurrencyId)
        {
            var connection = SqlConnections.NewFor<SubscriptionsRow>();

            var subscription = connection.ById<SubscriptionsRow>(SubscriptionId);
            var paymentOption = connection.ById<PaymentOptionsRow>(PaymentOptionId);
            var currency = connection.ById<CurrenciesRow>(CurrencyId);

            if (subscription == null || paymentOption == null || currency == null)
                return 0;

            var offer = connection.ById<OffersRow>(subscription.OfferId);
            var offerprice = OfferPriceHelper.CalculateOfferPrice(offer, currency);

            offerprice = offerprice * paymentOption.Months??1;

            return offerprice;
        }
    }
}