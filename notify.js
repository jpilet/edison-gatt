var util = require('util');

var bleno = require('bleno');
var loremIpsum = require('lorem-ipsum');
var anemoService = require('./anemomind-service');

var BlenoPrimaryService = bleno.PrimaryService;
var BlenoCharacteristic = bleno.Characteristic;

var anemoService = new anemoService();


console.log('starting bleno');


bleno.on('stateChange', function(state) {
  console.log('on -> stateChange: ' + state);

  if (state === 'poweredOn') {
    bleno.startAdvertising('Anemomind Service', [anemoService.uuid]);
  } else {
    bleno.stopAdvertising();
  }
});



bleno.on('advertisingStart', function(error) {
  console.log('on -> advertisingStart: ' + (error ? 'error ' + error : 'success'));

  if (!error) {
    bleno.setServices([
      anemoService
    ]);
  }
});

bleno.on('advertisingStop', function() {
  console.log('on -> advertisingStop');
});

bleno.on('servicesSet', function() {
  console.log('on -> servicesSet');
});