using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;

namespace PatientManagement.Public
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            var apiKey = Environment.GetEnvironmentVariable("COMINGSOON_ENABLED");
            var rootDirectory = "/comingsoon";

            if (apiKey != null && apiKey == "true")
            {
                app.UseDefaultFiles(rootDirectory);

                app.UseStaticFiles(new StaticFileOptions()
                {
                    FileProvider = new PhysicalFileProvider(
                        Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/comingsoon")),
                    RequestPath = new PathString(rootDirectory),
                    OnPrepareResponse = ctx =>
                    {
                        ctx.Context.Response.Headers.Append("Cache-Control", "public,max-age=600000");
                    }
                });
            }
            else
            {
                app.UseDefaultFiles();
            }


            var saticFileOptions = new StaticFileOptions
            {
                OnPrepareResponse = ctx =>
                {
                    ctx.Context.Response.Headers.Append("Cache-Control", "public,max-age=600000");
                }
            };

            app.UseStaticFiles(saticFileOptions);
            app.UseMvc();
            app.Use(async (context, next) =>
            {
                if (context != null)
                {
                    if (apiKey != null && apiKey == "true")
                    {
                        context.Response.Redirect("/comingsoon/index.html");
                    }
                    else
                    {
                        context.Response.Redirect("/");


                    }
                    return;
                }
                await next.Invoke();
            });
        }
    }
}
