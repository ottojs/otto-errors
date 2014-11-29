
'use strict';

// Exports
module.exports = {
  ErrorBadRequest   : require('./bad_request.error.js'),
  ErrorConflict     : require('./conflict.error.js'),
  ErrorLocked       : require('./locked.error.js'),
  ErrorNotFound     : require('./not_found.error.js'),
  ErrorRead         : require('./read.error.js'),
  ErrorSave         : require('./save.error.js'),
  ErrorUnauthorized : require('./unauthorized.error.js')
};
