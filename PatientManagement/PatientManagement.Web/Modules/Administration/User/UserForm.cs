namespace PatientManagement.Administration.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Administration.User")]
    [BasedOnRow(typeof(Entities.UserRow))]
    public class UserForm
    {
        public String Username { get; set; }
        public String DisplayName { get; set; }
        [EmailEditor, Required(true)]
        public String Email { get; set; }


        public string PhoneNumber { get; set; }

        public String WebSite { get; set; }

        public String UserImage { get; set; }
        [PasswordEditor, Required(true)]
        public String Password { get; set; }
        [PasswordEditor, OneWay, Required(true)]
        public String PasswordConfirm { get; set; }
        [OneWay]
        public string Source { get; set; }

        public Int32? TenantId { get; set; }


    }
}