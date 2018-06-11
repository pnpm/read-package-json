import readPackageJson, {fromDir as readPackageJsonFromDir} from '@pnpm/read-package-json'
import test = require('tape')
import path = require('path')

test('readPackageJson()', async (t) => {
  t.equal((await readPackageJson(path.join(__dirname, '..', 'package.json'))).name, '@pnpm/read-package-json')
  t.end()
})

test('fromDir()', async (t) => {
  t.equal((await readPackageJsonFromDir(path.join(__dirname, '..'))).name, '@pnpm/read-package-json')
  t.end()
})
