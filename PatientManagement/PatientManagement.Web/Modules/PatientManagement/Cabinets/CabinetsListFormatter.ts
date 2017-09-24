
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerFormatter()
    export class CabinetsListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as string[];
            if (!idList || !idList.length)
                return "";

            var byId = PatientManagement.CabinetsRow.getLookup().itemById;
            let z: PatientManagement.CabinetsRow;
            return idList.map(x => ((z = byId[x]) ? z.Name : x)).join(", ");
        }
    }

}