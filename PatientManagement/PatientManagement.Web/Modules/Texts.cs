using Serenity;
using Serenity.Extensibility;

namespace PatientManagement
{
    [NestedLocalTexts]
    public static partial class Texts
    {
        public static class Db
        {
            public static class Administration
            {
                public static class Translation
                {
                    public static LocalText EntityPlural = "Translations";
                    public static LocalText Key = "Local Text Key";
                    public static LocalText SourceLanguage = "Source Language";
                    public static LocalText SourceText = "Effective Translation in Source Language";
                    public static LocalText TargetLanguage = "Target Language";
                    public static LocalText TargetText = "Effective Translation in Target Language";
                    public static LocalText CustomText = "User Translation in Target Language";
                    public static LocalText OverrideConfirmation = "Overwrite user translation with clicked text?";
                    public static LocalText SaveChangesButton = "Save Changes";
                }
            }
        }

        public static class Forms
        {
            public static class Membership
            {
                public static class Profile
                {
                    public static LocalText FormTitle = "User Profile";
                    public static LocalText Success = "Your profile information is changed.";
                    public static LocalText SuccessTenant = "Your tenant information is changed.";
                    public static LocalText AddedPatients = "Added Patients";
                    public static LocalText AddedVisits = "Added Visits";
                    public static LocalText SentEmails = "Sent Emails";
                    public static LocalText BoxAdditionalInfoTitle = "About me";
                    public static LocalText BoxAdditionalInfoEmail = "Your Email";
                    public static LocalText BoxAdditionalInfoPhoneNumber = "Your Phone Number";
                    public static LocalText BoxAdditionalInfoRegistaredDate = "You start using the system on";
                    public static LocalText BoxTenantInfoTitle = "About the Clinic";
                    public static LocalText BoxTenantInfoTenantName = "Tenant Name";
                    public static LocalText BoxTenantInfoTenantWebSite = "Tenant Web Site";
                    public static LocalText BoxTenantInfoTenantWorkHours = "Work Hours";

                    public static LocalText TabMyVisits = "Added Visits By Me";

                    public static LocalText TabProfileEditingTitle = "Profile Settings";
                    public static LocalText TabTenantEditingTitle = "Tenant Settings";
                    public static LocalText ButtonSaveProfile = "Save Profile Settings";
                    public static LocalText ButtonSaveTenant = "Save Tenant Settings";



                }
                public static class ChangePassword
                {
                    public static LocalText FormTitle = "Change Password";
                    public static LocalText SubmitButton = "Change Password";
                    public static LocalText Success = "Your password is changed.";
                }

                public static class ForgotPassword
                {
                    public static LocalText FormInfo = "Please enter the e-mail you used to signup.";
                    public static LocalText FormTitle = "Forgot My Password";
                    public static LocalText SubmitButton = "Reset My Password";
                    public static LocalText Success = "An e-mail with password reset instructions is sent to your e-mail address.";
                    public static LocalText BackToLogin = "I remember my password";
                }

                public static class ResetPassword
                {
                    public static LocalText EmailSubject = "Reset Your PatientManagement Password";
                    public static LocalText FormTitle = "Reset Password";
                    public static LocalText SubmitButton = "Reset Password";
                    public static LocalText Success = "Your password is changed. Please login with your new password.";
                    public static LocalText BackToLogin = "I remember my password. Don't reset it!";
                }

                public static class Login
                {
                    public static LocalText FormTitle = "Система за управление на пациенти";
                    public static LocalText SignInButton = "Sign In";
                    public static LocalText ForgotPassword = "Forgot password?";
                    public static LocalText SignUpButton = "Register a new account";
                    public static LocalText RememberMe = "Remember Me";
                    public static LocalText OR = "OR";
                    public static LocalText FacebookButton = "Sign in using Facebook";
                    public static LocalText GoogleButton = "Sign in using Google+";
                }

                public static class SignUp
                {
                    public static LocalText ActivateEmailSubject = "Activate Your PatientManagement Account";
                    public static LocalText ActivationCompleteMessage = "Your account is now activated. " + 
                        "Use the e-mail and password you used while signing up to login.";
                    public static LocalText FormInfo = "Enter your details to create a free account.";
                    public static LocalText FormTitle = "Sign up for PatientManagement";
                    public static LocalText SubmitButton = "Sign Up";
                    public static LocalText Success = "An e-mail with instructions to active your account is " + 
                        "sent to your e-mail address. Please check your e-mails.";

                    public static LocalText DisplayName = "Full Name";
                    public static LocalText Email = "E-mail";
                    public static LocalText ConfirmEmail = "Confirm Email";
                    public static LocalText Password = "Password";
                    public static LocalText ConfirmPassword = "Confirm Password";

                    public static LocalText AcceptTerms = "I agree to the terms";
                    public static LocalText BackToLogin = "I already have a membership";
                    public static LocalText TermsOfUse = "Terms Of Use";

                    public static LocalText FormatCabinetName = "{0} - First Room";

                    public static LocalText AcceptTermsAndConditionsError = "You must accept terms and conditions";
                }
            }
        }

        public static class Navigation
        {
            public static LocalText VisitsForToday = "Visits For Today";
            public static LocalText LogoutLink = "Logout";
            public static LocalText SiteTitle = "My Clario";
        }
        public static class LeftNavigation
        {
            public static LocalText LeftNavigationHeader = "MAIN MENU";
            public static LocalText AddNewVisitType = "Add new visit type";
            public static LocalText VisitTypesPage = "See all types";
        }
        public static class Site
        {
            public static class Reports
            {
                public static LocalText ReportNewPatientsThisMonthBox = "New patients this month";
            }

            public static class About
            {
                public static LocalText AboutPageTitle = "About";
                public static LocalText CheckTheDocuments = "Check The Documents";
                public static LocalText Faq = "Most Recent Questions";
                public static LocalText TechnicalPresentation = "Technical Presentation";
            }
            public static class HelloModal
            {
                public static LocalText Title = "Welcome";
                public static LocalText SubTitle = "Take a first steps in Clario management system";

                public static LocalText ButtonContinue = "Continue";
                public static LocalText ButtonStart = "Begin";
                public static LocalText ButtonSkip = "Skip";
                public static LocalText ButtonFinnish = "Finnish";
                public static LocalText ButtonCloseAndFinnish = "Close and continue work";

                public static LocalText StepCabinet = "Add your first cabinet";
                public static LocalText StepCabinetTitle = "Add your first cabinet. Every cabinet has its own calendar and you can fast switch the calendars in the left dropdown";

                public static LocalText StepVisitType = "Create new visit type";
                public static LocalText StepVisitTypeTitle = "Choose name and colors for your visit type. This will be the look that will be shown in the calendar for every visit in this type";

                public static LocalText StepPatient = "Register a patient";
                public static LocalText StepPatientTitle= "When you registering new patient, you can choose to receive automatic emails  when visit is added or changed";

                public static LocalText StepVisit = "Assign a visit to patient";
                public static LocalText StepVisitTitle = "You can choose from dropdowns or you can use the functional buttons in right to create a new records";

                public static LocalText StepSuccess = "Congratulations! You now have all the needet skills to work with Clario management system. We from Clario team wish you good work, and happy hours using the system!";


            }
            public static class Payments
            {
                public static LocalText SerialNumPrefix = "PEYMID";

                public static LocalText PaymentEmptyValueError = "You can't make empty payment!";
                public static LocalText PaymentBlank = "File";
                public static LocalText Reciever = "Svetlin Krastanov";
                public static LocalText IBANReciever = "BG1111111111111";
                public static LocalText BICreciever = "CNTRLBNK";
                public static LocalText BankNameReciever = "CENTRAL BANK";

                public static LocalText CouponExpiredError = "The coupon that you entered is expired!";
                public static LocalText CouponNotExist = "The coupon that you entered not exist!";

                public static class Invoice
                {
                    public static LocalText Date = "Date: ";
                    public static LocalText From = "From";
                    public static LocalText To = "To";
                    public static LocalText Payment = "Payment: ";
                    public static LocalText QtyColumn = "Qty";
                    public static LocalText ProductColumn = "Product";
                    public static LocalText SerialNumColumn = "Serial #";
                    public static LocalText DescriptionColumn = "Description";
                    public static LocalText CurrencyColumn = "Currency";
                    public static LocalText PriceColumn = "Price";

                    public static LocalText PaymentDescriptionTitle = "Notes for payment";
                    public static LocalText PaymentDescriptionText = "If you make another payment and its still in process, please include {0} to description when you pay in your bank.";
                    public static LocalText TotalForPayment = "Total for payment";
                    public static LocalText SubTotal = "Subtotal: ";
                    public static LocalText Discount = "Discount: ";
                    public static LocalText Total = "Total: ";
                    public static LocalText GeneratePdf = "Generate PDF";

                }
            }

            public static class Coupons
            {
                public static LocalText SerialNumPrefix = "COUPID";

            }

            public static class Subscriptions
            {
                public static LocalText SerialNumPrefix = "SUBSID";

                public static LocalText SubscriptionTitle = "Subscription Information";
                public static LocalText SubscriptionRightBox = "You can make direct payment from here!";
                public static LocalText SubscriptionRightBoxButton = "Add Payment";
                public static LocalText DeleteActiveSubscriptionError = "You cant delete active subscription";
                public static LocalText SubscriptionInfoNotification = "Subscription information will not be showed for next 24 hours?";

                public static LocalText MaximumVisitsError = "Based on you current subscription, you can create maximum {0} visits.";
                public static LocalText MaximumUsersError = "Based on you current subscription, you can create maximum {0} users.";
                public static LocalText MaximumCabinetsError = "Based on you current subscription, you can create maximum {0} cabinets.";
                public static LocalText MaximumPatientsError = "Based on you current subscription, you can create maximum {0} patients.";


                public static class Expired
                {
                    public static LocalText SubscriptionInfoBoxHeader = "Subscription expired!";
                    public static LocalText SubscriptionInfoBoxBody = "Your subscription is expired! Please make a payment to gain access to the site.";
                    public static LocalText SubscriptionInfoBoxFooter = "Expired before: {0} days";

                }

                public static class WillExpire
                {
                    public static LocalText SubscriptionInfoBoxHeader = "Subscription will expire!";
                    public static LocalText SubscriptionInfoBoxBody = "Your subscription will expired after: {0} days.";
                }
                
            }

            public static class Notifications
            {
                public static LocalText VisitChangedNotification = "{0} - {1} just change a visit for patient {2}. Start date: {3} End date: {4}";
                public static LocalText VisitAddedNotification = "{0} - {1} just add a visit for patient {2}. Start date: {3} End date: {4}";
                public static LocalText VisitDeletedNotification = "{0} - {1} just delete a visit for patient {2}. Start date: {3} End date: {4}";

                public static LocalText PatientAddedNotification = "{0} just add a patient {1}";
                public static LocalText PatientChangedNotification = "{0} just change a patient {1}";
                public static LocalText PatientDeletedNotification = "{0} just delete a patient {1}";
            }

            public static class Dashboard
            {
                public static LocalText AlertOnPatientNoEmail = "The patient dosn't have an email address, add now?";
                public static LocalText AlertMessagePatientWithNotificationActiveVisitDialog = "Automatic email will be sent to patient when the visit is created or changed. You can change this behavior in patient profile.";

                public static LocalText ViewPatinet = "View Patient";
                public static LocalText ViewVisit = "View Visit";
                public static LocalText SendEmail = "Send Email";
                public static LocalText DeleteVisit = "Delete Visit";
                public static LocalText QuitContextMenu = "Quit";
                 
                public static LocalText VisitTypesLeftMenu = "VISIT TYPES";

                public static LocalText SuccessChangedVisitDates = "You successfully change visit with patient name: ";
                public static LocalText SuccessChangedVisitDatesFreeForReservation = "You successfully change visit";
                public static LocalText SuccessDeletingVisitDates = "You successfully deleted a visit with patient name: ";
                public static LocalText ErrorEndDateBiggerThanStartDate = "End Date can't be earlier than Start Date";
                public static LocalText ErrorEndDateEqualStartDate = "End Date can't be equal to Start Date";

                public static LocalText AlertOnCalendarChange ="Are you sure with this changes: ";
                public static LocalText AlertOnCalendarRemove = "Are you sure you want to remove: ";

                public static LocalText CalendarStartDate = "Start date: ";
                public static LocalText CalendarEndDate = "End date: ";
                public static LocalText CalendarPatient = "Patient: ";


                public static LocalText ContentDescription =
                    "all saved meetings for period.";

                public static LocalText WorkHoursDescription = "Work hours:";
            }

            public static class BasicProgressDialog
            {
                public static LocalText CancelTitle = "Operation cancelled. Waiting for in progress calls to complete...";
                public static LocalText PleaseWait = "Please wait...";
            }

            public static class BulkServiceAction
            {
                public static LocalText AllHadErrorsFormat = "All {0} record(s) that are processed had errors!";
                public static LocalText AllSuccessFormat = "Finished processing on {0} record(s) with success.";
                public static LocalText ConfirmationFormat = "Perform this operation on {0} selected record(s)?";
                public static LocalText ErrorCount = "{0} error(s)";
                public static LocalText NothingToProcess = "Please select some records to process!";
                public static LocalText SomeHadErrorsFormat = "Finished processing on {0} record(s) with success. {1} record(s) had errors!";
                public static LocalText SuccessCount = "{0} done";
            }

            public static class UserDialog
            {
                public static LocalText EditPermissionsButton = "Edit Permissions";
                public static LocalText EditRolesButton = "Edit Roles";
            }

            public static class UserRoleDialog
            {
                public static LocalText DialogTitle = "Edit User Roles ({0})";
                public static LocalText SaveSuccess = "Updated user roles.";
            }

            public static class UserPermissionDialog
            {
                public static LocalText DialogTitle = "Edit User Permissions ({0})";
                public static LocalText SaveSuccess = "Updated user permissions.";
                public static LocalText Permission = "Permission";
                public static LocalText Grant = "Grant";
                public static LocalText Revoke = "Revoke";
            }

            public static class RolePermissionDialog
            {
                public static LocalText EditButton = "Edit Permissions";
                public static LocalText DialogTitle = "Edit Role Permissions ({0})";
                public static LocalText SaveSuccess = "Updated role permissions.";
            }

            public static class Layout
            {
                public static LocalText NoNotificationMenu = "There is no new notifications";

                public static LocalText NotificationMenuHeader = "All received notifications";
                public static LocalText NotificationMenuFooter = "Go to notifications";

                public static LocalText RecieveNotificationToggleOn = "ON";
                public static LocalText RecieveNotificationToggleOff = "OFF";

                public static LocalText RecieveNotificationToggle = "Recieve notifications?";
                public static LocalText NewVisitFloatedButton = "New Visit (alt+v)";
                public static LocalText NewPatientFloatedButton = "New Patient (alt+c)";
                public static LocalText NewEmailFloatedButton = "New Email (alt+s)";
                public static LocalText NewDocumentFloatedButton = "New Document (alt+d)";

                public static LocalText AddFloatedButton = "Add";

                public static LocalText FooterCopyright = "Copyright (c) 2017.";
                public static LocalText FooterInfo = "S2KDesign Platform";
                public static LocalText FooterRights = "All rights reserved.";
                public static LocalText GeneralSettings = "General Settings";
                public static LocalText Language = "Language";
                public static LocalText Theme = "Theme";
                public static LocalText ThemeBlack = "Black";
                public static LocalText ThemeBlackLight = "Black Light";
                public static LocalText ThemeBlue = "Blue";
                public static LocalText ThemeBlueLight = "Blue Light";
                public static LocalText ThemeGreen = "Green";
                public static LocalText ThemeGreenLight = "Green Light";
                public static LocalText ThemePurple = "Purple";
                public static LocalText ThemePurpleLight = "Purple Light";
                public static LocalText ThemeRed = "Red";
                public static LocalText ThemeRedLight = "Red Light";
                public static LocalText ThemeYellow = "Yellow";
                public static LocalText ThemeYellowLight = "Yellow Light";

                public static LocalText RightBoxLayoutTechnicalDocumentation = "Technical Documentation";
                public static LocalText RightBoxLayoutTechnicalDocumentationLink = "https://help.myclario.com/";
                public static LocalText RightBoxLayoutFaqLink = "https://faq.myclario.com/";
                public static LocalText RightBoxLayoutFaq = "FAQ";
                public static LocalText RightBoxLayoutButton = "check it out";
                public static LocalText RightBoxHeader = "Do you need some help?";

            }

            public static class ValidationError
            {
                public static LocalText Title = "ERROR";
                public static LocalText ValidateEgnNotCorrect = "Entered personal number is not correct!";
                public static LocalText ValidateNotifyOnChangeWithNoEmail = "We cant send automatic emails if there is no patient email!";
            }
        }

        public static partial class Validation
        {
            public static LocalText PendingChangesConfirmation = "You have pending changes. Save them?";
            public static LocalText AuthenticationError = "Invalid username or password!";
            public static LocalText CurrentPasswordMismatch = "Your current password is not valid!";
            public static LocalText MinRequiredPasswordLength = "Entered password doesn't have enough characters (min {0})!";
            public static LocalText InvalidResetToken = "Your token to reset your password is invalid or has expired!";
            public static LocalText InvalidActivateToken = "Your token to activate your account is invalid or has expired!";
            public static LocalText CantFindUserWithEmail = "Can't find a user with that e-mail adress!";
            public static LocalText EmailInUse = "Another user with this e-mail exists!";
            public static LocalText EmailConfirm = "Emails entered doesn't match!";
            public static LocalText DeleteForeignKeyError = "Can't delete record. '{0}' table has " +
                "records that depends on this one!";
            public static LocalText SavePrimaryKeyError = "Can't save record. There is another record with the same {1} value!";
        }
    }
}