using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DriverApi.Models;

namespace DriverApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DriversController : ControllerBase
    {
        private readonly DriverContext _context;

        public DriversController(DriverContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Driver>>> GetDrivers(string city = "")
        {
            if (city == "")
            {
                return await _context.Driver.ToListAsync();
            }
            else
            {
                return await _context.Driver.Where(driver => driver.City == city).ToListAsync();
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Driver>> GetDriverbyid(string id)
        {
            var driver = await _context.Driver.FindAsync(id);
            if (driver == null)
            {
                return NotFound();
            }
            return driver;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutDriver(string id, Driver driver)
        {
            if (id != driver.Id)
            {
                return BadRequest();
            }

            _context.Entry(driver).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DriverExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Driver>> PostDriver(DriverDTO driverDTO)
        {
            var driver = new Driver {
                Id = "Driver_" + Guid.NewGuid(),
                Name = driverDTO.Name,
                Email = driverDTO.Email,
                PhoneNumber = driverDTO.PhoneNumber,
                PricePerKg = driverDTO.PricePerKg,
                City = driverDTO.City,
                Available = driverDTO.Available,
            };
            _context.Driver.Add(driver);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (DriverExists(driver.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetDriverbyid", new { id = driver.Id }, driver);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDriver(string id)
        {
            var driver = await _context.Driver.FindAsync(id);
            if (driver == null)
            {
                return NotFound();
            }

            _context.Driver.Remove(driver);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DriverExists(string id)
        {
            return _context.Driver.Any(e => e.Id == id);
        }
    }
}
