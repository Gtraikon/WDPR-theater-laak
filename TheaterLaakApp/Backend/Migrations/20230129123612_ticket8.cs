using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class ticket8 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Prijs",
                table: "Kaartjes");

            migrationBuilder.AddColumn<double>(
                name: "Prijs",
                table: "Voorstellingen",
                type: "REAL",
                nullable: false,
                defaultValue: 0.0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Prijs",
                table: "Voorstellingen");

            migrationBuilder.AddColumn<double>(
                name: "Prijs",
                table: "Kaartjes",
                type: "REAL",
                nullable: false,
                defaultValue: 0.0);
        }
    }
}
