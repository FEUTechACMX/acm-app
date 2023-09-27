# 🚀 FEU Tech ACM App

![FEU Tech ACM Background](/public/media/img/dp_cover/cover.png)

Welcome to the **FEU Tech ACM** App repository!

This repository contains the FEU Tech ACM Organization's official cross-platform application source code.

The app is being developed to serve as the central platform for communication, collaboration, and promotion of every ACM member and officer in education, opportunities, and beyond.

## 💻 Tech Stack

- [Next.js](https://nextjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [Redis](https://redis.io/)
- [Vercel](https://vercel.com/)

## 🛠️ Development

### Pre-requisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

### Getting Started

1. Clone the repository.

   ```bash
    git clone git@github.com:FEUTechACM/acm-app.git .
   ```

2. Switch to/create the appropriate branch.

   ```bash
    git checkout <branch-name>
    # or
    git checkout -b <branch-name>
   ```

3. Install the dependencies.

   ```bash
    yarn install
   ```

4. Run the development server.

   ```bash
    yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Workflow

For this project, we use the [GitFlow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

### Project Standards

We adopt the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specifications aligned with [Semantic Versioning](https://semver.org/) with a few modifications.

#### Commit Message Format

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Note**: An (\*) asterisk before the commit description indicates that there is more information written in the commit message description.

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

#### Commit Rules

1. **NEVER** rebase the `master` branch.
2. Only rebase on your own branch.
3. Make use of `git pull --rebase` instead of `git pull`.
4. Use only `--force-with-lease` if in need to force push.
5. Make use of `git commit --amend` if you need to edit your commit message.
6. Make use of `git rebase -i` if you need to modify your commit history.

## 🔗 App Links

1. Web - [FEU Tech ACM-X](https://acmx.vercel.app/)
2. Google Play Store - Coming Soon
3. Microsoft Store - Coming Soon
4. Apple App Store - Coming Soon

## 👥 Contributors

1. [Sir Abraham Magpantay](https://www.linkedin.com/in/aber-magpantay/) - Adviser
2. [Guennevere Rito](https://www.linkedin.com/in/guennevere-rito-990256255/) - Project Manager
3. [Alpha Romer Coma](https://www.linkedin.com/in/alpha-coma/) - Webmaster
4. Emily Tan Sanchez - UI/UX Designer

**Important**: Only authorized officers of the FEU Tech ACM Organization are allowed to view and contribute to this project repository.

**Note**: For adding to the list of contributors, please compile the list of contributors and commit accordingly to develop branch.

For more information, please contact the project manager or the webmaster.

## 📄 License

Copyright (&#169;) FEU Tech ACM Student Chapter. All rights reserved.

Licensed under the [Apache-2.0](./LICENSE) license.
