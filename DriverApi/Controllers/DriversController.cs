using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
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

        // GET: api/Drivers
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

            //return await _context.Driver.ToListAsync();
        }

        // GET: api/Drivers/5
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

        // PUT: api/Drivers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDriver(string id, DriverDTO driverdto)
        {
            if (id != driverdto.Id)
            {
                return BadRequest();
            }

            _context.Entry(driverdto).State = EntityState.Modified;

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

        // POST: api/Drivers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
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

        // DELETE: api/Drivers/5
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
