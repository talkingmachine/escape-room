import { difficultLevels, questTypes } from '../const/consts';

type GridCard = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: difficultLevels;
  type: questTypes;
  peopleMinMax: [number] | [number, number];
}

export type {GridCard};
