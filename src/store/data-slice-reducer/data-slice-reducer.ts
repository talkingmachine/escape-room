
import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, ReducerNameSpaces, allowedDate, difficultLevels, questTypes } from '../../const/consts';
import { BookedQuest, Place, Quest, QuestPage } from '../../types/types';
import { checkAuthAction, getBookedQuests, getBookingInfo, getQuest, getQuestsList, loginAction } from '../api-actions';

type InitialStateType = {
  authorizationStatus: AuthorizationStatus;
  questsList: Quest[];
  questPage: QuestPage;
  bookingInfo: Place[];
  bookedQuests: BookedQuest[];
}

const initialState: InitialStateType = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  questsList: [
    {
      id: '1',
      title: 'Склеп',
      previewImg: 'https://{server-url}/static/quest/sklep.jpg',
      previewImgWebp: 'https://{server-url}/static/quest/sklep.webp',
      level: difficultLevels.hard,
      type: questTypes.detective,
      peopleMinMax: [1, 2]
    }
  ],
  questPage: {
    id: '1',
    title: 'Склеп',
    previewImg: 'https://{server-url}/static/quest/sklep.jpg',
    previewImgWebp: 'https://{server-url}/static/quest/sklep.webp',
    level: difficultLevels.easy,
    type: questTypes.detective,
    peopleMinMax: [ 5, 6 ],
    description: 'Средневековое кладбище таит в себе много страшных тайн. Местные жители говорят, что в склепе похоронен граф вампир, который по ночам выходит на охоту, чтобы испить человеческой крови. Через час солнце опустится за горизонт, успеете ли вы убить вампира и выбраться из склепа?',
    coverImg: 'https://{server-url}/static/quest/sklep@2x.jpg',
    coverImgWebp: 'https://{server-url}/static/quest/sklep@2x.webp'
  },
  bookingInfo: [
    {
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
    }
  ],
  bookedQuests: [
    {
      'date': allowedDate.today,
      'time': '14:00',
      'contactPerson': 'Oliver',
      'phone': '899911122233',
      'withChildren': true,
      'peopleCount': 3,
      'id': '0c5fa01d-e89c-478d-9b85-799cf4abe29f',
      'location': {
        'address': 'Набережная реки Карповки, 5П',
        'coords': [
          30.317359,
          50.123456
        ]
      },
      'quest': {
        'id': 'aba664c3-bdf3-4fb3-b8f3-42e007864bbf',
        'title': 'Склеп',
        'previewImg': 'https://{server-url}/static/quest/sklep.jpg',
        'previewImgWebp': 'https://{server-url}/static/quest/sklep.webp',
        'level': difficultLevels.easy,
        'type': questTypes.adventures,
        'peopleMinMax': [ 3, 6 ]
      }
    }
  ]
};


const dataSlice = createSlice({
  name: ReducerNameSpaces.data,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => { // async actions
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(getQuestsList.fulfilled, (state, action) => {
        state.questsList = action.payload;
      })
      .addCase(getQuest.fulfilled, (state, action) => {
        state.questPage = action.payload;
      })
      .addCase(getBookingInfo.fulfilled, (state, action) => {
        state.bookingInfo = action.payload;
      })
      .addCase(getBookedQuests.fulfilled, (state, action) => {
        state.bookedQuests = action.payload;
      });
  },
});

export default dataSlice;
