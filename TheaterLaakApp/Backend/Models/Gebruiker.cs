using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Backend.Models;

    public class Gebruiker : IdentityUser
    {
        [NotMapped]
        public string Password { get; init; }
        [NotMapped]
        public int aantalGedoneerd { get; set; } = 0;
    }