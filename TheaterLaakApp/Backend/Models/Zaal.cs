using System.ComponentModel.DataAnnotations;

namespace Backend.Models;

public class Zaal{
    [Key]
    public int ZaalNummer {get; set;}
    public int Capaciteit {get; set;}
}