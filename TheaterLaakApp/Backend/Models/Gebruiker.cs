using Microsoft.AspNetCore.Identity;

namespace Backend.Models;

    public class Gebruiker : IdentityUser
    {
        public string? Password { get; init; }
    }