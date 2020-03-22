# React Sidebar Starter

Built on top of this Microsoft repository
<https://github.com/microsoft/TypeScript-React-Redux-Starter>

This repository 
* is a single page application with React and Redux using TypeScript
* uses Bootstrap framework and Sass as preprocessor
* uses webpack as module bundler
* creates a sidebar for navigation with breadcrumbs in the header

# Install python

node-sass uses python, so please install python using

```shell
npm --add-python-to-path='true' --debug install --global windows-build-tools
```

# Running application locally

```shell
npm install
```
NOTE: Without performing Install python step, npm install would fail

```shell
npm run build:dev
```

```shell
npm run start
```
NOTE: Will start the application in localhost:3001 using webpack dev server
