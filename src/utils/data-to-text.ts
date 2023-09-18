import { allowedDate, difficultLevels, questTypes } from '../const/consts';
import { Quest } from '../types/types';

// const levelLocalize = {
//   [difficultLevels.easy]: 'Легкий',
//   [difficultLevels.medium]: 'Средний',
//   [difficultLevels.hard]: 'Сложный',
//   [difficultLevels.any]: 'Любой'
// };
const timeToText = (day: allowedDate, time: string): string => `${day}/${time}`;

const difficultLevelDataToText = (data: difficultLevels) => {
  switch(data) {
    case difficultLevels.easy: {
      return 'Легкий';
    }
    case difficultLevels.medium: {
      return 'Средний';
    }
    case difficultLevels.hard: {
      return 'Сложный';
    }
  }
};

const dayToText = (data: allowedDate) => {
  switch(data) {
    case allowedDate.today: {
      return 'сегодня';
    }
    case allowedDate.tomorrow: {
      return 'завтра';
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

function dataToCards (data: Quest[]) {
  return data.map((item) => ({
    ...item,
    level: difficultLevelDataToText(item.level),
  }));
}

export {dataToCards, difficultLevelDataToText, questTypeDataToText, timeToText, dayToText};
