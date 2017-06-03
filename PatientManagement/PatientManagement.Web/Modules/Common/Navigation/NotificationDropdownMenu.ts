/// <reference types="jqueryui" />

namespace PatientManagement.PatientManagement {

    export class NotificationDropdownMenu extends Serenity.TemplatedWidget<any> {
        protected getService() { return NotificationsService.baseUrl; }

        constructor(elem: JQuery, opt: {}) {
            super(elem, opt);

            this.byId('NotificationDropdownMenuHeader').text(Q.text("Site.Layout.NotificationMenuHeader"));
            this.byId('NotificationDropdownMenuFooter').text(Q.text("Site.Layout.NotificationMenuFooter"));

            var toggleMenuButton = this.byId('NotificationDropdownMenuToggle');
            toggleMenuButton.click((e) => this.openClick(e));
            
        };

        public updateNotifications = (): void => {
            PatientManagement.NotificationsService.List({},
                resp => {

                    this.byId('NotificationCounterLabel').text(resp.Entities.length);

                    var notifactionList = this.byId('NotificationDropdownMenuMessages');

                    notifactionList.children().remove();

                    if (resp.Entities.length > 0) {


                        var index = 0;
                        for (var t1 = 0; t1 < resp.Entities.length; t1++) {
                            var item = resp.Entities[t1];
                            var a = $('<a/>');

                            var div = "<div class='pull-left'><img src='" + item.InsertUserPicture + "' class='img-circle' alt='User Image'></div>";
                            a.append(div);

                            //TODO Fix date
                            var dateInserted = Q.formatDate(item.InsertDate);
                            var userH4 = "<h4><div>" + item.InsertUserDisplayName + "</div><small> <i class='fa fa-clock-o'> </i> " + dateInserted + "</small></h4>";
                            a.append(userH4);

                            var p = $('<p/>').text(item.Text);
                            a.append(p);

                            notifactionList.append(a);

                        }
                    } else {
                        var a = $('<a/>');
                        a.append("<h4>There is no new notifications</h4>")
                        notifactionList.append(a);
                    }
                });
        };

        protected openClick(e)
        {
            e.preventDefault();
            if ($('#NotificationDropdownMenu').hasClass("open"))
                return;

            
        }
}

}
