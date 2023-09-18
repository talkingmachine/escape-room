import { createAction } from '@reduxjs/toolkit';
import { difficultLevels, questTypes } from '../const/consts';
import { Place } from '../types/types';


export const setFilterQuestType = createAction<questTypes>('setFilterQuestType');
export const setFilterDifficultLevel = createAction<difficultLevels>('setFilterDifficultLevel');
export const setCurrentPlace = createAction<Place>('setCurrentPlace');

// export const setTimerSeconds = createAction<number>('setTimerSeconds');
// export const setFutureSentence = createAction<string>('setFutureSentence');
// export const setFutureToCurrentSentence = createAction('setFutureToCurrentSentence');
// export const incMistakes = createAction('incMistakes');
// export const incCorrectAnswers = createAction('incCorrectAnswers');
// export const checkMaxInARow = createAction<number>('checkMaxInARow');
// export const resetStats = createAction('resetStats');
