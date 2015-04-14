var util = require('util'),
  os = require('os'),
  exec = require('child_process').exec,
  bleno = require('bleno'),
  clamp = require('clamp'),
  Descriptor = bleno.Descriptor,
  BlenoCharacteristic = bleno.Characteristic;



var VMGTargetCharacteristic = function() {
  VMGTargetCharacteristic.super_.call(this, {
    uuid: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5',
    properties: ['notify', 'read']
  });
};
util.inherits(VMGTargetCharacteristic, BlenoCharacteristic);

VMGTargetCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('VMGTargetCharacteristic subscribe');

  this.targetValue = 58;

  this.changeInterval = setInterval(function() {
    var data = new Buffer(this.targetValue + '', 'utf-8');
    data.write(this.targetValue+'');
    // data.writeUInt32LE(this.counter, 0);

    console.log('VMGTargetCharacteristic update value: ' + this.targetValue);
    updateValueCallback(data);
  }.bind(this), 3500);
};

VMGTargetCharacteristic.prototype.onUnsubscribe = function() {
  console.log('VMGTargetCharacteristic unsubscribe');

  if (this.changeInterval) {
    clearInterval(this.changeInterval);
    this.changeInterval = null;
  }
};

module.exports = VMGTargetCharacteristic;

