using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PatientManagement.Dashboard
{
    public class DashboardPageModel
    {
        public DashboardPageModel()
        {
            EventsList = new List<Event>();
        }
        public List<Event> EventsList { get; set; }
    }

    public class Event
    {
        public Int32 id { get; set; }

        public Int32 patientId { get; set; }

        public Boolean patientAutoEmailActive { get; set; }

        public string title { get; set; }

        public string assignedToUser { get; set; }

        public string backgroundColor { get; set; }

        public string borderColor { get; set; }

        public bool allDay { get; set; }

        public string start { get; set; }

        public string end { get; set; }

    }
}
