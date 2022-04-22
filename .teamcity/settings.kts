import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.vcs.GitVcsRoot
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.dockerCommand
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.script
import jetbrains.buildServer.configs.kotlin.v2019_2.triggers.vcs
import jetbrains.buildServer.configs.kotlin.v2019_2.triggers.schedule
import jetbrains.buildServer.configs.kotlin.v2019_2.triggers.ScheduleTrigger
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

version = "2021.2"

project {
    vcsRoot(HttpsGithubComDtsStnScDigitalCentreDev)
    vcsRoot(HttpsGithubComDtsStnScDigitalCentreDynamic)
    buildType(Build_Release)
    buildType(Build_Dev)
    buildType(Build_Perf)
    buildType(Build_Dynamic)
    buildType(CleanUpWeekly)
}

object HttpsGithubComDtsStnScDigitalCentreDev : GitVcsRoot({
    name = "https://github.com/DTS-STN/sc-digital-centre/tree/_dev"
    url = "git@github.com:DTS-STN/sc-digital-centre.git"
    branch = "refs/heads/dev"
    branchSpec = "+:refs/heads/dev"
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
    description = "Deploys Dev to release envrionment when the button is pushed"
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
        param("env.TARGET", "dev")
        param("env.BRANCH", "release")
    }
    paused = true
    vcs {
        root(HttpsGithubComDtsStnScDigitalCentreDev)
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
            branchFilter = "+:*"
        }
    }
})

object Build_Dev: BuildType({
    name = "Build_Dev"
    description = "Always deploy the latest code from dev branch."
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
        param("env.TARGET", "dev")
        param("env.BRANCH", "dev")
    }
    vcs {
        root(HttpsGithubComDtsStnScDigitalCentreDev)
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
            branchFilter = "+:*"
        }
    }
})

object Build_Perf: BuildType({
    name = "Build_Perf"
    description = "Deploys dev branch for performance environment"
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
        param("env.TARGET", "dev")
        param("env.BRANCH", "perf")
    }
    paused = true
    vcs {
        root(HttpsGithubComDtsStnScDigitalCentreDev)
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
            branchFilter = "+:*"
        }
    }
})




object Build_Dynamic: BuildType({
    name = "Build_Dynamic"
    description = "Dynamic branching; builds and deploys every branch"
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
        param("env.TARGET", "dev")
        param("env.BRANCH", "dyna-%teamcity.build.branch%")
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
            branchFilter = """
                    +:*
                    -:dev
                    -:main
                    -:gh-pages
             """.trimIndent()
        }
    }
})

object CleanUpWeekly: BuildType({
    name = "CleanUpWeekly"
    description = "Deletes deployments every saturday"
    params {
        param("teamcity.vcsTrigger.runBuildInNewEmptyBranch", "true")
        param("env.PROJECT", "sc-digital-centre")
        param("env.BASE_DOMAIN","bdm-dev.dts-stn.com")
        param("env.SUBSCRIPTION", "%vault:dts-sre/data/azure!/decd-dev-subscription-id%")
        param("env.K8S_CLUSTER_NAME", "ESdCDPSBDMK8SDev-K8S")
        param("env.RG_DEV", "ESdCDPSBDMK8SDev")
        param("env.TARGET", "dev")
        param("env.BRANCH", "%teamcity.build.branch%")
    }
    vcs {
        root(HttpsGithubComDtsStnScDigitalCentreDynamic)
    }
    steps {
        script {
            name = "Login and Delete Deployment"
            scriptContent = """
                az login --service-principal -u %TEAMCITY_USER% -p %TEAMCITY_PASS% --tenant %env.TENANT-ID%
                az account set -s %env.SUBSCRIPTION%
                echo %env.PROJECT%-branch
                kubectl get namespace | awk '/^%env.PROJECT%-dyna/{system("kubectl delete namespace " $1)}'
            """.trimIndent()
        }
    }
    triggers {
        schedule {
            schedulingPolicy = weekly {
                dayOfWeek = ScheduleTrigger.DAY.Saturday
                hour = 15
                minute = 15
                timezone = "America/New_York"
            }  
            branchFilter = "+:dev"
            triggerBuild = always()
            withPendingChangesOnly = false
            triggerBuildOnAllCompatibleAgents = true
        }
    }
})
