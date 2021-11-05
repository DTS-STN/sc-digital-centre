
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
    vcsRoot(HttpsGithubComDtsStnScDigitalCentre)
    vcsRoot(HttpsGithubComDtsStnScDigitalCentrePR)
    vcsRoot(HttpsGithubComDtsStnScDigitalCentreRelease)
    buildType(Build)
    buildType(Build_Integration)
    buildType(Build_Release)
}

//VCS ROOTS
object HttpsGithubComDtsStnScDigitalCentre : GitVcsRoot({
    name = "https://github.com/DTS-STN/sc-digital-centre"
    url = "git@github.com:DTS-STN/sc-digital-centre.git"
    branch = "refs/heads/dev"
    branchSpec = "+:refs/heads/dev"
    authMethod = uploadedKey {
        userName = "git"
        uploadedKey = "dtsrobot"
    }
})

object HttpsGithubComDtsStnScDigitalCentrePR : GitVcsRoot({
    name = "https://github.com/DTS-STN/sc-digital-centre/tree/_pr"
    url = "git@github.com:DTS-STN/sc-digital-centre.git"
    branch = "refs/heads/dev"
    branchSpec = "+:*"
    authMethod = uploadedKey {
        userName = "git"
        uploadedKey = "dtsrobot"
    }
})

object HttpsGithubComDtsStnScDigitalCentreRelease : GitVcsRoot({
    name = "https://github.com/DTS-STN/sc-digital-centre/tree/_release"
    url = "git@github.com:DTS-STN/sc-digital-centre.git"
    branch = "refs/heads/dev"
    branchSpec = "+:*"
    authMethod = uploadedKey {
        userName = "git"
        uploadedKey = "dtsrobot"
    }
})


//BUILD CONFIGURATIONS
object Build: BuildType({
    name = "Build"
    description = "Continuous integration"
    params {
        param("env.PROJECT", "sc-digital-centre")
        param("env.BASE_DOMAIN","bdm-dev.dts-stn.com")
        param("env.SUBSCRIPTION", "%vault:dts-sre/azure!/decd-dev-subscription-id%")
        param("env.K8S_CLUSTER_NAME", "ESdCDPSBDMK8SDev-K8S")
        param("env.RG_DEV", "ESdCDPSBDMK8SDev")
        param("env.NEXT_PUBLIC_FEEDBACK_API", "https://alphasite.dts-stn.com/api/feedback")
        param("env.NEXT_CONTENT_API", "%vault:dts-secrets-dev/digitalCentre!/NEXT_CONTENT_API%")
        param("env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL", "%vault:dts-secrets-dev/digitalCentre!/NEXT_PUBLIC_ADOBE_ANALYTICS_URL%")
    }
    vcs {
        root(HttpsGithubComDtsStnScDigitalCentre)
    }
   
    steps {
        dockerCommand {
            name = "Build & Tag Docker Image"
            commandType = build {
                source = file {
                    path = "Dockerfile"
                }
                namesAndTags = "%env.ACR_DOMAIN%/%env.PROJECT%:%env.DOCKER_TAG%"
                commandArgs = "--pull --build-arg NEXT_BUILD_DATE=%system.build.start.date% --build-arg NEXT_PUBLIC_FEEDBACK_API=%env.NEXT_PUBLIC_FEEDBACK_API% --build-arg NEXT_CONTENT_API=%env.NEXT_CONTENT_API% --build-arg NEXT_PUBLIC_ADOBE_ANALYTICS_URL=%env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL%"
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
            branchFilter = "+:<default>"
        }
    }
})

object Build_Integration: BuildType({
    name = "Build_Integration"
    description = "Pushing PRs to integration environment"
    params {
        param("env.PROJECT", "sc-digital-centre")
        param("env.TARGET", "int")
        param("env.BASE_DOMAIN","bdm-dev.dts-stn.com")
        param("env.SUBSCRIPTION", "%vault:dts-sre/azure!/decd-dev-subscription-id%")
        param("env.K8S_CLUSTER_NAME", "ESdCDPSBDMK8SDev-K8S")
        param("env.RG_DEV", "ESdCDPSBDMK8SDev")
        param("env.NEXT_PUBLIC_FEEDBACK_API", "https://alphasite.dts-stn.com/api/feedback")
        param("env.NEXT_CONTENT_API", "%vault:dts-secrets-dev/digitalCentre!/NEXT_CONTENT_API%")
        param("env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL", "%vault:dts-secrets-dev/digitalCentre!/NEXT_PUBLIC_ADOBE_ANALYTICS_URL%")
    }
    vcs {
        root(HttpsGithubComDtsStnScDigitalCentrePR)
    }
   
    steps {
        dockerCommand {
            name = "Build & Tag Docker Image"
            commandType = build {
                source = file {
                    path = "Dockerfile"
                }
                namesAndTags = "%env.ACR_DOMAIN%/%env.PROJECT%:%env.DOCKER_TAG%"
                commandArgs = "--pull --build-arg NEXT_BUILD_DATE=%system.build.start.date% --build-arg NEXT_PUBLIC_FEEDBACK_API=%env.NEXT_PUBLIC_FEEDBACK_API% --build-arg NEXT_CONTENT_API=%env.NEXT_CONTENT_API% --build-arg NEXT_PUBLIC_ADOBE_ANALYTICS_URL=%env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL%"
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
            branchFilter = "+:refs/pull/*/head"
        }
    }
})


object Build_Release: BuildType({
    name = "Build_Release"
    description = "Deploys Pull Request to release envrionment when releases are created."
    params {
        param("env.PROJECT", "sc-digital-centre")
        param("env.TARGET", "release")
        param("env.BASE_DOMAIN","bdm-dev.dts-stn.com")
        param("env.SUBSCRIPTION", "%vault:dts-sre/azure!/decd-dev-subscription-id%")
        param("env.K8S_CLUSTER_NAME", "ESdCDPSBDMK8SDev-K8S")
        param("env.RG_DEV", "ESdCDPSBDMK8SDev")
        param("env.NEXT_PUBLIC_FEEDBACK_API", "https://alphasite.dts-stn.com/api/feedback")
        param("env.NEXT_CONTENT_API", "%vault:dts-secrets-dev/digitalCentre!/NEXT_CONTENT_API%")
        param("env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL", "%vault:dts-secrets-dev/digitalCentre!/NEXT_PUBLIC_ADOBE_ANALYTICS_URL%")
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
                commandArgs = "--pull --build-arg NEXT_BUILD_DATE=%system.build.start.date% --build-arg NEXT_PUBLIC_FEEDBACK_API=%env.NEXT_PUBLIC_FEEDBACK_API% --build-arg NEXT_CONTENT_API=%env.NEXT_CONTENT_API% --build-arg NEXT_PUBLIC_ADOBE_ANALYTICS_URL=%env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL%"
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
            branchFilter = "+:refs/heads/release/*"
        }
    }
})