namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerFormatter()
    export class CabinetsFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            return "<span class='home-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';

        }
    }
}