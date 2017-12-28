
namespace PatientManagement {
    @Serenity.Decorators.element('<input type="text"/>')
    @Serenity.Decorators.registerClass([Serenity.ISetEditValue])
    export class AddressAutocomplete extends Serenity.Widget<any>
        implements Serenity.ISetEditValue {

        constructor(element: JQuery) {
            super(element);
            var divField = this.element.parents('.field');
            divField.after('<input name="formatted_address" class="formatted_address" type="hidden" value="">');

            divField.after('<div class="field map_geocomplete" style="height: 300px;" />');

            divField.parents("form").addClass("form_geocomplete");
            element
                .geocomplete({
                    map: '.map_geocomplete',
                    details: '.form_geocomplete',
        });

        }

        public setEditValue(source: any, property: Serenity.PropertyItem): void {
            this.element.val(source[property.name]);
            $('.formatted_address').val(source[property.name]);
            
            $(".s-AddressAutocomplete").trigger('geocode');
        }

    }
}
