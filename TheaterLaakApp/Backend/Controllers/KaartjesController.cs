
namespace Backend.Controllers;

[EnableCors("CorsPolicy")]   
[Route("api/[controller]")]
[ApiController]

public class KaartjesController : ControllerBase
{
    private readonly TheaterIdentityContext _context;
    public KaartjesController(TheaterIdentityContext context)
    {
        _context = context;
    }

    [Authorize]
    [HttpPost]
        [Route("Kopen")]
        public async Task<ActionResult> Kopen([FromBody] Bezoeker bezoeker, [FromBody] Kaartje kaartje){
            
        }

}