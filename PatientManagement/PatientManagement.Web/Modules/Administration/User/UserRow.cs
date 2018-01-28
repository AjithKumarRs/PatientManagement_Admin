
using System.Collections.Generic;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.PatientManagement.Scripts;

namespace PatientManagement.Administration.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), DisplayName("Users"), InstanceName("User"), TwoLevelCached]
    [ReadPermission("AdministrationTenants:User:Read")]
    [ModifyPermission("Administration:User:Modify")]
    [LookupScript("Administration.User",
        LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class UserRow : LoggingRow, IIdRow, INameRow, IIsActiveDeletedRow, IMultiTenantRow
    {
        [DisplayName("User Id"), Identity]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Username"), Size(100), NotNull, QuickSearch, LookupInclude]
        public String Username
        {
            get { return Fields.Username[this]; }
            set { Fields.Username[this] = value; }
        }

        [DisplayName("Cabinets")]
        [LookupEditor(typeof(CabinetsRow), Multiple = true, FilterField = "IsActive", FilterValue = 1), NotMapped]
        [LinkingSetRelation(typeof(CabinetRepresentativesRow), "UserId", "CabinetId")]
        [MinSelectLevel(SelectLevel.Details), QuickFilter]
        public List<Int32> Cabinets
        {
            get { return (List<Int32>)Fields.Cabinets[this]; }
            set { Fields.Cabinets[this] = value; }
        }


        [DisplayName("Specialties")]
        [LookupEditor(typeof(MedicalSpecialtyRow), Multiple = true, FilterField = "IsActive", FilterValue = 1), NotMapped]
        [LinkingSetRelation(typeof(UserSpecialtiesRow), "UserId", "SpecialtyId")]
        [MinSelectLevel(SelectLevel.Details), QuickFilter]
        public List<Int32> Specialties
        {
            get { return (List<Int32>)Fields.Specialties[this]; }
            set { Fields.Specialties[this] = value; }
        }

        [ReadPermission(PermissionKeys.Tenants)]
        [DisplayName("Source"), Size(4), NotNull, Insertable(false), Updatable(false), DefaultValue("site")]
        public String Source
        {
            get { return Fields.Source[this]; }
            set { Fields.Source[this] = value; }
        }

        [DisplayName("Password Hash"), Size(86), NotNull, Insertable(false), Updatable(false), MinSelectLevel(SelectLevel.Never)]
        public String PasswordHash
        {
            get { return Fields.PasswordHash[this]; }
            set { Fields.PasswordHash[this] = value; }
        }

        [DisplayName("Password Salt"), Size(10), NotNull, Insertable(false), Updatable(false), MinSelectLevel(SelectLevel.Never)]
        public String PasswordSalt
        {
            get { return Fields.PasswordSalt[this]; }
            set { Fields.PasswordSalt[this] = value; }
        }

        [DisplayName("Display Name"), Size(100), NotNull, LookupInclude]
        public String DisplayName
        {
            get { return Fields.DisplayName[this]; }
            set { Fields.DisplayName[this] = value; }
        }

        [DisplayName("Assigned roles"), QuickFilter()]
        [LookupEditor(typeof(RoleRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(UserRoleRow), "UserId", "RoleId")]
        [MinSelectLevel(SelectLevel.Details)]
        public List<Int32> UsersInRole
        {
            get { return (List<Int32>)Fields.UsersInRole[this]; }
            set { Fields.UsersInRole[this] = value; }
        }
        [EmailEditor, Required(true)]
        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Info")]
        [TextAreaEditor]
        public String Info
        {
            get { return Fields.Info[this]; }
            set { Fields.Info[this] = value; }
        }


        [DisplayName("Restricted To Cabinets"), NotNull]
        //[ModifyPermission("AdministrationTenants:User:RestrictedToCabinets")]
        //[ReadPermission("AdministrationTenants:User:RestrictedToCabinets")]
        [BsSwitchEditor]
        public Int16? RestrictedToCabinets
        {
            get { return Fields.RestrictedToCabinets[this]; }
            set { Fields.RestrictedToCabinets[this] = value; }
        }


        [DisplayName("Web Site"), Size(200), QuickSearch]
        public String WebSite
        {
            get { return Fields.WebSite[this]; }
            set { Fields.WebSite[this] = value; }
        }

        [DisplayName("Phone Number"), Size(200), QuickSearch]
        public String PhoneNumber
        {
            get { return Fields.PhoneNumber[this]; }
            set { Fields.PhoneNumber[this] = value; }
        }

        [DisplayName("User Image"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "UserImage/~", CopyToHistory = true)]
        public String UserImage
        {
            get { return Fields.UserImage[this]; }
            set { Fields.UserImage[this] = value; }
        }

        [Size(-1), HtmlContentEditor, CssClass("email-signature")]
        [DisplayName("Email Signature")]
        public String EmailSignature
        {
            get { return Fields.EmailSignature[this]; }
            set { Fields.EmailSignature[this] = value; }
        }

        [DisplayName("Password"), Size(50), NotMapped]
        public String Password
        {
            get { return Fields.Password[this]; }
            set { Fields.Password[this] = value; }
        }

        [NotNull, Insertable(false), Updatable(true)]
        [ModifyPermission("Administration:User:IsActiveRead")]
        [ReadPermission("Administration:User:IsActiveRead")]
        [BsSwitchEditor]
        [LookupInclude]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [BsSwitchEditor]
        [DisplayName("Can Be Assigned To Visit")]
        [LookupInclude]
        public Int16? CanBeAssignedToVisit
        {
            get { return Fields.CanBeAssignedToVisit[this]; }
            set { Fields.CanBeAssignedToVisit[this] = value; }
        }

        [DisplayName("Confirm Password"), Size(50), NotMapped]
        public String PasswordConfirm
        {
            get { return Fields.PasswordConfirm[this]; }
            set { Fields.PasswordConfirm[this] = value; }
        }

        [DisplayName("Last Directory Update"), Insertable(false), Updatable(false)]
        public DateTime? LastDirectoryUpdate
        {
            get { return Fields.LastDirectoryUpdate[this]; }
            set { Fields.LastDirectoryUpdate[this] = value; }
        }
        #region Tenant

        [DisplayName("Tenant"), ForeignKey("Tenants", "TenantId"), LeftJoin("tnt"), QuickFilter]
        [LookupEditor(typeof(TenantRow))]
        [ReadPermission(PermissionKeys.Tenants)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [ReadPermission(PermissionKeys.Tenants)]
        [DisplayName("Tenant"), Expression("tnt.TenantName")]
        public String TenantName
        {
            get { return Fields.TenantName[this]; }
            set { Fields.TenantName[this] = value; }
        }

        [DisplayName("CurrencyId"), Expression("tnt.CurrencyId")]
        public Int32? TenantCurrencyId
        {
            get { return Fields.TenantCurrencyId[this]; }
            set { Fields.TenantCurrencyId[this] = value; }
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

#endregion

        IIdField IIdRow.IdField
        {
            get { return Fields.UserId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DisplayName; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field UserId;
            public StringField Username;
            public StringField Source;
            public StringField PasswordHash;
            public StringField PasswordSalt;
            public StringField DisplayName;
            public StringField Email;
            public Int16Field CanBeAssignedToVisit;
            public Int16Field RestrictedToCabinets;
            public StringField Info;
            public StringField UserImage;
            public DateTimeField LastDirectoryUpdate;
            public Int16Field IsActive;
            public StringField WebSite;
            public StringField PhoneNumber;
            public StringField EmailSignature;

            public ListField<Int32> UsersInRole;

            public ListField<Int32> Cabinets;
            public ListField<Int32> Specialties;

            public StringField Password;
            public StringField PasswordConfirm;

            public readonly Int32Field TenantId;
            public readonly StringField TenantName;
            public readonly Int32Field TenantCurrencyId;
            
            public RowFields()
                : base("Users")
            {
                LocalTextPrefix = "Administration.User";
            }
        }
    }
}