FROM microsoft/aspnetcore:2.0
ARG ASPNETCORE_ENVIRONMENT
COPY clario_admin /app
WORKDIR /app
EXPOSE 80
ENTRYPOINT ["dotnet", "PatientManagement.Web.dll"]
