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


exports.Dismiss = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.Receipt = damlTypes.assembleTemplate(
{
  templateId: 'ae8a7eeaf369df814f7aa2de7d5301fd55ef72c9ddd72dc44f8663372d319415:Payment:Receipt',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({amount: damlTypes.Numeric(10).decoder, from: damlTypes.Party.decoder, to: damlTypes.Party.decoder, transactionId: damlTypes.Text.decoder, received: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    from: damlTypes.Party.encode(__typed__.from),
    to: damlTypes.Party.encode(__typed__.to),
    transactionId: damlTypes.Text.encode(__typed__.transactionId),
    received: damlTypes.Time.encode(__typed__.received),
  };
}
,
  Archive: {
    template: function () { return exports.Receipt; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Dismiss: {
    template: function () { return exports.Receipt; },
    choiceName: 'Dismiss',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Dismiss.decoder; }),
    argumentEncode: function (__typed__) { return exports.Dismiss.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.Receipt);



exports.Receive = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.PaymentClaim = damlTypes.assembleTemplate(
{
  templateId: 'ae8a7eeaf369df814f7aa2de7d5301fd55ef72c9ddd72dc44f8663372d319415:Payment:PaymentClaim',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({amount: damlTypes.Numeric(10).decoder, from: damlTypes.Party.decoder, to: damlTypes.Party.decoder, transactionId: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    from: damlTypes.Party.encode(__typed__.from),
    to: damlTypes.Party.encode(__typed__.to),
    transactionId: damlTypes.Text.encode(__typed__.transactionId),
  };
}
,
  Receive: {
    template: function () { return exports.PaymentClaim; },
    choiceName: 'Receive',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Receive.decoder; }),
    argumentEncode: function (__typed__) { return exports.Receive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Receipt).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Receipt).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.PaymentClaim; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.PaymentClaim);



exports.CancelPayment = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
};



exports.ClaimPaid = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({transactionId: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    transactionId: damlTypes.Text.encode(__typed__.transactionId),
  };
}
,
};



exports.Payable = damlTypes.assembleTemplate(
{
  templateId: 'ae8a7eeaf369df814f7aa2de7d5301fd55ef72c9ddd72dc44f8663372d319415:Payment:Payable',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({amount: damlTypes.Numeric(10).decoder, from: damlTypes.Party.decoder, to: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    from: damlTypes.Party.encode(__typed__.from),
    to: damlTypes.Party.encode(__typed__.to),
  };
}
,
  ClaimPaid: {
    template: function () { return exports.Payable; },
    choiceName: 'ClaimPaid',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ClaimPaid.decoder; }),
    argumentEncode: function (__typed__) { return exports.ClaimPaid.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.PaymentClaim).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.PaymentClaim).encode(__typed__); },
  },
  CancelPayment: {
    template: function () { return exports.Payable; },
    choiceName: 'CancelPayment',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CancelPayment.decoder; }),
    argumentEncode: function (__typed__) { return exports.CancelPayment.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.Payable; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.Payable);

