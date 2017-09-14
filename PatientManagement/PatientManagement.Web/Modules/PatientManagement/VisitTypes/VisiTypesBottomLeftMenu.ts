/// <reference types="jqueryui" />

namespace PatientManagement {
    @Serenity.Decorators.registerClass()
    export class VisiTypesBottomLeftMenu extends Serenity.Widget<any> {

        constructor(elem: JQuery, opt: {}) {
            super(elem, opt);

            PatientManagement.VisitTypesService.List({},
                resp => {
                    if (resp.Entities.length > 0) {

                        var ul = $('<ul/>');
                        ul.addClass('treeview-menu');

                        for (var type in resp.Entities) {
                            var item = resp.Entities[type];

                            var li = $('<li/>');
                            var a = $('<a/>');
                            var i = $('<i/>');
                            i.addClass('fa fa-circle-o');
                            i.css('color', item.BackgroundColor);
                            a.append(i);

                            var span = $('<span/>');
                            span.text(item.Name);
                            a.append(span);


                            li.append(a);

                            ul.append(li);
                        }

                        elem.append(ul);
                }
                });
        }

    }
}