using Microsoft.EntityFrameworkCore;
using Smartphones.Models;

namespace Smartphones.Data
{
    public class SmartphoneContext : DbContext
    {
        public DbSet<Smartphone> Smartphones { get; set; }

        public SmartphoneContext()
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=SmartphoneDb;Trusted_Connection=True;";
            optionsBuilder.UseSqlServer(connectionString);
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Smartphone>()
                .HasData(
                    new Smartphone { Id = 1, Model = "iPhone 14", Price = 999.99f, ScreenSize = 6.1f, Rating = 4.5f, IsAvailable = false },
                    new Smartphone { Id = 2, Model = "Galaxy S21", Price = 799.99f, ScreenSize = 6.2f, Rating = 3.8f, IsAvailable = true },
                    new Smartphone { Id = 3, Model = "Pixel 6", Price = 699.99f, ScreenSize = 6.4f, Rating = 4.4f, IsAvailable = true },
                    new Smartphone { Id = 4, Model = "iPhone 14 Pro", Price = 1099.99f, ScreenSize = 6.1f, Rating = 4.7f, IsAvailable = true },
                    new Smartphone { Id = 5, Model = "Galaxy S21 Ultra", Price = 1199.99f, ScreenSize = 6.8f, Rating = 4.0f, IsAvailable = false },
                    new Smartphone { Id = 6, Model = "Pixel 6 Pro", Price = 899.99f, ScreenSize = 6.7f, Rating = 4.5f, IsAvailable = true },
                    new Smartphone { Id = 7, Model = "iPhone SE", Price = 399.99f, ScreenSize = 4.7f, Rating = 3.7f, IsAvailable = true },
                    new Smartphone { Id = 8, Model = "Galaxy A52", Price = 499.99f, ScreenSize = 6.5f, Rating = 4.1f, IsAvailable = true },
                    new Smartphone { Id = 9, Model = "Pixel 5a", Price = 449.99f, ScreenSize = 6.34f, Rating = 3.9f, IsAvailable = false },
                    new Smartphone { Id = 10, Model = "iPhone 13", Price = 899.99f, ScreenSize = 6.1f, Rating = 4.6f, IsAvailable = false },
                    new Smartphone { Id = 11, Model = "Galaxy S20", Price = 999.99f, ScreenSize = 6.2f, Rating = 3.8f, IsAvailable = true },
                    new Smartphone { Id = 12, Model = "Pixel 5", Price = 699.99f, ScreenSize = 6.0f, Rating = 4.4f, IsAvailable = true },
                    new Smartphone { Id = 13, Model = "OnePlus 9", Price = 729.99f, ScreenSize = 6.55f, Rating = 4.5f, IsAvailable = false },
                    new Smartphone { Id = 14, Model = "OnePlus 9 Pro", Price = 969.99f, ScreenSize = 6.7f, Rating = 4.6f, IsAvailable = true },
                    new Smartphone { Id = 15, Model = "Xiaomi Mi 11", Price = 749.99f, ScreenSize = 6.81f, Rating = 3.9f, IsAvailable = true },
                    new Smartphone { Id = 16, Model = "Xiaomi Mi 11 Pro", Price = 999.99f, ScreenSize = 6.81f, Rating = 4.5f, IsAvailable = false },
                    new Smartphone { Id = 17, Model = "Xiaomi Mi 11 Ultra", Price = 1199.99f, ScreenSize = 6.81f, Rating = 4.6f, IsAvailable = true },
                    new Smartphone { Id = 18, Model = "OnePlus Nord", Price = 499.99f, ScreenSize = 6.44f, Rating = 3.7f, IsAvailable = true },
                    new Smartphone { Id = 19, Model = "OnePlus Nord 2", Price = 499.99f, ScreenSize = 6.43f, Rating = 4.4f, IsAvailable = false },
                    new Smartphone { Id = 20, Model = "OnePlus Nord CE", Price = 299.99f, ScreenSize = 6.43f, Rating = 3.6f, IsAvailable = true },
                    new Smartphone { Id = 21, Model = "OnePlus Nord CE 5G", Price = 329.99f, ScreenSize = 6.43f, Rating = 4.3f, IsAvailable = true },
                    new Smartphone { Id = 22, Model = "OnePlus Nord N10 5G", Price = 299.99f, ScreenSize = 6.49f, Rating = 4.1f, IsAvailable = false },
                    new Smartphone { Id = 23, Model = "OnePlus Nord N100", Price = 199.99f, ScreenSize = 6.52f, Rating = 3.5f, IsAvailable = true },
                    new Smartphone { Id = 24, Model = "OnePlus Nord N200 5G", Price = 239.99f, ScreenSize = 6.49f, Rating = 4.1f, IsAvailable = false },
                    new Smartphone { Id = 25, Model = "OnePlus Nord N300 5G", Price = 329.99f, ScreenSize = 6.56f, Rating = 4.2f, IsAvailable = true },
                    new Smartphone { Id = 26, Model = "OnePlus Nord N500 5G", Price = 399.99f, ScreenSize = 6.43f, Rating = 3.8f, IsAvailable = true },
                    new Smartphone { Id = 27, Model = "OnePlus Nord N600 5G", Price = 449.99f, ScreenSize = 6.49f, Rating = 4.4f, IsAvailable = true },
                    new Smartphone { Id = 28, Model = "OnePlus Nord N700 5G", Price = 499.99f, ScreenSize = 6.49f, Rating = 4.5f, IsAvailable = false },
                    new Smartphone { Id = 29, Model = "OnePlus Nord N800 5G", Price = 549.99f, ScreenSize = 6.49f, Rating = 4.6f, IsAvailable = true },
                    new Smartphone { Id = 30, Model = "OnePlus Nord N900 5G", Price = 599.99f, ScreenSize = 6.49f, Rating = 4.7f, IsAvailable = true }
                );

            base.OnModelCreating(modelBuilder);
        }
    }
}