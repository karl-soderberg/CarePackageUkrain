using Microsoft.EntityFrameworkCore;

public class DriverContext : DbContext
    {
        public DriverContext (DbContextOptions<DriverContext> options)
            : base(options)
        {
        }

        public DbSet<DriverApi.Models.Driver> Driver { get; set; } = default!;
    }
