
'use strict';

// Modules
require('should');

function SomeObject () {
  this.type = 'object';
}

// Subject
var ErrorSave = require('../lib/save.error.js');

describe('Error - ErrorSave', function () {

  it('should be instance of "ErrorSave"', function () {
    new ErrorSave().should.be.instanceof(ErrorSave);
  });

  it('should be instance of "Error" (parent)', function () {
    new ErrorSave().should.be.instanceof(Error);
    new ErrorSave().should.not.be.instanceof(SomeObject);
  });

  it('should have a name of "ErrorSave"', function () {
    new ErrorSave().should.have.property('name').and.equal('ErrorSave');
  });

  it('should have a type of "server"', function () {
    new ErrorSave().should.have.property('type').and.equal('server');
  });

  it('should have a status of 500', function () {
    new ErrorSave().should.have.property('status').and.equal(500);
  });

  it('should update the message when one is provided', function () {
    new ErrorSave().should.have.property('message').and.equal('');
    new ErrorSave('My Message').should.have.property('message').and.equal('My Message');
  });

});
