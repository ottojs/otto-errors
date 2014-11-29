
'use strict';

// Modules
var util = require('util');

// Error - ErrorNotFound
function ErrorNotFound (message, data) {

  Error.call(this);

  // Add Information
  this.name    = 'ErrorNotFound';
  this.type    = 'client';
  this.status  = 404;

  if (message) {
    this.message = message;
  }

  if (data) {
    this.data = {};
    if (data.method) { this.data.method = data.method; }
    if (data.path)   { this.data.path   = data.path;   }
  }

}

// Parent is Error
util.inherits(ErrorNotFound, Error);

// Export
module.exports = ErrorNotFound;
