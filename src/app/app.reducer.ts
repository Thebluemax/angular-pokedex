import { ActionReducerMap } from '@ngrx/store';
import * as ui from './shared/ui.reducer';
import * as screenReducer from "./components/pokedex/components/control-footer/redux/screen.reducer";

export interface AppState {
   ui: ui.State,
   screen: screenReducer.State,
}

export const appReducers: ActionReducerMap<AppState> = {
   ui: ui.uiReducer as ActionReducerMap<AppState>['ui'],
   screen: screenReducer.screenReducer as ActionReducerMap<AppState>['screen'],
}


