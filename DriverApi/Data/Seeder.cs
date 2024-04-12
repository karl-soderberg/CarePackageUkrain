using DriverApi.Models;

namespace DriverApi.Data
{
    public class Seeder
    {
         public static void SeedData(IApplicationBuilder applicationBuilder)
        {
            using(var serviceScope = applicationBuilder.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<DriverContext>();
                context.Database.EnsureCreated();
                
                 if(!context.Driver.Any())
                 {
                    var drivers = new List<Driver>() {
                        new Driver
                        {
                            Name = "Taras Shevchenko",
                            Email = "taras@gmail.com",
                            PhoneNumber = "0723456789",
                            PricePerKg  = "110kr",
                            City = "Stockholm",
                            Available = true
                        },
                        new Driver
                        {
                            Name = "Solomiya Kvitka",
                            Email = "solomiya@gmail.com",
                            PhoneNumber = "0725256769",
                            PricePerKg  = "108kr",
                            City = "Stockholm",
                            Available = true
                        },
                        new Driver
                        {
                            Name = "Yuliya Sham",
                            Email = "yuliya@gmail.com",
                            PhoneNumber = "0704277301",
                            PricePerKg  = "100kr",
                            City = "Stockholm",
                            Available = true
                        },
                        new Driver
                        {
                            Name = "Lina Kostenko",
                            Email = "lina@gmail.com",
                            PhoneNumber = "0725454389",
                            PricePerKg  = "105kr",
                            City = "Stockholm",
                            Available = true
                        },
                        new Driver
                        {
                            Name = "Andriy Shevchenko",
                            Email = "andriy@gmail.com",
                            PhoneNumber = "0725456789",
                            PricePerKg  = "95kr",
                            City = "Uppsala",
                            Available = true
                        },
                        new Driver
                        {
                            Name = "Olga Kobylyanska",
                            Email = "olga@gmail.com",
                            PhoneNumber = "0734567890",
                            PricePerKg  = "120kr",
                            City = "Stockholm",
                            Available = true
                        },
                        new Driver
                        {
                            Name = "Viktor Kovalenko",
                            Email = "viktor@gmail.com",
                            PhoneNumber = "0765432109",
                            PricePerKg  = "90kr",
                            City = "Uppsala",
                            Available = false
                        },
                        
                    };
                    context.Driver.AddRange(drivers);
                    context.SaveChanges();
                 }
            }
        }
    }
}