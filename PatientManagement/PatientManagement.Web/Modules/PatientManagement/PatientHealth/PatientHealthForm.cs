
namespace PatientManagement.PatientManagement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PatientManagement.PatientHealth")]
    [BasedOnRow(typeof(Entities.PatientHealthRow))]
    public class PatientHealthForm
    {
        public Int32? PatientId { get; set; }
        public String DailyMeals { get; set; }
        public String Diseases { get; set; }
        public String MedicinesIntake { get; set; }

        // TODO Add when you figure out how to add permissions here
        //public Int32 InsertUserId { get; set; }
        //public DateTime InsertDate { get; set; }
    }
}