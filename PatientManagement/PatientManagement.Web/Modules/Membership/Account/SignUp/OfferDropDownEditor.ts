
namespace PatientManagement.PatientManagement {
    @Serenity.Decorators.registerEditor()
    export class OfferDropDownEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);

            this.addOption("key1", "Text 1");
            this.addOption("key2", "Text 2");
        }
    }
}