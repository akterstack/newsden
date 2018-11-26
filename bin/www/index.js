const fs = require('fs')
const path = require('path')
const Module = require('module');
const xrequire = Module.prototype.require;


Module.prototype.require = function () {
  let modulename = arguments[0]
  return xrequire.apply(this, arguments);
};
require('./server')