using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NodaMoney;
using PatientManagement.Administration.Entities;
using PatientManagement.Administration.Pages;
using Serenity.Data;

namespace PatientManagement.Web.Modules.Common.Helpers
{
    public class OfferPriceHelper
    {
        public static decimal CalculateOfferPrice(OffersRow offer, CurrenciesRow neededCurrency)
        {
            using (var connection = SqlConnections.NewFor<OffersRow>())
            {
                var currencyFields = CurrenciesRow.Fields;
                var currencyOffer = connection.First<CurrenciesRow>(currencyFields.Id == offer.CurrencyId.Value);

                if (offer.CurrencyId == neededCurrency.Id)
                {
                    return new Money(offer.Price ?? 0, Currency.FromCode(currencyOffer.CurrencyId)).Amount;
                }
                else
                {

                    if (currencyOffer.BaseCurrencyId.HasValue)
                    {
                        ExchangeRate exchangeRateOffer;

                        var baseCurrency =
                                connection.First<CurrenciesRow>(
                                    currencyFields.Id == currencyOffer.BaseCurrencyId.Value);

                        exchangeRateOffer = new ExchangeRate(Currency.FromCode(baseCurrency.CurrencyId),
                            Currency.FromCode(currencyOffer.CurrencyId),
                            currencyOffer.Rate ?? 0);

                        if (baseCurrency.Id == neededCurrency.Id)
                        {
                            return exchangeRateOffer
                                .Convert(new Money(offer.Price ?? 0,
                                    Currency.FromCode(currencyOffer.CurrencyId))).Amount;
                        }
                        else
                        {
                            var tempPriceOffer = exchangeRateOffer.Convert(
                                new Money(offer.Price ?? 0, Currency.FromCode(currencyOffer.CurrencyId)));

                            var exchangeRateNeeded = new ExchangeRate(Currency.FromCode(baseCurrency.CurrencyId),
                                Currency.FromCode(neededCurrency.CurrencyId), neededCurrency.Rate ?? 0);

                            return exchangeRateNeeded.Convert(tempPriceOffer).Amount;
                        }
                    }
                    else
                    {
                        var exchangeRateNeeded = new ExchangeRate(Currency.FromCode(currencyOffer.CurrencyId),
                            Currency.FromCode(neededCurrency.CurrencyId), neededCurrency.Rate ?? 0);

                        return exchangeRateNeeded
                            .Convert(new Money(offer.Price ?? 0, Currency.FromCode(currencyOffer.CurrencyId))).Amount;
                    }

                }
            }
        }
    }
}
