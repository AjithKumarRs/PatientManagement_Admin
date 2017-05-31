namespace PatientManagement.Common {

    export class RecieveNotificationToggle extends Serenity.Widget<any> {
        constructor(input: JQuery, opt: BootstrapSwitchOptions) {
            super(input, opt);

            console.log(this.options.state);

            this.options.onSwitchChange = (event, state) => {
                $.cookie('NotificationPreference', state, {
                    path: Q.Config.applicationPath,
                    expires: 365
                });
            };
            this.options.onText = Q.text("Site.Layout.RecieveNotificationToggleOn");
            this.options.offText = Q.text("Site.Layout.RecieveNotificationToggleOff");
            this.options.onColor = "success";
            this.options.offColor = "warning";
            input.attr('type', 'checkbox').bootstrapSwitch(this.options);

           
        }
    }
}