using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace PatientManagement.Reservation.Localization
{
    public static class ReservationLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(ReservationConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(ReservationLocalizationConfigurer).GetAssembly(),
                        "PatientManagement.Reservation.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
