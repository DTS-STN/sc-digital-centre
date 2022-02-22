# Click to view the test reports for DEV 👩‍🔬🧪 test

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/DTS-STN/sc-digital-centre/E2E%20Test?label=E2E)](https://dts-stn.github.io/sc-digital-centre/dev/coverage/e2e-report)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/DTS-STN/sc-digital-centre/Lint%20and%20Test?label=Lint%20and%20Unit)](https://dts-stn.github.io/sc-digital-centre/dev/coverage/lcov-report)

# Click to view the test reports for MAIN 🔬📊

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/DTS-STN/sc-digital-centre/E2E%20Test?color=blue&label=E2E)](https://dts-stn.github.io/sc-digital-centre/main/coverage/e2e-report)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/DTS-STN/sc-digital-centre/Lint%20and%20Test?color=blue&label=Lint%20and%20Unit)](https://dts-stn.github.io/sc-digital-centre/main/coverage/lcov-report)

## Description

Digital Centre description coming soon!!

### Technologies Used

This project uses [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) for the front-end and [Jest](https://jestjs.io/)/[Cypress](https://www.cypress.io/) for unit testing and end-to-end testing. In addition, [TeamCity](https://www.jetbrains.com/teamcity/) is used for our CI/CD pipelines and deployments. [Husky](https://typicode.github.io/husky/#/) is used in correlation with prettier to format the code on pre-commit, increasing code readability.

## How to Implement/Get Started

After cloning the repository, run the development server:

```bash
npm i
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

## Configuration

### TeamCity

Digital Centre is configured with TeamCity in a Configuration As Code approach. This allows developers to modify TeamCity configurations from the code, located in the `.teamcity/settings.kts`.

In order to set this up, in TeamCity, the VCS Root needs to be configured with the _SSH repository key_. Next, authentication needs to be configured from TeamCity to allow commits to the project. Inside of the VCS Root settings, under Authentication Settings, an _Uploaded Key_ must be added. It is important to point out that a simple username/password will not work as stated by a [GitHub Blog](https://github.blog/changelog/2021-08-12-git-password-authentication-is-shutting-down/) starting August 13th, 2021.

### Helm

For every Kubernetes cluster, a context.sh file needs to be defined. For example, one might be called context-dev.sh and the other context-prod.sh.

For more information, please visit the [DTS SRE deployment templates](https://github.com/DTS-STN/dts-sre-deployment-templates/tree/main/kubernetes-helm-template).

## PR Procedures/Definition of done

We need to have at least one person reviewing each PR before it can be merged. Also, each branch should be prefixed by the relevant Jira issue, if possible e.g. **DC-13**-comprehensive-readme.

Follow the [DC Branching Strategy](https://confluence.dts-stn.com/display/DD/DC+branching+strategy) when creating your PR

## Useful Links

[TeamCity Link](https://teamcity.dts-stn.com/)

[Next API routes](https://nextjs.org/docs/api-routes/introduction)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
