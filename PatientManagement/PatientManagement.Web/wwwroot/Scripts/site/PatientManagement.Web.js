var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var CouponsForm = (function (_super) {
            __extends(CouponsForm, _super);
            function CouponsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CouponsForm;
        }(Serenity.PrefixedContext));
        CouponsForm.formKey = 'Administration.Coupons';
        Administration.CouponsForm = CouponsForm;
        [['Key', function () { return Serenity.StringEditor; }], ['Name', function () { return Serenity.StringEditor; }], ['Discount', function () { return Serenity.IntegerEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['EndDate', function () { return Serenity.DateEditor; }], ['MaxTimeUsing', function () { return Serenity.IntegerEditor; }], ['IsUsed', function () { return Serenity.IntegerEditor; }], ['IsActive', function () { return PatientManagement.BsSwitchEditor; }]].forEach(function (x) { return Object.defineProperty(CouponsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var CouponsRow;
        (function (CouponsRow) {
            CouponsRow.idProperty = 'CouponId';
            CouponsRow.isActiveProperty = 'IsActive';
            CouponsRow.nameProperty = 'Key';
            CouponsRow.localTextPrefix = 'Administration.Coupons';
            CouponsRow.lookupKey = 'Administration.Coupons';
            function getLookup() {
                return Q.getLookup('Administration.Coupons');
            }
            CouponsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CouponsRow.Fields || (CouponsRow.Fields = {}));
            [
                'CouponId',
                'Key',
                'Name',
                'Discount',
                'Description',
                'EndDate',
                'IsUsed',
                'InsertUserId',
                'InsertDate',
                'UpdateUserId',
                'UpdateDateField',
                'IsActive',
                'MaxTimeUsing',
                'InsertUserName',
                'UpdateUserName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CouponsRow = Administration.CouponsRow || (Administration.CouponsRow = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var CouponsService;
        (function (CouponsService) {
            CouponsService.baseUrl = 'Administration/Coupons';
            var Methods;
            (function (Methods) {
            })(Methods = CouponsService.Methods || (CouponsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CouponsService[x] = function (r, s, o) {
                    return Q.serviceRequest(CouponsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CouponsService.baseUrl + '/' + x;
            });
        })(CouponsService = Administration.CouponsService || (Administration.CouponsService = {}));
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
        [['CurrencyId', function () { return Serenity.StringEditor; }], ['Name', function () { return Serenity.StringEditor; }], ['Rate', function () { return Serenity.DecimalEditor; }], ['Enabled', function () { return PatientManagement.BsSwitchEditor; }], ['BaseCurrencyId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(CurrenciesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
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
            CurrenciesRow.lookupKey = 'Administration.Currencies';
            function getLookup() {
                return Q.getLookup('Administration.Currencies');
            }
            CurrenciesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CurrenciesRow.Fields || (CurrenciesRow.Fields = {}));
            [
                'Id',
                'CurrencyId',
                'Name',
                'Rate',
                'Enabled',
                'BaseCurrencyId',
                'BaseCurrencyName',
                'UpdateUserId',
                'UserName',
                'UpdateDateField'
            ].forEach(function (x) { return Fields[x] = x; });
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
            [
                'Create',
                'Update',
                'UpdateAllCurrencies',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CurrenciesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CurrenciesService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CurrenciesService.baseUrl + '/' + x;
            });
        })(CurrenciesService = Administration.CurrenciesService || (Administration.CurrenciesService = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var ExternalAccessForm = (function (_super) {
            __extends(ExternalAccessForm, _super);
            function ExternalAccessForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ExternalAccessForm;
        }(Serenity.PrefixedContext));
        ExternalAccessForm.formKey = 'Administration.ExternalAccess';
        Administration.ExternalAccessForm = ExternalAccessForm;
        [['Name', function () { return Serenity.StringEditor; }], ['ExternalAccessCabinets', function () { return Serenity.LookupEditor; }], ['AccessType', function () { return Serenity.EnumEditor; }], ['OutputFormat', function () { return Serenity.EnumEditor; }]].forEach(function (x) { return Object.defineProperty(ExternalAccessForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var ExternalAccessRow;
        (function (ExternalAccessRow) {
            ExternalAccessRow.idProperty = 'ExternalAccessId';
            ExternalAccessRow.isActiveProperty = 'IsActive';
            ExternalAccessRow.nameProperty = 'Name';
            ExternalAccessRow.localTextPrefix = 'Administration.ExternalAccess';
            ExternalAccessRow.lookupKey = 'AdministrationTenants.ExternalAccess';
            function getLookup() {
                return Q.getLookup('AdministrationTenants.ExternalAccess');
            }
            ExternalAccessRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ExternalAccessRow.Fields || (ExternalAccessRow.Fields = {}));
            [
                'ExternalAccessCabinets',
                'ExternalAccessId',
                'Name',
                'Url',
                'VisitedCount',
                'AccessType',
                'OutputFormat',
                'TenantId',
                'InsertUserId',
                'InsertDate',
                'UpdateUserId',
                'UpdateDateField',
                'IsActive',
                'TenantName',
                'InsertUserName',
                'UpdateUserName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ExternalAccessRow = Administration.ExternalAccessRow || (Administration.ExternalAccessRow = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var ExternalAccessService;
        (function (ExternalAccessService) {
            ExternalAccessService.baseUrl = 'Administration/ExternalAccess';
            var Methods;
            (function (Methods) {
            })(Methods = ExternalAccessService.Methods || (ExternalAccessService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ExternalAccessService[x] = function (r, s, o) {
                    return Q.serviceRequest(ExternalAccessService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ExternalAccessService.baseUrl + '/' + x;
            });
        })(ExternalAccessService = Administration.ExternalAccessService || (Administration.ExternalAccessService = {}));
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
            [
                'Id',
                'LanguageId',
                'LanguageName'
            ].forEach(function (x) { return Fields[x] = x; });
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
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
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
            OfferLangRow.nameProperty = 'Name';
            OfferLangRow.localTextPrefix = 'Administration.OfferLang';
            var Fields;
            (function (Fields) {
            })(Fields = OfferLangRow.Fields || (OfferLangRow.Fields = {}));
            [
                'Id',
                'OfferId',
                'LanguageId',
                'Name',
                'Description'
            ].forEach(function (x) { return Fields[x] = x; });
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
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OfferLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(OfferLangService.baseUrl + '/' + x, r, s, o);
                };
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
        [['Name', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.TextAreaEditor; }], ['Price', function () { return Serenity.DecimalEditor; }], ['IsPublic', function () { return PatientManagement.BsSwitchEditor; }], ['Enabled', function () { return PatientManagement.BsSwitchEditor; }], ['CurrencyId', function () { return Serenity.LookupEditor; }], ['RoleId', function () { return Serenity.LookupEditor; }], ['ExpirationDate', function () { return Serenity.DateTimeEditor; }], ['MaximumSubscriptionTime', function () { return Serenity.IntegerEditor; }], ['MaximumUsersPerTenant', function () { return Serenity.IntegerEditor; }], ['MaximumVisitsPerTenant', function () { return Serenity.IntegerEditor; }], ['MaximumPatientsPerTenant', function () { return Serenity.IntegerEditor; }], ['MaximumCabinets', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(OffersForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var OffersRow;
        (function (OffersRow) {
            OffersRow.idProperty = 'OfferId';
            OffersRow.isActiveProperty = 'IsActive';
            OffersRow.nameProperty = 'Name';
            OffersRow.localTextPrefix = 'Administration.Offers';
            OffersRow.lookupKey = 'Administration.Offers';
            function getLookup() {
                return Q.getLookup('Administration.Offers');
            }
            OffersRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = OffersRow.Fields || (OffersRow.Fields = {}));
            [
                'OfferId',
                'Name',
                'MaximumSubscriptionTime',
                'MaximumUsersPerTenant',
                'MaximumVisitsPerTenant',
                'MaximumPatientsPerTenant',
                'MaximumCabinets',
                'ExpirationDate',
                'Description',
                'Price',
                'Enabled',
                'CurrencyId',
                'RoleId',
                'CurrencyCurrencyId',
                'CurrencyName',
                'CurrencyEnabled',
                'RoleRoleName',
                'IsPublic',
                'InsertUserId',
                'InsertDate',
                'UpdateUserId',
                'UpdateDateField',
                'IsActive',
                'InsertUserName',
                'UpdateUserName'
            ].forEach(function (x) { return Fields[x] = x; });
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
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OffersService[x] = function (r, s, o) {
                    return Q.serviceRequest(OffersService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = OffersService.baseUrl + '/' + x;
            });
        })(OffersService = Administration.OffersService || (Administration.OffersService = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var PaymentCouponsRow;
        (function (PaymentCouponsRow) {
            PaymentCouponsRow.idProperty = 'PaymentCouponId';
            PaymentCouponsRow.localTextPrefix = 'PaymentCoupons';
            var Fields;
            (function (Fields) {
            })(Fields = PaymentCouponsRow.Fields || (PaymentCouponsRow.Fields = {}));
            [
                'PaymentCouponId',
                'CouponId',
                'PaymentId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(PaymentCouponsRow = Administration.PaymentCouponsRow || (Administration.PaymentCouponsRow = {}));
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
        [['Months', function () { return Serenity.IntegerEditor; }], ['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(PaymentOptionsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
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
            PaymentOptionsRow.lookupKey = 'Administration.PaymentOptions';
            function getLookup() {
                return Q.getLookup('Administration.PaymentOptions');
            }
            PaymentOptionsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PaymentOptionsRow.Fields || (PaymentOptionsRow.Fields = {}));
            [
                'PaymentOptionId',
                'Months',
                'Name',
                'InsertUserId',
                'InsertDate',
                'UpdateUserId',
                'UpdateDateField',
                'InsertUserName',
                'UpdateUserName'
            ].forEach(function (x) { return Fields[x] = x; });
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
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PaymentOptionsService[x] = function (r, s, o) {
                    return Q.serviceRequest(PaymentOptionsService.baseUrl + '/' + x, r, s, o);
                };
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
        [['Name', function () { return Serenity.StringEditor; }], ['PaymentType', function () { return Serenity.EnumEditor; }], ['BeneficiaryName', function () { return Serenity.StringEditor; }], ['BankName', function () { return Serenity.StringEditor; }], ['IbanBeneficient', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(PaymentsDetailsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var PaymentsDetailsRow;
        (function (PaymentsDetailsRow) {
            PaymentsDetailsRow.idProperty = 'PaymentDetailsId';
            PaymentsDetailsRow.nameProperty = 'Name';
            PaymentsDetailsRow.localTextPrefix = 'Administration.PaymentsDetails';
            PaymentsDetailsRow.lookupKey = 'Administration.PaymentsDetails';
            function getLookup() {
                return Q.getLookup('Administration.PaymentsDetails');
            }
            PaymentsDetailsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PaymentsDetailsRow.Fields || (PaymentsDetailsRow.Fields = {}));
            [
                'PaymentDetailsId',
                'BeneficiaryName',
                'BankName',
                'Name',
                'PaymentType',
                'IbanBeneficient',
                'TenantId',
                'InsertUserId',
                'InsertDate',
                'UpdateUserId',
                'UpdateDateField',
                'TenantName',
                'InsertUserName',
                'UpdateUserName'
            ].forEach(function (x) { return Fields[x] = x; });
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
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PaymentsDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(PaymentsDetailsService.baseUrl + '/' + x, r, s, o);
                };
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
        [['PaymentDetailsId', function () { return Serenity.LookupEditor; }], ['CustomerName', function () { return Serenity.StringEditor; }], ['CustomerIban', function () { return Serenity.StringEditor; }], ['SubscriptionId', function () { return Serenity.LookupEditor; }], ['ReasonForPayment', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.TextAreaEditor; }], ['Receiver', function () { return Serenity.StringEditor; }], ['IBANReceiver', function () { return Serenity.StringEditor; }], ['BICReceiver', function () { return Serenity.StringEditor; }], ['BankNameReceiver', function () { return Serenity.StringEditor; }], ['CouponId', function () { return Serenity.LookupEditor; }], ['PaymentOptionId', function () { return Serenity.LookupEditor; }], ['CouponKey', function () { return Serenity.StringEditor; }], ['CurrencyId', function () { return Serenity.LookupEditor; }], ['Value', function () { return Serenity.StringEditor; }], ['PaymentStatus', function () { return Serenity.EnumEditor; }]].forEach(function (x) { return Object.defineProperty(PaymentsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var PaymentsRow;
        (function (PaymentsRow) {
            PaymentsRow.idProperty = 'PaymentId';
            PaymentsRow.nameProperty = 'SubscriptionName';
            PaymentsRow.localTextPrefix = 'Administration.Payments';
            PaymentsRow.lookupKey = 'AdministrationTenants.Payment';
            function getLookup() {
                return Q.getLookup('AdministrationTenants.Payment');
            }
            PaymentsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PaymentsRow.Fields || (PaymentsRow.Fields = {}));
            [
                'PaymentId',
                'SubscriptionId',
                'TenantId',
                'PaymentDetailsId',
                'PaymentOptionId',
                'CurrencyId',
                'Value',
                'SubTotal',
                'CustomerName',
                'CustomerBankName',
                'CustomerIban',
                'ReasonForPayment',
                'Description',
                'Receiver',
                'IBANReceiver',
                'BICReceiver',
                'BankNameReceiver',
                'PaymentStatus',
                'MonthsPayed',
                'PaymentCurrency',
                'PaymentType',
                'SubscriptionOfferId',
                'SubscriptionSubscriptionEndDate',
                'SubscriptionName',
                'PaymentDetailName',
                'PaymentDetailsBankName',
                'PaymentDetailsIbanBeneficient',
                'PaymentOptionMonths',
                'PaymentOptionName',
                'CouponId',
                'CouponKey',
                'CouponDiscount',
                'CurrencyCurrencyId',
                'CurrencyName',
                'CurrencyRate',
                'InsertUserId',
                'InsertDate',
                'UpdateUserId',
                'UpdateDateField',
                'TenantName',
                'InsertUserName',
                'UpdateUserName'
            ].forEach(function (x) { return Fields[x] = x; });
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
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PaymentsService[x] = function (r, s, o) {
                    return Q.serviceRequest(PaymentsService.baseUrl + '/' + x, r, s, o);
                };
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
        [['RoleName', function () { return Serenity.StringEditor; }], ['UsersInRole', function () { return Serenity.LookupEditor; }], ['TenantId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(RoleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
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
            [
                'RolePermissionId',
                'RoleId',
                'PermissionKey',
                'RoleRoleName'
            ].forEach(function (x) { return Fields[x] = x; });
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
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
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
            RoleRow.isActiveProperty = 'IsActive';
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
            [
                'RoleId',
                'RoleName',
                'TenantId',
                'InsertUserId',
                'InsertDate',
                'UpdateUserId',
                'UpdateDateField',
                'IsActive',
                'UsersInRole',
                'TenantName',
                'InsertUserName',
                'UpdateUserName'
            ].forEach(function (x) { return Fields[x] = x; });
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
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = RoleService.baseUrl + '/' + x;
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var SentEmailsForm = (function (_super) {
            __extends(SentEmailsForm, _super);
            function SentEmailsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SentEmailsForm;
        }(Serenity.PrefixedContext));
        SentEmailsForm.formKey = 'Administration.SentEmails';
        Administration.SentEmailsForm = SentEmailsForm;
        [['ToEmail', function () { return PatientManagement.LKCodeDescr; }], ['Subject', function () { return Serenity.StringEditor; }], ['Body', function () { return Serenity.HtmlContentEditor; }]].forEach(function (x) { return Object.defineProperty(SentEmailsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var SentEmailsRow;
        (function (SentEmailsRow) {
            SentEmailsRow.idProperty = 'SentEmailId';
            SentEmailsRow.isActiveProperty = 'IsActive';
            SentEmailsRow.nameProperty = 'FromEmail';
            SentEmailsRow.localTextPrefix = 'Administration.SentEmails';
            SentEmailsRow.lookupKey = 'AdministrationTenants.SentEmails';
            function getLookup() {
                return Q.getLookup('AdministrationTenants.SentEmails');
            }
            SentEmailsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SentEmailsRow.Fields || (SentEmailsRow.Fields = {}));
            [
                'SentEmailId',
                'FromEmail',
                'FromName',
                'Subject',
                'Body',
                'ToEmail',
                'ToName',
                'TenantId',
                'InsertUserId',
                'InsertDate',
                'UpdateUserId',
                'UpdateDateField',
                'IsActive',
                'TenantName',
                'InsertUserName',
                'UpdateUserName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SentEmailsRow = Administration.SentEmailsRow || (Administration.SentEmailsRow = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var SentEmailsService;
        (function (SentEmailsService) {
            SentEmailsService.baseUrl = 'Administration/SentEmails';
            var Methods;
            (function (Methods) {
            })(Methods = SentEmailsService.Methods || (SentEmailsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SentEmailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(SentEmailsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SentEmailsService.baseUrl + '/' + x;
            });
        })(SentEmailsService = Administration.SentEmailsService || (Administration.SentEmailsService = {}));
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
            [
                'ListConnections',
                'ListTables',
                'Generate'
            ].forEach(function (x) {
                SergenService[x] = function (r, s, o) {
                    return Q.serviceRequest(SergenService.baseUrl + '/' + x, r, s, o);
                };
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
        [['Name', function () { return Serenity.StringEditor; }], ['OfferId', function () { return Serenity.LookupEditor; }], ['SubscriptionEndDate', function () { return Serenity.DateEditor; }], ['Enabled', function () { return PatientManagement.BsSwitchEditor; }], ['FreeDaysFromOffer', function () { return Serenity.IntegerEditor; }], ['TenantId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(SubscriptionsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var SubscriptionsRow;
        (function (SubscriptionsRow) {
            SubscriptionsRow.idProperty = 'SubscriptionId';
            SubscriptionsRow.isActiveProperty = 'IsActive';
            SubscriptionsRow.nameProperty = 'Name';
            SubscriptionsRow.localTextPrefix = 'Administration.Subscriptions';
            SubscriptionsRow.lookupKey = 'Administration.Subscriptions';
            function getLookup() {
                return Q.getLookup('Administration.Subscriptions');
            }
            SubscriptionsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SubscriptionsRow.Fields || (SubscriptionsRow.Fields = {}));
            [
                'SubscriptionId',
                'Name',
                'OfferId',
                'TenantId',
                'SubscriptionEndDate',
                'Enabled',
                'FreeDaysFromOffer',
                'IsActive',
                'DeactivatedOn',
                'ActivatedOn',
                'InsertUserId',
                'InsertDate',
                'UpdateUserId',
                'UpdateDateField',
                'OfferName',
                'OfferDescription',
                'OfferPrice',
                'OfferRoleId',
                'TenantName',
                'InsertUserName',
                'UpdateUserName'
            ].forEach(function (x) { return Fields[x] = x; });
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
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SubscriptionsService[x] = function (r, s, o) {
                    return Q.serviceRequest(SubscriptionsService.baseUrl + '/' + x, r, s, o);
                };
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
        [['TenantName', function () { return Serenity.StringEditor; }], ['TenantImage', function () { return Serenity.ImageUploadEditor; }], ['TenantWebSite', function () { return Serenity.StringEditor; }], ['OverrideUsersEmailSignature', function () { return PatientManagement.BsSwitchEditor; }], ['TenantEmailSignature', function () { return Serenity.HtmlContentEditor; }], ['CurrencyId', function () { return Serenity.LookupEditor; }], ['SubscriptionId', function () { return Serenity.LookupEditor; }], ['SubscriptionRequired', function () { return PatientManagement.BsSwitchEditor; }]].forEach(function (x) { return Object.defineProperty(TenantForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var TenantRow;
        (function (TenantRow) {
            TenantRow.idProperty = 'TenantId';
            TenantRow.isActiveProperty = 'IsActive';
            TenantRow.nameProperty = 'TenantName';
            TenantRow.localTextPrefix = 'Administration.Tenant';
            TenantRow.lookupKey = 'Administration.Tenant';
            function getLookup() {
                return Q.getLookup('Administration.Tenant');
            }
            TenantRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TenantRow.Fields || (TenantRow.Fields = {}));
            [
                'TenantId',
                'TenantName',
                'CurrencyId',
                'CurrencyName',
                'SubscriptionRequired',
                'SubscriptionId',
                'TenantWebSite',
                'TenantImage',
                'OverrideUsersEmailSignature',
                'TenantEmailSignature',
                'SubscriptionOfferId',
                'SubscriptionTenantId',
                'SubscriptionSubscriptionEndDate',
                'SubscriptionInsertUserId',
                'SubscriptionInsertDate',
                'SubscriptionUpdateUserId',
                'SubscriptionUpdateDateField',
                'SubscriptionName',
                'InsertUserId',
                'InsertDate',
                'UpdateUserId',
                'UpdateDateField',
                'InsertUserName',
                'UpdateUserName',
                'IsActive'
            ].forEach(function (x) { return Fields[x] = x; });
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
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TenantService[x] = function (r, s, o) {
                    return Q.serviceRequest(TenantService.baseUrl + '/' + x, r, s, o);
                };
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
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
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
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['Specialties', function () { return Serenity.LookupEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['PasswordConfirm', function () { return Serenity.PasswordEditor; }], ['Cabinets', function () { return Serenity.LookupEditor; }], ['RestrictedToCabinets', function () { return PatientManagement.BsSwitchEditor; }], ['PhoneNumber', function () { return Serenity.StringEditor; }], ['WebSite', function () { return Serenity.StringEditor; }], ['UserImage', function () { return Serenity.ImageUploadEditor; }], ['Info', function () { return Serenity.TextAreaEditor; }], ['EmailSignature', function () { return Serenity.HtmlContentEditor; }], ['Source', function () { return Serenity.StringEditor; }], ['IsActive', function () { return PatientManagement.BsSwitchEditor; }], ['TenantId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(UserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
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
            [
                'UserPermissionId',
                'UserId',
                'PermissionKey',
                'Granted',
                'Username',
                'User'
            ].forEach(function (x) { return Fields[x] = x; });
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
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
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
            [
                'UserRoleId',
                'UserId',
                'RoleId',
                'Username',
                'User'
            ].forEach(function (x) { return Fields[x] = x; });
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
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
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
            [
                'UserId',
                'Username',
                'Source',
                'PasswordHash',
                'PasswordSalt',
                'DisplayName',
                'Email',
                'RestrictedToCabinets',
                'Info',
                'UserImage',
                'LastDirectoryUpdate',
                'IsActive',
                'WebSite',
                'PhoneNumber',
                'EmailSignature',
                'UsersInRole',
                'Cabinets',
                'Specialties',
                'Password',
                'PasswordConfirm',
                'TenantId',
                'TenantName',
                'TenantCurrencyId',
                'InsertUserId',
                'InsertDate',
                'UpdateUserId',
                'UpdateDate'
            ].forEach(function (x) { return Fields[x] = x; });
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
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UserService.baseUrl + '/' + x;
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var HelloModalAddCabinetForm = (function (_super) {
            __extends(HelloModalAddCabinetForm, _super);
            function HelloModalAddCabinetForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return HelloModalAddCabinetForm;
        }(Serenity.PrefixedContext));
        HelloModalAddCabinetForm.formKey = 'Common.HelloModalAddCabinet';
        Common.HelloModalAddCabinetForm = HelloModalAddCabinetForm;
        [['Name', function () { return Serenity.StringEditor; }], ['WorkHoursStart', function () { return Serenity.TimeEditor; }], ['WorkHoursEnd', function () { return Serenity.TimeEditor; }]].forEach(function (x) { return Object.defineProperty(HelloModalAddCabinetForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var HelloModalAddPatientForm = (function (_super) {
            __extends(HelloModalAddPatientForm, _super);
            function HelloModalAddPatientForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return HelloModalAddPatientForm;
        }(Serenity.PrefixedContext));
        HelloModalAddPatientForm.formKey = 'Common.HelloModalAddPatient';
        Common.HelloModalAddPatientForm = HelloModalAddPatientForm;
        [['Name', function () { return Serenity.StringEditor; }], ['Gender', function () { return Serenity.EnumEditor; }], ['PhoneNumber', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['NotifyOnChange', function () { return PatientManagement.BsSwitchEditor; }]].forEach(function (x) { return Object.defineProperty(HelloModalAddPatientForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var HelloModalAddVisitForm = (function (_super) {
            __extends(HelloModalAddVisitForm, _super);
            function HelloModalAddVisitForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return HelloModalAddVisitForm;
        }(Serenity.PrefixedContext));
        HelloModalAddVisitForm.formKey = 'Common.HelloModalAddVisit';
        Common.HelloModalAddVisitForm = HelloModalAddVisitForm;
        [['PatientId', function () { return Serenity.LookupEditor; }], ['VisitTypeId', function () { return Serenity.LookupEditor; }], ['CabinetId', function () { return Serenity.LookupEditor; }], ['StartDate', function () { return Serenity.DateTimeEditor; }], ['EndDate', function () { return Serenity.DateTimeEditor; }], ['Description', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(HelloModalAddVisitForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var HelloModalAddVisitTypeForm = (function (_super) {
            __extends(HelloModalAddVisitTypeForm, _super);
            function HelloModalAddVisitTypeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return HelloModalAddVisitTypeForm;
        }(Serenity.PrefixedContext));
        HelloModalAddVisitTypeForm.formKey = 'Common.HelloModalAddVisitType';
        Common.HelloModalAddVisitTypeForm = HelloModalAddVisitTypeForm;
        [['Name', function () { return Serenity.StringEditor; }], ['BorderColor', function () { return Serenity.StringEditor; }], ['BackgroundColor', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(HelloModalAddVisitTypeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
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
            [
                'UserPreferenceId',
                'UserId',
                'PreferenceType',
                'Name',
                'Value'
            ].forEach(function (x) { return Fields[x] = x; });
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
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
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
        var EditTenantForm = (function (_super) {
            __extends(EditTenantForm, _super);
            function EditTenantForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return EditTenantForm;
        }(Serenity.PrefixedContext));
        EditTenantForm.formKey = 'Membership.EditTenant';
        Membership.EditTenantForm = EditTenantForm;
        [['TenantName', function () { return Serenity.StringEditor; }], ['TenantWebSite', function () { return Serenity.StringEditor; }], ['TenantImage', function () { return Serenity.ImageUploadEditor; }], ['OverrideUsersEmailSignature', function () { return PatientManagement.BsSwitchEditor; }], ['TenantEmailSignature', function () { return Serenity.HtmlContentEditor; }]].forEach(function (x) { return Object.defineProperty(EditTenantForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = PatientManagement.Membership || (PatientManagement.Membership = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Membership;
    (function (Membership) {
        var EditUserProfileForm = (function (_super) {
            __extends(EditUserProfileForm, _super);
            function EditUserProfileForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return EditUserProfileForm;
        }(Serenity.PrefixedContext));
        EditUserProfileForm.formKey = 'Membership.EditUserProfile';
        Membership.EditUserProfileForm = EditUserProfileForm;
        [['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['PhoneNumber', function () { return Serenity.StringEditor; }], ['WebSite', function () { return Serenity.StringEditor; }], ['UserImage', function () { return Serenity.ImageUploadEditor; }], ['Info', function () { return Serenity.TextAreaEditor; }], ['EmailSignature', function () { return Serenity.HtmlContentEditor; }]].forEach(function (x) { return Object.defineProperty(EditUserProfileForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
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
        [['DisplayName', function () { return Serenity.StringEditor; }], ['TenantName', function () { return Serenity.StringEditor; }], ['OfferId', function () { return PatientManagement.PatientManagement.OfferDropDownEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ConfirmEmail', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(SignUpForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = PatientManagement.Membership || (PatientManagement.Membership = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_1) {
    var PatientManagement;
    (function (PatientManagement) {
        var AccessType;
        (function (AccessType) {
            AccessType[AccessType["Public"] = 0] = "Public";
            AccessType[AccessType["Private"] = 1] = "Private";
        })(AccessType = PatientManagement.AccessType || (PatientManagement.AccessType = {}));
        Serenity.Decorators.registerEnum(AccessType, 'PatientManagement.PatientManagement.Entities.AccessType');
    })(PatientManagement = PatientManagement_1.PatientManagement || (PatientManagement_1.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_2) {
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
        [['PatientId', function () { return Serenity.LookupEditor; }], ['MovementAndTraining', function () { return Serenity.TextAreaEditor; }], ['Profession', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(ActivityForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PatientManagement = PatientManagement_2.PatientManagement || (PatientManagement_2.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_3) {
    var PatientManagement;
    (function (PatientManagement) {
        var ActivityRow;
        (function (ActivityRow) {
            ActivityRow.idProperty = 'ActivityId';
            ActivityRow.isActiveProperty = 'IsActive';
            ActivityRow.nameProperty = 'Profession';
            ActivityRow.localTextPrefix = 'PatientManagement.Activity';
            ActivityRow.lookupKey = 'PatientManagement.LifeStyles';
            function getLookup() {
                return Q.getLookup('PatientManagement.LifeStyles');
            }
            ActivityRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ActivityRow.Fields || (ActivityRow.Fields = {}));
            [
                'ActivityId',
                'PatientId',
                'MovementAndTraining',
                'Profession',
                'InsertUserId',
                'InsertDate',
                'UpdateUserId',
                'UpdateDateField',
                'IsActive',
                'TenantId',
                'TenantName',
                'InsertUserName',
                'UpdateUserName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ActivityRow = PatientManagement.ActivityRow || (PatientManagement.ActivityRow = {}));
    })(PatientManagement = PatientManagement_3.PatientManagement || (PatientManagement_3.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_4) {
    var PatientManagement;
    (function (PatientManagement) {
        var ActivityService;
        (function (ActivityService) {
            ActivityService.baseUrl = 'PatientManagement/Activity';
            var Methods;
            (function (Methods) {
            })(Methods = ActivityService.Methods || (ActivityService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ActivityService[x] = function (r, s, o) {
                    return Q.serviceRequest(ActivityService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ActivityService.baseUrl + '/' + x;
            });
        })(ActivityService = PatientManagement.ActivityService || (PatientManagement.ActivityService = {}));
    })(PatientManagement = PatientManagement_4.PatientManagement || (PatientManagement_4.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_5) {
    var PatientManagement;
    (function (PatientManagement) {
        var CabinetRepresentativesRow;
        (function (CabinetRepresentativesRow) {
            CabinetRepresentativesRow.idProperty = 'RepresentativeId';
            CabinetRepresentativesRow.localTextPrefix = 'CabinetRepresentatives';
            var Fields;
            (function (Fields) {
            })(Fields = CabinetRepresentativesRow.Fields || (CabinetRepresentativesRow.Fields = {}));
            [
                'RepresentativeId',
                'UserId',
                'CabinetId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CabinetRepresentativesRow = PatientManagement.CabinetRepresentativesRow || (PatientManagement.CabinetRepresentativesRow = {}));
    })(PatientManagement = PatientManagement_5.PatientManagement || (PatientManagement_5.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_6) {
    var PatientManagement;
    (function (PatientManagement) {
        var CabinetsForm = (function (_super) {
            __extends(CabinetsForm, _super);
            function CabinetsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CabinetsForm;
        }(Serenity.PrefixedContext));
        CabinetsForm.formKey = 'PatientManagement.Cabinets';
        PatientManagement.CabinetsForm = CabinetsForm;
        [['Name', function () { return Serenity.StringEditor; }], ['WorkHoursStart', function () { return Serenity.TimeEditor; }], ['WorkHoursEnd', function () { return Serenity.TimeEditor; }], ['WorkDays', function () { return Serenity.LookupEditor; }], ['Representatives', function () { return Serenity.LookupEditor; }], ['Description', function () { return Serenity.TextAreaEditor; }], ['City', function () { return Serenity.StringEditor; }], ['Country', function () { return Serenity.StringEditor; }], ['PhoneNumber', function () { return Serenity.IntegerEditor; }], ['TenantId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(CabinetsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PatientManagement = PatientManagement_6.PatientManagement || (PatientManagement_6.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_7) {
    var PatientManagement;
    (function (PatientManagement) {
        var CabinetsRow;
        (function (CabinetsRow) {
            CabinetsRow.idProperty = 'CabinetId';
            CabinetsRow.isActiveProperty = 'IsActive';
            CabinetsRow.nameProperty = 'Name';
            CabinetsRow.localTextPrefix = 'PatientManagement.Cabinets';
            CabinetsRow.lookupKey = 'PatientManagement.Cabinets';
            function getLookup() {
                return Q.getLookup('PatientManagement.Cabinets');
            }
            CabinetsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CabinetsRow.Fields || (CabinetsRow.Fields = {}));
            [
                'CabinetId',
                'WorkDays',
                'Name',
                'Description',
                'City',
                'Country',
                'Representatives',
                'WorkHoursStart',
                'WorkHoursEnd',
                'PhoneNumber',
                'TenantId',
                'InsertUserId',
                'InsertDate',
                'UpdateUserId',
                'UpdateDateField',
                'IsActive',
                'TenantName',
                'InsertUserName',
                'UpdateUserName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CabinetsRow = PatientManagement.CabinetsRow || (PatientManagement.CabinetsRow = {}));
    })(PatientManagement = PatientManagement_7.PatientManagement || (PatientManagement_7.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_8) {
    var PatientManagement;
    (function (PatientManagement) {
        var CabinetsService;
        (function (CabinetsService) {
            CabinetsService.baseUrl = 'PatientManagement/Cabinets';
            var Methods;
            (function (Methods) {
            })(Methods = CabinetsService.Methods || (CabinetsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'RetrieveWorkHours',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CabinetsService[x] = function (r, s, o) {
                    return Q.serviceRequest(CabinetsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CabinetsService.baseUrl + '/' + x;
            });
        })(CabinetsService = PatientManagement.CabinetsService || (PatientManagement.CabinetsService = {}));
    })(PatientManagement = PatientManagement_8.PatientManagement || (PatientManagement_8.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_9) {
    var PatientManagement;
    (function (PatientManagement) {
        var CabinetWorkDaysRow;
        (function (CabinetWorkDaysRow) {
            CabinetWorkDaysRow.idProperty = 'WorkDayId';
            CabinetWorkDaysRow.localTextPrefix = 'CabinetWorkDays';
            CabinetWorkDaysRow.lookupKey = 'PatientManagement.CabinetWorkDays';
            function getLookup() {
                return Q.getLookup('PatientManagement.CabinetWorkDays');
            }
            CabinetWorkDaysRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CabinetWorkDaysRow.Fields || (CabinetWorkDaysRow.Fields = {}));
            [
                'WorkDayId',
                'WeekDayId',
                'CabinetId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CabinetWorkDaysRow = PatientManagement.CabinetWorkDaysRow || (PatientManagement.CabinetWorkDaysRow = {}));
    })(PatientManagement = PatientManagement_9.PatientManagement || (PatientManagement_9.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_10) {
    var PatientManagement;
    (function (PatientManagement) {
        var ExternalAccessCabinetsRow;
        (function (ExternalAccessCabinetsRow) {
            ExternalAccessCabinetsRow.idProperty = 'ExternalAccessCabinetId';
            ExternalAccessCabinetsRow.localTextPrefix = 'ExternalAccessCabinets';
            ExternalAccessCabinetsRow.lookupKey = 'PatientManagement.ExternalAccessCabinets';
            function getLookup() {
                return Q.getLookup('PatientManagement.ExternalAccessCabinets');
            }
            ExternalAccessCabinetsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ExternalAccessCabinetsRow.Fields || (ExternalAccessCabinetsRow.Fields = {}));
            [
                'ExternalAccessCabinetId',
                'ExternalAccessId',
                'CabinetId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ExternalAccessCabinetsRow = PatientManagement.ExternalAccessCabinetsRow || (PatientManagement.ExternalAccessCabinetsRow = {}));
    })(PatientManagement = PatientManagement_10.PatientManagement || (PatientManagement_10.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_11) {
    var PatientManagement;
    (function (PatientManagement) {
        var Gender;
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Gender = PatientManagement.Gender || (PatientManagement.Gender = {}));
        Serenity.Decorators.registerEnum(Gender, 'PatientManagement.PatientManagement.Entities.Gender');
    })(PatientManagement = PatientManagement_11.PatientManagement || (PatientManagement_11.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_12) {
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
        [['PatientId', function () { return Serenity.LookupEditor; }], ['Regime', function () { return Serenity.TextAreaEditor; }], ['DailyMeals', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(LifeStylesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PatientManagement = PatientManagement_12.PatientManagement || (PatientManagement_12.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_13) {
    var PatientManagement;
    (function (PatientManagement) {
        var LifeStylesRow;
        (function (LifeStylesRow) {
            LifeStylesRow.idProperty = 'LifeStyleId';
            LifeStylesRow.isActiveProperty = 'IsActive';
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
            [
                'LifeStyleId',
                'PatientId',
                'Regime',
                'DailyMeals',
                'InsertUserId',
                'InsertDate',
                'UpdateUserId',
                'UpdateDateField',
                'IsActive',
                'TenantName',
                'InsertUserName',
                'UpdateUserName',
                'PatientName',
                'TenantId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(LifeStylesRow = PatientManagement.LifeStylesRow || (PatientManagement.LifeStylesRow = {}));
    })(PatientManagement = PatientManagement_13.PatientManagement || (PatientManagement_13.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_14) {
    var PatientManagement;
    (function (PatientManagement) {
        var LifeStylesService;
        (function (LifeStylesService) {
            LifeStylesService.baseUrl = 'PatientManagement/LifeStyles';
            var Methods;
            (function (Methods) {
            })(Methods = LifeStylesService.Methods || (LifeStylesService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LifeStylesService[x] = function (r, s, o) {
                    return Q.serviceRequest(LifeStylesService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = LifeStylesService.baseUrl + '/' + x;
            });
        })(LifeStylesService = PatientManagement.LifeStylesService || (PatientManagement.LifeStylesService = {}));
    })(PatientManagement = PatientManagement_14.PatientManagement || (PatientManagement_14.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_15) {
    var PatientManagement;
    (function (PatientManagement) {
        var MedicalSpecialtyExcelImportForm = (function (_super) {
            __extends(MedicalSpecialtyExcelImportForm, _super);
            function MedicalSpecialtyExcelImportForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MedicalSpecialtyExcelImportForm;
        }(Serenity.PrefixedContext));
        MedicalSpecialtyExcelImportForm.formKey = 'PatientManagement.MedicalSpecialtyExcelImport';
        PatientManagement.MedicalSpecialtyExcelImportForm = MedicalSpecialtyExcelImportForm;
        [['FileName', function () { return Serenity.ImageUploadEditor; }]].forEach(function (x) { return Object.defineProperty(MedicalSpecialtyExcelImportForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PatientManagement = PatientManagement_15.PatientManagement || (PatientManagement_15.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_16) {
    var PatientManagement;
    (function (PatientManagement) {
        var MedicalSpecialtyForm = (function (_super) {
            __extends(MedicalSpecialtyForm, _super);
            function MedicalSpecialtyForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MedicalSpecialtyForm;
        }(Serenity.PrefixedContext));
        MedicalSpecialtyForm.formKey = 'PatientManagement.MedicalSpecialty';
        PatientManagement.MedicalSpecialtyForm = MedicalSpecialtyForm;
        [['Name', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(MedicalSpecialtyForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PatientManagement = PatientManagement_16.PatientManagement || (PatientManagement_16.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_17) {
    var PatientManagement;
    (function (PatientManagement) {
        var MedicalSpecialtyRow;
        (function (MedicalSpecialtyRow) {
            MedicalSpecialtyRow.idProperty = 'SpecialtyId';
            MedicalSpecialtyRow.isActiveProperty = 'IsActive';
            MedicalSpecialtyRow.nameProperty = 'Name';
            MedicalSpecialtyRow.localTextPrefix = 'PatientManagement.MedicalSpecialty';
            MedicalSpecialtyRow.lookupKey = 'PatientManagement.MedicalSpecialties';
            function getLookup() {
                return Q.getLookup('PatientManagement.MedicalSpecialties');
            }
            MedicalSpecialtyRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = MedicalSpecialtyRow.Fields || (MedicalSpecialtyRow.Fields = {}));
            [
                'SpecialtyId',
                'Name',
                'InsertUserId',
                'InsertDate',
                'UpdateUserId',
                'UpdateDateField',
                'IsActive',
                'InsertUserName',
                'UpdateUserName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(MedicalSpecialtyRow = PatientManagement.MedicalSpecialtyRow || (PatientManagement.MedicalSpecialtyRow = {}));
    })(PatientManagement = PatientManagement_17.PatientManagement || (PatientManagement_17.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_18) {
    var PatientManagement;
    (function (PatientManagement) {
        var MedicalSpecialtyService;
        (function (MedicalSpecialtyService) {
            MedicalSpecialtyService.baseUrl = 'PatientManagement/MedicalSpecialty';
            var Methods;
            (function (Methods) {
            })(Methods = MedicalSpecialtyService.Methods || (MedicalSpecialtyService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'ExcelImport',
                'List'
            ].forEach(function (x) {
                MedicalSpecialtyService[x] = function (r, s, o) {
                    return Q.serviceRequest(MedicalSpecialtyService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = MedicalSpecialtyService.baseUrl + '/' + x;
            });
        })(MedicalSpecialtyService = PatientManagement.MedicalSpecialtyService || (PatientManagement.MedicalSpecialtyService = {}));
    })(PatientManagement = PatientManagement_18.PatientManagement || (PatientManagement_18.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_19) {
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
            [
                'NoteId',
                'EntityType',
                'EntityId',
                'Text',
                'InsertUserId',
                'InsertDate',
                'InsertUserDisplayName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(NotesRow = PatientManagement.NotesRow || (PatientManagement.NotesRow = {}));
    })(PatientManagement = PatientManagement_19.PatientManagement || (PatientManagement_19.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_20) {
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
        [['EntityType', function () { return Serenity.StringEditor; }], ['EntityId', function () { return Serenity.StringEditor; }], ['Text', function () { return Serenity.StringEditor; }], ['InsertUserId', function () { return Serenity.IntegerEditor; }], ['InsertDate', function () { return Serenity.DateEditor; }]].forEach(function (x) { return Object.defineProperty(NotificationsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PatientManagement = PatientManagement_20.PatientManagement || (PatientManagement_20.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_21) {
    var PatientManagement;
    (function (PatientManagement) {
        var NotificationsRow;
        (function (NotificationsRow) {
            NotificationsRow.idProperty = 'NotificationId';
            NotificationsRow.nameProperty = 'EntityType';
            NotificationsRow.localTextPrefix = 'PatientManagement.Notifications';
            NotificationsRow.lookupKey = 'PatientManagement.Notifications';
            function getLookup() {
                return Q.getLookup('PatientManagement.Notifications');
            }
            NotificationsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = NotificationsRow.Fields || (NotificationsRow.Fields = {}));
            [
                'NotificationId',
                'EntityType',
                'EntityId',
                'Text',
                'InsertUserId',
                'InsertDate',
                'InsertUserDisplayName',
                'InsertUserPicture',
                'TenantId',
                'TenantName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(NotificationsRow = PatientManagement.NotificationsRow || (PatientManagement.NotificationsRow = {}));
    })(PatientManagement = PatientManagement_21.PatientManagement || (PatientManagement_21.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_22) {
    var PatientManagement;
    (function (PatientManagement) {
        var NotificationsService;
        (function (NotificationsService) {
            NotificationsService.baseUrl = 'PatientManagement/Notifications';
            var Methods;
            (function (Methods) {
            })(Methods = NotificationsService.Methods || (NotificationsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ListForDropdown',
                'CountNotifications'
            ].forEach(function (x) {
                NotificationsService[x] = function (r, s, o) {
                    return Q.serviceRequest(NotificationsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = NotificationsService.baseUrl + '/' + x;
            });
        })(NotificationsService = PatientManagement.NotificationsService || (PatientManagement.NotificationsService = {}));
    })(PatientManagement = PatientManagement_22.PatientManagement || (PatientManagement_22.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_23) {
    var PatientManagement;
    (function (PatientManagement) {
        var OutputFormat;
        (function (OutputFormat) {
            OutputFormat[OutputFormat["Ics"] = 0] = "Ics";
            OutputFormat[OutputFormat["Json"] = 1] = "Json";
        })(OutputFormat = PatientManagement.OutputFormat || (PatientManagement.OutputFormat = {}));
        Serenity.Decorators.registerEnum(OutputFormat, 'PatientManagement.PatientManagement.Entities.OutputFormat');
    })(PatientManagement = PatientManagement_23.PatientManagement || (PatientManagement_23.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_24) {
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
    })(PatientManagement = PatientManagement_24.PatientManagement || (PatientManagement_24.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_25) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientHealthRow;
        (function (PatientHealthRow) {
            PatientHealthRow.idProperty = 'PatientHealthId';
            PatientHealthRow.isActiveProperty = 'IsActive';
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
            [
                'PatientHealthId',
                'PatientId',
                'Diseases',
                'MedicinesIntake',
                'InsertUserId',
                'InsertDate',
                'PatientName',
                'UpdateUserId',
                'UpdateDateField',
                'TenantId',
                'IsActive',
                'TenantName',
                'InsertUserName',
                'UpdateUserName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(PatientHealthRow = PatientManagement.PatientHealthRow || (PatientManagement.PatientHealthRow = {}));
    })(PatientManagement = PatientManagement_25.PatientManagement || (PatientManagement_25.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_26) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientHealthService;
        (function (PatientHealthService) {
            PatientHealthService.baseUrl = 'PatientManagement/PatientHealth';
            var Methods;
            (function (Methods) {
            })(Methods = PatientHealthService.Methods || (PatientHealthService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PatientHealthService[x] = function (r, s, o) {
                    return Q.serviceRequest(PatientHealthService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = PatientHealthService.baseUrl + '/' + x;
            });
        })(PatientHealthService = PatientManagement.PatientHealthService || (PatientManagement.PatientHealthService = {}));
    })(PatientManagement = PatientManagement_26.PatientManagement || (PatientManagement_26.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_27) {
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
    })(PatientManagement = PatientManagement_27.PatientManagement || (PatientManagement_27.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_28) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientsFileUploadsRow;
        (function (PatientsFileUploadsRow) {
            PatientsFileUploadsRow.idProperty = 'PatientFileUploadId';
            PatientsFileUploadsRow.nameProperty = 'PatientName';
            PatientsFileUploadsRow.localTextPrefix = 'PatientManagement.PatientsFileUploads';
            PatientsFileUploadsRow.lookupKey = 'PatientManagement.PatientsFileUploads';
            function getLookup() {
                return Q.getLookup('PatientManagement.PatientsFileUploads');
            }
            PatientsFileUploadsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PatientsFileUploadsRow.Fields || (PatientsFileUploadsRow.Fields = {}));
            [
                'PatientFileUploadId',
                'PatientId',
                'FilePath',
                'Description',
                'InsertUserId',
                'InsertDate',
                'PatientName',
                'TenantId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(PatientsFileUploadsRow = PatientManagement.PatientsFileUploadsRow || (PatientManagement.PatientsFileUploadsRow = {}));
    })(PatientManagement = PatientManagement_28.PatientManagement || (PatientManagement_28.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_29) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientsFileUploadsService;
        (function (PatientsFileUploadsService) {
            PatientsFileUploadsService.baseUrl = 'PatientManagement/PatientsFileUploads';
            var Methods;
            (function (Methods) {
            })(Methods = PatientsFileUploadsService.Methods || (PatientsFileUploadsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PatientsFileUploadsService[x] = function (r, s, o) {
                    return Q.serviceRequest(PatientsFileUploadsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = PatientsFileUploadsService.baseUrl + '/' + x;
            });
        })(PatientsFileUploadsService = PatientManagement.PatientsFileUploadsService || (PatientManagement.PatientsFileUploadsService = {}));
    })(PatientManagement = PatientManagement_29.PatientManagement || (PatientManagement_29.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_30) {
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
        [['PatientId', function () { return Serenity.IntegerEditor; }], ['Name', function () { return Serenity.StringEditor; }], ['Gender', function () { return Serenity.EnumEditor; }], ['PersonalNumber', function () { return Serenity.StringEditor; }], ['PhoneNumber', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['FirstRegistrationDate', function () { return Serenity.DateTimeEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['Height', function () { return Serenity.IntegerEditor; }], ['Weight', function () { return Serenity.IntegerEditor; }], ['NotifyOnChange', function () { return PatientManagement_30.BsSwitchEditor; }], ['NoteList', function () { return PatientManagement.NotesEditor; }], ['TenantId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(PatientsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PatientManagement = PatientManagement_30.PatientManagement || (PatientManagement_30.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_31) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientsRow;
        (function (PatientsRow) {
            PatientsRow.idProperty = 'PatientId';
            PatientsRow.isActiveProperty = 'IsActive';
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
            [
                'PatientId',
                'Name',
                'PersonalNumber',
                'PhoneNumber',
                'Gender',
                'FirstRegistrationDate',
                'Address',
                'Height',
                'Weight',
                'Email',
                'NotifyOnChange',
                'WantedWeight',
                'InsertUserId',
                'InsertDate',
                'IsActive',
                'TenantName',
                'InsertUserName',
                'NoteList',
                'TenantId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(PatientsRow = PatientManagement.PatientsRow || (PatientManagement.PatientsRow = {}));
    })(PatientManagement = PatientManagement_31.PatientManagement || (PatientManagement_31.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_32) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientsService;
        (function (PatientsService) {
            PatientsService.baseUrl = 'PatientManagement/Patients';
            var Methods;
            (function (Methods) {
            })(Methods = PatientsService.Methods || (PatientsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PatientsService[x] = function (r, s, o) {
                    return Q.serviceRequest(PatientsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = PatientsService.baseUrl + '/' + x;
            });
        })(PatientsService = PatientManagement.PatientsService || (PatientManagement.PatientsService = {}));
    })(PatientManagement = PatientManagement_32.PatientManagement || (PatientManagement_32.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_33) {
    var PatientManagement;
    (function (PatientManagement) {
        var PaymentStatus;
        (function (PaymentStatus) {
            PaymentStatus[PaymentStatus["Success"] = 0] = "Success";
            PaymentStatus[PaymentStatus["Denied"] = 1] = "Denied";
            PaymentStatus[PaymentStatus["Pending"] = 2] = "Pending";
            PaymentStatus[PaymentStatus["Processing"] = 3] = "Processing";
            PaymentStatus[PaymentStatus["Failed"] = 4] = "Failed";
            PaymentStatus[PaymentStatus["Unclaimed"] = 5] = "Unclaimed";
            PaymentStatus[PaymentStatus["Returned"] = 6] = "Returned";
            PaymentStatus[PaymentStatus["Onhold"] = 7] = "Onhold";
            PaymentStatus[PaymentStatus["Blocked"] = 8] = "Blocked";
            PaymentStatus[PaymentStatus["Cancelled"] = 9] = "Cancelled";
        })(PaymentStatus = PatientManagement.PaymentStatus || (PatientManagement.PaymentStatus = {}));
        Serenity.Decorators.registerEnum(PaymentStatus, 'PatientManagement.PatientManagement.Entities.PaymentStatus');
    })(PatientManagement = PatientManagement_33.PatientManagement || (PatientManagement_33.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_34) {
    var PatientManagement;
    (function (PatientManagement) {
        var PaymentTypes;
        (function (PaymentTypes) {
            PaymentTypes[PaymentTypes["BankTransfer"] = 0] = "BankTransfer";
        })(PaymentTypes = PatientManagement.PaymentTypes || (PatientManagement.PaymentTypes = {}));
        Serenity.Decorators.registerEnum(PaymentTypes, 'PatientManagement.PatientManagement.PaymentTypes');
    })(PatientManagement = PatientManagement_34.PatientManagement || (PatientManagement_34.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_35) {
    var PatientManagement;
    (function (PatientManagement) {
        var SubscriptionState;
        (function (SubscriptionState) {
            SubscriptionState[SubscriptionState["NotActive"] = 0] = "NotActive";
            SubscriptionState[SubscriptionState["Active"] = 1] = "Active";
        })(SubscriptionState = PatientManagement.SubscriptionState || (PatientManagement.SubscriptionState = {}));
        Serenity.Decorators.registerEnum(SubscriptionState, 'PatientManagement.PatientManagement.SubscriptionState');
    })(PatientManagement = PatientManagement_35.PatientManagement || (PatientManagement_35.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_36) {
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
    })(PatientManagement = PatientManagement_36.PatientManagement || (PatientManagement_36.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_37) {
    var PatientManagement;
    (function (PatientManagement) {
        var UserNotificationsRow;
        (function (UserNotificationsRow) {
            UserNotificationsRow.idProperty = 'UserNotificationId';
            UserNotificationsRow.localTextPrefix = 'PatientManagement.UserNotifications';
            var Fields;
            (function (Fields) {
            })(Fields = UserNotificationsRow.Fields || (UserNotificationsRow.Fields = {}));
            [
                'UserNotificationId',
                'NotificationId',
                'SeenAt',
                'UserId',
                'NotificationEntityType',
                'NotificationEntityId',
                'NotificationText',
                'NotificationInsertUserId',
                'NotificationInsertDate',
                'NotificationTenantId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserNotificationsRow = PatientManagement.UserNotificationsRow || (PatientManagement.UserNotificationsRow = {}));
    })(PatientManagement = PatientManagement_37.PatientManagement || (PatientManagement_37.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_38) {
    var PatientManagement;
    (function (PatientManagement) {
        var UserNotificationsService;
        (function (UserNotificationsService) {
            UserNotificationsService.baseUrl = 'PatientManagement/UserNotifications';
            var Methods;
            (function (Methods) {
            })(Methods = UserNotificationsService.Methods || (UserNotificationsService.Methods = {}));
            [
                'Create',
                'CreateList',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserNotificationsService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserNotificationsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UserNotificationsService.baseUrl + '/' + x;
            });
        })(UserNotificationsService = PatientManagement.UserNotificationsService || (PatientManagement.UserNotificationsService = {}));
    })(PatientManagement = PatientManagement_38.PatientManagement || (PatientManagement_38.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_39) {
    var PatientManagement;
    (function (PatientManagement) {
        var UserSpecialtiesRow;
        (function (UserSpecialtiesRow) {
            UserSpecialtiesRow.idProperty = 'UserSpecialtyId';
            UserSpecialtiesRow.localTextPrefix = 'UserSpecialties';
            var Fields;
            (function (Fields) {
            })(Fields = UserSpecialtiesRow.Fields || (UserSpecialtiesRow.Fields = {}));
            [
                'UserSpecialtyId',
                'UserId',
                'SpecialtyId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserSpecialtiesRow = PatientManagement.UserSpecialtiesRow || (PatientManagement.UserSpecialtiesRow = {}));
    })(PatientManagement = PatientManagement_39.PatientManagement || (PatientManagement_39.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_40) {
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
        [['PatientId', function () { return Serenity.LookupEditor; }], ['VisitTypeId', function () { return Serenity.LookupEditor; }], ['CabinetId', function () { return Serenity.LookupEditor; }], ['StartDate', function () { return Serenity.DateTimeEditor; }], ['EndDate', function () { return Serenity.DateTimeEditor; }], ['Description', function () { return Serenity.TextAreaEditor; }], ['TenantId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(VisitsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PatientManagement = PatientManagement_40.PatientManagement || (PatientManagement_40.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_41) {
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
            [
                'VisitId',
                'PatientId',
                'VisitTypeId',
                'CabinetId',
                'CabinetName',
                'CabinetIsActive',
                'Description',
                'StartDate',
                'EndDate',
                'InsertUserId',
                'InsertDate',
                'TenantName',
                'InsertUserName',
                'PatientGender',
                'PatientEmail',
                'PatientNotifyOnChange',
                'PhoneNumber',
                'PatientName',
                'VisitTypeName',
                'VisitTypeBackgroundColor',
                'VisitTypeBorderColor',
                'TenantId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(VisitsRow = PatientManagement.VisitsRow || (PatientManagement.VisitsRow = {}));
    })(PatientManagement = PatientManagement_41.PatientManagement || (PatientManagement_41.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_42) {
    var PatientManagement;
    (function (PatientManagement) {
        var VisitsService;
        (function (VisitsService) {
            VisitsService.baseUrl = 'PatientManagement/Visits';
            var Methods;
            (function (Methods) {
            })(Methods = VisitsService.Methods || (VisitsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VisitsService[x] = function (r, s, o) {
                    return Q.serviceRequest(VisitsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = VisitsService.baseUrl + '/' + x;
            });
        })(VisitsService = PatientManagement.VisitsService || (PatientManagement.VisitsService = {}));
    })(PatientManagement = PatientManagement_42.PatientManagement || (PatientManagement_42.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_43) {
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
        [['Name', function () { return Serenity.StringEditor; }], ['BorderColor', function () { return Serenity.StringEditor; }], ['BackgroundColor', function () { return Serenity.StringEditor; }], ['TenantId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(VisitTypesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(PatientManagement = PatientManagement_43.PatientManagement || (PatientManagement_43.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_44) {
    var PatientManagement;
    (function (PatientManagement) {
        var VisitTypesRow;
        (function (VisitTypesRow) {
            VisitTypesRow.idProperty = 'VisitTypeId';
            VisitTypesRow.isActiveProperty = 'IsActive';
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
            [
                'VisitTypeId',
                'Name',
                'BorderColor',
                'BackgroundColor',
                'InsertUserId',
                'InsertDate',
                'IsActive',
                'TenantName',
                'InsertUserName',
                'TenantId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(VisitTypesRow = PatientManagement.VisitTypesRow || (PatientManagement.VisitTypesRow = {}));
    })(PatientManagement = PatientManagement_44.PatientManagement || (PatientManagement_44.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_45) {
    var PatientManagement;
    (function (PatientManagement) {
        var VisitTypesService;
        (function (VisitTypesService) {
            VisitTypesService.baseUrl = 'PatientManagement/VisitTypes';
            var Methods;
            (function (Methods) {
            })(Methods = VisitTypesService.Methods || (VisitTypesService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VisitTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(VisitTypesService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = VisitTypesService.baseUrl + '/' + x;
            });
        })(VisitTypesService = PatientManagement.VisitTypesService || (PatientManagement.VisitTypesService = {}));
    })(PatientManagement = PatientManagement_45.PatientManagement || (PatientManagement_45.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_46) {
    var PatientManagement;
    (function (PatientManagement) {
        var WeekDays;
        (function (WeekDays) {
            WeekDays[WeekDays["Monday"] = 1] = "Monday";
            WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
            WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
            WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
            WeekDays[WeekDays["Friday"] = 5] = "Friday";
            WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
            WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
        })(WeekDays = PatientManagement.WeekDays || (PatientManagement.WeekDays = {}));
        Serenity.Decorators.registerEnum(WeekDays, 'PatientManagement.PatientManagement.WeekDays');
    })(PatientManagement = PatientManagement_46.PatientManagement || (PatientManagement_46.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var CouponsDialog = (function (_super) {
            __extends(CouponsDialog, _super);
            function CouponsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.CouponsForm(_this.idPrefix);
                return _this;
            }
            CouponsDialog.prototype.getFormKey = function () { return Administration.CouponsForm.formKey; };
            CouponsDialog.prototype.getIdProperty = function () { return Administration.CouponsRow.idProperty; };
            CouponsDialog.prototype.getLocalTextPrefix = function () { return Administration.CouponsRow.localTextPrefix; };
            CouponsDialog.prototype.getNameProperty = function () { return Administration.CouponsRow.nameProperty; };
            CouponsDialog.prototype.getService = function () { return Administration.CouponsService.baseUrl; };
            return CouponsDialog;
        }(Serenity.EntityDialog));
        CouponsDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], CouponsDialog);
        Administration.CouponsDialog = CouponsDialog;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var CouponsGrid = (function (_super) {
            __extends(CouponsGrid, _super);
            function CouponsGrid(container) {
                return _super.call(this, container) || this;
            }
            CouponsGrid.prototype.getColumnsKey = function () { return 'Administration.Coupons'; };
            CouponsGrid.prototype.getDialogType = function () { return Administration.CouponsDialog; };
            CouponsGrid.prototype.getIdProperty = function () { return Administration.CouponsRow.idProperty; };
            CouponsGrid.prototype.getLocalTextPrefix = function () { return Administration.CouponsRow.localTextPrefix; };
            CouponsGrid.prototype.getService = function () { return Administration.CouponsService.baseUrl; };
            CouponsGrid.prototype.getIsActiveProperty = function () { return Administration.CouponsRow.isActiveProperty; };
            return CouponsGrid;
        }(Serenity.EntityGrid));
        CouponsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CouponsGrid);
        Administration.CouponsGrid = CouponsGrid;
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
        var ExternalAccessDialog = (function (_super) {
            __extends(ExternalAccessDialog, _super);
            function ExternalAccessDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.ExternalAccessForm(_this.idPrefix);
                return _this;
            }
            ExternalAccessDialog.prototype.getFormKey = function () { return Administration.ExternalAccessForm.formKey; };
            ExternalAccessDialog.prototype.getIdProperty = function () { return Administration.ExternalAccessRow.idProperty; };
            ExternalAccessDialog.prototype.getLocalTextPrefix = function () { return Administration.ExternalAccessRow.localTextPrefix; };
            ExternalAccessDialog.prototype.getNameProperty = function () { return Administration.ExternalAccessRow.nameProperty; };
            ExternalAccessDialog.prototype.getService = function () { return Administration.ExternalAccessService.baseUrl; };
            return ExternalAccessDialog;
        }(Serenity.EntityDialog));
        ExternalAccessDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ExternalAccessDialog);
        Administration.ExternalAccessDialog = ExternalAccessDialog;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var ExternalAccessGrid = (function (_super) {
            __extends(ExternalAccessGrid, _super);
            function ExternalAccessGrid(container) {
                return _super.call(this, container) || this;
            }
            ExternalAccessGrid.prototype.getColumnsKey = function () { return 'Administration.ExternalAccess'; };
            ExternalAccessGrid.prototype.getDialogType = function () { return Administration.ExternalAccessDialog; };
            ExternalAccessGrid.prototype.getIdProperty = function () { return Administration.ExternalAccessRow.idProperty; };
            ExternalAccessGrid.prototype.getLocalTextPrefix = function () { return Administration.ExternalAccessRow.localTextPrefix; };
            ExternalAccessGrid.prototype.getService = function () { return Administration.ExternalAccessService.baseUrl; };
            return ExternalAccessGrid;
        }(Serenity.EntityGrid));
        ExternalAccessGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ExternalAccessGrid);
        Administration.ExternalAccessGrid = ExternalAccessGrid;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_47) {
    var PatientManagement;
    (function (PatientManagement) {
        var ExternalAccessUrlFormatter = (function () {
            function ExternalAccessUrlFormatter() {
            }
            ExternalAccessUrlFormatter.prototype.format = function (ctx) {
                return "<a href='"
                    + Q.resolveUrl("~/external/"
                        + Q.htmlEncode(ctx.value))
                    + "' target='_blank' ><span class='key-symbol'>"
                    + Q.htmlEncode(ctx.value) + '</span></a>';
            };
            return ExternalAccessUrlFormatter;
        }());
        ExternalAccessUrlFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], ExternalAccessUrlFormatter);
        PatientManagement.ExternalAccessUrlFormatter = ExternalAccessUrlFormatter;
    })(PatientManagement = PatientManagement_47.PatientManagement || (PatientManagement_47.PatientManagement = {}));
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
            OffersGrid.prototype.getIsActiveProperty = function () { return Administration.OffersRow.isActiveProperty; };
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
/// <reference types="jqueryui" />
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var PaymentsDialog = (function (_super) {
            __extends(PaymentsDialog, _super);
            function PaymentsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.PaymentsForm(_this.idPrefix);
                _this.form.CouponKey.element.on("keyup", function () {
                    var value = _this.form.CouponKey.value;
                    var options = _this.form.CouponId.getSelect2Options().data;
                    for (var i = 0; i < options.length; i++) {
                        if (options[i].text === value) {
                            _this.form.CouponId.value = options[i].id;
                        }
                    }
                });
                _this.form.PaymentOptionId.changeSelect2(function (e) {
                    _this.CheckIfFieldsAreEmpty();
                });
                _this.form.PaymentDetailsId.changeSelect2(function (e) {
                    if (!_this.form.PaymentDetailsId.value) {
                        return;
                    }
                    Administration.PaymentsDetailsService.Retrieve({
                        EntityId: _this.form.PaymentDetailsId.value
                    }, function (response) {
                        _this.setPaymentDetails(response.Entity);
                    });
                });
                _this.form.SubscriptionId.changeSelect2(function (e) {
                    _this.CheckIfFieldsAreEmpty();
                    Administration.SubscriptionsService.Retrieve({
                        EntityId: _this.form.SubscriptionId.value
                    }, function (response) {
                        _this.setSubscriptionDetails(response.Entity);
                    });
                });
                _this.form.CurrencyId.changeSelect2(function (e) {
                    _this.CheckIfFieldsAreEmpty();
                });
                return _this;
            }
            PaymentsDialog.prototype.getFormKey = function () { return Administration.PaymentsForm.formKey; };
            PaymentsDialog.prototype.getIdProperty = function () { return Administration.PaymentsRow.idProperty; };
            PaymentsDialog.prototype.getLocalTextPrefix = function () { return Administration.PaymentsRow.localTextPrefix; };
            PaymentsDialog.prototype.getNameProperty = function () { return Administration.PaymentsRow.nameProperty; };
            PaymentsDialog.prototype.getService = function () { return Administration.PaymentsService.baseUrl; };
            PaymentsDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                if (this.isNew()) {
                    this.SetInnerFields();
                }
                this.form.Receiver.value = Q.text('Site.Payments.Reciever');
                this.form.IBANReceiver.value = Q.text('Site.Payments.IBANReciever');
                this.form.BICReceiver.value = Q.text('Site.Payments.BICreciever');
                this.form.BankNameReceiver.value = Q.text('Site.Payments.BankNameReciever');
            };
            PaymentsDialog.prototype.SetInnerFields = function () {
                var _this = this;
                Serenity.EditorUtils.setReadOnly(this.form.CustomerIban, true);
                Serenity.EditorUtils.setReadOnly(this.form.CustomerName, true);
                Serenity.EditorUtils.setReadOnly(this.form.Receiver, true);
                Serenity.EditorUtils.setReadOnly(this.form.IBANReceiver, true);
                Serenity.EditorUtils.setReadOnly(this.form.BICReceiver, true);
                Serenity.EditorUtils.setReadOnly(this.form.BankNameReceiver, true);
                Serenity.EditorUtils.setReadOnly(this.form.ReasonForPayment, true);
                Serenity.EditorUtils.setReadOnly(this.form.PaymentStatus, true);
                var subsId = this.form.SubscriptionId.getSelect2Options().data[0].id;
                this.form.SubscriptionId.value = subsId;
                if (this.form.PaymentDetailsId.getSelect2Options().data[0]) {
                    var detailsId = this.form.PaymentDetailsId.getSelect2Options().data[0].id;
                    this.form.PaymentDetailsId.value = detailsId;
                    Administration.PaymentsDetailsService.Retrieve({
                        EntityId: detailsId
                    }, function (response) {
                        _this.setPaymentDetails(response.Entity);
                    });
                }
                Administration.SubscriptionsService.Retrieve({
                    EntityId: subsId
                }, function (response) {
                    _this.setSubscriptionDetails(response.Entity);
                });
                Serenity.EditorUtils.setReadOnly(this.form.SubscriptionId, true);
            };
            PaymentsDialog.prototype.CheckIfFieldsAreEmpty = function () {
                if (this.form.SubscriptionId.value && this.form.PaymentOptionId.value && this.form.CurrencyId.value) {
                    $.get('../Administration/Payments/GetPrice', {
                        SubscriptionId: this.form.SubscriptionId.value,
                        PaymentOptionId: this.form.PaymentOptionId.value,
                        CurrencyId: this.form.CurrencyId.value
                    }, function (price) {
                        $("input[name='Value']").val(price);
                    });
                }
                if (this.form.CouponKey.value) {
                }
            };
            PaymentsDialog.prototype.setPaymentDetails = function (details) {
                this.form.CustomerName.value = details.BeneficiaryName;
                this.form.CustomerIban.value = details.IbanBeneficient;
            };
            PaymentsDialog.prototype.setSubscriptionDetails = function (details) {
                this.form.ReasonForPayment.value = details.Name + ' - ' + Q.text('Site.Subscriptions.SerialNumPrefix') + details.SubscriptionId;
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
            PaymentsGrid.prototype.getItemCssClass = function (item, index) {
                var klass = "";
                if (item.PaymentStatus != PatientManagement.PatientManagement.PaymentStatus.Success) {
                    klass += " not-success-payment";
                }
                if (item.PaymentStatus === PatientManagement.PatientManagement.PaymentStatus.Success) {
                    klass += " payment-success";
                }
                else if (item.PaymentStatus === PatientManagement.PatientManagement.PaymentStatus.Pending) {
                    klass += " payment-pending";
                }
                return Q.trimToNull(klass);
            };
            PaymentsGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    field: 'Print Invoice',
                    name: Q.text('Site.Payments.PaymentBlank'),
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="Invoice">' +
                        '<i class="fa fa-file-text-o  text-blue"></i> OPEN</a>'; },
                    width: 76,
                    minWidth: 54,
                    maxWidth: 76,
                });
                return columns;
            };
            PaymentsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(PatientManagement.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    hint: 'Export to Excel',
                    title: 'Export to Excel',
                    service: Administration.PaymentsService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                return buttons;
            };
            PaymentsGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        PatientManagement.Common.ReportHelper.execute({
                            target: "_self",
                            reportKey: 'Administration.PaymentInvoice',
                            extension: 'html',
                            params: {
                                PaymentId: item.PaymentId
                            }
                        });
                    }
                }
            };
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
            PaymentsDetailsDialog.prototype.onSaveSuccess = function (response) {
                console.log('save');
                $('input[name=CustomerName]').val(this.form.BeneficiaryName.value);
                $('input[name=CustomerIban]').val(this.form.IbanBeneficient.value);
            };
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
            RoleGrid.prototype.getIsActiveProperty = function () { return Administration.OffersRow.isActiveProperty; };
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
(function (PatientManagement_48) {
    var PatientManagement;
    (function (PatientManagement) {
        var RoleListFormatter = (function () {
            function RoleListFormatter() {
            }
            RoleListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = PatientManagement_48.Administration.RoleRow.getLookup().itemById;
                var z;
                return "<span class='fa icon-lock'>  " + Q.htmlEncode(idList.map(function (x) { return ((z = byId[x]) ? z.RoleName : x); }).join(", ")) + '</span>';
            };
            return RoleListFormatter;
        }());
        RoleListFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], RoleListFormatter);
        PatientManagement.RoleListFormatter = RoleListFormatter;
    })(PatientManagement = PatientManagement_48.PatientManagement || (PatientManagement_48.PatientManagement = {}));
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
        var SentEmailsDialog = SentEmailsDialog_1 = (function (_super) {
            __extends(SentEmailsDialog, _super);
            function SentEmailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.SentEmailsForm(_this.idPrefix);
                _this.sendPredefinedEmail = function (visitId) {
                    console.log(visitId);
                    PatientManagement.PatientManagement.VisitsService.Retrieve({
                        EntityId: visitId
                    }, function (resp) {
                        var visit = {};
                        visit = resp.Entity;
                        //TODO: Remove this service call! 
                        PatientManagement.PatientManagement.PatientsService.Retrieve({
                            EntityId: visit.PatientId
                        }, function (resp) {
                            var patient = {};
                            patient = resp.Entity;
                            if (!patient.Email) {
                                Q.confirm(Q.text("Site.Dashboard.AlertOnPatientNoEmail"), function () {
                                    new PatientManagement.PatientManagement.PatientsDialog().loadByIdAndOpenDialog(patient.PatientId);
                                });
                            }
                            else {
                                var sentEmail = {};
                                var dialog = new SentEmailsDialog_1();
                                //TODO We open new dialog with PatientID. Correct?
                                sentEmail.ToEmail = patient.PatientId.toString();
                                dialog.form.ToEmail.readOnly = true;
                                dialog.loadEntityAndOpenDialog(sentEmail);
                            }
                        });
                    });
                };
                return _this;
            }
            SentEmailsDialog.prototype.getFormKey = function () { return Administration.SentEmailsForm.formKey; };
            SentEmailsDialog.prototype.getIdProperty = function () { return Administration.SentEmailsRow.idProperty; };
            SentEmailsDialog.prototype.getLocalTextPrefix = function () { return Administration.SentEmailsRow.localTextPrefix; };
            SentEmailsDialog.prototype.getNameProperty = function () { return Administration.SentEmailsRow.nameProperty; };
            SentEmailsDialog.prototype.getService = function () { return Administration.SentEmailsService.baseUrl; };
            SentEmailsDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadOnly(this.form.Subject, true);
                }
                var items = this.form.ToEmail.get_items();
                items = items.filter(function (item) { return typeof item.source["Email"] !== 'undefined'; });
                this.form.ToEmail.items = items;
            };
            return SentEmailsDialog;
        }(Serenity.EntityDialog));
        SentEmailsDialog = SentEmailsDialog_1 = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], SentEmailsDialog);
        Administration.SentEmailsDialog = SentEmailsDialog;
        var SentEmailsDialog_1;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_49) {
    var PatientManagement;
    (function (PatientManagement) {
        var SentEmailsToEmailFormatter = (function () {
            function SentEmailsToEmailFormatter() {
            }
            SentEmailsToEmailFormatter.prototype.format = function (ctx) {
                return "<span class='mail-open-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            return SentEmailsToEmailFormatter;
        }());
        SentEmailsToEmailFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], SentEmailsToEmailFormatter);
        PatientManagement.SentEmailsToEmailFormatter = SentEmailsToEmailFormatter;
        var SentEmailsFromEmailFormatter = (function () {
            function SentEmailsFromEmailFormatter() {
            }
            SentEmailsFromEmailFormatter.prototype.format = function (ctx) {
                return "<span class='mail-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            return SentEmailsFromEmailFormatter;
        }());
        SentEmailsFromEmailFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], SentEmailsFromEmailFormatter);
        PatientManagement.SentEmailsFromEmailFormatter = SentEmailsFromEmailFormatter;
    })(PatientManagement = PatientManagement_49.PatientManagement || (PatientManagement_49.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var SentEmailsGrid = (function (_super) {
            __extends(SentEmailsGrid, _super);
            function SentEmailsGrid(container) {
                return _super.call(this, container) || this;
            }
            SentEmailsGrid.prototype.getColumnsKey = function () { return 'Administration.SentEmails'; };
            SentEmailsGrid.prototype.getDialogType = function () { return Administration.SentEmailsDialog; };
            SentEmailsGrid.prototype.getIdProperty = function () { return Administration.SentEmailsRow.idProperty; };
            SentEmailsGrid.prototype.getLocalTextPrefix = function () { return Administration.SentEmailsRow.localTextPrefix; };
            SentEmailsGrid.prototype.getService = function () { return Administration.SentEmailsService.baseUrl; };
            SentEmailsGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var fld = Administration.SentEmailsRow.Fields;
                columns.splice(1, 0, {
                    field: 'Print Invoice',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action open-email" title="Open Email">' +
                        '<i class="fa fa-file-code-o text-blue"></i> OPEN</a>'; },
                    width: 76,
                    minWidth: 54,
                    maxWidth: 76
                });
                return columns;
            };
            SentEmailsGrid.prototype.onClick = function (e, row, cell) {
                // let base grid handle clicks for its edit links
                _super.prototype.onClick.call(this, e, row, cell);
                // if base grid already handled, we shouldn"t handle it again
                if (e.isDefaultPrevented()) {
                    return;
                }
                // get reference to current item
                var item = this.itemAt(row);
                // get reference to clicked element
                var target = $(e.target);
                if (target.hasClass("view-email-link")) {
                    e.preventDefault();
                    new Administration.ViewEmailDialog(item.SentEmailId, item.ToName, item.InsertDate).dialogOpen();
                }
                if (target.hasClass("open-email")) {
                    e.preventDefault();
                    new Administration.ViewEmailDialog(item.SentEmailId, item.ToName, item.InsertDate).dialogOpen();
                }
            };
            return SentEmailsGrid;
        }(Serenity.EntityGrid));
        SentEmailsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SentEmailsGrid);
        Administration.SentEmailsGrid = SentEmailsGrid;
    })(Administration = PatientManagement.Administration || (PatientManagement.Administration = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Administration;
    (function (Administration) {
        var ViewEmailDialog = (function (_super) {
            __extends(ViewEmailDialog, _super);
            function ViewEmailDialog(entityId, toEmail, insertedDate) {
                var _this = _super.call(this) || this;
                _this.toEmail = toEmail;
                _this.emailId = entityId;
                _this.insertedDate = insertedDate;
                return _this;
            }
            ViewEmailDialog.prototype.onDialogOpen = function () {
                var _this = this;
                _super.prototype.onDialogOpen.call(this);
                Administration.SentEmailsService.Retrieve({
                    EntityId: this.emailId
                }, function (response) {
                    _this.email = response.Entity;
                    console.log(_this.email);
                    $('#email-body').contents().find('html').html(_this.email.Body);
                });
                //TODO get emaiil body here 
            };
            ViewEmailDialog.prototype.getTemplate = function () {
                // you could also put this in a Email.Template.html file. it's here for simplicity.
                return "<div id='~_Email'><iframe style='width: 100%; min-height: 620px; height: 100%' id='email-body'> </iframe></div>";
            };
            return ViewEmailDialog;
        }(Serenity.TemplatedDialog));
        ViewEmailDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.resizable(),
            Serenity.Decorators.maximizable()
        ], ViewEmailDialog);
        Administration.ViewEmailDialog = ViewEmailDialog;
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
        var SubscriptionsDialog = (function (_super) {
            __extends(SubscriptionsDialog, _super);
            function SubscriptionsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.SubscriptionsForm(_this.idPrefix);
                _this.form.OfferId.changeSelect2(function (e) {
                    var OfferId = Q.toId(_this.form.OfferId.value);
                    if (OfferId != null) {
                        _this.form.FreeDaysFromOffer.value = Administration.OffersRow.getLookup().itemById[OfferId].MaximumSubscriptionTime;
                    }
                });
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
            SubscriptionsGrid.prototype.getIsActiveProperty = function () { return Administration.OffersRow.isActiveProperty; };
            SubscriptionsGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var fld = Administration.SentEmailsRow.Fields;
                columns.splice(2, 0, {
                    field: 'Payment Chart',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action open-diagram-payments" title="Кликни за дата на изтичане">' +
                        '<i class="stock-symbol"></i> Заплатен до</a>'; },
                    width: 176,
                    minWidth: 54,
                    maxWidth: 176
                });
                return columns;
            };
            SubscriptionsGrid.prototype.getItemCssClass = function (item, index) {
                var klass = "";
                if (item.Enabled == 1) {
                    klass += " active";
                }
                return Q.trimToNull(klass);
            };
            SubscriptionsGrid.prototype.onClick = function (e, row, cell) {
                // let base grid handle clicks for its edit links
                _super.prototype.onClick.call(this, e, row, cell);
                // if base grid already handled, we shouldn"t handle it again
                if (e.isDefaultPrevented()) {
                    return;
                }
                // get reference to current item
                var item = this.itemAt(row);
                // get reference to clicked element
                var target = $(e.target);
                if (target.hasClass("open-diagram-payments")) {
                    e.preventDefault();
                    $.get("../../Administration/Subscriptions/GetPayments?subscriptionId=" + item.SubscriptionId, function (data) {
                        console.log(data);
                        var date = new Date(data.SubscriptionPayedPeriod);
                        target.removeClass('open-diagram-payments');
                        target.html('<i class="stock-symbol"></i> ' + date.toLocaleDateString('bg'));
                    });
                }
            };
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
            TenantGrid.prototype.getIsActiveProperty = function () { return Administration.OffersRow.isActiveProperty; };
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
                Q.confirm(Q.text('Validation.PendingChangesConfirmation'), function () { return element.find('div.save-and-close-button').click(); }, {
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
    var Common;
    (function (Common) {
        var IcsExportHelper;
        (function (IcsExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.title, 'Outlook'),
                    title: Q.coalesce(options.hint, ''),
                    cssClass: "export-docx-button",
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
                        for (var _i = 0, columns_2 = columns; _i < columns_2.length; _i++) {
                            var column = columns_2[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            IcsExportHelper.createToolButton = createToolButton;
        })(IcsExportHelper = Common.IcsExportHelper || (Common.IcsExportHelper = {}));
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
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
var PatientManagement;
(function (PatientManagement) {
    var LKCodeDescr = (function (_super) {
        __extends(LKCodeDescr, _super);
        function LKCodeDescr(container, opt) {
            var _this = _super.call(this, container, opt) || this;
            container.data("codeName", opt.codeFieldName);
            container.data("descrName", opt.descrFieldName);
            return _this;
        }
        LKCodeDescr.prototype.getSelect2Options = function () {
            var selec2Options = _super.prototype.getSelect2Options.call(this);
            selec2Options.formatResult = this.myFormatResult;
            selec2Options.formatSelection = this.myFormatSelection;
            return selec2Options;
        };
        LKCodeDescr.prototype.myFormatSelection = function (item) {
            var code = item.source[this.element.data("codeName")];
            var descr = item.source[this.element.data("descrName")];
            var title = "Code: " + code;
            title += " - " + descr;
            return "<div title='" + title + "'><b>" + code + "</b>&nbsp;-&nbsp;" + descr + "</div>";
        };
        LKCodeDescr.prototype.myFormatResult = function (item) {
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
        };
        return LKCodeDescr;
    }(Serenity.LookupEditorBase));
    LKCodeDescr = __decorate([
        Serenity.Decorators.registerEditor()
    ], LKCodeDescr);
    PatientManagement.LKCodeDescr = LKCodeDescr;
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
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var RecieveNotificationToggle = (function (_super) {
            __extends(RecieveNotificationToggle, _super);
            function RecieveNotificationToggle(input, opt) {
                var _this = _super.call(this, input, opt) || this;
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
(function (PatientManagement_50) {
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
            VisitsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(PatientManagement_50.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    hint: 'Export to Excel',
                    title: 'Export to Excel',
                    service: PatientManagement.VisitsService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(PatientManagement_50.Common.IcsExportHelper.createToolButton({
                    grid: this,
                    hint: 'Export to Outlook, Google Calendar etc.',
                    title: 'Export to Outlook, Google Calendar etc.',
                    service: PatientManagement.VisitsService.baseUrl + '/ListIcs',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true,
                }));
                return buttons;
            };
            VisitsGrid.prototype.getQuickFilters = function () {
                // get quick filter list from base class
                var filters = _super.prototype.getQuickFilters.call(this);
                var cookie = $.cookie("CabinetPreference");
                var fields = PatientManagement.VisitsRow.Fields;
                if (cookie) {
                    Q.first(filters, function (x) { return x.field == fields.CabinetId; }).init = function (w) {
                        w.value = cookie;
                        if (PatientManagement_50.Authorization.userDefinition.RestrictedToCabinets == 1)
                            w.element.prop('readonly', true);
                    };
                }
                var q = Q.parseQueryString();
                if (q["visittype"]) {
                    var category = Q.tryFirst(filters, function (x) { return x.field == fields.VisitTypeId; });
                    category.init = function (e) {
                        e.element.getWidget(Serenity.LookupEditor).value = q["visittype"];
                    };
                }
                return filters;
            };
            return VisitsGrid;
        }(Serenity.EntityGrid));
        VisitsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], VisitsGrid);
        PatientManagement.VisitsGrid = VisitsGrid;
    })(PatientManagement = PatientManagement_50.PatientManagement || (PatientManagement_50.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../../../PatientManagement/Visits/VisitsGrid.ts" />
var PatientManagement;
(function (PatientManagement) {
    var Membership;
    (function (Membership) {
        var VisitsGrid = PatientManagement.PatientManagement.VisitsGrid;
        var AddedVisitsFromUserPanel = (function (_super) {
            __extends(AddedVisitsFromUserPanel, _super);
            function AddedVisitsFromUserPanel(container, userId) {
                var _this = _super.call(this, container) || this;
                _this.insertUserId = userId;
                return _this;
            }
            AddedVisitsFromUserPanel.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this);
            };
            AddedVisitsFromUserPanel.prototype.getInitialTitle = function () {
                return null;
            };
            AddedVisitsFromUserPanel.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.insertUserId;
            };
            Object.defineProperty(AddedVisitsFromUserPanel.prototype, "insertUserId", {
                get: function () {
                    return this._insertUserId;
                },
                set: function (value) {
                    if (this._insertUserId !== value) {
                        this._insertUserId = value;
                        this.setEquality('InsertUserId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            return AddedVisitsFromUserPanel;
        }(VisitsGrid));
        AddedVisitsFromUserPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], AddedVisitsFromUserPanel);
        Membership.AddedVisitsFromUserPanel = AddedVisitsFromUserPanel;
    })(Membership = PatientManagement.Membership || (PatientManagement.Membership = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Membership;
    (function (Membership) {
        var EditTenantPanel = (function (_super) {
            __extends(EditTenantPanel, _super);
            function EditTenantPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.EditTenantForm(_this.idPrefix);
                var tenant = {};
                PatientManagement.Administration.TenantService.Retrieve({
                    EntityId: PatientManagement.Authorization.userDefinition.TenantId
                }, function (resp) {
                    tenant = resp.Entity;
                    _this.form.TenantName.value = tenant.TenantName;
                    _this.form.TenantWebSite.value = tenant.TenantWebSite;
                    if (_this.form.TenantImage.value != null)
                        _this.form.TenantImage.value.Filename = tenant.TenantImage;
                    _this.form.TenantEmailSignature.value = tenant.TenantEmailSignature;
                    // this.form.OverrideUsersEmailSignature = tenant.OverrideUsersEmailSignature;
                    //this.form.WorkHoursEnd.value = tenant.WorkHoursEnd;
                    //this.form.WorkHoursStart.value = tenant.WorkHoursStart;
                });
                _this.byId('EditTenantSubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/EditTenant'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.Profile.SuccessTenant'), function () {
                                //window.location.href = Q.resolveUrl('~/');
                                location.reload();
                            });
                        }
                    });
                });
                return _this;
            }
            EditTenantPanel.prototype.getFormKey = function () { return Membership.EditTenantForm.formKey; };
            return EditTenantPanel;
        }(Serenity.PropertyPanel));
        EditTenantPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], EditTenantPanel);
        Membership.EditTenantPanel = EditTenantPanel;
    })(Membership = PatientManagement.Membership || (PatientManagement.Membership = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Membership;
    (function (Membership) {
        var EditUserProfilePanel = (function (_super) {
            __extends(EditUserProfilePanel, _super);
            function EditUserProfilePanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.EditUserProfileForm(_this.idPrefix);
                var user = {};
                PatientManagement.Administration.UserService.Retrieve({
                    EntityId: PatientManagement.Authorization.userDefinition.UserId
                }, function (resp) {
                    user = resp.Entity;
                    _this.form.DisplayName.value = user.DisplayName;
                    if (user.UserImage != null)
                        //TODO how to add image to ImageUploadEditor
                        _this.form.PhoneNumber.value = user.PhoneNumber;
                    _this.form.Email.value = user.Email;
                    _this.form.WebSite.value = user.WebSite;
                    _this.form.EmailSignature.value = user.EmailSignature;
                    _this.form.EmailSignature.element.triggerHandler('shown');
                });
                _this.byId('EditUserProfileSubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/EditUserProfile'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.Profile.Success'), function () {
                                location.reload();
                            });
                        }
                    });
                });
                return _this;
            }
            EditUserProfilePanel.prototype.getFormKey = function () { return Membership.EditUserProfileForm.formKey; };
            return EditUserProfilePanel;
        }(Serenity.PropertyPanel));
        EditUserProfilePanel = __decorate([
            Serenity.Decorators.registerClass()
        ], EditUserProfilePanel);
        Membership.EditUserProfilePanel = EditUserProfilePanel;
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
/// <reference types="jqueryui" />
var PatientManagement;
(function (PatientManagement_51) {
    var PatientManagement;
    (function (PatientManagement) {
        var OfferDropDownEditor = (function (_super) {
            __extends(OfferDropDownEditor, _super);
            function OfferDropDownEditor(container) {
                var _this = _super.call(this, container, null) || this;
                $.get("/api/offers/bgn", function (data) {
                    for (var offer in data) {
                        var off = data[offer];
                        _this.addOption(off.OfferId, off.OfferName);
                    }
                    var offerQ = Q.parseQueryString();
                    var offerId = offerQ['offerId'] || offerQ['OfferId'] || offerQ['offerid'];
                    if (offerId) {
                        _this.value = offerId;
                    }
                });
                return _this;
            }
            return OfferDropDownEditor;
        }(Serenity.Select2Editor));
        OfferDropDownEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], OfferDropDownEditor);
        PatientManagement.OfferDropDownEditor = OfferDropDownEditor;
    })(PatientManagement = PatientManagement_51.PatientManagement || (PatientManagement_51.PatientManagement = {}));
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
                    if (!$('#accept-terms').parent(".icheckbox_square-blue").hasClass("checked")) {
                        Q.notifyError(Q.text('Forms.Membership.SignUp.AcceptTermsAndConditionsError'));
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            TenantName: _this.form.TenantName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value,
                            OfferId: _this.form.OfferId.value
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
(function (PatientManagement_52) {
    var PatientManagement;
    (function (PatientManagement) {
        var ActivityDialog = (function (_super) {
            __extends(ActivityDialog, _super);
            function ActivityDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PatientManagement.ActivityForm(_this.idPrefix);
                PatientManagement_52.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            ActivityDialog.prototype.getFormKey = function () { return PatientManagement.ActivityForm.formKey; };
            ActivityDialog.prototype.getIdProperty = function () { return PatientManagement.ActivityRow.idProperty; };
            ActivityDialog.prototype.getLocalTextPrefix = function () { return PatientManagement.ActivityRow.localTextPrefix; };
            ActivityDialog.prototype.getNameProperty = function () { return PatientManagement.ActivityRow.nameProperty; };
            ActivityDialog.prototype.getService = function () { return PatientManagement.ActivityService.baseUrl; };
            ActivityDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            ActivityDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            return ActivityDialog;
        }(Serenity.EntityDialog));
        ActivityDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ActivityDialog);
        PatientManagement.ActivityDialog = ActivityDialog;
    })(PatientManagement = PatientManagement_52.PatientManagement || (PatientManagement_52.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_53) {
    var PatientManagement;
    (function (PatientManagement) {
        var ActivityGrid = (function (_super) {
            __extends(ActivityGrid, _super);
            function ActivityGrid(container) {
                return _super.call(this, container) || this;
            }
            ActivityGrid.prototype.getColumnsKey = function () { return 'PatientManagement.Activity'; };
            ActivityGrid.prototype.getDialogType = function () { return PatientManagement.ActivityDialog; };
            ActivityGrid.prototype.getIdProperty = function () { return PatientManagement.ActivityRow.idProperty; };
            ActivityGrid.prototype.getLocalTextPrefix = function () { return PatientManagement.ActivityRow.localTextPrefix; };
            ActivityGrid.prototype.getService = function () { return PatientManagement.ActivityService.baseUrl; };
            return ActivityGrid;
        }(Serenity.EntityGrid));
        ActivityGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ActivityGrid);
        PatientManagement.ActivityGrid = ActivityGrid;
    })(PatientManagement = PatientManagement_53.PatientManagement || (PatientManagement_53.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference types="jqueryui" />
/// <reference types="fullcalendar" />
var PatientManagement;
(function (PatientManagement_54) {
    var PatientManagement;
    (function (PatientManagement) {
        var CabinetsDialog = (function (_super) {
            __extends(CabinetsDialog, _super);
            function CabinetsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PatientManagement.CabinetsForm(_this.idPrefix);
                _this.form.WorkHoursEnd.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.WorkHoursEnd != null &&
                        _this.form.WorkHoursStart != null &&
                        _this.form.WorkHoursStart > _this.form.WorkHoursEnd ||
                        _this.form.WorkHoursStart == _this.form.WorkHoursEnd) {
                        return Q.text("Site.Dashboard.ErrorEndDateBiggerThanStartDate");
                    }
                    return null;
                });
                _this.form.WorkHoursStart.change(function (elem) {
                    var dateStart = this.form.WorkHoursStart;
                    this.form.WorkHoursEnd = dateStart;
                });
                _this.form.WorkDays.items = [];
                for (var i = 1; i < 8; i++) {
                    _this.form.WorkDays.addItem({
                        id: i.toString(),
                        text: Q.tryGetText("Enums.PatientManagement.PatientManagement.WeekDays." + PatientManagement.WeekDays[i])
                    });
                }
                return _this;
            }
            CabinetsDialog.prototype.getFormKey = function () { return PatientManagement.CabinetsForm.formKey; };
            CabinetsDialog.prototype.getIdProperty = function () { return PatientManagement.CabinetsRow.idProperty; };
            CabinetsDialog.prototype.getLocalTextPrefix = function () { return PatientManagement.CabinetsRow.localTextPrefix; };
            CabinetsDialog.prototype.getNameProperty = function () { return PatientManagement.CabinetsRow.nameProperty; };
            CabinetsDialog.prototype.getService = function () { return PatientManagement.CabinetsService.baseUrl; };
            CabinetsDialog.prototype.onSaveSuccess = function (response) {
                PatientManagement.CabinetsService.List({}, function (response) {
                    if (response.TotalCount === 1) {
                        $.cookie('CabinetPreference', response.Entities[0].CabinetId, {
                            path: Q.Config.applicationPath,
                            expires: 365
                        });
                    }
                });
                if ($("#calendar").length > 0) {
                    $("#calendar").fullCalendar('refetchEvents');
                }
            };
            return CabinetsDialog;
        }(Serenity.EntityDialog));
        CabinetsDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], CabinetsDialog);
        PatientManagement.CabinetsDialog = CabinetsDialog;
    })(PatientManagement = PatientManagement_54.PatientManagement || (PatientManagement_54.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_55) {
    var PatientManagement;
    (function (PatientManagement) {
        var CabinetsFormatter = (function () {
            function CabinetsFormatter() {
            }
            CabinetsFormatter.prototype.format = function (ctx) {
                return "<span class='home-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            return CabinetsFormatter;
        }());
        CabinetsFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], CabinetsFormatter);
        PatientManagement.CabinetsFormatter = CabinetsFormatter;
    })(PatientManagement = PatientManagement_55.PatientManagement || (PatientManagement_55.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_56) {
    var PatientManagement;
    (function (PatientManagement) {
        var CabinetsGrid = (function (_super) {
            __extends(CabinetsGrid, _super);
            function CabinetsGrid(container) {
                return _super.call(this, container) || this;
            }
            CabinetsGrid.prototype.getColumnsKey = function () { return 'PatientManagement.Cabinets'; };
            CabinetsGrid.prototype.getDialogType = function () { return PatientManagement.CabinetsDialog; };
            CabinetsGrid.prototype.getIdProperty = function () { return PatientManagement.CabinetsRow.idProperty; };
            CabinetsGrid.prototype.getLocalTextPrefix = function () { return PatientManagement.CabinetsRow.localTextPrefix; };
            CabinetsGrid.prototype.getIsActiveProperty = function () { return PatientManagement.CabinetsRow.isActiveProperty; };
            CabinetsGrid.prototype.getService = function () { return PatientManagement.CabinetsService.baseUrl; };
            return CabinetsGrid;
        }(Serenity.EntityGrid));
        CabinetsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CabinetsGrid);
        PatientManagement.CabinetsGrid = CabinetsGrid;
    })(PatientManagement = PatientManagement_56.PatientManagement || (PatientManagement_56.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_57) {
    var PatientManagement;
    (function (PatientManagement) {
        var CabinetsListFormatter = (function () {
            function CabinetsListFormatter() {
            }
            CabinetsListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "<span class='home-symbol'></span>";
                var byId = PatientManagement.CabinetsRow.getLookup().itemById;
                var z;
                return "<span class='home-symbol'>" + Q.htmlEncode(idList.map(function (x) { return ((z = byId[x]) ? z.Name : x); }).join(", ")) + '</span>';
            };
            return CabinetsListFormatter;
        }());
        CabinetsListFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], CabinetsListFormatter);
        PatientManagement.CabinetsListFormatter = CabinetsListFormatter;
    })(PatientManagement = PatientManagement_57.PatientManagement || (PatientManagement_57.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_58) {
    var PatientManagement;
    (function (PatientManagement) {
        var UserListFormatter = (function () {
            function UserListFormatter() {
            }
            UserListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = PatientManagement_58.Administration.UserRow.getLookup().itemById;
                var z;
                return "<span class='briefcase-symbol'>" + Q.htmlEncode(idList.map(function (x) { return ((z = byId[x]) ? z.DisplayName : x); }).join(", ")) + '</span>';
            };
            return UserListFormatter;
        }());
        UserListFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], UserListFormatter);
        PatientManagement.UserListFormatter = UserListFormatter;
    })(PatientManagement = PatientManagement_58.PatientManagement || (PatientManagement_58.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_59) {
    var PatientManagement;
    (function (PatientManagement) {
        var WorkDaysListFormatter = (function () {
            function WorkDaysListFormatter() {
            }
            WorkDaysListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var text = "<span class='calendar-day-symbol'>";
                var listDays = new Array();
                for (var id in idList.sort()) {
                    listDays.push(Q.tryGetText("Enums.PatientManagement.PatientManagement.WeekDays." + PatientManagement.WeekDays[idList[id]]));
                }
                text += listDays.join(', ');
                text += '</span>';
                return text;
            };
            return WorkDaysListFormatter;
        }());
        WorkDaysListFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], WorkDaysListFormatter);
        PatientManagement.WorkDaysListFormatter = WorkDaysListFormatter;
    })(PatientManagement = PatientManagement_59.PatientManagement || (PatientManagement_59.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_60) {
    var PatientManagement;
    (function (PatientManagement) {
        var CalendarCabinetsEditor = (function (_super) {
            __extends(CalendarCabinetsEditor, _super);
            function CalendarCabinetsEditor(container) {
                var _this = _super.call(this, container, null) || this;
                PatientManagement.CabinetsService.List({}, function (response) {
                    if (response.TotalCount === 0) {
                        _this.readOnly = true;
                    }
                    else if (response.TotalCount === 1) {
                        _this.addItem({
                            id: response.Entities[0].CabinetId + "",
                            text: response.Entities[0].Name,
                        });
                        _this.value = response.Entities[0].CabinetId + "";
                        _this.readOnly = true;
                    }
                    else {
                        for (var i = 0; i < response.TotalCount; i++) {
                            _this.addItem({
                                id: response.Entities[i].CabinetId + "",
                                text: response.Entities[i].Name,
                            });
                        }
                        var cookie = $.cookie("CabinetPreference");
                        _this.value = cookie + "";
                    }
                });
                _this.changeSelect2(function (e) {
                    if (!_this.value) {
                        return;
                    }
                    $.cookie('CabinetPreference', _this.value, {
                        path: Q.Config.applicationPath,
                        expires: 1
                    });
                    PatientManagement.CabinetsService.RetrieveWorkHours({
                        EntityId: _this.value
                    }, function (response) {
                        var entity = response.Entity;
                        $('#calendar').fullCalendar('option', {
                            businessHours: [
                                {
                                    dow: entity.workDays,
                                    start: entity.start,
                                    end: entity.end
                                }
                            ]
                        });
                        if ($('#cabinet-name-right-header').length > 0) {
                            $('#cabinet-name-right-header').html(_this.get_text()
                                + "<small style='display: inline - block'> - "
                                + Q.text("Site.Dashboard.WorkHoursDescription")
                                + " "
                                + entity.start
                                + " - "
                                + entity.end
                                + "</small>");
                        }
                    });
                    $("#calendar").fullCalendar('refetchEvents');
                    new PatientManagement.CalendarVisitsDialog().refreshVisitForTodayBox();
                });
                return _this;
            }
            CalendarCabinetsEditor.prototype.getService = function () { return PatientManagement.CabinetsService.baseUrl; };
            return CalendarCabinetsEditor;
        }(Serenity.Select2Editor));
        CalendarCabinetsEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], CalendarCabinetsEditor);
        PatientManagement.CalendarCabinetsEditor = CalendarCabinetsEditor;
    })(PatientManagement = PatientManagement_60.PatientManagement || (PatientManagement_60.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_61) {
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
                _this.checkPhone = function (phone) {
                    if (phone.length > 30)
                        return false;
                    if (/[^0-9]/.test(phone))
                        return false;
                    return true;
                };
                _this.isValidDate = function (y, m, d) {
                    var date = new Date(y, m - 1, d);
                    return date && (date.getMonth() + 1) == m && date.getDate() == Number(d);
                };
                _this.form.PersonalNumber.addValidationRule(_this.uniqueName, function (e) {
                    if (!_this.checkEgn(_this.form.PersonalNumber.value)) {
                        return Q.text("Controls.EntityDialog.SaveSuccessMessage");
                    }
                    return null;
                });
                _this.form.PhoneNumber.addValidationRule(_this.uniqueName, function (s) {
                    if (!_this.checkPhone(_this.form.PhoneNumber.value)) {
                        return Q.text("Controls.EntityDialog.SaveSuccessMessage");
                    }
                    return null;
                });
                _this.visitsGrid = new PatientManagement.PatientVisitsGrid(_this.byId("VisitsGrid"));
                _this.visitsGrid.element.flexHeightOnly(1);
                _this.patientHealthGrid = new PatientManagement.PatientHealthCheckGrid(_this.byId("HealthChecksGrid"));
                _this.patientHealthGrid.element.flexHeightOnly(1);
                _this.patientlifeStyleGrid = new PatientManagement.PatientLifeStylesGrid(_this.byId("LifeStyleGrid"));
                _this.patientlifeStyleGrid.element.flexHeightOnly(1);
                _this.patientActivityGrid = new PatientManagement.PatientActivityGrid(_this.byId("ActivityGrid"));
                _this.patientActivityGrid.element.flexHeightOnly(1);
                _this.patientsFileUploadsGrid = new PatientManagement.FIleUploadsForPatientGrid(_this.byId("FileUploadsPropertyGrid"));
                _this.patientsFileUploadsGrid.element.flexHeightOnly(1);
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                PatientManagement_61.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
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
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Visits', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'HealthChecks', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'LifeStyle', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Activity', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'FileUploads', this.isNewOrDeleted());
                this.visitsGrid.patientId = entity.PatientId;
                this.patientHealthGrid.patientId = entity.PatientId;
                this.patientsFileUploadsGrid.patientId = entity.PatientId;
                this.patientActivityGrid.patientId = entity.PatientId;
                this.patientlifeStyleGrid.patientId = entity.PatientId;
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
    })(PatientManagement = PatientManagement_61.PatientManagement || (PatientManagement_61.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../Patients/PatientsDialog.ts" />
var PatientManagement;
(function (PatientManagement_62) {
    var PatientManagement;
    (function (PatientManagement) {
        var CalendarPatientDialog = (function (_super) {
            __extends(CalendarPatientDialog, _super);
            function CalendarPatientDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CalendarPatientDialog.prototype.onSaveSuccess = function (response) {
                $("#calendar").fullCalendar('refetchEvents');
            };
            CalendarPatientDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.EditorUtils.setReadOnly(this.form.Name, true);
            };
            return CalendarPatientDialog;
        }(PatientManagement.PatientsDialog));
        CalendarPatientDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], CalendarPatientDialog);
        PatientManagement.CalendarPatientDialog = CalendarPatientDialog;
    })(PatientManagement = PatientManagement_62.PatientManagement || (PatientManagement_62.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference types="jquery" />
var PatientManagement;
(function (PatientManagement_63) {
    var PatientManagement;
    (function (PatientManagement) {
        var VisitsDialog = (function (_super) {
            __extends(VisitsDialog, _super);
            function VisitsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PatientManagement.VisitsForm(_this.idPrefix);
                _this.form.PatientId.changeSelect2(function (e) {
                    var patientId = _this.form.PatientId.value;
                    PatientManagement.PatientsService.Retrieve({
                        EntityId: patientId
                    }, function (response) {
                        if (response.Entity.NotifyOnChange) {
                            var parentCat = _this.form.PatientId.element.parents(".categories ");
                            console.log(parentCat);
                            var text = Q.text("Site.Dashboard.AlertMessagePatientWithNotificationActiveVisitDialog");
                            parentCat.append("<div class='alert alert-info' style='display: none' id='automatic-notification-email'>" + text + "</div>");
                            $("#automatic-notification-email").show(200);
                        }
                        else {
                            $("#automatic-notification-email").hide(200);
                        }
                    });
                });
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
            VisitsDialog.prototype.updateInterface = function () {
                // by default cloneButton is hidden in base UpdateInterface method
                _super.prototype.updateInterface.call(this);
                // here we show it if it is edit mode (not new)
                this.cloneButton.toggle(this.isEditMode());
            };
            VisitsDialog.prototype.getCloningEntity = function () {
                var clone = _super.prototype.getCloningEntity.call(this);
                var dateStart = Q.parseDate(clone.StartDate);
                var dateEnd = Q.parseDate(clone.EndDate);
                dateStart.setDate(dateStart.getDate() + parseInt("1"));
                dateEnd.setDate(dateEnd.getDate() + parseInt("1"));
                clone.StartDate = dateStart.toISOString();
                clone.EndDate = dateEnd.toISOString();
                return clone;
            };
            return VisitsDialog;
        }(Serenity.EntityDialog));
        VisitsDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], VisitsDialog);
        PatientManagement.VisitsDialog = VisitsDialog;
    })(PatientManagement = PatientManagement_63.PatientManagement || (PatientManagement_63.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../Visits/VisitsDialog.ts" />
/// <reference types="jqueryui" />
/// <reference types="fullcalendar" />
var PatientManagement;
(function (PatientManagement_64) {
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
                        EndDate: end,
                        CabinetId: $.cookie("CabinetPreference")
                    });
                };
                _this.updateVisit = function (visitId, start, end) {
                    PatientManagement.VisitsService.Retrieve({
                        EntityId: visitId
                    }, function (resp) {
                        p = resp.Entity;
                        Q.notifyInfo(Q.text("Site.Dashboard.SuccessChangedVisitDates") + p.PatientName);
                        var beforeDateStart = resp.Entity.StartDate;
                        var beforeDateEnd = resp.Entity.EndDate;
                        var p = {};
                        p.StartDate = start;
                        p.EndDate = end;
                        PatientManagement.VisitsService.Update({
                            Entity: p,
                            EntityId: visitId
                        }, function (response) {
                            Q.reloadLookup(PatientManagement.VisitsRow.lookupKey);
                            $('#VisitsGridDiv .refresh-button').click();
                            if (new Date(start).getDay() === new Date().getDay() ||
                                new Date(end).getDay() === new Date().getDay() ||
                                new Date(beforeDateStart).getDay() === new Date().getDay() ||
                                new Date(beforeDateEnd).getDay() === new Date().getDay()) {
                                _this.refreshVisitForTodayBox();
                            }
                        });
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
                var _this = this;
                _super.prototype.updateTitle.call(this);
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadOnly(this.form.PatientId, true);
                    Serenity.EditorUtils.setReadOnly(this.form.CabinetId, true);
                    var patientId = this.form.PatientId.value;
                    PatientManagement.PatientsService.Retrieve({
                        EntityId: patientId
                    }, function (response) {
                        if (response.Entity.NotifyOnChange) {
                            var parentCat = _this.form.PatientId.element.parents(".categories ");
                            console.log(parentCat);
                            var text = Q.text("Site.Dashboard.AlertMessagePatientWithNotificationActiveVisitDialog");
                            parentCat.append("<div class='alert alert-info' style='display: none' id='automatic-notification-email'>" +
                                text +
                                "</div>");
                            $("#automatic-notification-email").show(200);
                        }
                        else {
                            $("#automatic-notification-email").hide(200);
                        }
                    });
                }
                else {
                    this.form.CabinetId.value = $.cookie("CabinetPreference");
                }
            };
            CalendarVisitsDialog.prototype.onSaveSuccess = function (response) {
                this.refreshVisitForTodayBox();
                $("#calendar").fullCalendar('refetchEvents');
            };
            CalendarVisitsDialog.prototype.refreshVisitForTodayBox = function () {
                $.get('/Dashboard/GetTodayVisits/', function (data) {
                    $('#today-visit-counter').text(data.countVisitsForToday);
                    var width = (data.alreadyExpired / data.countVisitsForToday) * 100;
                    $('#today-visits-progress').attr('aria-valuemax', data.countVisitsForToday);
                    $('#today-visits-progress').attr('aria-valuenow', data.alreadyExpired).css('width', width + '%');
                });
            };
            CalendarVisitsDialog.prototype.onDeleteSuccess = function (response) {
                this.refreshVisitForTodayBox();
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
    })(PatientManagement = PatientManagement_64.PatientManagement || (PatientManagement_64.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../Visits/VisitsGrid.ts" />
var PatientManagement;
(function (PatientManagement_65) {
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
    })(PatientManagement = PatientManagement_65.PatientManagement || (PatientManagement_65.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference types="jqueryui" />
/// <reference types="bootstrap"/>
var PatientManagement;
(function (PatientManagement_66) {
    var PatientManagement;
    (function (PatientManagement) {
        var HelloModal = (function (_super) {
            __extends(HelloModal, _super);
            function HelloModal(elem, opt) {
                var _this = _super.call(this, elem, opt) || this;
                _this.formCabinet = new PatientManagement_66.Common.HelloModalAddCabinetPanel(_this.byId("ModalBodyCabinet"));
                _this.formPatient = new PatientManagement_66.Common.HelloModalAddPatientPanel(_this.byId("ModalBodyPatient"));
                _this.formVisitType = new PatientManagement_66.Common.HelloModalAddVisitTypePanel(_this.byId("ModalBodyVisitType"));
                _this.formVisit = new PatientManagement_66.Common.HelloModalAddVisitPanel(_this.byId("ModalBodyVisit"));
                _this.formPatient.init();
                _this.formCabinet.init();
                _this.formVisitType.init();
                _this.formVisit.init();
                _this.byId('ModalBodyInformation').attr("data-step", 1);
                $('#helloModal .modal').modal('show');
                var steps = 1;
                PatientManagement.CabinetsService.List({ Take: 1 }, function (response) {
                    if (response.TotalCount > 0) {
                        elem.find("#cabinets-box-modal").addClass("bg-green-gradient");
                    }
                    else {
                        elem.find("#cabinets-box-modal").addClass("bg-blue-gradient");
                        steps += 1;
                        _this.byId('btn-continue-modal').attr("data-steps", steps);
                        $("#cabinet-step").attr("data-step", steps);
                    }
                    PatientManagement.VisitTypesService.List({ Take: 1 }, function (response) {
                        if (response.TotalCount > 0) {
                            elem.find("#visitTypes-box-modal").addClass("bg-green-gradient");
                        }
                        else {
                            elem.find("#visitTypes-box-modal").addClass("bg-blue-gradient");
                            steps += 1;
                            _this.byId('btn-continue-modal').attr("data-steps", steps);
                            $("#visit-type-step").attr("data-step", steps);
                        }
                        PatientManagement.PatientsService.List({ Take: 1 }, function (response) {
                            if (response.TotalCount > 0) {
                                elem.find("#patients-box-modal").addClass("bg-green-gradient");
                            }
                            else {
                                elem.find("#patients-box-modal").addClass("bg-blue-gradient");
                                steps += 1;
                                _this.byId('btn-continue-modal').attr("data-steps", steps);
                                $("#patient-step").attr("data-step", steps);
                            }
                            PatientManagement.VisitsService.List({ Take: 1 }, function (response) {
                                if (response.TotalCount > 0) {
                                    elem.find("#visits-box-modal").addClass("bg-green-gradient");
                                }
                                else {
                                    elem.find("#visits-box-modal").addClass("bg-blue-gradient");
                                    steps += 1;
                                    _this.byId('btn-continue-modal').attr("data-steps", steps);
                                    $("#visit-step").attr("data-step", steps);
                                }
                                $('#last-step').attr("data-step", steps + 1);
                            });
                        });
                    });
                });
                _this.byId('btn-continue-modal').attr("data-current-step", 1);
                $('#btn-close-hellomodal').mousedown(function (e) {
                    var dataCurrentStep = Q.parseInteger($('#btn-close-hellomodal').attr("data-reaload-page"));
                    if (dataCurrentStep === 1) {
                        window.location.reload();
                    }
                });
                $('.btn-continiue-hellomodal').click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var dataCurrentStep = Q.parseInteger($('.btn-continiue-hellomodal').attr("data-current-step"));
                    var dataSteps = Q.parseInteger($('.btn-continiue-hellomodal').attr("data-steps"));
                    var dataNextStep = dataCurrentStep + 1;
                    var thisElem = $('#helloModal').find("[data-step='" + dataCurrentStep + "']");
                    var nextElem = $('#helloModal').find("[data-step='" + dataNextStep + "']");
                    var thisElemId = thisElem.attr("id");
                    if (!_this.validateFormById(thisElemId))
                        return;
                    if (dataCurrentStep < dataSteps) {
                        $('.btn-continiue-hellomodal').attr("data-current-step", dataNextStep);
                        if (dataCurrentStep === 1) {
                            $('.btn-continiue-hellomodal').text(Q.text("Site.HelloModal.ButtonContinue"));
                        }
                        if (dataCurrentStep === dataSteps - 1) {
                            $('.btn-continiue-hellomodal').text(Q.text("Site.HelloModal.ButtonFinnish"));
                            $('.btn-continiue-hellomodal').removeClass("btn-default");
                            $('.btn-continiue-hellomodal').addClass("btn-success");
                            $('#hellomodal-fast-continue').hide(200);
                        }
                    }
                    else {
                        $('.btn-continiue-hellomodal').hide(400);
                        $('#btn-close-hellomodal').removeClass("btn-default");
                        $('#btn-close-hellomodal').addClass("btn-success").text(Q.text("Site.HelloModal.ButtonCloseAndFinnish"));
                        $('#btn-close-hellomodal').attr("data-reaload-page", 1);
                    }
                    $(thisElem).hide();
                    // $(thisElem).toggle("slide", () => {
                    //  $(nextElem).toggle("slide");
                    $(nextElem).show();
                    //});
                });
                return _this;
            }
            HelloModal.prototype.validateFormById = function (thisElemId) {
                if (thisElemId === "cabinet-step") {
                    if (!this.formCabinet.ValidateForm()) {
                        return false;
                    }
                    this.formCabinet.SaveEntity();
                }
                if (thisElemId === "patient-step") {
                    if (!this.formPatient.ValidateForm()) {
                        return false;
                    }
                    this.formPatient.SaveEntity();
                }
                if (thisElemId === "visit-type-step") {
                    if (!this.formVisitType.ValidateForm()) {
                        return false;
                    }
                    this.formVisitType.SaveEntity();
                }
                if (thisElemId === "visit-step") {
                    if (!this.formVisit.ValidateForm()) {
                        return false;
                    }
                    this.formVisit.SaveEntity();
                }
                return true;
            };
            return HelloModal;
        }(Serenity.TemplatedWidget));
        PatientManagement.HelloModal = HelloModal;
    })(PatientManagement = PatientManagement_66.PatientManagement || (PatientManagement_66.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var HelloModalAddCabinetPanel = (function (_super) {
            __extends(HelloModalAddCabinetPanel, _super);
            function HelloModalAddCabinetPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Common.HelloModalAddCabinetForm(_this.idPrefix);
                _this.toolbar.element.text(Q.text("Site.HelloModal.StepCabinetTitle"));
                return _this;
            }
            HelloModalAddCabinetPanel.prototype.getFormKey = function () { return Common.HelloModalAddCabinetForm.formKey; };
            HelloModalAddCabinetPanel.prototype.getTemplate = function () {
                // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                return Q.getTemplate("EntityDialogBoxSolid");
            };
            HelloModalAddCabinetPanel.prototype.ValidateForm = function () {
                return this.validateForm();
            };
            HelloModalAddCabinetPanel.prototype.SaveEntity = function () {
                var cabinet = {};
                var entity = this.getSaveEntity();
                cabinet.Name = entity.Name;
                cabinet.WorkHoursEnd = entity.WorkHoursEnd;
                cabinet.WorkHoursStart = entity.WorkHoursStart;
                PatientManagement.PatientManagement.CabinetsService.Create({
                    Entity: cabinet
                }, function (response) {
                    Q.notifySuccess(Q.text("Controls.EntityDialog.SaveSuccessMessage"));
                    Q.reloadLookup(PatientManagement.PatientManagement.CabinetsRow.lookupKey);
                    $('#btn-close-hellomodal').attr("data-reaload-page", 1);
                });
                return true;
            };
            return HelloModalAddCabinetPanel;
        }(Serenity.PropertyPanel));
        Common.HelloModalAddCabinetPanel = HelloModalAddCabinetPanel;
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var HelloModalAddPatientPanel = (function (_super) {
            __extends(HelloModalAddPatientPanel, _super);
            function HelloModalAddPatientPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Common.HelloModalAddPatientForm(_this.idPrefix);
                _this.toolbar.element.text(Q.text("Site.HelloModal.StepPatientTitle"));
                return _this;
            }
            HelloModalAddPatientPanel.prototype.getFormKey = function () { return Common.HelloModalAddPatientForm.formKey; };
            HelloModalAddPatientPanel.prototype.getTemplate = function () {
                // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                return Q.getTemplate("EntityDialogBoxSolid");
            };
            HelloModalAddPatientPanel.prototype.ValidateForm = function () {
                return this.validateForm();
            };
            HelloModalAddPatientPanel.prototype.SaveEntity = function () {
                var entity = {};
                var formEntity = this.getSaveEntity();
                entity.Name = formEntity.Name;
                entity.PhoneNumber = formEntity.PhoneNumber;
                entity.Gender = formEntity.Gender;
                entity.Email = formEntity.Email;
                entity.NotifyOnChange = formEntity.NotifyOnChange;
                PatientManagement.PatientManagement.PatientsService.Create({
                    Entity: entity
                }, function (response) {
                    Q.notifySuccess(Q.text("Controls.EntityDialog.SaveSuccessMessage"));
                    Q.reloadLookup(PatientManagement.PatientManagement.PatientsRow.lookupKey);
                });
                return true;
            };
            return HelloModalAddPatientPanel;
        }(Serenity.PropertyPanel));
        Common.HelloModalAddPatientPanel = HelloModalAddPatientPanel;
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var HelloModalAddVisitPanel = (function (_super) {
            __extends(HelloModalAddVisitPanel, _super);
            function HelloModalAddVisitPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Common.HelloModalAddVisitForm(_this.idPrefix);
                _this.toolbar.element.text(Q.text("Site.HelloModal.StepVisitTitle"));
                return _this;
            }
            HelloModalAddVisitPanel.prototype.getFormKey = function () { return Common.HelloModalAddVisitForm.formKey; };
            HelloModalAddVisitPanel.prototype.getTemplate = function () {
                // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                return Q.getTemplate("EntityDialogBoxSolid");
            };
            HelloModalAddVisitPanel.prototype.ValidateForm = function () {
                return this.validateForm();
            };
            HelloModalAddVisitPanel.prototype.SaveEntity = function () {
                var entity = {};
                var formEntity = this.getSaveEntity();
                entity.PatientId = formEntity.PatientId;
                entity.VisitTypeId = formEntity.VisitTypeId;
                entity.CabinetId = formEntity.CabinetId;
                entity.StartDate = formEntity.StartDate;
                entity.EndDate = formEntity.EndDate;
                entity.Description = formEntity.Description;
                PatientManagement.PatientManagement.VisitsService.Create({
                    Entity: entity
                }, function (response) {
                    Q.notifySuccess(Q.text("Controls.EntityDialog.SaveSuccessMessage"));
                });
                return true;
            };
            return HelloModalAddVisitPanel;
        }(Serenity.PropertyPanel));
        Common.HelloModalAddVisitPanel = HelloModalAddVisitPanel;
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement) {
    var Common;
    (function (Common) {
        var HelloModalAddVisitTypePanel = (function (_super) {
            __extends(HelloModalAddVisitTypePanel, _super);
            function HelloModalAddVisitTypePanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Common.HelloModalAddVisitTypeForm(_this.idPrefix);
                $(".BorderColor input").colorpicker();
                $(".BackgroundColor input").colorpicker();
                Serenity.EditorUtils.setReadOnly(_this.form.BorderColor, true);
                Serenity.EditorUtils.setReadOnly(_this.form.BackgroundColor, true);
                _this.toolbar.element.text(Q.text("Site.HelloModal.StepVisitTypeTitle"));
                return _this;
            }
            HelloModalAddVisitTypePanel.prototype.getFormKey = function () { return Common.HelloModalAddVisitTypeForm.formKey; };
            HelloModalAddVisitTypePanel.prototype.getTemplate = function () {
                // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                return Q.getTemplate("EntityDialogBoxSolid");
            };
            HelloModalAddVisitTypePanel.prototype.ValidateForm = function () {
                return this.validateForm();
            };
            HelloModalAddVisitTypePanel.prototype.SaveEntity = function () {
                var entity = {};
                var formEntity = this.getSaveEntity();
                entity.Name = formEntity.Name;
                entity.BackgroundColor = formEntity.BackgroundColor;
                entity.BorderColor = formEntity.BorderColor;
                PatientManagement.PatientManagement.VisitTypesService.Create({
                    Entity: entity
                }, function (response) {
                    Q.notifySuccess(Q.text("Controls.EntityDialog.SaveSuccessMessage"));
                    Q.reloadLookup(PatientManagement.PatientManagement.VisitTypesRow.lookupKey);
                });
                return true;
            };
            return HelloModalAddVisitTypePanel;
        }(Serenity.PropertyPanel));
        Common.HelloModalAddVisitTypePanel = HelloModalAddVisitTypePanel;
    })(Common = PatientManagement.Common || (PatientManagement.Common = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_67) {
    var PatientManagement;
    (function (PatientManagement) {
        var LifeStylesDialog = (function (_super) {
            __extends(LifeStylesDialog, _super);
            function LifeStylesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PatientManagement.LifeStylesForm(_this.idPrefix);
                PatientManagement_67.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            LifeStylesDialog.prototype.getFormKey = function () { return PatientManagement.LifeStylesForm.formKey; };
            LifeStylesDialog.prototype.getIdProperty = function () { return PatientManagement.LifeStylesRow.idProperty; };
            LifeStylesDialog.prototype.getLocalTextPrefix = function () { return PatientManagement.LifeStylesRow.localTextPrefix; };
            LifeStylesDialog.prototype.getNameProperty = function () { return PatientManagement.LifeStylesRow.nameProperty; };
            LifeStylesDialog.prototype.getService = function () { return PatientManagement.LifeStylesService.baseUrl; };
            LifeStylesDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            LifeStylesDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            return LifeStylesDialog;
        }(Serenity.EntityDialog));
        LifeStylesDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], LifeStylesDialog);
        PatientManagement.LifeStylesDialog = LifeStylesDialog;
    })(PatientManagement = PatientManagement_67.PatientManagement || (PatientManagement_67.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_68) {
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
    })(PatientManagement = PatientManagement_68.PatientManagement || (PatientManagement_68.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_69) {
    var PatientManagement;
    (function (PatientManagement) {
        var MedicalSpecialtyDialog = (function (_super) {
            __extends(MedicalSpecialtyDialog, _super);
            function MedicalSpecialtyDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PatientManagement.MedicalSpecialtyForm(_this.idPrefix);
                return _this;
            }
            MedicalSpecialtyDialog.prototype.getFormKey = function () { return PatientManagement.MedicalSpecialtyForm.formKey; };
            MedicalSpecialtyDialog.prototype.getIdProperty = function () { return PatientManagement.MedicalSpecialtyRow.idProperty; };
            MedicalSpecialtyDialog.prototype.getLocalTextPrefix = function () { return PatientManagement.MedicalSpecialtyRow.localTextPrefix; };
            MedicalSpecialtyDialog.prototype.getNameProperty = function () { return PatientManagement.MedicalSpecialtyRow.nameProperty; };
            MedicalSpecialtyDialog.prototype.getService = function () { return PatientManagement.MedicalSpecialtyService.baseUrl; };
            return MedicalSpecialtyDialog;
        }(Serenity.EntityDialog));
        MedicalSpecialtyDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], MedicalSpecialtyDialog);
        PatientManagement.MedicalSpecialtyDialog = MedicalSpecialtyDialog;
    })(PatientManagement = PatientManagement_69.PatientManagement || (PatientManagement_69.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_70) {
    var PatientManagement;
    (function (PatientManagement) {
        var MedicalSpecialtyExcelImportDialog = (function (_super) {
            __extends(MedicalSpecialtyExcelImportDialog, _super);
            function MedicalSpecialtyExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PatientManagement.MedicalSpecialtyExcelImportForm(_this.idPrefix);
                return _this;
            }
            MedicalSpecialtyExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            MedicalSpecialtyExcelImportDialog.prototype.getImageUploadEditorOptions = function () {
                return {
                    minWidth: 800
                };
            };
            MedicalSpecialtyExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            PatientManagement.MedicalSpecialtyService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: 'Cancel',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            return MedicalSpecialtyExcelImportDialog;
        }(Serenity.PropertyDialog));
        MedicalSpecialtyExcelImportDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], MedicalSpecialtyExcelImportDialog);
        PatientManagement.MedicalSpecialtyExcelImportDialog = MedicalSpecialtyExcelImportDialog;
    })(PatientManagement = PatientManagement_70.PatientManagement || (PatientManagement_70.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_71) {
    var PatientManagement;
    (function (PatientManagement) {
        var MedicalSpecialtyGrid = (function (_super) {
            __extends(MedicalSpecialtyGrid, _super);
            function MedicalSpecialtyGrid(container) {
                return _super.call(this, container) || this;
            }
            MedicalSpecialtyGrid.prototype.getColumnsKey = function () { return 'PatientManagement.MedicalSpecialty'; };
            MedicalSpecialtyGrid.prototype.getDialogType = function () { return PatientManagement.MedicalSpecialtyDialog; };
            MedicalSpecialtyGrid.prototype.getIdProperty = function () { return PatientManagement.MedicalSpecialtyRow.idProperty; };
            MedicalSpecialtyGrid.prototype.getLocalTextPrefix = function () { return PatientManagement.MedicalSpecialtyRow.localTextPrefix; };
            MedicalSpecialtyGrid.prototype.getService = function () { return PatientManagement.MedicalSpecialtyService.baseUrl; };
            MedicalSpecialtyGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(PatientManagement_71.Common.ExcelExportHelper.createToolButton({
                    title: 'Export to Excel',
                    hint: 'Export to Excel',
                    grid: this,
                    service: PatientManagement.MedicalSpecialtyService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push({
                    title: 'Import From Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new PatientManagement.MedicalSpecialtyExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            return MedicalSpecialtyGrid;
        }(Serenity.EntityGrid));
        MedicalSpecialtyGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MedicalSpecialtyGrid);
        PatientManagement.MedicalSpecialtyGrid = MedicalSpecialtyGrid;
    })(PatientManagement = PatientManagement_71.PatientManagement || (PatientManagement_71.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_72) {
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
    })(PatientManagement = PatientManagement_72.PatientManagement || (PatientManagement_72.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_73) {
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
                        InsertUserDisplayName: PatientManagement_73.Authorization.userDefinition.DisplayName,
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
    })(PatientManagement = PatientManagement_73.PatientManagement || (PatientManagement_73.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_74) {
    var PatientManagement;
    (function (PatientManagement) {
        var NotificationsUserImageFormatter = (function () {
            function NotificationsUserImageFormatter() {
            }
            NotificationsUserImageFormatter.prototype.format = function (ctx) {
                var file = (this.fileProperty ? ctx.item[this.fileProperty] : ctx.value);
                if (!file || !file.length)
                    return "";
                var href = Q.resolveUrl("~/upload/" + file);
                if (this.thumb) {
                    var parts = file.split('.');
                    file = parts.slice(0, parts.length - 1).join('.') + '_t.jpg';
                }
                var src;
                src = Q.resolveUrl('~' + file);
                return "<div style='height:50px; width: 50px'><img src=\"" + src + "\" class='img-responsive img-circle img-thumbnail' /> </div>";
            };
            NotificationsUserImageFormatter.prototype.initializeColumn = function (column) {
                if (this.fileProperty) {
                    column.referencedFields = column.referencedFields || [];
                    column.referencedFields.push(this.fileProperty);
                }
            };
            return NotificationsUserImageFormatter;
        }());
        __decorate([
            Serenity.Decorators.option()
        ], NotificationsUserImageFormatter.prototype, "fileProperty", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], NotificationsUserImageFormatter.prototype, "thumb", void 0);
        NotificationsUserImageFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], NotificationsUserImageFormatter);
        PatientManagement.NotificationsUserImageFormatter = NotificationsUserImageFormatter;
    })(PatientManagement = PatientManagement_74.PatientManagement || (PatientManagement_74.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference types="jqueryui" />
var PatientManagement;
(function (PatientManagement_75) {
    var PatientManagement;
    (function (PatientManagement) {
        var NotificationDropdownMenu = (function (_super) {
            __extends(NotificationDropdownMenu, _super);
            function NotificationDropdownMenu(elem, opt) {
                var _this = _super.call(this, elem, opt) || this;
                _this.updateNotifications = function () {
                    PatientManagement.NotificationsService.ListForDropdown({ Take: 50 }, function (resp) {
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
                PatientManagement.NotificationsService.CountNotifications({ Take: 50 }, function (resp) {
                    var text = resp.Count + "";
                    if (resp.Count >= 50)
                        text = text + "+";
                    _this.byId('NotificationCounterLabel').text(text);
                });
                return _this;
            }
            NotificationDropdownMenu.prototype.getService = function () { return PatientManagement.NotificationsService.baseUrl; };
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
    })(PatientManagement = PatientManagement_75.PatientManagement || (PatientManagement_75.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_76) {
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
    })(PatientManagement = PatientManagement_76.PatientManagement || (PatientManagement_76.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_77) {
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
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.push(PatientManagement_77.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    hint: 'Export to Excel',
                    title: 'Export to Excel',
                    service: PatientManagement.NotificationsService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                return buttons;
            };
            NotificationsGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 55;
                return opt;
            };
            return NotificationsGrid;
        }(Serenity.EntityGrid));
        NotificationsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], NotificationsGrid);
        PatientManagement.NotificationsGrid = NotificationsGrid;
    })(PatientManagement = PatientManagement_77.PatientManagement || (PatientManagement_77.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_78) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientHealthDialog = (function (_super) {
            __extends(PatientHealthDialog, _super);
            function PatientHealthDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PatientManagement.PatientHealthForm(_this.idPrefix);
                PatientManagement_78.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            PatientHealthDialog.prototype.getFormKey = function () { return PatientManagement.PatientHealthForm.formKey; };
            PatientHealthDialog.prototype.getIdProperty = function () { return PatientManagement.PatientHealthRow.idProperty; };
            PatientHealthDialog.prototype.getLocalTextPrefix = function () { return PatientManagement.PatientHealthRow.localTextPrefix; };
            PatientHealthDialog.prototype.getNameProperty = function () { return PatientManagement.PatientHealthRow.nameProperty; };
            PatientHealthDialog.prototype.getService = function () { return PatientManagement.PatientHealthService.baseUrl; };
            PatientHealthDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            PatientHealthDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            return PatientHealthDialog;
        }(Serenity.EntityDialog));
        PatientHealthDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], PatientHealthDialog);
        PatientManagement.PatientHealthDialog = PatientHealthDialog;
    })(PatientManagement = PatientManagement_78.PatientManagement || (PatientManagement_78.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_79) {
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
    })(PatientManagement = PatientManagement_79.PatientManagement || (PatientManagement_79.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_80) {
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
    })(PatientManagement = PatientManagement_80.PatientManagement || (PatientManagement_80.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../PatientsFileUploads/PatientsFileUploadsDialog.ts" />
var PatientManagement;
(function (PatientManagement_81) {
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
    })(PatientManagement = PatientManagement_81.PatientManagement || (PatientManagement_81.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_82) {
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
    })(PatientManagement = PatientManagement_82.PatientManagement || (PatientManagement_82.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../PatientsFileUploads/PatientsFileUploadsGrid.ts"/>
var PatientManagement;
(function (PatientManagement_83) {
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
    })(PatientManagement = PatientManagement_83.PatientManagement || (PatientManagement_83.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../Activity/ActivityDialog.ts" />
var PatientManagement;
(function (PatientManagement_84) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatienActivityDialog = (function (_super) {
            __extends(PatienActivityDialog, _super);
            function PatienActivityDialog() {
                return _super.call(this) || this;
            }
            PatienActivityDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.PatientId, true);
            };
            return PatienActivityDialog;
        }(PatientManagement.ActivityDialog));
        PatienActivityDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], PatienActivityDialog);
        PatientManagement.PatienActivityDialog = PatienActivityDialog;
    })(PatientManagement = PatientManagement_84.PatientManagement || (PatientManagement_84.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../Activity/ActivityGrid.ts"/>
var PatientManagement;
(function (PatientManagement_85) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientActivityGrid = (function (_super) {
            __extends(PatientActivityGrid, _super);
            function PatientActivityGrid(container) {
                return _super.call(this, container) || this;
            }
            PatientActivityGrid.prototype.getDialogType = function () { return PatientManagement.PatienActivityDialog; };
            PatientActivityGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this);
            };
            PatientActivityGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            PatientActivityGrid.prototype.addButtonClick = function () {
                console.log(this.patientId);
                this.editItem({ PatientId: this.patientId });
            };
            PatientActivityGrid.prototype.getInitialTitle = function () {
                return null;
            };
            PatientActivityGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.patientId;
            };
            Object.defineProperty(PatientActivityGrid.prototype, "patientId", {
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
            return PatientActivityGrid;
        }(PatientManagement.ActivityGrid));
        PatientActivityGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], PatientActivityGrid);
        PatientManagement.PatientActivityGrid = PatientActivityGrid;
    })(PatientManagement = PatientManagement_85.PatientManagement || (PatientManagement_85.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../PatientsFileUploads/PatientsFileUploadsDialog.ts" />
var PatientManagement;
(function (PatientManagement_86) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientHealthCheckDialog = (function (_super) {
            __extends(PatientHealthCheckDialog, _super);
            function PatientHealthCheckDialog() {
                return _super.call(this) || this;
            }
            PatientHealthCheckDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.PatientId, true);
            };
            return PatientHealthCheckDialog;
        }(PatientManagement.PatientHealthDialog));
        PatientHealthCheckDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], PatientHealthCheckDialog);
        PatientManagement.PatientHealthCheckDialog = PatientHealthCheckDialog;
    })(PatientManagement = PatientManagement_86.PatientManagement || (PatientManagement_86.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../PatientHealth/PatientHealthGrid.ts"/>
var PatientManagement;
(function (PatientManagement_87) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientHealthCheckGrid = (function (_super) {
            __extends(PatientHealthCheckGrid, _super);
            function PatientHealthCheckGrid(container) {
                return _super.call(this, container) || this;
            }
            PatientHealthCheckGrid.prototype.getDialogType = function () { return PatientManagement.PatientHealthCheckDialog; };
            PatientHealthCheckGrid.prototype.getColumns = function () {
                var fld = PatientManagement.PatientHealthRow.Fields;
                return _super.prototype.getColumns.call(this);
            };
            PatientHealthCheckGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            PatientHealthCheckGrid.prototype.addButtonClick = function () {
                console.log(this.patientId);
                this.editItem({ PatientId: this.patientId });
            };
            PatientHealthCheckGrid.prototype.getInitialTitle = function () {
                return null;
            };
            PatientHealthCheckGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.patientId;
            };
            Object.defineProperty(PatientHealthCheckGrid.prototype, "patientId", {
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
            return PatientHealthCheckGrid;
        }(PatientManagement.PatientHealthGrid));
        PatientHealthCheckGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], PatientHealthCheckGrid);
        PatientManagement.PatientHealthCheckGrid = PatientHealthCheckGrid;
    })(PatientManagement = PatientManagement_87.PatientManagement || (PatientManagement_87.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../LifeStyles/LifeStylesDialog.ts" />
var PatientManagement;
(function (PatientManagement_88) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientLifeStyleDialog = (function (_super) {
            __extends(PatientLifeStyleDialog, _super);
            function PatientLifeStyleDialog() {
                return _super.call(this) || this;
            }
            PatientLifeStyleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.PatientId, true);
            };
            return PatientLifeStyleDialog;
        }(PatientManagement.LifeStylesDialog));
        PatientLifeStyleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], PatientLifeStyleDialog);
        PatientManagement.PatientLifeStyleDialog = PatientLifeStyleDialog;
    })(PatientManagement = PatientManagement_88.PatientManagement || (PatientManagement_88.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../LifeStyles/LifeStylesGrid.ts"/>
var PatientManagement;
(function (PatientManagement_89) {
    var PatientManagement;
    (function (PatientManagement) {
        var PatientLifeStylesGrid = (function (_super) {
            __extends(PatientLifeStylesGrid, _super);
            function PatientLifeStylesGrid(container) {
                return _super.call(this, container) || this;
            }
            PatientLifeStylesGrid.prototype.getDialogType = function () { return PatientManagement.PatientLifeStyleDialog; };
            PatientLifeStylesGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this);
            };
            PatientLifeStylesGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            PatientLifeStylesGrid.prototype.addButtonClick = function () {
                console.log(this.patientId);
                this.editItem({ PatientId: this.patientId });
            };
            PatientLifeStylesGrid.prototype.getInitialTitle = function () {
                return null;
            };
            PatientLifeStylesGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.patientId;
            };
            Object.defineProperty(PatientLifeStylesGrid.prototype, "patientId", {
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
            return PatientLifeStylesGrid;
        }(PatientManagement.LifeStylesGrid));
        PatientLifeStylesGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], PatientLifeStylesGrid);
        PatientManagement.PatientLifeStylesGrid = PatientLifeStylesGrid;
    })(PatientManagement = PatientManagement_89.PatientManagement || (PatientManagement_89.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_90) {
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
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                return "<span class='phone-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            return PatientsPhoneFormatter;
        }());
        PatientsPhoneFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], PatientsPhoneFormatter);
        PatientManagement.PatientsPhoneFormatter = PatientsPhoneFormatter;
        var PatientsEmailFormatter = (function () {
            function PatientsEmailFormatter() {
            }
            PatientsEmailFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                return "<span class='mail-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            return PatientsEmailFormatter;
        }());
        PatientsEmailFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], PatientsEmailFormatter);
        PatientManagement.PatientsEmailFormatter = PatientsEmailFormatter;
    })(PatientManagement = PatientManagement_90.PatientManagement || (PatientManagement_90.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_91) {
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
            PatientsGrid.prototype.getIsActiveProperty = function () { return PatientManagement.PatientsRow.isActiveProperty; };
            PatientsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(PatientManagement_91.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    hint: 'Export to Excel',
                    title: 'Export to Excel',
                    service: PatientManagement.PatientsService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                return buttons;
            };
            return PatientsGrid;
        }(Serenity.EntityGrid));
        PatientsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], PatientsGrid);
        PatientManagement.PatientsGrid = PatientsGrid;
    })(PatientManagement = PatientManagement_91.PatientManagement || (PatientManagement_91.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../Visits/VisitsDialog.ts" />
var PatientManagement;
(function (PatientManagement_92) {
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
    })(PatientManagement = PatientManagement_92.PatientManagement || (PatientManagement_92.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../Visits/VisitsGrid.ts" />
var PatientManagement;
(function (PatientManagement_93) {
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
    })(PatientManagement = PatientManagement_93.PatientManagement || (PatientManagement_93.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_94) {
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
    })(PatientManagement = PatientManagement_94.PatientManagement || (PatientManagement_94.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_95) {
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
    })(PatientManagement = PatientManagement_95.PatientManagement || (PatientManagement_95.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference types="jqueryui" />
/// <returns type="jquery.colorpicker"></returns>
var PatientManagement;
(function (PatientManagement_96) {
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
    })(PatientManagement = PatientManagement_96.PatientManagement || (PatientManagement_96.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
/// <reference path="../VisitTypes/VisitTypesDialog.ts" />
var PatientManagement;
(function (PatientManagement_97) {
    var PatientManagement;
    (function (PatientManagement) {
        var NewVisitTypeDialog = (function (_super) {
            __extends(NewVisitTypeDialog, _super);
            function NewVisitTypeDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            NewVisitTypeDialog.prototype.onSaveSuccess = function (response) {
                location.reload();
            };
            NewVisitTypeDialog.prototype.onDeleteSuccess = function (response) {
                location.reload();
            };
            return NewVisitTypeDialog;
        }(PatientManagement.VisitTypesDialog));
        NewVisitTypeDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], NewVisitTypeDialog);
        PatientManagement.NewVisitTypeDialog = NewVisitTypeDialog;
    })(PatientManagement = PatientManagement_97.PatientManagement || (PatientManagement_97.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_98) {
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
    })(PatientManagement = PatientManagement_98.PatientManagement || (PatientManagement_98.PatientManagement = {}));
})(PatientManagement || (PatientManagement = {}));
var PatientManagement;
(function (PatientManagement_99) {
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
            VisitTypesGrid.prototype.getIsActiveProperty = function () { return PatientManagement.VisitTypesRow.isActiveProperty; };
            return VisitTypesGrid;
        }(Serenity.EntityGrid));
        VisitTypesGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], VisitTypesGrid);
        PatientManagement.VisitTypesGrid = VisitTypesGrid;
    })(PatientManagement = PatientManagement_99.PatientManagement || (PatientManagement_99.PatientManagement = {}));
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
            return _this;
        }
        return VisiTypesBottomLeftMenu;
    }(Serenity.Widget));
    VisiTypesBottomLeftMenu = __decorate([
        Serenity.Decorators.registerClass()
    ], VisiTypesBottomLeftMenu);
    PatientManagement.VisiTypesBottomLeftMenu = VisiTypesBottomLeftMenu;
})(PatientManagement || (PatientManagement = {}));
//# sourceMappingURL=PatientManagement.Web.js.map