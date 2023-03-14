// Generated from CityRecords.daml
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
};

export declare const UpdateDeed:
  damlTypes.Serializable<UpdateDeed> & {
  }
;


export declare type CityRecordNotification = {
  from: damlTypes.Party;
  to: damlTypes.Party;
  house: damlTypes.ContractId<House.House>;
  newOwner: damlTypes.Party;
};

export declare interface CityRecordNotificationInterface {
  Archive: damlTypes.Choice<CityRecordNotification, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CityRecordNotification, undefined>>;
  UpdateDeed: damlTypes.Choice<CityRecordNotification, UpdateDeed, damlTypes.ContractId<House.House>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CityRecordNotification, undefined>>;
}
export declare const CityRecordNotification:
  damlTypes.Template<CityRecordNotification, undefined, 'ae8a7eeaf369df814f7aa2de7d5301fd55ef72c9ddd72dc44f8663372d319415:CityRecords:CityRecordNotification'> &
  damlTypes.ToInterface<CityRecordNotification, never> &
  CityRecordNotificationInterface;

export declare namespace CityRecordNotification {
  export type CreateEvent = damlLedger.CreateEvent<CityRecordNotification, undefined, typeof CityRecordNotification.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<CityRecordNotification, typeof CityRecordNotification.templateId>
  export type Event = damlLedger.Event<CityRecordNotification, undefined, typeof CityRecordNotification.templateId>
  export type QueryResult = damlLedger.QueryResult<CityRecordNotification, undefined, typeof CityRecordNotification.templateId>
}



export declare type CreateHouse = {
  newOwner: damlTypes.Party;
};

export declare const CreateHouse:
  damlTypes.Serializable<CreateHouse> & {
  }
;


export declare type CityRecords = {
  clerk: damlTypes.Party;
};

export declare interface CityRecordsInterface {
  CreateHouse: damlTypes.Choice<CityRecords, CreateHouse, damlTypes.ContractId<House.House>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CityRecords, undefined>>;
  Archive: damlTypes.Choice<CityRecords, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<CityRecords, undefined>>;
}
export declare const CityRecords:
  damlTypes.Template<CityRecords, undefined, 'ae8a7eeaf369df814f7aa2de7d5301fd55ef72c9ddd72dc44f8663372d319415:CityRecords:CityRecords'> &
  damlTypes.ToInterface<CityRecords, never> &
  CityRecordsInterface;

export declare namespace CityRecords {
  export type CreateEvent = damlLedger.CreateEvent<CityRecords, undefined, typeof CityRecords.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<CityRecords, typeof CityRecords.templateId>
  export type Event = damlLedger.Event<CityRecords, undefined, typeof CityRecords.templateId>
  export type QueryResult = damlLedger.QueryResult<CityRecords, undefined, typeof CityRecords.templateId>
}


