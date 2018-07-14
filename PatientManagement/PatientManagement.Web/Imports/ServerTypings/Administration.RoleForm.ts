namespace PatientManagement.Administration {
    export interface RoleForm {
        RoleName: Serenity.StringEditor;
        UsersInRole: Serenity.LookupEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class RoleForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Role';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RoleForm.init)  {
                RoleForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(RoleForm, [
                    'RoleName', w0,
                    'UsersInRole', w1,
                    'TenantId', w2
                ]);
            }
        }
    }
}
