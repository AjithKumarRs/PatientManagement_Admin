namespace PatientManagement.PatientManagement {
    export interface PatientsRow {
        PatientId?: number;
        Name?: string;
        PersonalNumber?: number;
        PhoneNumber?: string;
        Gender?: Gender;
        FirstRegistrationDate?: string;
        Address?: string;
        Height?: number;
        Weight?: number;
        InsertUserId?: number;
        InsertDate?: string;
        NoteList?: NotesRow[];
        TenantId?: number;
    }

    export namespace PatientsRow {
        export const idProperty = 'PatientId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'PatientManagement.Patients';
        export const lookupKey = 'PatientManagement.Patients';

        export function getLookup(): Q.Lookup<PatientsRow> {
            return Q.getLookup<PatientsRow>('PatientManagement.Patients');
        }

        export namespace Fields {
            export declare const PatientId: string;
            export declare const Name: string;
            export declare const PersonalNumber: string;
            export declare const PhoneNumber: string;
            export declare const Gender: string;
            export declare const FirstRegistrationDate: string;
            export declare const Address: string;
            export declare const Height: string;
            export declare const Weight: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const NoteList: string;
            export declare const TenantId: string;
        }

        ['PatientId', 'Name', 'PersonalNumber', 'PhoneNumber', 'Gender', 'FirstRegistrationDate', 'Address', 'Height', 'Weight', 'InsertUserId', 'InsertDate', 'NoteList', 'TenantId'].forEach(x => (<any>Fields)[x] = x);
    }
}
