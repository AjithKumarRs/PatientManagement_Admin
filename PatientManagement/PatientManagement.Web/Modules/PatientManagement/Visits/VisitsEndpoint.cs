using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Ical.Net;
using Ical.Net.DataTypes;
using Ical.Net.Serialization.iCalendar.Serializers;
using PatientManagement.Administration.Entities;
using PatientManagement.Administration.Repositories;
using PatientManagement.Common.EmailTemplates;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.PatientManagement.Visits;
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

#pragma warning disable SG0016 // Controller method is vulnerable to CSRF
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var maximumInserts = UserSubscriptionHelper.GetTenantMaximumVisits();
            if (this.List(uow.Connection, new ListRequest()).TotalCount >= maximumInserts)
            {
                throw new ValidationError(string.Format(Texts.Site.Subscriptions.MaximumVisitsError, maximumInserts));
            }

            if (request.Entity.FreeForReservation.HasValue
                && !request.Entity.FreeForReservation.Value)
            {
                var patient = uow.Connection.ById<PatientsRow>(request.Entity.PatientId);

                SendAutomaticEmailToPatient(uow, patient, request.Entity.StartDate ?? DateTime.MinValue, true);
            }

            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var visit = uow.Connection.ById<VisitsRow>(request.EntityId);

            if (request.Entity.FreeForReservation.HasValue && !request.Entity.FreeForReservation.Value)
                if (request.Entity.StartDate != visit.StartDate || request.Entity.EndDate != visit.EndDate)
                {
                    var patient = uow.Connection.ById<PatientsRow>(visit.PatientId);
                    SendAutomaticEmailToPatient(uow, patient, request.Entity.StartDate ?? DateTime.MinValue, false);
                }

            #region Repeated visit
            if (request.Entity.IsRepeated.HasValue && request.Entity.IsRepeated.Value
                && request.Entity.RepeatCounter.HasValue && request.Entity.RepeatCounter.Value > 0
                && visit.RepeatPeriod.HasValue)
            {
                var timeDiff = request.Entity.EndDate.Value - request.Entity.StartDate.Value;

                switch (visit.RepeatPeriod.Value)
                {
                    case RepeatPeriod.Day:
                        request.Entity.StartDate = request.Entity.StartDate.Value.AddDays(- request.Entity.RepeatCounter.Value);
                        request.Entity.EndDate = request.Entity.EndDate.Value.AddDays(- request.Entity.RepeatCounter.Value);
                        break;
                    case RepeatPeriod.Week:
                        visit.StartDate = request.Entity.StartDate.Value.AddDays(- (request.Entity.RepeatCounter.Value) * 7);
                        request.Entity.EndDate = request.Entity.EndDate.Value.AddDays(- (request.Entity.RepeatCounter.Value) * 7);
                        break;
                    case RepeatPeriod.Month:
                        request.Entity.StartDate = request.Entity.StartDate.Value.AddMonths(- request.Entity.RepeatCounter.Value);
                        request.Entity.EndDate = request.Entity.EndDate.Value.AddMonths(- request.Entity.RepeatCounter.Value);
                        break;
                    case RepeatPeriod.Year:
                        request.Entity.StartDate = request.Entity.StartDate.Value.AddYears(- request.Entity.RepeatCounter.Value);
                        request.Entity.EndDate = request.Entity.EndDate.Value.AddYears(- request.Entity.RepeatCounter.Value);
                        break;
                }


            }
            #endregion
            return new MyRepository().Update(uow, request);
        }

        private void SendAutomaticEmailToPatient(IUnitOfWork uow, PatientsRow patient, DateTime startDate, bool IsCreated)
        {
            if (patient.NotifyOnChange == true && !patient.Email.IsEmptyOrNull())
            {
                var emailModel = new ChangedVisitAutomaticEmailModel();
                emailModel.PatientName = patient.Name;
                emailModel.VisitDate = startDate;

                var externalUrl = Config.Get<EnvironmentSettings>().SiteExternalUrl ??
                                  Request.GetBaseUri().ToString();

                emailModel.SetTenantSetings(externalUrl, emailModel);

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
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyRepository().Undelete(uow, request);
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

            return File(VisitsExportHelper.ExportToIcs(data, AccessType.Private), "text/calendar", "event.ics");
        }
    }
}
