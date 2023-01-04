using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class _4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Kaart_Voorstelling_voorstellingID",
                table: "Kaart");

            migrationBuilder.DropIndex(
                name: "IX_Kaart_voorstellingID",
                table: "Kaart");

            migrationBuilder.RenameColumn(
                name: "voorstellingID",
                table: "Kaart",
                newName: "VoorstellingID");

            migrationBuilder.AddColumn<int>(
                name: "GebruikerID",
                table: "Kaart",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GebruikerID",
                table: "Kaart");

            migrationBuilder.RenameColumn(
                name: "VoorstellingID",
                table: "Kaart",
                newName: "voorstellingID");

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
    }
}
