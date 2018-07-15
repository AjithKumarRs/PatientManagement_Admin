using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PatientManagement.PatientManagement.Entities
{
    public class VisitTypesPerGenderChartResponse
    {
        public VisitTypesPerGenderChartResponse()
        {
            labels = new List<string>();
            datasets = new List<Dataset>();
        }
        

        //Visit types
        public List<string> labels { get; set; }

        public  List<Dataset> datasets { get; set; }

        public class Dataset
        {
            public Dataset()
            {
                data = new List<int>();
                backgroundColor = new List<string>();
            }
            public string label { get; set; }

            public int patientsTotal { get; set; }
            public int visitsTotal { get; set; }

            public string mostReservedVisitType { get; set; }

            public List<int> data { get; set; }

            public List<string> backgroundColor { get; set; }

        }
    }

  
}
