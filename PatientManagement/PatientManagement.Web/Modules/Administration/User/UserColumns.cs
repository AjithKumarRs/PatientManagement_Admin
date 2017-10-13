
using System.Collections.Generic;
using PatientManagement.PatientManagement;
using Serenity.Data;

namespace PatientManagement.Administration.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Administration.User")]
    [BasedOnRow(typeof(Entities.UserRow))]
    public class UserColumns
    {
        [EditLink, AlignRight, Width(55)]
        public String UserId { get; set; }
        [EditLink, Width(150)]
        public String Username { get; set; }
        [Width(150)]
        public String DisplayName { get; set; }
        [Width(250)]
        public String Email { get; set; }

        [Width(250), CabinetsListFormatter]
        public string Cabinets { get; set; }

        [Width(250), RoleListFormatter]
        public ListField<Int32> UsersInRole { get; set; }

        [PatientsPhoneFormatter]
        public string PhoneNumber { get; set; }
        [Width(150)]
        public String WebSite { get; set; }


        [Width(100)]
        public String Source { get; set; }

        public string TenantName { get; set; }
    }
}
