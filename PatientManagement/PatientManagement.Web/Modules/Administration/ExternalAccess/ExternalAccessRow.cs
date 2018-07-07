
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
    public sealed class ExternalAccessRow : Row, IIdRow, INameRow, ILoggingRow, IMultiTenantRow, IIsActiveRow
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


        #region ILoggingRow

        [DisplayName("Insert User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("usrI"), TextualField("InsertUserName")]
        [ReadPermission("Administration:Tenants")]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }


        [DisplayName("Created by"), Expression("usrI.UserName")]
        [ReadPermission("Administration:Tenants")]
        public String InsertUserName
        {
            get { return Fields.InsertUserName[this]; }
            set { Fields.InsertUserName[this] = value; }
        }


        [DisplayName("Insert Date"), NotNull, QuickFilter()]
        [ReadPermission("Administration:Tenants")]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Update User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("usrU"), TextualField("UpdateUserName")]
        [ReadPermission("Administration:Tenants")]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }
        [DisplayName("Last updated by"), Expression("usrU.UserName")]
        [ReadPermission("Administration:Tenants")]
        public String UpdateUserName
        {
            get { return Fields.UpdateUserName[this]; }
            set { Fields.UpdateUserName[this] = value; }
        }

        [DisplayName("Update Date Field"), NotNull]
        [ReadPermission("Administration:Tenants")]
        public DateTime? UpdateDateField
        {
            get { return Fields.UpdateDateField[this]; }
            set { Fields.UpdateDateField[this] = value; }
        }
        public IIdField InsertUserIdField => Fields.InsertUserId;

        public DateTimeField InsertDateField => Fields.InsertDate;


        public IIdField UpdateUserIdField { get; } = Fields.UpdateUserId;

        DateTimeField IUpdateLogRow.UpdateDateField { get; } = Fields.UpdateDateField;

        #endregion

        #region Tenant

        [Insertable(false), Updatable(false), ForeignKey("Tenants", "TenantId"), LeftJoin("tnt")]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }
        [DisplayName("Tenant"), Expression("tnt.TenantName")]
        [ReadPermission("Administration:Tenants")]
        public String TenantName
        {
            get { return Fields.TenantName[this]; }
            set { Fields.TenantName[this] = value; }
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }
        #endregion

        #region IIsActive

        [DisplayName("Is Active"), NotNull]
        [ReadPermission("Administration:Tenants")]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }


        #endregion


        public static readonly RowFields Fields = new RowFields().Init();

        public ExternalAccessRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public ListField<Int32> ExternalAccessCabinets;

            public Int32Field ExternalAccessId;
            public StringField Name;
            public StringField Url;
            public Int32Field VisitedCount;
            public Int32Field AccessType;
            public Int32Field OutputFormat;
            public Int32Field TenantId;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public Int32Field UpdateUserId;
            public DateTimeField UpdateDateField;
            public Int16Field IsActive;

            public StringField TenantName;
            public StringField InsertUserName;
            public StringField UpdateUserName;
            public RowFields()
                : base()
            {
                LocalTextPrefix = "Administration.ExternalAccess";
            }
        }
    }
}
