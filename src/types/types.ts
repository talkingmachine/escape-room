import { allowedDate, difficultLevels, questTypes } from '../const/consts';
import { store } from '../store';

type AuthData = {
  email: string;
  password: string;
}
type Place = {
  id: string;
  location: {
    address: string;
    coords: [number, number];
  };
  slots: {
    today: {
      time: string;
      isAvailable: boolean;
    }[];
    tomorrow: {
      time: string;
      isAvailable: boolean;
    }[];
  };
}
type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: difficultLevels;
  type: questTypes;
  peopleMinMax: [number, number];
}
type QuestPage = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: difficultLevels;
  type: questTypes;
  peopleMinMax: [number, number];
  description: string;
  coverImg: string;
  coverImgWebp: string;
  }
type UserData = {
  token: string;
}
type BookedQuest = {
  date: allowedDate;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: {
    address: string;
    coords: [number, number];
  };
  quest: {
    id: string;
    title: string;
    previewImg: string;
    previewImgWebp: string;
    level: difficultLevels;
    type: questTypes;
    peopleMinMax: [number, number];
  };
}
type BookingFormData = {
  date: string;
  name: string;
  person: string;
  tel: string;
  children: boolean;
}
type BookingData = {
  'date': string;
  'time': string;
  'contactPerson': string;
  'phone': string;
  'withChildren': boolean;
  'peopleCount': number;
  'placeId': string;
};

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type {UserData, AuthData, State, AppDispatch, Place, Quest, QuestPage, BookedQuest, BookingFormData, BookingData};
