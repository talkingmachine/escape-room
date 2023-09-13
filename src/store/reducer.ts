import { createReducer } from '@reduxjs/toolkit';
import { setFilterDifficultLevel, setFilterQuestType } from './actions';
import { difficultLevels, questTypes } from '../const/consts';


const initialState = {
  currentFilters: {
    questType: questTypes.all,
    difficultLevel: difficultLevels.any
  },
  // sentences: {
  //   current: '',
  //   future: ''
  // },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFilterQuestType, (state, action) => {
      state.currentFilters.questType = action.payload;
    })
    .addCase(setFilterDifficultLevel, (state, action) => {
      state.currentFilters.difficultLevel = action.payload;
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
