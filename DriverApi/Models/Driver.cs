using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DriverApi.Models
{
    public class Driver
    {
        [Key]
        public string Id { get; set; }  = "Driver_" + Guid.NewGuid();
        public required string Name { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? PricePerKg { get; set; }
        public string? City { get; set; }
        public bool Available { get; set;}  
        
    }
}