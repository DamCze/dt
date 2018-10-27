using Newtonsoft.Json;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace dt.storage.application.Configuration
{
    public class AppConfiguration
    {
        [JsonRequired]
        public DatabaseConfig PostgreSQL { get; set; }
        [JsonRequired]
        public KeyCloakConfig KeyCloak { get; set; }
        public AppConfiguration()
        {
            IConfigurationBuilder builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json");

            IConfigurationRoot configurationRoot = builder.Build();
            configurationRoot.Bind(this);
        }
    }
}
