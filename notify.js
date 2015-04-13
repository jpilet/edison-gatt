var util = require('util');
 
var bleno = require('bleno');
 
 
var BlenoPrimaryService = bleno.PrimaryService;
var BlenoCharacteristic = bleno.Characteristic;
 
console.log('bleno');
 
 
var AWACharacteristic = function() {
  AWACharacteristic.super_.call(this, {
    uuid: 'fffffffffffffffffffffffffffffff0',
    properties: ['notify', 'read']
  });
}; 

var AWSCharacteristic = function() {
  AWSCharacteristic.super_.call(this, {
    uuid: 'fffffffffffffffffffffffffffffff1',
    properties: ['notify', 'read']
  });
};

var TWACharacteristic = function() {
  TWACharacteristic.super_.call(this, {
    uuid: 'fffffffffffffffffffffffffffffff2',
    properties: ['notify', 'read']
  });
};

var TWSCharacteristic = function() {
  TWSCharacteristic.super_.call(this, {
    uuid: 'fffffffffffffffffffffffffffffff3',
    properties: ['notify', 'read']
  });
};

var TWDirCharacteristic = function() {
  TWDirCharacteristic.super_.call(this, {
    uuid: 'fffffffffffffffffffffffffffffff4',
    properties: ['notify', 'read']
  });
};

var GPSSpeedCharacteristic = function() {
  GPSSpeedCharacteristic.super_.call(this, {
    uuid: 'fffffffffffffffffffffffffffffff5',
    properties: ['notify', 'read']
  });
};

var GPSBearingCharacteristic = function() {
  GPSBearingCharacteristic.super_.call(this, {
    uuid: 'fffffffffffffffffffffffffffffff6',
    properties: ['notify', 'read']
  });
};

var MagHeadingCharacteristic = function() {
  MagHeadingCharacteristic.super_.call(this, {
    uuid: 'fffffffffffffffffffffffffffffff7',
    properties: ['notify', 'read']
  });
};

var WatSpeedCharacteristic = function() {
  WatSpeedCharacteristic.super_.call(this, {
    uuid: 'fffffffffffffffffffffffffffffff8',
    properties: ['notify', 'read']
  });
};

var SendDataCharacteristic = function() {
  SendDataCharacteristic.super_.call(this, {
    uuid: 'fffffffffffffffffffffffffffffff9',
    properties: ['notify', 'write']
  });
};
 
util.inherits(SendDataCharacteristic, BlenoCharacteristic);
util.inherits(AWACharacteristic, BlenoCharacteristic);
util.inherits(AWSCharacteristic, BlenoCharacteristic);
util.inherits(TWACharacteristic, BlenoCharacteristic);
util.inherits(TWSCharacteristic, BlenoCharacteristic);
util.inherits(TWDirCharacteristic, BlenoCharacteristic);
util.inherits(GPSSpeedCharacteristic, BlenoCharacteristic);
util.inherits(GPSBearingCharacteristic, BlenoCharacteristic);
util.inherits(MagHeadingCharacteristic, BlenoCharacteristic);
util.inherits(WatSpeedCharacteristic, BlenoCharacteristic);



AWACharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('AWACharacteristic subscribe');
 
  this.counter = 0;
  this.changeInterval = setInterval(function() {
    var data = new Buffer(this.counter + '', 'utf-8');
    data.write(this.counter+'');
    // data.writeUInt32LE(this.counter, 0);
 
    console.log('AWACharacteristic update value: ' + this.counter);
    updateValueCallback(data);
    this.counter++;
  }.bind(this), 500);
};
 
AWACharacteristic.prototype.onUnsubscribe = function() {
  console.log('AWACharacteristic unsubscribe');
 
  if (this.changeInterval) {
    clearInterval(this.changeInterval);
    this.changeInterval = null;
  }
};
 
AWACharacteristic.prototype.onNotify = function() {
  console.log('AWACharacteristic on notify');
};

AWSCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('AWSCharacteristic subscribe');
 
  this.counter = 0;
  this.changeInterval = setInterval(function() {
    var data = new Buffer(this.counter + '', 'utf-8');
    data.write(this.counter+'');
    // data.writeUInt32LE(this.counter, 0);
 
    console.log('AWSCharacteristic update value: ' + this.counter);
    updateValueCallback(data);
    this.counter++;
  }.bind(this), 500);
};
 
AWSCharacteristic.prototype.onUnsubscribe = function() {
  console.log('AWSCharacteristic unsubscribe');
 
  if (this.changeInterval) {
    clearInterval(this.changeInterval);
    this.changeInterval = null;
  }
};
 
AWSCharacteristic.prototype.onNotify = function() {
  console.log('AWSCharacteristic on notify');
};

TWACharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('TWACharacteristic subscribe');
 
  this.counter = 0;
  this.changeInterval = setInterval(function() {
    var data = new Buffer(this.counter + '', 'utf-8');
    data.write(this.counter+'');
    // data.writeUInt32LE(this.counter, 0);
 
    console.log('TWACharacteristic update value: ' + this.counter);
    updateValueCallback(data);
    this.counter++;
  }.bind(this), 500);
};
 
TWACharacteristic.prototype.onUnsubscribe = function() {
  console.log('TWACharacteristic unsubscribe');
 
  if (this.changeInterval) {
    clearInterval(this.changeInterval);
    this.changeInterval = null;
  }
};
 
TWACharacteristic.prototype.onNotify = function() {
  console.log('TWACharacteristic on notify');
};

TWSCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('TWSCharacteristic subscribe');
 
  this.counter = 0;
  this.changeInterval = setInterval(function() {
    var data = new Buffer(this.counter + '', 'utf-8');
    data.write(this.counter+'');
    // data.writeUInt32LE(this.counter, 0);
 
    console.log('TWSCharacteristic update value: ' + this.counter);
    updateValueCallback(data);
    this.counter++;
  }.bind(this), 500);
};
 
TWSCharacteristic.prototype.onUnsubscribe = function() {
  console.log('TWSCharacteristic unsubscribe');
 
  if (this.changeInterval) {
    clearInterval(this.changeInterval);
    this.changeInterval = null;
  }
};
 
TWSCharacteristic.prototype.onNotify = function() {
  console.log('TWSCharacteristic on notify');
};

TWDirCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('TWDirCharacteristic subscribe');

  this.minValue = 0
  this.maxValue = 40
  this.counter = Math.floor(Math.random() * this.maxValue) + this.minValue;
  this.changeInterval = setInterval(function() {
    var data = new Buffer(this.counter + '', 'utf-8');
    data.write(this.counter+'');
    // data.writeUInt32LE(this.counter, 0);

    console.log('TWDirCharacteristic update value: ' + this.counter);
    updateValueCallback(data);
    this.counter++;
    if (this.counter == 40) {
      this.counter = 0;
    }
  }.bind(this), 1500);
};
 
TWDirCharacteristic.prototype.onUnsubscribe = function() {
  console.log('TWDirCharacteristic unsubscribe');
 
  if (this.changeInterval) {
    clearInterval(this.changeInterval);
    this.changeInterval = null;
  }
};
 
TWDirCharacteristic.prototype.onNotify = function() {
  console.log('TWDirCharacteristic on notify');
};

GPSSpeedCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('GPSSpeedCharacteristic subscribe');
 
  this.counter = 0;
  this.changeInterval = setInterval(function() {
    var data = new Buffer(this.counter + '', 'utf-8');
    data.write(this.counter+'');
    // data.writeUInt32LE(this.counter, 0);
 
    console.log('GPSSpeedCharacteristic update value: ' + this.counter);
    updateValueCallback(data);
    this.counter++;
  }.bind(this), 500);
};
 
GPSSpeedCharacteristic.prototype.onUnsubscribe = function() {
  console.log('GPSSpeedCharacteristic unsubscribe');
 
  if (this.changeInterval) {
    clearInterval(this.changeInterval);
    this.changeInterval = null;
  }
};
 
GPSSpeedCharacteristic.prototype.onNotify = function() {
  console.log('GPSSpeedCharacteristic on notify');
};

GPSBearingCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('GPSBearingCharacteristic subscribe');
 
  this.counter = 0;
  this.changeInterval = setInterval(function() {
    var data = new Buffer(this.counter + '', 'utf-8');
    data.write(this.counter+'');
    // data.writeUInt32LE(this.counter, 0);
 
    console.log('GPSBearingCharacteristic update value: ' + this.counter);
    updateValueCallback(data);
    this.counter++;
  }.bind(this), 500);
};
 
GPSBearingCharacteristic.prototype.onUnsubscribe = function() {
  console.log('GPSBearingCharacteristic unsubscribe');
 
  if (this.changeInterval) {
    clearInterval(this.changeInterval);
    this.changeInterval = null;
  }
};
 
GPSBearingCharacteristic.prototype.onNotify = function() {
  console.log('GPSBearingCharacteristic on notify');
};

MagHeadingCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('MagHeadingCharacteristic subscribe');
 
  this.counter = 0;
  this.changeInterval = setInterval(function() {
    var data = new Buffer(this.counter + '', 'utf-8');
    data.write(this.counter+'');
    // data.writeUInt32LE(this.counter, 0);
 
    console.log('MagHeadingCharacteristic update value: ' + this.counter);
    updateValueCallback(data);
    this.counter++;
  }.bind(this), 500);
};
 
MagHeadingCharacteristic.prototype.onUnsubscribe = function() {
  console.log('MagHeadingCharacteristic unsubscribe');
 
  if (this.changeInterval) {
    clearInterval(this.changeInterval);
    this.changeInterval = null;
  }
};
 
MagHeadingCharacteristic.prototype.onNotify = function() {
  console.log('MagHeadingCharacteristic on notify');
};

WatSpeedCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('WatSpeedCharacteristic subscribe');
 
  this.counter = 0;
  this.changeInterval = setInterval(function() {
    var data = new Buffer(this.counter + '', 'utf-8');
    data.write(this.counter+'');
    // data.writeUInt32LE(this.counter, 0);
 
    console.log('WatSpeedCharacteristic update value: ' + this.counter);
    updateValueCallback(data);
    this.counter++;
  }.bind(this), 500);
};
 
WatSpeedCharacteristic.prototype.onUnsubscribe = function() {
  console.log('WatSpeedCharacteristic unsubscribe');
 
  if (this.changeInterval) {
    clearInterval(this.changeInterval);
    this.changeInterval = null;
  }
};
 
WatSpeedCharacteristic.prototype.onNotify = function() {
  console.log('WatSpeedCharacteristic on notify');
};

SendDataCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('SendDataCharacteristic subscribe');
 
  this.counter = 0;
  this.changeInterval = setInterval(function() {
    var data = new Buffer(this.counter + '', 'utf-8');
    data.write(this.counter+'');
    // data.writeUInt32LE(this.counter, 0);
 
    console.log('SendDataCharacteristic update value: ' + this.counter);
    updateValueCallback(data);
    this.counter++;
  }.bind(this), 500);
};
 
SendDataCharacteristic.prototype.onUnsubscribe = function() {
  console.log('SendDataCharacteristic unsubscribe');
 
  if (this.changeInterval) {
    clearInterval(this.changeInterval);
    this.changeInterval = null;
  }
};
 
SendDataCharacteristic.prototype.onNotify = function() {
  console.log('SendDataCharacteristic on notify');
};

var finalData = '';

SendDataCharacteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback) {
  if (offset) {
    callback(this.RESULT_ATTR_NOT_LONG);
  }
  // else if (data.length !== 2) {
  //   callback(this.RESULT_INVALID_ATTRIBUTE_LENGTH);
  // }
  else {
    var receivedData = data.toString('utf8');
    if (receivedData == '==EOM==') {
      console.log(finalData);
      finalData = '';
    } else {
      finalData += receivedData;
    }
    callback(this.RESULT_SUCCESS);
  }
};
 
function AnemoService() {
  AnemoService.super_.call(this, {
    uuid: 'fffffffffffffffffffffffffffffff0',
    characteristics: [
      new SendDataCharacteristic(),
      new AWACharacteristic(),
      new TWACharacteristic(),
      new AWSCharacteristic(),
      new TWSCharacteristic(),
      new TWDirCharacteristic(),
      new GPSSpeedCharacteristic(),
      new GPSBearingCharacteristic(),
      new MagHeadingCharacteristic(),
      new WatSpeedCharacteristic()
    ]
  });
}
 
util.inherits(AnemoService, BlenoPrimaryService);
 
bleno.on('stateChange', function(state) {
  console.log('on -> stateChange: ' + state);
 
  if (state === 'poweredOn') {
    bleno.startAdvertising('anemomind', ['fffffffffffffffffffffffffffffff0']);
  } else {
    bleno.stopAdvertising();
  }
});
 
bleno.on('advertisingStart', function(error) {
  console.log('on -> advertisingStart: ' + (error ? 'error ' + error : 'success'));
 
  if (!error) {
    bleno.setServices([
      new AnemoService()
    ]);
  }
});
 
bleno.on('advertisingStop', function() {
  console.log('on -> advertisingStop');
});
 
bleno.on('servicesSet', function() {
  console.log('on -> servicesSet');
});