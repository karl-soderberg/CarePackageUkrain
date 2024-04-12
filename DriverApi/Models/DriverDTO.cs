namespace DriverApi.Models
{
    public class DriverDTO
    {
        public required string Name { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? PricePerKg { get; set; }
        public string? City { get; set; }
        public bool Available { get; set;} 
    }
}