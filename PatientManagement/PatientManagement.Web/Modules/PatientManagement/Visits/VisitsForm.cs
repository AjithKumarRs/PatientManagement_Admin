
namespace PatientManagement.PatientManagement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PatientManagement.Visits")]
    [BasedOnRow(typeof(Entities.VisitsRow))]
    public class VisitsForm
    {
        [Category("Required Fields")]

        public Int32 PatientId { get; set; }
        public Int32 VisitTypeId { get; set; }
        public Int32 AssignedUserId { get; set; }

        public Int32 CabinetId { get; set; }

        public bool FreeForReservation { get; set; }

        [DefaultValue("now")]
        public DateTime StartDate { get; set; }
        [DefaultValue("now")]
        public DateTime EndDate { get; set; }

        [HalfWidth]
        public Int16 RepeatTimes { get; set; }

        [HalfWidth]
        public Int16 RepeatPeriod { get; set; }

        [HalfWidth, Hidden]
        public string RepeatUntilEndDate { get; set; }
        [Category("Additional Information")]

        [HalfWidth]
        public Decimal Price { get; set; }

        [HalfWidth]
        public string VisitTypeCurrencyName { get; set; }


        public String Description { get; set; }
        public Int32? TenantId { get; set; }

    }
}