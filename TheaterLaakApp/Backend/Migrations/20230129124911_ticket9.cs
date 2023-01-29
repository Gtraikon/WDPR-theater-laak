using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class ticket9 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Kaartjes");

            migrationBuilder.CreateTable(
                name: "Bestellingen",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Aantal = table.Column<int>(type: "INTEGER", nullable: false),
                    Aanwezig = table.Column<string>(type: "TEXT", nullable: false),
                    TijdslotID = table.Column<int>(type: "INTEGER", nullable: false),
                    GebruikerId = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bestellingen", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Bestellingen_AspNetUsers_GebruikerId",
                        column: x => x.GebruikerId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Bestellingen_Tijdsloten_TijdslotID",
                        column: x => x.TijdslotID,
                        principalTable: "Tijdsloten",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Bestellingen_GebruikerId",
                table: "Bestellingen",
                column: "GebruikerId");

            migrationBuilder.CreateIndex(
                name: "IX_Bestellingen_TijdslotID",
                table: "Bestellingen",
                column: "TijdslotID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Bestellingen");

            migrationBuilder.CreateTable(
                name: "Kaartjes",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    GebruikerId = table.Column<string>(type: "TEXT", nullable: false),
                    TijdslotID = table.Column<int>(type: "INTEGER", nullable: false),
                    Aantal = table.Column<int>(type: "INTEGER", nullable: false),
                    Aanwezig = table.Column<string>(type: "TEXT", nullable: false)
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
                        name: "FK_Kaartjes_Tijdsloten_TijdslotID",
                        column: x => x.TijdslotID,
                        principalTable: "Tijdsloten",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Kaartjes_GebruikerId",
                table: "Kaartjes",
                column: "GebruikerId");

            migrationBuilder.CreateIndex(
                name: "IX_Kaartjes_TijdslotID",
                table: "Kaartjes",
                column: "TijdslotID");
        }
    }
}
