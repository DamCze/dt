using dt.storage.application.Configuration;
using dt.storage.application.Interfaces;
using dt.storage.infrastructure.Context;
using dt.storage.infrastructure.Repository;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace dt
{
    public class RegisteredServices
    {
        public static void AddServices(IServiceCollection services)
        {
            AppConfiguration appConfiguration = new AppConfiguration();

            services.AddSingleton(appConfiguration);
            services.AddSingleton(appConfiguration.KeyCloak);
            services.AddSingleton(appConfiguration.PostgreSQL);
            services.AddTransient<IDbRepository, DbRepository>();
            services.AddTransient<MyContext>();

            //services.AddAuthentication(options =>
            //{
            //    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            //    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            //}).AddJwtBearer(o =>
            //{
            //    o.TokenValidationParameters = new TokenValidationParameters()
            //    {
            //        ValidateAudience = true,
            //        ValidateIssuerSigningKey = true,
            //        ValidateIssuer = true,
            //        ValidIssuer = appConfiguration.KeyCloak.Issuer,
            //        ValidateLifetime = true,
            //        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(appConfiguration.KeyCloak.IssuerSigningKey)),
            //    };

            //    o.RequireHttpsMetadata = false;
            //    o.Authority = appConfiguration.KeyCloak.Issuer;
            //    o.Audience = appConfiguration.KeyCloak.Client;
            //    o.SaveToken = true;

            //});

        }
    }
}
