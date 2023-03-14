// Generated from House.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Payment from '../Payment/module';

export declare type WithdrawOffer = {
};

export declare const WithdrawOffer:
  damlTypes.Serializable<WithdrawOffer> & {
  }
;


export declare type RejectOffer = {
};

export declare const RejectOffer:
  damlTypes.Serializable<RejectOffer> & {
  }
;


export declare type ChangeOffer = {
  newPrice: damlTypes.Numeric;
};

export declare const ChangeOffer:
  damlTypes.Serializable<ChangeOffer> & {
  }
;


export declare type AcceptOffer = {
};

export declare const AcceptOffer:
  damlTypes.Serializable<AcceptOffer> & {
  }
;


export declare type HouseOffer = {
  bidder: damlTypes.Party;
  bid: damlTypes.Numeric;
  houseAd: HouseListing;
};

export declare interface HouseOfferInterface {
  AcceptOffer: damlTypes.Choice<HouseOffer, AcceptOffer, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<Payment.Payable>, damlTypes.ContractId<Payment.Payable>>, HouseOffer.Key> & damlTypes.ChoiceFrom<damlTypes.Template<HouseOffer, HouseOffer.Key>>;
  ChangeOffer: damlTypes.Choice<HouseOffer, ChangeOffer, damlTypes.ContractId<HouseOffer>, HouseOffer.Key> & damlTypes.ChoiceFrom<damlTypes.Template<HouseOffer, HouseOffer.Key>>;
  RejectOffer: damlTypes.Choice<HouseOffer, RejectOffer, {}, HouseOffer.Key> & damlTypes.ChoiceFrom<damlTypes.Template<HouseOffer, HouseOffer.Key>>;
  Archive: damlTypes.Choice<HouseOffer, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, HouseOffer.Key> & damlTypes.ChoiceFrom<damlTypes.Template<HouseOffer, HouseOffer.Key>>;
  WithdrawOffer: damlTypes.Choice<HouseOffer, WithdrawOffer, {}, HouseOffer.Key> & damlTypes.ChoiceFrom<damlTypes.Template<HouseOffer, HouseOffer.Key>>;
}
export declare const HouseOffer:
  damlTypes.Template<HouseOffer, HouseOffer.Key, 'ae8a7eeaf369df814f7aa2de7d5301fd55ef72c9ddd72dc44f8663372d319415:House:HouseOffer'> &
  damlTypes.ToInterface<HouseOffer, never> &
  HouseOfferInterface;

export declare namespace HouseOffer {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Party, HouseListing>
  export type CreateEvent = damlLedger.CreateEvent<HouseOffer, HouseOffer.Key, typeof HouseOffer.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<HouseOffer, typeof HouseOffer.templateId>
  export type Event = damlLedger.Event<HouseOffer, HouseOffer.Key, typeof HouseOffer.templateId>
  export type QueryResult = damlLedger.QueryResult<HouseOffer, HouseOffer.Key, typeof HouseOffer.templateId>
}



export declare type TakeDownAd = {
};

export declare const TakeDownAd:
  damlTypes.Serializable<TakeDownAd> & {
  }
;


export declare type DecreasePrice = {
  newPrice: damlTypes.Numeric;
};

export declare const DecreasePrice:
  damlTypes.Serializable<DecreasePrice> & {
  }
;


export declare type IncreasePrice = {
  newPrice: damlTypes.Numeric;
};

export declare const IncreasePrice:
  damlTypes.Serializable<IncreasePrice> & {
  }
;


export declare type HouseListing = {
  owner: damlTypes.Party;
  address: string;
  price: damlTypes.Numeric;
  created: damlTypes.Time;
};

export declare interface HouseListingInterface {
  IncreasePrice: damlTypes.Choice<HouseListing, IncreasePrice, damlTypes.ContractId<HouseListing>, HouseListing.Key> & damlTypes.ChoiceFrom<damlTypes.Template<HouseListing, HouseListing.Key>>;
  DecreasePrice: damlTypes.Choice<HouseListing, DecreasePrice, damlTypes.ContractId<HouseListing>, HouseListing.Key> & damlTypes.ChoiceFrom<damlTypes.Template<HouseListing, HouseListing.Key>>;
  TakeDownAd: damlTypes.Choice<HouseListing, TakeDownAd, {}, HouseListing.Key> & damlTypes.ChoiceFrom<damlTypes.Template<HouseListing, HouseListing.Key>>;
  Archive: damlTypes.Choice<HouseListing, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, HouseListing.Key> & damlTypes.ChoiceFrom<damlTypes.Template<HouseListing, HouseListing.Key>>;
}
export declare const HouseListing:
  damlTypes.Template<HouseListing, HouseListing.Key, 'ae8a7eeaf369df814f7aa2de7d5301fd55ef72c9ddd72dc44f8663372d319415:House:HouseListing'> &
  damlTypes.ToInterface<HouseListing, never> &
  HouseListingInterface;

export declare namespace HouseListing {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Party, string>
  export type CreateEvent = damlLedger.CreateEvent<HouseListing, HouseListing.Key, typeof HouseListing.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<HouseListing, typeof HouseListing.templateId>
  export type Event = damlLedger.Event<HouseListing, HouseListing.Key, typeof HouseListing.templateId>
  export type QueryResult = damlLedger.QueryResult<HouseListing, HouseListing.Key, typeof HouseListing.templateId>
}



export declare type UpdateOwner = {
  newOwner: damlTypes.Party;
};

export declare const UpdateOwner:
  damlTypes.Serializable<UpdateOwner> & {
  }
;


export declare type CreateAd = {
  price: damlTypes.Numeric;
  created: damlTypes.Time;
};

export declare const CreateAd:
  damlTypes.Serializable<CreateAd> & {
  }
;


export declare type House = {
  issuer: damlTypes.Party;
  owner: damlTypes.Party;
  address: string;
  deed: Deed;
};

export declare interface HouseInterface {
  CreateAd: damlTypes.Choice<House, CreateAd, damlTypes.ContractId<HouseListing>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<House, undefined>>;
  UpdateOwner: damlTypes.Choice<House, UpdateOwner, damlTypes.ContractId<House>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<House, undefined>>;
  Archive: damlTypes.Choice<House, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<House, undefined>>;
}
export declare const House:
  damlTypes.Template<House, undefined, 'ae8a7eeaf369df814f7aa2de7d5301fd55ef72c9ddd72dc44f8663372d319415:House:House'> &
  damlTypes.ToInterface<House, never> &
  HouseInterface;

export declare namespace House {
  export type CreateEvent = damlLedger.CreateEvent<House, undefined, typeof House.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<House, typeof House.templateId>
  export type Event = damlLedger.Event<House, undefined, typeof House.templateId>
  export type QueryResult = damlLedger.QueryResult<House, undefined, typeof House.templateId>
}



export declare type Deed = {
  issuer: damlTypes.Party;
  owner: damlTypes.Party;
  transactionId: string;
};

export declare const Deed:
  damlTypes.Serializable<Deed> & {
  }
;

