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
    public async Task<List<Voorstelling>> GetVoorstellingen()
    {
        List<Voorstelling> voorstellingen = await _context.Voorstellingen.OrderBy(v => v.Titel).ToListAsync();
        return voorstellingen;
    }
}