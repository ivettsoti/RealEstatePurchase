"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');

var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

var House = require('../House/module');


exports.UpdateDeed = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.CityRecordNotification = damlTypes.assembleTemplate(
{
  templateId: 'ae8a7eeaf369df814f7aa2de7d5301fd55ef72c9ddd72dc44f8663372d319415:CityRecords:CityRecordNotification',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({from: damlTypes.Party.decoder, to: damlTypes.Party.decoder, house: damlTypes.ContractId(House.House).decoder, newOwner: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    from: damlTypes.Party.encode(__typed__.from),
    to: damlTypes.Party.encode(__typed__.to),
    house: damlTypes.ContractId(House.House).encode(__typed__.house),
    newOwner: damlTypes.Party.encode(__typed__.newOwner),
  };
}
,
  Archive: {
    template: function () { return exports.CityRecordNotification; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  UpdateDeed: {
    template: function () { return exports.CityRecordNotification; },
    choiceName: 'UpdateDeed',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.UpdateDeed.decoder; }),
    argumentEncode: function (__typed__) { return exports.UpdateDeed.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(House.House).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(House.House).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.CityRecordNotification);



exports.CreateHouse = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newOwner: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    newOwner: damlTypes.Party.encode(__typed__.newOwner),
  };
}
,
};



exports.CityRecords = damlTypes.assembleTemplate(
{
  templateId: 'ae8a7eeaf369df814f7aa2de7d5301fd55ef72c9ddd72dc44f8663372d319415:CityRecords:CityRecords',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({clerk: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    clerk: damlTypes.Party.encode(__typed__.clerk),
  };
}
,
  CreateHouse: {
    template: function () { return exports.CityRecords; },
    choiceName: 'CreateHouse',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateHouse.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateHouse.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(House.House).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(House.House).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.CityRecords; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.CityRecords);

