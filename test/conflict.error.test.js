
'use strict';

// Modules
require('should');

function SomeObject () {
  this.type = 'object';
}

// Subject
var ErrorConflict = require('../lib/conflict.error.js');

describe('Error - ErrorConflict', function () {

  it('should be instance of "ErrorConflict"', function () {
    new ErrorConflict().should.be.instanceof(ErrorConflict);
  });

  it('should be instance of "Error" (parent)', function () {
    new ErrorConflict().should.be.instanceof(Error);
    new ErrorConflict().should.not.be.instanceof(SomeObject);
  });

  it('should have a name of "ErrorConflict"', function () {
    new ErrorConflict().should.have.property('name').and.equal('ErrorConflict');
  });

  it('should have a type of "client"', function () {
    new ErrorConflict().should.have.property('type').and.equal('client');
  });

  it('should have a status of 409', function () {
    new ErrorConflict().should.have.property('status').and.equal(409);
  });

  it('should update the message when one is provided', function () {
    new ErrorConflict().should.have.property('message').and.equal('');
    new ErrorConflict('My Message').should.have.property('message').and.equal('My Message');
  });

});
