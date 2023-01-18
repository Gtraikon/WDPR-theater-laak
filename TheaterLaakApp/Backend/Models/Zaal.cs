using System.ComponentModel.DataAnnotations;

namespace Backend.Models;

public class Zaal{
    [Key]
    public int ZaalNummer {get; set;}
    public int Capaciteit {get; set;}
    public int Eersterangstoelen{get;set;}
    public int TweedeRangStoelen{get;set;}
    public int DerdeRangStoelen{get;set;}
    public string ZaalImage{get;set;}
    public string ZaalOmschrijving{get;set;}

    
}