using Microsoft.AspNetCore.Identity;

namespace week_6.Models
{
    public class Gebruiker : IdentityUser
    {
        public string? Naam { get; set; }   
        public string? Email { get; set; }   
        public string? Password { get; init; }
    }
}