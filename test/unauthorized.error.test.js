
'use strict';

// Modules
require('should');

function SomeObject () {
  this.type = 'object';
}

// Subject
var ErrorUnauthorized = require('../lib/unauthorized.error.js');

describe('Error - ErrorUnauthorized', function () {

  it('should be instance of "ErrorUnauthorized"', function () {
    new ErrorUnauthorized().should.be.instanceof(ErrorUnauthorized);
  });

  it('should be instance of "Error" (parent)', function () {
    new ErrorUnauthorized().should.be.instanceof(Error);
    new ErrorUnauthorized().should.not.be.instanceof(SomeObject);
  });

  it('should have a name of "ErrorUnauthorized"', function () {
    new ErrorUnauthorized().should.have.property('name').and.equal('ErrorUnauthorized');
  });

  it('should have a type of "client"', function () {
    new ErrorUnauthorized().should.have.property('type').and.equal('client');
  });

  it('should have a status of 401', function () {
    new ErrorUnauthorized().should.have.property('status').and.equal(401);
  });

  it('should update the message when one is provided', function () {
    new ErrorUnauthorized().should.have.property('message').and.equal('');
    new ErrorUnauthorized('My Message').should.have.property('message').and.equal('My Message');
  });

});
