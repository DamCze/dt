using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using dt.storage.application.Configuration;
using System.Text;
using dt.storage.infrastructure.Context;
using System;
using dt.Scraper;

namespace dt
{
    public class Startup
    {
        public AppConfiguration AppConfiguration { get; set; }
        Uri uriAtoH = new Uri("https://polki.pl/dieta-i-fitness/odchudzanie,tabela-kalorii-i-wartosci-odzywczych-produkty-a-h,10299029,artykul.html");
        Uri uriItoO = new Uri("https://polki.pl/dieta-i-fitness/odchudzanie,tabela-kalorii-i-wartosci-odzywczych-produkty-i-o,10299033,artykul.html");
        Uri uriPtoZ = new Uri("https://polki.pl/dieta-i-fitness/odchudzanie,tabela-kalorii-i-wartosci-odzywczych-produkty-p-z,10299037,artykul.html");

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public Startup(IHostingEnvironment env)
        {
            using (var client = new MyContext(AppConfiguration.PostgreSQL))
            {
                if(client.Database.EnsureCreated())
                {
                    //ScrapData scrapDataAtoH = new ScrapData(uriAtoH);
                    //ScrapData scrapDataItoO = new ScrapData(uriItoO);
                    //ScrapData scrapDataPtoZ = new ScrapData(uriPtoZ);

                    //scrapDataAtoH.saveScrapedData(scrapDataAtoH.getData());
                    //Console.WriteLine("AtoH inserted");
                    //scrapDataItoO.saveScrapedData(scrapDataItoO.getData());
                    //Console.WriteLine("ItoO inserted");
                    //scrapDataPtoZ.saveScrapedData(scrapDataPtoZ.getData());
                    //Console.WriteLine("PtoZ inserted");
                    //Console.WriteLine("All data inserted");
                }
            }
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            RegisteredServices.AddServices(services);

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        public void RegisterJWTBearer(IServiceCollection services)
        {
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            }).AddJwtBearer(o =>
            {
                o.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateAudience = true,
                    ValidateIssuerSigningKey = true,
                    ValidateIssuer = true,
                    ValidIssuer = AppConfiguration.KeyCloak.Issuer,
                    ValidateLifetime = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(AppConfiguration.KeyCloak.IssuerSigningKey)),
                };

                o.RequireHttpsMetadata = false;
                o.Authority = AppConfiguration.KeyCloak.Issuer;
                o.Audience = AppConfiguration.KeyCloak.Client;
                o.SaveToken = true;

            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
