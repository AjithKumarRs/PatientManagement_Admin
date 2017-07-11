using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SendGrid;
using SendGrid.Helpers.Mail;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PatientManagement.Public.Controlers
{
    [Route("api/[controller]")]
    public class EmailController : Controller
    {
        // Post: /<controller>/
        [HttpPost]
        public IActionResult Index(string name, string message, string fromEmail, string phone, int captcha, string subject = "contact form- myclario")
         {

            var apiKey = Environment.GetEnvironmentVariable("SENDGRID_API_KEY");

            var client = new SendGridClient(apiKey);
            var from = new EmailAddress(fromEmail, name);
            var to = new EmailAddress("support@myclario.com");
            var plainTextContent = message;
            var htmlContent = message;
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = client.SendEmailAsync(msg).Result;

            if (response.StatusCode == HttpStatusCode.Accepted || response.StatusCode == HttpStatusCode.OK)
                return Ok();
            else
                return BadRequest();
        }
    }
}
