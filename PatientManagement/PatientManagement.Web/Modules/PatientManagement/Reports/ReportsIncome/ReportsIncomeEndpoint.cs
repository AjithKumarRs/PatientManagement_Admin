using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.PatientManagement.Repositories;
using Serenity.Data;
using Serenity.Services;

namespace PatientManagement.PatientManagement.Endpoints
{
    [Route("Services/PatientManagement/ReportsIncome/[action]")]
    [ConnectionKey(typeof(VisitTypesRow))]
    public class ReportsIncomeEndpoint : ServiceEndpoint
    {
      
    }
}
