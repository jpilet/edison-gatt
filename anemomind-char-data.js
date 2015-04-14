var util = require('util'),
  os = require('os'),
  exec = require('child_process').exec,
  bleno = require('bleno'),
  loremIpsum = require('lorem-ipsum'),
  clamp = require('clamp'),
  Descriptor = bleno.Descriptor,
  BlenoCharacteristic = bleno.Characteristic;


var DataCharacteristic = function() {
  DataCharacteristic.super_.call(this, {
    uuid: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFF12',
    properties: ['notify', 'read']
  });
};
util.inherits(DataCharacteristic, BlenoCharacteristic);

DataCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('DataCharacteristic subscribe');
};

DataCharacteristic.prototype.onReadRequest = function(offset, callback) {
  if (offset) {
    callback(this.RESULT_ATTR_NOT_LONG, null);
  }
  else {

    if (this.message === "" || this.message === undefined) {
      console.log('-> Generating a new message')
      this.message = loremIpsum({ 'count': 5, 'units': 'paragraphs'});
      console.log(this.message)
      this.currentIndex = 0;
      this.MTU = 64;
    }
    var chunk = "";
    if (this.currentIndex * this.MTU > this.message.length) {
      chunk = "==EOM==";
      this.currentIndex = 0;
      delete this.message;
    } else {
      chunk = this.message.substr(this.currentIndex * this.MTU, this.MTU);
      this.currentIndex++;
    }
    var data = new Buffer(chunk, 'utf-8');
    data.write(chunk);
    console.log('-------> Sending: '+ chunk);
    // var data = new Buffer();
    // data.writeUInt8(this.pizza.crust, 0);
    callback(this.RESULT_SUCCESS, data);
  }
};

DataCharacteristic.prototype.onUnsubscribe = function() {
  console.log('DataCharacteristic unsubscribe');

  this.message = '';
};


module.exports = DataCharacteristic;

