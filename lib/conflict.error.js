
'use strict';

// Modules
var util = require('util');

// Error - ErrorConflict
function ErrorConflict (message) {

  Error.call(this);

  // Add Information
  this.name    = 'ErrorConflict';
  this.type    = 'client';
  this.status  = 409;
  if (message) {
    this.message = message;
  }

}

// Parent is Error
util.inherits(ErrorConflict, Error);

// Export
module.exports = ErrorConflict;
