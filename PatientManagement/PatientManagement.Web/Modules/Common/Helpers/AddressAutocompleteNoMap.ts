/// <reference types="googlemaps" />
/// <reference types="jqueryui" />

namespace PatientManagement {
    @Serenity.Decorators.element('<input type="text"/>')
    @Serenity.Decorators.registerClass([Serenity.ISetEditValue])
    export class AddressAutocompleteNoMap extends Serenity.Widget<IAddressAutocompleteNoMapOptions>
        implements Serenity.ISetEditValue {

        constructor(element: JQuery, opt: IAddressAutocompleteNoMapOptions) {
            super(element, opt);

            var divField = this.element.parents('.field');

            divField.parents("form").addClass("form_geocomplete");

        }

        public setEditValue(source: any, property: Serenity.PropertyItem): void {
            this.element.val(source[property.name]);

            this.element.geocomplete({
                details: '.form_geocomplete', types: ["(cities)"]
            }).bind("geocode:result", function (event, result) {
                var city = '';
                var country = '';

                for (var j = 0; j < result.address_components.length; j++) {
                    city = result.address_components[0].long_name;
                    if (result.address_components[j].types[0] == 'country') {
                        country = result.address_components[j].long_name;
                    }
                }

                if (property.editorParams.option === "city")
                    $("#" + event.target.id).val(city);

                if (property.editorParams.option === "country")
                    $("#" + event.target.id).val(country); 
            });

           //TODO: jquery.event.drag.js line 106 is preventing the dropdown for countries 
           $(document).unbind('mousedown');
            
        }
        
    }

    export interface IAddressAutocompleteNoMapOptions {
        option: string;

    }
    
}
