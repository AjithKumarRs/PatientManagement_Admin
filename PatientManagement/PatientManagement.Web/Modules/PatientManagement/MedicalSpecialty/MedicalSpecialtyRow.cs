
using PatientManagement.Administration;

namespace PatientManagement.PatientManagement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PatientManagement"), TableName("[dbo].[MedicalSpecialties]")]
    [DisplayName("Medical Specialty"), InstanceName("Medical Specialty"), TwoLevelCached]
    [ReadPermission(PatientManagementPermissionKeys.MedicalSpecialties.ReadPermission)]
    [UpdatePermission(PatientManagementPermissionKeys.MedicalSpecialties.UpdatePermission)]
    [DeletePermission(PatientManagementPermissionKeys.MedicalSpecialties.DeletePermission)]
    [LookupScript("PatientManagement.MedicalSpecialties")]
    public sealed class MedicalSpecialtyRow : Row, IIdRow, INameRow, ILoggingRow,  IIsActiveDeletedRow
    {
        [DisplayName("Specialty Id"), Identity]
        public Int32? SpecialtyId
        {
            get { return Fields.SpecialtyId[this]; }
            set { Fields.SpecialtyId[this] = value; }
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.SpecialtyId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MedicalSpecialtyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SpecialtyId;
            public StringField Name;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public Int32Field UpdateUserId;
            public DateTimeField UpdateDateField;
            public Int16Field IsActive;
            public StringField InsertUserName;
            public StringField UpdateUserName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.MedicalSpecialty";
            }
        }
    }
}
