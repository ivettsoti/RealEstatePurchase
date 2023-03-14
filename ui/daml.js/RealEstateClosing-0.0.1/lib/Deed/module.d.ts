// Generated from Deed.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as House from '../House/module';

export declare type UpdateDeed = {
  inpHouse: damlTypes.ContractId<House.House>;
  newOwner: damlTypes.Party;
};

export declare const UpdateDeed:
  damlTypes.Serializable<UpdateDeed> & {
  }
;


export declare type Deed = {
  issuer: damlTypes.Party;
  owner: damlTypes.Party;
  house: damlTypes.ContractId<House.House>;
};

export declare interface DeedInterface {
  Archive: damlTypes.Choice<Deed, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, Deed.Key> & damlTypes.ChoiceFrom<damlTypes.Template<Deed, Deed.Key>>;
  UpdateDeed: damlTypes.Choice<Deed, UpdateDeed, damlTypes.ContractId<Deed>, Deed.Key> & damlTypes.ChoiceFrom<damlTypes.Template<Deed, Deed.Key>>;
}
export declare const Deed:
  damlTypes.Template<Deed, Deed.Key, '9044cf740f5f9aa0a101470e27cc01cea6bc30b6c22e6d57ffcf2372061b9300:Deed:Deed'> &
  damlTypes.ToInterface<Deed, never> &
  DeedInterface;

export declare namespace Deed {
  export type Key = damlTypes.Party
  export type CreateEvent = damlLedger.CreateEvent<Deed, Deed.Key, typeof Deed.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Deed, typeof Deed.templateId>
  export type Event = damlLedger.Event<Deed, Deed.Key, typeof Deed.templateId>
  export type QueryResult = damlLedger.QueryResult<Deed, Deed.Key, typeof Deed.templateId>
}



export declare type CreateDeed = {
  h: damlTypes.ContractId<House.House>;
  newOwner: damlTypes.Party;
};

export declare const CreateDeed:
  damlTypes.Serializable<CreateDeed> & {
  }
;


export declare type CityClerk = {
  clerk: damlTypes.Party;
};

export declare interface CityClerkInterface {
  CreateDeed: damlTypes.Choice<CityClerk, CreateDeed, damlTypes.ContractId<Deed>, CityClerk.Key> & damlTypes.ChoiceFrom<damlTypes.Template<CityClerk, CityClerk.Key>>;
  Archive: damlTypes.Choice<CityClerk, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, CityClerk.Key> & damlTypes.ChoiceFrom<damlTypes.Template<CityClerk, CityClerk.Key>>;
}
export declare const CityClerk:
  damlTypes.Template<CityClerk, CityClerk.Key, '9044cf740f5f9aa0a101470e27cc01cea6bc30b6c22e6d57ffcf2372061b9300:Deed:CityClerk'> &
  damlTypes.ToInterface<CityClerk, never> &
  CityClerkInterface;

export declare namespace CityClerk {
  export type Key = damlTypes.Party
  export type CreateEvent = damlLedger.CreateEvent<CityClerk, CityClerk.Key, typeof CityClerk.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<CityClerk, typeof CityClerk.templateId>
  export type Event = damlLedger.Event<CityClerk, CityClerk.Key, typeof CityClerk.templateId>
  export type QueryResult = damlLedger.QueryResult<CityClerk, CityClerk.Key, typeof CityClerk.templateId>
}


