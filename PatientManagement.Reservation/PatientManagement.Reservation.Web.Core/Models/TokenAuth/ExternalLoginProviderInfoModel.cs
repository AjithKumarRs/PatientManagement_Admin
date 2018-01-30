using Abp.AutoMapper;
using PatientManagement.Reservation.Authentication.External;

namespace PatientManagement.Reservation.Models.TokenAuth
{
    [AutoMapFrom(typeof(ExternalLoginProviderInfo))]
    public class ExternalLoginProviderInfoModel
    {
        public string Name { get; set; }

        public string ClientId { get; set; }
    }
}
