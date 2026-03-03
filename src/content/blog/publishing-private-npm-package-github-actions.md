---
title: "Publishing a Private npm Package Using GitHub Actions (Complete Guide)"
date: "2026-03-03"
category: "Engineering"
excerpt: "Learn how to create, publish, and automate a private npm package to GitHub Packages using GitHub Actions."
---

In this guide, I’ll show how to:
- Create a private npm package
- Publish it to GitHub Packages
- Automate publishing using GitHub Actions
- Install it securely in another project

## 🧱 Step 1 — Create a Private Repository
1. Go to GitHub
2. Click **New Repository**
3. Enter a name (example: `your-package-name`)
4. Select **Private**
5. Click **Create Repository**

## 💻 Step 2 — Initialize Package Locally
Inside your project folder:
```bash
npm init -y
```

## 📄 Step 3 — Create index.js
```javascript
const sayHello = function(name){
  console.log("hello " + name + "!")
}

module.exports = {
  sayHello
}
```

## 🏷 Step 4 — Update package.json
GitHub Packages requires scoped package names. Update your `package.json`:

```json
{
  "name": "@your-github-username/your-package-name",
  "version": "1.0.0",
  "main": "index.js",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

> [!WARNING]
> Replace `your-github-username` and `your-package-name`.  
> Example: `"name": "@yunus-karatt/your-package-name"`

## 📤 Step 5 — Push to GitHub
```bash
git init
git remote add origin https://github.com/your-username/your-package-name.git
git add .
git commit -m "initial commit"
git push -u origin master
```

## ⚙️ Step 6 — Add GitHub Action (Using Actions Tab)
1. Go to your repository
2. Click **Actions**
3. Click **Set up a workflow yourself**

![GitHub Actions setup](/images/blog/github-actions-setup.png)

4. Replace content with:

```yaml
name: Publish Package

on:
  push:
    branches:
      - master

jobs:
  publish:
    runs-on: ubuntu-latest

    permissions:
      contents: read
      packages: write

    steps:
      - uses: actions/checkout@v3

      - uses: actions/setup-node@v3
        with:
          node-version: 18
          registry-url: https://npm.pkg.github.com
          scope: '@your-github-username'

      - run: npm install

      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
5. Click **Commit changes**.

Now every push to master will publish automatically.

## � Step 7 — Create a Personal Access Token (For Installing Package)
To install a private GitHub package, you must authenticate.

**Create Token:**
1. Go to GitHub
2. Click your profile photo → **Settings**
3. Go to **Developer settings**
4. Click **Personal access tokens** → **Tokens (classic)**
5. Click **Generate new token (classic)**
6. Select scopes:
   - ✅ `read:packages`
7. Generate token and **copy it** (you won’t see it again).

## 📦 Step 8 — Install the Private Package
Inside the project where you want to use it:

### Create .npmrc
```text
@your-github-username:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
```


> Replace `your-github-username` and `YOUR_PERSONAL_ACCESS_TOKEN`.

### Install
Using npm:
```bash
npm install @your-github-username/your-package-name
```
Using pnpm:
```bash
pnpm add @your-github-username/your-package-name
```
Using yarn:
```bash
yarn add @your-github-username/your-package-name
```

## 🧪 Step 9 — Use the Package
```javascript
const { sayHello } = require("@your-github-username/your-package-name");

sayHello("Yunus");
```

**Output:**
```text
hello Yunus!
```

## 🎯 What You Achieved
You built:
- A private scoped npm package
- Automated CI/CD publishing
- Secure installation using GitHub authentication
- Internal reusable library setup

This is exactly how companies manage shared UI components and internal tools.
