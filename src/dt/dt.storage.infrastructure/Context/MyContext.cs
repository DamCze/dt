using Microsoft.EntityFrameworkCore;
using dt.storage.application.Models;
using dt.storage.application.Configuration;

namespace dt.storage.infrastructure.Context
{
    public class MyContext : DbContext
    {
        private readonly string _connectionString;

        public MyContext(DatabaseConfig databaseConfig)
        {
            _connectionString = databaseConfig.ConnectionString;
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Meal> Meals { get; set; }
        public DbSet<UsersMeal> UsersMeals { get; set; }
        public DbSet<Workout> Workouts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder = optionsBuilder.UseNpgsql(_connectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("public");
            modelBuilder.Entity<User>().ToTable("user");
            modelBuilder.Entity<Meal>().ToTable("meal");
            modelBuilder.Entity<UsersMeal>().ToTable("usersMeal");
            modelBuilder.Entity<Workout>().ToTable("workout");
            base.OnModelCreating(modelBuilder);
        }
    }
}
