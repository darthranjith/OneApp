import { Action } from '@ngrx/store';
import {CardStatusActionTypes} from '../actions/card-status.actions';


export const cardStatusFeatureKey = 'cardStatus';

export interface ICardState {
isCardOpen: boolean;
}

export const initialState: ICardState = {
 isCardOpen: false
};

export function cardReducer(state = initialState, action: Action): ICardState {
  switch (action.type) {
    case CardStatusActionTypes.CloseCard:
      return {...state, isCardOpen: false};
    case CardStatusActionTypes.OpenCard:
      return {...state, isCardOpen: true};
    default:
      return state;
  }
}
