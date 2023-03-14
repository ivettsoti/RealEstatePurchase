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

var pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 = require('@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

var House = require('../House/module');


exports.UpdateDeed = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({inpHouse: damlTypes.ContractId(House.House).decoder, newOwner: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    inpHouse: damlTypes.ContractId(House.House).encode(__typed__.inpHouse),
    newOwner: damlTypes.Party.encode(__typed__.newOwner),
  };
}
,
};



exports.Deed = damlTypes.assembleTemplate(
{
  templateId: '69d2362b21015bb9809d1edef1c2b4ccc34ab1499397000d8b0fd3fb365909b3:Deed:Deed',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Party).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Party).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, owner: damlTypes.Party.decoder, house: damlTypes.ContractId(House.House).decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    owner: damlTypes.Party.encode(__typed__.owner),
    house: damlTypes.ContractId(House.House).encode(__typed__.house),
  };
}
,
  Archive: {
    template: function () { return exports.Deed; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  UpdateDeed: {
    template: function () { return exports.Deed; },
    choiceName: 'UpdateDeed',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.UpdateDeed.decoder; }),
    argumentEncode: function (__typed__) { return exports.UpdateDeed.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Deed).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Deed).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.Deed);



exports.CreateDeed = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({h: damlTypes.ContractId(House.House).decoder, newOwner: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    h: damlTypes.ContractId(House.House).encode(__typed__.h),
    newOwner: damlTypes.Party.encode(__typed__.newOwner),
  };
}
,
};



exports.CityRecords = damlTypes.assembleTemplate(
{
  templateId: '69d2362b21015bb9809d1edef1c2b4ccc34ab1499397000d8b0fd3fb365909b3:Deed:CityRecords',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({clerk: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    clerk: damlTypes.Party.encode(__typed__.clerk),
  };
}
,
  CreateDeed: {
    template: function () { return exports.CityRecords; },
    choiceName: 'CreateDeed',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateDeed.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateDeed.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Deed).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Deed).encode(__typed__); },
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

