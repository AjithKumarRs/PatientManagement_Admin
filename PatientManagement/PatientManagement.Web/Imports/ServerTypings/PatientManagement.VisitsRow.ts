﻿namespace PatientManagement.PatientManagement {
    export interface VisitsRow {
        VisitId?: number;
        PatientId?: number;
        VisitTypeId?: number;
        CabinetId?: number;
        CabinetName?: string;
        CabinetIsActive?: number;
        AssignedUserId?: number;
        AssignedUserName?: string;
        FreeForReservation?: boolean;
        Description?: string;
        StartDate?: string;
        EndDate?: string;
        InsertUserId?: number;
        InsertDate?: string;
        TenantName?: string;
        InsertUserName?: string;
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
        TenantId?: number;
    }

    export namespace VisitsRow {
        export const idProperty = 'VisitId';
        export const localTextPrefix = 'PatientManagement.Visits';
        export const lookupKey = 'PatientManagement.Visits';

        export function getLookup(): Q.Lookup<VisitsRow> {
            return Q.getLookup<VisitsRow>('PatientManagement.Visits');
        }

        export declare const enum Fields {
            VisitId = "VisitId",
            PatientId = "PatientId",
            VisitTypeId = "VisitTypeId",
            CabinetId = "CabinetId",
            CabinetName = "CabinetName",
            CabinetIsActive = "CabinetIsActive",
            AssignedUserId = "AssignedUserId",
            AssignedUserName = "AssignedUserName",
            FreeForReservation = "FreeForReservation",
            Description = "Description",
            StartDate = "StartDate",
            EndDate = "EndDate",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            TenantName = "TenantName",
            InsertUserName = "InsertUserName",
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
            TenantId = "TenantId"
        }
    }
}
