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

    [ConnectionKey("PatientManagement"), DisplayName("CabinetRepresentatives"), InstanceName("CabinetRepresentatives")]
    [ReadPermission("PatientManagement:Cabinets:Read")]
    [ModifyPermission("PatientManagement:Cabinets:Modify")]
    public sealed class CabinetRepresentativesRow : Row, IIdRow
    {
        [DisplayName("Representative Id"), Column("RepresentativeID"), Identity]
        public Int32? RepresentativeId
        {
            get { return Fields.RepresentativeId[this]; }
            set { Fields.RepresentativeId[this] = value; }
        }

        [DisplayName("User Id"), Column("UserID"), NotNull]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Cabinet Id"), Column("CabinetID"), NotNull]
        public Int32? CabinetId
        {
            get { return Fields.CabinetId[this]; }
            set { Fields.CabinetId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.RepresentativeId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CabinetRepresentativesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RepresentativeId;
            public Int32Field UserId;
            public Int32Field CabinetId;

            public RowFields()
                : base("CabinetRepresentatives")
            {
                LocalTextPrefix = "CabinetRepresentatives";
            }
        }
    }
}
