
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

    [ConnectionKey("PatientManagement"), TableName("[dbo].[VisitTypes]"), DisplayName("Visit Types"), InstanceName("Visit Types"), TwoLevelCached]
    [ReadPermission("PatientManagement:VisitTypes:Read")]
    [ModifyPermission("PatientManagement:VisitTypes:Modify")]
    [LookupScript("PatientManagement.VisitTypes",
        LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class VisitTypesRow : Row, IIdRow, INameRow, IInsertLogRow, IMultiTenantRow, IIsActiveDeletedRow
    {
        [DisplayName("Visit Type Id"), Identity]
        public Int32? VisitTypeId
        {
            get { return Fields.VisitTypeId[this]; }
            set { Fields.VisitTypeId[this] = value; }
        }

        [DisplayName("Name"), Size(50), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Border Color"), Size(50), NotNull, QuickSearch]
        public String BorderColor
        {
            get { return Fields.BorderColor[this]; }
            set { Fields.BorderColor[this] = value; }
        }

        [DisplayName("Background Color"), Size(50), NotNull, QuickSearch]
        public String BackgroundColor
        {
            get { return Fields.BackgroundColor[this]; }
            set { Fields.BackgroundColor[this] = value; }
        }

        [DisplayName("Price")]
        [ReadPermission(PermissionKeys.AdministrationTenantsVisitPayments)]
        public Decimal? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("Price")]
        [ReadPermission(PermissionKeys.AdministrationTenantsVisitPayments)]
        [NotMapped]
        public string PriceWithCurrencie
        {
            get { return Fields.PriceWithCurrencie[this]; }
            set { Fields.PriceWithCurrencie[this] = value; }
        }


        [DisplayName("Currencie")]
        [NotMapped]
        [ReadOnly(true)]
        [ReadPermission(PermissionKeys.AdministrationTenantsVisitPayments)]
        public string Currencie
        {
            get { return Fields.Currencie[this]; }
            set { Fields.Currencie[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.VisitTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

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

        public VisitTypesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field VisitTypeId;
            public StringField Name;
            public StringField BorderColor;
            public StringField BackgroundColor;
            public StringField PriceWithCurrencie;
            public DecimalField Price;
            public StringField Currencie;

            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public Int16Field IsActive;
            public StringField TenantName;

            public StringField InsertUserName;
            public readonly Int32Field TenantId;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.VisitTypes";
            }
        }

        public IIdField InsertUserIdField => Fields.InsertUserId;

        public DateTimeField InsertDateField => Fields.InsertDate;
        [DisplayName("Insert User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("usrI"), TextualField("InsertUserName")]
        [ReadPermission(PermissionKeys.Tenants)]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }


        [DisplayName("Created by"), Expression("usrI.UserName")]
       // [ReadPermission(PermissionKeys.Tenants)]
        public String InsertUserName
        {
            get { return Fields.InsertUserName[this]; }
            set { Fields.InsertUserName[this] = value; }
        }


        [DisplayName("Insert Date"), NotNull, QuickFilter()]
     //   [ReadPermission(PermissionKeys.Tenants)]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
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
    }
}
