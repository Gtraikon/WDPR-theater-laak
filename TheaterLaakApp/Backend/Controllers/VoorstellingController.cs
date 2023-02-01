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

public class VoorstellingController : ControllerBase
{
    private readonly TheaterIdentityContext _context;

    public VoorstellingController(TheaterIdentityContext context, UserManager<Gebruiker> userManager)
    {
        _context = context;
    }

    [HttpGet("GetVoorstellingen")]
    public async Task<List<Tijdslot>> GetVoorstellingen(string? sort, string? titel, int? page, int? page_size, int? year, int? month, int? day)
    {
        page = page ?? 1;
        page_size = page_size ?? 5;
        IQueryable<Tijdslot> query = _context.Tijdsloten;
        if (sort == "des")
        {
            query = query.OrderByDescending(t => t.voorstelling.Titel);
        }
        else
        {
            query = query.OrderBy(t => t.voorstelling.Titel);
        }

        switch (sort)
        {
            case "titelop":
                query = query.OrderBy(t => t.voorstelling.Titel);
                break;
            case "titelaf":
                query = query.OrderByDescending(t => t.voorstelling.Titel);
                break;
            case "prijsop":
                query = query.OrderBy(t => t.voorstelling.Prijs);
                break;
            case "prijsaf":
                query = query.OrderByDescending(t => t.voorstelling.Prijs);
                break;
            default:
                query = query.OrderBy(t => t.voorstelling.Titel);
                break;
        }

        if (!string.IsNullOrEmpty(titel))
        {
            query = query.Where(t => t.voorstelling.Titel.ToLower().Contains(titel.ToLower()));
        }

        if (year != 0 && month != 0 && day != 0)
        {
            DateOnly datum = new DateOnly((int)year, (int)month, (int)day);
            query = query.Where(t => t.Datum == datum);
        }

        List<Tijdslot> tijdsloten = await query.Skip((int)((page - 1) * page_size)).Take((int)page_size).Where(t => t.voorstelling != null).Include(t => t.voorstelling).ToListAsync();
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

    [HttpPost]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult<Response>> PostVoorstelling([FromBody] Voorstelling voorstelling)
    {
        _context.Voorstellingen.Add(voorstelling);
        await _context.SaveChangesAsync();

        return new Response { code = 201, message = "Voorstelling is toegevoegd" };
    }

    [HttpPost]
    [Authorize(Roles = "Admin")]
    [Route("tijdslot")]
    public async Task<ActionResult<Response>> PostTijdslot([FromBody] TijdslotObj tijdslotObj)
    {
        Voorstelling voorstelling = await _context.Voorstellingen.FindAsync(tijdslotObj.VoorstellingID);
        Zaal zaal = await _context.Zalen.FindAsync(tijdslotObj.ZaalNummer);
        DateOnly datum = new DateOnly(tijdslotObj.Jaar, tijdslotObj.Maand, tijdslotObj.Dag);
        TimeOnly beginTijd = new TimeOnly(tijdslotObj.BeginUur, tijdslotObj.BeginMinuut);
        TimeOnly eindTijd = new TimeOnly(tijdslotObj.EindUur, tijdslotObj.EindMinuut);
        Tijdslot tijdslot = new Tijdslot { Datum = datum, BeginTijd = beginTijd, EindTijd = eindTijd, Zaal = zaal, voorstelling = voorstelling };

        if (!tijdslot.Vrij(_context))
        {
            return new Response() { code = 400, message = "Het tijdslot is niet vrij" };
        }
        if (!tijdslot.BinnenOpeningstijden())
        {
            return new Response() { code = 400, message = "Dit tijdslot valt buiten de openingstijden" };
        }

        _context.Tijdsloten.Add(tijdslot);
        await _context.SaveChangesAsync();

        return new Response { code = 201, message = "Tijdslot is toegevoegd" };
    }
}