using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Serenity.ComponentModel;

namespace PatientManagement.PatientManagement.Entities
{
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("PatientManagement"), DisplayName("ExternalAccess"), InstanceName("ExternalAccessCabinet"), TwoLevelCached]
    [ReadPermission(PatientManagementPermissionKeys.ExternalAccess.ReadPermission)]
    [UpdatePermission(PatientManagementPermissionKeys.ExternalAccess.UpdatePermission)]
    [DeletePermission(PatientManagementPermissionKeys.ExternalAccess.DeletePermission)]
    [LookupScript("PatientManagement.ExternalAccessCabinets")]
    public class ExternalAccessCabinetsRow : Row, IIdRow
    {
        [DisplayName("External Access Cabinet Id"), Column("ExternalAccessCabinetId"), Identity]
        public Int32? ExternalAccessCabinetId
        {
            get { return Fields.ExternalAccessCabinetId[this]; }
            set { Fields.ExternalAccessCabinetId[this] = value; }
        }

        [DisplayName("External Access Id"), Column("ExternalAccessId"), NotNull]
        [LookupInclude]
        public Int32? ExternalAccessId
        {
            get { return Fields.ExternalAccessId[this]; }
            set { Fields.ExternalAccessId[this] = value; }
        }

        [DisplayName("Cabinet Id"), Column("CabinetId"), NotNull]
        public Int32? CabinetId
        {
            get { return Fields.CabinetId[this]; }
            set { Fields.CabinetId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ExternalAccessCabinetId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ExternalAccessCabinetsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ExternalAccessCabinetId;
            public Int32Field ExternalAccessId;
            public Int32Field CabinetId;

            public RowFields()
                : base("ExternalAccessCabinets")
            {
                LocalTextPrefix = "ExternalAccessCabinets";
            }
        }
    }
}
