namespace PatientManagement.PatientManagement {
    export interface NotesRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }

    export namespace NotesRow {
        export const idProperty = 'NoteId';
        export const nameProperty = 'EntityType';
        export const localTextPrefix = 'PatientManagement.Notes';

        export namespace Fields {
            export declare const NoteId: string;
            export declare const EntityType: string;
            export declare const EntityId: string;
            export declare const Text: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const InsertUserDisplayName: string;
        }

        [
            'NoteId', 
            'EntityType', 
            'EntityId', 
            'Text', 
            'InsertUserId', 
            'InsertDate', 
            'InsertUserDisplayName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
