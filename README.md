# AGL Developer Test

This repo contains my solution to the [AGL Developer Test](http://agl-developer-test.azurewebsites.net/) programming challenge.

## Goal

Read a remote [JSON list of pet owners](http://agl-developer-test.azurewebsites.net/people.json) and output all the cats, by the gender of their owner, sorted alphabetically within each list.

## Install

```bash
git clone https://github.com/LeopoldTal/agl-developer-test.git
cd agl-developer-test/
yarn
```

## Usage

Start the app with

```
yarn start
```

and view the results at [http://localhost:3000](http://localhost:3000).

## Tests

Run tests interactively:

```
yarn test
```

Run batched tests and generate coverage report:

```
yarn test:coverage
```

Run end-to-end tests:

```
yarn test:e2e
```
