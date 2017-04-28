/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace PatientManagement.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('PatientManagement');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
}