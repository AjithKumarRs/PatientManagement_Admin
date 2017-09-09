
using Serenity.Data.Mapping;

namespace PatientManagement.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;
    using System;
    using System.ComponentModel;

    [FormScript("Membership.EditUserProfileRequest")]
    public class EditUserProfileRequest : ServiceRequest
    {
        [DisplayName("Display Name"), Required]
        public string DisplayName { get; set; }

        [DisplayName("Your Email"), Required]
        [EmailEditor]
        public string UserEmail { get; set; }
        [DisplayName("Your phone")]
        public string UserPhone { get; set; }

        [DisplayName("User Web Site")]
        public String UserWebSite { get; set; }

        [DisplayName("User Image"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "UserImage/~", CopyToHistory = true)]
        public String UserImage { get; set; }
        

        [DisplayName("User Email Signature"), Size(-1), NotNull, HtmlContentEditor, CssClass("email-signature")]
        public String USerEmailSignature { get; set; }
    }
}