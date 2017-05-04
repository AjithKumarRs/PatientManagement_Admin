namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
    export class PatientsFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var text = Q.htmlEncode(ctx.value);

            if (!this.genderProperty) {
                return text;
            }
            var gender = ctx.item[this.genderProperty];
            return "<span class='" + ((gender === Gender.Female) ?
                    'employee-symbol female' : 'employee-symbol male') +
                "'>" + text + '</span>';
        }

        @Serenity.Decorators.option()
        public genderProperty: string;

        public initializeColumn(column: Slick.Column) {
            column.referencedFields = column.referencedFields || [];
            if (this.genderProperty)
                column.referencedFields.push(this.genderProperty);
        }
    }

    @Serenity.Decorators.registerFormatter()
    export class PatientsPhoneFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            return "<span class='phone-symbol'>" + Q.htmlEncode(ctx.value) + '</span>'

        }
    }

}