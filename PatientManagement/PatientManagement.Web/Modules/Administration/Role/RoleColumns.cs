
using System.Collections.Generic;
using PatientManagement.PatientManagement;

namespace PatientManagement.Administration.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Administration.Role")]
    [BasedOnRow(typeof(Entities.RoleRow))]
    public class RoleColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 RoleId { get; set; }
        [EditLink, Width(300)]
        public String RoleName { get; set; }

        [Width(450), UserListFormatter]
        public List<Int32> UsersInRole { get; set; }

        [Width(80)]
        public String TenantName { get; set; }
        [Width(80)]
        public String InsertUserName { get; set; }
        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [Width(120)]
        public DateTime InsertDate { get; set; }
        [Width(80)]
        public String UpdateUserName { get; set; }
        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [Width(120)]
        public DateTime UpdateDateField { get; set; }
    }
}