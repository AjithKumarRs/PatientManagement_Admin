
using Serenity.Extensibility;
using System.ComponentModel;
namespace PatientManagement.Administration
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        public const string Tenants = "Administration:Tenants";

        public const string AdministrationTenantsPaymentsRead = "AdministrationTenants:Payments:Read";
        public const string AdministrationTenantsPaymentsModify = "AdministrationTenants:Payments:Modify";

        public const string AdministrationTenantsCurrenciesRead = "AdministrationTenants:CurrenciesRead";
        public const string AdministrationTenantsTenantRead = "AdministrationTenants:TenantRead";
        public const string AdministrationTenantsTenantEditing = "AdministrationTenants:TenantEditing";
        public const string AdministrationTenantsVisitPayments = "AdministrationTenants:VisitPayments";

        [DisplayName("Coupons")]
        public class Coupons
        {
            [Description("View")]
            public const string ReadPermission = "AdministrationTenants:Coupons:Read";
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "Administration:Coupons:Page";
            [Description("Insert"), ImplicitPermission(ReadPermission)]
            public const string InsertPermission = "Administration:Coupons:Insert";
            [Description("Update"), ImplicitPermission(ReadPermission), ImplicitPermission(InsertPermission)]
            public const string UpdatePermission = "Administration:Coupons:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(InsertPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Administration:Coupons:Delete";
        }
    }
}
