# Demo Prisma ORM

- [Dev.to Article's Series di Luca Del Puppo: It's Prisma Time](https://dev.to/puppo/series/15827)
- [Youtube video: Prisma: un po' di colore nel nero mondo degli ORM - Francesco Sciuti / Luca Del Puppo](https://www.youtube.com/watch?v=MTMcWrDbPA8)

## Install Dependencies

```bash
npm i dotenv
```

## Install Dev Dependencies 1

```bash
npm i -D typescript ts-node ts-node-dev 
npm i -D @types/node
```

## Configure Typescript

```bash
npx tsc --init
```

```json
{ 
  "rootDir": "./src",
  "outDir": "./dist"
}
```

## Install Dev Dependencies 2

```bash
npm i -D nodemon
```

## Configure Nodemon (modemon.json)

```json
{
  "watch": [
    "src"
  ],
  "ext": "ts,json",
  "ignore": [
    "src/**/*.spec.ts"
  ],
  "exec": "ts-node ./src/index.ts"
}
```

### Scripts

```bash
"scripts": {
  "build": "tsc -p .",
  "start": "node dist/index.js",
  "dev": "nodemon",
  "dev2": "ts-node-dev src/index.ts"
},
```
