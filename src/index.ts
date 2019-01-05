import {PackageJson} from '@pnpm/types'
import path = require('path')
import readPackageJsonCB = require('read-package-json')
import promisify = require('util.promisify')

const readPackageJson = promisify(readPackageJsonCB)

export default async function readPkg (pkgPath: string): Promise<PackageJson> {
  try {
    return await readPackageJson(pkgPath)
  } catch (err) {
    const pnpmError = new Error(`${pkgPath}: ${err.message}`)
    pnpmError['code'] = 'ERR_PNPM_BAD_PACKAGE_JSON' // tslint:disable-line
    throw pnpmError
  }
}

export function fromDir (pkgPath: string): Promise<PackageJson> {
  return readPkg(path.join(pkgPath, 'package.json'))
}
