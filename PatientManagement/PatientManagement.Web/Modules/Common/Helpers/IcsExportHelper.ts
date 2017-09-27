namespace PatientManagement.Common {

    export interface IcsExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }

    export namespace IcsExportHelper {

        export function createToolButton(options: IcsExportOptions): Serenity.ToolButton {

            return {
                hint: Q.coalesce(options.title, 'Outlook'),
                title: Q.coalesce(options.hint, ''),
                cssClass: "export-docx-button",
                onClick: function () {
                    if (!options.onViewSubmit()) {
                        return;
                    }

                    let grid = options.grid;

                    var request = Q.deepClone(grid.getView().params) as Serenity.ListRequest;
                    request.Take = 0;
                    request.Skip = 0;
                    var sortBy = grid.getView().sortBy;
                    if (sortBy) {
                        request.Sort = sortBy;
                    }

                    request.IncludeColumns = [];
                    let columns = grid.getGrid().getColumns();
                    for (let column of columns) {
                        request.IncludeColumns.push(column.id || column.field);
                    }
                    Q.postToService({ service: options.service, request: request, target: '_blank' });
                },
                separator: options.separator
            };
        }
    }
}