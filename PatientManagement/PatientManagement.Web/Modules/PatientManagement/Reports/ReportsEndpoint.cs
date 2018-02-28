using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.PatientManagement.Repositories;
using Serenity.Data;
using Serenity.Services;

namespace PatientManagement.PatientManagement.Endpoints
{
    [Route("Services/PatientManagement/Reports/[action]")]
    [ConnectionKey(typeof(PatientsRow)), ServiceAuthorize(PatientManagementPermissionKeys.ReportsPage)]
    public class ReportsEndpoint : ServiceEndpoint
    {
        [ServiceAuthorize(PatientManagementPermissionKeys.ReportsNewPatientsThisMonth)]
        public RetrieveResponse<NewPatientsThisMonthResponse> NewPatientsThisMonth(IDbConnection connection)
        {
            var response = new NewPatientsThisMonthResponse();

            var patientFlds = PatientsRow.Fields;

            var listReq = new ListRequest();
            listReq.Criteria = (
                new Criteria(patientFlds.FirstRegistrationDate.PropertyName) > DateTime.Now.AddMonths(-1)
                & new Criteria(patientFlds.FirstRegistrationDate.PropertyName) < DateTime.Now
            );
            listReq.ColumnSelection = ColumnSelection.KeyOnly;
            var counter = new PatientsRepository().List(connection, listReq).TotalCount;

            response.Counter = counter;
            return new RetrieveResponse<NewPatientsThisMonthResponse>{Entity = response};
        }

        [ServiceAuthorize(PatientManagementPermissionKeys.ReportsNewVisitsThisMonth)]
        public RetrieveResponse<NewVisitsThisMonthResponse> NewVisitsThisMonth(IDbConnection connection)
        {
            var response = new NewVisitsThisMonthResponse();

            var patientFlds = VisitsRow.Fields;

            var listReq = new ListRequest();
            listReq.Criteria = (
                new Criteria(patientFlds.InsertDate.PropertyName) > DateTime.Now.AddMonths(-1)
                & new Criteria(patientFlds.InsertDate.PropertyName) < DateTime.Now
            );
            listReq.ColumnSelection = ColumnSelection.KeyOnly;
            var counter = new VisitsRepository().List(connection, listReq).TotalCount;

            response.Counter = counter;
            return new RetrieveResponse<NewVisitsThisMonthResponse> { Entity = response };
        }
    }
}
