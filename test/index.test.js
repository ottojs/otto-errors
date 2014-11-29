
'use strict';

// Modules
require('should');

// Subject
var subject = require('../lib/index.js');

describe('Module Exports', function () {

  it('should export ErrorBadRequest', function () {
    subject.should.have.property('ErrorBadRequest').and.be.type('function');
  });

  it('should export ErrorConflict', function () {
    subject.should.have.property('ErrorConflict').and.be.type('function');
  });

  it('should export ErrorLocked', function () {
    subject.should.have.property('ErrorLocked').and.be.type('function');
  });

  it('should export ErrorNotFound', function () {
    subject.should.have.property('ErrorNotFound').and.be.type('function');
  });

  it('should export ErrorRead', function () {
    subject.should.have.property('ErrorRead').and.be.type('function');
  });

  it('should export ErrorSave', function () {
    subject.should.have.property('ErrorSave').and.be.type('function');
  });

  it('should export ErrorUnauthorized', function () {
    subject.should.have.property('ErrorUnauthorized').and.be.type('function');
  });

});
