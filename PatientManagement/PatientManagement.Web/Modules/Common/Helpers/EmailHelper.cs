using System;
using System.Web.Hosting;
using System.IO;
using SendGrid;
using SendGrid.Helpers.Mail;
#if COREFX
using MailKit.Net.Smtp;
using MimeKit;
using MailKit.Security;
#else
using System.Net.Mail;
#endif

namespace PatientManagement.Common
{
    public class EmailHelper
    {
        public static void Send(string subject, string body, string address, string displayName = "")
        {
#if COREFX
            var apiKey = Environment.GetEnvironmentVariable("SENDGRID_API_KEY");

            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("no-reply@myclario.com", "Registration");
            var to = new EmailAddress(address, displayName);
            var plainTextContent = body;
            var htmlContent = body;
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response =  client.SendEmailAsync(msg).Result;


            //var message = new MimeMessage();
            //message.To.Add(new MailboxAddress(displayName, address));
            //message.Subject = subject;
            //var bodyBuilder = new BodyBuilder();
            //bodyBuilder.HtmlBody = body;
            //message.Body = bodyBuilder.ToMessageBody();
            //var client = new SmtpClient();
            //client.Connect("dummy", -1, false);
            //client.Send(message);
            //client.Disconnect(true);
#else
            var message = new MailMessage();
            message.To.Add(new MailAddress(address, ""));
            message.Subject = subject;
            message.Body = body;
            message.IsBodyHtml = true;

            var client = new SmtpClient();

            if (client.DeliveryMethod == SmtpDeliveryMethod.SpecifiedPickupDirectory &&
                string.IsNullOrEmpty(client.PickupDirectoryLocation))
            {
                var pickupPath = HostingEnvironment.MapPath("~/App_Data");
                pickupPath = Path.Combine(pickupPath, "Mail");
                Directory.CreateDirectory(pickupPath);
                client.PickupDirectoryLocation = pickupPath;
            }

            client.Send(message);
#endif
        }
    }
}