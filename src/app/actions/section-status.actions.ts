import { Action } from '@ngrx/store';

export enum SectionStatusActionTypes {
  OpenSection = '[SectionStatus] Open Section',
  CloseSection = '[SectionStatus] Close Section'
}

export class OpenSection implements Action {
  readonly type = SectionStatusActionTypes.OpenSection;
}
export class CloseSection implements Action {
  readonly type = SectionStatusActionTypes.CloseSection;
}


export type SectionStatusActions = OpenSection | CloseSection;
