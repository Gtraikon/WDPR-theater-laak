using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Backend.Data;
using Backend.Models;
using Backend.ModelsObj;
using Microsoft.AspNetCore.Cors;
using System.Net.Http;
using Newtonsoft.Json.Linq;

namespace Backend.Controllers
{
    [EnableCors("CorsPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly TheaterIdentityContext _context;
        private readonly UserManager<Gebruiker> _userManager;
        private readonly SignInManager<Gebruiker> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public AccountController(UserManager<Gebruiker> userManager, SignInManager<Gebruiker> signInManager, RoleManager<IdentityRole> roleManager, TheaterIdentityContext context)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _context = context;
        }

        [HttpPost]
        [Route("registreer")]
        public async Task<ActionResult> Registreer([FromBody] Gebruiker gebruiker)
        {
            var resultaat = await _userManager.CreateAsync(gebruiker, gebruiker.Password);
            return !resultaat.Succeeded ? new BadRequestObjectResult(resultaat) : StatusCode(201);
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        [Route("registreer/medewerker")]
        public async Task<ActionResult> RegistreerMedewerker([FromBody] Gebruiker gebruiker)
        {
            await _roleManager.CreateAsync(new IdentityRole { Name = "Medewerker" });
            var resultaat = await _userManager.CreateAsync(gebruiker, gebruiker.Password);
            await _userManager.AddToRoleAsync(gebruiker, "Medewerker");
            return !resultaat.Succeeded ? new BadRequestObjectResult(resultaat) : StatusCode(201);
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        [Route("registreer/admin")]
        public async Task<ActionResult> RegistreerAdmin([FromBody] Gebruiker gebruiker)
        {
            await _roleManager.CreateAsync(new IdentityRole{Name = "Admin"}); 
            var resultaat = await _userManager.CreateAsync(gebruiker, gebruiker.Password);
            await _userManager.AddToRoleAsync(gebruiker, "Admin");
            return !resultaat.Succeeded ? new BadRequestObjectResult(resultaat) : StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] GebruikerObj gebruikerObj)
        {


            var _user = await _userManager.FindByNameAsync(gebruikerObj.UserName);
            if (_user != null){
                bool validCaptcha = await CaptchaIsValid(gebruikerObj.Captcha);
                // if(!validCaptcha){
                //     return Unauthorized(new { success = false, error = "De captcha is ongeldig" });
                // }
                if (await _userManager.CheckPasswordAsync(_user, gebruikerObj.Password))
                {
                    var secret = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("awef98awef978haweof8g7aw789efhh789awef8h9awh89efh89awe98f89uawef9j8aw89hefawef"));

                    var signingCredentials = new SigningCredentials(secret, SecurityAlgorithms.HmacSha256);
                    var claims = new List<Claim> { new Claim(ClaimTypes.Name, _user.UserName),
                    new Claim(ClaimTypes.NameIdentifier, _user.Id)
                     };
                    var roles = await _userManager.GetRolesAsync(_user);
                    foreach (var role in roles)
                        claims.Add(new Claim(ClaimTypes.Role, role));
                    var tokenOptions = new JwtSecurityToken
                    (
                        issuer: "https://localhost:7047",
                        audience: "https://localhost:7047",
                        claims: claims,
                        expires: DateTime.Now.AddMinutes(60),
                        signingCredentials: signingCredentials
                    );
                    return Ok(new { success = true, token = new JwtSecurityTokenHandler().WriteToken(tokenOptions) });
                }
            }

            return Unauthorized(new { success = false, error = "U heeft een verkeerde gebruikersnaam of wachtwoord ingevoerd" });
        }

        public async Task<Boolean> CaptchaIsValid(string captcha)
        {
            string key = "6LeGtTAkAAAAANCAywupUd5IZ3bpK4Pgxedv2RkP";
            using var client = new HttpClient();
            var response = await client.GetAsync($"https://www.google.com/recaptcha/api/siteverify?secret={key}&response={captcha}");
            if (!response.IsSuccessStatusCode)
            {
                return false;
            }

            var json = JObject.Parse(await response.Content.ReadAsStringAsync());
            if (!json["success"].Value<bool>())
            {
                return false;
            }
            return true;

        }

        [Authorize(Roles = "Admin, Medewerker")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Gebruiker>>> GetGebruiker()
        {
            return await _context.Gebruikers.ToListAsync();
        }

        [Authorize(Roles = "Admin, Medewerker")]
        [HttpGet("{username}")]
        public async Task<ActionResult<Gebruiker>> GetGebruiker(string username)
        {
            var gebruiker = await _context.Gebruikers.SingleOrDefaultAsync(g => g.UserName == username);

            if (gebruiker == null)
            {
                return NotFound();
            }

            return gebruiker;
        }

        [Authorize(Roles = "Admin, Medewerker")]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGebruiker(string id, Gebruiker gebruiker)
        {
            if (id != gebruiker.Id)
            {
                return BadRequest();
            }

            _context.Entry(gebruiker).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GebruikerExists(id))
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
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGebruiker(string id)
        {
            var gebruiker = await _context.Gebruikers.FindAsync(id);
            if (gebruiker == null)
            {
                return NotFound();
            }

            _context.Gebruikers.Remove(gebruiker);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GebruikerExists(string id)
        {
            return _context.Gebruikers.Any(e => e.Id == id);
        }
    }
}

