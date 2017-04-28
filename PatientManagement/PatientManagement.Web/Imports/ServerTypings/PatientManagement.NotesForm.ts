namespace PatientManagement.PatientManagement {
    export class NotesForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.Notes';

    }

    export interface NotesForm {
        EntityType: Serenity.StringEditor;
        EntityId: Serenity.StringEditor;
        Text: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
    }

    [['EntityType', () => Serenity.StringEditor], ['EntityId', () => Serenity.StringEditor], ['Text', () => Serenity.StringEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['InsertDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(NotesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
