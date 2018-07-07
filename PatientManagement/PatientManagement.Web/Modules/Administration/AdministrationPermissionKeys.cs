
using Serenity.Extensibility;
using System.ComponentModel;
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
        public const string AdministrationTenantsPaymentsRead = "AdministrationTenants:Payments:Read";
        public const string AdministrationTenantsPaymentsModify = "AdministrationTenants:Payments:Modify";

        public const string AdministrationTenantsCurrenciesRead = "AdministrationTenants:CurrenciesRead";
        [Description("Edit Tenant")]
        public const string AdministrationTenantsTenantEditing = "AdministrationTenants:Tenant:Edit";
        [Description("Visit Payments")]
        public const string AdministrationTenantsVisitPayments = "AdministrationTenants:VisitPayments";
        [DisplayName("Tenant")]
        public class Tenants
        {
            [Description("View")]
            public const string ReadPermission = "AdministrationTenants:Tenant:Read";
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "Administration:Tenants:Page";
            [Description("Modify"), ImplicitPermission(ReadPermission)]
            public const string ModifyPermission = "Administration:Tenants:Modify";
        }

        [DisplayName("User")]
        public class User
        {
            [Description("View")]
            public const string ReadPermission = "AdministrationTenants:User:Read";
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "Administration:User:Page";
            [Description("Modify"), ImplicitPermission(ReadPermission)]
            public const string ModifyPermission = "Administration:User:Modify";

            [Description("Change Is Active"), ImplicitPermission(ReadPermission), ImplicitPermission(ModifyPermission)]
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
            [Description("Coupons View")]
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

        [DisplayName("Currencies")]
        public class Currencies
        {
            [Description("Currencies View")]
            public const string ReadPermission = "AdministrationTenants:Currencies:Read";
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
            [Description("Offers View")]
            public const string ReadPermission = "AdministrationTenants:Offers:Read";
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "Administration:Offers:Page";
            [Description("Modify"), ImplicitPermission(ReadPermission)]
            public const string ModifyPermission = "Administration:Offers:Modify";
        }

        [DisplayName("Payment Options")]
        public class PaymentOptions
        {
            [Description("Payment Options View")]
            public const string ReadPermission = "AdministrationTenants:PaymentOptions:Read";
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "Administration:PaymentOptions:Page";
            [Description("Modify"), ImplicitPermission(ReadPermission)]
            public const string ModifyPermission = "Administration:PaymentOptions:Modify";
        }

        [DisplayName("Payments")]
        public class Payments
        {
            [Description("View")]
            public const string ReadPermission = "AdministrationTenants:Payments:Read";
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "AdministrationTenants:Payments:Page";
            [Description("Invoice View"), ImplicitPermission(ReadPermission)]
            public const string InvoicePermission = "AdministrationTenants:Payments:Invoice";
            [Description("Modify"), ImplicitPermission(ReadPermission)]
            public const string ModifyPermission = "AdministrationTenants:Payments:Modify";
        }

        [DisplayName("Payments Details")]
        public class PaymentsDetails
        {
            [Description("View")]
            public const string ReadPermission = "AdministrationTenants:PaymentsDetails:Read";
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "AdministrationTenants:PaymentsDetails:Page";
            [Description("Modify"), ImplicitPermission(ReadPermission)]
            public const string ModifyPermission = "AdministrationTenants:PaymentsDetails:Modify";
        }


        [DisplayName("Sent Emails")]
        public class SentEmails
        {
            [Description("View")]
            public const string ReadPermission = "PatientManagement:SentEmails:Read";
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "PatientManagement:SentEmails:Page";
            [Description("Insert"), ImplicitPermission(ReadPermission)]
            public const string InsertPermission = "PatientManagement:SentEmails:Insert";
            [Description("Update"), ImplicitPermission(ReadPermission), ImplicitPermission(InsertPermission)]
            public const string UpdatePermission = "Administration:SentEmails:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(InsertPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Administration:SentEmails:Delete";
        }
        [DisplayName("Subscriptions")]
        public class Subscriptions
        {
            [Description("View")]
            public const string ReadPermission = "AdministrationTenants:Subscriptions:Read";
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "AdministrationTenants:Subscriptions:Page";
            [Description("Modify"), ImplicitPermission(ReadPermission)]
            public const string ModifyPermission = "AdministrationTenants:Subscriptions:Modify";
        }

    }

}
