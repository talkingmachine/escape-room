import { createAction } from '@reduxjs/toolkit';
import { difficultLevels, questTypes } from '../const/consts';


export const setFilterQuestType = createAction<questTypes>('setFilterQuestType');
export const setFilterDifficultLevel = createAction<difficultLevels>('setFilterDifficultLevel');

// export const setTimerSeconds = createAction<number>('setTimerSeconds');
// export const setFutureSentence = createAction<string>('setFutureSentence');
// export const setFutureToCurrentSentence = createAction('setFutureToCurrentSentence');
// export const incMistakes = createAction('incMistakes');
// export const incCorrectAnswers = createAction('incCorrectAnswers');
// export const checkMaxInARow = createAction<number>('checkMaxInARow');
// export const resetStats = createAction('resetStats');
