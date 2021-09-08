#!/bin/bash
export KEYVAULT_READ_USER=$(az keyvault secret show --vault-name dtssecrets --name dts-dev-keyvault-read-user --query value -otsv)
export KEYVAULT_READ_PASSWORD=$(az keyvault secret show --vault-name dtssecrets --name dts-dev-keyvault-read-password --query value -otsv)
export SUBSCRIPTION_ID=$(az account show --subscription "MTS" --query 'id' -o tsv)
export TENANT_ID=$(az account show --subscription "MTS" --query 'homeTenantId' -o tsv)
export KEYVAULT_NAME=dtssecrets
export K8S_CLUSTER_NAME=EsDCDTSDevRG-K8S
export K8S_RG_NAME=EsDCDTSDevRG
export BASE_DOMAIN=dev.dts-stn.com
export APP_NAME=single-tier-application