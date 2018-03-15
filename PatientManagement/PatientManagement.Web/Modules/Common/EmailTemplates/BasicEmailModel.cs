using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PatientManagement.Administration.Entities;
using Serenity;
using Serenity.Data;

namespace PatientManagement.Common.EmailTemplates
{
    public class BasicEmailModel<T> 
    {
        public string EmailSignature { get; set; }

        public string LogoUrl { get; set; }

        public string ExternalUrl { get; set; }

        public void SetTenantSetings(string externalUrl, T model)
        {

            var user = (UserDefinition)Authorization.UserDefinition;

            using (var connection = SqlConnections.NewFor<UserRow>())
            {
                //Get Email Signature
                if (connection.ById<TenantRow>(user.TenantId).OverrideUsersEmailSignature??false)
                    this.EmailSignature = connection.ById<TenantRow>(user.TenantId).TenantEmailSignature;
                else
                    this.EmailSignature = connection.ById<UserRow>(user.UserId).EmailSignature;
                
                //Get External Url
                var userWebsite = connection.ById<UserRow>(user.UserId).WebSite;
                var tenantWebSite = connection.ById<TenantRow>(user.TenantId).TenantWebSite;
                if (!string.IsNullOrWhiteSpace(userWebsite))
                    this.ExternalUrl = userWebsite;
                else if (!string.IsNullOrWhiteSpace(tenantWebSite))
                    this.ExternalUrl = tenantWebSite;
                else
                    this.ExternalUrl = "https://clario.site";

                //Get Logo url
                var tenantImage = connection.ById<TenantRow>(user.TenantId).TenantImage;
                if (!string.IsNullOrWhiteSpace(tenantImage))
                    this.LogoUrl = UriHelper.Combine(externalUrl, "/upload/" + tenantImage);
                else
                    this.LogoUrl = "http://my.clario.site/Content/images/clario/clario-logo-large.png";

            }
        }
    }
    

}
