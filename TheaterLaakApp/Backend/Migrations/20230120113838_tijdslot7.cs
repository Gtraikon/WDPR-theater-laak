using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class tijdslot7 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tijdsloten_Voorstellingen_VoorstellingID",
                table: "Tijdsloten");

            migrationBuilder.RenameColumn(
                name: "VoorstellingID",
                table: "Tijdsloten",
                newName: "voorstellingID");

            migrationBuilder.RenameIndex(
                name: "IX_Tijdsloten_VoorstellingID",
                table: "Tijdsloten",
                newName: "IX_Tijdsloten_voorstellingID");

            migrationBuilder.AddForeignKey(
                name: "FK_Tijdsloten_Voorstellingen_voorstellingID",
                table: "Tijdsloten",
                column: "voorstellingID",
                principalTable: "Voorstellingen",
                principalColumn: "ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tijdsloten_Voorstellingen_voorstellingID",
                table: "Tijdsloten");

            migrationBuilder.RenameColumn(
                name: "voorstellingID",
                table: "Tijdsloten",
                newName: "VoorstellingID");

            migrationBuilder.RenameIndex(
                name: "IX_Tijdsloten_voorstellingID",
                table: "Tijdsloten",
                newName: "IX_Tijdsloten_VoorstellingID");

            migrationBuilder.AddForeignKey(
                name: "FK_Tijdsloten_Voorstellingen_VoorstellingID",
                table: "Tijdsloten",
                column: "VoorstellingID",
                principalTable: "Voorstellingen",
                principalColumn: "ID");
        }
    }
}
