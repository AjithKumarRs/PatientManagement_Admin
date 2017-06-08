namespace PatientManagement.Administration {
    export class CurrenciesForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Currencies';

    }

    export interface CurrenciesForm {
        Name: Serenity.StringEditor;
    }

    [['Name', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(CurrenciesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));

}