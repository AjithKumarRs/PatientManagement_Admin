using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PatientManagement.PatientManagement.Entities
{
    public class VisitsPerMonthLineChartResponse
    {
        public VisitsPerMonthLineChartResponse()
        {
            labels = new List<string>();
            datasets = new List<Dataset>();
        }
        

        //Visit types
        public List<string> labels { get; set; }

        public  List<Dataset> datasets { get; set; }

        public class Dataset
        {
            public bool fill { get; set; }

            public Dataset()
            {
                data = new List<int>();
            }
            public string label { get; set; }
            
            public List<int> data { get; set; }

            public string backgroundColor { get; set; }

            public string borderColor { get; set; }
        }
    }

}
