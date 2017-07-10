
namespace PatientManagement.PatientManagement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PatientManagement.LifeStyles")]
    [BasedOnRow(typeof(Entities.LifeStylesRow))]
    public class LifeStylesForm
    {
        public Int32? PatientId { get; set; }
        
        public String Regime { get; set; }
        public String DailyMeals { get; set; }
        // TODO Add when you figure out how to add permissions here
        //public Int32 InsertUserId { get; set; }
        //public DateTime InsertDate { get; set; }
    }
}