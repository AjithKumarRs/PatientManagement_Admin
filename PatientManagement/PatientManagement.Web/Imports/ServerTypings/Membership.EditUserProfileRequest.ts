namespace PatientManagement.Membership {
    export interface EditUserProfileRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        UserWebSite?: string;
        UserImage?: string;
        USerEmailSignature?: string;
    }
}
