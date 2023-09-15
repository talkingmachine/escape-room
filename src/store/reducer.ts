import { createReducer } from '@reduxjs/toolkit';
import { setFilterDifficultLevel, setFilterQuestType } from './actions';
import { AuthorizationStatus, difficultLevels, questTypes } from '../const/consts';
import { checkAuthAction, loginAction } from './api-actions';


const initialState = {
  currentFilters: {
    questType: questTypes.all,
    difficultLevel: difficultLevels.any
  },
  authorizationStatus: AuthorizationStatus.NoAuth,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFilterQuestType, (state, action) => {
      state.currentFilters.questType = action.payload;
    })
    .addCase(setFilterDifficultLevel, (state, action) => {
      state.currentFilters.difficultLevel = action.payload;
    })
    .addCase(checkAuthAction.fulfilled, (state) => { // async actions
      state.authorizationStatus = AuthorizationStatus.Auth;
      console.log('auth fulfilled');
    })
    .addCase(checkAuthAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      console.log('auth rejected');
    })
    .addCase(loginAction.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      console.log('authorized first time');
    });

  // .addCase(setName, (state, action) => {
  //   state.name = action.payload;
  // })
  // .addCase(setTimerSeconds, (state, action) => {
  //   state.timerSeconds = action.payload;
  // })
  // .addCase(setFutureSentence, (state, action) => {
  //   state.sentences.future = action.payload;
  // })
  // .addCase(setFutureToCurrentSentence, (state) => {
  //   state.sentences.current = state.sentences.future;
  // })
  // .addCase(incMistakes, (state) => {
  //   state.mistakes += 1;
  // })
  // .addCase(incCorrectAnswers, (state) => {
  //   state.correctAnswers += 1;
  // })
  // .addCase(checkMaxInARow, (state, action) => {
  //   state.maxInARow = Math.max(state.maxInARow, action.payload);
  // })
  // .addCase(resetStats, (state) => {
  //   state.correctAnswers = 0;
  //   state.mistakes = 0;
  //   state.timerSeconds = 0;
  // });
});

export {reducer};
