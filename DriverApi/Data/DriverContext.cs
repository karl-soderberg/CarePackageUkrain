using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DriverApi.Models;

    public class DriverContext : DbContext
    {
        public DriverContext (DbContextOptions<DriverContext> options)
            : base(options)
        {
        }

        public DbSet<DriverApi.Models.Driver> Driver { get; set; } = default!;
    }
