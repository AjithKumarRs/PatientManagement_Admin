/// <reference types="jqueryui" />

namespace PatientManagement.PatientManagement {
    @Serenity.Decorators.registerEditor()
    export class OfferDropDownEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);

            $.get("/api/offers/bgn", data => {

                for (var offer in data) {

                    var off = data[offer];
                    this.addOption(off.OfferId, off.OfferName);
                }
                var offerQ = Q.parseQueryString();
                var offerId = offerQ['offerId'] || offerQ['OfferId'] || offerQ['offerid'];
                if (offerId) {
                    this.value = offerId;
                }

            });
            
        }
    }
}