var util = require('util'),
  os = require('os'),
  exec = require('child_process').exec,
  bleno = require('bleno'),
  clamp = require('clamp'),
  Descriptor = bleno.Descriptor,
  BlenoCharacteristic = bleno.Characteristic;


var VMGCharacteristic = function() {
  VMGCharacteristic.super_.call(this, {
    uuid: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF4',
    properties: ['notify', 'read']
  });
};
util.inherits(VMGCharacteristic, BlenoCharacteristic);

VMGCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('VMGCharacteristic subscribe');

  this.minValue = 0;
  this.maxValue = 58;
  this.value = Math.floor(Math.random() * this.maxValue);
  this.changeInterval = setInterval(function() {
    var data = new Buffer(this.value + '', 'utf-8');
    data.write(this.value+'');
    // data.writeUInt32LE(this.counter, 0);

    console.log('VMGCharacteristic update value: ' + this.value);
    updateValueCallback(data);
    this.value += Math.floor(Math.random() * 4) - 2;
    this.value = clamp(this.value, this.minValue, this.maxValue);
  }.bind(this), 500);
};

VMGCharacteristic.prototype.onUnsubscribe = function() {
  console.log('VMGCharacteristic unsubscribe');

  if (this.changeInterval) {
    clearInterval(this.changeInterval);
    this.changeInterval = null;
  }
};


module.exports = VMGCharacteristic;

