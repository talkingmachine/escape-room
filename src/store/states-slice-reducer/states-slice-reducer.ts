import { setCurrentPlace, setFilterDifficultLevel, setFilterQuestType } from '../actions';
import { ReducerNameSpaces, difficultLevels, questTypes } from '../../const/consts';
import { Place } from '../../types/types';
import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  currentFilters: {
    questType: questTypes;
    difficultLevel: difficultLevels;
  };
  currentPlace: Place;
}

const initialState: InitialStateType = {
  currentFilters: {
    questType: questTypes.all,
    difficultLevel: difficultLevels.any
  },
  currentPlace: {
    'id': '1',
    'location': {
      'address': 'Набережная реки Карповки, 5П',
      'coords': [
        59.968310,
        30.317403
      ]
    },
    'slots': {
      'today': [
        {
          'time': '14:00',
          'isAvailable': false
        }
      ],
      'tomorrow': [
        {
          'time': '14:00',
          'isAvailable': false
        }
      ]
    }
  },
};

const statesSlice = createSlice({
  name: ReducerNameSpaces.states,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(setFilterQuestType, (state, action) => {
        state.currentFilters.questType = action.payload;
      })
      .addCase(setFilterDifficultLevel, (state, action) => {
        state.currentFilters.difficultLevel = action.payload;
      })
      .addCase(setCurrentPlace, (state, action) => {
        state.currentPlace = action.payload;
      });
  },
});

export default statesSlice;
