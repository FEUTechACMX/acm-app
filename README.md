# 🚀 FEU Tech ACM App

![FEU Tech ACM Background](/public/2023/media/img/dp_cover/cover.png)

Welcome to the **FEU Tech ACM** App repository!

This repository contains the FEU Tech ACM Organization's official cross-platform application source code.

The app is being developed to serve as the central platform for communication, collaboration, and promotion of every ACM member and officer in education, opportunities, and beyond.

## 💻 Tech Stack

- [Next.js](https://nextjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextUI](https://nextui.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [Vercel](https://vercel.com/)

## 🛠️ Development

### Pre-requisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Docker](https://www.docker.com/)
- [Doppler CLI](https://docs.doppler.com/docs/cli)

### Getting Started

0. You must have the pre-requisites installed.

   ```bash
    # Check if Node.js is installed
    node -v

    # Check if Yarn is installed
    yarn -v

    # Check if Git is installed
    git --version

    # Check if Docker is installed
    docker -v

    # Check if Doppler CLI is installed (Environment variables are injected at runtime)
    doppler -v
    /
   ```

1. Clone the repository and change directory.

   ```bash
    git clone https://github.com/FEUTechACM/acm-app.git acm-app
    # or
    git clone git@github.com:FEUTechACM/acm-app.git acm-app

    cd acm-app
   ```

2. Switch to the `develop` branch or target branch.

   ```bash
    git checkout develop
    # or
    git checkout <branch-name>
   ```

3. Branch out from `develop` if not on target branch.

   ```bash
    git checkout -b <branch-name>
   ```

4. Install the dependencies.

   ```bash
    yarn install
   ```

5. Run the development server.

   ```bash
    yarn devx
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project Standards

#### Workflow

![GitFlow Workflow](https://iamchuka.com/content/images/2018/05/gitflowimage.png)

For this project, we use the [GitFlow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

#### GitFlow Rules

1. Do not commit directly to `master` and `develop` branch.
2. Feature branch should be **MERGED** to `develop` branch.
3. Hotfix and release branch should be **MERGED** to `master` branch and `develop` branch.
4. Do not nest branch names e.g. `feature/parent/child`.

#### Git Guidelines

1. **NEVER** rebase the `master` and `develop` branch.
2. Make use of `git pull --rebase` instead of `git pull`.
3. Frequently rebase your feature branch against develop.
4. Always branch out from `develop` or `feature` branch.
5. Use only `--force-with-lease` if in need to force push.
6. Make use of `git commit --amend` if you need to edit your commit message.
7. Make use of `git rebase -i` if you need to modify your commit history.

#### Commit Rules

We adopt the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specifications aligned with [Semantic Versioning](https://semver.org/) with a few modifications.

#### Commit Message Format

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Note**: An (\*) asterisk before the commit description indicates that there is more information written in the commit message body.

#### Commit Message Example

1. **fix:** a bugfix
2. **feat:** a new feature
3. **refactor:** a code change that neither fixes a bug nor adds a feature
4. **chore:** changes to the build process or auxiliary tools and libraries such as documentation generation
5. **style:** changes that do not affect the meaning of the code (whitespace, formatting, missing semi-colons, etc)
6. **docs:** documentation only changes
7. **test:** adding missing tests or correcting existing tests
8. **perf:** a code change that improves performance
9. **ci:** changes to our CI configuration files and scripts
10. **build:** changes that affect the build tool or external dependencies (example scopes: gulp, broccoli, npm)
11. **revert:** revert to a commit
12. **BREAKING CHANGE:** introduces a breaking API change (correlating with [Semantic Versioning](https://semver.org/))

## 🔗 App Links

1. [Web](https://acmx.vercel.app/)
2. [Google Play Store](https://play.google.com/store/apps/details?id=app.vercel.acmx.twa)
3. Microsoft Store - Coming Soon
4. Apple App Store - Coming Soon
5. Samsung Galaxy Store - Coming Soon
6. Huawei AppGallery - Coming Soon
7. Amazon App Store - Coming Soon
8. Meta Oculus - Coming Soon

## 👥 Contributors

1. [Sir Abraham Magpantay](https://www.linkedin.com/in/aber-magpantay/) - Adviser
2. [Guennevere Rito](https://www.linkedin.com/in/guennevere-rito-990256255/) - Project Manager
3. [Alpha Romer Coma](https://www.linkedin.com/in/alpha-coma/) - Webmaster
4. Emily Tan Sanchez - Branding Officer
5. Francis Chuegan - Branding Officer

## 📄 License

Copyright FEU Tech ACM Student Chapter. All rights reserved.

Licensed under the [Apache-2.0](./LICENSE) license.
