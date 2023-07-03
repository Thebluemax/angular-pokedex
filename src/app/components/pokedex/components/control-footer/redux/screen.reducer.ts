import { createReducer, createSelector, on } from '@ngrx/store';
import  *  as actions from './screen.actions';
import { AppState } from '../../../../../app.reducer';


export interface State {
  message: string;
}

export const initialState: State = {
 message: '-- -- --',
};

 const _screenReducer = createReducer(
  initialState,
  on(actions.write, (state, {message}) => ( {...state,message: message})
  )
);

export function screenReducer(state, action) {
  return _screenReducer(state, action);
}

export const getMessage = createSelector(
  (state: AppState) => state.screen, // Selecciona el estado ui
  (screen) => screen.message // Devuelve el valor de isLoading
);
