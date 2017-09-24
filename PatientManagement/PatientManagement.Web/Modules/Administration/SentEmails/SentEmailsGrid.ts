
namespace PatientManagement.Administration {
    
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
            var fld = SentEmailsRow.Fields;

            Q.first(columns, x => x.field == fld.FromEmail).format =
                ctx => '<a href="javascript:;" class="view-email-link">'+ Q.htmlEncode(ctx.value) + '</a>';

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
        }
    }
}