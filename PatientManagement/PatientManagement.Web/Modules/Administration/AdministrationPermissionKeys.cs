
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
            [Description("Coupons View")]
            public const string ReadPermission = "AdministrationTenants:Coupons";
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "Administration:Coupons:Page";
            [Description("Insert"), ImplicitPermission(ReadPermission)]
            public const string InsertPermission = "Administration:Coupons:Insert";
            [Description("Update"), ImplicitPermission(ReadPermission), ImplicitPermission(InsertPermission)]
            public const string UpdatePermission = "Administration:Coupons:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(InsertPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Administration:Coupons:Delete";
        }

        [DisplayName("Currencies")]
        public class Currencies
        {
            [Description("Currencies View")]
            public const string ReadPermission = "AdministrationTenants:Currencies";
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "Administration:Currencies:Page";
            [Description("Insert"), ImplicitPermission(ReadPermission)]
            public const string InsertPermission = "Administration:Currencies:Insert";
            [Description("Update"), ImplicitPermission(ReadPermission), ImplicitPermission(InsertPermission)]
            public const string UpdatePermission = "Administration:Currencies:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(InsertPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Administration:Currencies:Delete";
        }

        [DisplayName("Languages and Translations")]
        public class Translation
        {
            [Description("View")]
            public const string ReadPermission = "Administration:Translation:Read";
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string LanguagesPagePermission = "Administration:Languages:Page";
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string TranslationsPagePermission = "Administration:Translation:Page";
            [Description("Modify"), ImplicitPermission(ReadPermission)]
            public const string ModifyPermission = "Administration:Translation:Modify";
        }
    }
}
