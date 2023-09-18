import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AuthData, BookedQuest, Place, Quest, QuestPage, State, UserData } from '../types/types';
import { AxiosInstance } from 'axios';
import APIRoutes from '../const/api-routes';
import { saveToken } from '../services/token';

type ThunkConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

const checkAuthAction = createAsyncThunk<UserData, undefined, ThunkConfig>(
  'CHECK_AUTH_ACTION',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<UserData>(APIRoutes.Login());
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const loginAction = createAsyncThunk<UserData, {authData: AuthData}, ThunkConfig>(
  'LOGIN_ACTION',
  async ({authData}, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.post<UserData>(APIRoutes.Login(), authData);
      saveToken(data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const getQuestsList = createAsyncThunk<Quest[], undefined, ThunkConfig>(
  'GET_QUESTS_LIST',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<Quest[]>(APIRoutes.GetQuestsList());
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const getQuest = createAsyncThunk<QuestPage, {id: string}, ThunkConfig>(
  'GET_QUEST',
  async ({id}, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<QuestPage>(APIRoutes.GetQuest(id));
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const getBookingInfo = createAsyncThunk<Place[], {id: string}, ThunkConfig>(
  'GET_BOOKING_INFO',
  async ({id}, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<Place[]>(APIRoutes.GetBookingInfo(id));
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const getBookedQuests = createAsyncThunk<BookedQuest[], undefined, ThunkConfig>(
  'GET_BOOKED_QUESTS',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<BookedQuest[]>(APIRoutes.GetBookedQuests());
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export {checkAuthAction, loginAction, getQuestsList, getQuest, getBookingInfo, getBookedQuests};
