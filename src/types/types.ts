import { difficultLevels, questTypes } from '../const/consts';
import { store } from '../store';

type PeopleMinMaxType = [number] | [number, number]

type GridCard = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: difficultLevels;
  type: questTypes;
  peopleMinMax: PeopleMinMaxType;
}

type AuthData = {
  email: string;
  password: string;
}

type UserData = {
  token: string;
}

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type {GridCard, PeopleMinMaxType, UserData, AuthData, State, AppDispatch};
