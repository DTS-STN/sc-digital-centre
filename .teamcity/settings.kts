package _Self.buildTypes

import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.dockerCommand
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.script
import jetbrains.buildServer.configs.kotlin.v2019_2.triggers.vcs

object Build : BuildType({
    name = "Build"
    description = "Continuous integration"
    paused = true

    allowExternalStatus = true

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
                commandArgs = "--pull --build-arg BUILD_DATE=%system.build.start.date% --build-arg TC_BUILD=%build.number% --build-arg CONTENT_API=https://www.canada.ca/api/assets/decd-endc/content-fragments/ --build-arg NEXT_PUBLIC_FEEDBACK_API=https://alphasite.dts-stn.com/api/feedback"
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
                az aks get-credentials --admin --resource-group %env.RG_DEV% --name %env.AKS_DEV%
                helmfile -e ${'$'}TARGET apply
            """.trimIndent()
        }
    }

    triggers {
        vcs {
            branchFilter = "+:<default>"
        }
    }
})
