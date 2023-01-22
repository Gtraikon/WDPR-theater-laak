using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Reservering
    {
        public int ID {get; set;}
        public Tijdslot Tijdslot {get; set;}
        public Gebruiker Gebruiker {get; set;}
    }
}