using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class _3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "voorstellingID",
                table: "Kaart",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Kaart_voorstellingID",
                table: "Kaart",
                column: "voorstellingID");

            migrationBuilder.AddForeignKey(
                name: "FK_Kaart_Voorstelling_voorstellingID",
                table: "Kaart",
                column: "voorstellingID",
                principalTable: "Voorstelling",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Kaart_Voorstelling_voorstellingID",
                table: "Kaart");

            migrationBuilder.DropIndex(
                name: "IX_Kaart_voorstellingID",
                table: "Kaart");

            migrationBuilder.DropColumn(
                name: "voorstellingID",
                table: "Kaart");
        }
    }
}
