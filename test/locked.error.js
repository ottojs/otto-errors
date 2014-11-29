
'use strict';

// Modules
require('should');

function SomeObject () {
  this.type = 'object';
}

// Subject
var ErrorLocked = require('../lib/locked.error.js');

describe('Error - ErrorLocked', function () {

  it('should be instance of "ErrorLocked"', function () {
    new ErrorLocked().should.be.instanceof(ErrorLocked);
  });

  it('should be instance of "Error" (parent)', function () {
    new ErrorLocked().should.be.instanceof(Error);
    new ErrorLocked().should.not.be.instanceof(SomeObject);
  });

  it('should have a name of "ErrorLocked"', function () {
    new ErrorLocked().should.have.property('name').and.equal('ErrorLocked');
  });

  it('should have a type of "client"', function () {
    new ErrorLocked().should.have.property('type').and.equal('client');
  });

  it('should have a status of 423', function () {
    new ErrorLocked().should.have.property('status').and.equal(423);
  });

  it('should update the message when one is provided', function () {
    new ErrorLocked().should.have.property('message').and.equal('');
    new ErrorLocked('My Message').should.have.property('message').and.equal('My Message');
  });

});
