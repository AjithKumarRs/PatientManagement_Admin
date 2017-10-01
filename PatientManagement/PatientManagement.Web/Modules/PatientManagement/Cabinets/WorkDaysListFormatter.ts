
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerFormatter()
    export class WorkDaysListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as string[];
            if (!idList || !idList.length)
                return "";
            var text = "<span class='calendar-day-symbol'>";
            var listDays = new Array<string>();
            for (let id in idList.sort()) {
                listDays.push(Q.tryGetText("Enums.PatientManagement.PatientManagement.WeekDays." + WeekDays[idList[id]]));
            }
            text += listDays.join(', ');
            text += '</span>';
            return text;
        }
    }

}