using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;
using PatientManagement.Migrations;

namespace PatientManagement.Migrations.DefaultDB
{
    [Migration(20170608180200)]
    public class DefaultDB_20170608_180200_CreatedTableOfferLang : AutoReversingMigration
    {
        public override void Up()
        {

            IfDatabase(Utils.AllExceptOracle)
                .Create.Table("OfferLang")
                .WithColumn("ID").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("OfferID").AsInt32().NotNullable()
                .WithColumn("LanguageID").AsInt32().NotNullable()
                .WithColumn("Name").AsString(500).Nullable()
                .WithColumn("Description").AsString(500).Nullable();


            IfDatabase("Oracle")
                .Create.Table("OfferLang")
                .WithColumn("ID").AsInt32().PrimaryKey().NotNullable()
                .WithColumn("OfferID").AsInt32().NotNullable()
                .WithColumn("LanguageID").AsInt32().NotNullable()
                .WithColumn("Name").AsString(500).Nullable()
                .WithColumn("Description").AsString(500).Nullable();

            Utils.AddOracleIdentity(this, "OfferLang", "ID");
        }
    }
}
