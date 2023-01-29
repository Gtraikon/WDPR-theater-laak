using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Data;

public class TheaterIdentityContext : IdentityDbContext<Gebruiker>
{
    public TheaterIdentityContext(DbContextOptions<TheaterIdentityContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        //builder.Entity<Gebruiker>()
            //.HasMany(p => p.Attracties)
            //.WithMany(p => p.Gebruikers);
    }

    public DbSet<Gebruiker> Gebruikers { get; set; }
    public DbSet<Bezoeker> Bezoekers { get; set; }
    public DbSet<Reservering> Reserveringen { get; set; }
    public DbSet<Tijdslot> Tijdsloten { get; set; }
    public DbSet<Zaal> Zalen { get; set; }
    public DbSet<Bestelling> Bestellingen {get; set;}
    public DbSet<Voorstelling> Voorstellingen {get; set;}
}
