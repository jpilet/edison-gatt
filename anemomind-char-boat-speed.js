var util = require('util'),
  os = require('os'),
  exec = require('child_process').exec,
  bleno = require('bleno'),
  clamp = require('clamp'),
  Descriptor = bleno.Descriptor,
  BlenoCharacteristic = bleno.Characteristic;


var BoatSpeedCharacteristic = function() {
  BoatSpeedCharacteristic.super_.call(this, {
    uuid: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF6',
    properties: ['notify', 'read']
  });
};
util.inherits(BoatSpeedCharacteristic, BlenoCharacteristic);

BoatSpeedCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('BoatSpeedCharacteristic subscribe');
  this.minValue = 0;
  this.maxValue = 15;
  this.counter = Math.floor(Math.random() * this.maxValue) + this.minValue;
  this.changeInterval = setInterval(function() {
    var data = new Buffer(this.counter + '', 'utf-8');
    data.write(this.counter+'');
    // data.writeUInt32LE(this.counter, 0);
    console.log('BoatSpeedCharacteristic update value: ' + this.counter);
    updateValueCallback(data);
    this.counter += Math.floor(Math.random() * 4) - 2;
    this.counter = clamp(this.counter, this.minValue, this.maxValue);
  }.bind(this), 1500);
};
BoatSpeedCharacteristic.prototype.onUnsubscribe = function() {
  console.log('BoatSpeedCharacteristic unsubscribe');
  if (this.changeInterval) {
    clearInterval(this.changeInterval);
    this.changeInterval = null;
  }
};


module.exports = BoatSpeedCharacteristic;

