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
    [Route("Services/PatientManagement/ReportsVisits/[action]")]
    [ConnectionKey(typeof(PatientsRow))]
    public class ReportsVisitsEndpoint : ServiceEndpoint
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

            return new RetrieveResponse<NewPatientsThisMonthResponse> { Entity = response };
        }

        double CalculateChange(long previous, long current)
        {
            if (previous == 0 && current == 0)
                return 0;
            if (previous == 0 && current > 0)
                return 100;

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


        [ServiceAuthorize(PatientManagementPermissionKeys.ReportsVisitTypesPerGenderChart)]
        public RetrieveResponse<VisitTypesPerGenderChartResponse> VisitTypesPerGenderChart(IDbConnection connection)
        {
            var response = new VisitTypesPerGenderChartResponse();
            var visitTypes = new VisitTypesRepository().List(connection, new ListRequest()).Entities;
            if (visitTypes.Any())
                response.labels = visitTypes.Select(vt => vt.Name).ToList();
            // For each the enum because we don't know the count of genders
            foreach (Gender gender in Enum.GetValues(typeof(Gender)))
            {
                var dataset = new VisitTypesPerGenderChartResponse.Dataset();
                dataset.label = gender.ToString();
                dataset.backgroundColor = visitTypes.Select(s => s.BackgroundColor).ToList();

                // Get Patients contained in filtered visits
                var patientFields = PatientsRow.Fields;
                var patientsRequest = new ListRequest();
                patientsRequest.ColumnSelection = ColumnSelection.KeyOnly;
                patientsRequest.IncludeColumns = new HashSet<string>
                {
                    patientFields.Gender.Name
                };
                patientsRequest.Criteria = (new Criteria(patientFields.Gender.Name) == gender);

                var patients = new PatientsRepository().List(connection, patientsRequest).Entities;

                if (patients.Any())
                {
                    dataset.PatientsTotal = patients.Count;

                    var visitsFields = VisitsRow.Fields;
                    var visits = connection.List<VisitsRow>(s => s
                        .Select(visitsFields.VisitId).Select(visitsFields.VisitTypeId).Select(visitsFields.PatientId)
                        .Where(visitsFields.PatientId.In(patients.Select(p => p.PatientId))));

                    dataset.VisitsTotal = visits.Count;
                    var tempCounter = 0;
                    foreach (var visitTypesRow in visitTypes)
                    {
                        var visitsCounter = connection.Count<VisitsRow>(
                            visitsFields.VisitTypeId == visitTypesRow.VisitTypeId.Value
                            && visitsFields.PatientId.In(patients.Select(p => p.PatientId)));

                        if (visitsCounter > tempCounter)
                        {
                            tempCounter = visitsCounter;
                            dataset.MostReservedVisitType = visitTypesRow.Name;
                        }

                        dataset.data.Add(visitsCounter);
                    }

                }
                else
                {
                    dataset.data.Add(0);
                }

                response.datasets.Add(dataset);
            }

            return new RetrieveResponse<VisitTypesPerGenderChartResponse> { Entity = response };
        }

        [ServiceAuthorize(PatientManagementPermissionKeys.ReportsVisitsPerMonthLinearChart)]
        public RetrieveResponse<VisitsPerMonthLineChartResponse> VisitsPerMonthLineChart(IDbConnection connection)
        {
            var response = new VisitsPerMonthLineChartResponse();

            var visitTypes = new VisitTypesRepository().List(connection, new ListRequest()).Entities;
            //if (visitTypes.Any())
            //    response.Labels = visitTypes.Select(vt => vt.Name).ToList();
            for (int i = 0; i < 6; i++)
            {
                response.labels.Add(DateTime.Now.AddMonths(-i).ToString("MMMM"));
            }

            response.labels.Reverse();

            foreach (var visitTypesRow in visitTypes)
            {
                var dataset = new VisitsPerMonthLineChartResponse.Dataset();
                dataset.label = visitTypesRow.Name;
                dataset.backgroundColor = visitTypesRow.BackgroundColor;
                dataset.borderColor = visitTypesRow.BackgroundColor;

                var visitReq = new ListRequest();
                visitReq.ColumnSelection = ColumnSelection.KeyOnly;

                var visitFlds = VisitsRow.Fields;
                visitReq.IncludeColumns = new HashSet<string>
                    {
                        visitFlds.StartDate.Name,
                        visitFlds.EndDate.Name,
                        visitFlds.VisitTypeId.Name
                    };
                for (int i = 0; i < 6; i++)
                {
                    var firstDayOfMonth = new DateTime(DateTime.Now.AddMonths(-i).Year,
                        DateTime.Now.AddMonths(-i).Month, 1);
                    var lastDayOfMonth = firstDayOfMonth.AddMonths(1).AddDays(-1);

                    visitReq.Criteria = (new Criteria(visitFlds.StartDate.Name) >= firstDayOfMonth
                                         & new Criteria(visitFlds.EndDate.Name) <= lastDayOfMonth
                                         & new Criteria(visitFlds.VisitTypeId.Name) == visitTypesRow.VisitTypeId.Value);

                    var visits = new VisitsRepository().List(connection, visitReq);
                    dataset.data.Add(visits.TotalCount);
                    
                }

                dataset.data.Reverse();
                response.datasets.Add(dataset);
            }
            return new RetrieveResponse<VisitsPerMonthLineChartResponse> { Entity = response };
        }
    }
}
