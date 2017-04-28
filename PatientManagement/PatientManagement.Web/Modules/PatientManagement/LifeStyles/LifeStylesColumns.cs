
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
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PatientId { get; set; }

        [EditLink]
        public String Job { get; set; }
        public String Movement { get; set; }
        public String Training { get; set; }
        public String BadHabits { get; set; }
        
        // TODO Add when you figure out how to add permissions here
        //public Int32 InsertUserId { get; set; }
        
        //public DateTime InsertDate { get; set; }
    }
}