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
    [ConnectionKey(typeof(PatientsRow))]
    public class ReportsEndpoint : ServiceEndpoint
    {
        [ServiceAuthorize(PatientManagementPermissionKeys.ReportsNewPatientsThisMonth)]
        public RetrieveResponse<NewPatientsThisMonthResponse> NewPatientsThisMonth(IDbConnection connection)
        {
            var response = new NewPatientsThisMonthResponse();

            var patientFlds = PatientsRow.Fields;

            var listReq = new ListRequest();

            // Get for this month
            listReq.Criteria = (
                new Criteria(patientFlds.FirstRegistrationDate.PropertyName) > DateTime.Now.AddMonths(-1)
                & new Criteria(patientFlds.FirstRegistrationDate.PropertyName) < DateTime.Now
            );
            listReq.ColumnSelection = ColumnSelection.KeyOnly;
            response.Counter = new PatientsRepository().List(connection, listReq).TotalCount;

            // Get for month before
            listReq.Criteria = null;
            listReq.Criteria = (
                new Criteria(patientFlds.FirstRegistrationDate.PropertyName) > DateTime.Now.AddMonths(-2)
                & new Criteria(patientFlds.FirstRegistrationDate.PropertyName) < DateTime.Now.AddMonths(-1)
            );
            response.CounterMonthBefore = new PatientsRepository().List(connection, listReq).TotalCount;
            response.PercentMonthBefore = CalculateChange(response.CounterMonthBefore, response.Counter);

            return new RetrieveResponse<NewPatientsThisMonthResponse>{Entity = response};
        }

        double CalculateChange(long previous, long current)
        {
            if (previous == 0)
                throw new InvalidOperationException();

            var change = current - previous;
            return (double)change / previous * 100;
        }

        [ServiceAuthorize(PatientManagementPermissionKeys.ReportsNewVisitsThisMonth)]
        public RetrieveResponse<NewVisitsThisMonthResponse> NewVisitsThisMonth(IDbConnection connection)
        {
            var response = new NewVisitsThisMonthResponse();

            var visitsFlds = VisitsRow.Fields;

            // Get for this month
            var listReq = new ListRequest();
            listReq.Criteria = (
                new Criteria(visitsFlds.InsertDate.PropertyName) > DateTime.Now.AddMonths(-1)
                & new Criteria(visitsFlds.InsertDate.PropertyName) < DateTime.Now
            );
            listReq.ColumnSelection = ColumnSelection.KeyOnly;
            response.Counter = new VisitsRepository().List(connection, listReq).TotalCount;

            // Get for month before
            listReq.Criteria = null;
            listReq.Criteria = (
                new Criteria(visitsFlds.InsertDate.PropertyName) > DateTime.Now.AddMonths(-2)
                & new Criteria(visitsFlds.InsertDate.PropertyName) < DateTime.Now.AddMonths(-1)
            );
            response.CounterMonthBefore = new VisitsRepository().List(connection, listReq).TotalCount;
            response.PercentMonthBefore = CalculateChange(response.CounterMonthBefore, response.Counter);

            return new RetrieveResponse<NewVisitsThisMonthResponse> { Entity = response };
        }
    }
}
