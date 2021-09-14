#!/bin/bash
az account set -s MTS
export KEYVAULT_NAME=esdcdtsk8sdev-KV
export KEYVAULT_READ_USER=$(az keyvault secret show --vault-name $KEYVAULT_NAME --name k8s-keyvault-sp-id --query value -otsv)
export KEYVAULT_READ_PASSWORD=$(az keyvault secret show --vault-name $KEYVAULT_NAME --name k8s-keyvault-sp-pass --query value -otsv)
export SUBSCRIPTION_ID=$(az account show --subscription "MTS" --query 'id' -o tsv)
export TENANT_ID=$(az account show --subscription "MTS" --query 'homeTenantId' -o tsv)
export K8S_CLUSTER_NAME=ESdCDTSK8SDev-K8S
export K8S_RG_NAME=ESdCDTSK8SDev
export BASE_DOMAIN=dev.dts-stn.com
az aks get-credentials --name $K8S_CLUSTER_NAME --resource-group $K8S_RG_NAME
export APP_NAME=sc-digital-centre