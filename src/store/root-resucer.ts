import { combineReducers } from '@reduxjs/toolkit';
import { ReducerNameSpaces } from '../const/consts';
import dataSlice from './data-slice-reducer/data-slice-reducer';
import statesSlice from './reducer';


export const rootReducer = combineReducers({
  [ReducerNameSpaces.states]: statesSlice.reducer,
  [ReducerNameSpaces.data]: dataSlice.reducer,
});
