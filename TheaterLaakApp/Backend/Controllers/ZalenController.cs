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
using Microsoft.AspNetCore.Authorization;

namespace Backend.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ZalenController : ControllerBase
    {
        private readonly TheaterIdentityContext _context;

        public ZalenController(TheaterIdentityContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Zaal>>> GetZalen()
        {
          if (_context.Zalen == null)
          {
              return NotFound();
          }
            return await _context.Zalen.ToListAsync();
        }

        // GET: api/Zalen/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Zaal>> GetZaal(int id)
        {
          if (_context.Zalen == null)
          {
              return NotFound();
          }
            var zaal = await _context.Zalen.FindAsync(id);

            if (zaal == null)
            {
                return NotFound();
            }

            return zaal;
        }

        [Authorize(Roles = "Admin, Medewerker")]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutZaal(int id, Zaal zaal)
        {
            if (id != zaal.ZaalNummer)
            {
                return BadRequest();
            }

            _context.Entry(zaal).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ZaalExists(id))
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

        [Authorize(Roles = "Admin, Medewerker")]
        [HttpPost]
        public async Task<ActionResult<Response>> PostZaal(Zaal zaal)
        {
            _context.Zalen.Add(zaal);
            await _context.SaveChangesAsync();

            return new Response{ code = 201, message = "Zaal is toegevoegd" };
        }

        [Authorize(Roles = "Admin, Medewerker")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteZaal(int id)
        {
            if (_context.Zalen == null)
            {
                return NotFound();
            }
            var zaal = await _context.Zalen.FindAsync(id);
            if (zaal == null)
            {
                return NotFound();
            }

            _context.Zalen.Remove(zaal);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ZaalExists(int id)
        {
            return (_context.Zalen?.Any(e => e.ZaalNummer == id)).GetValueOrDefault();
        }
    }
}
