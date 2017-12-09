using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PatientManagement.Administration.Entities;
using Serenity.Data;
using Serenity.Reporting;

namespace PatientManagement.Administration.TermsOfUse
{
    [Report("Administration.TermsOfUse")]
    [ReportDesign(MVC.Views.Common.Terms.TermsOfUse.Terms_TermsOfUse)]
    public class TermsOfUse : IReport, ICustomizeHtmlToPdf
    {
        public object GetData()
        {
            //TODO Add auditing when user open this kind of reports #204
            return null;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            // options.MarginsAll = "2cm";
        }
    }
}
