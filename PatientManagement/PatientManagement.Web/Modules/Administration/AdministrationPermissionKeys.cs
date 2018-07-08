
using Serenity.Extensibility;
using System.ComponentModel;
using PatientManagement.PatientManagement;

namespace PatientManagement.Administration
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        [Description(" Master admin only - Administration Tenants")]
        public const string Tenant = "Administration:Tenant";
        [Description(" Master admin only - Change Payment Status")]
        public const string PaymentStatus = "Administration:PaymentStatus";
        [Description(" Master admin only - Sergen")]
        public const string Sergen = "Administration:Sergen";

        [DisplayName("Tenant")]
        public class Tenants
        {
            [Description("Page"), ImplicitPermission(AdministrationTenantsPermissionKeys.Tenant.ReadPermission)]
            public const string PagePermission = "Administration:Tenants:Page";
            [Description("Modify"), ImplicitPermission(AdministrationTenantsPermissionKeys.Tenant.ReadPermission)]
            public const string ModifyPermission = "Administration:Tenants:Modify";
        }

        [DisplayName("User")]
        public class User
        {
            [Description("Page"), ImplicitPermission(AdministrationTenantsPermissionKeys.User.ReadPermission)]
            public const string PagePermission = "Administration:User:Page";
            [Description("Modify"), ImplicitPermission(AdministrationTenantsPermissionKeys.User.ReadPermission)]
            public const string ModifyPermission = "Administration:User:Modify";

            [Description("Change Is Active"), ImplicitPermission(AdministrationTenantsPermissionKeys.User.ReadPermission), ImplicitPermission(ModifyPermission)]
            public const string IsActivePermission = "Administration:User:IsActive";
        }

        [DisplayName("User Role")]
        public class UserRole
        {
            [Description("View")]
            public const string ReadPermission = "Administration:UserRole:Read";
            [Description("Modify"), ImplicitPermission(ReadPermission)]
            public const string ModifyPermission = "Administration:UserRole:Modify";
        }

        [DisplayName("Roles")]
        public class Roles
        {
            [Description("View")]
            public const string ReadPermission = "Administration:Roles:Read";
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "Administration:Roles:Page";
            [Description("Modify"), ImplicitPermission(ReadPermission)]
            public const string ModifyPermission = "Administration:Roles:Modify";
        }
        [DisplayName("User Permissions")]
        public class UserPermission
        {
            [Description("View")]
            public const string ReadPermission = "Administration:UserPermission:Read";
            [Description("Modify"), ImplicitPermission(ReadPermission)]
            public const string ModifyPermission = "Administration:UserPermission:Modify";
        }
        [DisplayName("Role Permissions")]
        public class RolePermissions
        {
            [Description("View")]
            public const string ReadPermission = "Administration:RolePermissions:Read";
            [Description("Modify"), ImplicitPermission(ReadPermission)]
            public const string ModifyPermission = "Administration:RolePermissions:Modify";
        }
        [DisplayName("Coupons")]
        public class Coupons
        {
            const string ReadPermission = AdministrationTenantsPermissionKeys.Coupons.ReadPermission;

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
            const string ReadPermission = AdministrationTenantsPermissionKeys.Currencies.ReadPermission;
            
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

        [DisplayName("Offers")]
        public class Offers
        {
            const string ReadPermission = AdministrationTenantsPermissionKeys.Offers.ReadPermission;

            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "Administration:Offers:Page";
            [Description("Modify"), ImplicitPermission(ReadPermission)]
            public const string ModifyPermission = "Administration:Offers:Modify";
        }


        [DisplayName("Sent Emails")]
        public class SentEmails
        {
            [Description("Update"), ImplicitPermission(PatientManagementPermissionKeys.SentEmails.ReadPermission), ImplicitPermission(PatientManagementPermissionKeys.SentEmails.InsertPermission)]
            public const string UpdatePermission = "Administration:SentEmails:Update";
            [Description("Delete"), ImplicitPermission(PatientManagementPermissionKeys.SentEmails.ReadPermission), ImplicitPermission(PatientManagementPermissionKeys.SentEmails.InsertPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Administration:SentEmails:Delete";
        }

        [DisplayName("Payment Options")]
        public class PaymentOptions
        {
            const string ReadPermission = AdministrationTenantsPermissionKeys.PaymentOptions.ReadPermission;
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "Administration:PaymentOptions:Page";
            [Description("Modify"), ImplicitPermission(ReadPermission)]
            public const string ModifyPermission = "Administration:PaymentOptions:Modify";
        }


    }

}
