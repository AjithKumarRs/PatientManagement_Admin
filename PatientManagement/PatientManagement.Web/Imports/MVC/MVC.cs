using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Currencies
            {
                public const string CurrenciesIndex = "~/Modules/Administration/Currencies/CurrenciesIndex.cshtml";
            }

            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Offers
            {
                public const string OffersIndex = "~/Modules/Administration/Offers/OffersIndex.cshtml";
            }

            public static class PaymentOptions
            {
                public const string PaymentOptionsIndex = "~/Modules/Administration/PaymentOptions/PaymentOptionsIndex.cshtml";
            }

            public static class Payments
            {
                public const string PaymentsIndex = "~/Modules/Administration/Payments/PaymentsIndex.cshtml";
            }

            public static class PaymentsDetails
            {
                public const string PaymentsDetailsIndex = "~/Modules/Administration/PaymentsDetails/PaymentsDetailsIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class SentEmails
            {
                public const string SentEmailsIndex = "~/Modules/Administration/SentEmails/SentEmailsIndex.cshtml";
            }

            public static class Sergen
            {
                public const string SergenError = "~/Modules/Administration/Sergen/SergenError.cshtml";
                public const string SergenIndex = "~/Modules/Administration/Sergen/SergenIndex.cshtml";
            }

            public static class Subscriptions
            {
                public const string SubscriptionsIndex = "~/Modules/Administration/Subscriptions/SubscriptionsIndex.cshtml";
            }

            public static class Tenant
            {
                public const string TenantIndex = "~/Modules/Administration/Tenant/TenantIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }
        }

        public static class Errors
        {
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }

        }

        public static class PatientManagement
        {
            public static class Activity
            {
                public const string ActivityIndex = "~/Modules/PatientManagement/Activity/ActivityIndex.cshtml";
            }

            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/PatientManagement/Dashboard/DashboardIndex.cshtml";
            }

            public static class LifeStyles
            {
                public const string LifeStylesIndex = "~/Modules/PatientManagement/LifeStyles/LifeStylesIndex.cshtml";
            }

            public static class Notifications
            {
                public const string NotificationsIndex = "~/Modules/PatientManagement/Notifications/NotificationsIndex.cshtml";
            }

            public static class PatientHealth
            {
                public const string PatientHealthIndex = "~/Modules/PatientManagement/PatientHealth/PatientHealthIndex.cshtml";
            }

            public static class Patients
            {
                public const string PatientsIndex = "~/Modules/PatientManagement/Patients/PatientsIndex.cshtml";
            }

            public static class PatientsFileUploads
            {
                public const string PatientsFileUploadsIndex = "~/Modules/PatientManagement/PatientsFileUploads/PatientsFileUploadsIndex.cshtml";
            }

            public static class UserNotifications
            {
                public const string UserNotificationsIndex = "~/Modules/PatientManagement/UserNotifications/UserNotificationsIndex.cshtml";
            }

            public static class Visits
            {
                public const string VisitsIndex = "~/Modules/PatientManagement/Visits/VisitsIndex.cshtml";
            }

            public static class VisitTypes
            {
                public const string VisitTypesIndex = "~/Modules/PatientManagement/VisitTypes/VisitTypesIndex.cshtml";
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSeoTags = "~/Views/Shared/_LayoutSeoTags.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

    }
}
