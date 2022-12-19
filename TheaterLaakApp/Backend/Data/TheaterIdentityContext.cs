using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using week_6.Models;

namespace week_6.Data;

public class PretparkIdentityContext : IdentityDbContext<Gebruiker>
{
    public PretparkIdentityContext(DbContextOptions<PretparkIdentityContext> options)
        : base(options)
        //jhv
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        //builder.Entity<Gebruiker>()
            //.HasMany(p => p.Attracties)
            //.WithMany(p => p.Gebruikers);
    }

    public DbSet<week_6.Models.Gebruiker> Gebruiker { get; set; }
    public DbSet<week_6.Models.Gast> Gast { get; set; }
    public DbSet<week_6.Models.Medewerker> Medewerker { get; set; }
    public DbSet<week_6.Models.Attractie> Attractie { get; set; }
}
