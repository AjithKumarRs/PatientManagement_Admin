

using PatientManagement.Administration.Entities;

namespace PatientManagement.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;
    using System;
    using System.ComponentModel;
    using Serenity.Data.Mapping;

    [FormScript("Membership.EditTenant")]
    [BasedOnRow(typeof(TenantRow))]
    public class EditTenantRequest : ServiceRequest
    {
        public string TenantName { get; set; }
         
        public String TenantWebSite { get; set; }
        
        public String TenantImage { get; set; }
        
        public Boolean? OverrideUsersEmailSignature { get; set; }

        public String TenantEmailSignature { get; set; }
    }
}