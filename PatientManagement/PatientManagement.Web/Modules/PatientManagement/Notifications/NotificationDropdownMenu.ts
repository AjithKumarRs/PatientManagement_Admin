/// <reference types="jqueryui" />

namespace PatientManagement.PatientManagement {

    export class NotificationDropdownMenu extends Serenity.TemplatedWidget<any> {
        protected getService() { return NotificationsService.baseUrl; }
        private notificationIds: number[];

        constructor(elem: JQuery, opt: {}) {
            super(elem, opt);

            this.byId('NotificationDropdownMenuHeader').text(Q.text("Site.Layout.NotificationMenuHeader"));
            this.byId('NotificationDropdownMenuFooter').text(Q.text("Site.Layout.NotificationMenuFooter"));
            this.byId('MarkAllAsSeen').text(Q.text("Site.Layout.NotificationMenuMarkAsSeen"));

            var toggleMenuButton = this.byId('NotificationDropdownMenuToggle');
            toggleMenuButton.click((e) => this.openClick(e));
            PatientManagement.NotificationsService.CountNotifications({ Take: 50 },
                resp => {
                    var text = resp.Count + "";
                    if (resp.Count >= 50)
                        text = text + "+";
                        
                    this.byId('NotificationCounterLabel').text(text);

                });

            this.byId('MarkAllAsSeen').click((e) => this.markAsSeen());
        }

        public updateNotifications = (): void => {
            //if (this.byId('NotificationCounterLabel').text() === "0")
            //    return;
            PatientManagement.NotificationsService.ListForDropdown({ Take: 50 },
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
                            p.css("white-space", "normal");
                            a.append(p);

                            notifactionList.append(a);

                        }
                    } else {
                        var a = $('<a/>');
                        var h4 = $('<h4/>');

                        h4.text(Q.text("Site.Layout.NoNotificationMenu"));
                        a.append(h4);
                        notifactionList.append(a);
                    }


                 //   this.markAsSeen();

                });
        };

        protected openClick(e) {
            e.preventDefault();
            if ($('#NotificationDropdownMenu').hasClass("open"))
                return;

            //if (this.byId('Preloader').length) {
            this.updateNotifications();




        }
        
        protected markAsSeen() {
            for (var idNotification in this.notificationIds) {
                PatientManagement.NotificationsService.MarkAsSeen({ EntityId: this.notificationIds[Number(idNotification)]},
                    resp => {
                        var counter = Number(this.byId('NotificationCounterLabel').text());
                        this.byId('NotificationCounterLabel').text(counter - 1);
                    });
            }


            //var entities = new Array<PatientManagement.UserNotificationsRow>();
            //for (var id in this.notificationIds) {
            //    var entity = <PatientManagement.UserNotificationsRow>{};

            //    entity.NotificationId = this.notificationIds[Number(id)];

            //    //if (entities.indexOf(this.notificationIds[Number(id)]) > -1)
            //    //    return;

            //    entities.push(entity);
            //}

            //PatientManagement.UserNotificationsService.CreateList({
            //    Entity: entities
            //}, resp => {
            //    this.byId('NotificationCounterLabel').text(0);

            //});
        }
    }

}
