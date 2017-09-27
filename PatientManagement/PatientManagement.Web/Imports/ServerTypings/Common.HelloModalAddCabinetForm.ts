namespace PatientManagement.Common {
    export class HelloModalAddCabinetForm extends Serenity.PrefixedContext {
        static formKey = 'Common.HelloModalAddCabinet';

    }

    export interface HelloModalAddCabinetForm {
        Name: Serenity.StringEditor;
        WorkHoursStart: Serenity.TimeEditor;
        WorkHoursEnd: Serenity.TimeEditor;
    }

    [['Name', () => Serenity.StringEditor], ['WorkHoursStart', () => Serenity.TimeEditor], ['WorkHoursEnd', () => Serenity.TimeEditor]].forEach(x => Object.defineProperty(HelloModalAddCabinetForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
