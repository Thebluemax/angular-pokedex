import { createReducer, on } from '@ngrx/store';
import { write } from './screen.actions';
import { AppState } from '../../../../../app.reducer';


export interface State {
  message: string;
}

export const initialState: State = {
 message: '-- -- --',
};

 const _screenReducer = createReducer(
  initialState,
  on(write, (state, {message}) => ( {...state,message: message})
  )
);

export function screenReducer(state, action) {
  return _screenReducer(state, action);
}
