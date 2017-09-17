
namespace PatientManagement.Administration.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Administration.Role")]
    [BasedOnRow(typeof(Entities.RoleRow))]
    public class RoleForm
    {
        [Placeholder("Doctors, Receptionists...")]
        public String RoleName { get; set; }

        public Int32? TenantId { get; set; }

    }
}