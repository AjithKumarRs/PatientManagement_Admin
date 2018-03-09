using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PatientManagement.Reservation.Controllers;

namespace PatientManagement.Reservation.Web.Mvc.Controllers
{
    public class ClinicsController : ReservationControllerBase
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}