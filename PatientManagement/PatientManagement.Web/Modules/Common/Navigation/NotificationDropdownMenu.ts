/// <reference types="jqueryui" />

namespace PatientManagement.PatientManagement {

    export class NotificationDropdownMenu extends Serenity.TemplatedWidget<any> {
        protected getService() { return NotificationsService.baseUrl; }
        private notificationIds: number[];

        constructor(elem: JQuery, opt: {}) {
            super(elem, opt);

            this.byId('NotificationDropdownMenuHeader').text(Q.text("Site.Layout.NotificationMenuHeader"));
            this.byId('NotificationDropdownMenuFooter').text(Q.text("Site.Layout.NotificationMenuFooter"));

            var toggleMenuButton = this.byId('NotificationDropdownMenuToggle');
            toggleMenuButton.click((e) => this.openClick(e));
            PatientManagement.NotificationsService.CountNotifications({},
                resp => {
                    this.byId('NotificationCounterLabel').text(resp);

                });

        };

        public updateNotifications = (): void => {

            PatientManagement.NotificationsService.ListForDropdown({},
                resp => {

                    this.byId('NotificationCounterLabel').text(resp.Entities.length);

                    var notifactionList = this.byId('NotificationDropdownMenuMessages');

                    notifactionList.children().remove();

                    if (resp.Entities.length > 0) {


                        var index = 0;
                        this.notificationIds = new Array<number>();

                        for (var t1 = 0; t1 < resp.Entities.length; t1++) {
                            var item = resp.Entities[t1];

                            this.notificationIds.push(item.NotificationId);
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
                        var h4 = $('<h4/>');

                        h4.text(Q.text("Site.Layout.NoNotificationMenu"));
                        a.append(h4)
                        notifactionList.append(a);
                    }


                    this.markAsSeen();

                });
        };

        protected openClick(e)
        {
            e.preventDefault();
            if ($('#NotificationDropdownMenu').hasClass("open"))
                return;

            //if (this.byId('Preloader').length) {
                this.updateNotifications();


         

        }

        protected markAsSeen() {
            this.byId('NotificationCounterLabel').text(0);

            var entities = new Array<PatientManagement.UserNotificationsRow>();
            for (var id in this.notificationIds) {
                var entity = <PatientManagement.UserNotificationsRow>{};

                entity.NotificationId = this.notificationIds[Number(id)];

                if (entities.indexOf(this.notificationIds[Number(id)]) > -1)
                    return;

                entities.push(entity);
            }
            console.log(entities);

            PatientManagement.UserNotificationsService.CreateList({
                Entity: entities
            }, resp => {
                console.log("asas");
            });
        }
}

}
