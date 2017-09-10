namespace PatientManagement.Membership {
    export interface EditUserProfileRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        UserEmail?: string;
        UserPhone?: string;
        UserWebSite?: string;
        UserImage?: string;
        USerEmailSignature?: string;
    }
}
