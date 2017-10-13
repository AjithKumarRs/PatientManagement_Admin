
using System.Collections.Generic;
using System.ComponentModel;

namespace PatientManagement.Administration.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Administration.Role")]
    [BasedOnRow(typeof(Entities.RoleRow))]
    public class RoleForm
    {
        [Category("Required Fields")]
        [Placeholder("Doctors, Receptionists...")]
        public String RoleName { get; set; }
        public List<Int32> UsersInRole { get; set; }
        public Int32? TenantId { get; set; }

    }
}