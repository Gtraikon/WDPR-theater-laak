using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;
using Backend.ModelsObj;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReserveringController : ControllerBase
    {
        private readonly TheaterIdentityContext _context;
        private readonly UserManager<Gebruiker> _userManager;

        public ReserveringController(TheaterIdentityContext context, UserManager<Gebruiker> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        // POST: api/Reservering
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize]
        public async Task<Response> PostReservering(ReserveringObj reserveringObj)
        {
            Gebruiker gebruiker = await _userManager.FindByNameAsync(reserveringObj.Gebruikersnaam);
            Zaal zaal = await _context.Zalen.FindAsync(reserveringObj.ZaalNummer);
            DateOnly datum = new DateOnly(reserveringObj.Jaar, reserveringObj.Maand, reserveringObj.Dag);
            TimeOnly beginTijd = new TimeOnly(reserveringObj.BeginUur, reserveringObj.BeginMinuut);
            TimeOnly eindTijd = new TimeOnly(reserveringObj.EindUur, reserveringObj.EindMinuut);
            Tijdslot tijdslot = new Tijdslot{Datum=datum, BeginTijd=beginTijd, EindTijd=eindTijd, Zaal=zaal};
            Reservering reservering = new Reservering{Tijdslot=tijdslot, Gebruiker=gebruiker};

            if (!tijdslot.Vrij(_context))
            {
                return new Response() { code = 400, message = "Het tijdslot is niet vrij" };
            }
            if(!tijdslot.BinnenOpeningstijden()){
                return new Response() { code = 400, message = "Dit tijdslot valt buiten de openingstijden" };
            }

            _context.Reserveringen.Add(reservering);
            await _context.SaveChangesAsync();

            return new Response() { code = 200, message = "Uw Reservering is succesvol" };
        }

        // GET: api/Reservering
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reservering>>> GetReserveringen()
        {
            if (_context.Reserveringen == null)
            {
                return NotFound();
            }
            return await _context.Reserveringen.ToListAsync();
        }

        // GET: api/Reservering/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Reservering>> GetReservering(int id)
        {
            if (_context.Reserveringen == null)
            {
                return NotFound();
            }
            var reservering = await _context.Reserveringen.FindAsync(id);

            if (reservering == null)
            {
                return NotFound();
            }

            return reservering;
        }

        // PUT: api/Reservering/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReservering(int id, Reservering reservering)
        {
            if (id != reservering.ID)
            {
                return BadRequest();
            }

            _context.Entry(reservering).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReserveringExists(id))
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

        // DELETE: api/Reservering/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReservering(int id)
        {
            if (_context.Reserveringen == null)
            {
                return NotFound();
            }
            var reservering = await _context.Reserveringen.FindAsync(id);
            if (reservering == null)
            {
                return NotFound();
            }

            _context.Reserveringen.Remove(reservering);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReserveringExists(int id)
        {
            return (_context.Reserveringen?.Any(e => e.ID == id)).GetValueOrDefault();
        }
    }
}
