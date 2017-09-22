namespace PatientManagement.Membership {
    export interface EditUserProfileRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        PhoneNumber?: string;
        WebSite?: string;
        UserImage?: string;
        EmailSignature?: string;
    }
}
