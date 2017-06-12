namespace PatientManagement.PatientManagement {
    @Serenity.Decorators.registerFormatter()
    export class NotificationsUserImageFormatter
    implements Slick.Formatter, Serenity.IInitializeColumn {


        format(ctx: Slick.FormatterContext): string {

            var file = (this.fileProperty ? ctx.item[this.fileProperty] : ctx.value) as string;
            if (!file || !file.length)
                return "";
                
            let href = Q.resolveUrl("~/upload/" + file);

            if (this.thumb) {
                var parts = file.split('.');
                file = parts.slice(0, parts.length - 1).join('.') + '_t.jpg';
            }

            let src;

            if (file.indexOf("Content") > 0) {
                src = Q.resolveUrl('~' + file);

            } else {
                src = Q.resolveUrl('~/upload/' + file);

            }
            return `<div style='height:50px; width: 50px'><img src="${src}" class='img-responsive img-circle img-thumbnail' /> </div>`;
        }

        initializeColumn(column: Slick.Column): void {
            if (this.fileProperty) {
                column.referencedFields = column.referencedFields || [];
                column.referencedFields.push(this.fileProperty);
            }
        }

        @Serenity.Decorators.option()
        public fileProperty: string;

        @Serenity.Decorators.option()
        public thumb: boolean;
    }
}