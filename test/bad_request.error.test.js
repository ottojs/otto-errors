
'use strict';

// Modules
require('should');

function SomeObject () {
  this.type = 'object';
}

// Subject
var ErrorBadRequest = require('../lib/bad_request.error.js');

describe('Error - ErrorBadRequest', function () {

  it('should be instance of "ErrorBadRequest"', function () {
    new ErrorBadRequest().should.be.instanceof(ErrorBadRequest);
  });

  it('should be instance of "Error" (parent)', function () {
    new ErrorBadRequest().should.be.instanceof(Error);
    new ErrorBadRequest().should.not.be.instanceof(SomeObject);
  });

  it('should have a name of "ErrorBadRequest"', function () {
    new ErrorBadRequest().should.have.property('name').and.equal('ErrorBadRequest');
  });

  it('should have a type of "client"', function () {
    new ErrorBadRequest().should.have.property('type').and.equal('client');
  });

  it('should have a status of 400', function () {
    new ErrorBadRequest().should.have.property('status').and.equal(400);
  });

  it('should update the message when one is provided', function () {
    new ErrorBadRequest().should.have.property('message').and.equal('');
    new ErrorBadRequest('My Message').should.have.property('message').and.equal('My Message');
  });

});
