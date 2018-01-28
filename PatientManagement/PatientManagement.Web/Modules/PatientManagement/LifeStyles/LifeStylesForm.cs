
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
        [Category("Additional Information")]

        public Int32? PatientId { get; set; }
        
        public String Regime { get; set; }
        public String DailyMeals { get; set; }
        public String RemarksForFoodTake { get; set; }
        public String BadHabits { get; set; }
        public String NotEating { get; set; }
       // public String FavoriteFood { get; set; }


    }
}