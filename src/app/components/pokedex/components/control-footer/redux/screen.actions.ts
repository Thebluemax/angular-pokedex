import { createAction, props } from '@ngrx/store';

export const write = createAction('[ScreenMessage Component] Write',
props<{ message: string;}>());
export const read = createAction('[ScreenMessage Component] Read');

