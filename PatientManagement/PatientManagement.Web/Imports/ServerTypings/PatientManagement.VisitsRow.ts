namespace PatientManagement.PatientManagement {
    export interface VisitsRow {
        VisitId?: number;
        PatientId?: number;
        VisitTypeId?: number;
        RepeatPeriod?: RepeatPeriod;
        RepeatTimes?: number;
        RepeatUntilStartDate?: string;
        RepeatUntilEndDate?: string;
        CabinetId?: number;
        CabinetName?: string;
        VisitTypeCurrencyName?: string;
        CabinetIsActive?: number;
        AssignedUserId?: number;
        AssignedUserName?: string;
        FreeForReservation?: boolean;
        Description?: string;
        StartDate?: string;
        EndDate?: string;
        Price?: number;
        PatientGender?: Gender;
        PatientEmail?: string;
        PatientNotifyOnChange?: boolean;
        PhoneNumber?: string;
        PatientName?: string;
        VisitTypeName?: string;
        VisitTypeBackgroundColor?: string;
        VisitTypeBorderColor?: string;
        VisitTypePrice?: number;
        VisitTypePriceFormatted?: string;
        VisitTypeCurrencyId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        TenantId?: number;
        TenantName?: string;
        TenantCurrencyId?: number;
    }

    export namespace VisitsRow {
        export const idProperty = 'VisitId';
        export const isActiveProperty = 'IsActive';
        export const localTextPrefix = 'PatientManagement.Visits';
        export const lookupKey = 'PatientManagement.Visits';

        export function getLookup(): Q.Lookup<VisitsRow> {
            return Q.getLookup<VisitsRow>('PatientManagement.Visits');
        }

        export declare const enum Fields {
            VisitId = "VisitId",
            PatientId = "PatientId",
            VisitTypeId = "VisitTypeId",
            RepeatPeriod = "RepeatPeriod",
            RepeatTimes = "RepeatTimes",
            RepeatUntilStartDate = "RepeatUntilStartDate",
            RepeatUntilEndDate = "RepeatUntilEndDate",
            CabinetId = "CabinetId",
            CabinetName = "CabinetName",
            VisitTypeCurrencyName = "VisitTypeCurrencyName",
            CabinetIsActive = "CabinetIsActive",
            AssignedUserId = "AssignedUserId",
            AssignedUserName = "AssignedUserName",
            FreeForReservation = "FreeForReservation",
            Description = "Description",
            StartDate = "StartDate",
            EndDate = "EndDate",
            Price = "Price",
            PatientGender = "PatientGender",
            PatientEmail = "PatientEmail",
            PatientNotifyOnChange = "PatientNotifyOnChange",
            PhoneNumber = "PhoneNumber",
            PatientName = "PatientName",
            VisitTypeName = "VisitTypeName",
            VisitTypeBackgroundColor = "VisitTypeBackgroundColor",
            VisitTypeBorderColor = "VisitTypeBorderColor",
            VisitTypePrice = "VisitTypePrice",
            VisitTypePriceFormatted = "VisitTypePriceFormatted",
            VisitTypeCurrencyId = "VisitTypeCurrencyId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            TenantId = "TenantId",
            TenantName = "TenantName",
            TenantCurrencyId = "TenantCurrencyId"
        }
    }
}
