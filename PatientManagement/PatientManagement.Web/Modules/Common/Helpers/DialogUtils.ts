﻿namespace PatientManagement.DialogUtils {
    export function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean) {
        element.bind('dialogbeforeclose', function (e) {
            if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                return;
            }

            e.preventDefault();
            Q.confirm(Q.text('Validation.PendingChangesConfirmation'),
                () => element.find('div.save-and-close-button').click(),
                {
                    onNo: function () {
                        element.dialog().dialog('close');
                    }
                });
        });
    }
}
