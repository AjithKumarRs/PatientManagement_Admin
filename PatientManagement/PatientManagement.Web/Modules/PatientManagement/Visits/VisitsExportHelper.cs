using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Ical.Net;
using Ical.Net.DataTypes;
using Ical.Net.Serialization.iCalendar.Serializers;
using PatientManagement.PatientManagement.Entities;
using Serenity;
using Serenity.Data;

namespace PatientManagement.PatientManagement.Visits
{
    public class VisitsExportHelper
    {
        public static MemoryStream ExportToIcs(List<VisitsRow> visits, AccessType accessType)
        {
            var model = new Ical.Net.Calendar();
            var connection = SqlConnections.NewFor<VisitsRow>();

            foreach (var visit in visits)
            {
                var patient = connection.ById<PatientsRow>(visit.PatientId);
                var cabinet = connection.ById<CabinetsRow>(visit.CabinetId);
                var visitType = connection.ById<VisitTypesRow>(visit.VisitTypeId);

                var eventCalendar = new Ical.Net.CalendarEvent();
                eventCalendar.Location = cabinet.Name;
                eventCalendar.Status = EventStatus.Confirmed;
                eventCalendar.DtStart = new CalDateTime((visit.StartDate ?? DateTime.Now));
                eventCalendar.DtEnd = new CalDateTime((visit.EndDate ?? DateTime.Now));
                eventCalendar.IsAllDay = false;

                if (accessType == AccessType.Private)
                {
                    eventCalendar.Summary = $"{patient.Name} - {visitType.Name}";
                    eventCalendar.Description = visit.Description;
                    eventCalendar.Created = new CalDateTime((visit.InsertDate ?? DateTime.Now));

                    if (!patient.Email.IsEmptyOrNull())
                    {
                        var attendee = new Attendee($"MAILTO:{patient.Email}");
                        attendee.CommonName = patient.Name;
                        attendee.Rsvp = true;
                        attendee.Role = "REQ-PARTICIPANT";
                        attendee.ParticipationStatus = "NEEDS-ACTION";
                        attendee.Type = "INDIVIDUAL";

                        eventCalendar.Attendees = new List<Attendee> { attendee };
                    }
                }
                else
                {
                    eventCalendar.Summary = $"{visitType.Name}";
                    eventCalendar.Description = " ";
                }

                model.Events.Add(eventCalendar);

            }

            var serializer = new CalendarSerializer(model);
            MemoryStream ms = new MemoryStream();

            serializer.Serialize(model, ms, Encoding.UTF8);

            var ics = serializer.SerializeToString(model);
            var bytes = System.Text.Encoding.UTF8.GetBytes(ics);

            ms.Write(bytes, 0, bytes.Length);
            ms.Seek(0, SeekOrigin.Begin);

            return ms;
        }

        public static object ExportToJson(List<VisitsRow> visits, AccessType accessType)
        {
            var model = new Visits();
            var connection = SqlConnections.NewFor<VisitsRow>();

            foreach (var visit in visits)
            {
                var patient = connection.ById<PatientsRow>(visit.PatientId);
                var cabinet = connection.ById<CabinetsRow>(visit.CabinetId);
                var visitType = connection.ById<VisitTypesRow>(visit.VisitTypeId);

                if (accessType == AccessType.Private)
                    model.Events.Add(new Event
                    {
                        Summary = $"{patient.Name} - {visitType.Name}",
                        Location = cabinet.Name,
                        Description = visit.Description,
                        DtStart = visit.StartDate ?? DateTime.Now,
                        DtEnd = visit.EndDate ?? DateTime.Now
                    });
                else
                    model.Events.Add(new Event
                    {
                        Summary = $"{visitType.Name}",
                        Location = cabinet.Name,
                        Description = " ",
                        DtStart = visit.StartDate ?? DateTime.Now,
                        DtEnd = visit.EndDate ?? DateTime.Now
                    });
            }

            return model;
        }

        private class Visits
        {
            public Visits()
            {
                Events = new List<Event>();
            }

            public List<Event> Events { get; private set; }


        }

        private class Event
        {
            public string Location { get; set; }

            public string Summary { get; set; }

            public string Description { get; set; }

            public DateTime DtStart { get; set; }

            public DateTime DtEnd { get; set; }
        }

    }
}
