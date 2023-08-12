# Overview
VueJS web app that consumes data from a REST API and displays the output in 
a [Naive](https://www.naiveui.com/en-US/dark/docs/introduction) Table

# Specifics
- This app consumes data from this [Sample Server Repo](https://github.com/dawghokie/Sample_Server) 
- The Table is feature rich and setup to quickly add filtering & seraching
- The Table has pagination implemented and can handle large datasets


# Moving Forward
- Extract `fetch` calls from TableComponent into an Utility Service 
- Use [Pinia](https://pinia.vuejs.org/) for state management

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
