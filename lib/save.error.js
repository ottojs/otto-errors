
'use strict';

// Modules
var util = require('util');

// Error - ErrorSave
function ErrorSave (message) {

  Error.call(this);

  // Add Information
  this.name    = 'ErrorSave';
  this.type    = 'server';
  this.status  = 500;
  if (message) {
    this.message = message;
  }

}

// Parent is Error
util.inherits(ErrorSave, Error);

// Export
module.exports = ErrorSave;
