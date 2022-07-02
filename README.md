# Nuxt 3 Minimal Starter



Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## DRAFT

```
 docker build -t ringling/xsd2json-app .
 docker run -p 8080:3000 -d ringling/xsd2json-app
```
```
 docker push ringling/xsd2json-app
```


OLD STUFF
```
cd xsd2json/schemas
docker run -it -v "$(pwd):/root/schemas" ringling/xsd2json
cd ~/schemas
xsd2json demo.xsd > demo.json
```


## Pre-setup


### Install prolog and xsd2json
```
apt install -y swi-prolog
npm install -g xsd2json
```

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
node .output/server/index.mjs 
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
