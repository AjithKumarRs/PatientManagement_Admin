

namespace PatientManagement.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;
    using System;
    using System.ComponentModel;
    using Serenity.Data.Mapping;

    [FormScript("Membership.EditTenant")]
    public class EditTenantRequest : ServiceRequest
    {
        public string Name { get; set; }
         
        [DisplayName("Tenant Web Site")]
        public String TenantWebSite { get; set; }

        [DisplayName("Tenant Image"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "TenantImage/~", CopyToHistory = true)]
        public String TenantImage { get; set; }
        
        [DisplayName("Override users email signature")]
        [BsSwitchEditor]
        public Boolean? OverrideUsersEmailSignature { get; set; }

        [DisplayName("Tenant Email Signature"), Size(-1), NotNull, HtmlContentEditor, CssClass("email-signature")]
        public String TenantEmailSignature { get; set; }
    }
}