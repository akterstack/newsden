const path = require('path')
const resolve = file => path.resolve(__dirname, file)

const dirs = {
  buildDir: './build',
  publicDir: './build/public',
  srcDir: './src',
  assetDir: './src/assets',
  componentDir: './src/components',
  mixinDir: './src/mixins',
  pageDir: './src/pages',
  routerDir: './src/router',
  staticDir: './src/static',
  storeDir: './src/store',
}

exports.buildDir = resolve(dirs.buildDir)
exports.publicDir = resolve(dirs.publicDir)
exports.srcDir = resolve(dirs.srcDir)
exports.assetDir = resolve(dirs.assetDir)
exports.componentDir = resolve(dirs.componentDir)
exports.mixinDir = resolve(dirs.mixinDir)
exports.pageDir = resolve(dirs.pageDir)
exports.routerDir = resolve(dirs.routerDir)
exports.staticDir = resolve(dirs.staticDir)
exports.storeDir = resolve(dirs.storeDir)

exports.resolve = resolve
exports.resolveSrc = file => path.resolve(__dirname, dirs.srcDir, file)