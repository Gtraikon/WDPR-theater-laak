using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class tijdslot2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Voorstellingen_Tijdsloten_tijdslotID",
                table: "Voorstellingen");

            migrationBuilder.DropForeignKey(
                name: "FK_Voorstellingen_Zalen_ZaalNummer",
                table: "Voorstellingen");

            migrationBuilder.AlterColumn<int>(
                name: "tijdslotID",
                table: "Voorstellingen",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<int>(
                name: "ZaalNummer",
                table: "Voorstellingen",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddForeignKey(
                name: "FK_Voorstellingen_Tijdsloten_tijdslotID",
                table: "Voorstellingen",
                column: "tijdslotID",
                principalTable: "Tijdsloten",
                principalColumn: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_Voorstellingen_Zalen_ZaalNummer",
                table: "Voorstellingen",
                column: "ZaalNummer",
                principalTable: "Zalen",
                principalColumn: "ZaalNummer");
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

            migrationBuilder.AlterColumn<int>(
                name: "tijdslotID",
                table: "Voorstellingen",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ZaalNummer",
                table: "Voorstellingen",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

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
    }
}
