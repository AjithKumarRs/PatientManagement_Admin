namespace PatientManagement.PatientManagement {
    @Serenity.Decorators.registerEditor()
    export class LKCodeDescr extends Serenity.LookupEditorBase<LKCodeDescOptions, any> {

        constructor(container: JQuery, opt?: LKCodeDescOptions) {
            super(container, opt);

            container.data("codeName", opt.codeFieldName);
            container.data("descrName", opt.descrFieldName);
        }
        public getSelect2Options() {
            var selec2Options = super.getSelect2Options();

            selec2Options.formatResult = this.myFormatResult;
            selec2Options.formatSelection = this.myFormatSelection;

            return selec2Options;
        }
        protected myFormatSelection(item: Serenity.Select2Item): string {
            var code = item.source[this.element.data("codeName")];
            var descr = item.source[this.element.data("descrName")];

            var title = "Code: " + code;
            title += " - " + descr;

            return "<div title='" + title + "'><b>" + code + "</b>&nbsp;-&nbsp;" + descr + "</div>";
        }

        protected myFormatResult(item: Serenity.Select2Item) {
            var code = item.source[this.element.data("codeName")];
            var descr = item.source[this.element.data("descrName")];

            var title = "Code: " + code;
            title += " - " + descr;

            var markup = '<div class="row">' +
                '<div class="col-xs-6" style="white-space: nowrap"><b>' + code + "</b>" + "</div>" +
                '<div class="col-xs-6"><small>' + descr + '</small></div>' +
                '</div>';

            // This for search on code and description
            item.text = code + " " + descr;

            return markup;
        }
    }
    export interface LKCodeDescOptions extends Serenity.LookupEditorOptions {
        codeFieldName: string;
        descrFieldName: string;
    }
}