
using Serenity.Data;

namespace PatientManagement
{
    public interface IMultiTenantRow
    {
        Int32Field TenantIdField { get; }
    }
}
