
namespace PatientManagement.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[Coupons]"), DisplayName("Coupons"), InstanceName("Coupons"), TwoLevelCached]
    [ReadPermission("AdministrationTenants:Coupons:Read")]
    [ModifyPermission("Administration:Coupons:Modify")]
    [LookupScript("Administration.Coupons")]
    public sealed class CouponsRow : Row, IIdRow, INameRow, ILoggingRow, IIsActiveDeletedRow
    {
        [DisplayName("Coupon Id"), Identity]
        public Int32? CouponId
        {
            get { return Fields.CouponId[this]; }
            set { Fields.CouponId[this] = value; }
        }

        [DisplayName("Key"), Size(2000), QuickSearch]
        [LookupInclude]
        [Unique]
        public String Key
        {
            get { return Fields.Key[this]; }
            set { Fields.Key[this] = value; }
        }

        [DisplayName("Name"), Size(2000)]
        [LookupInclude]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Discount"), NotNull]
        [LookupInclude]
        public Int16? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
        }

        [DisplayName("Description"), Size(-1)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("End Date")]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }

        [DisplayName("Is Used")]
        public Int32? IsUsed
        {
            get { return Fields.IsUsed[this]; }
            set { Fields.IsUsed[this] = value; }
        }
        
        [DisplayName("Max Time Using")]
        public Int32? MaxTimeUsing
        {
            get { return Fields.MaxTimeUsing[this]; }
            set { Fields.MaxTimeUsing[this] = value; }
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


        [DisplayName("Insert Date"), NotNull]
        [ReadPermission("Administration:Tenants")]
        [SortOrder(1, true)]
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

        #region IIsActive

        [DisplayName("Is Active"), NotNull]
        [ReadPermission(PermissionKeys.Tenants)]
        [LookupInclude]
        [BsSwitchEditor]
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
            get { return Fields.CouponId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Key; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CouponsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CouponId;
            public StringField Key;
            public StringField Name;
            public Int16Field Discount;
            public StringField Description;
            public DateTimeField EndDate;
            public Int32Field IsUsed;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public Int32Field UpdateUserId;
            public DateTimeField UpdateDateField;
            public Int16Field IsActive;
            public Int32Field MaxTimeUsing;

            public StringField InsertUserName;
            public StringField UpdateUserName;
            public RowFields()
                : base()
            {
                LocalTextPrefix = "Administration.Coupons";
            }
        }
    }
}
