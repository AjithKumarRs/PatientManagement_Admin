FROM microsoft/aspnetcore:2.0
ARG ASPNETCORE_ENVIRONMENT
WORKDIR /app
EXPOSE 80
COPY clario_admin_release /app
ENTRYPOINT ["dotnet", "PatientManagement.Web.dll"]
