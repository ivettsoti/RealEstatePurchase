// Generated from Payment.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type Dismiss = {
};

export declare const Dismiss:
  damlTypes.Serializable<Dismiss> & {
  }
;


export declare type Receipt = {
  amount: damlTypes.Numeric;
  from: damlTypes.Party;
  to: damlTypes.Party;
  transactionId: string;
  received: damlTypes.Time;
};

export declare interface ReceiptInterface {
  Archive: damlTypes.Choice<Receipt, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Receipt, undefined>>;
  Dismiss: damlTypes.Choice<Receipt, Dismiss, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Receipt, undefined>>;
}
export declare const Receipt:
  damlTypes.Template<Receipt, undefined, '9044cf740f5f9aa0a101470e27cc01cea6bc30b6c22e6d57ffcf2372061b9300:Payment:Receipt'> &
  damlTypes.ToInterface<Receipt, never> &
  ReceiptInterface;

export declare namespace Receipt {
  export type CreateEvent = damlLedger.CreateEvent<Receipt, undefined, typeof Receipt.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Receipt, typeof Receipt.templateId>
  export type Event = damlLedger.Event<Receipt, undefined, typeof Receipt.templateId>
  export type QueryResult = damlLedger.QueryResult<Receipt, undefined, typeof Receipt.templateId>
}



export declare type Receive = {
};

export declare const Receive:
  damlTypes.Serializable<Receive> & {
  }
;


export declare type PaymentClaim = {
  amount: damlTypes.Numeric;
  from: damlTypes.Party;
  to: damlTypes.Party;
  transactionId: string;
};

export declare interface PaymentClaimInterface {
  Receive: damlTypes.Choice<PaymentClaim, Receive, damlTypes.ContractId<Receipt>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PaymentClaim, undefined>>;
  Archive: damlTypes.Choice<PaymentClaim, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<PaymentClaim, undefined>>;
}
export declare const PaymentClaim:
  damlTypes.Template<PaymentClaim, undefined, '9044cf740f5f9aa0a101470e27cc01cea6bc30b6c22e6d57ffcf2372061b9300:Payment:PaymentClaim'> &
  damlTypes.ToInterface<PaymentClaim, never> &
  PaymentClaimInterface;

export declare namespace PaymentClaim {
  export type CreateEvent = damlLedger.CreateEvent<PaymentClaim, undefined, typeof PaymentClaim.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<PaymentClaim, typeof PaymentClaim.templateId>
  export type Event = damlLedger.Event<PaymentClaim, undefined, typeof PaymentClaim.templateId>
  export type QueryResult = damlLedger.QueryResult<PaymentClaim, undefined, typeof PaymentClaim.templateId>
}



export declare type CancelPayment = {
  reason: string;
};

export declare const CancelPayment:
  damlTypes.Serializable<CancelPayment> & {
  }
;


export declare type ClaimPaid = {
  transactionId: string;
};

export declare const ClaimPaid:
  damlTypes.Serializable<ClaimPaid> & {
  }
;


export declare type Payable = {
  amount: damlTypes.Numeric;
  from: damlTypes.Party;
  to: damlTypes.Party;
};

export declare interface PayableInterface {
  ClaimPaid: damlTypes.Choice<Payable, ClaimPaid, damlTypes.ContractId<PaymentClaim>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Payable, undefined>>;
  CancelPayment: damlTypes.Choice<Payable, CancelPayment, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Payable, undefined>>;
  Archive: damlTypes.Choice<Payable, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Payable, undefined>>;
}
export declare const Payable:
  damlTypes.Template<Payable, undefined, '9044cf740f5f9aa0a101470e27cc01cea6bc30b6c22e6d57ffcf2372061b9300:Payment:Payable'> &
  damlTypes.ToInterface<Payable, never> &
  PayableInterface;

export declare namespace Payable {
  export type CreateEvent = damlLedger.CreateEvent<Payable, undefined, typeof Payable.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Payable, typeof Payable.templateId>
  export type Event = damlLedger.Event<Payable, undefined, typeof Payable.templateId>
  export type QueryResult = damlLedger.QueryResult<Payable, undefined, typeof Payable.templateId>
}


