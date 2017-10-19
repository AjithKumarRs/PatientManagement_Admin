using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Serenity.Data;

namespace PatientManagement.Web.Modules.Administration.Offers
{
    public interface IOfferRow
    {
        Int16Field Enabled { get; }

        Int16Field IsPublic { get; }
    }
}
