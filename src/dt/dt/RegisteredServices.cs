using dt.storage.application.Configuration;
using dt.storage.application.Interfaces;
using dt.storage.infrastructure.Context;
using dt.storage.infrastructure.Repository;
using Microsoft.Extensions.DependencyInjection;

namespace dt
{
    public class RegisteredServices
    {
        public static void AddServices(IServiceCollection services)
        {
            AppConfiguration appConfiguration = new AppConfiguration();

            services.AddSingleton(appConfiguration);
            services.AddSingleton(appConfiguration.PostgreSQL);
            services.AddTransient<IDbRepository, DbRepository>();
            services.AddTransient<MyContext>();
        }
    }
}
