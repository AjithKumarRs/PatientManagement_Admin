
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerFormatter()
    export class SentEmailsToEmailFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            return "<span class='mail-open-symbol'>" + Q.htmlEncode(ctx.value) + '</span>'
        }
    }

    @Serenity.Decorators.registerFormatter()
    export class SentEmailsFromEmailFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            return "<span class='mail-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
        }
    }

}