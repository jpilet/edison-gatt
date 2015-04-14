var util = require('util'),
  os = require('os'),
  exec = require('child_process').exec,
  bleno = require('bleno'),
  clamp = require('clamp'),
  Descriptor = bleno.Descriptor,
  BlenoCharacteristic = bleno.Characteristic;


var TWSCharacteristic = function() {
  TWSCharacteristic.super_.call(this, {
    uuid: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF3',
    properties: ['notify', 'read']
  });
};
util.inherits(TWSCharacteristic, BlenoCharacteristic);


TWSCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('TWSCharacteristic subscribe');

  this.minValue = 0;
  this.maxValue = 40;
  this.counter = Math.floor(Math.random() * this.maxValue) + this.minValue;
  this.changeInterval = setInterval(function() {
    var data = new Buffer(this.counter + '', 'utf-8');
    data.write(this.counter+'');
    // data.writeUInt32LE(this.counter, 0);

    console.log('TWSCharacteristic update value: ' + this.counter);
    updateValueCallback(data);
    this.counter += Math.floor(Math.random() * 3) - 1;
    this.counter = clamp(this.counter, this.minValue, this.maxValue);
  }.bind(this), 1500);
};

TWSCharacteristic.prototype.onUnsubscribe = function() {
  console.log('TWSCharacteristic unsubscribe');

  if (this.changeInterval) {
    clearInterval(this.changeInterval);
    this.changeInterval = null;
  }
};


module.exports = TWSCharacteristic;

