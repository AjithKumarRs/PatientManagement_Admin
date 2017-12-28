/// <reference types="jqueryui" />
/// <reference types="jquery" />
declare namespace PatientManagement.PatientManagement {
    class VisitTypesDialog extends Serenity.EntityDialog<VisitTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: VisitTypesForm;
        loadEntity(entity: VisitTypesRow): void;
    }
}
declare namespace PatientManagement.PatientManagement {
    class NewVisitTypeDialog extends PatientManagement.VisitTypesDialog {
        protected onSaveSuccess(response: Serenity.SaveResponse): void;
        protected onDeleteSuccess(response: Serenity.DeleteResponse): void;
    }
}
declare namespace PatientManagement.PatientManagement {
    class VisitsTypesFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
        backgroundProperty: string;
        borderProperty: string;
        initializeColumn(column: Slick.Column): void;
    }
}
declare namespace PatientManagement.PatientManagement {
    class VisitTypesGrid extends Serenity.EntityGrid<VisitTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VisitTypesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getIsActiveProperty(): string;
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement {
    class VisiTypesBottomLeftMenu extends Serenity.Widget<any> {
        constructor(elem: JQuery, opt: {});
    }
}
declare namespace PatientManagement.PatientManagement {
    class VisitsDialog extends Serenity.EntityDialog<VisitsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: VisitsForm;
        protected updateInterface(): void;
        constructor();
        protected getCloningEntity(): VisitsRow;
    }
}
declare namespace PatientManagement.PatientManagement {
    class VisitsGrid extends Serenity.EntityGrid<VisitsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VisitsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace PatientManagement.PatientManagement {
    class UserNotificationsDialog extends Serenity.EntityDialog<UserNotificationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: UserNotificationsForm;
    }
}
declare namespace PatientManagement.PatientManagement {
    class UserNotificationsGrid extends Serenity.EntityGrid<UserNotificationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserNotificationsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace PatientManagement.PatientManagement {
    class PatientsFileUploadsDialog extends Serenity.EntityDialog<PatientsFileUploadsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PatientsFileUploadsForm;
    }
}
declare namespace PatientManagement.PatientManagement {
    class PatientsFileUploadsGrid extends Serenity.EntityGrid<PatientsFileUploadsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PatientsFileUploadsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.PatientManagement {
    class FIleUploadsForPatientDialog extends PatientsFileUploadsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace PatientManagement.PatientManagement {
    class FIleUploadsForPatientGrid extends PatientsFileUploadsGrid {
        protected getDialogType(): typeof FIleUploadsForPatientDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _patientId;
        patientId: number;
    }
}
declare namespace PatientManagement.PatientManagement {
    class ActivityDialog extends Serenity.EntityDialog<ActivityRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ActivityForm;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace PatientManagement.PatientManagement {
    class PatienActivityDialog extends ActivityDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace PatientManagement.PatientManagement {
    class ActivityGrid extends Serenity.EntityGrid<ActivityRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ActivityDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.PatientManagement {
    class PatientActivityGrid extends ActivityGrid {
        protected getDialogType(): typeof PatienActivityDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _patientId;
        patientId: number;
    }
}
declare namespace PatientManagement.PatientManagement {
    class PatientHealthDialog extends Serenity.EntityDialog<PatientHealthRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PatientHealthForm;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace PatientManagement.PatientManagement {
    class PatientHealthCheckDialog extends PatientHealthDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace PatientManagement.PatientManagement {
    class PatientHealthGrid extends Serenity.EntityGrid<PatientHealthRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PatientHealthDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.PatientManagement {
    class PatientHealthCheckGrid extends PatientHealthGrid {
        protected getDialogType(): typeof PatientHealthCheckDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _patientId;
        patientId: number;
    }
}
declare namespace PatientManagement.PatientManagement {
    class LifeStylesDialog extends Serenity.EntityDialog<LifeStylesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LifeStylesForm;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace PatientManagement.PatientManagement {
    class PatientLifeStyleDialog extends LifeStylesDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace PatientManagement.PatientManagement {
    class LifeStylesGrid extends Serenity.EntityGrid<LifeStylesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LifeStylesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.PatientManagement {
    class PatientLifeStylesGrid extends LifeStylesGrid {
        protected getDialogType(): typeof PatientLifeStyleDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _patientId;
        patientId: number;
    }
}
declare namespace PatientManagement.PatientManagement {
    class PatientsDialog extends Serenity.EntityDialog<PatientsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PatientsForm;
        private visitsGrid;
        private loadedState;
        private patientActivityGrid;
        private patientsFileUploadsGrid;
        private patientHealthGrid;
        private patientlifeStyleGrid;
        private patientValidator;
        private selfChange;
        private checkEgn;
        private checkPhone;
        protected isValidDate: (y: any, m: any, d: any) => boolean;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: PatientsRow): void;
        onSaveSuccess(response: any): void;
    }
}
declare namespace PatientManagement.PatientManagement {
    class PatientsFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
        genderProperty: string;
        initializeColumn(column: Slick.Column): void;
    }
    class PatientsPhoneFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
    class PatientsEmailFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace PatientManagement.PatientManagement {
    class PatientsGrid extends Serenity.EntityGrid<PatientsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PatientsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getIsActiveProperty(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace PatientManagement.PatientManagement {
    class PatientVisitsDialog extends VisitsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace PatientManagement.PatientManagement {
    class PatientVisitsGrid extends VisitsGrid {
        protected getDialogType(): typeof PatientVisitsDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _patientId;
        patientId: number;
    }
}
declare namespace PatientManagement.PatientManagement {
    class NotificationsUserImageFormatter implements Slick.Formatter, Serenity.IInitializeColumn {
        format(ctx: Slick.FormatterContext): string;
        initializeColumn(column: Slick.Column): void;
        fileProperty: string;
        thumb: boolean;
    }
}
declare namespace PatientManagement.PatientManagement {
    class NotificationDropdownMenu extends Serenity.TemplatedWidget<any> {
        protected getService(): string;
        private notificationIds;
        constructor(elem: JQuery, opt: {});
        updateNotifications: () => void;
        protected openClick(e: any): void;
        protected markAsSeen(): void;
    }
}
declare namespace PatientManagement.PatientManagement {
    class NotificationsDialog extends Serenity.EntityDialog<NotificationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: NotificationsForm;
    }
}
declare namespace PatientManagement.PatientManagement {
    class NotificationsGrid extends Serenity.EntityGrid<NotificationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NotificationsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace PatientManagement.PatientManagement {
    class NotesDialog extends Serenity.TemplatedDialog<any> {
        private textEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        text: string;
        okClick: () => void;
    }
}
declare namespace PatientManagement.PatientManagement {
    class NotesEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        constructor(div: JQuery);
        protected getTemplate(): string;
        protected updateContent(): void;
        protected addClick(): void;
        protected editClick(e: any): void;
        deleteClick(e: any): void;
        value: NotesRow[];
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        get_isDirty(): boolean;
        set_isDirty(value: any): void;
        onChange: () => void;
    }
}
declare namespace PatientManagement.PatientManagement {
    class MedicalSpecialtiesFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace PatientManagement.PatientManagement {
    class MedicalSpecialtyDialog extends Serenity.EntityDialog<MedicalSpecialtyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MedicalSpecialtyForm;
    }
}
declare namespace PatientManagement.PatientManagement {
    class MedicalSpecialtyExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getImageUploadEditorOptions(): Serenity.ImageUploadEditorOptions;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace PatientManagement.PatientManagement {
    class MedicalSpecialtyGrid extends Serenity.EntityGrid<MedicalSpecialtyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MedicalSpecialtyDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getIsActiveProperty(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace PatientManagement.PatientManagement {
    class HelloModal extends Serenity.TemplatedWidget<any> {
        private formCabinet;
        private formPatient;
        private formVisitType;
        private formVisit;
        constructor(elem: JQuery, opt: {});
        protected validateFormById(thisElemId: any): boolean;
    }
}
declare namespace PatientManagement.Common {
    class HelloModalAddCabinetPanel extends Serenity.PropertyPanel<HelloModalAddCabinetRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
        protected getTemplate(): any;
        ValidateForm(): boolean;
        SaveEntity(): boolean;
    }
}
declare namespace PatientManagement.Common {
    class HelloModalAddPatientPanel extends Serenity.PropertyPanel<HelloModalAddPatientRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
        protected getTemplate(): any;
        ValidateForm(): boolean;
        SaveEntity(): boolean;
    }
}
declare namespace PatientManagement.Common {
    class HelloModalAddVisitPanel extends Serenity.PropertyPanel<HelloModalAddVisitRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
        protected getTemplate(): any;
        ValidateForm(): boolean;
        SaveEntity(): boolean;
    }
}
declare namespace PatientManagement.Common {
    class HelloModalAddVisitTypePanel extends Serenity.PropertyPanel<HelloModalAddVisitTypeRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
        protected getTemplate(): any;
        ValidateForm(): boolean;
        SaveEntity(): boolean;
    }
}
declare namespace PatientManagement.PatientManagement {
    class CalendarCabinetsEditor extends Serenity.Select2Editor<any, any> {
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.PatientManagement {
    class CalendarPatientDialog extends PatientsDialog {
        onSaveSuccess(response: Serenity.SaveResponse): void;
        loadEntity(entity: PatientsRow): void;
    }
}
declare var FullCalendar: any;
declare namespace PatientManagement.PatientManagement {
    class CalendarVisitsDialog extends VisitsDialog {
        protected updateTitle(): void;
        newPredifinedVisit: (start: any, end: any) => void;
        updateVisit: (visitId: any, start: any, end: any) => void;
        deleteVisit: (visitId: any) => void;
        protected onSaveSuccess(response: Serenity.SaveResponse): void;
        refreshVisitForTodayBox(): void;
        protected onDeleteSuccess(response: Serenity.DeleteResponse): void;
        protected formatAlertMessage(firstLine: any, title: any, startDate: Date, endDate: Date): string;
    }
}
declare namespace PatientManagement.PatientManagement {
    class CalendarVisitsGrid extends VisitsGrid {
        protected getDialogType(): typeof CalendarVisitsDialog;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
    }
}
declare namespace PatientManagement.PatientManagement {
    class CabinetsDialog extends Serenity.EntityDialog<CabinetsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CabinetsForm;
        constructor();
        protected onSaveSuccess(response: Serenity.SaveResponse): void;
    }
}
declare namespace PatientManagement.PatientManagement {
    class CabinetsFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace PatientManagement.PatientManagement {
    class CabinetsGrid extends Serenity.EntityGrid<CabinetsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CabinetsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getIsActiveProperty(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.PatientManagement {
    class CabinetsListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace PatientManagement.PatientManagement {
    class UserListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace PatientManagement.PatientManagement {
    class WorkDaysListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace PatientManagement.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.PatientManagement {
    class OfferDropDownEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.Membership {
    import VisitsGrid = PatientManagement.VisitsGrid;
    class AddedVisitsFromUserPanel extends VisitsGrid {
        private visitsGrid;
        constructor(container: JQuery, userId: number);
        protected getColumns(): Slick.Column[];
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _insertUserId;
        insertUserId: number;
    }
}
declare namespace PatientManagement.Membership {
    class EditTenantPanel extends Serenity.PropertyPanel<EditTenantRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.Membership {
    class EditUserProfilePanel extends Serenity.PropertyPanel<EditUserProfileRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.LanguageList {
    function getValue(): string[][];
}
declare namespace PatientManagement.ScriptInitialization {
}
declare namespace PatientManagement.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare var jsPDF: any;
declare namespace PatientManagement.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace PatientManagement.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace PatientManagement.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace PatientManagement.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace PatientManagement.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace PatientManagement.Common {
    class RecieveNotificationToggle extends Serenity.Widget<any> {
        constructor(input: JQuery, opt: BootstrapSwitchOptions);
    }
}
declare namespace PatientManagement.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace PatientManagement.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare namespace PatientManagement {
    class AddressAutocomplete extends Serenity.Widget<any> implements Serenity.ISetEditValue {
        constructor(element: JQuery);
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
}
declare namespace PatientManagement {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace PatientManagement {
    class BsSwitchEditor extends Serenity.Widget<BootstrapSwitchOptions> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        constructor(element: JQuery, opt: BootstrapSwitchOptions);
        setEditValue(source: any, property: Serenity.PropertyItem): void;
        getEditValue(property: Serenity.PropertyItem, target: any): void;
    }
    interface BootstrapSwitchOptions {
        state?: boolean;
        size?: string;
        animate?: boolean;
        disabled?: boolean;
        readonly?: boolean;
        indeterminate?: boolean;
        invers?: boolean;
        radioAllOff?: boolean;
        onColor?: string;
        offColor?: string;
        onText?: string;
        offText?: string;
        labelText?: string;
        handleWidth?: string;
        labelWidth?: string;
        baseClass?: string;
        wrapperClass?: string;
        onInit?: any;
        onSwitchChange?: any;
    }
}
declare namespace PatientManagement.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace PatientManagement.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace PatientManagement.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace PatientManagement.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace PatientManagement.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace PatientManagement.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace PatientManagement.Common {
    interface IcsExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace IcsExportHelper {
        function createToolButton(options: IcsExportOptions): Serenity.ToolButton;
    }
}
declare namespace PatientManagement {
    interface LKCodeDescOptions extends Serenity.LookupEditorOptions {
        codeFieldName: string;
        descrFieldName: string;
    }
}
declare namespace PatientManagement {
    class LKCodeDescr extends Serenity.LookupEditorBase<LKCodeDescOptions, any> {
        constructor(container: JQuery, opt?: LKCodeDescOptions);
        getSelect2Options(): Select2Options;
        protected myFormatSelection(item: Serenity.Select2Item): string;
        protected myFormatResult(item: Serenity.Select2Item): string;
    }
}
declare namespace PatientManagement.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace PatientManagement.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace PatientManagement.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        private rolePermissions;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass(item, grant);
        private getItemEffectiveClass(item);
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains(item);
        private getDescendants(item, excludeGroups);
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey(key);
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys(titleByKey);
        get_value(): UserPermissionRow[];
        set_value(value: UserPermissionRow[]): void;
        get_rolePermissions(): string[];
        set_rolePermissions(value: string[]): void;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace PatientManagement.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace PatientManagement.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getPropertyItems(): Serenity.PropertyItem[];
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace PatientManagement.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace PatientManagement.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace PatientManagement.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): RSVP.Promise<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace PatientManagement.Administration {
    class TenantDialog extends Serenity.EntityDialog<TenantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TenantForm;
    }
}
declare namespace PatientManagement.Administration {
    class TenantGrid extends Serenity.EntityGrid<TenantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TenantDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getIsActiveProperty(): string;
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.Administration {
    class SubscriptionsDialog extends Serenity.EntityDialog<SubscriptionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SubscriptionsForm;
        constructor();
    }
}
declare namespace PatientManagement.Administration {
    class SubscriptionsGrid extends Serenity.EntityGrid<SubscriptionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SubscriptionsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getIsActiveProperty(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getItemCssClass(item: SubscriptionsRow, index: number): string;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare var Vue: any;
declare namespace PatientManagement.Administration {
    class SergenPanel extends Serenity.Widget<any> {
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.Administration {
    class SentEmailsDialog extends Serenity.EntityDialog<SentEmailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SentEmailsForm;
        loadEntity(entity: SentEmailsRow): void;
        sendPredefinedEmail: (visitId: any) => void;
    }
}
declare namespace PatientManagement.PatientManagement {
    class SentEmailsToEmailFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
    class SentEmailsFromEmailFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace PatientManagement.Administration {
    class SentEmailsGrid extends Serenity.EntityGrid<SentEmailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SentEmailsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace PatientManagement.Administration {
    class ViewEmailDialog extends Serenity.TemplatedDialog<any> {
        private email;
        private emailId;
        private toEmail;
        private insertedDate;
        constructor(entityId: number, toEmail: string, insertedDate: string);
        protected onDialogOpen(): void;
        protected getTemplate(): string;
    }
}
declare namespace PatientManagement.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace PatientManagement.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace PatientManagement.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getIsActiveProperty(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace PatientManagement.PatientManagement {
    class RoleListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace PatientManagement.Administration {
    class PaymentsDetailsDialog extends Serenity.EntityDialog<PaymentsDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PaymentsDetailsForm;
        onSaveSuccess(response: Serenity.SaveResponse): void;
    }
}
declare namespace PatientManagement.Administration {
    class PaymentsDetailsGrid extends Serenity.EntityGrid<PaymentsDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PaymentsDetailsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.Administration {
    class PaymentsDialog extends Serenity.EntityDialog<PaymentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PaymentsForm;
        constructor();
        loadEntity(entity: PaymentsRow): void;
        protected SetInnerFields(): void;
        protected CheckIfFieldsAreEmpty(): void;
        private setPaymentDetails(details);
        private setSubscriptionDetails(details);
    }
}
declare namespace PatientManagement.Administration {
    class PaymentsGrid extends Serenity.EntityGrid<PaymentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PaymentsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getItemCssClass(item: PaymentsRow, index: number): string;
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace PatientManagement.Administration {
    class PaymentOptionsDialog extends Serenity.EntityDialog<PaymentOptionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PaymentOptionsForm;
    }
}
declare namespace PatientManagement.Administration {
    class PaymentOptionsGrid extends Serenity.EntityGrid<PaymentOptionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PaymentOptionsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.Administration {
    class OffersDialog extends Serenity.EntityDialog<OffersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OffersForm;
    }
}
declare namespace PatientManagement.Administration {
    class OffersGrid extends Serenity.EntityGrid<OffersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OffersDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getIsActiveProperty(): string;
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace PatientManagement.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace PatientManagement.Administration {
    class ExternalAccessDialog extends Serenity.EntityDialog<ExternalAccessRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ExternalAccessForm;
    }
}
declare namespace PatientManagement.Administration {
    class ExternalAccessGrid extends Serenity.EntityGrid<ExternalAccessRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExternalAccessDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.PatientManagement {
    class ExternalAccessUrlFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace PatientManagement.Administration {
    class CurrenciesDialog extends Serenity.EntityDialog<CurrenciesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CurrenciesForm;
    }
}
declare namespace PatientManagement.Administration {
    class CurrenciesGrid extends Serenity.EntityGrid<CurrenciesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CurrenciesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace PatientManagement.Administration {
    class CouponsDialog extends Serenity.EntityDialog<CouponsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CouponsForm;
    }
}
declare namespace PatientManagement.Administration {
    class CouponsGrid extends Serenity.EntityGrid<CouponsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CouponsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getIsActiveProperty(): string;
        constructor(container: JQuery);
    }
}
declare namespace PatientManagement.Administration {
}
declare namespace PatientManagement.Administration {
    class CouponsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CouponsForm {
        Key: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Discount: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        EndDate: Serenity.DateEditor;
        MaxTimeUsing: Serenity.IntegerEditor;
        IsUsed: Serenity.IntegerEditor;
        IsActive: BsSwitchEditor;
    }
}
declare namespace PatientManagement.Administration {
    interface CouponsRow {
        CouponId?: number;
        Key?: string;
        Name?: string;
        Discount?: number;
        Description?: string;
        EndDate?: string;
        IsUsed?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        IsActive?: number;
        MaxTimeUsing?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace CouponsRow {
        const idProperty = "CouponId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Key";
        const localTextPrefix = "Administration.Coupons";
        const lookupKey = "Administration.Coupons";
        function getLookup(): Q.Lookup<CouponsRow>;
        namespace Fields {
            const CouponId: string;
            const Key: string;
            const Name: string;
            const Discount: string;
            const Description: string;
            const EndDate: string;
            const IsUsed: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDateField: string;
            const IsActive: string;
            const MaxTimeUsing: string;
            const InsertUserName: string;
            const UpdateUserName: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    namespace CouponsService {
        const baseUrl = "Administration/Coupons";
        function Create(request: Serenity.SaveRequest<CouponsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CouponsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CouponsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CouponsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.Administration {
}
declare namespace PatientManagement.Administration {
    class CurrenciesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CurrenciesForm {
        CurrencyId: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Rate: Serenity.DecimalEditor;
        Enabled: BsSwitchEditor;
        BaseCurrencyId: Serenity.LookupEditor;
    }
}
declare namespace PatientManagement.Administration {
    interface CurrenciesRow {
        Id?: number;
        CurrencyId?: string;
        Name?: string;
        Rate?: number;
        Enabled?: boolean;
        BaseCurrencyId?: number;
        BaseCurrencyName?: string;
        UpdateUserId?: number;
        UserName?: string;
        UpdateDateField?: string;
    }
    namespace CurrenciesRow {
        const idProperty = "Id";
        const nameProperty = "CurrencyId";
        const localTextPrefix = "Administration.Currencies";
        const lookupKey = "Administration.Currencies";
        function getLookup(): Q.Lookup<CurrenciesRow>;
        namespace Fields {
            const Id: string;
            const CurrencyId: string;
            const Name: string;
            const Rate: string;
            const Enabled: string;
            const BaseCurrencyId: string;
            const BaseCurrencyName: string;
            const UpdateUserId: string;
            const UserName: string;
            const UpdateDateField: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    namespace CurrenciesService {
        const baseUrl = "Administration/Currencies";
        function Create(request: Serenity.SaveRequest<CurrenciesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CurrenciesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function UpdateAllCurrencies(request: Serenity.SaveRequest<CurrenciesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CurrenciesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CurrenciesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const UpdateAllCurrencies: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.Administration {
}
declare namespace PatientManagement.Administration {
    class ExternalAccessForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ExternalAccessForm {
        Name: Serenity.StringEditor;
        ExternalAccessCabinets: Serenity.LookupEditor;
        AccessType: Serenity.EnumEditor;
        OutputFormat: Serenity.EnumEditor;
    }
}
declare namespace PatientManagement.Administration {
    interface ExternalAccessRow {
        ExternalAccessCabinets?: number[];
        ExternalAccessId?: number;
        Name?: string;
        Url?: string;
        VisitedCount?: number;
        AccessType?: PatientManagement.AccessType;
        OutputFormat?: PatientManagement.OutputFormat;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        IsActive?: number;
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace ExternalAccessRow {
        const idProperty = "ExternalAccessId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Administration.ExternalAccess";
        const lookupKey = "AdministrationTenants.ExternalAccess";
        function getLookup(): Q.Lookup<ExternalAccessRow>;
        namespace Fields {
            const ExternalAccessCabinets: string;
            const ExternalAccessId: string;
            const Name: string;
            const Url: string;
            const VisitedCount: string;
            const AccessType: string;
            const OutputFormat: string;
            const TenantId: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDateField: string;
            const IsActive: string;
            const TenantName: string;
            const InsertUserName: string;
            const UpdateUserName: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    namespace ExternalAccessService {
        const baseUrl = "Administration/ExternalAccess";
        function Create(request: Serenity.SaveRequest<ExternalAccessRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExternalAccessRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExternalAccessRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExternalAccessRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.Administration {
}
declare namespace PatientManagement.Administration {
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
}
declare namespace PatientManagement.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        namespace Fields {
            const Id: string;
            const LanguageId: string;
            const LanguageName: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    interface OfferLangRow {
        Id?: number;
        OfferId?: number;
        LanguageId?: number;
        Name?: string;
        Description?: string;
    }
    namespace OfferLangRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Administration.OfferLang";
        namespace Fields {
            const Id: string;
            const OfferId: string;
            const LanguageId: string;
            const Name: string;
            const Description: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    namespace OfferLangService {
        const baseUrl = "Administration/OfferLang";
        function Create(request: Serenity.SaveRequest<OfferLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OfferLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OfferLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OfferLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.Administration {
}
declare namespace PatientManagement.Administration {
    class OffersForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface OffersForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Price: Serenity.DecimalEditor;
        IsPublic: BsSwitchEditor;
        Enabled: BsSwitchEditor;
        CurrencyId: Serenity.LookupEditor;
        RoleId: Serenity.LookupEditor;
        ExpirationDate: Serenity.DateTimeEditor;
        MaximumSubscriptionTime: Serenity.IntegerEditor;
        MaximumUsersPerTenant: Serenity.IntegerEditor;
        MaximumVisitsPerTenant: Serenity.IntegerEditor;
        MaximumPatientsPerTenant: Serenity.IntegerEditor;
        MaximumCabinets: Serenity.IntegerEditor;
    }
}
declare namespace PatientManagement.Administration {
    interface OffersRow {
        OfferId?: number;
        Name?: string;
        MaximumSubscriptionTime?: number;
        MaximumUsersPerTenant?: number;
        MaximumVisitsPerTenant?: number;
        MaximumPatientsPerTenant?: number;
        MaximumCabinets?: number;
        ExpirationDate?: string;
        Description?: string;
        Price?: number;
        Enabled?: number;
        CurrencyId?: number;
        RoleId?: number;
        CurrencyCurrencyId?: string;
        CurrencyName?: string;
        CurrencyEnabled?: boolean;
        RoleRoleName?: string;
        IsPublic?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace OffersRow {
        const idProperty = "OfferId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Administration.Offers";
        const lookupKey = "Administration.Offers";
        function getLookup(): Q.Lookup<OffersRow>;
        namespace Fields {
            const OfferId: string;
            const Name: string;
            const MaximumSubscriptionTime: string;
            const MaximumUsersPerTenant: string;
            const MaximumVisitsPerTenant: string;
            const MaximumPatientsPerTenant: string;
            const MaximumCabinets: string;
            const ExpirationDate: string;
            const Description: string;
            const Price: string;
            const Enabled: string;
            const CurrencyId: string;
            const RoleId: string;
            const CurrencyCurrencyId: string;
            const CurrencyName: string;
            const CurrencyEnabled: string;
            const RoleRoleName: string;
            const IsPublic: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDateField: string;
            const IsActive: string;
            const InsertUserName: string;
            const UpdateUserName: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    namespace OffersService {
        const baseUrl = "Administration/Offers";
        function Create(request: Serenity.SaveRequest<OffersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OffersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OffersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OffersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    interface PaymentCouponsRow {
        PaymentCouponId?: number;
        CouponId?: number;
        PaymentId?: number;
    }
    namespace PaymentCouponsRow {
        const idProperty = "PaymentCouponId";
        const localTextPrefix = "PaymentCoupons";
        namespace Fields {
            const PaymentCouponId: string;
            const CouponId: string;
            const PaymentId: string;
        }
    }
}
declare namespace PatientManagement.Administration {
}
declare namespace PatientManagement.Administration {
    class PaymentOptionsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PaymentOptionsForm {
        Months: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
    }
}
declare namespace PatientManagement.Administration {
    interface PaymentOptionsRow {
        PaymentOptionId?: number;
        Months?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace PaymentOptionsRow {
        const idProperty = "PaymentOptionId";
        const nameProperty = "Name";
        const localTextPrefix = "Administration.PaymentOptions";
        const lookupKey = "Administration.PaymentOptions";
        function getLookup(): Q.Lookup<PaymentOptionsRow>;
        namespace Fields {
            const PaymentOptionId: string;
            const Months: string;
            const Name: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDateField: string;
            const InsertUserName: string;
            const UpdateUserName: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    namespace PaymentOptionsService {
        const baseUrl = "Administration/PaymentOptions";
        function Create(request: Serenity.SaveRequest<PaymentOptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PaymentOptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PaymentOptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PaymentOptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.Administration {
}
declare namespace PatientManagement.Administration {
}
declare namespace PatientManagement.Administration {
    class PaymentsDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PaymentsDetailsForm {
        Name: Serenity.StringEditor;
        PaymentType: Serenity.EnumEditor;
        BeneficiaryName: Serenity.StringEditor;
        BankName: Serenity.StringEditor;
        IbanBeneficient: Serenity.StringEditor;
    }
}
declare namespace PatientManagement.Administration {
    interface PaymentsDetailsRow {
        PaymentDetailsId?: number;
        BeneficiaryName?: string;
        BankName?: string;
        Name?: string;
        PaymentType?: PatientManagement.PaymentTypes;
        IbanBeneficient?: string;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace PaymentsDetailsRow {
        const idProperty = "PaymentDetailsId";
        const nameProperty = "Name";
        const localTextPrefix = "Administration.PaymentsDetails";
        const lookupKey = "Administration.PaymentsDetails";
        function getLookup(): Q.Lookup<PaymentsDetailsRow>;
        namespace Fields {
            const PaymentDetailsId: string;
            const BeneficiaryName: string;
            const BankName: string;
            const Name: string;
            const PaymentType: string;
            const IbanBeneficient: string;
            const TenantId: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDateField: string;
            const TenantName: string;
            const InsertUserName: string;
            const UpdateUserName: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    namespace PaymentsDetailsService {
        const baseUrl = "Administration/PaymentsDetails";
        function Create(request: Serenity.SaveRequest<PaymentsDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PaymentsDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PaymentsDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PaymentsDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    class PaymentsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PaymentsForm {
        PaymentDetailsId: Serenity.LookupEditor;
        CustomerName: Serenity.StringEditor;
        CustomerIban: Serenity.StringEditor;
        SubscriptionId: Serenity.LookupEditor;
        ReasonForPayment: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Receiver: Serenity.StringEditor;
        IBANReceiver: Serenity.StringEditor;
        BICReceiver: Serenity.StringEditor;
        BankNameReceiver: Serenity.StringEditor;
        CouponId: Serenity.LookupEditor;
        PaymentOptionId: Serenity.LookupEditor;
        CouponKey: Serenity.StringEditor;
        CurrencyId: Serenity.LookupEditor;
        Value: Serenity.StringEditor;
        PaymentStatus: Serenity.EnumEditor;
    }
}
declare namespace PatientManagement.Administration {
    interface PaymentsRow {
        PaymentId?: number;
        SubscriptionId?: number;
        TenantId?: number;
        PaymentDetailsId?: number;
        PaymentOptionId?: number;
        CurrencyId?: number;
        Value?: number;
        SubTotal?: number;
        CustomerName?: string;
        CustomerBankName?: string;
        CustomerIban?: string;
        ReasonForPayment?: string;
        Description?: string;
        Receiver?: string;
        IBANReceiver?: string;
        BICReceiver?: string;
        BankNameReceiver?: string;
        PaymentStatus?: PatientManagement.PaymentStatus;
        MonthsPayed?: number;
        PaymentCurrency?: string;
        PaymentType?: string;
        SubscriptionOfferId?: number;
        SubscriptionSubscriptionEndDate?: string;
        SubscriptionName?: string;
        PaymentDetailName?: string;
        PaymentDetailsBankName?: string;
        PaymentDetailsIbanBeneficient?: string;
        PaymentOptionMonths?: number;
        PaymentOptionName?: string;
        CouponId?: number[];
        CouponKey?: string;
        CouponDiscount?: number;
        CurrencyCurrencyId?: string;
        CurrencyName?: string;
        CurrencyRate?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace PaymentsRow {
        const idProperty = "PaymentId";
        const nameProperty = "SubscriptionName";
        const localTextPrefix = "Administration.Payments";
        const lookupKey = "AdministrationTenants.Payment";
        function getLookup(): Q.Lookup<PaymentsRow>;
        namespace Fields {
            const PaymentId: string;
            const SubscriptionId: string;
            const TenantId: string;
            const PaymentDetailsId: string;
            const PaymentOptionId: string;
            const CurrencyId: string;
            const Value: string;
            const SubTotal: string;
            const CustomerName: string;
            const CustomerBankName: string;
            const CustomerIban: string;
            const ReasonForPayment: string;
            const Description: string;
            const Receiver: string;
            const IBANReceiver: string;
            const BICReceiver: string;
            const BankNameReceiver: string;
            const PaymentStatus: string;
            const MonthsPayed: string;
            const PaymentCurrency: string;
            const PaymentType: string;
            const SubscriptionOfferId: string;
            const SubscriptionSubscriptionEndDate: string;
            const SubscriptionName: string;
            const PaymentDetailName: string;
            const PaymentDetailsBankName: string;
            const PaymentDetailsIbanBeneficient: string;
            const PaymentOptionMonths: string;
            const PaymentOptionName: string;
            const CouponId: string;
            const CouponKey: string;
            const CouponDiscount: string;
            const CurrencyCurrencyId: string;
            const CurrencyName: string;
            const CurrencyRate: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDateField: string;
            const TenantName: string;
            const InsertUserName: string;
            const UpdateUserName: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    namespace PaymentsService {
        const baseUrl = "Administration/Payments";
        function Create(request: Serenity.SaveRequest<PaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.Administration {
}
declare namespace PatientManagement.Administration {
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RoleForm {
        RoleName: Serenity.StringEditor;
        UsersInRole: Serenity.LookupEditor;
        TenantId: Serenity.LookupEditor;
    }
}
declare namespace PatientManagement.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace PatientManagement.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace PatientManagement.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        namespace Fields {
            const RolePermissionId: string;
            const RoleId: string;
            const PermissionKey: string;
            const RoleRoleName: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace PatientManagement.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        IsActive?: number;
        UsersInRole?: number[];
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const isActiveProperty = "IsActive";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        namespace Fields {
            const RoleId: string;
            const RoleName: string;
            const TenantId: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDateField: string;
            const IsActive: string;
            const UsersInRole: string;
            const TenantName: string;
            const InsertUserName: string;
            const UpdateUserName: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.Administration {
}
declare namespace PatientManagement.Administration {
    class SentEmailsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SentEmailsForm {
        ToEmail: LKCodeDescr;
        Subject: Serenity.StringEditor;
        Body: Serenity.HtmlContentEditor;
        EmailSignature: Serenity.HtmlContentEditor;
    }
}
declare namespace PatientManagement.Administration {
    interface SentEmailsRow {
        SentEmailId?: number;
        FromEmail?: string;
        FromName?: string;
        Subject?: string;
        Body?: string;
        ToEmail?: string;
        ToName?: string;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        IsActive?: number;
        EmailSignature?: string;
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace SentEmailsRow {
        const idProperty = "SentEmailId";
        const isActiveProperty = "IsActive";
        const nameProperty = "FromEmail";
        const localTextPrefix = "Administration.SentEmails";
        const lookupKey = "AdministrationTenants.SentEmails";
        function getLookup(): Q.Lookup<SentEmailsRow>;
        namespace Fields {
            const SentEmailId: string;
            const FromEmail: string;
            const FromName: string;
            const Subject: string;
            const Body: string;
            const ToEmail: string;
            const ToName: string;
            const TenantId: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDateField: string;
            const IsActive: string;
            const EmailSignature: string;
            const TenantName: string;
            const InsertUserName: string;
            const UpdateUserName: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    namespace SentEmailsService {
        const baseUrl = "Administration/SentEmails";
        function Create(request: Serenity.SaveRequest<SentEmailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SentEmailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SentEmailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function RetrieveEmailSignature(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SentEmailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const RetrieveEmailSignature: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    interface SergenConnection {
        Key?: string;
    }
}
declare namespace PatientManagement.Administration {
    interface SergenGenerateOptions {
        Row?: boolean;
        Service?: boolean;
        UI?: boolean;
    }
}
declare namespace PatientManagement.Administration {
    interface SergenGenerateRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
        Table?: SergenTable;
        GenerateOptions?: SergenGenerateOptions;
    }
}
declare namespace PatientManagement.Administration {
    interface SergenListTablesRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
    }
}
declare namespace PatientManagement.Administration {
    namespace SergenService {
        const baseUrl = "Administration/Sergen";
        function ListConnections(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<SergenConnection>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListTables(request: SergenListTablesRequest, onSuccess?: (response: Serenity.ListResponse<SergenTable>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Generate(request: SergenGenerateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const ListConnections: string;
            const ListTables: string;
            const Generate: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    interface SergenTable {
        Tablename?: string;
        Identifier?: string;
        Module?: string;
        PermissionKey?: string;
    }
}
declare namespace PatientManagement.Administration {
}
declare namespace PatientManagement.Administration {
    class SubscriptionsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SubscriptionsForm {
        Name: Serenity.StringEditor;
        OfferId: Serenity.LookupEditor;
        SubscriptionEndDate: Serenity.DateEditor;
        Enabled: BsSwitchEditor;
        FreeDaysFromOffer: Serenity.IntegerEditor;
        TenantId: Serenity.LookupEditor;
    }
}
declare namespace PatientManagement.Administration {
    interface SubscriptionsRow {
        SubscriptionId?: number;
        Name?: string;
        OfferId?: number;
        TenantId?: number;
        SubscriptionEndDate?: string;
        Enabled?: number;
        FreeDaysFromOffer?: number;
        IsActive?: number;
        DeactivatedOn?: string;
        ActivatedOn?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        OfferName?: string;
        OfferDescription?: string;
        OfferPrice?: number;
        OfferRoleId?: number;
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace SubscriptionsRow {
        const idProperty = "SubscriptionId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Administration.Subscriptions";
        const lookupKey = "Administration.Subscriptions";
        function getLookup(): Q.Lookup<SubscriptionsRow>;
        namespace Fields {
            const SubscriptionId: string;
            const Name: string;
            const OfferId: string;
            const TenantId: string;
            const SubscriptionEndDate: string;
            const Enabled: string;
            const FreeDaysFromOffer: string;
            const IsActive: string;
            const DeactivatedOn: string;
            const ActivatedOn: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDateField: string;
            const OfferName: string;
            const OfferDescription: string;
            const OfferPrice: string;
            const OfferRoleId: string;
            const TenantName: string;
            const InsertUserName: string;
            const UpdateUserName: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    namespace SubscriptionsService {
        const baseUrl = "Administration/Subscriptions";
        function Create(request: Serenity.SaveRequest<SubscriptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SubscriptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SubscriptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SubscriptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.Administration {
}
declare namespace PatientManagement.Administration {
    class TenantForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TenantForm {
        TenantName: Serenity.StringEditor;
        TenantImage: Serenity.ImageUploadEditor;
        TenantWebSite: Serenity.StringEditor;
        OverrideUsersEmailSignature: BsSwitchEditor;
        TenantEmailSignature: Serenity.HtmlContentEditor;
        CurrencyId: Serenity.LookupEditor;
        SubscriptionId: Serenity.LookupEditor;
        SubscriptionRequired: BsSwitchEditor;
    }
}
declare namespace PatientManagement.Administration {
    interface TenantRow {
        TenantId?: number;
        TenantName?: string;
        CurrencyId?: number;
        CurrencyName?: string;
        SubscriptionRequired?: boolean;
        SubscriptionId?: number;
        TenantWebSite?: string;
        TenantImage?: string;
        OverrideUsersEmailSignature?: boolean;
        TenantEmailSignature?: string;
        SubscriptionOfferId?: number;
        SubscriptionTenantId?: number;
        SubscriptionSubscriptionEndDate?: string;
        SubscriptionInsertUserId?: number;
        SubscriptionInsertDate?: string;
        SubscriptionUpdateUserId?: number;
        SubscriptionUpdateDateField?: string;
        SubscriptionName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
        IsActive?: number;
    }
    namespace TenantRow {
        const idProperty = "TenantId";
        const isActiveProperty = "IsActive";
        const nameProperty = "TenantName";
        const localTextPrefix = "Administration.Tenant";
        const lookupKey = "Administration.Tenant";
        function getLookup(): Q.Lookup<TenantRow>;
        namespace Fields {
            const TenantId: string;
            const TenantName: string;
            const CurrencyId: string;
            const CurrencyName: string;
            const SubscriptionRequired: string;
            const SubscriptionId: string;
            const TenantWebSite: string;
            const TenantImage: string;
            const OverrideUsersEmailSignature: string;
            const TenantEmailSignature: string;
            const SubscriptionOfferId: string;
            const SubscriptionTenantId: string;
            const SubscriptionSubscriptionEndDate: string;
            const SubscriptionInsertUserId: string;
            const SubscriptionInsertDate: string;
            const SubscriptionUpdateUserId: string;
            const SubscriptionUpdateDateField: string;
            const SubscriptionName: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDateField: string;
            const InsertUserName: string;
            const UpdateUserName: string;
            const IsActive: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    namespace TenantService {
        const baseUrl = "Administration/Tenant";
        function Create(request: Serenity.SaveRequest<TenantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TenantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TenantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TenantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace PatientManagement.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace PatientManagement.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const List: string;
            const Update: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace PatientManagement.Administration {
}
declare namespace PatientManagement.Administration {
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        Specialties: Serenity.LookupEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Cabinets: Serenity.LookupEditor;
        RestrictedToCabinets: BsSwitchEditor;
        PhoneNumber: Serenity.StringEditor;
        WebSite: Serenity.StringEditor;
        UserImage: Serenity.ImageUploadEditor;
        Info: Serenity.TextAreaEditor;
        EmailSignature: Serenity.HtmlContentEditor;
        Source: Serenity.StringEditor;
        IsActive: BsSwitchEditor;
        TenantId: Serenity.LookupEditor;
    }
}
declare namespace PatientManagement.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace PatientManagement.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        namespace Fields {
            const UserPermissionId: string;
            const UserId: string;
            const PermissionKey: string;
            const Granted: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
            const ListRolePermissions: string;
            const ListPermissionKeys: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace PatientManagement.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace PatientManagement.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace PatientManagement.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        namespace Fields {
            const UserRoleId: string;
            const UserId: string;
            const RoleId: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace PatientManagement.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        RestrictedToCabinets?: number;
        Info?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        WebSite?: string;
        PhoneNumber?: string;
        EmailSignature?: string;
        UsersInRole?: number[];
        Cabinets?: number[];
        Specialties?: number[];
        Password?: string;
        PasswordConfirm?: string;
        TenantId?: number;
        TenantName?: string;
        TenantCurrencyId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        namespace Fields {
            const UserId: string;
            const Username: string;
            const Source: string;
            const PasswordHash: string;
            const PasswordSalt: string;
            const DisplayName: string;
            const Email: string;
            const RestrictedToCabinets: string;
            const Info: string;
            const UserImage: string;
            const LastDirectoryUpdate: string;
            const IsActive: string;
            const WebSite: string;
            const PhoneNumber: string;
            const EmailSignature: string;
            const UsersInRole: string;
            const Cabinets: string;
            const Specialties: string;
            const Password: string;
            const PasswordConfirm: string;
            const TenantId: string;
            const TenantName: string;
            const TenantCurrencyId: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDate: string;
        }
    }
}
declare namespace PatientManagement.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.Common {
    class HelloModalAddCabinetForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface HelloModalAddCabinetForm {
        Name: Serenity.StringEditor;
        WorkHoursStart: Serenity.TimeEditor;
        WorkHoursEnd: Serenity.TimeEditor;
    }
}
declare namespace PatientManagement.Common {
    interface HelloModalAddCabinetRequest extends Serenity.ServiceRequest {
        Name?: string;
        WorkHoursStart?: number;
        WorkHoursEnd?: number;
    }
}
declare namespace PatientManagement.Common {
    class HelloModalAddPatientForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface HelloModalAddPatientForm {
        Name: Serenity.StringEditor;
        Gender: Serenity.EnumEditor;
        PhoneNumber: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        NotifyOnChange: BsSwitchEditor;
    }
}
declare namespace PatientManagement.Common {
    interface HelloModalAddPatientRequest extends Serenity.ServiceRequest {
        Name?: string;
        Gender?: number;
        PhoneNumber?: string;
        Email?: string;
        NotifyOnChange?: boolean;
    }
}
declare namespace PatientManagement.Common {
    class HelloModalAddVisitForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface HelloModalAddVisitForm {
        PatientId: Serenity.LookupEditor;
        VisitTypeId: Serenity.LookupEditor;
        CabinetId: Serenity.LookupEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        Description: Serenity.TextAreaEditor;
    }
}
declare namespace PatientManagement.Common {
    interface HelloModalAddVisitRequest extends Serenity.ServiceRequest {
        PatientId?: number;
        VisitTypeId?: number;
        CabinetId?: number;
        StartDate?: string;
        EndDate?: string;
        Description?: string;
    }
}
declare namespace PatientManagement.Common {
    class HelloModalAddVisitTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface HelloModalAddVisitTypeForm {
        Name: Serenity.StringEditor;
        BorderColor: Serenity.StringEditor;
        BackgroundColor: Serenity.StringEditor;
    }
}
declare namespace PatientManagement.Common {
    interface HelloModalAddVisitTypeRequest extends Serenity.ServiceRequest {
        Name?: string;
        BorderColor?: string;
        BackgroundColor?: string;
    }
}
declare namespace PatientManagement.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace PatientManagement.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace PatientManagement.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace PatientManagement.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        namespace Fields {
            const UserPreferenceId: string;
            const UserId: string;
            const PreferenceType: string;
            const Name: string;
            const Value: string;
        }
    }
}
declare namespace PatientManagement.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const Retrieve: string;
        }
    }
}
declare namespace PatientManagement.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace PatientManagement {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace PatientManagement {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace PatientManagement {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace PatientManagement {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace PatientManagement.Membership {
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace PatientManagement.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace PatientManagement.Membership {
    class EditTenantForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EditTenantForm {
        TenantName: Serenity.StringEditor;
        TenantWebSite: Serenity.StringEditor;
        TenantImage: Serenity.ImageUploadEditor;
        OverrideUsersEmailSignature: BsSwitchEditor;
        TenantEmailSignature: Serenity.HtmlContentEditor;
    }
}
declare namespace PatientManagement.Membership {
    interface EditTenantRequest extends Serenity.ServiceRequest {
        TenantName?: string;
        TenantWebSite?: string;
        TenantImage?: string;
        OverrideUsersEmailSignature?: boolean;
        TenantEmailSignature?: string;
    }
}
declare namespace PatientManagement.Membership {
    class EditUserProfileForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EditUserProfileForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        PhoneNumber: Serenity.StringEditor;
        WebSite: Serenity.StringEditor;
        UserImage: Serenity.ImageUploadEditor;
        Info: Serenity.TextAreaEditor;
        EmailSignature: Serenity.HtmlContentEditor;
    }
}
declare namespace PatientManagement.Membership {
    interface EditUserProfileRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        PhoneNumber?: string;
        WebSite?: string;
        UserImage?: string;
        Info?: string;
        EmailSignature?: string;
    }
}
declare namespace PatientManagement.Membership {
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
}
declare namespace PatientManagement.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace PatientManagement.Membership {
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
}
declare namespace PatientManagement.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace PatientManagement.Membership {
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace PatientManagement.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace PatientManagement.Membership {
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        TenantName: Serenity.StringEditor;
        OfferId: PatientManagement.OfferDropDownEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace PatientManagement.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
        TenantName?: string;
        OfferId?: number;
    }
}
declare namespace PatientManagement.PatientManagement {
    enum AccessType {
        Public = 0,
        Private = 1,
    }
}
declare namespace PatientManagement.PatientManagement {
}
declare namespace PatientManagement.PatientManagement {
    class ActivityForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ActivityForm {
        PatientId: Serenity.LookupEditor;
        MovementAndTraining: Serenity.TextAreaEditor;
        Profession: Serenity.TextAreaEditor;
    }
}
declare namespace PatientManagement.PatientManagement {
    interface ActivityRow {
        ActivityId?: number;
        PatientId?: number;
        MovementAndTraining?: string;
        Profession?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        IsActive?: number;
        TenantId?: number;
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace ActivityRow {
        const idProperty = "ActivityId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Profession";
        const localTextPrefix = "PatientManagement.Activity";
        const lookupKey = "PatientManagement.LifeStyles";
        function getLookup(): Q.Lookup<ActivityRow>;
        namespace Fields {
            const ActivityId: string;
            const PatientId: string;
            const MovementAndTraining: string;
            const Profession: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDateField: string;
            const IsActive: string;
            const TenantId: string;
            const TenantName: string;
            const InsertUserName: string;
            const UpdateUserName: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    namespace ActivityService {
        const baseUrl = "PatientManagement/Activity";
        function Create(request: Serenity.SaveRequest<ActivityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ActivityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ActivityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ActivityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    interface CabinetRepresentativesRow {
        RepresentativeId?: number;
        UserId?: number;
        CabinetId?: number;
    }
    namespace CabinetRepresentativesRow {
        const idProperty = "RepresentativeId";
        const localTextPrefix = "CabinetRepresentatives";
        namespace Fields {
            const RepresentativeId: string;
            const UserId: string;
            const CabinetId: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
}
declare namespace PatientManagement.PatientManagement {
    class CabinetsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CabinetsForm {
        Name: Serenity.StringEditor;
        WorkHoursStart: Serenity.TimeEditor;
        WorkHoursEnd: Serenity.TimeEditor;
        WorkDays: Serenity.LookupEditor;
        Representatives: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
        City: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        PhoneNumber: Serenity.IntegerEditor;
        TenantId: Serenity.LookupEditor;
    }
}
declare namespace PatientManagement.PatientManagement {
    interface CabinetsRow {
        CabinetId?: number;
        WorkDays?: number[];
        Name?: string;
        Description?: string;
        City?: string;
        Country?: string;
        Representatives?: number[];
        UserSpecialties?: string[];
        WorkHoursStart?: number;
        WorkHoursEnd?: number;
        PhoneNumber?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        IsActive?: number;
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace CabinetsRow {
        const idProperty = "CabinetId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "PatientManagement.Cabinets";
        const lookupKey = "PatientManagement.Cabinets";
        function getLookup(): Q.Lookup<CabinetsRow>;
        namespace Fields {
            const CabinetId: string;
            const WorkDays: string;
            const Name: string;
            const Description: string;
            const City: string;
            const Country: string;
            const Representatives: string;
            const UserSpecialties: string;
            const WorkHoursStart: string;
            const WorkHoursEnd: string;
            const PhoneNumber: string;
            const TenantId: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDateField: string;
            const IsActive: string;
            const TenantName: string;
            const InsertUserName: string;
            const UpdateUserName: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    namespace CabinetsService {
        const baseUrl = "PatientManagement/Cabinets";
        function Create(request: Serenity.SaveRequest<CabinetsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CabinetsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function RetrieveWorkHours(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkHours>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CabinetsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CabinetsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const RetrieveWorkHours: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    interface CabinetWorkDaysRow {
        WorkDayId?: number;
        WeekDayId?: WeekDays;
        CabinetId?: number;
    }
    namespace CabinetWorkDaysRow {
        const idProperty = "WorkDayId";
        const localTextPrefix = "CabinetWorkDays";
        const lookupKey = "PatientManagement.CabinetWorkDays";
        function getLookup(): Q.Lookup<CabinetWorkDaysRow>;
        namespace Fields {
            const WorkDayId: string;
            const WeekDayId: string;
            const CabinetId: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    interface CountNotificationsRequest extends Serenity.ServiceRequest {
        Count?: number;
    }
}
declare namespace PatientManagement.PatientManagement {
    interface CountNotificationsResponse extends Serenity.ServiceResponse {
        Count?: number;
    }
}
declare namespace PatientManagement.PatientManagement {
    interface ExternalAccessCabinetsRow {
        ExternalAccessCabinetId?: number;
        ExternalAccessId?: number;
        CabinetId?: number;
    }
    namespace ExternalAccessCabinetsRow {
        const idProperty = "ExternalAccessCabinetId";
        const localTextPrefix = "ExternalAccessCabinets";
        const lookupKey = "PatientManagement.ExternalAccessCabinets";
        function getLookup(): Q.Lookup<ExternalAccessCabinetsRow>;
        namespace Fields {
            const ExternalAccessCabinetId: string;
            const ExternalAccessId: string;
            const CabinetId: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    enum Gender {
        Male = 1,
        Female = 2,
    }
}
declare namespace PatientManagement.PatientManagement {
}
declare namespace PatientManagement.PatientManagement {
    class LifeStylesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LifeStylesForm {
        PatientId: Serenity.LookupEditor;
        Regime: Serenity.TextAreaEditor;
        DailyMeals: Serenity.TextAreaEditor;
    }
}
declare namespace PatientManagement.PatientManagement {
    interface LifeStylesRow {
        LifeStyleId?: number;
        PatientId?: number;
        Regime?: string;
        DailyMeals?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        IsActive?: number;
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
        PatientName?: string;
        TenantId?: number;
    }
    namespace LifeStylesRow {
        const idProperty = "LifeStyleId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Regime";
        const localTextPrefix = "PatientManagement.LifeStyles";
        const lookupKey = "PatientManagement.LifeStyles";
        function getLookup(): Q.Lookup<LifeStylesRow>;
        namespace Fields {
            const LifeStyleId: string;
            const PatientId: string;
            const Regime: string;
            const DailyMeals: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDateField: string;
            const IsActive: string;
            const TenantName: string;
            const InsertUserName: string;
            const UpdateUserName: string;
            const PatientName: string;
            const TenantId: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    namespace LifeStylesService {
        const baseUrl = "PatientManagement/LifeStyles";
        function Create(request: Serenity.SaveRequest<LifeStylesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LifeStylesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LifeStylesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LifeStylesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
}
declare namespace PatientManagement.PatientManagement {
    class MedicalSpecialtyExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MedicalSpecialtyExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
}
declare namespace PatientManagement.PatientManagement {
    class MedicalSpecialtyForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MedicalSpecialtyForm {
        Name: Serenity.StringEditor;
    }
}
declare namespace PatientManagement.PatientManagement {
    interface MedicalSpecialtyRow {
        SpecialtyId?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace MedicalSpecialtyRow {
        const idProperty = "SpecialtyId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "PatientManagement.MedicalSpecialty";
        const lookupKey = "PatientManagement.MedicalSpecialties";
        function getLookup(): Q.Lookup<MedicalSpecialtyRow>;
        namespace Fields {
            const SpecialtyId: string;
            const Name: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDateField: string;
            const IsActive: string;
            const InsertUserName: string;
            const UpdateUserName: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    namespace MedicalSpecialtyService {
        const baseUrl = "PatientManagement/MedicalSpecialty";
        function Create(request: Serenity.SaveRequest<MedicalSpecialtyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MedicalSpecialtyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MedicalSpecialtyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MedicalSpecialtyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const Undelete: string;
            const ExcelImport: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    interface NotesRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }
    namespace NotesRow {
        const idProperty = "NoteId";
        const nameProperty = "EntityType";
        const localTextPrefix = "PatientManagement.Notes";
        namespace Fields {
            const NoteId: string;
            const EntityType: string;
            const EntityId: string;
            const Text: string;
            const InsertUserId: string;
            const InsertDate: string;
            const InsertUserDisplayName: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
}
declare namespace PatientManagement.PatientManagement {
    class NotificationsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface NotificationsForm {
        EntityType: Serenity.StringEditor;
        EntityId: Serenity.StringEditor;
        Text: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
    }
}
declare namespace PatientManagement.PatientManagement {
    interface NotificationsRow {
        NotificationId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
        InsertUserPicture?: string;
        TenantId?: number;
        TenantName?: string;
    }
    namespace NotificationsRow {
        const idProperty = "NotificationId";
        const nameProperty = "EntityType";
        const localTextPrefix = "PatientManagement.Notifications";
        const lookupKey = "PatientManagement.Notifications";
        function getLookup(): Q.Lookup<NotificationsRow>;
        namespace Fields {
            const NotificationId: string;
            const EntityType: string;
            const EntityId: string;
            const Text: string;
            const InsertUserId: string;
            const InsertDate: string;
            const InsertUserDisplayName: string;
            const InsertUserPicture: string;
            const TenantId: string;
            const TenantName: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    namespace NotificationsService {
        const baseUrl = "PatientManagement/Notifications";
        function Create(request: Serenity.SaveRequest<NotificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NotificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NotificationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NotificationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListForDropdown(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NotificationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function CountNotifications(request: Serenity.ListRequest, onSuccess?: (response: CountNotificationsResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
            const ListForDropdown: string;
            const CountNotifications: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    enum OutputFormat {
        Ics = 0,
        Json = 1,
    }
}
declare namespace PatientManagement.PatientManagement {
}
declare namespace PatientManagement.PatientManagement {
    class PatientHealthForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PatientHealthForm {
        PatientId: Serenity.LookupEditor;
        Diseases: Serenity.TextAreaEditor;
        MedicinesIntake: Serenity.TextAreaEditor;
    }
}
declare namespace PatientManagement.PatientManagement {
    interface PatientHealthRow {
        PatientHealthId?: number;
        PatientId?: number;
        Diseases?: string;
        MedicinesIntake?: string;
        InsertUserId?: number;
        InsertDate?: string;
        PatientName?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        TenantId?: number;
        IsActive?: number;
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace PatientHealthRow {
        const idProperty = "PatientHealthId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Diseases";
        const localTextPrefix = "PatientManagement.PatientHealth";
        const lookupKey = "PatientManagement.PatientHealth";
        function getLookup(): Q.Lookup<PatientHealthRow>;
        namespace Fields {
            const PatientHealthId: string;
            const PatientId: string;
            const Diseases: string;
            const MedicinesIntake: string;
            const InsertUserId: string;
            const InsertDate: string;
            const PatientName: string;
            const UpdateUserId: string;
            const UpdateDateField: string;
            const TenantId: string;
            const IsActive: string;
            const TenantName: string;
            const InsertUserName: string;
            const UpdateUserName: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    namespace PatientHealthService {
        const baseUrl = "PatientManagement/PatientHealth";
        function Create(request: Serenity.SaveRequest<PatientHealthRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PatientHealthRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PatientHealthRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PatientHealthRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
}
declare namespace PatientManagement.PatientManagement {
}
declare namespace PatientManagement.PatientManagement {
    class PatientsFileUploadsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PatientsFileUploadsForm {
        PatientId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
        FilePath: Serenity.MultipleImageUploadEditor;
    }
}
declare namespace PatientManagement.PatientManagement {
    interface PatientsFileUploadsRow {
        PatientFileUploadId?: number;
        PatientId?: number;
        FilePath?: string;
        Description?: string;
        InsertUserId?: number;
        InsertDate?: string;
        PatientName?: string;
        TenantId?: number;
    }
    namespace PatientsFileUploadsRow {
        const idProperty = "PatientFileUploadId";
        const nameProperty = "PatientName";
        const localTextPrefix = "PatientManagement.PatientsFileUploads";
        const lookupKey = "PatientManagement.PatientsFileUploads";
        function getLookup(): Q.Lookup<PatientsFileUploadsRow>;
        namespace Fields {
            const PatientFileUploadId: string;
            const PatientId: string;
            const FilePath: string;
            const Description: string;
            const InsertUserId: string;
            const InsertDate: string;
            const PatientName: string;
            const TenantId: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    namespace PatientsFileUploadsService {
        const baseUrl = "PatientManagement/PatientsFileUploads";
        function Create(request: Serenity.SaveRequest<PatientsFileUploadsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PatientsFileUploadsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PatientsFileUploadsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PatientsFileUploadsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    class PatientsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PatientsForm {
        PatientId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Gender: Serenity.EnumEditor;
        PersonalNumber: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        FirstRegistrationDate: Serenity.DateTimeEditor;
        Address: Serenity.StringEditor;
        Height: Serenity.IntegerEditor;
        Weight: Serenity.IntegerEditor;
        NotifyOnChange: BsSwitchEditor;
        NoteList: NotesEditor;
        TenantId: Serenity.LookupEditor;
    }
}
declare namespace PatientManagement.PatientManagement {
    interface PatientsRow {
        PatientId?: number;
        Name?: string;
        PersonalNumber?: number;
        PhoneNumber?: string;
        Gender?: Gender;
        FirstRegistrationDate?: string;
        Address?: string;
        Height?: number;
        Weight?: number;
        Email?: string;
        NotifyOnChange?: boolean;
        WantedWeight?: string;
        InsertUserId?: number;
        InsertDate?: string;
        IsActive?: number;
        TenantName?: string;
        InsertUserName?: string;
        NoteList?: NotesRow[];
        TenantId?: number;
    }
    namespace PatientsRow {
        const idProperty = "PatientId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "PatientManagement.Patients";
        const lookupKey = "PatientManagement.Patients";
        function getLookup(): Q.Lookup<PatientsRow>;
        namespace Fields {
            const PatientId: string;
            const Name: string;
            const PersonalNumber: string;
            const PhoneNumber: string;
            const Gender: string;
            const FirstRegistrationDate: string;
            const Address: string;
            const Height: string;
            const Weight: string;
            const Email: string;
            const NotifyOnChange: string;
            const WantedWeight: string;
            const InsertUserId: string;
            const InsertDate: string;
            const IsActive: string;
            const TenantName: string;
            const InsertUserName: string;
            const NoteList: string;
            const TenantId: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    namespace PatientsService {
        const baseUrl = "PatientManagement/Patients";
        function Create(request: Serenity.SaveRequest<PatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    enum PaymentStatus {
        Success = 0,
        Denied = 1,
        Pending = 2,
        Processing = 3,
        Failed = 4,
        Unclaimed = 5,
        Returned = 6,
        Onhold = 7,
        Blocked = 8,
        Cancelled = 9,
    }
}
declare namespace PatientManagement.PatientManagement {
    enum PaymentTypes {
        BankTransfer = 0,
    }
}
declare namespace PatientManagement.PatientManagement {
    enum SubscriptionState {
        NotActive = 0,
        Active = 1,
    }
}
declare namespace PatientManagement.PatientManagement {
}
declare namespace PatientManagement.PatientManagement {
    class UserNotificationsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UserNotificationsForm {
        NotificationId: Serenity.IntegerEditor;
        SeenAt: Serenity.DateEditor;
        UserId: Serenity.IntegerEditor;
    }
}
declare namespace PatientManagement.PatientManagement {
    interface UserNotificationsRow {
        UserNotificationId?: number;
        NotificationId?: number;
        SeenAt?: string;
        UserId?: number;
        NotificationEntityType?: string;
        NotificationEntityId?: number;
        NotificationText?: string;
        NotificationInsertUserId?: number;
        NotificationInsertDate?: string;
        NotificationTenantId?: number;
    }
    namespace UserNotificationsRow {
        const idProperty = "UserNotificationId";
        const localTextPrefix = "PatientManagement.UserNotifications";
        namespace Fields {
            const UserNotificationId: string;
            const NotificationId: string;
            const SeenAt: string;
            const UserId: string;
            const NotificationEntityType: string;
            const NotificationEntityId: string;
            const NotificationText: string;
            const NotificationInsertUserId: string;
            const NotificationInsertDate: string;
            const NotificationTenantId: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    namespace UserNotificationsService {
        const baseUrl = "PatientManagement/UserNotifications";
        function Create(request: Serenity.SaveRequest<UserNotificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function CreateList(request: Serenity.SaveRequest<UserNotificationsRow[]>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserNotificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserNotificationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserNotificationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const CreateList: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    interface UserSpecialtiesRow {
        UserSpecialtyId?: number;
        UserId?: number;
        SpecialtyId?: number;
    }
    namespace UserSpecialtiesRow {
        const idProperty = "UserSpecialtyId";
        const localTextPrefix = "UserSpecialties";
        namespace Fields {
            const UserSpecialtyId: string;
            const UserId: string;
            const SpecialtyId: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
}
declare namespace PatientManagement.PatientManagement {
    class VisitsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface VisitsForm {
        PatientId: Serenity.LookupEditor;
        VisitTypeId: Serenity.LookupEditor;
        CabinetId: Serenity.LookupEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        Description: Serenity.TextAreaEditor;
        TenantId: Serenity.LookupEditor;
    }
}
declare namespace PatientManagement.PatientManagement {
    interface VisitsRow {
        VisitId?: number;
        PatientId?: number;
        VisitTypeId?: number;
        CabinetId?: number;
        CabinetName?: string;
        CabinetIsActive?: number;
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
        TenantId?: number;
    }
    namespace VisitsRow {
        const idProperty = "VisitId";
        const localTextPrefix = "PatientManagement.Visits";
        const lookupKey = "PatientManagement.Visits";
        function getLookup(): Q.Lookup<VisitsRow>;
        namespace Fields {
            const VisitId: string;
            const PatientId: string;
            const VisitTypeId: string;
            const CabinetId: string;
            const CabinetName: string;
            const CabinetIsActive: string;
            const Description: string;
            const StartDate: string;
            const EndDate: string;
            const InsertUserId: string;
            const InsertDate: string;
            const TenantName: string;
            const InsertUserName: string;
            const PatientGender: string;
            const PatientEmail: string;
            const PatientNotifyOnChange: string;
            const PhoneNumber: string;
            const PatientName: string;
            const VisitTypeName: string;
            const VisitTypeBackgroundColor: string;
            const VisitTypeBorderColor: string;
            const TenantId: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    namespace VisitsService {
        const baseUrl = "PatientManagement/Visits";
        function Create(request: Serenity.SaveRequest<VisitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VisitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VisitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VisitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
}
declare namespace PatientManagement.PatientManagement {
    class VisitTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface VisitTypesForm {
        Name: Serenity.StringEditor;
        BorderColor: Serenity.StringEditor;
        BackgroundColor: Serenity.StringEditor;
        TenantId: Serenity.LookupEditor;
    }
}
declare namespace PatientManagement.PatientManagement {
    interface VisitTypesRow {
        VisitTypeId?: number;
        Name?: string;
        BorderColor?: string;
        BackgroundColor?: string;
        InsertUserId?: number;
        InsertDate?: string;
        IsActive?: number;
        TenantName?: string;
        InsertUserName?: string;
        TenantId?: number;
    }
    namespace VisitTypesRow {
        const idProperty = "VisitTypeId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "PatientManagement.VisitTypes";
        const lookupKey = "PatientManagement.VisitTypes";
        function getLookup(): Q.Lookup<VisitTypesRow>;
        namespace Fields {
            const VisitTypeId: string;
            const Name: string;
            const BorderColor: string;
            const BackgroundColor: string;
            const InsertUserId: string;
            const InsertDate: string;
            const IsActive: string;
            const TenantName: string;
            const InsertUserName: string;
            const TenantId: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    namespace VisitTypesService {
        const baseUrl = "PatientManagement/VisitTypes";
        function Create(request: Serenity.SaveRequest<VisitTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VisitTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VisitTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VisitTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace PatientManagement.PatientManagement {
    enum WeekDays {
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6,
        Sunday = 7,
    }
}
declare namespace PatientManagement.PatientManagement {
    interface WorkHours {
        workDays?: string;
        start?: string;
        end?: string;
    }
}
declare namespace PatientManagement {
    interface ScriptUserDefinition {
        UserId?: number;
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        RestrictedToCabinets?: number;
        Permissions?: {
            [key: string]: boolean;
        };
        TenantId?: number;
        RolesList?: string[];
        PaidPeriod?: string;
    }
}
