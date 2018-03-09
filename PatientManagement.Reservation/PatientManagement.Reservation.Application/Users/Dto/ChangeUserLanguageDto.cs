using System.ComponentModel.DataAnnotations;

namespace PatientManagement.Reservation.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}