
'use strict';

// Modules
require('should');

function SomeObject () {
  this.type = 'object';
}

// Subject
var ErrorRead = require('../lib/read.error.js');

describe('Error - ErrorRead', function () {

  it('should be instance of "ErrorRead"', function () {
    new ErrorRead().should.be.instanceof(ErrorRead);
  });

  it('should be instance of "Error" (parent)', function () {
    new ErrorRead().should.be.instanceof(Error);
    new ErrorRead().should.not.be.instanceof(SomeObject);
  });

  it('should have a name of "ErrorRead"', function () {
    new ErrorRead().should.have.property('name').and.equal('ErrorRead');
  });

  it('should have a type of "server"', function () {
    new ErrorRead().should.have.property('type').and.equal('server');
  });

  it('should have a status of 500', function () {
    new ErrorRead().should.have.property('status').and.equal(500);
  });

  it('should update the message when one is provided', function () {
    new ErrorRead().should.have.property('message').and.equal('');
    new ErrorRead('My Message').should.have.property('message').and.equal('My Message');
  });

});
