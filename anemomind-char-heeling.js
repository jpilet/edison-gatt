var util = require('util'),
  os = require('os'),
  exec = require('child_process').exec,
  bleno = require('bleno'),
  clamp = require('clamp'),
  Descriptor = bleno.Descriptor,
  BlenoCharacteristic = bleno.Characteristic;


var HeelingCharacteristic = function() {
  HeelingCharacteristic.super_.call(this, {
    uuid: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8',
    properties: ['notify', 'read']
  });
};
util.inherits(HeelingCharacteristic, BlenoCharacteristic);

HeelingCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('HeelingCharacteristic subscribe');

  this.minValue = -60;
  this.maxValue = 60;
  this.counter = Math.floor(Math.random() * this.maxValue) + (this.maxValue - this.minValue);
  this.changeInterval = setInterval(function() {
    var data = new Buffer(this.counter + '', 'utf-8');
    data.write(this.counter+'');
    // data.writeUInt32LE(this.counter, 0);

    console.log('HeelingCharacteristic update value: ' + this.counter);
    updateValueCallback(data);
    this.counter+= Math.floor(Math.random() * 10) - 5;
    this.counter = clamp(this.counter, this.minValue, this.maxValue);
  }.bind(this), 500);
};

HeelingCharacteristic.prototype.onUnsubscribe = function() {
  console.log('HeelingCharacteristic unsubscribe');

  if (this.changeInterval) {
    clearInterval(this.changeInterval);
    this.changeInterval = null;
  }
};


module.exports = HeelingCharacteristic;

