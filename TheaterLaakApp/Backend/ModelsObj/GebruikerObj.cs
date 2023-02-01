using System.ComponentModel.DataAnnotations;

namespace Backend.ModelsObj
{
    public class GebruikerObj
    {
    [Required(ErrorMessage = "Gebruikersnaam is nodig")]
    public string? UserName { get; init; }

    [Required(ErrorMessage = "Wachtwoord is nodig")]
    public string? Password { get; init; }public string? Captcha { get; init; }

    }
}