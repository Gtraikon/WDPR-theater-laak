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
    public class DoneerController : ControllerBase
    {
        private readonly TheaterIdentityContext _context;
        private readonly UserManager<Gebruiker> _userManager;

        public DoneerController(TheaterIdentityContext context, UserManager<Gebruiker> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        [HttpPost]
        public async Task<IActionResult> Post()
        {
            return Redirect("https://theater-laak-wdpr.netlify.app/betalengelukt");
        }

    }
}
