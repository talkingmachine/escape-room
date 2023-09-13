import { difficultLevels, questTypes } from '../const/consts';
import { GridCard, PeopleMinMaxType } from '../types/types';

const levelLocalize = {
  [difficultLevels.easy]: 'Легкий',
  [difficultLevels.middle]: 'Средний',
  [difficultLevels.hard]: 'Сложный',
  [difficultLevels.any]: 'Любой'
};

const difficultLevelDataToText = (data: difficultLevels) => {
  switch(data) {
    case difficultLevels.easy: {
      return 'Легкий';
    }
    case difficultLevels.middle: {
      return 'Средний';
    }
    case difficultLevels.hard: {
      return 'Сложный';
    }
  }
};

const questTypeDataToText = (data: questTypes) => {
  switch(data) {
    case questTypes.adventures: {
      return 'Приключения';
    }
    case questTypes.detective: {
      return 'Детектив';
    }
    case questTypes.horror: {
      return 'Ужасы';
    }
    case questTypes.mystic: {
      return 'Мистика';
    }
    case questTypes.sciFi: {
      return 'Sci-fi';
    }
  }
};

const peopleMinMaxDataToText = (data: PeopleMinMaxType) => data.length === 2 ? `${data[0]}-${data[1]}` : `${data[0]}`;

function dataToCards (data: GridCard[]) {
  return data.map((item) => ({
    ...item,
    level: levelLocalize[item.level],
    peopleMinMax: peopleMinMaxDataToText(item.peopleMinMax)
  }));
}

export {dataToCards, difficultLevelDataToText, questTypeDataToText, peopleMinMaxDataToText};
