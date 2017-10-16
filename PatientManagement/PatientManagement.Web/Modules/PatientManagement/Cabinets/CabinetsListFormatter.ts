
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerFormatter()
    export class CabinetsListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as string[];
            if (!idList || !idList.length)
                return "<span class='home-symbol'></span>";

            var byId = PatientManagement.CabinetsRow.getLookup().itemById;
            let z: PatientManagement.CabinetsRow;
            return "<span class='home-symbol'>" + Q.htmlEncode(idList.map(x => ((z = byId[x]) ? z.Name : x)).join(", ")) + '</span>';
        }
    }

}