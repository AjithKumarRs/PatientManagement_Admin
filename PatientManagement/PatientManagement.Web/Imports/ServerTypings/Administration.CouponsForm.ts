namespace PatientManagement.Administration {
    export class CouponsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Coupons';

    }

    export interface CouponsForm {
        Key: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Discount: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        EndDate: Serenity.DateEditor;
        MaxTimeUsing: Serenity.IntegerEditor;
        IsUsed: Serenity.IntegerEditor;
        IsActive: BsSwitchEditor;
    }

    [['Key', () => Serenity.StringEditor], ['Name', () => Serenity.StringEditor], ['Discount', () => Serenity.IntegerEditor], ['Description', () => Serenity.StringEditor], ['EndDate', () => Serenity.DateEditor], ['MaxTimeUsing', () => Serenity.IntegerEditor], ['IsUsed', () => Serenity.IntegerEditor], ['IsActive', () => BsSwitchEditor]].forEach(x => Object.defineProperty(CouponsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
