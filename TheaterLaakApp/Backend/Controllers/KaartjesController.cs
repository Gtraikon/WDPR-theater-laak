using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;
namespace Backend.Controllers;

[Route("api/[controller]")]
[ApiController]

public class KaartjesController : ControllerBase
{
    private readonly TheaterIdentityContext _context;
    public KaartjesController(TheaterIdentityContext context)
    {
        _context = context;
    }

    [HttpPost]
    [Route("Kopen")]
    public async Task<ActionResult> Kopen([FromBody] KoopObj koopObj)
    {
        var kaartjes = await _context.Kaart.ToArrayAsync();

        await _context.Kaart.AddAsync(new Kaartje() { ID = (kaartjes.Length + 1), Prijs = koopObj.prijs, VoorstellingID = koopObj.VoorstellingID, GebruikerID = koopObj.GebruikerID });
        await _context.SaveChangesAsync();
        return Ok();
    }

}

public class KoopObj
{
    public double prijs { get; set; }
    public int VoorstellingID { get; set; }

    public int GebruikerID { get; set; }
}
