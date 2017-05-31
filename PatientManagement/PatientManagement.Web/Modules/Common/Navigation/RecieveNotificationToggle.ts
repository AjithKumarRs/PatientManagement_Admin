namespace PatientManagement.Common {

    export class RecieveNotificationToggle extends Serenity.Widget<any> {
        constructor(input: JQuery) {
            super(input);

            new Serenity.BooleanEditor(input);
            this.change(e => {
                console.log("asdas");
            });
        }
    }
}