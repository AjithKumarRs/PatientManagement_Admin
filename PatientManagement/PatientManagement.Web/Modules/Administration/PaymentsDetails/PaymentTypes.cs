using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace PatientManagement.PatientManagement
{
    public enum PaymentTypes
    {
        [Description("Bank Transfer")]
        BankTransfer,

        //TODO: Restrict for now 
        //[Description("Credit Card")]
        //CreditCard
    }
}
