import {PackageJson} from '@pnpm/types'
import path = require('path')
import readPackageJsonCB = require('read-package-json')
import promisify = require('util.promisify')

const readPackageJson = promisify(readPackageJsonCB)

export default function readPkg (pkgPath: string): Promise<PackageJson> {
  try {
    return readPackageJson(pkgPath);
  } catch (err) {
    console.error(`Error in parsing package.json: ${err.message)`);
    return Promise.resolve({});
  }
}

export function fromDir (pkgPath: string): Promise<PackageJson> {
  return readPkg(path.join(pkgPath, 'package.json'))
}
