> this package was moved to the pnpm monorepo: https://github.com/pnpm/pnpm

# @pnpm/read-package-json

> Read a package.json

<!--@shields('npm', 'travis')-->
[![npm version](https://img.shields.io/npm/v/@pnpm/read-package-json.svg)](https://www.npmjs.com/package/@pnpm/read-package-json) [![Build Status](https://img.shields.io/travis/pnpm/read-package-json/master.svg)](https://travis-ci.org/pnpm/read-package-json)
<!--/@-->

## Installation

```sh
npm i -S @pnpm/read-package-json
```

## Usage

```ts
import readPackageJson from '@pnpm/read-package-json'

const pkgJson = await readPackageJson('package.json')
```

## API

### default: `readPackageJson(path): Promise<PackageJson>`

### Arguments

- `path` - _String_ - path to the `package.json`

### `fromDir(path): Promise<PackageJson>`

### Arguments

- `path` - _String_ - path to the directory with the `package.json`

## License

[MIT](./LICENSE) © [Zoltan Kochan](https://www.kochan.io/)
