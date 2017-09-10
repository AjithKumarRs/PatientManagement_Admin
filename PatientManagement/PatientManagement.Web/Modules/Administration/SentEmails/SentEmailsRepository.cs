
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using MVC;
using PatientManagement.Common;
using PatientManagement.PatientManagement.Entities;

namespace PatientManagement.Administration.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.SentEmailsRow;

    public class SentEmailsRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var user = (UserDefinition)Serenity.Authorization.UserDefinition;
            request.Entity.FromEmail = user.Email;
            request.Entity.FromName = user.DisplayName;

            var connection = SqlConnections.NewFor<PatientsRow>();
            var patientFields = PatientsRow.Fields;

            var patient = connection.First<PatientsRow>(patientFields.PatientId == request.Entity.ToEmail);
            if (string.IsNullOrEmpty(patient.Email))
                return null;

            request.Entity.ToEmail = patient.Email;
            request.Entity.ToName = patient.Name;

            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
          
            protected override void AfterSave()
            {
                base.AfterSave();

                EmailHelper.SendToPatient(Row.FromEmail, Row.FromName, Row.Subject, Row.Body, Row.ToEmail, Row.ToName);
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            protected override void OnReturn()
            {
                base.OnReturn();

                //patients might be in another database, in another db server, so we can't simply use a join here
                //var patientsList = Response.Entities.Select(x => x.ToName).Distinct();
                //if (patientsList.Any())
                //{
                //    var patientsFields = PatientsRow.Fields;
                //    IDictionary<int, List<string>> patients;

                //    using (var connection = SqlConnections.NewFor<PatientsRow>())
                //        patients = connection.Query(new SqlQuery()
                //                .From(patientsFields)
                //                .Select(patientsFields.PatientId)
                //                .Select(patientsFields.Name)
                //                .Select(patientsFields.Email)
                //                .Where(patientsFields.PatientId.In(patientsList)))
                //            .ToDictionary(x =>
                //                (int) (x.PatientId ?? x.PATIENTID), x => new List<string>() { x.Name, x.Email });

                //    List<string> s;
                //    foreach (var responseEntity in Response.Entities)
                //    {
                //        if (patients.TryGetValue(int.Parse(responseEntity.ToName), out s))
                //        {
                //            responseEntity.ToName = s[0];
                //            responseEntity.ToEmail = s[1];
                //        }
                //    }
                //}
            }
        }
    }
}