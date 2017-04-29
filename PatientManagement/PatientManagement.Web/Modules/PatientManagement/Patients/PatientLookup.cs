
using PatientManagement.PatientManagement.Entities;
using Serenity.ComponentModel;
using Serenity.Web;

namespace PatientManagement.PatientManagement.Patients.Scripts
{

    [LookupScript("PatientManagement.Patients")]
    public class PatientsLookup: RowLookupScript<PatientsRow>
    {
        public PatientsLookup()
        {
            IdField = PatientsRow.Fields.PatientId.PropertyName;
            TextField = PatientsRow.Fields.Name.PropertyName;
        }
    }
}
