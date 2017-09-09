/// <reference path="../../../PatientManagement/Visits/VisitsGrid.ts" />
namespace PatientManagement.Membership {
    import VisitsGrid = PatientManagement.VisitsGrid;

    @Serenity.Decorators.registerClass()
    export class AddedVisitsFromUserPanel extends VisitsGrid {
        private visitsGrid: VisitsGrid;

        constructor(container: JQuery, userId: number) {
            super(container);

            this.insertUserId = userId;

        }


        protected getColumns(): Slick.Column[] {
            return super.getColumns();
        }
        

        protected getInitialTitle() {
            return null;
        }


        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.insertUserId;
        }

        private _insertUserId: number;
        get insertUserId() {
            return this._insertUserId;
        }

        set insertUserId(value: number) {
            if (this._insertUserId !== value) {
                this._insertUserId = value;
                this.setEquality('InsertUserId', value);
                this.refresh();
            }
        }
    }
}