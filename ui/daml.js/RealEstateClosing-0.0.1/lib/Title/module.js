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
var Payment = require('../Payment/module');


exports.TitleReport = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({house: damlTypes.ContractId(House.House).decoder, reportDetails: damlTypes.Text.decoder, passed: damlTypes.Bool.decoder, }); }),
  encode: function (__typed__) {
  return {
    house: damlTypes.ContractId(House.House).encode(__typed__.house),
    reportDetails: damlTypes.Text.encode(__typed__.reportDetails),
    passed: damlTypes.Bool.encode(__typed__.passed),
  };
}
,
};



exports.NotifyCityClerk = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.CreateReport = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({details: damlTypes.Text.decoder, pass: damlTypes.Bool.decoder, fee: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    details: damlTypes.Text.encode(__typed__.details),
    pass: damlTypes.Bool.encode(__typed__.pass),
    fee: damlTypes.Numeric(10).encode(__typed__.fee),
  };
}
,
};



exports.Title = damlTypes.assembleTemplate(
{
  templateId: '9044cf740f5f9aa0a101470e27cc01cea6bc30b6c22e6d57ffcf2372061b9300:Title:Title',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({admin: damlTypes.Party.decoder, house: damlTypes.ContractId(House.House).decoder, client: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    admin: damlTypes.Party.encode(__typed__.admin),
    house: damlTypes.ContractId(House.House).encode(__typed__.house),
    client: damlTypes.Party.encode(__typed__.client),
  };
}
,
  CreateReport: {
    template: function () { return exports.Title; },
    choiceName: 'CreateReport',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateReport.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateReport.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Payment.Payable), exports.TitleReport).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Payment.Payable), exports.TitleReport).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.Title; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  NotifyCityClerk: {
    template: function () { return exports.Title; },
    choiceName: 'NotifyCityClerk',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.NotifyCityClerk.decoder; }),
    argumentEncode: function (__typed__) { return exports.NotifyCityClerk.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.Title);

