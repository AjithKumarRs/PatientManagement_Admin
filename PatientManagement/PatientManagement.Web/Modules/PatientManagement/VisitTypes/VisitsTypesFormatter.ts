namespace PatientManagement.PatientManagement {
    @Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
    export class VisitsTypesFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {

            if (!this.backgroundProperty || !this.borderProperty) {
                return text;
            }
            var backgroundColor = ctx.item[this.backgroundProperty];
            var borderColor = ctx.item[this.borderProperty];

            var text = Q.htmlEncode(ctx.value);
            
            //return "<span style='background-color: " + color +";'>" + text + '</span>';

            return "<span class='visit-type-icon' style='background-color: " + backgroundColor + "; border-color: " + borderColor +";' >" + '</span>' + text;

        }


        @Serenity.Decorators.option()
        public backgroundProperty: string;
        @Serenity.Decorators.option()
        public borderProperty: string;

        public initializeColumn(column: Slick.Column) {
            column.referencedFields = column.referencedFields || [];

            if (this.backgroundProperty)
                column.referencedFields.push(this.backgroundProperty);

            if (this.borderProperty)
                column.referencedFields.push(this.borderProperty);
        }
    }

}