using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PatientManagement.Administration;
using PatientManagement.PatientManagement.Entities;
using Serenity.Data;
using Serenity.Services;

namespace PatientManagement.PatientManagement.Endpoints
{
    [Route("Services/PatientManagement/Reports/[action]")]
    [ConnectionKey(typeof(PatientsRow)), ServiceAuthorize(PermissionKeys.AdministrationTenantsReportsPage)]
    public class ReportsEndpoint : ServiceEndpoint
    {
        [ServiceAuthorize(PermissionKeys.AdministrationTenantsReportsNewPatientsThisMonth)]
        public RetrieveResponse<NewPatientsThisMonthResponse> NewPatientsThisMonth(IDbConnection connection)
        {
            var response = new NewPatientsThisMonthResponse();

            return new RetrieveResponse<NewPatientsThisMonthResponse>{Entity = response};
        }
    }
}
