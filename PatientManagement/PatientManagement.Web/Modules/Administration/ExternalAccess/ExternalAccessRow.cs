
using PatientManagement.PatientManagement;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.PatientManagement.Scripts;

namespace PatientManagement.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using System.Collections.Generic;

    [ConnectionKey("Default"), TableName("[dbo].[ExternalAccess]"), DisplayName("External Access"), InstanceName("External Access"), TwoLevelCached]
    [ReadPermission(PatientManagementPermissionKeys.ExternalAccess.ReadPermission)]
    [UpdatePermission(PatientManagementPermissionKeys.ExternalAccess.UpdatePermission)]
    [DeletePermission(PatientManagementPermissionKeys.ExternalAccess.DeletePermission)]
    [LookupScript("AdministrationTenants.ExternalAccess",
        LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class ExternalAccessRow : LoggingRow, IIdRow, INameRow, ILoggingRow, IMultiTenantRow, IIsActiveRow
    {
        [DisplayName("External Access Id"), Identity]
        public Int32? ExternalAccessId
        {
            get { return Fields.ExternalAccessId[this]; }
            set { Fields.ExternalAccessId[this] = value; }
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Cabinets")]
        [LookupEditor(typeof(CabinetsRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(ExternalAccessCabinetsRow), "ExternalAccessId", "CabinetId")]
        [MinSelectLevel(SelectLevel.Details), QuickFilter]
        public List<Int32> ExternalAccessCabinets
        {
            get { return Fields.ExternalAccessCabinets[this]; }
            set { Fields.ExternalAccessCabinets[this] = value; }
        }

        [DisplayName("Url"), Size(-1), NotNull]
        [Unique]
        public String Url
        {
            get { return Fields.Url[this]; }
            set { Fields.Url[this] = value; }
        }

        [DisplayName("Visited Count"), NotNull]
        public Int32? VisitedCount
        {
            get { return Fields.VisitedCount[this]; }
            set { Fields.VisitedCount[this] = value; }
        }

        [DisplayName("Access Type"), NotNull]
        public AccessType? AccessType
        {
            get { return (AccessType?)Fields.AccessType[this]; }
            set { Fields.AccessType[this] = (Int32?)value; }
        }

        [DisplayName("Output Format"), NotNull]
        public OutputFormat? OutputFormat
        {
            get { return (OutputFormat?)Fields.OutputFormat[this]; }
            set { Fields.OutputFormat[this] = (Int32?)value; }
        }
        
        IIdField IIdRow.IdField
        {
            get { return Fields.ExternalAccessId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        
        public static readonly RowFields Fields = new RowFields().Init();

        public ExternalAccessRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public ListField<Int32> ExternalAccessCabinets;

            public Int32Field ExternalAccessId;
            public StringField Name;
            public StringField Url;
            public Int32Field VisitedCount;
            public Int32Field AccessType;
            public Int32Field OutputFormat;
            public RowFields()
                : base()
            {
                LocalTextPrefix = "Administration.ExternalAccess";
            }
        }
    }
}
