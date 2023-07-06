import { createReducer, createSelector, on, } from '@ngrx/store';
import * as actions from './ui.actions';
import { AppState } from './../app.reducer';
export interface State {
    isLoading: boolean;
}

export const initialState: State = {
   isLoading: false,
}

const _uiReducer = createReducer(
    initialState,
    on(actions.isLoading,   state => ({ ...state, isLoading: true})),
    on(actions.stopLoading, state => ({ ...state, isLoading: false})),
);

export function uiReducer(state, action) {
    return _uiReducer(state, action);
}

export const getIsLoading = createSelector(
  (state: AppState) => state.ui,
  (ui) => ui.isLoading
);

