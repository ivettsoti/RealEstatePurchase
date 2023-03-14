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

var Payment = require('../Payment/module');


exports.HouseOffer = damlTypes.assembleTemplate(
{
  templateId: '9044cf740f5f9aa0a101470e27cc01cea6bc30b6c22e6d57ffcf2372061b9300:House:HouseOffer',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Numeric(10)).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Numeric(10)).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({bidder: damlTypes.Party.decoder, bid: damlTypes.Numeric(10).decoder, houseAd: exports.HouseAd.decoder, }); }),
  encode: function (__typed__) {
  return {
    bidder: damlTypes.Party.encode(__typed__.bidder),
    bid: damlTypes.Numeric(10).encode(__typed__.bid),
    houseAd: exports.HouseAd.encode(__typed__.houseAd),
  };
}
,
  Archive: {
    template: function () { return exports.HouseOffer; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.HouseOffer);



exports.AcceptOffer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({offers: damlTypes.List(exports.HouseOffer).decoder, }); }),
  encode: function (__typed__) {
  return {
    offers: damlTypes.List(exports.HouseOffer).encode(__typed__.offers),
  };
}
,
};



exports.HouseAd = damlTypes.assembleTemplate(
{
  templateId: '9044cf740f5f9aa0a101470e27cc01cea6bc30b6c22e6d57ffcf2372061b9300:House:HouseAd',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({owner: damlTypes.Party.decoder, address: damlTypes.Text.decoder, price: damlTypes.Numeric(10).decoder, created: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    owner: damlTypes.Party.encode(__typed__.owner),
    address: damlTypes.Text.encode(__typed__.address),
    price: damlTypes.Numeric(10).encode(__typed__.price),
    created: damlTypes.Time.encode(__typed__.created),
  };
}
,
  Archive: {
    template: function () { return exports.HouseAd; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AcceptOffer: {
    template: function () { return exports.HouseAd; },
    choiceName: 'AcceptOffer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptOffer.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptOffer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.ContractId(Payment.Payable), damlTypes.ContractId(Payment.Payable), exports.HouseOffer).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.ContractId(Payment.Payable), damlTypes.ContractId(Payment.Payable), exports.HouseOffer).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.HouseAd);



exports.CreateAd = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({price: damlTypes.Numeric(10).decoder, created: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    price: damlTypes.Numeric(10).encode(__typed__.price),
    created: damlTypes.Time.encode(__typed__.created),
  };
}
,
};



exports.House = damlTypes.assembleTemplate(
{
  templateId: '9044cf740f5f9aa0a101470e27cc01cea6bc30b6c22e6d57ffcf2372061b9300:House:House',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({owner: damlTypes.Party.decoder, address: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    owner: damlTypes.Party.encode(__typed__.owner),
    address: damlTypes.Text.encode(__typed__.address),
  };
}
,
  Archive: {
    template: function () { return exports.House; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  CreateAd: {
    template: function () { return exports.House; },
    choiceName: 'CreateAd',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateAd.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateAd.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.HouseAd).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.HouseAd).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.House);

