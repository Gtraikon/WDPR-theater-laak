using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class tijdslot6 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Voorstellingen_Tijdsloten_tijdslotID",
                table: "Voorstellingen");

            migrationBuilder.DropIndex(
                name: "IX_Voorstellingen_tijdslotID",
                table: "Voorstellingen");

            migrationBuilder.DropColumn(
                name: "tijdslotID",
                table: "Voorstellingen");

            migrationBuilder.AddColumn<int>(
                name: "VoorstellingID",
                table: "Tijdsloten",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tijdsloten_VoorstellingID",
                table: "Tijdsloten",
                column: "VoorstellingID");

            migrationBuilder.AddForeignKey(
                name: "FK_Tijdsloten_Voorstellingen_VoorstellingID",
                table: "Tijdsloten",
                column: "VoorstellingID",
                principalTable: "Voorstellingen",
                principalColumn: "ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tijdsloten_Voorstellingen_VoorstellingID",
                table: "Tijdsloten");

            migrationBuilder.DropIndex(
                name: "IX_Tijdsloten_VoorstellingID",
                table: "Tijdsloten");

            migrationBuilder.DropColumn(
                name: "VoorstellingID",
                table: "Tijdsloten");

            migrationBuilder.AddColumn<int>(
                name: "tijdslotID",
                table: "Voorstellingen",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Voorstellingen_tijdslotID",
                table: "Voorstellingen",
                column: "tijdslotID");

            migrationBuilder.AddForeignKey(
                name: "FK_Voorstellingen_Tijdsloten_tijdslotID",
                table: "Voorstellingen",
                column: "tijdslotID",
                principalTable: "Tijdsloten",
                principalColumn: "ID");
        }
    }
}
