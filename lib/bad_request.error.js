
'use strict';

// Modules
var util = require('util');

// Error - ErrorBadRequest
function ErrorBadRequest (message) {

  Error.call(this);

  // Add Information
  this.name    = 'ErrorBadRequest';
  this.type    = 'client';
  this.status  = 400;
  if (message) {
    this.message = message;
  }

}

// Parent is Error
util.inherits(ErrorBadRequest, Error);

// Export
module.exports = ErrorBadRequest;
