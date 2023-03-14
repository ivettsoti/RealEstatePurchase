// Generated from Title.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as CityRecords from '../CityRecords/module';
import * as House from '../House/module';
import * as Payment from '../Payment/module';

export declare type TitleReport = {
  house: damlTypes.ContractId<House.House>;
  reportDetails: string;
  passed: boolean;
};

export declare const TitleReport:
  damlTypes.Serializable<TitleReport> & {
  }
;


export declare type NotifyCityClerk = {
  cityClerk: damlTypes.Party;
};

export declare const NotifyCityClerk:
  damlTypes.Serializable<NotifyCityClerk> & {
  }
;


export declare type CreateReport = {
  details: string;
  pass: boolean;
  fee: damlTypes.Numeric;
};

export declare const CreateReport:
  damlTypes.Serializable<CreateReport> & {
  }
;


export declare type Title = {
  admin: damlTypes.Party;
  house: damlTypes.ContractId<House.House>;
  client: damlTypes.Party;
};

export declare interface TitleInterface {
  CreateReport: damlTypes.Choice<Title, CreateReport, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<Payment.Payable>, TitleReport>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Title, undefined>>;
  Archive: damlTypes.Choice<Title, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Title, undefined>>;
  NotifyCityClerk: damlTypes.Choice<Title, NotifyCityClerk, damlTypes.ContractId<CityRecords.CityRecordNotification>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Title, undefined>>;
}
export declare const Title:
  damlTypes.Template<Title, undefined, 'ae8a7eeaf369df814f7aa2de7d5301fd55ef72c9ddd72dc44f8663372d319415:Title:Title'> &
  damlTypes.ToInterface<Title, never> &
  TitleInterface;

export declare namespace Title {
  export type CreateEvent = damlLedger.CreateEvent<Title, undefined, typeof Title.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Title, typeof Title.templateId>
  export type Event = damlLedger.Event<Title, undefined, typeof Title.templateId>
  export type QueryResult = damlLedger.QueryResult<Title, undefined, typeof Title.templateId>
}


