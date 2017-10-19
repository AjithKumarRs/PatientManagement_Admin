
namespace PatientManagement.PatientManagement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PatientManagement.Activity")]
    [BasedOnRow(typeof(Entities.ActivityRow))]
    public class ActivityForm
    {
        [Category("Additional Information")]

        public Int32? PatientId { get; set; }
        public String MovementAndTraining { get; set; }
        public String Profession { get; set; }


    }
}