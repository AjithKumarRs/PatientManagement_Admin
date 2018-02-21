namespace PatientManagement.PatientManagement {
    @Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
    export class VisitsPriceFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {

            if (!this.visitTypePriceProperty || !this.visitTypeCurrencyIdProperty) {
                return text;
            }
            var visitTypePrice = ctx.item[this.visitTypePriceProperty];
            var visitTypeCurrencyId = ctx.item[this.visitTypeCurrencyIdProperty];

            var text = Q.htmlEncode(ctx.value);
            
            return "<span class='money-symbol'>" + text + '</span>';
            

        }


        @Serenity.Decorators.option()
        public visitTypePriceProperty: string;
        @Serenity.Decorators.option()
        public visitTypeCurrencyIdProperty: string;

        public initializeColumn(column: Slick.Column) {
            column.referencedFields = column.referencedFields || [];

            if (this.visitTypePriceProperty)
                column.referencedFields.push(this.visitTypePriceProperty);

            if (this.visitTypeCurrencyIdProperty)
                column.referencedFields.push(this.visitTypeCurrencyIdProperty);
        }
    }

}