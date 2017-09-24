
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerFormatter()
    export class UserListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as string[];
            if (!idList || !idList.length)
                return "";

            var byId = Administration.UserRow.getLookup().itemById;
            let z: Administration.UserRow;
            return idList.map(x => ((z = byId[x]) ? z.DisplayName : x)).join(", ");
        }
    }

}