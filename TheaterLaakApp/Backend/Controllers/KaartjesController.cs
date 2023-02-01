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
    public async Task<Response> Kopen([FromBody] KoopObj koopObj)
    {
        if (User.Identity.IsAuthenticated)
        {
            var bestellingen = await _context.Bestellingen.ToArrayAsync();
            Gebruiker gebruiker = await _userManager.FindByNameAsync(koopObj.Gebruikersnaam);
            Tijdslot tijdslot = await _context.Tijdsloten.FindAsync(koopObj.TijdslotID);

            int tijdslotAantal = _context.Bestellingen.Where(b => b.Gebruiker == gebruiker && b.Tijdslot == tijdslot).Select(b => b.Aantal).Sum();

            if((koopObj.Aantal + tijdslotAantal) > 25){
                return new Response() { code = 400, message = "U kunt maximaal 25 tickets kopen" };
            }

            await _context.Bestellingen.AddAsync(new Bestelling() { ID = (bestellingen.Length + 1), Tijdslot = tijdslot, Gebruiker = gebruiker, Aantal=koopObj.Aantal});
            await _context.SaveChangesAsync();
            return new Response() { code = 201, message = "Het Betalen is gelukt" };
        }
        else
        {
            return new Response() { code = 401, message = "U moet opnieuw inloggen" };
        }
    }

    [HttpGet]
    [Authorize]
        public async Task<ActionResult<IEnumerable<Bestelling>>> Get(string username)
        {
            if(User.Identity.IsAuthenticated){
                return await _context.Bestellingen.Where(k => k.Gebruiker.UserName == username).Include(k => k.Tijdslot.voorstelling).Include(k => k.Tijdslot.Zaal).ToListAsync();
            }
            else{
                return Unauthorized();
            }
        }

        [HttpPost]
        [Authorize(Roles = "Medewerker")]
        [Route("aanwezigheid")]
        public async Task<Response> Aanwezigheid(int bestelnummer)
        {
            if(User.Identity.IsAuthenticated){
               Bestelling bestelling = await _context.Bestellingen.Where(k => k.Tijdslot.voorstelling != null).SingleOrDefaultAsync(b => b.ID == bestelnummer);
               if(bestelling == null){
                return new Response{ code = 400, message = "Verkeerde bestelnummer"};
               }

               if(bestelling.Aanwezig == "ja"){
                return new Response{ code = 400, message = "De code is al een keer gebruikt"};
               }

               bestelling.Aanwezig = "ja";
               _context.SaveChangesAsync();
               return new Response{ code = 200, message = "Aanwezigheid is aangepast"};
            
            }else{
                return new Response{ code = 401, message = "U moet inloggen"};
            }
        }
}

