var util = require('util'),
  bleno = require('bleno'),
  uuid = require('node-uuid'),
  BlenoPrimaryService = bleno.PrimaryService,
  BlenoCharacteristic = bleno.Characteristic,
  TWSCharacteristic = require('./anemomind-char-tws'),
  TWACharacteristic = require('./anemomind-char-twa'),
  VMGCharacteristic = require('./anemomind-char-vmg'),
  VMGTargetCharacteristic = require('./anemomind-char-vmg-target'),
  BoatSpeedCharacteristic = require('./anemomind-char-boat-speed'),
  HeelingCharacteristic = require('./anemomind-char-heeling'),
  COGCharacteristic = require('./anemomind-char-cog'),
  SOGCharacteristic = require('./anemomind-char-sog'),
  DataCharacteristic = require('./anemomind-char-data');


function AnemoService() {
  AnemoService.super_.call(this, {
    uuid: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0',
    characteristics: [
      new TWSCharacteristic(),
      new VMGCharacteristic(),
      new VMGTargetCharacteristic(),
      new BoatSpeedCharacteristic(),
      new TWACharacteristic(),
      new HeelingCharacteristic(),
      new COGCharacteristic(),
      new SOGCharacteristic(),
      new DataCharacteristic()
    ]
  });
}



util.inherits(AnemoService, BlenoPrimaryService);
module.exports = AnemoService;
