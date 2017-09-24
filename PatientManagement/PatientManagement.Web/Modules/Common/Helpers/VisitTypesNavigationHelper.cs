using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using PatientManagement;
using PatientManagement.PatientManagement.Entities;
using Serenity;
using Serenity.Data;
using Serenity.Extensibility;
using Serenity.Navigation;


public class VisitTypesNavigationHelper : NavigationHelper
{
    public new static List<NavigationItem> GetNavigationItems(Func<string, string> resolveUrl = null,
        Func<NavigationItemAttribute, bool> filter = null)
    {
        var menuItems = GetNavigationItemAttributes(filter);
        return NavigationHelper.ConvertToNavigationItems(menuItems, resolveUrl);
    }

    private static ILookup<string, NavigationItemAttribute> GetNavigationItemAttributes(
        Func<NavigationItemAttribute, bool> filter)
    {
        var list = new List<NavigationItemAttribute>();

        foreach (var assembly in ExtensibilityHelper.SelfAssemblies)
        {
            foreach (NavigationItemAttribute attr in assembly.GetCustomAttributes<NavigationItemAttribute>())
            {
                if (filter == null || filter(attr))
                    list.Add(attr);
            }
        }

        foreach (var navItemType in ExtensibilityHelper.GetTypesWithInterface(typeof(INavigationItemSource)))
        {
            var navItem = (INavigationItemSource)Activator.CreateInstance(navItemType);
            foreach (var item in navItem.GetItems())
            {
                if (filter == null || filter(item))
                    list.Add(item);
            }
        }

        var user = (UserDefinition)Authorization.UserDefinition;

        var connection = SqlConnections.NewFor<VisitTypesRow>();
        var visitTypesFlds = VisitTypesRow.Fields;

        var visitTypes = connection.List<VisitTypesRow>(visitTypesFlds.TenantId == user.TenantId && visitTypesFlds.IsActive == 1);

        list.Add(new NavigationMenuAttribute(506, LocalText.Get("Db.PatientManagement.VisitTypes.EntityPlural"), "fa-stethoscope"));

        list.Add(new NavigationLinkAttribute(506,
            path: LocalText.Get("Db.PatientManagement.VisitTypes.EntityPlural") + "/" + LocalText.Get("LeftNavigation.AddNewVisitType"),
            url: "#",
            icon: "fa-plus-square open-new-visit-dialog",
            permission: "PatientManagement:VisitTypes:Modify"));
        foreach (var visitType in visitTypes)
        {
            list.Add(new NavigationLinkAttribute(506,
                path: LocalText.Get("Db.PatientManagement.VisitTypes.EntityPlural") + "/" + visitType.Name.Replace("/", "//"),
                url: "/PatientManagement/Visits?visittype=" + visitType.VisitTypeId,
                icon: "fa-circle-o fc-event-droppable " + visitType.BackgroundColor,
                permission: "PatientManagement:VisitTypes:Read"
            ));

        }

        return NavigationHelper.ByCategory(list);
    }
}

