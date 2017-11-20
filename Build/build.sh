#!/bin/bash
set -ev

dotnet build PatientManagement.Public/PatientManagement.Public.csproj
dotnet build PatientManagement/PatientManagement.Web/PatientManagement.Web.csproj 

mkdir -p publish_clario_admin_release
dotnet publish PatientManagement/PatientManagement.Web/*.csproj -c Release -f netcoreapp2.0 -o ../../publish_clario_admin_release

docker build -t clario_admin -f PatientManagement/PatientManagement.Web/Dockerfile .