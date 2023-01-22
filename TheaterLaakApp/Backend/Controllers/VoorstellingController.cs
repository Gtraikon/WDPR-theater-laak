using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;
using Backend.ModelsObj;
using Microsoft.AspNetCore.Identity;

namespace Backend.Controllers;

[Route("api/[controller]")]
[ApiController]

public class VoorstellingController : ControllerBase
{
    private readonly TheaterIdentityContext _context;

    public VoorstellingController(TheaterIdentityContext context, UserManager<Gebruiker> userManager)
    {
        _context = context;
    }

    [HttpGet("GetVoorstellingen")]
    public async Task<List<Tijdslot>> GetVoorstellingen()
    {
        List<Tijdslot> tijdsloten = await _context.Tijdsloten.Where(t => !(t.voorstelling == null)).Include(t => t.voorstelling).ToListAsync();
        return tijdsloten;
    }

    [HttpGet("{id}")]
        public async Task<ActionResult<Tijdslot>> GetVoorstelling(int id)
        {
          if (_context.Tijdsloten == null)
          {
              return NotFound();
          }
            var tijdslot = await _context.Tijdsloten.Include(t => t.voorstelling).Include(t => t.Zaal).SingleAsync(t => t.ID == id);

            if (tijdslot == null)
            {
                return NotFound();
            }

            return tijdslot;
        }
}