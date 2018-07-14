using System.Collections.Generic;
using PatientManagement.PatientManagement.Scripts;

namespace PatientManagement.Administration.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), DisplayName("Roles"), InstanceName("Role"), TwoLevelCached]
    [ReadPermission(PermissionKeys.Roles.ReadPermission)]
    [ModifyPermission(PermissionKeys.Roles.ModifyPermission)]
    [LookupScript("Administration.Role", 
        LookupType = typeof(MultiTenantRowLookupScript<>) )]
    public sealed class RoleRow : LoggingRow, IIdRow, INameRow
    {
        [DisplayName("Role Id"), Identity, ForeignKey("Roles", "RoleId"), LeftJoin("jRole")]
        public Int32? RoleId
        {
            get { return Fields.RoleId[this]; }
            set { Fields.RoleId[this] = value; }
        }

        [DisplayName("Role Name"), Size(100), NotNull, QuickSearch]
        public String RoleName
        {
            get { return Fields.RoleName[this]; }
            set { Fields.RoleName[this] = value; }
        }

        [DisplayName("Users in role"), QuickFilter()]
        [LookupEditor(typeof(UserRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(UserRoleRow), "RoleId", "UserId")]
        [MinSelectLevel(SelectLevel.Details)]
        public List<Int32> UsersInRole
        {
            get { return (List<Int32>)Fields.UsersInRole[this]; }
            set { Fields.UsersInRole[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.RoleId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.RoleName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RoleRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field RoleId;
            public StringField RoleName;


            public ListField<Int32> UsersInRole;
            public RowFields()
                : base("Roles")
            {
                LocalTextPrefix = "Administration.Role";
            }
        }
        
    }
}