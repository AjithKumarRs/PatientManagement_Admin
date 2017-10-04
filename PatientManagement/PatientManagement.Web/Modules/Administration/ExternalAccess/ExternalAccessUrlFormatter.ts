namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerFormatter()
    export class ExternalAccessUrlFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {

            return "<a href='"
                + Q.resolveUrl("~/external/"
                    + Q.htmlEncode(ctx.value))
                + "' target='_blank' ><span class='key-symbol'>"
                + Q.htmlEncode(ctx.value) + '</span></a>';

        }
    }
}