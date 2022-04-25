
import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.vcs.GitVcsRoot
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.dockerCommand
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.script
import jetbrains.buildServer.configs.kotlin.v2019_2.triggers.vcs
/*
The settings script is an entry point for defining a TeamCity
project hierarchy. The script should contain a single call to the
project() function with a Project instance or an init function as
an argument.
VcsRoots, BuildTypes, Templates, and subprojects can be
registered inside the project using the vcsRoot(), buildType(),
template(), and subProject() methods respectively.
To debug settings scripts in command-line, run the
    mvnDebug org.jetbrains.teamcity:teamcity-configs-maven-plugin:generate
command and attach your debugger to the port 8000.
To debug in IntelliJ Idea, open the 'Maven Projects' tool window (View
-> Tool Windows -> Maven Projects), find the generate task node
(Plugins -> teamcity-configs -> teamcity-configs:generate), the
'Debug' option is available in the context menu for the task.
*/

version = "2020.2"

project {
    vcsRoot(HttpsGithubComDtsStnScDigitalCentreRelease)
    vcsRoot(HttpsGithubComDtsStnScDigitalCentreDashboard)
    vcsRoot(HttpsGithubComDtsStnScDigitalCentreDynamic)
    buildType(Build_Release)
    buildType(Build_Dashboard)
    buildType(Build_Dynamic)
}

//VCS ROOTS
object HttpsGithubComDtsStnScDigitalCentreRelease : GitVcsRoot({
    name = "https://github.com/DTS-STN/sc-digital-centre/tree/_release"
    url = "git@github.com:DTS-STN/sc-digital-centre.git"
    branch = "refs/heads/dev"
    branchSpec = "+:refs/heads/dev"
    authMethod = uploadedKey {
        userName = "git"
        uploadedKey = "dtsrobot"
    }
})

object HttpsGithubComDtsStnScDigitalCentreDashboard : GitVcsRoot({
    name = "https://github.com/DTS-STN/sc-digital-centre/tree/_dashboard"
    url = "git@github.com:DTS-STN/sc-digital-centre.git"
    branch = "refs/heads/dashboard"
    branchSpec = "+:refs/heads/dashboard"
    authMethod = uploadedKey {
        userName = "git"
        uploadedKey = "dtsrobot"
    }
})

object HttpsGithubComDtsStnScDigitalCentreDynamic : GitVcsRoot({
    name = "https://github.com/DTS-STN/sc-digital-centre/tree/_dynamic"
    url = "git@github.com:DTS-STN/sc-digital-centre.git"
    branch = "refs/heads/dev"
    branchSpec = "+:refs/heads/*"
    authMethod = uploadedKey {
        userName = "git"
        uploadedKey = "dtsrobot"
    }
})

//BUILD CONFIGURATIONS
//Note: BRANCH variable is used to create dynamic urls, using
//the branch name most of the time.  in some circumstances
//like the release build below, we do not want to use the branch
//name, so we inject a hardcoded value to create a url that works
//such as: https://sc-digital-center-release/blahblahblah.com
object Build_Release: BuildType({
    name = "Build_Release"
    description = "Deploys Pull Request to release envrionment when releases are created."
    params {
        param("teamcity.vcsTrigger.runBuildInNewEmptyBranch", "true")
        param("env.PROJECT", "sc-digital-centre")
        param("env.BASE_DOMAIN","bdm-dev.dts-stn.com")
        param("env.SUBSCRIPTION", "%vault:dts-sre/azure!/decd-dev-subscription-id%")
        param("env.K8S_CLUSTER_NAME", "ESdCDPSBDMK8SDev-K8S")
        param("env.RG_DEV", "ESdCDPSBDMK8SDev")
        param("env.NEXT_PUBLIC_FEEDBACK_API", "https://alphasite.dts-stn.com/api/feedback")
        param("env.NEXT_CONTENT_API", "%vault:dts-secrets-dev/data/digitalCentre!/NEXT_CONTENT_API%")
        param("env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL", "%vault:dts-secrets-dev/data/digitalCentre!/NEXT_PUBLIC_ADOBE_ANALYTICS_URL%")
        param("env.OCP_APIM_SUBSCRIPTION_KEY", "%vault:dts-secrets-dev/digitalCentre!/OCP_APIM_SUBSCRIPTION_KEY%")
        param("env.CPP_ACTIVE_BENEFIT_URL", "%vault:dts-secrets-dev/digitalCentre!/CPP_ACTIVE_BENEFIT_URL%")
        param("env.EI_ACTIVE_BENEFIT_URL", "%vault:dts-secrets-dev/digitalCentre!/EI_ACTIVE_BENEFIT_URL%")
        param("env.APP_URL", "https://sc-digital-centre-dashboard.bdm-dev.dts-stn.com")
        param("env.TARGET", "release")
        param("env.BRANCH", "release")
    }
    vcs {
        root(HttpsGithubComDtsStnScDigitalCentreRelease)
    }
   
    steps {
        dockerCommand {
            name = "Build & Tag Docker Image"
            commandType = build {
                source = file {
                    path = "Dockerfile"
                }
                namesAndTags = "%env.ACR_DOMAIN%/%env.PROJECT%:%env.DOCKER_TAG%"
                commandArgs = "--pull --build-arg NEXT_BUILD_DATE=%system.build.start.date% --build-arg NEXT_PUBLIC_FEEDBACK_API=%env.NEXT_PUBLIC_FEEDBACK_API% --build-arg NEXT_CONTENT_API=%env.NEXT_CONTENT_API% --build-arg NEXT_PUBLIC_ADOBE_ANALYTICS_URL=%env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL% --build-arg OCP_APIM_SUBSCRIPTION_KEY=%env.OCP_APIM_SUBSCRIPTION_KEY% --build-arg CPP_ACTIVE_BENEFIT_URL=%env.CPP_ACTIVE_BENEFIT_URL% --build-arg EI_ACTIVE_BENEFIT_URL=%env.EI_ACTIVE_BENEFIT_URL% --build-arg EI_ACTIVE_BENEFIT_URL=%env.APP_URL%"
            }
        }
        script {
            name = "Login to Azure and ACR"
            scriptContent = """
                az login --service-principal -u %TEAMCITY_USER% -p %TEAMCITY_PASS% --tenant %env.TENANT-ID%
                az account set -s %env.SUBSCRIPTION%
                az acr login -n MTSContainers
            """.trimIndent()
        }
        dockerCommand {
            name = "Push Image to ACR"
            commandType = push {
                namesAndTags = "%env.ACR_DOMAIN%/%env.PROJECT%:%env.DOCKER_TAG%"
            }
        }
        script {
            name = "Deploy w/ Helmfile"
            scriptContent = """
                cd ./helmfile
                az account set -s %env.SUBSCRIPTION%
                az aks get-credentials --admin --resource-group %env.RG_DEV% --name %env.K8S_CLUSTER_NAME%
                helmfile -e %env.TARGET% apply
            """.trimIndent()
        }
    }
    triggers {
        vcs {
            branchFilter = "+:*"
        }
    }
})


object Build_Dashboard: BuildType({
    name = "Build_Dashboard"
    description = "Deploys Pull Request to release envrionment when Dashboard are created."
    params {
        param("teamcity.vcsTrigger.runBuildInNewEmptyBranch", "true")
        param("env.PROJECT", "sc-digital-centre")
        param("env.BASE_DOMAIN","bdm-dev.dts-stn.com")
        param("env.SUBSCRIPTION", "%vault:dts-sre/azure!/decd-dev-subscription-id%")
        param("env.K8S_CLUSTER_NAME", "ESdCDPSBDMK8SDev-K8S")
        param("env.RG_DEV", "ESdCDPSBDMK8SDev")
        param("env.NEXT_PUBLIC_FEEDBACK_API", "https://alphasite.dts-stn.com/api/feedback")
        param("env.NEXT_CONTENT_API", "%vault:dts-secrets-dev/data/digitalCentre!/NEXT_CONTENT_API%")
        param("env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL", "%vault:dts-secrets-dev/data/digitalCentre!/NEXT_PUBLIC_ADOBE_ANALYTICS_URL%")
        param("env.OCP_APIM_SUBSCRIPTION_KEY", "%vault:dts-secrets-dev/digitalCentre!/OCP_APIM_SUBSCRIPTION_KEY%")
        param("env.CPP_ACTIVE_BENEFIT_URL", "%vault:dts-secrets-dev/digitalCentre!/CPP_ACTIVE_BENEFIT_URL%")
        param("env.EI_ACTIVE_BENEFIT_URL", "%vault:dts-secrets-dev/digitalCentre!/EI_ACTIVE_BENEFIT_URL%")
        param("env.APP_URL", "https://sc-digital-centre-dashboard.bdm-dev.dts-stn.com")
        param("env.TARGET", "dashboard")
        param("env.BRANCH", "dashboard")
    }
    vcs {
        root(HttpsGithubComDtsStnScDigitalCentreDashboard)
    }

    steps {
        dockerCommand {
            name = "Build & Tag Docker Image"
            commandType = build {
                source = file {
                    path = "Dockerfile"
                }
                namesAndTags = "%env.ACR_DOMAIN%/%env.PROJECT%:%env.DOCKER_TAG%"
                commandArgs = "--pull --build-arg NEXT_BUILD_DATE=%system.build.start.date% --build-arg NEXT_PUBLIC_FEEDBACK_API=%env.NEXT_PUBLIC_FEEDBACK_API% --build-arg NEXT_CONTENT_API=%env.NEXT_CONTENT_API% --build-arg NEXT_PUBLIC_ADOBE_ANALYTICS_URL=%env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL% --build-arg OCP_APIM_SUBSCRIPTION_KEY=%env.OCP_APIM_SUBSCRIPTION_KEY% --build-arg CPP_ACTIVE_BENEFIT_URL=%env.CPP_ACTIVE_BENEFIT_URL% --build-arg EI_ACTIVE_BENEFIT_URL=%env.EI_ACTIVE_BENEFIT_URL% --build-arg EI_ACTIVE_BENEFIT_URL=%env.APP_URL%"
            }
        }
        script {
            name = "Login to Azure and ACR"
            scriptContent = """
                az login --service-principal -u %TEAMCITY_USER% -p %TEAMCITY_PASS% --tenant %env.TENANT-ID%
                az account set -s %env.SUBSCRIPTION%
                az acr login -n MTSContainers
            """.trimIndent()
        }
        dockerCommand {
            name = "Push Image to ACR"
            commandType = push {
                namesAndTags = "%env.ACR_DOMAIN%/%env.PROJECT%:%env.DOCKER_TAG%"
            }
        }
        script {
            name = "Deploy w/ Helmfile"
            scriptContent = """
                cd ./helmfile
                az account set -s %env.SUBSCRIPTION%
                az aks get-credentials --admin --resource-group %env.RG_DEV% --name %env.K8S_CLUSTER_NAME%
                helmfile -e %env.TARGET% apply
            """.trimIndent()
        }
    }
    triggers {
        vcs {
            branchFilter = "+:*"
        }
    }
})


object Build_Dynamic: BuildType({
    name = "Build_Dynamic"
    description = "Deploys branches with pond in the name"
    params {
        param("teamcity.vcsTrigger.runBuildInNewEmptyBranch", "true")
        param("env.PROJECT", "sc-digital-centre")
        param("env.BASE_DOMAIN","bdm-dev.dts-stn.com")
        param("env.SUBSCRIPTION", "%vault:dts-sre/azure!/decd-dev-subscription-id%")
        param("env.K8S_CLUSTER_NAME", "ESdCDPSBDMK8SDev-K8S")
        param("env.RG_DEV", "ESdCDPSBDMK8SDev")
        param("env.NEXT_PUBLIC_FEEDBACK_API", "https://alphasite.dts-stn.com/api/feedback")
        param("env.NEXT_CONTENT_API", "%vault:dts-secrets-dev/data/digitalCentre!/NEXT_CONTENT_API%")
        param("env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL", "%vault:dts-secrets-dev/data/digitalCentre!/NEXT_PUBLIC_ADOBE_ANALYTICS_URL%")
        param("env.OCP_APIM_SUBSCRIPTION_KEY", "%vault:dts-secrets-dev/digitalCentre!/OCP_APIM_SUBSCRIPTION_KEY%")
        param("env.CPP_ACTIVE_BENEFIT_URL", "%vault:dts-secrets-dev/digitalCentre!/CPP_ACTIVE_BENEFIT_URL%")
        param("env.EI_ACTIVE_BENEFIT_URL", "%vault:dts-secrets-dev/digitalCentre!/EI_ACTIVE_BENEFIT_URL%")
        param("env.APP_URL", "https://sc-digital-centre-dashboard.bdm-dev.dts-stn.com")
        param("env.TARGET", "dev")
        param("env.BRANCH", "%teamcity.build.branch%")
    }
    vcs {
        root(HttpsGithubComDtsStnScDigitalCentreDynamic)
    }
   
    steps {
        dockerCommand {
            name = "Build & Tag Docker Image"
            commandType = build {
                source = file {
                    path = "Dockerfile"
                }
                namesAndTags = "%env.ACR_DOMAIN%/%env.PROJECT%:%env.DOCKER_TAG%"
                commandArgs = "--pull --build-arg NEXT_BUILD_DATE=%system.build.start.date% --build-arg NEXT_PUBLIC_FEEDBACK_API=%env.NEXT_PUBLIC_FEEDBACK_API% --build-arg NEXT_CONTENT_API=%env.NEXT_CONTENT_API% --build-arg NEXT_PUBLIC_ADOBE_ANALYTICS_URL=%env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL% --build-arg OCP_APIM_SUBSCRIPTION_KEY=%env.OCP_APIM_SUBSCRIPTION_KEY% --build-arg CPP_ACTIVE_BENEFIT_URL=%env.CPP_ACTIVE_BENEFIT_URL% --build-arg EI_ACTIVE_BENEFIT_URL=%env.EI_ACTIVE_BENEFIT_URL% --build-arg EI_ACTIVE_BENEFIT_URL=%env.APP_URL%"
            }
        }
        script {
            name = "Login to Azure and ACR"
            scriptContent = """
                az login --service-principal -u %TEAMCITY_USER% -p %TEAMCITY_PASS% --tenant %env.TENANT-ID%
                az account set -s %env.SUBSCRIPTION%
                az acr login -n MTSContainers
            """.trimIndent()
        }
        dockerCommand {
            name = "Push Image to ACR"
            commandType = push {
                namesAndTags = "%env.ACR_DOMAIN%/%env.PROJECT%:%env.DOCKER_TAG%"
            }
        }
        script {
            name = "Deploy w/ Helmfile"
            scriptContent = """
                cd ./helmfile
                az account set -s %env.SUBSCRIPTION%
                az aks get-credentials --admin --resource-group %env.RG_DEV% --name %env.K8S_CLUSTER_NAME%
                helmfile -e %env.TARGET% apply
            """.trimIndent()
        }
    }
    triggers {
        vcs {
            branchFilter = "+:*"
        }
    }
})

