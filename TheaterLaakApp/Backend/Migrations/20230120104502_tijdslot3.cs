using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class tijdslot3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Voorstellingen_Zalen_ZaalNummer",
                table: "Voorstellingen");

            migrationBuilder.DropIndex(
                name: "IX_Voorstellingen_ZaalNummer",
                table: "Voorstellingen");

            migrationBuilder.DropColumn(
                name: "ZaalNummer",
                table: "Voorstellingen");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ZaalNummer",
                table: "Voorstellingen",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Voorstellingen_ZaalNummer",
                table: "Voorstellingen",
                column: "ZaalNummer");

            migrationBuilder.AddForeignKey(
                name: "FK_Voorstellingen_Zalen_ZaalNummer",
                table: "Voorstellingen",
                column: "ZaalNummer",
                principalTable: "Zalen",
                principalColumn: "ZaalNummer");
        }
    }
}
