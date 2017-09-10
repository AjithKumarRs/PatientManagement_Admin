using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;

namespace PatientManagement.Public
{
    public class Program
    {
        public static void Main(string[] args)
        {

            var apiKey = Environment.GetEnvironmentVariable("COMINGSOON_ENABLED");

            if (apiKey != null && apiKey == "false")
            {
                var host = new WebHostBuilder()
                    .UseKestrel()
                    .UseIISIntegration()
                    .UseStartup<Startup>()
                    .UseApplicationInsights()
                    .UseContentRoot(Directory.GetCurrentDirectory())
                    .Build();

                host.Run();
            }
            else
            {
                var host = new WebHostBuilder()
                    .UseKestrel()
                    .UseIISIntegration()
                    .UseStartup<Startup>()
                    .UseContentRoot(Directory.GetCurrentDirectory() +"/wwwroot/comingsoon")
                    .UseApplicationInsights()
                    .Build();

                host.Run();
            }

        }
    }
}
