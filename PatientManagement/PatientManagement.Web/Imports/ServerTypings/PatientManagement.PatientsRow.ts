namespace PatientManagement.PatientManagement {
    export interface PatientsRow {
        PatientId?: number;
        Name?: string;
        PersonalNumber?: number;
        PhoneNumber?: string;
        Gender?: Gender;
        Picture?: string;
        VisitsCount?: number;
        LastVisitEndDate?: string;
        FirstRegistrationDate?: string;
        Address?: string;
        City?: string;
        Country?: string;
        Height?: number;
        Weight?: number;
        Email?: string;
        NotifyOnChange?: boolean;
        WantedWeight?: string;
        NoteList?: NotesRow[];
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

    export namespace PatientsRow {
        export const idProperty = 'PatientId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'PatientManagement.Patients';
        export const lookupKey = 'PatientManagement.Patients';

        export function getLookup(): Q.Lookup<PatientsRow> {
            return Q.getLookup<PatientsRow>('PatientManagement.Patients');
        }

        export declare const enum Fields {
            PatientId = "PatientId",
            Name = "Name",
            PersonalNumber = "PersonalNumber",
            PhoneNumber = "PhoneNumber",
            Gender = "Gender",
            Picture = "Picture",
            VisitsCount = "VisitsCount",
            LastVisitEndDate = "LastVisitEndDate",
            FirstRegistrationDate = "FirstRegistrationDate",
            Address = "Address",
            City = "City",
            Country = "Country",
            Height = "Height",
            Weight = "Weight",
            Email = "Email",
            NotifyOnChange = "NotifyOnChange",
            WantedWeight = "WantedWeight",
            NoteList = "NoteList",
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
