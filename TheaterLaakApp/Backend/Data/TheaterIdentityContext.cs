using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace week_6.Data;

public class PretparkIdentityContext : IdentityDbContext<Gebruiker>
{
    public PretparkIdentityContext(DbContextOptions<PretparkIdentityContext> options)
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

    public DbSet<Backend.Models.Gebruiker> Gebruiker { get; set; }
    public DbSet<Backend.Models.Bezoeker> Gast { get; set; }
}
