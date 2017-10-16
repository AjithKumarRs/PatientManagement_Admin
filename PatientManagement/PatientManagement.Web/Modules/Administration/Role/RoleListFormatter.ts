
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerFormatter()
    export class RoleListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as string[];
            if (!idList || !idList.length)
                return "";

            var byId = Administration.RoleRow.getLookup().itemById;
            let z: Administration.RoleRow;
            return "<span class='fa icon-lock'>  " + Q.htmlEncode(idList.map(x => ((z = byId[x]) ? z.RoleName : x)).join(", ")) + '</span>';
        }
    }

}