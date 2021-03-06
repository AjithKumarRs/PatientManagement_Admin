﻿namespace PatientManagement
{
    using Serenity.ComponentModel;
    using System;
    using System.Collections.Generic;

    /// <summary>
    /// This data will be available from script code using a dynamic script.
    /// Add properties you need from script code and set them in UserEndpoint.GetUserData.
    /// </summary>
    [ScriptInclude]
    public class ScriptUserDefinition
    {
        public Int32 UserId { get; set; }
        public String Username { get; set; }
        public String DisplayName { get; set; }
        public Boolean IsAdmin { get; set; }
        public short RestrictedToCabinets { get; set; }
        public int TenantCurrencyId { get; set; }

        public Dictionary<string, bool> Permissions { get; set; }
        public Int32 TenantId { get; set; }
        public List<string> RolesList { get; set; }
        public DateTime PaidPeriod { get; set; }
    }
}