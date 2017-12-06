#!/bin/bash
set -ev

#dotnet build PatientManagement.Public/PatientManagement.Public.csproj
#dotnet build PatientManagement/PatientManagement.Web/PatientManagement.Web.csproj 

# Clean out existing contents
rm -rf PatientManagement_Admin/**/* || exit 0
mkdir -p publish_clario_admin_release
#dotnet publish PatientManagement/PatientManagement.Web/*.csproj -c Develop -f netcoreapp2.0 -o ../../clario_admin_develop
dotnet publish PatientManagement/PatientManagement.Web/*.csproj -c Release -f netcoreapp2.0 -o ../../clario_admin
