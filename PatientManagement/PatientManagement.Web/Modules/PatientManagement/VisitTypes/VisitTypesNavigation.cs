using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PatientManagement.PatientManagement.Entities;
using PatientManagement.PatientManagement.Repositories;
using Serenity;
using Serenity.Data;
using Serenity.Navigation;
using Serenity.Services;

namespace PatientManagement.Navigation
{
    //public class VisitTypesNavigation : INavigationItemSource
    //{
    //    public List<NavigationItemAttribute> GetItems()
    //    {
    //        var user = (UserDefinition)Authorization.UserDefinition;

    //        var items = new List<NavigationItemAttribute>
    //        {
    //            new NavigationMenuAttribute(506, LocalText.Get("Db.PatientManagement.VisitTypes.EntityPlural"), "fa-stethoscope")
    //        };

    //        var connection = SqlConnections.NewFor<VisitTypesRow>();
    //        var visitTypesFlds = VisitTypesRow.Fields;
    //        //TODO: IsActive Delete Row should be checked here! #119
    //        var visitTypes = connection.List<VisitTypesRow>(visitTypesFlds.TenantId == user.TenantId);

    //        foreach (var visitType in visitTypes)
    //        {
    //            items.Add(new NavigationLinkAttribute(506,
    //                path: LocalText.Get("Db.PatientManagement.VisitTypes.EntityPlural") + "/" + visitType.Name.Replace("/", "//"),
    //                url: "/PatientManagement/Visits?visittype=" + visitType.VisitTypeId,
    //                icon: "fa-circle-o fc-event-droppable " + visitType.BackgroundColor,
    //                permission: "PatientManagement:VisitTypes:Read"
    //            ));
    //        }
    //        return items;
    //    }
    //}
}