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
    public class VisitTypesNavigation : INavigationItemSource
    {
        public List<NavigationItemAttribute> GetItems()
        {
            var items = new List<NavigationItemAttribute>
            {
                new NavigationMenuAttribute(506, LocalText.Get("Db.PatientManagement.VisitTypes.EntityPlural"), "fa-stethoscope")
            };

            var visitsTypesRepo = new VisitTypesRepository();
            var visitTypes = visitsTypesRepo.List(SqlConnections.NewFor<VisitTypesRow>(), new ListRequest());
            foreach (var visitType in visitTypes.Entities)
            {
                items.Add(new NavigationLinkAttribute(506,
                    path: LocalText.Get("Db.PatientManagement.VisitTypes.EntityPlural") + "/" + visitType.Name.Replace("/", "//"),
                    url: "/PatientManagement/Visits?visittype=" + visitType.VisitTypeId,
                    icon: "fa-circle-o fc-event-droppable " + visitType.BackgroundColor,
                    permission: "PatientManagement:VisitTypes:Read"
                ));
            }
            return items;
        }
    }
}