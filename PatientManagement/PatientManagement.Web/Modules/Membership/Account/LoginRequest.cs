
namespace PatientManagement.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow))]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("Enter user name")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("Enter password"), Required(true)]
        public string Password { get; set; }
    }
}