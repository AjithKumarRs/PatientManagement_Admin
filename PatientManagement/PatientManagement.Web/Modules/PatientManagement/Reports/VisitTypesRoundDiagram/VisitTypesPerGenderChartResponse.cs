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
            Labels = new List<string>();
            datasets = new List<Dataset>();
        }
        

        //Visit types
        public List<string> Labels { get; set; }

        public  List<Dataset> datasets { get; set; }
    }

    public class Dataset
    {
        public Dataset()
        {
            data = new List<int>();
            backgroundColor = new List<string>();
        }
        public string label { get; set; }

        public int PatientsTotal { get; set; }
        public int VisitsTotal { get; set; }

        public string MostReservedVisitType { get; set; }

        public List<int> data { get; set; }

        public List<string> backgroundColor { get; set; }

    }
}
