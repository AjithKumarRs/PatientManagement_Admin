
namespace PatientManagement.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[PaymentOptions]"), DisplayName("Payment Options"), InstanceName("Payment Options"), TwoLevelCached]
    [ReadPermission("Administration:PaymentOptions:Read")]
    [ModifyPermission("Administration:PaymentOptions:Modify")]
    [LookupScript("Administration.PaymentOptions")]
    public sealed class PaymentOptionsRow : Row, IIdRow, INameRow, ILoggingRow
    {
        [DisplayName("Payment Option Id"), Identity]
        public Int32? PaymentOptionId
        {
            get { return Fields.PaymentOptionId[this]; }
            set { Fields.PaymentOptionId[this] = value; }
        }

        [DisplayName("Days"), NotNull]
        public Int32? Days
        {
            get { return Fields.Days[this]; }
            set { Fields.Days[this] = value; }
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        #region ILoggingRow

        [DisplayName("Insert User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("usrI"), TextualField("InsertUserName")]
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
   

        [DisplayName("Insert Date"), NotNull]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Update User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("usrU"), TextualField("UpdateUserName")]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }
        [DisplayName("Last updated by"), Expression("usrU.UserName")]
        public String UpdateUserName
        {
            get { return Fields.UpdateUserName[this]; }
            set { Fields.UpdateUserName[this] = value; }
        }

        [DisplayName("Update Date Field"), NotNull]
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

        IIdField IIdRow.IdField
        {
            get { return Fields.PaymentOptionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PaymentOptionsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PaymentOptionId;
            public Int32Field Days;
            public StringField Name;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public Int32Field UpdateUserId;
            public DateTimeField UpdateDateField;
            public StringField InsertUserName;
            public StringField UpdateUserName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Administration.PaymentOptions";
            }
        }
    }
}
