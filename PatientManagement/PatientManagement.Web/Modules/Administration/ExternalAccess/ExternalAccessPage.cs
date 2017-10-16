

using System;
using Microsoft.AspNetCore.Authorization;
using PatientManagement.Administration.Entities;
using PatientManagement.PatientManagement.Entities;
using Serenity.Data;
using System.Collections.Generic;
using System.Linq;
using PatientManagement.PatientManagement.Visits;

namespace PatientManagement.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ExternalAccessRow))]
    public class ExternalAccessController : Controller
    {
        [Route("Administration/ExternalAccess")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/ExternalAccess/ExternalAccessIndex.cshtml");
        }
    }

    [AllowAnonymous]
    public class ExternalController : Controller
    {
        [Route("External/{key}")]
        public ActionResult Index(string key)
        {
            var cabinetsIDs = new List<int>();
            AccessType accessType;
            OutputFormat outputFormat;

            var externalaccessFlds = ExternalAccessRow.Fields;
            using (var connection = SqlConnections.NewFor<ExternalAccessRow>())
                if (!connection.Exists<ExternalAccessRow>(externalaccessFlds.Url == key && externalaccessFlds.IsActive == 1))
                    return NotFound();
                else
                {
                    var externalCabinetsFlds = ExternalAccessCabinetsRow.Fields;
                    var externalAccessRow = connection.First<ExternalAccessRow>(externalaccessFlds.Url == key);

                    externalAccessRow.VisitedCount += 1;

                    connection.UpdateById(externalAccessRow, ExpectedRows.One);

                    accessType = externalAccessRow.AccessType ?? AccessType.Private;
                    outputFormat = externalAccessRow.OutputFormat ?? OutputFormat.Json;

                    cabinetsIDs = connection.List<ExternalAccessCabinetsRow>(externalCabinetsFlds.ExternalAccessId == externalAccessRow.ExternalAccessId.Value)?.Select(s => s.CabinetId.Value).ToList();
                    if (!cabinetsIDs.Any())
                        return Json("");
                }

            var visits = new List<VisitsRow>();
            using (var connection = SqlConnections.NewFor<CabinetsRow>())
            {
                var cabinetFlds = CabinetsRow.Fields;
                foreach (var cabinet in connection.List<CabinetsRow>(cabinetFlds.CabinetId.In(cabinetsIDs) && cabinetFlds.IsActive == 1))
                {
                    var visitFlds = VisitsRow.Fields;
                    visits = connection.List<VisitsRow>(visitFlds.CabinetId == cabinet.CabinetId.Value && visitFlds.StartDate > DateTime.Now.AddYears(-1));
                }

            }

            if (outputFormat == OutputFormat.Ics)
                return File(VisitsExportHelper.ExportToIcs(visits, accessType), "text/calendar", "event.ics");
            else
                return Json(VisitsExportHelper.ExportToJson(visits, accessType));
        }
    }
}