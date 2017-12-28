
namespace PatientManagement {
    @Serenity.Decorators.element('<input type="text"/>')
    @Serenity.Decorators.registerClass([Serenity.ISetEditValue])
    export class AddressAutocomplete extends Serenity.Widget<any>
    implements Serenity.ISetEditValue {

        constructor(element: JQuery) {
            super(element);
            console.log("Heelo");
            this.element.addClass('geocomplete');
        }

        public setEditValue(source: any, property: Serenity.PropertyItem): void {
            console.log("From");
            $("#geocomplete-hidden").trigger('geocomplete');
            this.element.val(source[property.name]);
        }
        
    }
}
