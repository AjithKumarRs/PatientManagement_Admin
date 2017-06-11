
using PatientManagement.PatientManagement;

namespace PatientManagement.Membership
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Membership.SignUp")]
    public class SignUpForm
    {
        [Required(true), Placeholder("Full name")]
        public String DisplayName { get; set; }

        [Required(true), Placeholder("Clinic Name")]
        public String TenantName { get; set; }
        [OfferDropDownEditor]
        public Int32 OfferId { get; set; }
        [EmailEditor, Required(true), Placeholder("Email")]
        public String Email { get; set; }
        [EmailEditor, Required(true), Placeholder("Confirm email")]
        public String ConfirmEmail { get; set; }
        [PasswordEditor, Required(true), Placeholder("Password")]
        public String Password { get; set; }
        [PasswordEditor, Required(true), Placeholder("Confirm password")]
        public String ConfirmPassword { get; set; }
    }
}
