
'use strict';

// Modules
var util = require('util');

// Error - ErrorLocked
function ErrorLocked (message) {

  Error.call(this);

  // Add Information
  this.name    = 'ErrorLocked';
  this.type    = 'client';
  this.status  = 423;
  if (message) {
    this.message = message;
  }

}

// Parent is Error
util.inherits(ErrorLocked, Error);

// Export
module.exports = ErrorLocked;
