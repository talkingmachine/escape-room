import { createAction } from '@reduxjs/toolkit';
import { difficultLevels, questTypes } from '../const/consts';
import { Place } from '../types/types';


export const setFilterQuestType = createAction<questTypes>('setFilterQuestType');
export const setFilterDifficultLevel = createAction<difficultLevels>('setFilterDifficultLevel');
export const setCurrentPlace = createAction<Place>('setCurrentPlace');
