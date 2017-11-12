using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;
using Serenity.ComponentModel;


namespace PatientManagement.PatientManagement.Forms
{
    [FormScript("PatientManagement.MedicalSpecialtyExcelImport")]
    public class MedicalSpecialtyExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}
