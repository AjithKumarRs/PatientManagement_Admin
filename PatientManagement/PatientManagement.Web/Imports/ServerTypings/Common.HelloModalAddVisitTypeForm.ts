namespace PatientManagement.Common {
    export class HelloModalAddVisitTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Common.HelloModalAddVisitType';

    }

    export interface HelloModalAddVisitTypeForm {
        Name: Serenity.StringEditor;
        BorderColor: Serenity.StringEditor;
        BackgroundColor: Serenity.StringEditor;
    }

    [['Name', () => Serenity.StringEditor], ['BorderColor', () => Serenity.StringEditor], ['BackgroundColor', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(HelloModalAddVisitTypeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
