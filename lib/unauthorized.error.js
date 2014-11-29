
'use strict';

// Modules
var util = require('util');

// Error - ErrorUnauthorized
function ErrorUnauthorized (message) {

  Error.call(this);

  // Add Information
  this.name    = 'ErrorUnauthorized';
  this.type    = 'client';
  this.status  = 401;
  if (message) {
    this.message = message;
  }

}

// Parent is Error
util.inherits(ErrorUnauthorized, Error);

// Export
module.exports = ErrorUnauthorized;
