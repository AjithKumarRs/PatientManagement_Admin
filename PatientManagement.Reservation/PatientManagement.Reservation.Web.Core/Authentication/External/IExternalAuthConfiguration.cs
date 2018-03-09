using System.Collections.Generic;

namespace PatientManagement.Reservation.Authentication.External
{
    public interface IExternalAuthConfiguration
    {
        List<ExternalLoginProviderInfo> Providers { get; }
    }
}
