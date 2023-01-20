using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class tijdslot : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "day",
                table: "Voorstellingen");

            migrationBuilder.DropColumn(
                name: "time",
                table: "Voorstellingen");

            migrationBuilder.AddColumn<int>(
                name: "ZaalNummer",
                table: "Voorstellingen",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "tijdslotID",
                table: "Voorstellingen",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Voorstellingen_tijdslotID",
                table: "Voorstellingen",
                column: "tijdslotID");

            migrationBuilder.CreateIndex(
                name: "IX_Voorstellingen_ZaalNummer",
                table: "Voorstellingen",
                column: "ZaalNummer");

            migrationBuilder.AddForeignKey(
                name: "FK_Voorstellingen_Tijdsloten_tijdslotID",
                table: "Voorstellingen",
                column: "tijdslotID",
                principalTable: "Tijdsloten",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Voorstellingen_Zalen_ZaalNummer",
                table: "Voorstellingen",
                column: "ZaalNummer",
                principalTable: "Zalen",
                principalColumn: "ZaalNummer",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Voorstellingen_Tijdsloten_tijdslotID",
                table: "Voorstellingen");

            migrationBuilder.DropForeignKey(
                name: "FK_Voorstellingen_Zalen_ZaalNummer",
                table: "Voorstellingen");

            migrationBuilder.DropIndex(
                name: "IX_Voorstellingen_tijdslotID",
                table: "Voorstellingen");

            migrationBuilder.DropIndex(
                name: "IX_Voorstellingen_ZaalNummer",
                table: "Voorstellingen");

            migrationBuilder.DropColumn(
                name: "ZaalNummer",
                table: "Voorstellingen");

            migrationBuilder.DropColumn(
                name: "tijdslotID",
                table: "Voorstellingen");

            migrationBuilder.AddColumn<string>(
                name: "day",
                table: "Voorstellingen",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "time",
                table: "Voorstellingen",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }
    }
}
