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


exports.WithdrawOffer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.RejectOffer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ChangeOffer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newPrice: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    newPrice: damlTypes.Numeric(10).encode(__typed__.newPrice),
  };
}
,
};



exports.AcceptOffer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.HouseOffer = damlTypes.assembleTemplate(
{
  templateId: 'ae8a7eeaf369df814f7aa2de7d5301fd55ef72c9ddd72dc44f8663372d319415:House:HouseOffer',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, exports.HouseListing).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, exports.HouseListing).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({bidder: damlTypes.Party.decoder, bid: damlTypes.Numeric(10).decoder, houseAd: exports.HouseListing.decoder, }); }),
  encode: function (__typed__) {
  return {
    bidder: damlTypes.Party.encode(__typed__.bidder),
    bid: damlTypes.Numeric(10).encode(__typed__.bid),
    houseAd: exports.HouseListing.encode(__typed__.houseAd),
  };
}
,
  AcceptOffer: {
    template: function () { return exports.HouseOffer; },
    choiceName: 'AcceptOffer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptOffer.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptOffer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Payment.Payable), damlTypes.ContractId(Payment.Payable)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Payment.Payable), damlTypes.ContractId(Payment.Payable)).encode(__typed__); },
  },
  ChangeOffer: {
    template: function () { return exports.HouseOffer; },
    choiceName: 'ChangeOffer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ChangeOffer.decoder; }),
    argumentEncode: function (__typed__) { return exports.ChangeOffer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.HouseOffer).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.HouseOffer).encode(__typed__); },
  },
  RejectOffer: {
    template: function () { return exports.HouseOffer; },
    choiceName: 'RejectOffer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RejectOffer.decoder; }),
    argumentEncode: function (__typed__) { return exports.RejectOffer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.HouseOffer; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  WithdrawOffer: {
    template: function () { return exports.HouseOffer; },
    choiceName: 'WithdrawOffer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.WithdrawOffer.decoder; }),
    argumentEncode: function (__typed__) { return exports.WithdrawOffer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.HouseOffer);



exports.TakeDownAd = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.DecreasePrice = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newPrice: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    newPrice: damlTypes.Numeric(10).encode(__typed__.newPrice),
  };
}
,
};



exports.IncreasePrice = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newPrice: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    newPrice: damlTypes.Numeric(10).encode(__typed__.newPrice),
  };
}
,
};



exports.HouseListing = damlTypes.assembleTemplate(
{
  templateId: 'ae8a7eeaf369df814f7aa2de7d5301fd55ef72c9ddd72dc44f8663372d319415:House:HouseListing',
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
  IncreasePrice: {
    template: function () { return exports.HouseListing; },
    choiceName: 'IncreasePrice',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.IncreasePrice.decoder; }),
    argumentEncode: function (__typed__) { return exports.IncreasePrice.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.HouseListing).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.HouseListing).encode(__typed__); },
  },
  DecreasePrice: {
    template: function () { return exports.HouseListing; },
    choiceName: 'DecreasePrice',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.DecreasePrice.decoder; }),
    argumentEncode: function (__typed__) { return exports.DecreasePrice.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.HouseListing).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.HouseListing).encode(__typed__); },
  },
  TakeDownAd: {
    template: function () { return exports.HouseListing; },
    choiceName: 'TakeDownAd',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.TakeDownAd.decoder; }),
    argumentEncode: function (__typed__) { return exports.TakeDownAd.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.HouseListing; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.HouseListing);



exports.UpdateOwner = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newOwner: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    newOwner: damlTypes.Party.encode(__typed__.newOwner),
  };
}
,
};



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
  templateId: 'ae8a7eeaf369df814f7aa2de7d5301fd55ef72c9ddd72dc44f8663372d319415:House:House',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, owner: damlTypes.Party.decoder, address: damlTypes.Text.decoder, deed: exports.Deed.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    owner: damlTypes.Party.encode(__typed__.owner),
    address: damlTypes.Text.encode(__typed__.address),
    deed: exports.Deed.encode(__typed__.deed),
  };
}
,
  CreateAd: {
    template: function () { return exports.House; },
    choiceName: 'CreateAd',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateAd.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateAd.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.HouseListing).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.HouseListing).encode(__typed__); },
  },
  UpdateOwner: {
    template: function () { return exports.House; },
    choiceName: 'UpdateOwner',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.UpdateOwner.decoder; }),
    argumentEncode: function (__typed__) { return exports.UpdateOwner.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.House).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.House).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.House; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.House);



exports.Deed = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, owner: damlTypes.Party.decoder, transactionId: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    owner: damlTypes.Party.encode(__typed__.owner),
    transactionId: damlTypes.Text.encode(__typed__.transactionId),
  };
}
,
};

