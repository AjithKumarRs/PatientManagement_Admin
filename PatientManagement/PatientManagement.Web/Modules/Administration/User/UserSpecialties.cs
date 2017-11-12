using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PatientManagement.PatientManagement.Scripts;
using Serenity.ComponentModel;

namespace PatientManagement.PatientManagement.Entities
{
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("PatientManagement"), DisplayName("UserSpecialties"), InstanceName("UserSpecialty")]
    [ReadPermission("AdministrationTenants:User:Read")]
    public sealed class UserSpecialtiesRow : Row, IIdRow
    {
        [DisplayName("UserSpecialty Id"), Column("UserSpecialtyId"), Identity]
        public Int32? UserSpecialtyId
        {
            get { return Fields.UserSpecialtyId[this]; }
            set { Fields.UserSpecialtyId[this] = value; }
        }

        [DisplayName("User Id"), Column("UserID"), NotNull]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Specialty Id"), Column("SpecialtyId"), NotNull]
        public Int32? SpecialtyId
        {
            get { return Fields.SpecialtyId[this]; }
            set { Fields.SpecialtyId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UserSpecialtyId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserSpecialtiesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserSpecialtyId;
            public Int32Field UserId;
            public Int32Field SpecialtyId;

            public RowFields()
                : base("UserSpecialties")
            {
                LocalTextPrefix = "UserSpecialties";
            }
        }
    }
}
