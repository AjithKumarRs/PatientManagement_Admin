﻿
using PatientManagement.Administration;
using PatientManagement.Administration.Entities;
using PatientManagement.PatientManagement.Scripts;
using Remotion.Linq.Clauses;

namespace PatientManagement.PatientManagement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PatientManagement"), TableName("[dbo].[Visits]"), DisplayName("Visits"), InstanceName("Visit"), TwoLevelCached]
    [ReadPermission(PatientManagementPermissionKeys.Visits.ReadPermission)]
    [UpdatePermission(PatientManagementPermissionKeys.Visits.UpdatePermission)]
    [DeletePermission(PatientManagementPermissionKeys.Visits.DeletePermission)]
    [LeftJoin("p", "Patients", "p.[PatientId] = t0.[PatientId]", RowType = typeof(PatientsRow), TitlePrefix = "")]
    [LookupScript("PatientManagement.Visits", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class VisitsRow : LoggingRow, IIdRow
    {
        [DisplayName("Visit Id"), Identity, QuickSearch]
        public Int32? VisitId
        {
            get => Fields.VisitId[this];
            set => Fields.VisitId[this] = value;
        }
        [DisplayName("Patient"), NotNull, ForeignKey("[dbo].[Patients]", "PatientId"), LeftJoin("jPatient"), TextualField("PatientName")]
        [LookupEditor(typeof(PatientsRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = 1)]
        public Int32? PatientId
        {
            get => Fields.PatientId[this];
            set => Fields.PatientId[this] = value;
        }
        

        [DisplayName("Visit Type"), NotNull, ForeignKey("[dbo].[VisitTypes]", "VisitTypeId"), LeftJoin("jVisitType"), TextualField("VisitTypeName")]
        [LookupEditor(typeof(VisitTypesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = 1)]
        public Int32? VisitTypeId
        {
            get => Fields.VisitTypeId[this];
            set => Fields.VisitTypeId[this] = value;
        }

        [DisplayName("Cabinet"), NotNull, ForeignKey("[dbo].[Cabinets]", "CabinetId"), LeftJoin("jCabinets"), TextualField("CabinetName")]
        [LookupEditor(typeof(CabinetsRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = 1)]
        [QuickFilter()]
        public Int32? CabinetId
        {
            get => Fields.CabinetId[this];
            set => Fields.CabinetId[this] = value;
        }

        [DisplayName("Cabinet Name"), Expression("jCabinets.[Name]"), QuickSearch]
        [QuickFilter()]
        public String CabinetName
        {
            get { return Fields.CabinetName[this]; }
            set { Fields.CabinetName[this] = value; }
        } 

        [DisplayName("Price")]
        [ReadPermission(AdministrationTenantsPermissionKeys.VisitPayments.ReadPermissions)]
       // [ModifyPermission(AdministrationTenantsPermissionKeys.VisitPayments.ModifyPermissions)]
        [DecimalEditor(Decimals = 2, MaxValue = "10000")]
        public Decimal? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("Repeat Times"), DefaultValue(0), NotNull]
        [IntegerEditor(MaxValue = 1000)]
        public Int16? RepeatTimes
        {
            get { return Fields.RepeatTimes[this]; }
            set { Fields.RepeatTimes[this] = value; }
        }

        [DisplayName("Repeat Every"), DefaultValue(1), NotNull]
        public RepeatPeriod? RepeatPeriod
        {
            get { return (RepeatPeriod?)Fields.RepeatPeriod[this]; }
            set { Fields.RepeatPeriod[this] = (Int16?)value; }
        }

        [DisplayName("Cabinet IsActive"), Expression("jCabinets.[IsActive]")]
        public Int16? CabinetIsActive
        {
            get { return Fields.CabinetIsActive[this]; }
            set { Fields.CabinetIsActive[this] = value; }
        }

        [Expression("jVisitType.[BackgroundColor]")]
        public String VisitTypeBackgroundColor
        {
            get { return Fields.VisitTypeBackgroundColor[this]; }
            set { Fields.VisitTypeBackgroundColor[this] = value; }
        }

        [Expression("jVisitType.[BorderColor]")]
        public String VisitTypeBorderColor
        {
            get { return Fields.VisitTypeBorderColor[this]; }
            set { Fields.VisitTypeBorderColor[this] = value; }
        }

        [DisplayName("Repeat Until Start Date"), Expression(@"
CASE WHEN (T0.[RepeatTimes] > 0 AND T0.[RepeatPeriod] > 0) 
THEN 
    CASE 
        WHEN (T0.[RepeatPeriod] = 1) THEN
            DATEADD(day,T0.[RepeatTimes],T0.[StartDate])
        WHEN (T0.[RepeatPeriod] = 2) THEN
            DATEADD(week,T0.[RepeatTimes],T0.[StartDate])
        WHEN (T0.[RepeatPeriod] = 3) THEN
            DATEADD(month,T0.[RepeatTimes],T0.[StartDate])
        WHEN (T0.[RepeatPeriod] = 4) THEN
            DATEADD(year,T0.[RepeatTimes],T0.[StartDate])
    ELSE
    T0.[StartDate]
    END

ELSE
T0.[StartDate]
END
")]
        public DateTime? RepeatUntilStartDate
        {
            get { return Fields.RepeatUntilStartDate[this]; }
            set { Fields.RepeatUntilStartDate[this] = value; }
        }


        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [DisplayName("Repeat Until End Date"),Insertable(false),Updatable(false), ReadOnly(true), Expression(@"
CASE WHEN (T0.[RepeatTimes] > 0 AND T0.[RepeatPeriod] > 0) 
THEN 
    CASE 
        WHEN (T0.[RepeatPeriod] = 1) THEN
             DATEADD(day,T0.[RepeatTimes],T0.[EndDate])  
        WHEN (T0.[RepeatPeriod] = 2) THEN
            DATEADD(week,T0.[RepeatTimes],T0.[EndDate])  
        WHEN (T0.[RepeatPeriod] = 3) THEN
            DATEADD(month,T0.[RepeatTimes],T0.[EndDate])  
        WHEN (T0.[RepeatPeriod] = 4) THEN
            DATEADD(year,T0.[RepeatTimes],T0.[EndDate])  
    ELSE
    T0.[EndDate]
    END

ELSE
T0.[EndDate]
END
")]
        public DateTime? RepeatUntilEndDate
        {
            get { return Fields.RepeatUntilEndDate[this]; }
            set { Fields.RepeatUntilEndDate[this] = value; }
        }

        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [DisplayName("Next Repea Time"), Insertable(false), Updatable(false), ReadOnly(true), Expression(@"
CASE WHEN (T0.[RepeatTimes] > 0 AND T0.[RepeatPeriod] > 0) 
THEN 
    CASE 
        WHEN (T0.[RepeatPeriod] = 1) THEN
             DATEADD(day,1,T0.[StartDate])  
        WHEN (T0.[RepeatPeriod] = 2) THEN
            DATEADD(week,1,T0.[StartDate])  
        WHEN (T0.[RepeatPeriod] = 3) THEN
            DATEADD(month,1,T0.[StartDate])  
        WHEN (T0.[RepeatPeriod] = 4) THEN
            DATEADD(year,1,T0.[StartDate])  
    ELSE
    T0.[StartDate]
    END

ELSE
T0.[StartDate]
END
")]
        public DateTime? NextRepeaTime
        {
            get { return Fields.NextRepeaTime[this]; }
            set { Fields.NextRepeaTime[this] = value; }
        }


        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [DisplayName("Start Date"), NotNull, QuickSearch, QuickFilter, SortOrder(1, true), Width(150)]
        [DateTimeKind(DateTimeKind.Unspecified), DateTimeEditor]
        public DateTime? StartDate
        {
            get => Fields.StartDate[this];
            set => Fields.StartDate[this] = value;
        }
        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [DisplayName("End Date"), NotNull, QuickSearch, Width(150)]
        [DateTimeKind(DateTimeKind.Unspecified), DateTimeEditor]
        public DateTime? EndDate
        {
            get => Fields.EndDate[this];
            set => Fields.EndDate[this] = value;
        }

        [DisplayName("Assigned to User"), ForeignKey("Users", "UserId"), LeftJoin("usrA"), TextualField("AssignedUserName")]
        [LookupEditor(typeof(UserRow), InplaceAdd = false, FilterField = "CanBeAssignedToVisit", FilterValue = 1)]
        [QuickFilter()]
        public Int32? AssignedUserId
        {
            get { return Fields.AssignedUserId[this]; }
            set { Fields.AssignedUserId[this] = value; }
        }

        [DisplayName("Assigned to"), Expression("usrA.DisplayName")]
        public String AssignedUserName
        {
            get { return Fields.AssignedUserName[this]; }
            set { Fields.AssignedUserName[this] = value; }
        }
        
        [DisplayName("Description"), Width(150)]
        [TextAreaEditor(Rows = 8)]
        public String Description
        {
            get => Fields.Description[this];
            set => Fields.Description[this] = value;
        }

        [DisplayName("Free For Reservation")]
        [BsSwitchEditor]
        public Boolean? FreeForReservation
        {
            get => Fields.FreeForReservation[this];
            set => Fields.FreeForReservation[this] = value;
        }

        #region PatientFields
        [DisplayName("Patient Name"), Expression("jPatient.[Name]"), Width(150), EditLink, QuickSearch ]
        public String PatientName
        {
            get => Fields.PatientName[this];
            set => Fields.PatientName[this] = value;
        }

        [DisplayName("Notify On Change"), Expression("jPatient.[NotifyOnChange]")]
        [BsSwitchEditor]
        public Boolean? PatientNotifyOnChange
        {
            get { return Fields.PatientNotifyOnChange[this]; }
            set { Fields.PatientNotifyOnChange[this] = value; }
        }

        [DisplayName("Phone Number"), Expression("jPatient.[PhoneNumber]"), QuickSearch]
        public string PhoneNumber
        {
            get { return Fields.PhoneNumber[this]; }
            set { Fields.PhoneNumber[this] = value; }
        }
        [Expression("jPatient.[Gender]")]
        public Gender? PatientGender
        {
            get { return (Gender?)Fields.PatientGender[this]; }
            set { Fields.PatientGender[this] = (Int32?)value; }
        }

        [DisplayName("Email"), Expression("jPatient.[Email]"), Size(100), QuickSearch]
        public String PatientEmail
        {
            get { return Fields.PatientEmail[this]; }
            set { Fields.PatientEmail[this] = value; }
        }
        #endregion

        [DisplayName("Visit Type Name"), Expression("jVisitType.[Name]"), Width(150), QuickFilter]
        public String VisitTypeName
        {
            get => Fields.VisitTypeName[this];
            set => Fields.VisitTypeName[this] = value;
        }


        [ReadPermission(AdministrationTenantsPermissionKeys.VisitPayments.ReadPermissions)]
        [NotMapped]
        [DisplayName("Price Per Visit")]
        public String VisitTypePriceFormatted
        {
            get { return Fields.VisitTypePriceFormatted[this]; }
            set { Fields.VisitTypePriceFormatted[this] = value; }
        }

        [ReadPermission(AdministrationTenantsPermissionKeys.VisitPayments.ReadPermissions)]
        [Expression("jVisitType.[Price]")]
        public Decimal? VisitTypePrice
        {
            get { return Fields.VisitTypePrice[this]; }
            set { Fields.VisitTypePrice[this] = value; }
        }

        [ReadPermission(AdministrationTenantsPermissionKeys.VisitPayments.ReadPermissions)]
        [Expression("jVisitType.[CurrencyId]")]
        [DisplayName("Visit Type Currency Id")]
        [MinSelectLevel(SelectLevel.List)]
        public Int32? VisitTypeCurrencyId
        {
            get => Fields.VisitTypeCurrencyId[this]; 
            set => Fields.VisitTypeCurrencyId[this] = value; 
        }

        [ReadPermission(AdministrationTenantsPermissionKeys.VisitPayments.ReadPermissions)]
        [NotMapped, Insertable(false), Updatable(false)]
        [DisplayName("Visit Type Currency Name")]
        public String VisitTypeCurrencyName
        {
            get { return Fields.VisitTypeCurrencyName[this]; }
            set { Fields.VisitTypeCurrencyName[this] = value; }
        }
        IIdField IIdRow.IdField => Fields.VisitId;

        public static readonly RowFields Fields = new RowFields().Init();

        public VisitsRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field VisitId;
            public Int32Field PatientId;
            public Int32Field VisitTypeId;
            public Int16Field RepeatPeriod;
            public Int16Field RepeatTimes;
            public DateTimeField RepeatUntilStartDate;
            public DateTimeField RepeatUntilEndDate;
            public DateTimeField NextRepeaTime;

            public Int32Field CabinetId;
            public StringField CabinetName;
            public StringField VisitTypeCurrencyName;
            public Int16Field CabinetIsActive;
            public Int32Field AssignedUserId;
            public StringField AssignedUserName;
            public BooleanField FreeForReservation;
            public StringField Description;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public DecimalField Price;

            public Int32Field PatientGender;
            public StringField PatientEmail;
            public BooleanField PatientNotifyOnChange;
            public StringField PhoneNumber;
            public StringField PatientName;

            public StringField VisitTypeName;
            public StringField VisitTypeBackgroundColor;
            public StringField VisitTypeBorderColor;
            public DecimalField VisitTypePrice;
            public StringField VisitTypePriceFormatted;
            public Int32Field VisitTypeCurrencyId;
            
            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.Visits";
            }
        }
    }
}
