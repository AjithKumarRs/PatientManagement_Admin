
namespace PatientManagement.Administration {
    import fld = SentEmailsRow.Fields;

    @Serenity.Decorators.registerClass()
    export class SentEmailsGrid extends Serenity.EntityGrid<SentEmailsRow, any> {
        protected getColumnsKey() { return 'Administration.SentEmails'; }
        protected getDialogType() { return SentEmailsDialog; }
        protected getIdProperty() { return SentEmailsRow.idProperty; }
        protected getLocalTextPrefix() { return SentEmailsRow.localTextPrefix; }
        protected getService() { return SentEmailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
            columns.splice(1,
                0,
                {
                    field: 'Print Invoice',
                    name: '',
                    format: ctx => '<a class="inline-action open-email" title="Open Email">' +
                        '<i class="fa fa-file-code-o text-blue"></i> OPEN</a>',
                    width: 76,
                    minWidth: 54,
                    maxWidth: 76
                });

            return columns;
        }
        
        protected onClick(e: JQueryEventObject, row: number, cell: number): void {

            // let base grid handle clicks for its edit links
            super.onClick(e, row, cell);

            // if base grid already handled, we shouldn"t handle it again
            if (e.isDefaultPrevented()) {
                return;
            }

            // get reference to current item
            var item = this.itemAt(row);

            // get reference to clicked element
            var target = $(e.target);

            if (target.hasClass("view-email-link")) {
                e.preventDefault();

                new ViewEmailDialog(item.SentEmailId, item.ToName, item.InsertDate).dialogOpen();
                
            }

            if (target.hasClass("open-email")) {
                e.preventDefault();

                new ViewEmailDialog(item.SentEmailId, item.ToName, item.InsertDate).dialogOpen();

            }
        }
    }
}