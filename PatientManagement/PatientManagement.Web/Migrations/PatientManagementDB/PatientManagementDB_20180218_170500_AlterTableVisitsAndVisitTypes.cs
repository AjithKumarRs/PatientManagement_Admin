using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PatientManagement.Migrations.PatientManagementDB
{
    [Migration(20180218170500)]
    public class PatientManagementDB_20180218_170500_AlterTableVisitsAndVisitTypes : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Visits")
                .AddColumn("FreeForReservation").AsInt16().Nullable();

            Alter.Table("VisitTypes")
                .AddColumn("Price").AsDecimal(8, 4).Nullable()
                .AddColumn("ShowInMenu").AsInt16().Nullable()
                .AddColumn("CurrencyId").AsInt32().NotNullable().WithDefaultValue(1)
                .ForeignKey("FK_VisitTypesCurrencies_CurrencyId", "Currencies", "Id");
        }
    }
}
