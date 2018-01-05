using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PatientManagement.Reservation.Controllers;

namespace PatientManagement.Reservation.Web.Controllers
{
    public class CabinetController : ReservationControllerBase
    {
        public ActionResult Index(string id)
        {
            return View();
        }
    }
}