/// <reference types="jqueryui" />

namespace PatientManagement.PatientManagement {
    @Serenity.Decorators.registerEditor()
    export class OfferDropDownEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);

            $.get("/api/offers/bgn", data => {
                console.log(data);
              //  var offers = $.parseJSON(data);
              
            });

            
            this.addOption("key2", "Text 2");
        }
    }
}