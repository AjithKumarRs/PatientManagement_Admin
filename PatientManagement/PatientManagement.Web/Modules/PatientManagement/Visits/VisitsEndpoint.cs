using System;
using System.IO;
using System.Text;
using Ical.Net;
using Ical.Net.DataTypes;
using Ical.Net.Serialization.iCalendar.Serializers;
using PatientManagement.Administration.Entities;
using PatientManagement.Administration.Repositories;
using PatientManagement.Common.EmailTemplates;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.Web.Modules.Common;
using Serenity;
using Serenity.Reporting;
using Serenity.Web;

namespace PatientManagement.PatientManagement.Endpoints
{
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.VisitsRepository;
    using MyRow = Entities.VisitsRow;

    [Route("Services/PatientManagement/Visits/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class VisitsController : ServiceEndpoint
    {

        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var maximumInserts = UserSubscriptionHelper.GetTenantMaximumVisits();
            if (this.List(uow.Connection, new ListRequest()).TotalCount >= maximumInserts)
            {
                throw new ValidationError(string.Format(Texts.Site.Subscriptions.MaximumVisitsError, maximumInserts));
            }
            var patient = uow.Connection.ById<PatientsRow>(request.Entity.PatientId);

            SendAutomaticEmailToPatient(uow, patient, request.Entity.StartDate??DateTime.MinValue, true);

            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var visit = uow.Connection.ById<VisitsRow>(request.EntityId);
            var patient = uow.Connection.ById<PatientsRow>(visit.PatientId);

            SendAutomaticEmailToPatient(uow, patient, request.Entity.StartDate ?? DateTime.MinValue, false);

            return new MyRepository().Update(uow, request);
        }

        private void SendAutomaticEmailToPatient(IUnitOfWork uow, PatientsRow patient, DateTime startDate, bool IsCreated)
        {
            if (patient.NotifyOnChange == true && !patient.Email.IsEmptyOrNull())
            {
                var emailModel = new ChangedVisitAutomaticEmailModel();
                emailModel.PatientName = patient.Name;
                emailModel.VisitDate = startDate;

                var emailBody = TemplateHelper.RenderViewToString(HttpContext.RequestServices,
                    MVC.Views.Common.EmailTemplates.ChangedVisitAutomaticEmail.EmailTemplates_ChangedVisitAutomaticEmail, emailModel);

                var saveRequest = new SaveRequest<SentEmailsRow>();
                saveRequest.Entity = new SentEmailsRow();
                saveRequest.Entity.ToEmail = patient.PatientId.ToString();
                saveRequest.Entity.Body = emailBody;

                if (IsCreated)
                    saveRequest.Entity.Subject = "Насрочена визита";
                else
                    saveRequest.Entity.Subject = "Промяна на визита";

                new SentEmailsRepository().Create(uow, saveRequest);
            }
        }
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.VisitsColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "VisitsList_" +
                                                    DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }


        public FileStreamResult ListIcs(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.VisitsColumns));
            var model = new Ical.Net.Calendar();

            foreach (var visit in data)
            {
                var cabinet = connection.ById<CabinetsRow>(visit.CabinetId);
                var visitType = connection.ById<VisitTypesRow>(visit.VisitTypeId);
                model.Events.Add(new Ical.Net.CalendarEvent
                {
                    Uid = visit.VisitId.ToString(),
                    Location = cabinet.Name,
                    Summary = visitType.Name,
                    Status = EventStatus.Confirmed,
                    Description = visit.Description,
                    DtStart = new CalDateTime((visit.StartDate ?? DateTime.Now)),
                    DtEnd = new CalDateTime((visit.EndDate ?? DateTime.Now)),
                    IsAllDay = false,
                });
            }

            var serializer = new CalendarSerializer(model);
            MemoryStream ms = new MemoryStream();

            serializer.Serialize(model, ms, Encoding.UTF8);

            var ics = serializer.SerializeToString(model);
            var bytes = System.Text.Encoding.UTF8.GetBytes(ics);

            ms.Write(bytes, 0, bytes.Length);
            ms.Seek(0, SeekOrigin.Begin);

            return File(ms, "text/calendar", "event.ics");
        }
    }
}
