using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;
using Backend.ModelsObj;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;

namespace Backend.Controllers;

[Route("api/[controller]")]
[ApiController]

public class KaartjesController : ControllerBase
{
    private readonly TheaterIdentityContext _context;
    private readonly UserManager<Gebruiker> _userManager;
    public KaartjesController(TheaterIdentityContext context, UserManager<Gebruiker> userManager)
    {
        _context = context;
        _userManager = userManager;
    }

    [HttpPost]
    [Authorize]
    [Route("Kopen")]
    public async Task<ActionResult> Kopen([FromBody] KoopObj koopObj)
    {
        var kaartjes = await _context.Kaartjes.ToArrayAsync();
        Gebruiker gebruiker = await _userManager.FindByNameAsync(koopObj.Gebruikersnaam);
        Voorstelling voorstelling = await _context.Voorstellingen.FindAsync(koopObj.VoorstellingID);

        await _context.Kaartjes.AddAsync(new Kaartje() { ID = (kaartjes.Length + 1), Prijs = koopObj.prijs, Voorstelling = voorstelling, Gebruiker = gebruiker });
        await _context.SaveChangesAsync();
        return Ok();
    }

}

