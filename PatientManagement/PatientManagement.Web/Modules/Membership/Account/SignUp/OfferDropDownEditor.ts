/// <reference types="jqueryui" />

namespace PatientManagement.PatientManagement {
    @Serenity.Decorators.registerEditor()
    export class OfferDropDownEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);

            $.get("/api/offers/bgn", data => {

            for (var offer in data) {

                var off =data[offer];
                console.log(off);

                this.addOption(off.OfferId, off.OfferName);

            }
            });

            
        }
    }
}