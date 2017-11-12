
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerFormatter()
    export class MedicalSpecialtiesFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as string[];
            if (!idList || !idList.length)
                return "";

            var byId = MedicalSpecialtyRow.getLookup().itemById;
            let z: MedicalSpecialtyRow;
            return "<span class=''><i class='fa fa-medkit'></i>  " + Q.htmlEncode(idList.map(x => ((z = byId[x]) ? z.Name : x)).join(", ")) + '</span>';
        }
    }

}