var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PatientManagement;
(function (PatientManagement_1) {
    var PatientManagement;
    (function (PatientManagement) {
        var VisitsTypesFormatter = (function () {
            function VisitsTypesFormatter() {
            }
            VisitsTypesFormatter.prototype.format = function (ctx) {
                if (!this.backgroundProperty || !this.borderProperty) {
                    return text;
                }
                var backgroundColor = ctx.item[this.backgroundProperty];
                var borderColor = ctx.item[this.borderProperty];
                var text = Q.htmlEncode(ctx.value);
                //return "<span style='background-color: " + color +";'>" + text + '</span>';
                return "<span class='visit-type-icon' style='background-color: " + backgroundColor + "; border-color: " + borderColor + ";' >" + '</span>' + text;
            };
            VisitsTypesFormatter.prototype.initializeColumn = function (column) {
                column.referencedFields = column.referencedFields || [];
                if (this.backgroundProperty)
                    column.referencedFields.push(this.backgroundProperty);
                if (this.borderProperty)
                    column.referencedFields.push(this.borderProperty);
            };
            return VisitsTypesFormatter;
        }());
        __decorate([
            Serenity.Decorators.option()
        ], VisitsTypesFormatter.prototype, "backgroundProperty", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], VisitsTypesFormatter.prototype, "borderProperty", void 0);
        VisitsTypesFormatter = __decorate([
            Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
        ], VisitsTypesFormatter);
        PatientManagement.VisitsTypesFormatter = VisitsTypesFormatter;
    })(PatientManagement = PatientManagement_1.PatientManagement || (PatientManagement_1.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference types="jqueryui" />
/// <returns type="jquery.colorpicker"></returns>
var PatientManagement;
(function (PatientManagement_2) {
    var PatientManagement;
    (function (PatientManagement) {
        var VisitTypesDialog = (function (_super) {
            __extends(VisitTypesDialog, _super);
            function VisitTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PatientManagement.VisitTypesForm(_this.idPrefix);
                return _this;
            }
            VisitTypesDialog.prototype.getFormKey = function () { return PatientManagement.VisitTypesForm.formKey; };
            VisitTypesDialog.prototype.getIdProperty = function () { return PatientManagement.VisitTypesRow.idProperty; };
            VisitTypesDialog.prototype.getLocalTextPrefix = function () { return PatientManagement.VisitTypesRow.localTextPrefix; };
            VisitTypesDialog.prototype.getNameProperty = function () { return PatientManagement.VisitTypesRow.nameProperty; };
            VisitTypesDialog.prototype.getService = function () { return PatientManagement.VisitTypesService.baseUrl; };
            VisitTypesDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                console.log("entity loadded");
                $(".BorderColor input").colorpicker();
                $(".BackgroundColor input").colorpicker();
                Serenity.EditorUtils.setReadOnly(this.form.BorderColor, true);
                Serenity.EditorUtils.setReadOnly(this.form.BackgroundColor, true);
            };
            return VisitTypesDialog;
        }(Serenity.EntityDialog));
        VisitTypesDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], VisitTypesDialog);
        PatientManagement.VisitTypesDialog = VisitTypesDialog;
    })(PatientManagement = PatientManagement_2.PatientManagement || (PatientManagement_2.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_3) {
    var PatientManagement;
    (function (PatientManagement) {
        var VisitTypesGrid = (function (_super) {
            __extends(VisitTypesGrid, _super);
            function VisitTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            VisitTypesGrid.prototype.getColumnsKey = function () { return 'PatientManagement.VisitTypes'; };
            VisitTypesGrid.prototype.getDialogType = function () { return PatientManagement.VisitTypesDialog; };
            VisitTypesGrid.prototype.getIdProperty = function () { return PatientManagement.VisitTypesRow.idProperty; };
            VisitTypesGrid.prototype.getLocalTextPrefix = function () { return PatientManagement.VisitTypesRow.localTextPrefix; };
            VisitTypesGrid.prototype.getService = function () { return PatientManagement.VisitTypesService.baseUrl; };
            return VisitTypesGrid;
        }(Serenity.EntityGrid));
        VisitTypesGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], VisitTypesGrid);
        PatientManagement.VisitTypesGrid = VisitTypesGrid;
    })(PatientManagement = PatientManagement_3.PatientManagement || (PatientManagement_3.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference types="jqueryui" />
var PatientManagement;
(function (PatientManagement) {
    var VisiTypesBottomLeftMenu = (function (_super) {
        __extends(VisiTypesBottomLeftMenu, _super);
        function VisiTypesBottomLeftMenu(elem, opt) {
            var _this = _super.call(this, elem, opt) || this;
            PatientManagement.PatientManagement.VisitTypesService.List({}, function (resp) {
                if (resp.Entities.length > 0) {
                    for (var type in resp.Entities) {
                        console.log(resp.Entities[type]);
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
                        elem.after(li);
                    }
                }
            });
            return _this;
        }
        return VisiTypesBottomLeftMenu;
    }(Serenity.Widget));
    VisiTypesBottomLeftMenu = __decorate([
        Serenity.Decorators.registerClass()
    ], VisiTypesBottomLeftMenu);
    PatientManagement.VisiTypesBottomLeftMenu = VisiTypesBottomLeftMenu;
})(PatientManagement || (PatientManagement = {}));
/// <reference types="jquery" />
var PatientManagement;
(function (PatientManagement_4) {
    var PatientManagement;
    (function (PatientManagement) {
        var VisitsDialog = (function (_super) {
            __extends(VisitsDialog, _super);
            function VisitsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PatientManagement.VisitsForm(_this.idPrefix);
                _this.form.EndDate.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.EndDate.valueAsDate != null &&
                        _this.form.StartDate.valueAsDate != null &&
                        _this.form.StartDate.valueAsDate > _this.form.EndDate.valueAsDate ||
                        _this.form.StartDate == _this.form.EndDate) {
                        return Q.text("Site.Dashboard.ErrorEndDateBiggerThanStartDate");
                    }
                    return null;
                });
                _this.form.StartDate.change(function (elem) {
                    var dateStart = this.form.StartDate.value;
                    this.form.EndDate.value = dateStart;
                });
                return _this;
            }
            VisitsDialog.prototype.getFormKey = function () { return PatientManagement.VisitsForm.formKey; };
            VisitsDialog.prototype.getIdProperty = function () { return PatientManagement.VisitsRow.idProperty; };
            VisitsDialog.prototype.getLocalTextPrefix = function () { return PatientManagement.VisitsRow.localTextPrefix; };
            VisitsDialog.prototype.getService = function () { return PatientManagement.VisitsService.baseUrl; };
            return VisitsDialog;
        }(Serenity.EntityDialog));
        VisitsDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], VisitsDialog);
        PatientManagement.VisitsDialog = VisitsDialog;
    })(PatientManagement = PatientManagement_4.PatientManagement || (PatientManagement_4.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_5) {
    var PatientManagement;
    (function (PatientManagement) {
        var VisitsGrid = (function (_super) {
            __extends(VisitsGrid, _super);
            function VisitsGrid(container) {
                return _super.call(this, container) || this;
            }
            VisitsGrid.prototype.getColumnsKey = function () { return 'PatientManagement.Visits'; };
            VisitsGrid.prototype.getDialogType = function () { return PatientManagement.VisitsDialog; };
            VisitsGrid.prototype.getIdProperty = function () { return PatientManagement.VisitsRow.idProperty; };
            VisitsGrid.prototype.getLocalTextPrefix = function () { return PatientManagement.VisitsRow.localTextPrefix; };
            VisitsGrid.prototype.getService = function () { return PatientManagement.VisitsService.baseUrl; };
            return VisitsGrid;
        }(Serenity.EntityGrid));
        VisitsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], VisitsGrid);
        PatientManagement.VisitsGrid = VisitsGrid;
    })(PatientManagement = PatientManagement_5.PatientManagement || (PatientManagement_5.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_6) {
    var PatientManagement;
    (function (PatientManagement) {
        var UserNotificationsDialog = (function (_super) {
            __extends(UserNotificationsDialog, _super);
            function UserNotificationsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PatientManagement.UserNotificationsForm(_this.idPrefix);
                return _this;
            }
            UserNotificationsDialog.prototype.getFormKey = function () { return PatientManagement.UserNotificationsForm.formKey; };
            UserNotificationsDialog.prototype.getIdProperty = function () { return PatientManagement.UserNotificationsRow.idProperty; };
            UserNotificationsDialog.prototype.getLocalTextPrefix = function () { return PatientManagement.UserNotificationsRow.localTextPrefix; };
            UserNotificationsDialog.prototype.getService = function () { return PatientManagement.UserNotificationsService.baseUrl; };
            return UserNotificationsDialog;
        }(Serenity.EntityDialog));
        UserNotificationsDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], UserNotificationsDialog);
        PatientManagement.UserNotificationsDialog = UserNotificationsDialog;
    })(PatientManagement = PatientManagement_6.PatientManagement || (PatientManagement_6.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_7) {
    var PatientManagement;
    (function (PatientManagement) {
        var UserNotificationsGrid = (function (_super) {
            __extends(UserNotificationsGrid, _super);
            function UserNotificationsGrid(container) {
                return _super.call(this, container) || this;
            }
            UserNotificationsGrid.prototype.getColumnsKey = function () { return 'PatientManagement.UserNotifications'; };
            UserNotificationsGrid.prototype.getDialogType = function () { return PatientManagement.UserNotificationsDialog; };
            UserNotificationsGrid.prototype.getIdProperty = function () { return PatientManagement.UserNotificationsRow.idProperty; };
            UserNotificationsGrid.prototype.getLocalTextPrefix = function () { return PatientManagement.UserNotificationsRow.localTextPrefix; };
            UserNotificationsGrid.prototype.getService = function () { return PatientManagement.UserNotificationsService.baseUrl; };
            UserNotificationsGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            return UserNotificationsGrid;
        }(Serenity.EntityGrid));
        UserNotificationsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], UserNotificationsGrid);
        PatientManagement.UserNotificationsGrid = UserNotificationsGrid;
    })(PatientManagement = PatientManagement_7.PatientManagement || (PatientManagement_7.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_8) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientsFileUploadsDialog = (function (_super) {
            __extends(PatientsFileUploadsDialog, _super);
            function PatientsFileUploadsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PatientManagement.PatientsFileUploadsForm(_this.idPrefix);
                return _this;
            }
            PatientsFileUploadsDialog.prototype.getFormKey = function () { return PatientManagement.PatientsFileUploadsForm.formKey; };
            PatientsFileUploadsDialog.prototype.getIdProperty = function () { return PatientManagement.PatientsFileUploadsRow.idProperty; };
            PatientsFileUploadsDialog.prototype.getLocalTextPrefix = function () { return PatientManagement.PatientsFileUploadsRow.localTextPrefix; };
            PatientsFileUploadsDialog.prototype.getNameProperty = function () { return PatientManagement.PatientsFileUploadsRow.nameProperty; };
            PatientsFileUploadsDialog.prototype.getService = function () { return PatientManagement.PatientsFileUploadsService.baseUrl; };
            return PatientsFileUploadsDialog;
        }(Serenity.EntityDialog));
        PatientsFileUploadsDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], PatientsFileUploadsDialog);
        PatientManagement.PatientsFileUploadsDialog = PatientsFileUploadsDialog;
    })(PatientManagement = PatientManagement_8.PatientManagement || (PatientManagement_8.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_9) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientsFileUploadsGrid = (function (_super) {
            __extends(PatientsFileUploadsGrid, _super);
            function PatientsFileUploadsGrid(container) {
                return _super.call(this, container) || this;
            }
            PatientsFileUploadsGrid.prototype.getColumnsKey = function () { return 'PatientManagement.PatientsFileUploads'; };
            PatientsFileUploadsGrid.prototype.getDialogType = function () { return PatientManagement.PatientsFileUploadsDialog; };
            PatientsFileUploadsGrid.prototype.getIdProperty = function () { return PatientManagement.PatientsFileUploadsRow.idProperty; };
            PatientsFileUploadsGrid.prototype.getLocalTextPrefix = function () { return PatientManagement.PatientsFileUploadsRow.localTextPrefix; };
            PatientsFileUploadsGrid.prototype.getService = function () { return PatientManagement.PatientsFileUploadsService.baseUrl; };
            return PatientsFileUploadsGrid;
        }(Serenity.EntityGrid));
        PatientsFileUploadsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], PatientsFileUploadsGrid);
        PatientManagement.PatientsFileUploadsGrid = PatientsFileUploadsGrid;
    })(PatientManagement = PatientManagement_9.PatientManagement || (PatientManagement_9.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../PatientsFileUploads/PatientsFileUploadsDialog.ts" />
var PatientManagement;
(function (PatientManagement_10) {
    var PatientManagement;
    (function (PatientManagement) {
        var FIleUploadsForPatientDialog = (function (_super) {
            __extends(FIleUploadsForPatientDialog, _super);
            function FIleUploadsForPatientDialog() {
                return _super.call(this) || this;
            }
            FIleUploadsForPatientDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.PatientId, true);
            };
            return FIleUploadsForPatientDialog;
        }(PatientManagement.PatientsFileUploadsDialog));
        FIleUploadsForPatientDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], FIleUploadsForPatientDialog);
        PatientManagement.FIleUploadsForPatientDialog = FIleUploadsForPatientDialog;
    })(PatientManagement = PatientManagement_10.PatientManagement || (PatientManagement_10.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../PatientsFileUploads/PatientsFileUploadsGrid.ts"/>
var PatientManagement;
(function (PatientManagement_11) {
    var PatientManagement;
    (function (PatientManagement) {
        var FIleUploadsForPatientGrid = (function (_super) {
            __extends(FIleUploadsForPatientGrid, _super);
            function FIleUploadsForPatientGrid(container) {
                return _super.call(this, container) || this;
            }
            FIleUploadsForPatientGrid.prototype.getDialogType = function () { return PatientManagement.FIleUploadsForPatientDialog; };
            FIleUploadsForPatientGrid.prototype.getColumns = function () {
                var fld = PatientManagement.PatientsFileUploadsRow.Fields;
                return _super.prototype.getColumns.call(this);
            };
            FIleUploadsForPatientGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            FIleUploadsForPatientGrid.prototype.addButtonClick = function () {
                console.log(this.patientId);
                this.editItem({ PatientId: this.patientId });
            };
            FIleUploadsForPatientGrid.prototype.getInitialTitle = function () {
                return null;
            };
            FIleUploadsForPatientGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.patientId;
            };
            Object.defineProperty(FIleUploadsForPatientGrid.prototype, "patientId", {
                get: function () {
                    return this._patientId;
                },
                set: function (value) {
                    if (this._patientId !== value) {
                        this._patientId = value;
                        this.setEquality('PatientId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            return FIleUploadsForPatientGrid;
        }(PatientManagement.PatientsFileUploadsGrid));
        FIleUploadsForPatientGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], FIleUploadsForPatientGrid);
        PatientManagement.FIleUploadsForPatientGrid = FIleUploadsForPatientGrid;
    })(PatientManagement = PatientManagement_11.PatientManagement || (PatientManagement_11.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_12) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientsDialog = (function (_super) {
            __extends(PatientsDialog, _super);
            function PatientsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PatientManagement.PatientsForm(_this.idPrefix);
                _this.selfChange = 0;
                _this.checkEgn = function (egn) {
                    if (egn.length != 10)
                        return false;
                    if (/[^0-9]/.test(egn))
                        return false;
                    return true;
                };
                _this.isValidDate = function (y, m, d) {
                    var date = new Date(y, m - 1, d);
                    return date && (date.getMonth() + 1) == m && date.getDate() == Number(d);
                };
                _this.form.PersonalNumber.addValidationRule(_this.uniqueName, function (e) {
                    if (!_this.checkEgn(_this.form.PersonalNumber.value)) {
                        return Q.text("Site.ValidationError.ValidateEgnNotCorrect");
                    }
                    return null;
                });
                //Initialize new instance of visits grid
                _this.visitsGrid = new PatientManagement.PatientVisitsGrid(_this.byId("VisitsGrid"));
                _this.visitsGrid.element.flexHeightOnly(1);
                //Initialize new instance of patient health grid and form
                _this.patientHealthGrid = new Serenity.PropertyGrid(_this.byId("PatientHealthPropertyGrid"), {
                    items: Q.getForm(PatientManagement.PatientHealthForm.formKey).filter(function (x) { return x.name != "PatientId"; }),
                    useCategories: true
                });
                _this.patientHealthForm = new PatientManagement.PatientHealthForm(_this.patientHealthGrid.idPrefix);
                //Initialize new instance of LifeStyle grid and form
                _this.lifeStyleGrid = new Serenity.PropertyGrid(_this.byId("LifeStylePropertyGrid"), {
                    items: Q.getForm(PatientManagement.LifeStylesForm.formKey).filter(function (x) { return x.name != "PatientId"; }),
                    useCategories: true
                });
                _this.lifeStyleForm = new PatientManagement.LifeStylesForm(_this.lifeStyleGrid.idPrefix);
                //Initialize new instance of LifeStyle grid and form
                _this.patientActivityGrid = new Serenity.PropertyGrid(_this.byId("ActivityPropertyGrid"), {
                    items: Q.getForm(PatientManagement.ActivityForm.formKey).filter(function (x) { return x.name != "PatientId"; }),
                    useCategories: true
                });
                _this.patientActivityForm = new PatientManagement.ActivityForm(_this.patientActivityGrid.idPrefix);
                //Initialize new instance of FileUploads grid and form
                _this.patientsFileUploadsGrid = new PatientManagement.FIleUploadsForPatientGrid(_this.byId("FileUploadsPropertyGrid"));
                _this.patientsFileUploadsGrid.element.flexHeightOnly(1);
                _this.patientValidator = _this.byId("PatientHealthForm").validate(Q.validateOptions({}));
                _this.patientValidator = _this.byId("LifeStyleForm").validate(Q.validateOptions({}));
                _this.patientValidator = _this.byId("ActivityForm").validate(Q.validateOptions({}));
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                PatientManagement_12.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                //Add button for saving patient health form
                // ReSharper disable once WrongExpressionStatement
                new Serenity.Toolbar(_this.byId("PatientHealthToolbar"), {
                    buttons: [
                        {
                            cssClass: "apply-changes-button",
                            title: Q.text("Controls.EntityDialog.UpdateButton"),
                            onClick: function () {
                                var id = _this.form.PatientId.value;
                                if (!id)
                                    return;
                                if (!_this.patientValidator.form())
                                    return;
                                var p = {};
                                _this.patientHealthGrid.save(p);
                                PatientManagement.PatientHealthService.Update({
                                    EntityId: id,
                                    Entity: p
                                }, function (response) {
                                    // reload customer list just in case
                                    Q.reloadLookup(PatientManagement.PatientsRow.lookupKey);
                                    Q.notifySuccess(Q.text("Controls.EntityDialog.SaveSuccessMessage"));
                                });
                            }
                        }
                    ]
                });
                //Add button for saving patient life style form
                // ReSharper disable once WrongExpressionStatement
                new Serenity.Toolbar(_this.byId("LifeStyleToolbar"), {
                    buttons: [
                        {
                            cssClass: "apply-changes-button",
                            title: Q.text("Controls.EntityDialog.UpdateButton"),
                            onClick: function () {
                                var id = _this.form.PatientId.value;
                                if (!id)
                                    return;
                                if (!_this.patientValidator.form())
                                    return;
                                var p = {};
                                _this.lifeStyleGrid.save(p);
                                PatientManagement.LifeStylesService.Update({
                                    EntityId: id,
                                    Entity: p
                                }, function (response) {
                                    // reload customer list just in case
                                    Q.reloadLookup(PatientManagement.PatientsRow.lookupKey);
                                    Q.notifySuccess(Q.text("Controls.EntityDialog.SaveSuccessMessage"));
                                });
                            }
                        }
                    ]
                });
                //Add button for saving patient activity a form
                // ReSharper disable once WrongExpressionStatement
                new Serenity.Toolbar(_this.byId("ActivityToolbar"), {
                    buttons: [
                        {
                            cssClass: "apply-changes-button",
                            title: Q.text("Controls.EntityDialog.UpdateButton"),
                            onClick: function () {
                                var id = _this.form.PatientId.value;
                                if (!id)
                                    return;
                                if (!_this.patientValidator.form())
                                    return;
                                var p = {};
                                _this.patientActivityGrid.save(p);
                                PatientManagement.ActivityService.Update({
                                    EntityId: id,
                                    Entity: p
                                }, function (response) {
                                    // reload customer list just in case
                                    Q.reloadLookup(PatientManagement.PatientsRow.lookupKey);
                                    Q.notifySuccess(Q.text("Controls.EntityDialog.SaveSuccessMessage"));
                                });
                            }
                        }
                    ]
                });
                return _this;
            }
            PatientsDialog.prototype.getFormKey = function () { return PatientManagement.PatientsForm.formKey; };
            PatientsDialog.prototype.getIdProperty = function () { return PatientManagement.PatientsRow.idProperty; };
            PatientsDialog.prototype.getLocalTextPrefix = function () { return PatientManagement.PatientsRow.localTextPrefix; };
            PatientsDialog.prototype.getNameProperty = function () { return PatientManagement.PatientsRow.nameProperty; };
            PatientsDialog.prototype.getService = function () { return PatientManagement.PatientsService.baseUrl; };
            PatientsDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            PatientsDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            PatientsDialog.prototype.loadEntity = function (entity) {
                var _this = this;
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Visits', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'PatientHealth', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'LifeStyle', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Activity', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'FileUploads', this.isNewOrDeleted());
                if (this.isNewOrDeleted()) {
                    // no patient is selected, just load an empty entity
                    this.patientHealthGrid.load({});
                    this.patientActivityGrid.load({});
                    this.lifeStyleGrid.load({});
                    return;
                }
                else {
                    PatientManagement.PatientHealthService.Retrieve({
                        EntityId: entity.PatientId
                    }, function (response) {
                        _this.patientHealthGrid.load(response.Entity);
                    });
                    PatientManagement.LifeStylesService.Retrieve({
                        EntityId: entity.PatientId
                    }, function (response) {
                        _this.lifeStyleGrid.load(response.Entity);
                    });
                    PatientManagement.ActivityService.Retrieve({
                        EntityId: entity.PatientId
                    }, function (response) {
                        _this.patientActivityGrid.load(response.Entity);
                    });
                }
                this.visitsGrid.patientId = entity.PatientId;
                this.patientsFileUploadsGrid.patientId = entity.PatientId;
            };
            PatientsDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                Q.reloadLookup('PatientManagement.Patients');
            };
            return PatientsDialog;
        }(Serenity.EntityDialog));
        PatientsDialog = __decorate([
            Serenity.Decorators.maximizable(),
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], PatientsDialog);
        PatientManagement.PatientsDialog = PatientsDialog;
    })(PatientManagement = PatientManagement_12.PatientManagement || (PatientManagement_12.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_13) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientsFormatter = (function () {
            function PatientsFormatter() {
            }
            PatientsFormatter.prototype.format = function (ctx) {
                var text = Q.htmlEncode(ctx.value);
                if (!this.genderProperty) {
                    return text;
                }
                var gender = ctx.item[this.genderProperty];
                return "<span class='" + ((gender === PatientManagement.Gender.Female) ?
                    'employee-symbol female' : 'employee-symbol male') +
                    "'>" + text + '</span>';
            };
            PatientsFormatter.prototype.initializeColumn = function (column) {
                column.referencedFields = column.referencedFields || [];
                if (this.genderProperty)
                    column.referencedFields.push(this.genderProperty);
            };
            return PatientsFormatter;
        }());
        __decorate([
            Serenity.Decorators.option()
        ], PatientsFormatter.prototype, "genderProperty", void 0);
        PatientsFormatter = __decorate([
            Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
        ], PatientsFormatter);
        PatientManagement.PatientsFormatter = PatientsFormatter;
        var PatientsPhoneFormatter = (function () {
            function PatientsPhoneFormatter() {
            }
            PatientsPhoneFormatter.prototype.format = function (ctx) {
                return "<span class='phone-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            return PatientsPhoneFormatter;
        }());
        PatientsPhoneFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], PatientsPhoneFormatter);
        PatientManagement.PatientsPhoneFormatter = PatientsPhoneFormatter;
    })(PatientManagement = PatientManagement_13.PatientManagement || (PatientManagement_13.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_14) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientsGrid = (function (_super) {
            __extends(PatientsGrid, _super);
            function PatientsGrid(container) {
                return _super.call(this, container) || this;
            }
            PatientsGrid.prototype.getColumnsKey = function () { return 'PatientManagement.Patients'; };
            PatientsGrid.prototype.getDialogType = function () { return PatientManagement.PatientsDialog; };
            PatientsGrid.prototype.getIdProperty = function () { return PatientManagement.PatientsRow.idProperty; };
            PatientsGrid.prototype.getLocalTextPrefix = function () { return PatientManagement.PatientsRow.localTextPrefix; };
            PatientsGrid.prototype.getService = function () { return PatientManagement.PatientsService.baseUrl; };
            return PatientsGrid;
        }(Serenity.EntityGrid));
        PatientsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], PatientsGrid);
        PatientManagement.PatientsGrid = PatientsGrid;
    })(PatientManagement = PatientManagement_14.PatientManagement || (PatientManagement_14.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../Visits/VisitsDialog.ts" />
var PatientManagement;
(function (PatientManagement_15) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientVisitsDialog = (function (_super) {
            __extends(PatientVisitsDialog, _super);
            function PatientVisitsDialog() {
                return _super.call(this) || this;
            }
            PatientVisitsDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.PatientId, true);
            };
            return PatientVisitsDialog;
        }(PatientManagement.VisitsDialog));
        PatientVisitsDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], PatientVisitsDialog);
        PatientManagement.PatientVisitsDialog = PatientVisitsDialog;
    })(PatientManagement = PatientManagement_15.PatientManagement || (PatientManagement_15.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../Visits/VisitsGrid.ts" />
var PatientManagement;
(function (PatientManagement_16) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientVisitsGrid = (function (_super) {
            __extends(PatientVisitsGrid, _super);
            function PatientVisitsGrid(container) {
                return _super.call(this, container) || this;
            }
            PatientVisitsGrid.prototype.getDialogType = function () { return PatientManagement.PatientVisitsDialog; };
            PatientVisitsGrid.prototype.getColumns = function () {
                var fld = PatientManagement.VisitsRow.Fields;
                return _super.prototype.getColumns.call(this);
            };
            PatientVisitsGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            PatientVisitsGrid.prototype.addButtonClick = function () {
                console.log(this.patientId);
                this.editItem({ PatientId: this.patientId });
            };
            PatientVisitsGrid.prototype.getInitialTitle = function () {
                return null;
            };
            PatientVisitsGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.patientId;
            };
            Object.defineProperty(PatientVisitsGrid.prototype, "patientId", {
                get: function () {
                    return this._patientId;
                },
                set: function (value) {
                    if (this._patientId !== value) {
                        this._patientId = value;
                        this.setEquality('PatientId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            return PatientVisitsGrid;
        }(PatientManagement.VisitsGrid));
        PatientVisitsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], PatientVisitsGrid);
        PatientManagement.PatientVisitsGrid = PatientVisitsGrid;
    })(PatientManagement = PatientManagement_16.PatientManagement || (PatientManagement_16.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_17) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientHealthDialog = (function (_super) {
            __extends(PatientHealthDialog, _super);
            function PatientHealthDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PatientManagement.PatientHealthForm(_this.idPrefix);
                return _this;
            }
            PatientHealthDialog.prototype.getFormKey = function () { return PatientManagement.PatientHealthForm.formKey; };
            PatientHealthDialog.prototype.getIdProperty = function () { return PatientManagement.PatientHealthRow.idProperty; };
            PatientHealthDialog.prototype.getLocalTextPrefix = function () { return PatientManagement.PatientHealthRow.localTextPrefix; };
            PatientHealthDialog.prototype.getNameProperty = function () { return PatientManagement.PatientHealthRow.nameProperty; };
            PatientHealthDialog.prototype.getService = function () { return PatientManagement.PatientHealthService.baseUrl; };
            return PatientHealthDialog;
        }(Serenity.EntityDialog));
        PatientHealthDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], PatientHealthDialog);
        PatientManagement.PatientHealthDialog = PatientHealthDialog;
    })(PatientManagement = PatientManagement_17.PatientManagement || (PatientManagement_17.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_18) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientHealthGrid = (function (_super) {
            __extends(PatientHealthGrid, _super);
            function PatientHealthGrid(container) {
                return _super.call(this, container) || this;
            }
            PatientHealthGrid.prototype.getColumnsKey = function () { return 'PatientManagement.PatientHealth'; };
            PatientHealthGrid.prototype.getDialogType = function () { return PatientManagement.PatientHealthDialog; };
            PatientHealthGrid.prototype.getIdProperty = function () { return PatientManagement.PatientHealthRow.idProperty; };
            PatientHealthGrid.prototype.getLocalTextPrefix = function () { return PatientManagement.PatientHealthRow.localTextPrefix; };
            PatientHealthGrid.prototype.getService = function () { return PatientManagement.PatientHealthService.baseUrl; };
            return PatientHealthGrid;
        }(Serenity.EntityGrid));
        PatientHealthGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], PatientHealthGrid);
        PatientManagement.PatientHealthGrid = PatientHealthGrid;
    })(PatientManagement = PatientManagement_18.PatientManagement || (PatientManagement_18.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_19) {
    var PatientManagement;
    (function (PatientManagement) {
        var NotificationsDialog = (function (_super) {
            __extends(NotificationsDialog, _super);
            function NotificationsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PatientManagement.NotificationsForm(_this.idPrefix);
                return _this;
            }
            NotificationsDialog.prototype.getFormKey = function () { return PatientManagement.NotificationsForm.formKey; };
            NotificationsDialog.prototype.getIdProperty = function () { return PatientManagement.NotificationsRow.idProperty; };
            NotificationsDialog.prototype.getLocalTextPrefix = function () { return PatientManagement.NotificationsRow.localTextPrefix; };
            NotificationsDialog.prototype.getNameProperty = function () { return PatientManagement.NotificationsRow.nameProperty; };
            NotificationsDialog.prototype.getService = function () { return PatientManagement.NotificationsService.baseUrl; };
            return NotificationsDialog;
        }(Serenity.EntityDialog));
        NotificationsDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], NotificationsDialog);
        PatientManagement.NotificationsDialog = NotificationsDialog;
    })(PatientManagement = PatientManagement_19.PatientManagement || (PatientManagement_19.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_20) {
    var PatientManagement;
    (function (PatientManagement) {
        var NotificationsGrid = (function (_super) {
            __extends(NotificationsGrid, _super);
            function NotificationsGrid(container) {
                return _super.call(this, container) || this;
            }
            NotificationsGrid.prototype.getColumnsKey = function () { return 'PatientManagement.Notifications'; };
            NotificationsGrid.prototype.getDialogType = function () { return PatientManagement.NotificationsDialog; };
            NotificationsGrid.prototype.getIdProperty = function () { return PatientManagement.NotificationsRow.idProperty; };
            NotificationsGrid.prototype.getLocalTextPrefix = function () { return PatientManagement.NotificationsRow.localTextPrefix; };
            NotificationsGrid.prototype.getService = function () { return PatientManagement.NotificationsService.baseUrl; };
            NotificationsGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            return NotificationsGrid;
        }(Serenity.EntityGrid));
        NotificationsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], NotificationsGrid);
        PatientManagement.NotificationsGrid = NotificationsGrid;
    })(PatientManagement = PatientManagement_20.PatientManagement || (PatientManagement_20.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_21) {
    var PatientManagement;
    (function (PatientManagement) {
        var NotesDialog = (function (_super) {
            __extends(NotesDialog, _super);
            function NotesDialog() {
                var _this = _super.call(this) || this;
                _this.textEditor = new Serenity.HtmlNoteContentEditor(_this.byId('Text'));
                return _this;
            }
            NotesDialog.prototype.getTemplate = function () {
                return ("<form id='~_Form' class='s-Form'>" +
                    "<textarea id='~_Text' class='required'></textarea>" +
                    "</form>");
            };
            NotesDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            if (!_this.validateForm()) {
                                return;
                            }
                            _this.okClick && _this.okClick();
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return opt;
            };
            Object.defineProperty(NotesDialog.prototype, "text", {
                get: function () {
                    return this.textEditor.value;
                },
                set: function (value) {
                    this.textEditor.value = value;
                },
                enumerable: true,
                configurable: true
            });
            return NotesDialog;
        }(Serenity.TemplatedDialog));
        NotesDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], NotesDialog);
        PatientManagement.NotesDialog = NotesDialog;
    })(PatientManagement = PatientManagement_21.PatientManagement || (PatientManagement_21.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_22) {
    var PatientManagement;
    (function (PatientManagement) {
        var NotesEditor = (function (_super) {
            __extends(NotesEditor, _super);
            function NotesEditor(div) {
                var _this = _super.call(this, div) || this;
                new Serenity.Toolbar(_this.byId('Toolbar'), {
                    buttons: [{
                            title: 'Add Note',
                            cssClass: 'add-button',
                            onClick: function (e) {
                                e.preventDefault();
                                _this.addClick();
                            }
                        }]
                });
                return _this;
            }
            NotesEditor.prototype.getTemplate = function () {
                return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
            };
            NotesEditor.prototype.updateContent = function () {
                var _this = this;
                var noteList = this.byId('NoteList');
                noteList.children().remove();
                if (this.items) {
                    var index = 0;
                    for (var t1 = 0; t1 < this.items.length; t1++) {
                        var item = this.items[t1];
                        var li = $('<li/>');
                        $('<div/>').addClass('note-text').html(Q.coalesce(item.Text, '')).appendTo(li);
                        $('<a/>').attr('href', '#').addClass('note-date')
                            .text(item.InsertUserDisplayName + ' - ' +
                            Q.formatDate(item.InsertDate, 'g'))
                            .data('index', index).appendTo(li).click(function (e) { return _this.editClick(e); });
                        $('<a/>').attr('href', '#').addClass('note-delete')
                            .attr('title', 'delete note').data('index', index)
                            .appendTo(li).click(function (e) { return _this.deleteClick(e); });
                        li.appendTo(noteList);
                        index++;
                    }
                }
            };
            NotesEditor.prototype.addClick = function () {
                var _this = this;
                var dlg = new PatientManagement.NotesDialog();
                dlg.dialogTitle = 'Add Note';
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (text == null) {
                        return;
                    }
                    _this.items = _this.items || [];
                    Q.insert(_this.items, 0, {
                        Text: text,
                        InsertUserDisplayName: PatientManagement_22.Authorization.userDefinition.DisplayName,
                        InsertDate: Q.formatISODateTimeUTC(new Date())
                    });
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.editClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                var old = this.items[index];
                var dlg = new PatientManagement.NotesDialog();
                dlg.dialogTitle = 'Edit Note';
                dlg.text = old.Text;
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (!text) {
                        return;
                    }
                    _this.items[index].Text = text;
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.deleteClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                Q.confirm('Delete this note?', function () {
                    _this.items.splice(index, 1);
                    _this.updateContent();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                });
            };
            Object.defineProperty(NotesEditor.prototype, "value", {
                get: function () {
                    return this.items;
                },
                set: function (value) {
                    this.items = value || [];
                    this.set_isDirty(false);
                    this.updateContent();
                },
                enumerable: true,
                configurable: true
            });
            NotesEditor.prototype.getEditValue = function (prop, target) {
                target[prop.name] = this.value;
            };
            NotesEditor.prototype.setEditValue = function (source, prop) {
                this.value = source[prop.name] || [];
            };
            NotesEditor.prototype.get_isDirty = function () {
                return this.isDirty;
            };
            NotesEditor.prototype.set_isDirty = function (value) {
                this.isDirty = value;
            };
            return NotesEditor;
        }(Serenity.TemplatedWidget));
        NotesEditor = __decorate([
            Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue]),
            Serenity.Decorators.element("<div/>")
        ], NotesEditor);
        PatientManagement.NotesEditor = NotesEditor;
    })(PatientManagement = PatientManagement_22.PatientManagement || (PatientManagement_22.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_23) {
    var PatientManagement;
    (function (PatientManagement) {
        var LifeStylesDialog = (function (_super) {
            __extends(LifeStylesDialog, _super);
            function LifeStylesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PatientManagement.LifeStylesForm(_this.idPrefix);
                return _this;
            }
            LifeStylesDialog.prototype.getFormKey = function () { return PatientManagement.LifeStylesForm.formKey; };
            LifeStylesDialog.prototype.getIdProperty = function () { return PatientManagement.LifeStylesRow.idProperty; };
            LifeStylesDialog.prototype.getLocalTextPrefix = function () { return PatientManagement.LifeStylesRow.localTextPrefix; };
            LifeStylesDialog.prototype.getNameProperty = function () { return PatientManagement.LifeStylesRow.nameProperty; };
            LifeStylesDialog.prototype.getService = function () { return PatientManagement.LifeStylesService.baseUrl; };
            return LifeStylesDialog;
        }(Serenity.EntityDialog));
        LifeStylesDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], LifeStylesDialog);
        PatientManagement.LifeStylesDialog = LifeStylesDialog;
    })(PatientManagement = PatientManagement_23.PatientManagement || (PatientManagement_23.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_24) {
    var PatientManagement;
    (function (PatientManagement) {
        var LifeStylesGrid = (function (_super) {
            __extends(LifeStylesGrid, _super);
            function LifeStylesGrid(container) {
                return _super.call(this, container) || this;
            }
            LifeStylesGrid.prototype.getColumnsKey = function () { return 'PatientManagement.LifeStyles'; };
            LifeStylesGrid.prototype.getDialogType = function () { return PatientManagement.LifeStylesDialog; };
            LifeStylesGrid.prototype.getIdProperty = function () { return PatientManagement.LifeStylesRow.idProperty; };
            LifeStylesGrid.prototype.getLocalTextPrefix = function () { return PatientManagement.LifeStylesRow.localTextPrefix; };
            LifeStylesGrid.prototype.getService = function () { return PatientManagement.LifeStylesService.baseUrl; };
            return LifeStylesGrid;
        }(Serenity.EntityGrid));
        LifeStylesGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], LifeStylesGrid);
        PatientManagement.LifeStylesGrid = LifeStylesGrid;
    })(PatientManagement = PatientManagement_24.PatientManagement || (PatientManagement_24.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../Patients/PatientsDialog.ts" />
var PatientManagement;
(function (PatientManagement_25) {
    var PatientManagement;
    (function (PatientManagement) {
        var CalendarPatientDialog = (function (_super) {
            __extends(CalendarPatientDialog, _super);
            function CalendarPatientDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CalendarPatientDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                console.log("something");
                Serenity.EditorUtils.setReadOnly(this.form.Name, true);
            };
            return CalendarPatientDialog;
        }(PatientManagement.PatientsDialog));
        CalendarPatientDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], CalendarPatientDialog);
        PatientManagement.CalendarPatientDialog = CalendarPatientDialog;
    })(PatientManagement = PatientManagement_25.PatientManagement || (PatientManagement_25.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../Visits/VisitsDialog.ts" />
/// <reference types="jqueryui" />
/// <reference types="fullcalendar" />
var PatientManagement;
(function (PatientManagement_26) {
    var PatientManagement;
    (function (PatientManagement) {
        var CalendarVisitsDialog = (function (_super) {
            __extends(CalendarVisitsDialog, _super);
            function CalendarVisitsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.newPredifinedVisit = function (start, end) {
                    var p = {};
                    var dlg = new PatientManagement.CalendarVisitsDialog();
                    p.StartDate = start;
                    p.EndDate = end;
                    dlg.loadEntityAndOpenDialog({
                        StartDate: start,
                        EndDate: end
                    });
                };
                _this.updateVisit = function (visitId, start, end) {
                    var p = {};
                    PatientManagement.VisitsService.Retrieve({
                        EntityId: visitId
                    }, function (resp) {
                        p = resp.Entity;
                        Q.notifyInfo(Q.text("Site.Dashboard.SuccessChangedVisitDates") + p.PatientName);
                    });
                    p.StartDate = start;
                    p.EndDate = end;
                    PatientManagement.VisitsService.Update({
                        Entity: p,
                        EntityId: visitId
                    }, function (response) {
                        Q.reloadLookup(PatientManagement.VisitsRow.lookupKey);
                        $('#VisitsGridDiv .refresh-button').click();
                    });
                };
                _this.deleteVisit = function (visitId) {
                    var p = {};
                    PatientManagement.VisitsService.Retrieve({
                        EntityId: visitId
                    }, function (resp) {
                        p = resp.Entity;
                        Q.confirm(_this.formatAlertMessage(Q.text("Site.Dashboard.AlertOnCalendarRemove"), p.PatientName, (p.StartDate), (p.EndDate)), function () {
                            PatientManagement.VisitsService.Delete({
                                EntityId: visitId
                            }, function (resp) {
                                Q.notifyInfo(Q.text("Site.Dashboard.SuccessDeletingVisitDates") + p.PatientName);
                                $("#calendar").fullCalendar('refetchEvents');
                            });
                        }, {});
                    });
                };
                return _this;
            }
            CalendarVisitsDialog.prototype.updateTitle = function () {
                _super.prototype.updateTitle.call(this);
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadOnly(this.form.PatientId, true);
                }
            };
            CalendarVisitsDialog.prototype.onSaveSuccess = function (response) {
                PatientManagement.VisitsService.Retrieve({
                    EntityId: response.EntityId
                }, function (resp) {
                    $("#calendar").fullCalendar('refetchEvents');
                });
            };
            CalendarVisitsDialog.prototype.onDeleteSuccess = function (response) {
                console.log(response);
                $("#calendar").fullCalendar('refetchEvents');
            };
            CalendarVisitsDialog.prototype.formatAlertMessage = function (firstLine, title, startDate, endDate) {
                var str = firstLine +
                    "\n" +
                    Q.text("Site.Dashboard.CalendarPatient") +
                    " " +
                    title +
                    "\n\n" +
                    Q.text("Site.Dashboard.CalendarStartDate") +
                    " " +
                    startDate.toLocaleString() +
                    "\n" +
                    Q.text("Site.Dashboard.CalendarEndDate") +
                    " " +
                    endDate.toLocaleString();
                return str;
            };
            return CalendarVisitsDialog;
        }(PatientManagement.VisitsDialog));
        CalendarVisitsDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], CalendarVisitsDialog);
        PatientManagement.CalendarVisitsDialog = CalendarVisitsDialog;
    })(PatientManagement = PatientManagement_26.PatientManagement || (PatientManagement_26.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../Visits/VisitsGrid.ts" />
var PatientManagement;
(function (PatientManagement_27) {
    var PatientManagement;
    (function (PatientManagement) {
        var CalendarVisitsGrid = (function (_super) {
            __extends(CalendarVisitsGrid, _super);
            function CalendarVisitsGrid(container) {
                return _super.call(this, container) || this;
            }
            CalendarVisitsGrid.prototype.getDialogType = function () { return PatientManagement.CalendarVisitsDialog; };
            CalendarVisitsGrid.prototype.getInitialTitle = function () {
                return null;
            };
            return CalendarVisitsGrid;
        }(PatientManagement.VisitsGrid));
        CalendarVisitsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CalendarVisitsGrid);
        PatientManagement.CalendarVisitsGrid = CalendarVisitsGrid;
    })(PatientManagement = PatientManagement_27.PatientManagement || (PatientManagement_27.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_28) {
    var PatientManagement;
    (function (PatientManagement) {
        var ActivityDialog = (function (_super) {
            __extends(ActivityDialog, _super);
            function ActivityDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PatientManagement.ActivityForm(_this.idPrefix);
                return _this;
            }
            ActivityDialog.prototype.getFormKey = function () { return PatientManagement.ActivityForm.formKey; };
            ActivityDialog.prototype.getIdProperty = function () { return PatientManagement.ActivityRow.idProperty; };
            ActivityDialog.prototype.getLocalTextPrefix = function () { return PatientManagement.ActivityRow.localTextPrefix; };
            ActivityDialog.prototype.getNameProperty = function () { return PatientManagement.ActivityRow.nameProperty; };
            ActivityDialog.prototype.getService = function () { return PatientManagement.ActivityService.baseUrl; };
            return ActivityDialog;
        }(Serenity.EntityDialog));
        ActivityDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ActivityDialog);
        PatientManagement.ActivityDialog = ActivityDialog;
    })(PatientManagement = PatientManagement_28.PatientManagement || (PatientManagement_28.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Membership;
    (function (Membership) {
        var LoginPanel = (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $(function () {
                    $('body').vegas({
                        delay: 10000,
                        cover: true,
                        overlay: Q.resolveUrl("~/Scripts/vegas/overlays/01.png"),
                        slides: [
                            { src: Q.resolveUrl('~/Content/site/slides/slide1.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/Content/site/slides/slide2.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/Content/site/slides/slide3.jpg'), transition: 'zoomOut' },
                            { src: Q.resolveUrl('~/Content/site/slides/slide4.jpg'), transition: 'blur' }
                        ]
                    });
                });
                _this.form = new Membership.LoginForm(_this.idPrefix);
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            var q = Q.parseQueryString();
                            var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                            if (returnUrl) {
                                window.location.href = returnUrl;
                            }
                            else {
                                window.location.href = Q.resolveUrl('~/');
                            }
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            return LoginPanel;
        }(Serenity.PropertyPanel));
        LoginPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], LoginPanel);
        Membership.LoginPanel = LoginPanel;
    })(Membership = PatientManagement.Membership || (PatientManagement.Membership = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        SignUpPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], SignUpPanel);
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = PatientManagement.Membership || (PatientManagement.Membership = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        ResetPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ResetPasswordPanel);
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = PatientManagement.Membership || (PatientManagement.Membership = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        ForgotPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ForgotPasswordPanel);
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = PatientManagement.Membership || (PatientManagement.Membership = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        ChangePasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ChangePasswordPanel);
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = PatientManagement.Membership || (PatientManagement.Membership = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = PatientManagement.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = PatientManagement.LanguageList || (PatientManagement.LanguageList = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var PatientManagement;
(function (PatientManagement) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('PatientManagement');
        Serenity.EntityDialog.defaultLanguageList = PatientManagement.LanguageList.getValue;
    })(ScriptInitialization = PatientManagement.ScriptInitialization || (PatientManagement.ScriptInitialization = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var ReportDialog = (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var ReportPage = (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var LanguageSelection = (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference types="jqueryui" />
var PatientManagement;
(function (PatientManagement_29) {
    var PatientManagement;
    (function (PatientManagement) {
        var NotificationDropdownMenu = (function (_super) {
            __extends(NotificationDropdownMenu, _super);
            function NotificationDropdownMenu(elem, opt) {
                var _this = _super.call(this, elem, opt) || this;
                _this.updateNotifications = function () {
                    PatientManagement.NotificationsService.ListForDropdown({}, function (resp) {
                        _this.byId('NotificationCounterLabel').text(resp.Entities.length);
                        var notifactionList = _this.byId('NotificationDropdownMenuMessages');
                        notifactionList.children().remove();
                        if (resp.Entities.length > 0) {
                            var index = 0;
                            _this.notificationIds = new Array();
                            for (var t1 = 0; t1 < resp.Entities.length; t1++) {
                                var item = resp.Entities[t1];
                                _this.notificationIds.push(item.NotificationId);
                                var a = $('<a/>');
                                var div = "<div class='pull-left'><img src='" + item.InsertUserPicture + "' class='img-circle' alt='User Image'></div>";
                                a.append(div);
                                //TODO Fix date
                                var dateInserted = Q.formatDate(item.InsertDate);
                                var userH4 = "<h4><div>" + item.InsertUserDisplayName + "</div><small> <i class='fa fa-clock-o'> </i> " + dateInserted + "</small></h4>";
                                a.append(userH4);
                                var p = $('<p/>').text(item.Text);
                                a.append(p);
                                notifactionList.append(a);
                            }
                        }
                        else {
                            var a = $('<a/>');
                            var h4 = $('<h4/>');
                            h4.text(Q.text("Site.Layout.NoNotificationMenu"));
                            a.append(h4);
                            notifactionList.append(a);
                        }
                        _this.markAsSeen();
                    });
                };
                _this.byId('NotificationDropdownMenuHeader').text(Q.text("Site.Layout.NotificationMenuHeader"));
                _this.byId('NotificationDropdownMenuFooter').text(Q.text("Site.Layout.NotificationMenuFooter"));
                var toggleMenuButton = _this.byId('NotificationDropdownMenuToggle');
                toggleMenuButton.click(function (e) { return _this.openClick(e); });
                PatientManagement.NotificationsService.CountNotifications({}, function (resp) {
                    _this.byId('NotificationCounterLabel').text(resp);
                });
                return _this;
            }
            NotificationDropdownMenu.prototype.getService = function () { return PatientManagement.NotificationsService.baseUrl; };
            ;
            NotificationDropdownMenu.prototype.openClick = function (e) {
                e.preventDefault();
                if ($('#NotificationDropdownMenu').hasClass("open"))
                    return;
                //if (this.byId('Preloader').length) {
                this.updateNotifications();
            };
            NotificationDropdownMenu.prototype.markAsSeen = function () {
                var _this = this;
                var entities = new Array();
                for (var id in this.notificationIds) {
                    var entity = {};
                    entity.NotificationId = this.notificationIds[Number(id)];
                    if (entities.indexOf(this.notificationIds[Number(id)]) > -1)
                        return;
                    entities.push(entity);
                }
                PatientManagement.UserNotificationsService.CreateList({
                    Entity: entities
                }, function (resp) {
                    _this.byId('NotificationCounterLabel').text(0);
                });
            };
            return NotificationDropdownMenu;
        }(Serenity.TemplatedWidget));
        PatientManagement.NotificationDropdownMenu = NotificationDropdownMenu;
    })(PatientManagement = PatientManagement_29.PatientManagement || (PatientManagement_29.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var RecieveNotificationToggle = (function (_super) {
            __extends(RecieveNotificationToggle, _super);
            function RecieveNotificationToggle(input, opt) {
                var _this = _super.call(this, input, opt) || this;
                console.log(_this.options.state);
                _this.options.onSwitchChange = function (event, state) {
                    $.cookie('NotificationPreference', state, {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                };
                _this.options.onText = Q.text("Site.Layout.RecieveNotificationToggleOn");
                _this.options.offText = Q.text("Site.Layout.RecieveNotificationToggleOff");
                _this.options.onColor = "success";
                _this.options.offColor = "warning";
                input.attr('type', 'checkbox').bootstrapSwitch(_this.options);
                return _this;
            }
            return RecieveNotificationToggle;
        }(Serenity.Widget));
        Common.RecieveNotificationToggle = RecieveNotificationToggle;
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var SidebarSearch = (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var ThemeSelection = (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    $.cookie('ThemePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + select.val());
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var BasicProgressDialog = (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    PatientManagement.BasicProgressDialog = BasicProgressDialog;
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var BsSwitchEditor = (function (_super) {
        __extends(BsSwitchEditor, _super);
        function BsSwitchEditor(element, opt) {
            var _this = _super.call(this, element, opt) || this;
            _this.options.size = "mini";
            element.attr('type', 'checkbox').bootstrapSwitch(_this.options);
            return _this;
        }
        BsSwitchEditor.prototype.setEditValue = function (source, property) {
            if (this.element.hasClass('required'))
                this.element.removeClass('required');
            this.element.bootstrapSwitch('state', source[property.name]);
        };
        BsSwitchEditor.prototype.getEditValue = function (property, target) {
            target[property.name] = this.element.bootstrapSwitch('state');
        };
        return BsSwitchEditor;
    }(Serenity.Widget));
    BsSwitchEditor = __decorate([
        Serenity.Decorators.element('<input type="checkbox"/>'),
        Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue])
    ], BsSwitchEditor);
    PatientManagement.BsSwitchEditor = BsSwitchEditor;
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var BulkServiceAction = (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new PatientManagement.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.bind('dialogbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        element.dialog().dialog('close');
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = PatientManagement.DialogUtils || (PatientManagement.DialogUtils = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            return EnumSelectFormatter;
        }());
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "enumKey", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "allowClear", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
        EnumSelectFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], EnumSelectFormatter);
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.title, 'Excel'),
                    title: Q.coalesce(options.hint, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var GridEditorBase = (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            return GridEditorBase;
        }(Serenity.EntityGrid));
        GridEditorBase = __decorate([
            Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
            Serenity.Decorators.editor(),
            Serenity.Decorators.element("<div/>")
        ], GridEditorBase);
        Common.GridEditorBase = GridEditorBase;
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var GridEditorDialog = (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        GridEditorDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], GridEditorDialog);
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        RoleCheckEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], RoleCheckEditor);
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        UserRoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserRoleDialog);
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this.rolePermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.rolePermissions[x.Key]); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.rolePermissions[item.Key]);
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            PermissionCheckEditor.prototype.get_value = function () {
                var result = [];
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                        result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.set_value = function (value) {
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.GrantRevoke = null;
                }
                if (value != null) {
                    for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                        var row = value_1[_b];
                        var r = this.view.getItemById(row.PermissionKey);
                        if (r) {
                            r.GrantRevoke = Q.coalesce(row.Granted, true);
                        }
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor.prototype.get_rolePermissions = function () {
                return Object.keys(this.rolePermissions);
            };
            PermissionCheckEditor.prototype.set_rolePermissions = function (value) {
                this.rolePermissions = {};
                if (value) {
                    for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                        var k = value_2[_i];
                        this.rolePermissions[k] = true;
                    }
                }
                this.setItems(this.getItems());
            };
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        PermissionCheckEditor = __decorate([
            Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
        ], PermissionCheckEditor);
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities);
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.set_rolePermissions(response.Entities);
                });
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.get_value(),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        UserPermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserPermissionDialog);
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var UserDialog = (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getPropertyItems = function () {
                var items = _super.prototype.getPropertyItems.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenants"))
                    items = items.filter(function (x) { return x.name != Administration.UserRow.Fields.TenantId; });
                return items;
            };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'icon-people text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            return UserDialog;
        }(Serenity.EntityDialog));
        UserDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserDialog);
        Administration.UserDialog = UserDialog;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var UserGrid = (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return [Administration.UserRow.Fields.Username];
            };
            return UserGrid;
        }(Serenity.EntityGrid));
        UserGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], UserGrid);
        Administration.UserGrid = UserGrid;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = PatientManagement.Authorization || (PatientManagement.Authorization = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return RSVP.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            return TranslationGrid;
        }(Serenity.EntityGrid));
        TranslationGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TranslationGrid);
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var TenantDialog = (function (_super) {
            __extends(TenantDialog, _super);
            function TenantDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.TenantForm(_this.idPrefix);
                return _this;
            }
            TenantDialog.prototype.getFormKey = function () { return Administration.TenantForm.formKey; };
            TenantDialog.prototype.getIdProperty = function () { return Administration.TenantRow.idProperty; };
            TenantDialog.prototype.getLocalTextPrefix = function () { return Administration.TenantRow.localTextPrefix; };
            TenantDialog.prototype.getNameProperty = function () { return Administration.TenantRow.nameProperty; };
            TenantDialog.prototype.getService = function () { return Administration.TenantService.baseUrl; };
            return TenantDialog;
        }(Serenity.EntityDialog));
        TenantDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], TenantDialog);
        Administration.TenantDialog = TenantDialog;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var TenantGrid = (function (_super) {
            __extends(TenantGrid, _super);
            function TenantGrid(container) {
                return _super.call(this, container) || this;
            }
            TenantGrid.prototype.getColumnsKey = function () { return 'Administration.Tenant'; };
            TenantGrid.prototype.getDialogType = function () { return Administration.TenantDialog; };
            TenantGrid.prototype.getIdProperty = function () { return Administration.TenantRow.idProperty; };
            TenantGrid.prototype.getLocalTextPrefix = function () { return Administration.TenantRow.localTextPrefix; };
            TenantGrid.prototype.getService = function () { return Administration.TenantService.baseUrl; };
            return TenantGrid;
        }(Serenity.EntityGrid));
        TenantGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TenantGrid);
        Administration.TenantGrid = TenantGrid;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var SubscriptionsDialog = (function (_super) {
            __extends(SubscriptionsDialog, _super);
            function SubscriptionsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.SubscriptionsForm(_this.idPrefix);
                return _this;
            }
            SubscriptionsDialog.prototype.getFormKey = function () { return Administration.SubscriptionsForm.formKey; };
            SubscriptionsDialog.prototype.getIdProperty = function () { return Administration.SubscriptionsRow.idProperty; };
            SubscriptionsDialog.prototype.getLocalTextPrefix = function () { return Administration.SubscriptionsRow.localTextPrefix; };
            SubscriptionsDialog.prototype.getNameProperty = function () { return Administration.SubscriptionsRow.nameProperty; };
            SubscriptionsDialog.prototype.getService = function () { return Administration.SubscriptionsService.baseUrl; };
            return SubscriptionsDialog;
        }(Serenity.EntityDialog));
        SubscriptionsDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], SubscriptionsDialog);
        Administration.SubscriptionsDialog = SubscriptionsDialog;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var SubscriptionsGrid = (function (_super) {
            __extends(SubscriptionsGrid, _super);
            function SubscriptionsGrid(container) {
                return _super.call(this, container) || this;
            }
            SubscriptionsGrid.prototype.getColumnsKey = function () { return 'Administration.Subscriptions'; };
            SubscriptionsGrid.prototype.getDialogType = function () { return Administration.SubscriptionsDialog; };
            SubscriptionsGrid.prototype.getIdProperty = function () { return Administration.SubscriptionsRow.idProperty; };
            SubscriptionsGrid.prototype.getLocalTextPrefix = function () { return Administration.SubscriptionsRow.localTextPrefix; };
            SubscriptionsGrid.prototype.getService = function () { return Administration.SubscriptionsService.baseUrl; };
            return SubscriptionsGrid;
        }(Serenity.EntityGrid));
        SubscriptionsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SubscriptionsGrid);
        Administration.SubscriptionsGrid = SubscriptionsGrid;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var SergenPanel = (function (_super) {
            __extends(SergenPanel, _super);
            function SergenPanel(container) {
                var _this = _super.call(this, container) || this;
                var vm = new Vue({
                    el: $('<div/>').appendTo(_this.element)[0],
                    data: {
                        connection: "",
                        connections: [],
                        tables: [],
                        generate: {
                            Row: true,
                            Service: true,
                            UI: true
                        }
                    },
                    methods: {
                        generateCode: function (table) {
                            if (!table.Identifier) {
                                Q.notifyError("Identifier cannot be empty!");
                                return;
                            }
                            if (!table.Module) {
                                Q.notifyError("Module cannot be empty!");
                                return;
                            }
                            Administration.SergenService.Generate({
                                ConnectionKey: this.connection,
                                Table: table,
                                GenerateOptions: this.generate
                            }, function (r) {
                                Q.notifySuccess("Code for selected table is generated. You'll need to rebuild your project.");
                            });
                        }
                    },
                    watch: {
                        connection: function (val) {
                            if (!val || !val.length)
                                vm.tables = [];
                            else
                                Administration.SergenService.ListTables({
                                    ConnectionKey: val
                                }, function (response) { return vm.tables = response.Entities; });
                        }
                    },
                    template: Q.getTemplate('Administration.SergenPanel')
                });
                Administration.SergenService.ListConnections({}, function (response) { return vm.connections = response.Entities; });
                return _this;
            }
            return SergenPanel;
        }(Serenity.Widget));
        Administration.SergenPanel = SergenPanel;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities.map(function (x) { return ({ PermissionKey: x }); }));
                });
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.get_value().map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        RolePermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RolePermissionDialog);
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var RoleDialog = (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            return RoleDialog;
        }(Serenity.EntityDialog));
        RoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleDialog);
        Administration.RoleDialog = RoleDialog;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var RoleGrid = (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            return RoleGrid;
        }(Serenity.EntityGrid));
        RoleGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleGrid);
        Administration.RoleGrid = RoleGrid;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var PaymentsDetailsDialog = (function (_super) {
            __extends(PaymentsDetailsDialog, _super);
            function PaymentsDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.PaymentsDetailsForm(_this.idPrefix);
                return _this;
            }
            PaymentsDetailsDialog.prototype.getFormKey = function () { return Administration.PaymentsDetailsForm.formKey; };
            PaymentsDetailsDialog.prototype.getIdProperty = function () { return Administration.PaymentsDetailsRow.idProperty; };
            PaymentsDetailsDialog.prototype.getLocalTextPrefix = function () { return Administration.PaymentsDetailsRow.localTextPrefix; };
            PaymentsDetailsDialog.prototype.getNameProperty = function () { return Administration.PaymentsDetailsRow.nameProperty; };
            PaymentsDetailsDialog.prototype.getService = function () { return Administration.PaymentsDetailsService.baseUrl; };
            return PaymentsDetailsDialog;
        }(Serenity.EntityDialog));
        PaymentsDetailsDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], PaymentsDetailsDialog);
        Administration.PaymentsDetailsDialog = PaymentsDetailsDialog;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var PaymentsDetailsGrid = (function (_super) {
            __extends(PaymentsDetailsGrid, _super);
            function PaymentsDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            PaymentsDetailsGrid.prototype.getColumnsKey = function () { return 'Administration.PaymentsDetails'; };
            PaymentsDetailsGrid.prototype.getDialogType = function () { return Administration.PaymentsDetailsDialog; };
            PaymentsDetailsGrid.prototype.getIdProperty = function () { return Administration.PaymentsDetailsRow.idProperty; };
            PaymentsDetailsGrid.prototype.getLocalTextPrefix = function () { return Administration.PaymentsDetailsRow.localTextPrefix; };
            PaymentsDetailsGrid.prototype.getService = function () { return Administration.PaymentsDetailsService.baseUrl; };
            return PaymentsDetailsGrid;
        }(Serenity.EntityGrid));
        PaymentsDetailsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], PaymentsDetailsGrid);
        Administration.PaymentsDetailsGrid = PaymentsDetailsGrid;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var PaymentsDialog = (function (_super) {
            __extends(PaymentsDialog, _super);
            function PaymentsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.PaymentsForm(_this.idPrefix);
                return _this;
                //this.form.SubscriptionId.changeSelect2(e => {
                //    //var customerID = this.form.SubscriptionId.value;
                //    //SubscriptionsService.Retrieve({
                //    //    EntityId: customerID
                //    //}, response => {
                //    //    this.setCustomerDetails(response.Entity);
                //    //});
                //    console.log("hey")
                //});
            }
            PaymentsDialog.prototype.getFormKey = function () { return Administration.PaymentsForm.formKey; };
            PaymentsDialog.prototype.getIdProperty = function () { return Administration.PaymentsRow.idProperty; };
            PaymentsDialog.prototype.getLocalTextPrefix = function () { return Administration.PaymentsRow.localTextPrefix; };
            PaymentsDialog.prototype.getNameProperty = function () { return Administration.PaymentsRow.nameProperty; };
            PaymentsDialog.prototype.getService = function () { return Administration.PaymentsService.baseUrl; };
            PaymentsDialog.prototype.setCustomerDetails = function (details) {
            };
            return PaymentsDialog;
        }(Serenity.EntityDialog));
        PaymentsDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], PaymentsDialog);
        Administration.PaymentsDialog = PaymentsDialog;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var PaymentsGrid = (function (_super) {
            __extends(PaymentsGrid, _super);
            function PaymentsGrid(container) {
                return _super.call(this, container) || this;
            }
            PaymentsGrid.prototype.getColumnsKey = function () { return 'Administration.Payments'; };
            PaymentsGrid.prototype.getDialogType = function () { return Administration.PaymentsDialog; };
            PaymentsGrid.prototype.getIdProperty = function () { return Administration.PaymentsRow.idProperty; };
            PaymentsGrid.prototype.getLocalTextPrefix = function () { return Administration.PaymentsRow.localTextPrefix; };
            PaymentsGrid.prototype.getService = function () { return Administration.PaymentsService.baseUrl; };
            return PaymentsGrid;
        }(Serenity.EntityGrid));
        PaymentsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], PaymentsGrid);
        Administration.PaymentsGrid = PaymentsGrid;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var PaymentOptionsDialog = (function (_super) {
            __extends(PaymentOptionsDialog, _super);
            function PaymentOptionsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.PaymentOptionsForm(_this.idPrefix);
                return _this;
            }
            PaymentOptionsDialog.prototype.getFormKey = function () { return Administration.PaymentOptionsForm.formKey; };
            PaymentOptionsDialog.prototype.getIdProperty = function () { return Administration.PaymentOptionsRow.idProperty; };
            PaymentOptionsDialog.prototype.getLocalTextPrefix = function () { return Administration.PaymentOptionsRow.localTextPrefix; };
            PaymentOptionsDialog.prototype.getNameProperty = function () { return Administration.PaymentOptionsRow.nameProperty; };
            PaymentOptionsDialog.prototype.getService = function () { return Administration.PaymentOptionsService.baseUrl; };
            return PaymentOptionsDialog;
        }(Serenity.EntityDialog));
        PaymentOptionsDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], PaymentOptionsDialog);
        Administration.PaymentOptionsDialog = PaymentOptionsDialog;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var PaymentOptionsGrid = (function (_super) {
            __extends(PaymentOptionsGrid, _super);
            function PaymentOptionsGrid(container) {
                return _super.call(this, container) || this;
            }
            PaymentOptionsGrid.prototype.getColumnsKey = function () { return 'Administration.PaymentOptions'; };
            PaymentOptionsGrid.prototype.getDialogType = function () { return Administration.PaymentOptionsDialog; };
            PaymentOptionsGrid.prototype.getIdProperty = function () { return Administration.PaymentOptionsRow.idProperty; };
            PaymentOptionsGrid.prototype.getLocalTextPrefix = function () { return Administration.PaymentOptionsRow.localTextPrefix; };
            PaymentOptionsGrid.prototype.getService = function () { return Administration.PaymentOptionsService.baseUrl; };
            return PaymentOptionsGrid;
        }(Serenity.EntityGrid));
        PaymentOptionsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], PaymentOptionsGrid);
        Administration.PaymentOptionsGrid = PaymentOptionsGrid;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var OffersDialog = (function (_super) {
            __extends(OffersDialog, _super);
            function OffersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.OffersForm(_this.idPrefix);
                return _this;
            }
            OffersDialog.prototype.getFormKey = function () { return Administration.OffersForm.formKey; };
            OffersDialog.prototype.getIdProperty = function () { return Administration.OffersRow.idProperty; };
            OffersDialog.prototype.getLocalTextPrefix = function () { return Administration.OffersRow.localTextPrefix; };
            OffersDialog.prototype.getNameProperty = function () { return Administration.OffersRow.nameProperty; };
            OffersDialog.prototype.getService = function () { return Administration.OffersService.baseUrl; };
            return OffersDialog;
        }(Serenity.EntityDialog));
        OffersDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], OffersDialog);
        Administration.OffersDialog = OffersDialog;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var OffersGrid = (function (_super) {
            __extends(OffersGrid, _super);
            function OffersGrid(container) {
                return _super.call(this, container) || this;
            }
            OffersGrid.prototype.getColumnsKey = function () { return 'Administration.Offers'; };
            OffersGrid.prototype.getDialogType = function () { return Administration.OffersDialog; };
            OffersGrid.prototype.getIdProperty = function () { return Administration.OffersRow.idProperty; };
            OffersGrid.prototype.getLocalTextPrefix = function () { return Administration.OffersRow.localTextPrefix; };
            OffersGrid.prototype.getService = function () { return Administration.OffersService.baseUrl; };
            return OffersGrid;
        }(Serenity.EntityGrid));
        OffersGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], OffersGrid);
        Administration.OffersGrid = OffersGrid;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            return LanguageDialog;
        }(Serenity.EntityDialog));
        LanguageDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageDialog);
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return [Administration.LanguageRow.Fields.LanguageName];
            };
            return LanguageGrid;
        }(Serenity.EntityGrid));
        LanguageGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageGrid);
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var CurrenciesDialog = (function (_super) {
            __extends(CurrenciesDialog, _super);
            function CurrenciesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.CurrenciesForm(_this.idPrefix);
                return _this;
            }
            CurrenciesDialog.prototype.getFormKey = function () { return Administration.CurrenciesForm.formKey; };
            CurrenciesDialog.prototype.getIdProperty = function () { return Administration.CurrenciesRow.idProperty; };
            CurrenciesDialog.prototype.getLocalTextPrefix = function () { return Administration.CurrenciesRow.localTextPrefix; };
            CurrenciesDialog.prototype.getNameProperty = function () { return Administration.CurrenciesRow.nameProperty; };
            CurrenciesDialog.prototype.getService = function () { return Administration.CurrenciesService.baseUrl; };
            return CurrenciesDialog;
        }(Serenity.EntityDialog));
        CurrenciesDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], CurrenciesDialog);
        Administration.CurrenciesDialog = CurrenciesDialog;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference types="jqueryui" />
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var CurrenciesGrid = (function (_super) {
            __extends(CurrenciesGrid, _super);
            function CurrenciesGrid(container) {
                return _super.call(this, container) || this;
            }
            CurrenciesGrid.prototype.getColumnsKey = function () { return 'Administration.Currencies'; };
            CurrenciesGrid.prototype.getDialogType = function () { return Administration.CurrenciesDialog; };
            CurrenciesGrid.prototype.getIdProperty = function () { return Administration.CurrenciesRow.idProperty; };
            CurrenciesGrid.prototype.getLocalTextPrefix = function () { return Administration.CurrenciesRow.localTextPrefix; };
            CurrenciesGrid.prototype.getService = function () { return Administration.CurrenciesService.baseUrl; };
            CurrenciesGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: 'Update All Currencies ',
                    cssClass: 'multiple-add-button',
                    onClick: function () {
                        Q.confirm("Are You sure that you want to update all Currencies?", function () {
                            var joined = "";
                            var url = "http://api.fixer.io/latest";
                            var entities = Administration.CurrenciesService.List({}, function (response) {
                                joined = response.Entities.map(function (o) { return o.CurrencyId; }).join(',');
                                ;
                                if (response.Entities.length > 1) {
                                    url = url + "?symbols=" + joined;
                                }
                                $.get(url, function (data) {
                                    for (var curr in data.rates) {
                                        var row = {};
                                        row.CurrencyId = curr;
                                        row.BaseCurrencyId = 1;
                                        row.Rate = data.rates[curr];
                                        Administration.CurrenciesService.UpdateAllCurrencies({
                                            Entity: row
                                        }, function (response) {
                                            $('.refresh-button').click();
                                        });
                                    }
                                });
                            });
                        });
                    }
                });
                return buttons;
            };
            return CurrenciesGrid;
        }(Serenity.EntityGrid));
        CurrenciesGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CurrenciesGrid);
        Administration.CurrenciesGrid = CurrenciesGrid;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var CurrenciesForm = (function (_super) {
            __extends(CurrenciesForm, _super);
            function CurrenciesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CurrenciesForm;
        }(Serenity.PrefixedContext));
        CurrenciesForm.formKey = 'Administration.Currencies';
        Administration.CurrenciesForm = CurrenciesForm;
        [['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(CurrenciesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var CurrenciesRow;
        (function (CurrenciesRow) {
            CurrenciesRow.idProperty = 'Id';
            CurrenciesRow.nameProperty = 'CurrencyId';
            CurrenciesRow.localTextPrefix = 'Administration.Currencies';
            var Fields;
            (function (Fields) {
            })(Fields = CurrenciesRow.Fields || (CurrenciesRow.Fields = {}));
            ['Id', 'CurrencyId', 'Name', 'Rate', 'Enabled', 'BaseCurrencyId', 'UpdateUserId', 'UpdateDateField'].forEach(function (x) { return Fields[x] = x; });
        })(CurrenciesRow = Administration.CurrenciesRow || (Administration.CurrenciesRow = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var CurrenciesService;
        (function (CurrenciesService) {
            CurrenciesService.baseUrl = 'Administration/Currencies';
            var Methods;
            (function (Methods) {
            })(Methods = CurrenciesService.Methods || (CurrenciesService.Methods = {}));
            ['Create', 'Update', 'UpdateAllCurrencies', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CurrenciesService[x] = function (r, s, o) { return Q.serviceRequest(CurrenciesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CurrenciesService.baseUrl + '/' + x;
            });
        })(CurrenciesService = Administration.CurrenciesService || (Administration.CurrenciesService = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var LanguageForm = (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return LanguageForm;
        }(Serenity.PrefixedContext));
        LanguageForm.formKey = 'Administration.Language';
        Administration.LanguageForm = LanguageForm;
        [['LanguageId', function () { return Serenity.StringEditor; }], ['LanguageName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(LanguageForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LanguageRow.Fields || (LanguageRow.Fields = {}));
            ['Id', 'LanguageId', 'LanguageName'].forEach(function (x) { return Fields[x] = x; });
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            var Methods;
            (function (Methods) {
            })(Methods = LanguageService.Methods || (LanguageService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                LanguageService[x] = function (r, s, o) { return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = LanguageService.baseUrl + '/' + x;
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var OfferLangRow;
        (function (OfferLangRow) {
            OfferLangRow.idProperty = 'Id';
            OfferLangRow.nameProperty = 'OfferName';
            OfferLangRow.localTextPrefix = 'Administration.OfferLang';
            var Fields;
            (function (Fields) {
            })(Fields = OfferLangRow.Fields || (OfferLangRow.Fields = {}));
            ['Id', 'OfferId', 'LanguageId', 'OfferName', 'Description'].forEach(function (x) { return Fields[x] = x; });
        })(OfferLangRow = Administration.OfferLangRow || (Administration.OfferLangRow = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var OfferLangService;
        (function (OfferLangService) {
            OfferLangService.baseUrl = 'Administration/OfferLang';
            var Methods;
            (function (Methods) {
            })(Methods = OfferLangService.Methods || (OfferLangService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                OfferLangService[x] = function (r, s, o) { return Q.serviceRequest(OfferLangService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = OfferLangService.baseUrl + '/' + x;
            });
        })(OfferLangService = Administration.OfferLangService || (Administration.OfferLangService = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var OffersForm = (function (_super) {
            __extends(OffersForm, _super);
            function OffersForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return OffersForm;
        }(Serenity.PrefixedContext));
        OffersForm.formKey = 'Administration.Offers';
        Administration.OffersForm = OffersForm;
        [['Name', function () { return Serenity.StringEditor; }], ['MaximumSubscriptionTime', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['CurrencyId', function () { return Serenity.IntegerEditor; }], ['RoleId', function () { return Serenity.IntegerEditor; }], ['UpdateUserId', function () { return Serenity.IntegerEditor; }], ['UpdateDateField', function () { return Serenity.DateEditor; }]].forEach(function (x) { return Object.defineProperty(OffersForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var OffersRow;
        (function (OffersRow) {
            OffersRow.idProperty = 'OfferId';
            OffersRow.nameProperty = 'Name';
            OffersRow.localTextPrefix = 'Administration.Offers';
            var Fields;
            (function (Fields) {
            })(Fields = OffersRow.Fields || (OffersRow.Fields = {}));
            ['OfferId', 'Name', 'MaximumSubscriptionTime', 'Description', 'CurrencyId', 'RoleId', 'UpdateUserId', 'UpdateDateField', 'CurrencyCurrencyId', 'CurrencyName', 'CurrencyRate', 'CurrencyEnabled', 'CurrencyBaseCurrencyId', 'CurrencyUpdateUserId', 'CurrencyUpdateDateField', 'RoleRoleName', 'RoleTenantId'].forEach(function (x) { return Fields[x] = x; });
        })(OffersRow = Administration.OffersRow || (Administration.OffersRow = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var OffersService;
        (function (OffersService) {
            OffersService.baseUrl = 'Administration/Offers';
            var Methods;
            (function (Methods) {
            })(Methods = OffersService.Methods || (OffersService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                OffersService[x] = function (r, s, o) { return Q.serviceRequest(OffersService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = OffersService.baseUrl + '/' + x;
            });
        })(OffersService = Administration.OffersService || (Administration.OffersService = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var PaymentOptionsForm = (function (_super) {
            __extends(PaymentOptionsForm, _super);
            function PaymentOptionsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PaymentOptionsForm;
        }(Serenity.PrefixedContext));
        PaymentOptionsForm.formKey = 'Administration.PaymentOptions';
        Administration.PaymentOptionsForm = PaymentOptionsForm;
        [['Days', function () { return Serenity.IntegerEditor; }], ['Name', function () { return Serenity.StringEditor; }], ['InsertUserId', function () { return Serenity.IntegerEditor; }], ['InsertDate', function () { return Serenity.DateEditor; }], ['UpdateUserId', function () { return Serenity.IntegerEditor; }], ['UpdateDateField', function () { return Serenity.DateEditor; }]].forEach(function (x) { return Object.defineProperty(PaymentOptionsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var PaymentOptionsRow;
        (function (PaymentOptionsRow) {
            PaymentOptionsRow.idProperty = 'PaymentOptionId';
            PaymentOptionsRow.nameProperty = 'Name';
            PaymentOptionsRow.localTextPrefix = 'Administration.PaymentOptions';
            var Fields;
            (function (Fields) {
            })(Fields = PaymentOptionsRow.Fields || (PaymentOptionsRow.Fields = {}));
            ['PaymentOptionId', 'Days', 'Name', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDateField'].forEach(function (x) { return Fields[x] = x; });
        })(PaymentOptionsRow = Administration.PaymentOptionsRow || (Administration.PaymentOptionsRow = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var PaymentOptionsService;
        (function (PaymentOptionsService) {
            PaymentOptionsService.baseUrl = 'Administration/PaymentOptions';
            var Methods;
            (function (Methods) {
            })(Methods = PaymentOptionsService.Methods || (PaymentOptionsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PaymentOptionsService[x] = function (r, s, o) { return Q.serviceRequest(PaymentOptionsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PaymentOptionsService.baseUrl + '/' + x;
            });
        })(PaymentOptionsService = Administration.PaymentOptionsService || (Administration.PaymentOptionsService = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var PaymentsDetailsForm = (function (_super) {
            __extends(PaymentsDetailsForm, _super);
            function PaymentsDetailsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PaymentsDetailsForm;
        }(Serenity.PrefixedContext));
        PaymentsDetailsForm.formKey = 'Administration.PaymentsDetails';
        Administration.PaymentsDetailsForm = PaymentsDetailsForm;
        [['BeneficiaryName', function () { return Serenity.StringEditor; }], ['BankName', function () { return Serenity.StringEditor; }], ['IbanBeneficient', function () { return Serenity.StringEditor; }], ['TenantId', function () { return Serenity.IntegerEditor; }], ['InsertUserId', function () { return Serenity.IntegerEditor; }], ['InsertDate', function () { return Serenity.DateEditor; }], ['UpdateUserId', function () { return Serenity.IntegerEditor; }], ['UpdateDateField', function () { return Serenity.DateEditor; }]].forEach(function (x) { return Object.defineProperty(PaymentsDetailsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var PaymentsDetailsRow;
        (function (PaymentsDetailsRow) {
            PaymentsDetailsRow.idProperty = 'PaymentDetailsId';
            PaymentsDetailsRow.nameProperty = 'BeneficiaryName';
            PaymentsDetailsRow.localTextPrefix = 'Administration.PaymentsDetails';
            var Fields;
            (function (Fields) {
            })(Fields = PaymentsDetailsRow.Fields || (PaymentsDetailsRow.Fields = {}));
            ['PaymentDetailsId', 'BeneficiaryName', 'BankName', 'IbanBeneficient', 'TenantId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDateField'].forEach(function (x) { return Fields[x] = x; });
        })(PaymentsDetailsRow = Administration.PaymentsDetailsRow || (Administration.PaymentsDetailsRow = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var PaymentsDetailsService;
        (function (PaymentsDetailsService) {
            PaymentsDetailsService.baseUrl = 'Administration/PaymentsDetails';
            var Methods;
            (function (Methods) {
            })(Methods = PaymentsDetailsService.Methods || (PaymentsDetailsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PaymentsDetailsService[x] = function (r, s, o) { return Q.serviceRequest(PaymentsDetailsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PaymentsDetailsService.baseUrl + '/' + x;
            });
        })(PaymentsDetailsService = Administration.PaymentsDetailsService || (Administration.PaymentsDetailsService = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var PaymentsForm = (function (_super) {
            __extends(PaymentsForm, _super);
            function PaymentsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PaymentsForm;
        }(Serenity.PrefixedContext));
        PaymentsForm.formKey = 'Administration.Payments';
        Administration.PaymentsForm = PaymentsForm;
        [['SubscriptionId', function () { return Serenity.IntegerEditor; }], ['TenantId', function () { return Serenity.IntegerEditor; }], ['PaymentDetailsId', function () { return Serenity.IntegerEditor; }], ['PaymentOptionId', function () { return Serenity.IntegerEditor; }], ['CurrencyId', function () { return Serenity.IntegerEditor; }], ['Value', function () { return Serenity.DecimalEditor; }], ['RoleBefore', function () { return Serenity.StringEditor; }], ['RoleAfter', function () { return Serenity.StringEditor; }], ['PaymentStatus', function () { return Serenity.IntegerEditor; }], ['InsertUserId', function () { return Serenity.IntegerEditor; }], ['InsertDate', function () { return Serenity.DateEditor; }], ['UpdateUserId', function () { return Serenity.IntegerEditor; }], ['UpdateDateField', function () { return Serenity.DateEditor; }]].forEach(function (x) { return Object.defineProperty(PaymentsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var PaymentsRow;
        (function (PaymentsRow) {
            PaymentsRow.idProperty = 'PaymentId';
            PaymentsRow.nameProperty = 'RoleBefore';
            PaymentsRow.localTextPrefix = 'Administration.Payments';
            var Fields;
            (function (Fields) {
            })(Fields = PaymentsRow.Fields || (PaymentsRow.Fields = {}));
            ['PaymentId', 'SubscriptionId', 'TenantId', 'PaymentDetailsId', 'PaymentOptionId', 'CurrencyId', 'Value', 'RoleBefore', 'RoleAfter', 'PaymentStatus', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDateField', 'SubscriptionOfferId', 'SubscriptionTenantId', 'SubscriptionSubscriptionEndDate', 'SubscriptionInsertUserId', 'SubscriptionInsertDate', 'SubscriptionUpdateUserId', 'SubscriptionUpdateDateField', 'PaymentDetailsBeneficiaryName', 'PaymentDetailsBankName', 'PaymentDetailsIbanBeneficient', 'PaymentDetailsTenantId', 'PaymentDetailsInsertUserId', 'PaymentDetailsInsertDate', 'PaymentDetailsUpdateUserId', 'PaymentDetailsUpdateDateField', 'PaymentOptionDays', 'PaymentOptionName', 'PaymentOptionInsertUserId', 'PaymentOptionInsertDate', 'PaymentOptionUpdateUserId', 'PaymentOptionUpdateDateField', 'CurrencyCurrencyId', 'CurrencyName', 'CurrencyRate', 'CurrencyEnabled', 'CurrencyBaseCurrencyId', 'CurrencyUpdateUserId', 'CurrencyUpdateDateField'].forEach(function (x) { return Fields[x] = x; });
        })(PaymentsRow = Administration.PaymentsRow || (Administration.PaymentsRow = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var PaymentsService;
        (function (PaymentsService) {
            PaymentsService.baseUrl = 'Administration/Payments';
            var Methods;
            (function (Methods) {
            })(Methods = PaymentsService.Methods || (PaymentsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PaymentsService[x] = function (r, s, o) { return Q.serviceRequest(PaymentsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PaymentsService.baseUrl + '/' + x;
            });
        })(PaymentsService = Administration.PaymentsService || (Administration.PaymentsService = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var RoleForm = (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return RoleForm;
        }(Serenity.PrefixedContext));
        RoleForm.formKey = 'Administration.Role';
        Administration.RoleForm = RoleForm;
        [['RoleName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RoleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionRow.Fields || (RolePermissionRow.Fields = {}));
            ['RolePermissionId', 'RoleId', 'PermissionKey', 'RoleRoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            var Methods;
            (function (Methods) {
            })(Methods = RolePermissionService.Methods || (RolePermissionService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) { return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RolePermissionService.baseUrl + '/' + x;
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleRow.Fields || (RoleRow.Fields = {}));
            ['RoleId', 'RoleName', 'TenantId'].forEach(function (x) { return Fields[x] = x; });
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            var Methods;
            (function (Methods) {
            })(Methods = RoleService.Methods || (RoleService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RoleService[x] = function (r, s, o) { return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RoleService.baseUrl + '/' + x;
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var SergenService;
        (function (SergenService) {
            SergenService.baseUrl = 'Administration/Sergen';
            var Methods;
            (function (Methods) {
            })(Methods = SergenService.Methods || (SergenService.Methods = {}));
            ['ListConnections', 'ListTables', 'Generate'].forEach(function (x) {
                SergenService[x] = function (r, s, o) { return Q.serviceRequest(SergenService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SergenService.baseUrl + '/' + x;
            });
        })(SergenService = Administration.SergenService || (Administration.SergenService = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var SubscriptionsForm = (function (_super) {
            __extends(SubscriptionsForm, _super);
            function SubscriptionsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SubscriptionsForm;
        }(Serenity.PrefixedContext));
        SubscriptionsForm.formKey = 'Administration.Subscriptions';
        Administration.SubscriptionsForm = SubscriptionsForm;
        [['Name', function () { return Serenity.StringEditor; }], ['OfferId', function () { return Serenity.IntegerEditor; }], ['TenantId', function () { return Serenity.IntegerEditor; }], ['SubscriptionEndDate', function () { return Serenity.DateEditor; }], ['InsertUserId', function () { return Serenity.IntegerEditor; }], ['InsertDate', function () { return Serenity.DateEditor; }], ['UpdateUserId', function () { return Serenity.IntegerEditor; }], ['UpdateDateField', function () { return Serenity.DateEditor; }]].forEach(function (x) { return Object.defineProperty(SubscriptionsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var SubscriptionsRow;
        (function (SubscriptionsRow) {
            SubscriptionsRow.idProperty = 'SubscriptionId';
            SubscriptionsRow.nameProperty = 'Name';
            SubscriptionsRow.localTextPrefix = 'Administration.Subscriptions';
            var Fields;
            (function (Fields) {
            })(Fields = SubscriptionsRow.Fields || (SubscriptionsRow.Fields = {}));
            ['SubscriptionId', 'Name', 'OfferId', 'TenantId', 'SubscriptionEndDate', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDateField', 'OfferName', 'OfferMaximumSubscriptionTime', 'OfferMaximumUsersPerTenant', 'OfferMaximumVisitsPerTenant', 'OfferExpirationDate', 'OfferDescription', 'OfferPrice', 'OfferEnabled', 'OfferCurrencyId', 'OfferRoleId', 'OfferUpdateUserId', 'OfferUpdateDateField'].forEach(function (x) { return Fields[x] = x; });
        })(SubscriptionsRow = Administration.SubscriptionsRow || (Administration.SubscriptionsRow = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var SubscriptionsService;
        (function (SubscriptionsService) {
            SubscriptionsService.baseUrl = 'Administration/Subscriptions';
            var Methods;
            (function (Methods) {
            })(Methods = SubscriptionsService.Methods || (SubscriptionsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SubscriptionsService[x] = function (r, s, o) { return Q.serviceRequest(SubscriptionsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SubscriptionsService.baseUrl + '/' + x;
            });
        })(SubscriptionsService = Administration.SubscriptionsService || (Administration.SubscriptionsService = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var TenantForm = (function (_super) {
            __extends(TenantForm, _super);
            function TenantForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return TenantForm;
        }(Serenity.PrefixedContext));
        TenantForm.formKey = 'Administration.Tenant';
        Administration.TenantForm = TenantForm;
        [['TenantName', function () { return Serenity.StringEditor; }], ['CurrencyId', function () { return Serenity.IntegerEditor; }], ['SubscriptionRequired', function () { return Serenity.BooleanEditor; }], ['SubscriptionId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(TenantForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var TenantRow;
        (function (TenantRow) {
            TenantRow.idProperty = 'TenantId';
            TenantRow.nameProperty = 'TenantName';
            TenantRow.localTextPrefix = 'Administration.Tenant';
            var Fields;
            (function (Fields) {
            })(Fields = TenantRow.Fields || (TenantRow.Fields = {}));
            ['TenantId', 'TenantName', 'CurrencyId', 'SubscriptionRequired', 'SubscriptionId', 'SubscriptionOfferId', 'SubscriptionTenantId', 'SubscriptionSubscriptionEndDate', 'SubscriptionInsertUserId', 'SubscriptionInsertDate', 'SubscriptionUpdateUserId', 'SubscriptionUpdateDateField'].forEach(function (x) { return Fields[x] = x; });
        })(TenantRow = Administration.TenantRow || (Administration.TenantRow = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var TenantService;
        (function (TenantService) {
            TenantService.baseUrl = 'Administration/Tenant';
            var Methods;
            (function (Methods) {
            })(Methods = TenantService.Methods || (TenantService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TenantService[x] = function (r, s, o) { return Q.serviceRequest(TenantService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TenantService.baseUrl + '/' + x;
            });
        })(TenantService = Administration.TenantService || (Administration.TenantService = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            var Methods;
            (function (Methods) {
            })(Methods = TranslationService.Methods || (TranslationService.Methods = {}));
            ['List', 'Update'].forEach(function (x) {
                TranslationService[x] = function (r, s, o) { return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TranslationService.baseUrl + '/' + x;
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var UserForm = (function (_super) {
            __extends(UserForm, _super);
            function UserForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return UserForm;
        }(Serenity.PrefixedContext));
        UserForm.formKey = 'Administration.User';
        Administration.UserForm = UserForm;
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['UserImage', function () { return Serenity.ImageUploadEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['PasswordConfirm', function () { return Serenity.PasswordEditor; }], ['Source', function () { return Serenity.StringEditor; }], ['TenantId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(UserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionRow.Fields || (UserPermissionRow.Fields = {}));
            ['UserPermissionId', 'UserId', 'PermissionKey', 'Granted', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            var Methods;
            (function (Methods) {
            })(Methods = UserPermissionService.Methods || (UserPermissionService.Methods = {}));
            ['Update', 'List', 'ListRolePermissions', 'ListPermissionKeys'].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) { return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPermissionService.baseUrl + '/' + x;
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            var Fields;
            (function (Fields) {
            })(Fields = UserRoleRow.Fields || (UserRoleRow.Fields = {}));
            ['UserRoleId', 'UserId', 'RoleId', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            var Methods;
            (function (Methods) {
            })(Methods = UserRoleService.Methods || (UserRoleService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) { return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserRoleService.baseUrl + '/' + x;
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            ['UserId', 'Username', 'Source', 'PasswordHash', 'PasswordSalt', 'DisplayName', 'Email', 'UserImage', 'LastDirectoryUpdate', 'IsActive', 'Password', 'PasswordConfirm', 'TenantId', 'TenantName', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            var Methods;
            (function (Methods) {
            })(Methods = UserService.Methods || (UserService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Undelete', 'Retrieve', 'List'].forEach(function (x) {
                UserService[x] = function (r, s, o) { return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserService.baseUrl + '/' + x;
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            var Fields;
            (function (Fields) {
            })(Fields = UserPreferenceRow.Fields || (UserPreferenceRow.Fields = {}));
            ['UserPreferenceId', 'UserId', 'PreferenceType', 'Name', 'Value'].forEach(function (x) { return Fields[x] = x; });
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            var Methods;
            (function (Methods) {
            })(Methods = UserPreferenceService.Methods || (UserPreferenceService.Methods = {}));
            ['Update', 'Retrieve'].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) { return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPreferenceService.baseUrl + '/' + x;
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        ChangePasswordForm.formKey = 'Membership.ChangePassword';
        Membership.ChangePasswordForm = ChangePasswordForm;
        [['OldPassword', function () { return Serenity.PasswordEditor; }], ['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ChangePasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = PatientManagement.Membership || (PatientManagement.Membership = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
        Membership.ForgotPasswordForm = ForgotPasswordForm;
        [['Email', function () { return Serenity.EmailEditor; }]].forEach(function (x) { return Object.defineProperty(ForgotPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = PatientManagement.Membership || (PatientManagement.Membership = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Membership;
    (function (Membership) {
        var LoginForm = (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return LoginForm;
        }(Serenity.PrefixedContext));
        LoginForm.formKey = 'Membership.Login';
        Membership.LoginForm = LoginForm;
        [['Username', function () { return Serenity.StringEditor; }], ['Password', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(LoginForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = PatientManagement.Membership || (PatientManagement.Membership = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        ResetPasswordForm.formKey = 'Membership.ResetPassword';
        Membership.ResetPasswordForm = ResetPasswordForm;
        [['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ResetPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = PatientManagement.Membership || (PatientManagement.Membership = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Membership;
    (function (Membership) {
        var SignUpForm = (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SignUpForm;
        }(Serenity.PrefixedContext));
        SignUpForm.formKey = 'Membership.SignUp';
        Membership.SignUpForm = SignUpForm;
        [['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ConfirmEmail', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(SignUpForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = PatientManagement.Membership || (PatientManagement.Membership = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_30) {
    var PatientManagement;
    (function (PatientManagement) {
        var ActivityForm = (function (_super) {
            __extends(ActivityForm, _super);
            function ActivityForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ActivityForm;
        }(Serenity.PrefixedContext));
        ActivityForm.formKey = 'PatientManagement.Activity';
        PatientManagement.ActivityForm = ActivityForm;
        [['MovementAndTraining', function () { return Serenity.TextAreaEditor; }], ['Profession', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(ActivityForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PatientManagement = PatientManagement_30.PatientManagement || (PatientManagement_30.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_31) {
    var PatientManagement;
    (function (PatientManagement) {
        var ActivityRow;
        (function (ActivityRow) {
            ActivityRow.idProperty = 'PatientId';
            ActivityRow.nameProperty = 'MovementAndTraining';
            ActivityRow.localTextPrefix = 'PatientManagement.Activity';
            ActivityRow.lookupKey = 'PatientManagement.LifeStyles';
            function getLookup() {
                return Q.getLookup('PatientManagement.LifeStyles');
            }
            ActivityRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ActivityRow.Fields || (ActivityRow.Fields = {}));
            ['PatientId', 'MovementAndTraining', 'Profession', 'InsertUserId', 'InsertDate'].forEach(function (x) { return Fields[x] = x; });
        })(ActivityRow = PatientManagement.ActivityRow || (PatientManagement.ActivityRow = {}));
    })(PatientManagement = PatientManagement_31.PatientManagement || (PatientManagement_31.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_32) {
    var PatientManagement;
    (function (PatientManagement) {
        var ActivityService;
        (function (ActivityService) {
            ActivityService.baseUrl = 'PatientManagement/Activity';
            var Methods;
            (function (Methods) {
            })(Methods = ActivityService.Methods || (ActivityService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ActivityService[x] = function (r, s, o) { return Q.serviceRequest(ActivityService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ActivityService.baseUrl + '/' + x;
            });
        })(ActivityService = PatientManagement.ActivityService || (PatientManagement.ActivityService = {}));
    })(PatientManagement = PatientManagement_32.PatientManagement || (PatientManagement_32.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_33) {
    var PatientManagement;
    (function (PatientManagement) {
        var Gender;
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Gender = PatientManagement.Gender || (PatientManagement.Gender = {}));
        Serenity.Decorators.registerEnum(Gender, 'PatientManagement.PatientManagement.Entities.Gender');
    })(PatientManagement = PatientManagement_33.PatientManagement || (PatientManagement_33.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_34) {
    var PatientManagement;
    (function (PatientManagement) {
        var LifeStylesForm = (function (_super) {
            __extends(LifeStylesForm, _super);
            function LifeStylesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return LifeStylesForm;
        }(Serenity.PrefixedContext));
        LifeStylesForm.formKey = 'PatientManagement.LifeStyles';
        PatientManagement.LifeStylesForm = LifeStylesForm;
        [['PatientId', function () { return Serenity.LookupEditor; }], ['BadHabits', function () { return Serenity.TextAreaEditor; }], ['RemarksForFoodTake', function () { return Serenity.TextAreaEditor; }], ['Regime', function () { return Serenity.TextAreaEditor; }], ['DailyMeals', function () { return Serenity.TextAreaEditor; }], ['FavoriteFood', function () { return Serenity.TextAreaEditor; }], ['NotEating', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(LifeStylesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PatientManagement = PatientManagement_34.PatientManagement || (PatientManagement_34.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_35) {
    var PatientManagement;
    (function (PatientManagement) {
        var LifeStylesRow;
        (function (LifeStylesRow) {
            LifeStylesRow.idProperty = 'PatientId';
            LifeStylesRow.nameProperty = 'Regime';
            LifeStylesRow.localTextPrefix = 'PatientManagement.LifeStyles';
            LifeStylesRow.lookupKey = 'PatientManagement.LifeStyles';
            function getLookup() {
                return Q.getLookup('PatientManagement.LifeStyles');
            }
            LifeStylesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LifeStylesRow.Fields || (LifeStylesRow.Fields = {}));
            ['PatientId', 'RemarksForFoodTake', 'Regime', 'DailyMeals', 'FavoriteFood', 'NotEating', 'BadHabits', 'InsertUserId', 'InsertDate', 'PatientName', 'TenantId'].forEach(function (x) { return Fields[x] = x; });
        })(LifeStylesRow = PatientManagement.LifeStylesRow || (PatientManagement.LifeStylesRow = {}));
    })(PatientManagement = PatientManagement_35.PatientManagement || (PatientManagement_35.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_36) {
    var PatientManagement;
    (function (PatientManagement) {
        var LifeStylesService;
        (function (LifeStylesService) {
            LifeStylesService.baseUrl = 'PatientManagement/LifeStyles';
            var Methods;
            (function (Methods) {
            })(Methods = LifeStylesService.Methods || (LifeStylesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                LifeStylesService[x] = function (r, s, o) { return Q.serviceRequest(LifeStylesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = LifeStylesService.baseUrl + '/' + x;
            });
        })(LifeStylesService = PatientManagement.LifeStylesService || (PatientManagement.LifeStylesService = {}));
    })(PatientManagement = PatientManagement_36.PatientManagement || (PatientManagement_36.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_37) {
    var PatientManagement;
    (function (PatientManagement) {
        var NotesRow;
        (function (NotesRow) {
            NotesRow.idProperty = 'NoteId';
            NotesRow.nameProperty = 'EntityType';
            NotesRow.localTextPrefix = 'PatientManagement.Notes';
            var Fields;
            (function (Fields) {
            })(Fields = NotesRow.Fields || (NotesRow.Fields = {}));
            ['NoteId', 'EntityType', 'EntityId', 'Text', 'InsertUserId', 'InsertDate', 'InsertUserDisplayName'].forEach(function (x) { return Fields[x] = x; });
        })(NotesRow = PatientManagement.NotesRow || (PatientManagement.NotesRow = {}));
    })(PatientManagement = PatientManagement_37.PatientManagement || (PatientManagement_37.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_38) {
    var PatientManagement;
    (function (PatientManagement) {
        var NotificationsForm = (function (_super) {
            __extends(NotificationsForm, _super);
            function NotificationsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return NotificationsForm;
        }(Serenity.PrefixedContext));
        NotificationsForm.formKey = 'PatientManagement.Notifications';
        PatientManagement.NotificationsForm = NotificationsForm;
        [['EntityType', function () { return Serenity.StringEditor; }], ['EntityId', function () { return Serenity.IntegerEditor; }], ['Text', function () { return Serenity.StringEditor; }], ['InsertUserId', function () { return Serenity.IntegerEditor; }], ['InsertDate', function () { return Serenity.DateEditor; }]].forEach(function (x) { return Object.defineProperty(NotificationsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PatientManagement = PatientManagement_38.PatientManagement || (PatientManagement_38.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_39) {
    var PatientManagement;
    (function (PatientManagement) {
        var NotificationsRow;
        (function (NotificationsRow) {
            NotificationsRow.idProperty = 'NotificationId';
            NotificationsRow.nameProperty = 'EntityType';
            NotificationsRow.localTextPrefix = 'PatientManagement.Notifications';
            var Fields;
            (function (Fields) {
            })(Fields = NotificationsRow.Fields || (NotificationsRow.Fields = {}));
            ['NotificationId', 'EntityType', 'EntityId', 'Text', 'InsertUserId', 'InsertUserDisplayName', 'InsertUserPicture', 'InsertDate', 'InsertDateFormated'].forEach(function (x) { return Fields[x] = x; });
        })(NotificationsRow = PatientManagement.NotificationsRow || (PatientManagement.NotificationsRow = {}));
    })(PatientManagement = PatientManagement_39.PatientManagement || (PatientManagement_39.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_40) {
    var PatientManagement;
    (function (PatientManagement) {
        var NotificationsService;
        (function (NotificationsService) {
            NotificationsService.baseUrl = 'PatientManagement/Notifications';
            var Methods;
            (function (Methods) {
            })(Methods = NotificationsService.Methods || (NotificationsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'CountNotifications', 'ListForDropdown'].forEach(function (x) {
                NotificationsService[x] = function (r, s, o) { return Q.serviceRequest(NotificationsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = NotificationsService.baseUrl + '/' + x;
            });
        })(NotificationsService = PatientManagement.NotificationsService || (PatientManagement.NotificationsService = {}));
    })(PatientManagement = PatientManagement_40.PatientManagement || (PatientManagement_40.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_41) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientHealthForm = (function (_super) {
            __extends(PatientHealthForm, _super);
            function PatientHealthForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PatientHealthForm;
        }(Serenity.PrefixedContext));
        PatientHealthForm.formKey = 'PatientManagement.PatientHealth';
        PatientManagement.PatientHealthForm = PatientHealthForm;
        [['PatientId', function () { return Serenity.LookupEditor; }], ['Diseases', function () { return Serenity.TextAreaEditor; }], ['MedicinesIntake', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(PatientHealthForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PatientManagement = PatientManagement_41.PatientManagement || (PatientManagement_41.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_42) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientHealthRow;
        (function (PatientHealthRow) {
            PatientHealthRow.idProperty = 'PatientId';
            PatientHealthRow.nameProperty = 'Diseases';
            PatientHealthRow.localTextPrefix = 'PatientManagement.PatientHealth';
            PatientHealthRow.lookupKey = 'PatientManagement.PatientHealth';
            function getLookup() {
                return Q.getLookup('PatientManagement.PatientHealth');
            }
            PatientHealthRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PatientHealthRow.Fields || (PatientHealthRow.Fields = {}));
            ['PatientId', 'Diseases', 'MedicinesIntake', 'InsertUserId', 'InsertDate', 'PatientName', 'TenantId'].forEach(function (x) { return Fields[x] = x; });
        })(PatientHealthRow = PatientManagement.PatientHealthRow || (PatientManagement.PatientHealthRow = {}));
    })(PatientManagement = PatientManagement_42.PatientManagement || (PatientManagement_42.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_43) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientHealthService;
        (function (PatientHealthService) {
            PatientHealthService.baseUrl = 'PatientManagement/PatientHealth';
            var Methods;
            (function (Methods) {
            })(Methods = PatientHealthService.Methods || (PatientHealthService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PatientHealthService[x] = function (r, s, o) { return Q.serviceRequest(PatientHealthService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PatientHealthService.baseUrl + '/' + x;
            });
        })(PatientHealthService = PatientManagement.PatientHealthService || (PatientManagement.PatientHealthService = {}));
    })(PatientManagement = PatientManagement_43.PatientManagement || (PatientManagement_43.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_44) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientsFileUploadsForm = (function (_super) {
            __extends(PatientsFileUploadsForm, _super);
            function PatientsFileUploadsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PatientsFileUploadsForm;
        }(Serenity.PrefixedContext));
        PatientsFileUploadsForm.formKey = 'PatientManagement.PatientsFileUploads';
        PatientManagement.PatientsFileUploadsForm = PatientsFileUploadsForm;
        [['PatientId', function () { return Serenity.LookupEditor; }], ['Description', function () { return Serenity.TextAreaEditor; }], ['FilePath', function () { return Serenity.MultipleImageUploadEditor; }]].forEach(function (x) { return Object.defineProperty(PatientsFileUploadsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PatientManagement = PatientManagement_44.PatientManagement || (PatientManagement_44.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_45) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientsFileUploadsRow;
        (function (PatientsFileUploadsRow) {
            PatientsFileUploadsRow.idProperty = 'PatientFileUploadId';
            PatientsFileUploadsRow.nameProperty = 'FilePath';
            PatientsFileUploadsRow.localTextPrefix = 'PatientManagement.PatientsFileUploads';
            PatientsFileUploadsRow.lookupKey = 'PatientManagement.PatientsFileUploads';
            function getLookup() {
                return Q.getLookup('PatientManagement.PatientsFileUploads');
            }
            PatientsFileUploadsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PatientsFileUploadsRow.Fields || (PatientsFileUploadsRow.Fields = {}));
            ['PatientFileUploadId', 'PatientId', 'FilePath', 'Description', 'InsertUserId', 'InsertDate', 'PatientName', 'TenantId'].forEach(function (x) { return Fields[x] = x; });
        })(PatientsFileUploadsRow = PatientManagement.PatientsFileUploadsRow || (PatientManagement.PatientsFileUploadsRow = {}));
    })(PatientManagement = PatientManagement_45.PatientManagement || (PatientManagement_45.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_46) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientsFileUploadsService;
        (function (PatientsFileUploadsService) {
            PatientsFileUploadsService.baseUrl = 'PatientManagement/PatientsFileUploads';
            var Methods;
            (function (Methods) {
            })(Methods = PatientsFileUploadsService.Methods || (PatientsFileUploadsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PatientsFileUploadsService[x] = function (r, s, o) { return Q.serviceRequest(PatientsFileUploadsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PatientsFileUploadsService.baseUrl + '/' + x;
            });
        })(PatientsFileUploadsService = PatientManagement.PatientsFileUploadsService || (PatientManagement.PatientsFileUploadsService = {}));
    })(PatientManagement = PatientManagement_46.PatientManagement || (PatientManagement_46.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_47) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientsForm = (function (_super) {
            __extends(PatientsForm, _super);
            function PatientsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PatientsForm;
        }(Serenity.PrefixedContext));
        PatientsForm.formKey = 'PatientManagement.Patients';
        PatientManagement.PatientsForm = PatientsForm;
        [['PatientId', function () { return Serenity.IntegerEditor; }], ['Name', function () { return Serenity.StringEditor; }], ['Gender', function () { return Serenity.EnumEditor; }], ['PersonalNumber', function () { return Serenity.StringEditor; }], ['PhoneNumber', function () { return Serenity.StringEditor; }], ['FirstRegistrationDate', function () { return Serenity.DateTimeEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['Height', function () { return Serenity.IntegerEditor; }], ['Weight', function () { return Serenity.IntegerEditor; }], ['WantedWeight', function () { return Serenity.StringEditor; }], ['NoteList', function () { return PatientManagement.NotesEditor; }]].forEach(function (x) { return Object.defineProperty(PatientsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PatientManagement = PatientManagement_47.PatientManagement || (PatientManagement_47.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_48) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientsRow;
        (function (PatientsRow) {
            PatientsRow.idProperty = 'PatientId';
            PatientsRow.nameProperty = 'Name';
            PatientsRow.localTextPrefix = 'PatientManagement.Patients';
            PatientsRow.lookupKey = 'PatientManagement.Patients';
            function getLookup() {
                return Q.getLookup('PatientManagement.Patients');
            }
            PatientsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PatientsRow.Fields || (PatientsRow.Fields = {}));
            ['PatientId', 'Name', 'PersonalNumber', 'PhoneNumber', 'Gender', 'FirstRegistrationDate', 'Address', 'Height', 'Weight', 'WantedWeight', 'InsertUserId', 'InsertDate', 'NoteList', 'TenantId'].forEach(function (x) { return Fields[x] = x; });
        })(PatientsRow = PatientManagement.PatientsRow || (PatientManagement.PatientsRow = {}));
    })(PatientManagement = PatientManagement_48.PatientManagement || (PatientManagement_48.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_49) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientsService;
        (function (PatientsService) {
            PatientsService.baseUrl = 'PatientManagement/Patients';
            var Methods;
            (function (Methods) {
            })(Methods = PatientsService.Methods || (PatientsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PatientsService[x] = function (r, s, o) { return Q.serviceRequest(PatientsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PatientsService.baseUrl + '/' + x;
            });
        })(PatientsService = PatientManagement.PatientsService || (PatientManagement.PatientsService = {}));
    })(PatientManagement = PatientManagement_49.PatientManagement || (PatientManagement_49.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_50) {
    var PatientManagement;
    (function (PatientManagement) {
        var UserNotificationsForm = (function (_super) {
            __extends(UserNotificationsForm, _super);
            function UserNotificationsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return UserNotificationsForm;
        }(Serenity.PrefixedContext));
        UserNotificationsForm.formKey = 'PatientManagement.UserNotifications';
        PatientManagement.UserNotificationsForm = UserNotificationsForm;
        [['NotificationId', function () { return Serenity.IntegerEditor; }], ['SeenAt', function () { return Serenity.DateEditor; }], ['UserId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(UserNotificationsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PatientManagement = PatientManagement_50.PatientManagement || (PatientManagement_50.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_51) {
    var PatientManagement;
    (function (PatientManagement) {
        var UserNotificationsRow;
        (function (UserNotificationsRow) {
            UserNotificationsRow.idProperty = 'UserNotificationId';
            UserNotificationsRow.localTextPrefix = 'PatientManagement.UserNotifications';
            var Fields;
            (function (Fields) {
            })(Fields = UserNotificationsRow.Fields || (UserNotificationsRow.Fields = {}));
            ['UserNotificationId', 'NotificationId', 'SeenAt', 'UserId', 'NotificationEntityType', 'NotificationEntityId', 'NotificationText', 'NotificationInsertUserId', 'NotificationInsertDate', 'NotificationTenantId'].forEach(function (x) { return Fields[x] = x; });
        })(UserNotificationsRow = PatientManagement.UserNotificationsRow || (PatientManagement.UserNotificationsRow = {}));
    })(PatientManagement = PatientManagement_51.PatientManagement || (PatientManagement_51.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_52) {
    var PatientManagement;
    (function (PatientManagement) {
        var UserNotificationsService;
        (function (UserNotificationsService) {
            UserNotificationsService.baseUrl = 'PatientManagement/UserNotifications';
            var Methods;
            (function (Methods) {
            })(Methods = UserNotificationsService.Methods || (UserNotificationsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'CreateList'].forEach(function (x) {
                UserNotificationsService[x] = function (r, s, o) { return Q.serviceRequest(UserNotificationsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserNotificationsService.baseUrl + '/' + x;
            });
        })(UserNotificationsService = PatientManagement.UserNotificationsService || (PatientManagement.UserNotificationsService = {}));
    })(PatientManagement = PatientManagement_52.PatientManagement || (PatientManagement_52.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_53) {
    var PatientManagement;
    (function (PatientManagement) {
        var VisitsForm = (function (_super) {
            __extends(VisitsForm, _super);
            function VisitsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return VisitsForm;
        }(Serenity.PrefixedContext));
        VisitsForm.formKey = 'PatientManagement.Visits';
        PatientManagement.VisitsForm = VisitsForm;
        [['PatientId', function () { return Serenity.LookupEditor; }], ['VisitTypeId', function () { return Serenity.LookupEditor; }], ['StartDate', function () { return Serenity.DateTimeEditor; }], ['EndDate', function () { return Serenity.DateTimeEditor; }], ['Description', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(VisitsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PatientManagement = PatientManagement_53.PatientManagement || (PatientManagement_53.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_54) {
    var PatientManagement;
    (function (PatientManagement) {
        var VisitsRow;
        (function (VisitsRow) {
            VisitsRow.idProperty = 'VisitId';
            VisitsRow.localTextPrefix = 'PatientManagement.Visits';
            VisitsRow.lookupKey = 'PatientManagement.Visits';
            function getLookup() {
                return Q.getLookup('PatientManagement.Visits');
            }
            VisitsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = VisitsRow.Fields || (VisitsRow.Fields = {}));
            ['VisitId', 'PatientId', 'VisitTypeId', 'Description', 'StartDate', 'EndDate', 'InsertUserId', 'InsertDate', 'PatientGender', 'PhoneNumber', 'PatientName', 'VisitTypeName', 'VisitTypeBackgroundColor', 'VisitTypeBorderColor', 'TenantId'].forEach(function (x) { return Fields[x] = x; });
        })(VisitsRow = PatientManagement.VisitsRow || (PatientManagement.VisitsRow = {}));
    })(PatientManagement = PatientManagement_54.PatientManagement || (PatientManagement_54.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_55) {
    var PatientManagement;
    (function (PatientManagement) {
        var VisitsService;
        (function (VisitsService) {
            VisitsService.baseUrl = 'PatientManagement/Visits';
            var Methods;
            (function (Methods) {
            })(Methods = VisitsService.Methods || (VisitsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                VisitsService[x] = function (r, s, o) { return Q.serviceRequest(VisitsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = VisitsService.baseUrl + '/' + x;
            });
        })(VisitsService = PatientManagement.VisitsService || (PatientManagement.VisitsService = {}));
    })(PatientManagement = PatientManagement_55.PatientManagement || (PatientManagement_55.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_56) {
    var PatientManagement;
    (function (PatientManagement) {
        var VisitTypesForm = (function (_super) {
            __extends(VisitTypesForm, _super);
            function VisitTypesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return VisitTypesForm;
        }(Serenity.PrefixedContext));
        VisitTypesForm.formKey = 'PatientManagement.VisitTypes';
        PatientManagement.VisitTypesForm = VisitTypesForm;
        [['Name', function () { return Serenity.StringEditor; }], ['BorderColor', function () { return Serenity.StringEditor; }], ['BackgroundColor', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(VisitTypesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PatientManagement = PatientManagement_56.PatientManagement || (PatientManagement_56.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_57) {
    var PatientManagement;
    (function (PatientManagement) {
        var VisitTypesRow;
        (function (VisitTypesRow) {
            VisitTypesRow.idProperty = 'VisitTypeId';
            VisitTypesRow.nameProperty = 'Name';
            VisitTypesRow.localTextPrefix = 'PatientManagement.VisitTypes';
            VisitTypesRow.lookupKey = 'PatientManagement.VisitTypes';
            function getLookup() {
                return Q.getLookup('PatientManagement.VisitTypes');
            }
            VisitTypesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = VisitTypesRow.Fields || (VisitTypesRow.Fields = {}));
            ['VisitTypeId', 'Name', 'BorderColor', 'BackgroundColor', 'InsertUserId', 'InsertDate', 'TenantId'].forEach(function (x) { return Fields[x] = x; });
        })(VisitTypesRow = PatientManagement.VisitTypesRow || (PatientManagement.VisitTypesRow = {}));
    })(PatientManagement = PatientManagement_57.PatientManagement || (PatientManagement_57.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_58) {
    var PatientManagement;
    (function (PatientManagement) {
        var VisitTypesService;
        (function (VisitTypesService) {
            VisitTypesService.baseUrl = 'PatientManagement/VisitTypes';
            var Methods;
            (function (Methods) {
            })(Methods = VisitTypesService.Methods || (VisitTypesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                VisitTypesService[x] = function (r, s, o) { return Q.serviceRequest(VisitTypesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = VisitTypesService.baseUrl + '/' + x;
            });
        })(VisitTypesService = PatientManagement.VisitTypesService || (PatientManagement.VisitTypesService = {}));
    })(PatientManagement = PatientManagement_58.PatientManagement || (PatientManagement_58.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
//# sourceMappingURL=PatientManagement.Web.js.map