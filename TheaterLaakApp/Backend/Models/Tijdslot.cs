using Backend.Data;

namespace Backend.Models;

public class Tijdslot{
    public int ID {get; set;}
    public DateOnly Datum {get; set;}
    public TimeOnly BeginTijd {get; set;}
    public TimeOnly EindTijd {get; set;}
    public Zaal Zaal {get; set;}

    public Boolean Vrij(TheaterIdentityContext c){
        return !(c.Tijdsloten.Where(r => (this.Datum == r.Datum) 
            && (r.Zaal.ZaalNummer == this.Zaal.ZaalNummer)
            && ((r.BeginTijd > this.BeginTijd && r.BeginTijd < this.EindTijd) 
            || (r.EindTijd > this.BeginTijd && r.EindTijd < this.EindTijd)
            || (r.BeginTijd == this.BeginTijd || r.EindTijd == this.EindTijd)
            )).Any());
    }

    public Boolean BinnenOpeningstijden(){
        TimeOnly openingstijd = new TimeOnly(12, 0);
        TimeOnly sluitingstijd = new TimeOnly(23, 0);
        Boolean beginGoed = (this.BeginTijd >= openingstijd && this.BeginTijd < sluitingstijd);
        Boolean eindGoed = (this.EindTijd > openingstijd && this.EindTijd <= sluitingstijd);
        return beginGoed && eindGoed;
    }
}