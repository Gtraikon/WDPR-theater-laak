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
        //List<Tijdslot> tijdsloten = await _context.Tijdsloten.Where(t => !(t.voorstelling == null)).Include(t => t.voorstelling.ID && t.voorstelling.image && t.voorstelling.Titel).ToListAsync();
        List<Tijdslot> tijdsloten = await _context.Tijdsloten.Where(t => !(t.voorstelling == null)).Include(t => t.voorstelling).ToListAsync();
        return tijdsloten;
    }
}