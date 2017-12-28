
namespace PatientManagement {
    @Serenity.Decorators.element('<input type="text"/>')
    @Serenity.Decorators.registerClass([Serenity.ISetEditValue])
    export class AddressAutocomplete extends Serenity.Widget<any>
    implements Serenity.ISetEditValue {

        constructor(element: JQuery) {
            super(element);
            this.element.addClass('geocomplete');
        }

        public setEditValue(source: any, property: Serenity.PropertyItem): void {
           $("#geocomplete-hidden").trigger('geocomplete');

           // $(".geocomplete").trigger("geocode");
            this.element.val(source[property.name]);

          //  $('.map_input').html('');
        }
        
    }
}
