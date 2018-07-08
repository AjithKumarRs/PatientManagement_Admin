using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using Serenity.Extensibility;

namespace PatientManagement.Administration
{
    [NestedPermissionKeys]
    [DisplayName("Clinic Administration")]
    public class AdministrationTenantsPermissionKeys
    {
        [Description("General")]
        public const string General = "AdministrationTenants:General";

        [DisplayName("Offers")]
        [NestedPermissionKeys]
        public class Offers
        {
            [Description("Offers View")]
            public const string ReadPermission = "AdministrationTenants:Offers:Read";
        }
        [DisplayName("Subscriptions")]
        [NestedPermissionKeys]
        public class Subscriptions
        {
            [Description("View")]
            public const string ReadPermission = "AdministrationTenants:Subscriptions:Read";
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "AdministrationTenants:Subscriptions:Page";
            [Description("Modify"), ImplicitPermission(ReadPermission)]
            public const string ModifyPermission = "AdministrationTenants:Subscriptions:Modify";
        }

        [DisplayName("Payment Options")]
        [NestedPermissionKeys]
        public class PaymentOptions
        {
            [Description("Payment Options View")]
            public const string ReadPermission = "AdministrationTenants:PaymentOptions:Read";
        }

        [DisplayName("Payments")]
        [NestedPermissionKeys]
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
        [NestedPermissionKeys]
        public class PaymentsDetails
        {
            [Description("View")]
            public const string ReadPermission = "AdministrationTenants:PaymentsDetails:Read";
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "AdministrationTenants:PaymentsDetails:Page";
            [Description("Modify"), ImplicitPermission(ReadPermission)]
            public const string ModifyPermission = "AdministrationTenants:PaymentsDetails:Modify";
        }

        [DisplayName("Currencies")]
        [NestedPermissionKeys]
        public class Currencies
        {
            [Description("View")]
            public const string ReadPermission = "AdministrationTenants:Currencies:Read";
        }

        [DisplayName("Coupons")]
        [NestedPermissionKeys]
        public class Coupons
        {
            [Description("View")]
            public const string ReadPermission = "AdministrationTenants:Coupons:Read";
        }

        [DisplayName("User")]
        [NestedPermissionKeys]
        public class User
        {
            [Description("View")]
            public const string ReadPermission = "AdministrationTenants:User:Read";
        }

        [DisplayName("Tenant")]
        [NestedPermissionKeys]
        public class Tenant
        {
            [Description("View")]
            public const string ReadPermission = "AdministrationTenants:Tenant:Read";
            [Description("Edit Tenant"), ImplicitPermission(ReadPermission)]
            public const string ModifyPermission = "AdministrationTenants:Tenant:Edit";

        }


        [DisplayName("Medical Specialties")]
        [NestedPermissionKeys]
        public class MedicalSpecialties
        {
            [Description("View")]
            public const string ReadPermission = "AdministrationTenants:MedicalSpecialties:Read";
        }


        [DisplayName("Visit Payments")]
        [NestedPermissionKeys]
        public class VisitPayments
        {
            [Description("View")]
            public const string ReadPermissions = "AdministrationTenants:VisitPayments:Read";
            [Description("Modify"), ImplicitPermission(ReadPermissions)]
            public const string ModifyPermissions = "AdministrationTenants:VisitPayments:Modify";
        }

    }
}
