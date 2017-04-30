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
        public string Title { get; set; }

        public string BackGroundColor { get; set; }

        public string BorderColor { get; set; }

        public bool AllDay { get; set; }

        public DateTime start { get; set; }

        public DateTime end { get; set; }

    }
}
