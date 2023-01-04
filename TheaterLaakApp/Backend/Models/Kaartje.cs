namespace Backend.Models;
public class Kaartje
{
    public int ID { get; set; }

    public double Prijs { get; set; }

    public int VoorstellingID { get; set; }

    public int GebruikerID{get; set;}

}