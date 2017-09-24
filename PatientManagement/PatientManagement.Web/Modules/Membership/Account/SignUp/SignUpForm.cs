
using PatientManagement.PatientManagement;

namespace PatientManagement.Membership
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Membership.SignUp")]
    public class SignUpForm
    {
        [Required(true), Placeholder("Вашето име")]
        public String DisplayName { get; set; }

        [Required(true), Placeholder("Име на клиника")]
        public String TenantName { get; set; }
        [OfferDropDownEditor]
        public Int32 OfferId { get; set; }
        [EmailEditor, Required(true), Placeholder("Имейл")]
        public String Email { get; set; }
        [EmailEditor, Required(true), Placeholder("Потвърди имейл")]
        public String ConfirmEmail { get; set; }
        [PasswordEditor, Required(true), Placeholder("Парола")]
        public String Password { get; set; }
        [PasswordEditor, Required(true), Placeholder("Потвърди парола")]
        public String ConfirmPassword { get; set; }
    }
}
