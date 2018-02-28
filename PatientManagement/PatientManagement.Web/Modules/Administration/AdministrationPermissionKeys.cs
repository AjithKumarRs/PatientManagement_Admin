
namespace PatientManagement.Administration
{
    /// <summary>
    /// This class contains some permission key constants solely for
    /// easy access and intellisense purposes.
    /// 
    /// Please note that adding a permission here won't show it
    /// in user permissions dialog. In fact, Serenity doesn't
    /// care about this class at all.
    /// 
    /// To show a new permission in user/role permission dialog, just use
    /// its string key with ReadPermission / ModifyPermission / 
    /// DeletePermission / PageAuthorize / ServiceAuthorize etc. attributes 
    /// and Serenity will auto discover them at application start.
    /// 
    /// Permission tree hierarchy in dialog is determined by colons (:)
    /// in permission keys.
    /// </summary>
    public class PermissionKeys
    {
        //public const string Currencies = "Administration:Currencies";
        //public const string Offers = "Administration:Offers";
        //public const string Security = "Administration:Security";
        //public const string Translation = "Administration:Translation";
        public const string Tenants = "Administration:Tenants";

        public const string AdministrationTenantsReportsPage = "AdministrationTenants:Reports:Page";
        public const string AdministrationTenantsReportsNewPatientsThisMonth = "AdministrationTenants:Reports:NewPatientsThisMonth";

        public const string AdministrationTenantsPaymentsRead = "AdministrationTenants:Payments:Read";
        public const string AdministrationTenantsPaymentsModify = "AdministrationTenants:Payments:Modify";

        public const string AdministrationTenantsCurrenciesRead = "AdministrationTenants:CurrenciesRead";
        public const string AdministrationTenantsTenantRead = "AdministrationTenants:TenantRead";
        public const string AdministrationTenantsTenantEditing = "AdministrationTenants:TenantEditing";
        public const string AdministrationTenantsVisitPayments = "AdministrationTenants:VisitPayments";
        //public const string Sergen = "Administration:Sergen";

    }
}
