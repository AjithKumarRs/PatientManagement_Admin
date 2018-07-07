using System.ComponentModel;

namespace PatientManagement.Administration.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;

    /// <summary>
    /// This is a sample base class for rows that does insert/update date and user audit logging automatically.
    /// It is recommended to create your own base class, if your auditing field names are different than these.
    /// You should implement IInsertLogRow and/or IUpdateLogRow interfaces. ILoggingRow is a combination of these
    /// two. There is also an optional IDeleteLogRow interface that supports auditing on delete but for it to work
    /// you need to also implement IIsActiveDeletedRow so that your rows aren't actually deleted.
    /// </summary>
    public abstract class LoggingRow : Row, ILoggingRow, IIsActiveDeletedRow, IMultiTenantRow
    {
        protected LoggingRow(RowFieldsBase fields)
            : base(fields)
        {
            loggingFields = (LoggingRowFields)fields;
        }

        [DisplayName("Insert User Id"),  ForeignKey("Users", "UserId"), LeftJoin("usrI"), TextualField("InsertUserName")]
        [ReadPermission(PermissionKeys.Tenant)]
        [NotNull, Insertable(false), Updatable(false)]
        public Int32? InsertUserId
        {
            get { return loggingFields.InsertUserId[this]; }
            set { loggingFields.InsertUserId[this] = value; }
        }

        [DisplayName("Created by"), Expression("usrI.UserName")]
        [ReadPermission(PermissionKeys.Tenant)]
        public String InsertUserName
        {
            get { return loggingFields.InsertUserName[this]; }
            set { loggingFields.InsertUserName[this] = value; }
        }

        [NotNull, Insertable(false), Updatable(false)]
        [DisplayName("Insert Date")]
        [ReadPermission(PermissionKeys.Tenant)]
        [SortOrder(1, true)]
        public DateTime? InsertDate
        {
            get { return loggingFields.InsertDate[this]; }
            set { loggingFields.InsertDate[this] = value; }
        }

        [Insertable(false), Updatable(false)]
        [DisplayName("Update User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("usrU"), TextualField("UpdateUserName")]
        [ReadPermission(PermissionKeys.Tenant)]
        public Int32? UpdateUserId
        {
            get { return loggingFields.UpdateUserId[this]; }
            set { loggingFields.UpdateUserId[this] = value; }
        }

        [DisplayName("Last updated by"), Expression("usrU.UserName")]
        [ReadPermission(PermissionKeys.Tenant)]
        public String UpdateUserName
        {
            get { return loggingFields.UpdateUserName[this]; }
            set { loggingFields.UpdateUserName[this] = value; }
        }

        [Insertable(false), Updatable(false)]
        [DisplayName("Update Date Field")]
        [ReadPermission(PermissionKeys.Tenant)]
        public DateTime? UpdateDate
        {
            get { return loggingFields.UpdateDate[this]; }
            set { loggingFields.UpdateDate[this] = value; }
        }


        [NotNull, Insertable(false), Updatable(true)]
        [ModifyPermission(PermissionKeys.User.IsActivePermission)]
        [ReadPermission(PermissionKeys.User.IsActivePermission)]
        [BsSwitchEditor]
        [LookupInclude]
        public Int16? IsActive
        {
            get { return loggingFields.IsActive[this]; }
            set { loggingFields.IsActive[this] = value; }
        }

        #region Tenant

        [DisplayName("Tenant"), ForeignKey("Tenants", "TenantId"), LeftJoin("tnt"), QuickFilter]
        [LookupEditor(typeof(TenantRow))]
        [ReadPermission(PermissionKeys.Tenant)]
        public Int32? TenantId
        {
            get { return loggingFields.TenantId[this]; }
            set { loggingFields.TenantId[this] = value; }
        }

        [ReadPermission(PermissionKeys.Tenant)]
        [DisplayName("Tenant"), Expression("tnt.TenantName")]
        public String TenantName
        {
            get { return loggingFields.TenantName[this]; }
            set { loggingFields.TenantName[this] = value; }
        }

        [DisplayName("CurrencyId"), Expression("tnt.CurrencyId")]
        public Int32? TenantCurrencyId
        {
            get { return loggingFields.TenantCurrencyId[this]; }
            set { loggingFields.TenantCurrencyId[this] = value; }
        }
        public Int32Field TenantIdField
        {
            get { return loggingFields.TenantId; }
        }

        #endregion

        IIdField IInsertLogRow.InsertUserIdField
        {
            get { return loggingFields.InsertUserId; }
        }

        IIdField IUpdateLogRow.UpdateUserIdField
        {
            get { return loggingFields.UpdateUserId; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return loggingFields.IsActive; }
        }

        DateTimeField IInsertLogRow.InsertDateField
        {
            get { return loggingFields.InsertDate; }
        }

        DateTimeField IUpdateLogRow.UpdateDateField
        {
            get { return loggingFields.UpdateDate; }
        }

        private LoggingRowFields loggingFields;

        public class LoggingRowFields : RowFieldsBase
        {
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public StringField InsertUserName;
            public StringField UpdateUserName;
            public Int32Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int16Field IsActive;

            public readonly Int32Field TenantId;
            public readonly StringField TenantName;
            public readonly Int32Field TenantCurrencyId;

            public LoggingRowFields(string tableName = null, string fieldPrefix = null)
                : base(tableName, fieldPrefix)
            {
            }
        }
    }
}