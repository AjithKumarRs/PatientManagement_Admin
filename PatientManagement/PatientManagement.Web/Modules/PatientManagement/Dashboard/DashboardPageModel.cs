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
        public string title { get; set; }

        public string backGroundColor { get; set; }

        public string borderColor { get; set; }

        public bool allDay { get; set; }

        public DateTime start { get; set; }

        public DateTime end { get; set; }

    }
}
