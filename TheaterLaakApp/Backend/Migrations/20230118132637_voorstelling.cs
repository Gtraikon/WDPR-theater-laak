using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class voorstelling : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
        }
    }
}
