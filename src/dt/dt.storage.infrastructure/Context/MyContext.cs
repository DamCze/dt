using Microsoft.EntityFrameworkCore;
using dt.storage.application.Models;
using dt.storage.application.Configuration;

namespace dt.storage.infrastructure.Context
{
    public class MyContext : DbContext
    {
        private readonly string _connectionString;
        public DbSet<User> Users { get; set; }

        public MyContext(DatabaseConfig databaseConfig)
        {
            _connectionString = databaseConfig.ConnectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder = optionsBuilder.UseNpgsql(_connectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("public");
            modelBuilder.Entity<User>().ToTable("user");
            base.OnModelCreating(modelBuilder);
        }
    }
}
