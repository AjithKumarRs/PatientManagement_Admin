/// <reference types="jqueryui" />

namespace PatientManagement.Administration {

    @Serenity.Decorators.registerClass()
    export class CurrenciesGrid extends Serenity.EntityGrid<CurrenciesRow, any> {
        protected getColumnsKey() { return 'Administration.Currencies'; }
        protected getDialogType() { return CurrenciesDialog; }
        protected getIdProperty() { return CurrenciesRow.idProperty; }
        protected getLocalTextPrefix() { return CurrenciesRow.localTextPrefix; }
        protected getService() { return CurrenciesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();


            buttons.push({
                title: 'Update All Currencies ',
                cssClass: 'multiple-add-button',
                onClick: () => {
                    Q.confirm("Are You sure that you want to update all Currencies?", () => {
                        var joined = "";
                        var url = "http://data.fixer.io/api/latest?access_key=fb5a4c0dfd8455c9ca33abc357907202";

                        var entities = CurrenciesService.List({}, response => {


                            joined = response.Entities.map(o => o.CurrencyId).join(',');;

                            if (response.Entities.length > 1) {
                                url = url + "?symbols=" + joined;
                            }
                            $.get(url, function (data) {
                                for (var curr in data.rates) {

                                    var row = <CurrenciesRow>{};
                                    row.CurrencyId = curr;
                                    row.BaseCurrencyId = 1;
                                    row.Rate = data.rates[curr];

                                    CurrenciesService.UpdateAllCurrencies({
                                        Entity: row
                                    }, response => {
                                        $('.refresh-button').click();
                                    });
                                }
                            });

                        });
                    });

                }
            });

            return buttons;
        }

    }
}