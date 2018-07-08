using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;
using PatientManagement.Migrations;

namespace PatientManagement.Migrations.DefaultDB
{
    [Migration(2017072211570)]
    public class DefaultDB_20170722_115700_CreatedTableEmails : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId64("SentEmails", "SentEmailId", x => x
                .WithColumn("FromEmail").AsString(200).NotNullable()
                .WithColumn("FromName").AsString(200).NotNullable()
                .WithColumn("Subject").AsString(200).NotNullable()
                .WithColumn("Body").AsString(Int32.MaxValue).NotNullable()
                .WithColumn("ToEmail").AsString(200).NotNullable()
                .WithColumn("ToName").AsString(200).NotNullable()

                .WithColumn("TenantId").AsInt32().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime()
                .Nullable().WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
            );

        }
    }
}
