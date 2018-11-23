const fs = require('fs')
const path = require('path')
const Module = require('module');
const xrequire = Module.prototype.require;


Module.prototype.require = function () {
  let modulename = arguments[0]
  if (modulename.indexOf('/router/') !== -1) {
    console.log(modulename)
  }
  return xrequire.apply(this, arguments);
};
require('./server')