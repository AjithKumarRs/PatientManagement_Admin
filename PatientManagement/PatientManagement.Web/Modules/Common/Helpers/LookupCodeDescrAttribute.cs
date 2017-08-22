using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Serenity.ComponentModel;

namespace PatientManagement
{
    public class LookupCodeDescrAttribute : LKCodeDescrAttribute
    {
        public LookupCodeDescrAttribute(Type lookupType, String codeFieldName, String descrFieldName)
        {
            if (lookupType == null)
                throw new ArgumentNullException("lookupType");

            var attr = lookupType.GetCustomAttribute<LookupScriptAttribute>(false);
            if (attr == null)
            {
                throw new ArgumentException(String.Format(
                    "'{0}' type doesn't have a [LookupScript] attribute, so it can't " +
                    "be used with a LookupEditor!",
                    lookupType.FullName), "lookupType");
            }

            SetOption("lookupKey", attr.Key);

            base.CodeFieldName = codeFieldName;
            base.DescrFieldName = descrFieldName;
        }
    }
}
