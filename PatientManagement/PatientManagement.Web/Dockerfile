FROM microsoft/aspnetcore:2.0
ARG source
WORKDIR /app
EXPOSE 80
COPY publish_clario_admin_release /app
ENTRYPOINT ["dotnet", "PatientManagement.Web.dll"]
