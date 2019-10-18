import { Action } from '@ngrx/store';

export enum CardStatusActionTypes {
  OpenCard = '[CardStatus] Open Card',
  CloseCard = '[CardStatus] Close Card'
}
export class OpenCard implements Action {
  readonly type = CardStatusActionTypes.OpenCard;
}
export class CloseCard implements Action {
  readonly type = CardStatusActionTypes.CloseCard;
}
export type CardStatusActions = OpenCard | CloseCard;
