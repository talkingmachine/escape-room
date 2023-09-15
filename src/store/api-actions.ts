import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AuthData, State, UserData } from '../types/types';
import { AxiosInstance } from 'axios';
import APIRoutes from '../const/api-routes';
import { saveToken } from '../services/token';

type ThunkConfig = {
  dispatch: AppDispatch;
  state:State;
  extra:AxiosInstance;
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


export {checkAuthAction, loginAction};
