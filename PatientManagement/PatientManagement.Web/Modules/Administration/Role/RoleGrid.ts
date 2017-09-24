namespace PatientManagement.Administration {

    @Serenity.Decorators.registerClass()
    export class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey() { return "Administration.Role"; }
        protected getDialogType() { return RoleDialog; }
        protected getIdProperty() { return RoleRow.idProperty; }
        protected getLocalTextPrefix() { return RoleRow.localTextPrefix; }
        protected getService() { return RoleService.baseUrl; }
        protected getIsActiveProperty() { return OffersRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getDefaultSortBy() {
            return [RoleRow.Fields.RoleName];
        }
    }
}