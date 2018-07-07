﻿
using System.Collections.Generic;
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

    [ConnectionKey("PatientManagement"), TableName("[dbo].[Patients]"), DisplayName("Patients"), InstanceName("Patient"), TwoLevelCached]
    [ReadPermission(PatientManagementPermissionKeys.Patients.ReadPermission)]
    [UpdatePermission(PatientManagementPermissionKeys.Patients.UpdatePermission)]
    [DeletePermission(PatientManagementPermissionKeys.Patients.DeletePermission)]
    [LookupScript("PatientManagement.Patients",
        LookupType = typeof(MultiTenantRowLookupScript<>))]
    [LeftJoin("cd", "PatientHealth", "cd.[PatientId] = t0.[PatientId]", RowType = typeof(PatientHealthRow), TitlePrefix = "")]
    public sealed class PatientsRow : Row, IIdRow, INameRow, IInsertLogRow, IMultiTenantRow, IIsActiveDeletedRow
    {
        [DisplayName("Patient Id"), Identity]
        public Int32? PatientId
        {
            get { return Fields.PatientId[this]; }
            set { Fields.PatientId[this] = value; }
        }
     

        [DisplayName("Name"), Size(500), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Personal Number"), Size(300), QuickSearch]
        public Int64? PersonalNumber
        {
            get { return Fields.PersonalNumber[this]; }
            set { Fields.PersonalNumber[this] = value; }
        }

        [DisplayName("Phone Number"), Size(50), NotNull, QuickSearch]
        public string PhoneNumber
        {
            get { return Fields.PhoneNumber[this]; }
            set { Fields.PhoneNumber[this] = value; }
        }

        [DisplayName("Gender"), NotNull]
        public Gender? Gender
        {
            get { return (Gender?)Fields.Gender[this]; }
            set { Fields.Gender[this] = (Int32?)value; }
        }

        [DisplayName("First Registration Date"), Size(200)]
        [DateTimeKind(DateTimeKind.Utc), DateTimeEditor]

        public DateTime? FirstRegistrationDate
        {
            get { return Fields.FirstRegistrationDate[this]; }
            set { Fields.FirstRegistrationDate[this] = value; }
        }

        [DisplayName("Picture"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "PatientPicture/~", CopyToHistory = true, AllowNonImage = false)]
        public String Picture
        {
            get { return Fields.Picture[this]; }
            set { Fields.Picture[this] = value; }
        }

        [DisplayName("Address"), Size(200)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("City"), Size(200)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Country"), Size(200)]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("Wanted Weight"), Size(100)]
        public String WantedWeight
        {
            get { return Fields.WantedWeight[this]; }
            set { Fields.WantedWeight[this] = value; }
        }

        [DisplayName("Height")]
        public Int32? Height
        {
            get { return Fields.Height[this]; }
            set { Fields.Height[this] = value; }
        }

        [DisplayName("Email"), Size(100), QuickSearch]
        [LookupInclude]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }
        [DisplayName("Notify On Change")]
        [BsSwitchEditor]
        public Boolean? NotifyOnChange
        {
            get { return Fields.NotifyOnChange[this]; }
            set { Fields.NotifyOnChange[this] = value; }
        }

        [DisplayName("Weight")]
        public Int32? Weight
        {
            get { return Fields.Weight[this]; }
            set { Fields.Weight[this] = value; }
        }

        [NotesEditor, NotMapped]
        public List<NotesRow> NoteList
        {
            get { return Fields.NoteList[this]; }
            set { Fields.NoteList[this] = value; }
        }

        [DisplayName("Visits Count"), Insertable(false), Updatable(false)]
        [Expression("(SELECT COUNT(*) FROM Visits vsts WHERE PatientId = T0.[PatientId])")]
        public Int32? VisitsCount
        {
            get { return Fields.VisitsCount[this]; }
            set { Fields.VisitsCount[this] = value; }
        }

        [DisplayName("Last Visit Date"), Insertable(false), Updatable(false)]
        [DateTimeKind(DateTimeKind.Utc)]
        [Expression("(SELECT TOP 1 EndDate FROM Visits vsts WHERE PatientId = T0.[PatientId] ORDER BY InsertDate DESC)")]
        public DateTime? LastVisitEndDate
        {
            get { return Fields.LastVisitEndDate[this]; }
            set { Fields.LastVisitEndDate[this] = value; }
        }

        #region Tenant

        [DisplayName("Tenant"), ForeignKey("Tenants", "TenantId"), LeftJoin("tnt")]
        [LookupEditor(typeof(TenantRow))]
        [ReadPermission(PermissionKeys.Tenants)]
        [ModifyPermission(PermissionKeys.Tenants)]
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

        #region IInsertLog

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

        #endregion

        IIdField IIdRow.IdField
        {
            get { return Fields.PatientId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PatientsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PatientId;
            public StringField Name;
            public Int64Field PersonalNumber;
            public StringField PhoneNumber;
            public Int32Field Gender;
            public StringField Picture;

            public Int32Field VisitsCount;
            public DateTimeField LastVisitEndDate;

            public DateTimeField FirstRegistrationDate;
            public StringField Address;
            public StringField City;
            public StringField Country;
            public Int32Field Height;
            public Int32Field Weight;
            public StringField Email;
            public BooleanField NotifyOnChange;

            public StringField WantedWeight;

            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public Int16Field IsActive;

            public StringField TenantName;
            public StringField InsertUserName;

            public RowListField<NotesRow> NoteList;

            public readonly Int32Field TenantId;
            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.Patients";
            }
        }


        public IIdField InsertUserIdField => Fields.InsertUserId;

        public DateTimeField InsertDateField => Fields.InsertDate;
        
    }
}
