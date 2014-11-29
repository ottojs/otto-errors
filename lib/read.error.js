
'use strict';

// Modules
var util = require('util');

// Error - ErrorRead
function ErrorRead (message) {

  Error.call(this);

  // Add Information
  this.name    = 'ErrorRead';
  this.type    = 'server';
  this.status  = 500;
  if (message) {
    this.message = message;
  }

}

// Parent is Error
util.inherits(ErrorRead, Error);

// Export
module.exports = ErrorRead;
