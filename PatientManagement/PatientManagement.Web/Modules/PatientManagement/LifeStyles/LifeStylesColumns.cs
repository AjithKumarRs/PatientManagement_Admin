
namespace PatientManagement.PatientManagement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PatientManagement.LifeStyles")]
    [BasedOnRow(typeof(Entities.LifeStylesRow))]
    public class LifeStylesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 LifeStyleId { get; set; }

        [Width(250)]
        [EditLink]
        public String Regime { get; set; }
        [EditLink]
        [Width(250)]
        public String DailyMeals { get; set; }

        [Width(250)]
        public String RemarksForFoodTake { get; set; }
        [Width(250)]
        public String BadHabits { get; set; }
        [Width(250)]
        public String NotEating { get; set; } 
        // public String FavoriteFood { get; set; }

        [Width(80)]
        public String TenantName { get; set; }

        [Width(80)]
        public String InsertUserName { get; set; }
        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [Width(120)]
        public DateTime InsertDate { get; set; }
        [Width(80)]
        public String UpdateUserName { get; set; }
        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [Width(120)]
        public DateTime UpdateDate { get; set; }
    }
}