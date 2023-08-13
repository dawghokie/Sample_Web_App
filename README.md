# Overview
VueJS TS web app that consumes data from a REST API and displays the output in 
a [Naive](https://www.naiveui.com/en-US/dark/components/data-table) Table

# Specifics
- This app consumes data from this [Sample Server Repo](https://github.com/dawghokie/Sample_Server_DotNet) 
- The Table is feature rich and setup to quickly add filtering & seraching
- The Table has pagination implemented and can handle large datasets

# Moving Forward
- Use [Pinia](https://pinia.vuejs.org/) for state management because it's modular & intuitive
- Design modular components for re-useability 
- Add Loading Icon & Modals for Error Messages

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
