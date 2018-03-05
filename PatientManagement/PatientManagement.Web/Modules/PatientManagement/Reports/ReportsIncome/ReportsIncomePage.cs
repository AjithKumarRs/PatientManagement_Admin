

using PatientManagement.Administration;

namespace PatientManagement.PatientManagement.Pages
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(PatientManagementPermissionKeys.ReportsIncomePage)]
    public class ReportsIncomeController : Controller
    {
        [HttpGet, Route("PatientManagement/Reports/Income")]
        public ActionResult Index()
        {
            return View(MVC.Views.PatientManagement.Reports.ReportsIncome.ReportsIncomeIndex);
        }
    }
}
