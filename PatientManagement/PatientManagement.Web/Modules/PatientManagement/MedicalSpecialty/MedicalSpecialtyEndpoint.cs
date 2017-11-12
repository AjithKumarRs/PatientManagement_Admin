
namespace PatientManagement.PatientManagement.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Data;
    
    using Serenity.Reporting;
    using Serenity.Web;
    using OfficeOpenXml;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.MedicalSpecialtyRepository;
    using MyRow = Entities.MedicalSpecialtyRow;
    using System.IO;
    using System;

    [Route("Services/PatientManagement/MedicalSpecialty/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class MedicalSpecialtyController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public ExcelImportResponse ExcelImport(IUnitOfWork uow, ExcelImportRequest request)
        {
            request.CheckNotNull();
            Check.NotNullOrWhiteSpace(request.FileName, "filename");

            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ValidationError("filename");

            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
                ep.Load(fs);

            var response = new ExcelImportResponse();
            response.ErrorList = new List<string>();

            var worksheet = ep.Workbook.Worksheets[1];
            for (var row = 2; row <= worksheet.Dimension.End.Row; row++)
            {
                try
                {
                    var name = Convert.ToString(worksheet.Cells[row, 2].Value ?? "");
                    if(string.IsNullOrWhiteSpace(name))
                        continue;
                    

                    var flds = MyRow.Fields;
                    var specialty = uow.Connection.TryFirst<MyRow>(flds.Name == name);
                    if (specialty == null)
                        specialty = new MyRow() { };
                    else
                        specialty.TrackWithChecks = false;

                    if (specialty.SpecialtyId == null)
                    {
                        specialty.Name = name;
                        specialty.InsertDate = DateTime.Now;
                        specialty.InsertUserId = Int32.Parse(Authorization.UserId);
                        specialty.IsActive = 1;
                        new MyRepository().Create(uow, new SaveRequest<MyRow>
                        {
                            Entity = specialty
                        });
                        response.Inserted = response.Inserted + 1;

                    }

                    //else
                    //{
                    //    new MyRepository().Update(uow, new SaveRequest<MyRow>
                    //    {
                    //        Entity = rowReaded,
                    //        EntityId = rowReaded.RowId.Value
                    //    });

                    //    response.Updated = response.Updated + 1;
                    //}
                }
                catch (Exception ex)
                {
                    response.ErrorList.Add("Exception on Row " + row + ": " + ex.Message);
                }
            }

            return response;
        }

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.MedicalSpecialtyColumns));
            var bytes = new ReportRepository().Render(report);
            var reportName = "rows_";
            return ExcelContentResult.Create(bytes, reportName + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");


        }
        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
    }
}
