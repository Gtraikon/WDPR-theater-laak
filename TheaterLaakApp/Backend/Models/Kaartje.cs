namespace Backend.Models;
public class Kaartje
{
    public int ID { get; set; }

    public double Prijs { get; set; }

    public Voorstelling voorstelling { get; set; }



}