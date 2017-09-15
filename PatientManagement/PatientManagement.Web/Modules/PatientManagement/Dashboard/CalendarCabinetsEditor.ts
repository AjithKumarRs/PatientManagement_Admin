
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerEditor()
    export class CalendarCabinetsEditor extends Serenity.Select2Editor<any, any> {
        protected getService() { return CabinetsService.baseUrl; }


        constructor(container: JQuery) {
            super(container, null);

            CabinetsService.List({},
                response => {
                    if (response.TotalCount === 0) {
                        this.readOnly = true;
                    }
                    else if (response.TotalCount === 1) {
                        this.addItem({
                            id: response.Entities[0].CabinetId + "",
                            text: response.Entities[0].Name,

                        });
                        this.value = response.Entities[0].CabinetId + "";
                        //this.readOnly = true;
                    } else {

                        for (var i = 0; i < response.TotalCount; i++) {
                            this.addItem({
                                id: response.Entities[i].CabinetId + "",
                                text: response.Entities[i].Name,

                            });
                        }
                    }

                    var cookie = $.cookie("CabinetPreference");
                        this.value = cookie + "";

                    
                });


                this.changeSelect2(e => {
                    $.cookie('CabinetPreference', this.value, {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });

                    $("#calendar").fullCalendar('refetchEvents');


                    if ($('#cabinet-name-right-header').length > 0) {
                        console.log();

                        $('#cabinet-name-right-header').html(this.get_text());
                    }

                });
        }
    }

}