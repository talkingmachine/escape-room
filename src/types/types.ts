import { difficultLevels, questTypes } from '../const/consts';

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

export type {GridCard, PeopleMinMaxType};
