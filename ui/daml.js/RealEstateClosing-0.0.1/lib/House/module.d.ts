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

export declare type HouseOffer = {
  bidder: damlTypes.Party;
  bid: damlTypes.Numeric;
  houseAd: HouseAd;
};

export declare interface HouseOfferInterface {
  Archive: damlTypes.Choice<HouseOffer, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, HouseOffer.Key> & damlTypes.ChoiceFrom<damlTypes.Template<HouseOffer, HouseOffer.Key>>;
}
export declare const HouseOffer:
  damlTypes.Template<HouseOffer, HouseOffer.Key, '9044cf740f5f9aa0a101470e27cc01cea6bc30b6c22e6d57ffcf2372061b9300:House:HouseOffer'> &
  damlTypes.ToInterface<HouseOffer, never> &
  HouseOfferInterface;

export declare namespace HouseOffer {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Party, damlTypes.Numeric>
  export type CreateEvent = damlLedger.CreateEvent<HouseOffer, HouseOffer.Key, typeof HouseOffer.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<HouseOffer, typeof HouseOffer.templateId>
  export type Event = damlLedger.Event<HouseOffer, HouseOffer.Key, typeof HouseOffer.templateId>
  export type QueryResult = damlLedger.QueryResult<HouseOffer, HouseOffer.Key, typeof HouseOffer.templateId>
}



export declare type AcceptOffer = {
  offers: HouseOffer[];
};

export declare const AcceptOffer:
  damlTypes.Serializable<AcceptOffer> & {
  }
;


export declare type HouseAd = {
  owner: damlTypes.Party;
  address: string;
  price: damlTypes.Numeric;
  created: damlTypes.Time;
};

export declare interface HouseAdInterface {
  Archive: damlTypes.Choice<HouseAd, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, HouseAd.Key> & damlTypes.ChoiceFrom<damlTypes.Template<HouseAd, HouseAd.Key>>;
  AcceptOffer: damlTypes.Choice<HouseAd, AcceptOffer, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<damlTypes.ContractId<Payment.Payable>, damlTypes.ContractId<Payment.Payable>, HouseOffer>, HouseAd.Key> & damlTypes.ChoiceFrom<damlTypes.Template<HouseAd, HouseAd.Key>>;
}
export declare const HouseAd:
  damlTypes.Template<HouseAd, HouseAd.Key, '9044cf740f5f9aa0a101470e27cc01cea6bc30b6c22e6d57ffcf2372061b9300:House:HouseAd'> &
  damlTypes.ToInterface<HouseAd, never> &
  HouseAdInterface;

export declare namespace HouseAd {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Party, string>
  export type CreateEvent = damlLedger.CreateEvent<HouseAd, HouseAd.Key, typeof HouseAd.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<HouseAd, typeof HouseAd.templateId>
  export type Event = damlLedger.Event<HouseAd, HouseAd.Key, typeof HouseAd.templateId>
  export type QueryResult = damlLedger.QueryResult<HouseAd, HouseAd.Key, typeof HouseAd.templateId>
}



export declare type CreateAd = {
  price: damlTypes.Numeric;
  created: damlTypes.Time;
};

export declare const CreateAd:
  damlTypes.Serializable<CreateAd> & {
  }
;


export declare type House = {
  owner: damlTypes.Party;
  address: string;
};

export declare interface HouseInterface {
  Archive: damlTypes.Choice<House, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<House, undefined>>;
  CreateAd: damlTypes.Choice<House, CreateAd, damlTypes.ContractId<HouseAd>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<House, undefined>>;
}
export declare const House:
  damlTypes.Template<House, undefined, '9044cf740f5f9aa0a101470e27cc01cea6bc30b6c22e6d57ffcf2372061b9300:House:House'> &
  damlTypes.ToInterface<House, never> &
  HouseInterface;

export declare namespace House {
  export type CreateEvent = damlLedger.CreateEvent<House, undefined, typeof House.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<House, typeof House.templateId>
  export type Event = damlLedger.Event<House, undefined, typeof House.templateId>
  export type QueryResult = damlLedger.QueryResult<House, undefined, typeof House.templateId>
}


