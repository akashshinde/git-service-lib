[![TypeScript version][ts-badge]][typescript-34]
[![Node.js version][nodejs-badge]][nodejs]
[![Build Status][travis-badge]][travis-ci]


## Quick start

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs]. To start, just clone the repository with following commands:

```sh
git clone https://github.com/akashshinde/git-service-lib
cd git-service-lib
npm install
```

### Unit tests in JavaScript

Writing unit tests in TypeScript can sometimes be troublesome and confusing. Especially when mocking dependencies and using spies.

This is **optional**, but if you want to learn how to write JavaScript tests for TypeScript modules, read the [corresponding wiki page][wiki-js-tests].

## Available scripts

+ `clean` - remove coverage data, Jest cache and transpiled files,
+ `build` - transpile TypeScript to ES6,
+ `build:watch` - interactive watch mode to automatically transpile source files,
+ `lint` - lint source files and tests,
+ `test` - run tests,
+ `test:watch` - interactive watch mode to automatically re-run tests
