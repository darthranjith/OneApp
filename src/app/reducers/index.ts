import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {cardReducer, ICardState} from './card-status.reducer';
import {ISectionState, sectionReducer} from './section-status.reducer';


export interface State {
card: ICardState;
section: ISectionState;
}

export const reducers: ActionReducerMap<State> = {
  card: cardReducer,
  section : sectionReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
