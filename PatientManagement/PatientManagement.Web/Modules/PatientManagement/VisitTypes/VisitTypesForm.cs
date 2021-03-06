﻿
namespace PatientManagement.PatientManagement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PatientManagement.VisitTypes")]
    [BasedOnRow(typeof(Entities.VisitTypesRow))]
    public class VisitTypesForm
    {
        public String Name { get; set; }

        public String BorderColor { get; set; }

        public String BackgroundColor { get; set; }

        public Boolean ShowInMenu { get; set; }

        [HalfWidth]
        public Decimal Price { get; set; }

        [HalfWidth]
        public string CurrencyId { get; set; }

        public Int32? TenantId { get; set; }

        public Boolean IsActive { get; set; }

    }
}