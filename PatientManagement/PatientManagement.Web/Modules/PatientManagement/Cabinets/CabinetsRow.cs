
using PatientManagement.Administration;
using PatientManagement.Administration.Entities;
using PatientManagement.PatientManagement.Scripts;

namespace PatientManagement.PatientManagement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using System.Collections.Generic;
    [ConnectionKey("PatientManagement"), TableName("[dbo].[Cabinets]"), DisplayName("Cabinets"), InstanceName("Cabinet") ,TwoLevelCached]
    [ReadPermission("PatientManagement:Cabinets:Read")]
    [ModifyPermission("PatientManagement:Cabinets:Modify")]
    [DeletePermission("PatientManagement:Cabinets:Delete")]
    [LookupScript("PatientManagement.Cabinets",
        LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class CabinetsRow : Row, IIdRow, INameRow, ILoggingRow, IMultiTenantRow, IIsActiveDeletedRow
    {
        [DisplayName("Cabinet Id"), Identity]
        public Int32? CabinetId
        {
            get { return Fields.CabinetId[this]; }
            set { Fields.CabinetId[this] = value; }
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }
        
        IIdField IIdRow.IdField
        {
            get { return Fields.CabinetId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }
        [DisplayName("Work Hours Start")]
        [TimeEditor]
        public Int16? WorkHoursStart
        {
            get { return Fields.WorkHoursStart[this]; }
            set { Fields.WorkHoursStart[this] = value; }
        }

        [DisplayName("Work Hours End")]
        [TimeEditor]
        public Int16? WorkHoursEnd
        {
            get { return Fields.WorkHoursEnd[this]; }
            set { Fields.WorkHoursEnd[this] = value; }
        }

        [LookupEditor(typeof(UserRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(CabinetRepresentativesRow), "CabinetId", "UserId")]
        [MinSelectLevel(SelectLevel.Details), QuickFilter]
        public List<Int32> Representatives
        {
            get { return Fields.Representatives[this]; }
            set { Fields.Representatives[this] = value; }
        }

        #region ILoggingRow

        [DisplayName("Insert User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("usrI"), TextualField("InsertUserName")]
        [ReadPermission(PermissionKeys.Tenants)]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }


        [DisplayName("Created by"), Expression("usrI.UserName")]
        [ReadPermission(PermissionKeys.Tenants)]
        public String InsertUserName
        {
            get { return Fields.InsertUserName[this]; }
            set { Fields.InsertUserName[this] = value; }
        }


        [DisplayName("Insert Date"), NotNull, QuickFilter()]
        [ReadPermission(PermissionKeys.Tenants)]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Update User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("usrU"), TextualField("UpdateUserName")]
        [ReadPermission(PermissionKeys.Tenants)]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }
        [DisplayName("Last updated by"), Expression("usrU.UserName")]
        [ReadPermission(PermissionKeys.Tenants)]
        public String UpdateUserName
        {
            get { return Fields.UpdateUserName[this]; }
            set { Fields.UpdateUserName[this] = value; }
        }

        [DisplayName("Update Date Field"), NotNull]
        [ReadPermission(PermissionKeys.Tenants)]
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

        [DisplayName("Tenant"), ForeignKey("Tenants", "TenantId"), LeftJoin("tnt"), QuickFilter]
        [ReadPermission(PermissionKeys.Tenants)]
        [LookupEditor(typeof(TenantRow))]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }
        [DisplayName("Tenant"), Expression("tnt.TenantName")]
        [ReadPermission(PermissionKeys.Tenants)]
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
        [ReadPermission(PermissionKeys.Tenants)]
        [LookupInclude]
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

        public CabinetsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CabinetId;
            public StringField Name;
            public ListField<Int32> Representatives;
            public Int16Field WorkHoursStart;
            public Int16Field WorkHoursEnd;

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
                LocalTextPrefix = "PatientManagement.Cabinets";
            }
        }
    }
}
