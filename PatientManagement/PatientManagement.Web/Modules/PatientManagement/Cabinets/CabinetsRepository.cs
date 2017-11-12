

using System.Linq;
using PatientManagement.Administration.Entities;
using PatientManagement.PatientManagement.Entities;

namespace PatientManagement.PatientManagement.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.CabinetsRow;

    public class CabinetsRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
        }

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            protected override void OnBeforeExecuteQuery()
            {
                base.OnBeforeExecuteQuery();
                var user = ((UserDefinition)Authorization.UserDefinition);

                if (user.RestrictedToCabinets == 1)
                {
                    var reprFlds = CabinetRepresentativesRow.Fields;
                    var cabinetRepres = this.Connection.List<CabinetRepresentativesRow>(reprFlds.UserId == user.UserId).Select(s => s.CabinetId);
                    var flds = MyRow.Fields;

                    if (cabinetRepres.Any())
                        this.Query.Where(flds.TenantId == user.TenantId && flds.CabinetId.In(cabinetRepres));
                }
            }

            protected override void OnReturn()
            {
                base.OnReturn();

                foreach (var responseEntity in Response.Entities)
                {
                    if (responseEntity.Representatives != null && responseEntity.Representatives.Any())
                    {
                        var specialtiesFlds = UserSpecialtiesRow.Fields;
                        var userSpecialties =
                            Connection.List<UserSpecialtiesRow>(
                                specialtiesFlds.UserId.In(responseEntity.Representatives));

                        if (userSpecialties != null && userSpecialties.Any())
                        {
                            var specialtyFlds = MedicalSpecialtyRow.Fields;
                            var specialty =
                                Connection.List<MedicalSpecialtyRow>(
                                    specialtyFlds.SpecialtyId.In(userSpecialties.Select(s => s.SpecialtyId)));

                            responseEntity.UserSpecialties = specialty.Select(s => s.Name).ToList();
                        }


                    }
                } 
            }
        }
    }
}