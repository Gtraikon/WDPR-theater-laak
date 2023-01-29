namespace Backend.Models;
public class Bestelling
{
    public int ID { get; set; }

    public int Aantal {get; set;}

    public string Aanwezig {get; set;} = "nee"; 

    public Tijdslot Tijdslot { get; set; }

    public Gebruiker Gebruiker{get; set;}

}