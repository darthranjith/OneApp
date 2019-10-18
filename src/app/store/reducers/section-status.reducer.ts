import { Action } from '@ngrx/store';
import {SectionStatusActionTypes} from '../actions/section-status.actions';


export const sectionStatusFeatureKey = 'sectionStatus';

export interface ISectionState {
isSectionOpen: boolean;
}

export const initialState: ISectionState = {
isSectionOpen: false
};

export function sectionReducer(state = initialState, action: Action): ISectionState {
  switch (action.type) {
    case SectionStatusActionTypes.CloseSection:
      return {...state, isSectionOpen: false};
    case SectionStatusActionTypes.OpenSection:
      return {...state, isSectionOpen: true};
    default:
      return state;
  }
}
