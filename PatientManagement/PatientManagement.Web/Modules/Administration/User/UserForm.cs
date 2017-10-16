using System.Collections.Generic;
using System.ComponentModel;
using Serenity.Data.Mapping;

namespace PatientManagement.Administration.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Administration.User")]
    [BasedOnRow(typeof(Entities.UserRow))]
    public class UserForm
    {
        [Category("Required Fields")]

        public String Username { get; set; }
        public String DisplayName { get; set; }
        public String Email { get; set; }

        [Category("Add or change password")]

        [PasswordEditor, Required(true)]
        public String Password { get; set; }
        [PasswordEditor, OneWay, Required(true)]

        public String PasswordConfirm { get; set; }

        [Category("Assign to cabinets")]

        public List<Int32> Cabinets { get; set; }

        public short RestrictedToCabinets { get; set; }
        [Category("Extra fields")]


        public string PhoneNumber { get; set; }

        public String WebSite { get; set; }

        public String UserImage { get; set; }


        public string Info { get; set; }


        public String EmailSignature { get; set; }

      

        [Category("Tenant Fields")]
        [OneWay]
        public string Source { get; set; }

        public int IsActive { get; set; }
        [Required]
        public Int32 TenantId { get; set; }


    }
}