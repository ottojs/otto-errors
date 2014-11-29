
'use strict';

// Modules
require('should');

function SomeObject () {
  this.type = 'object';
}

// Subject
var ErrorNotFound = require('../lib/not_found.error.js');

describe('Error - ErrorNotFound', function () {

  it('should be instance of "ErrorNotFound"', function () {
    new ErrorNotFound().should.be.instanceof(ErrorNotFound);
  });

  it('should be instance of "Error" (parent)', function () {
    new ErrorNotFound().should.be.instanceof(Error);
    new ErrorNotFound().should.not.be.instanceof(SomeObject);
  });

  it('should have a name of "ErrorNotFound"', function () {
    new ErrorNotFound().should.have.property('name').and.equal('ErrorNotFound');
  });

  it('should have a type of "client"', function () {
    new ErrorNotFound().should.have.property('type').and.equal('client');
  });

  it('should have a status of 404', function () {
    new ErrorNotFound().should.have.property('status').and.equal(404);
  });

  it('should update the message when one is provided', function () {
    new ErrorNotFound().should.have.property('message').and.equal('');
    new ErrorNotFound('My Message').should.have.property('message').and.equal('My Message');
  });

  it('should not have a data property by default', function () {
    new ErrorNotFound().should.not.have.property('data');
  });

  it('should have a data property when sent an object with method', function () {
    var error = new ErrorNotFound('message', { method : 'crystal' });
    error.should.have.property('data').and.be.type('object');
    error.data.should.have.property('method').and.equal('crystal');
  });

  it('should have a data property when sent an object with path', function () {
    var error = new ErrorNotFound('message', { path : 'dirt' });
    error.should.have.property('data').and.be.type('object');
    error.data.should.have.property('path').and.equal('dirt');
  });

});
