
using PatientManagement.Administration;
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

    [ConnectionKey("PatientManagement"), TableName("[dbo].[PatientHealth]"), DisplayName("Patient Health"), InstanceName("Patient Health"), TwoLevelCached]
    [ReadPermission(PatientManagementPermissionKeys.PatientHealth.ReadPermission)]
    [UpdatePermission(PatientManagementPermissionKeys.PatientHealth.UpdatePermission)]
    [DeletePermission(PatientManagementPermissionKeys.PatientHealth.DeletePermission)]
    [LookupScript("PatientManagement.PatientHealth", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class PatientHealthRow : Row, IIdRow, INameRow, ILoggingRow, IMultiTenantRow, IIsActiveRow
    {
        [DisplayName("Patient Health Id"), Identity]
        public Int32? PatientHealthId
        {
            get { return Fields.PatientHealthId[this]; }
            set { Fields.PatientHealthId[this] = value; }
        }

        [DisplayName("Patient"), PrimaryKey, ForeignKey("[dbo].[Patients]", "PatientId"), LeftJoin("jPatient"), TextualField("PatientName")]
        [LookupEditor(typeof(PatientsRow), InplaceAdd = true)]
        public Int32? PatientId
        {
            get { return Fields.PatientId[this]; }
            set { Fields.PatientId[this] = value; }
        }
        

        [DisplayName("Diseases"), Size(2000)]
        [TextAreaEditor(Rows = 8)]
        public String Diseases
        {
            get { return Fields.Diseases[this]; }
            set { Fields.Diseases[this] = value; }
        }

        [DisplayName("Medicines Intake"), Size(2000)]
        [TextAreaEditor(Rows = 8)]
        public String MedicinesIntake
        {
            get { return Fields.MedicinesIntake[this]; }
            set { Fields.MedicinesIntake[this] = value; }
        }
        [DisplayName("Patient Name"), Expression("jPatient.[Name]")]
        public String PatientName
        {
            get { return Fields.PatientName[this]; }
            set { Fields.PatientName[this] = value; }
        }

        #region ILoggingRow

        [DisplayName("Insert User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("usrI"), TextualField("InsertUserName")]
        [ReadPermission(PermissionKeys.Tenant)]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }


        [DisplayName("Created by"), Expression("usrI.UserName")]
        public String InsertUserName
        {
            get { return Fields.InsertUserName[this]; }
            set { Fields.InsertUserName[this] = value; }
        }


        [DisplayName("Insert Date"), NotNull, SortOrder(1, true)]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Update User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("usrU"), TextualField("UpdateUserName")]
        [ReadPermission(PermissionKeys.Tenant)]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }
        [DisplayName("Last updated by"), Expression("usrU.UserName")]
        [ReadPermission(PermissionKeys.Tenant)]
        public String UpdateUserName
        {
            get { return Fields.UpdateUserName[this]; }
            set { Fields.UpdateUserName[this] = value; }
        }

        [DisplayName("Update Date Field"), NotNull]
        [ReadPermission(PermissionKeys.Tenant)]
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
        [ReadPermission(PermissionKeys.Tenant)]
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
        [ReadPermission(PermissionKeys.Tenant)]
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


        IIdField IIdRow.IdField
        {
            get { return Fields.PatientHealthId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Diseases; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PatientHealthRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PatientHealthId;
            public Int32Field PatientId;
            public StringField Diseases;
            public StringField MedicinesIntake;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;

            public StringField PatientName;

            public Int32Field UpdateUserId;
            public DateTimeField UpdateDateField;
            public Int32Field TenantId;
            public Int16Field IsActive;
            public StringField TenantName;
            public StringField InsertUserName;
            public StringField UpdateUserName;
            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.PatientHealth";
            }
        }
      

    }
}
