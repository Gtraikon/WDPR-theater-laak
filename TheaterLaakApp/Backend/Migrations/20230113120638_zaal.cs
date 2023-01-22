using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class zaal : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DerdeRangStoelen",
                table: "Zalen",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Eersterangstoelen",
                table: "Zalen",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TweedeRangStoelen",
                table: "Zalen",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "ZaalImage",
                table: "Zalen",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ZaalOmschrijving",
                table: "Zalen",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "Voorstellingen",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Titel = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Voorstellingen", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Kaartjes",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Prijs = table.Column<double>(type: "REAL", nullable: false),
                    VoorstellingID = table.Column<int>(type: "INTEGER", nullable: false),
                    GebruikerId = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kaartjes", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Kaartjes_AspNetUsers_GebruikerId",
                        column: x => x.GebruikerId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Kaartjes_Voorstellingen_VoorstellingID",
                        column: x => x.VoorstellingID,
                        principalTable: "Voorstellingen",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Kaartjes_GebruikerId",
                table: "Kaartjes",
                column: "GebruikerId");

            migrationBuilder.CreateIndex(
                name: "IX_Kaartjes_VoorstellingID",
                table: "Kaartjes",
                column: "VoorstellingID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Kaartjes");

            migrationBuilder.DropTable(
                name: "Voorstellingen");

            migrationBuilder.DropColumn(
                name: "DerdeRangStoelen",
                table: "Zalen");

            migrationBuilder.DropColumn(
                name: "Eersterangstoelen",
                table: "Zalen");

            migrationBuilder.DropColumn(
                name: "TweedeRangStoelen",
                table: "Zalen");

            migrationBuilder.DropColumn(
                name: "ZaalImage",
                table: "Zalen");

            migrationBuilder.DropColumn(
                name: "ZaalOmschrijving",
                table: "Zalen");
        }
    }
}
