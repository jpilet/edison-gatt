var util = require('util'),
  os = require('os'),
  exec = require('child_process').exec,
  bleno = require('bleno'),
  clamp = require('clamp'),
  Descriptor = bleno.Descriptor,
  BlenoCharacteristic = bleno.Characteristic;


var SOGCharacteristic = function() {
  SOGCharacteristic.super_.call(this, {
    uuid: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF9',
    properties: ['notify', 'read']
  });
};
util.inherits(SOGCharacteristic, BlenoCharacteristic);

SOGCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('SOGCharacteristic subscribe');

  this.minValue = 0;
  this.maxValue = 80;
  this.counter = Math.floor(Math.random() * this.maxValue) + (this.maxValue - this.minValue);
  this.changeInterval = setInterval(function() {
    var data = new Buffer(this.counter + '', 'utf-8');
    data.write(this.counter+'');
    // data.writeUInt32LE(this.counter, 0);

    console.log('SOGCharacteristic update value: ' + this.counter);
    updateValueCallback(data);
    this.counter+= Math.floor(Math.random() * 6) - 3;
    this.counter = clamp(this.counter, this.minValue, this.maxValue);
  }.bind(this), 500);
};

SOGCharacteristic.prototype.onUnsubscribe = function() {
  console.log('SOGCharacteristic unsubscribe');

  if (this.changeInterval) {
    clearInterval(this.changeInterval);
    this.changeInterval = null;
  }
};


module.exports = SOGCharacteristic;

