// Generated from Deed.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
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
  damlTypes.Template<Deed, Deed.Key, '69d2362b21015bb9809d1edef1c2b4ccc34ab1499397000d8b0fd3fb365909b3:Deed:Deed'> &
  damlTypes.ToInterface<Deed, never> &
  DeedInterface;

export declare namespace Deed {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Party, damlTypes.Party>
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


export declare type CityRecords = {
  clerk: damlTypes.Party;
};

export declare interface CityRecordsInterface {
  CreateDeed: damlTypes.Choice<CityRecords, CreateDeed, damlTypes.ContractId<Deed>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CityRecords, undefined>>;
  Archive: damlTypes.Choice<CityRecords, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CityRecords, undefined>>;
}
export declare const CityRecords:
  damlTypes.Template<CityRecords, undefined, '69d2362b21015bb9809d1edef1c2b4ccc34ab1499397000d8b0fd3fb365909b3:Deed:CityRecords'> &
  damlTypes.ToInterface<CityRecords, never> &
  CityRecordsInterface;

export declare namespace CityRecords {
  export type CreateEvent = damlLedger.CreateEvent<CityRecords, undefined, typeof CityRecords.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<CityRecords, typeof CityRecords.templateId>
  export type Event = damlLedger.Event<CityRecords, undefined, typeof CityRecords.templateId>
  export type QueryResult = damlLedger.QueryResult<CityRecords, undefined, typeof CityRecords.templateId>
}


