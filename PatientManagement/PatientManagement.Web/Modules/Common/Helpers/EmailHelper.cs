using System;
using System.Web.Hosting;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using SendGrid;
using SendGrid.Helpers.Mail;
using Serenity;
using Serenity.ComponentModel;
#if COREFX
using MailKit.Net.Smtp;
using MimeKit;
using MailKit.Security;
#else
using System.Net.Mail;
#endif

namespace PatientManagement.Common
{
    [SettingScope("Application"), SettingKey("MailSettings")]
    public class MailSettings
    {
        public string Enabled { get; set; }
        public string Host { get; set; }
        public int Port { get; set; }
        public bool UseSsl { get; set; }
    }
    [SettingScope("Application"), SettingKey("SendGridMailSettings")]
    public class SendGridMailSettings
    {
        public string Enabled { get; set; }
        public string SENDGRID_API_KEY { get; set; }
    }
    public class EmailHelper
    {
        public static void Send(string subject, string body, string address, string displayName = "")
        {
            //TODO: Rename the method 
            SendToPatient("no-reply@myclario.com","myclario.com", subject, body, address, displayName);
            
        }

        public static void SendToPatient(string fromEmail, string FromName, string subject, string body, string toEmail,
            string toName = "")
        {
            var apiKey = Config.Get<SendGridMailSettings>();
            if (apiKey.Enabled != null && bool.Parse(apiKey.Enabled))
            {
                var client = new SendGridClient(apiKey.SENDGRID_API_KEY);
                var from = new EmailAddress(fromEmail, FromName);
                var to = new EmailAddress(toEmail, toName);
                var plainTextContent = body;
                var htmlContent = body;
                var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
                var response = client.SendEmailAsync(msg).Result;
            }

            var config = Config.Get<MailSettings>();
            if (config.Enabled != null && bool.Parse(config.Enabled))
            {
                var message = new MimeMessage();
                message.To.Add(new MailboxAddress(toName, toEmail));
                message.Subject = subject;
                var bodyBuilder = new BodyBuilder();
                bodyBuilder.HtmlBody = body;
                message.Body = bodyBuilder.ToMessageBody();
                if (!string.IsNullOrEmpty(config.Host))
                {
                    var client = new SmtpClient();
                    client.Connect(config.Host, config.Port, config.UseSsl);
                    client.Send(message);
                    client.Disconnect(true);
                }
                else
                {
                    var pickupPath = Path.Combine(Dependency.Resolve<IHostingEnvironment>().ContentRootPath,
                        "App_Data");
                    pickupPath = Path.Combine(pickupPath, "Mail");
                    Directory.CreateDirectory(pickupPath);
                    message.WriteTo(Path.Combine(pickupPath, DateTime.Now.ToString("yyyyMMdd_HHmmss_fff") + ".eml"));
                }
            }
        }

    }


}