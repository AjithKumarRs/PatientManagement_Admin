

using PatientManagement.Administration.Entities;

namespace PatientManagement.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;
    using System;
    using System.ComponentModel;
    using Serenity.Data.Mapping;

    [FormScript("Membership.EditUserProfile")]
    [BasedOnRow(typeof(UserRow))]
    public class EditUserProfileRequest : ServiceRequest
    {
        [Required]
        public string DisplayName { get; set; }

        [Required]
        public string Email { get; set; }
        
        public string PhoneNumber { get; set; }
        
        public String WebSite { get; set; }
        
        public String UserImage { get; set; }

        public string Info { get; set; }
        
        public String EmailSignature { get; set; }
    }
}