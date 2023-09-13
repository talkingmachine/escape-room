import { difficultLevels } from '../const/consts';
import { GridCard } from '../types/types';

const levelLocalize = {
  [difficultLevels.easy]: 'Легкий',
  [difficultLevels.middle]: 'Средний',
  [difficultLevels.hard]: 'Сложный',
  [difficultLevels.any]: 'Любой'
};

// const difficultLevelDataToText = (data) => {
//   switch(data) {
//     case difficultLevels.easy: {
//       return 'Легкий';
//     }
//     case difficultLevels.middle: {
//       return 'Средний';
//     }
//     case difficultLevels.hard: {
//       return 'Сложный';
//     }
//   }
// };

function dataToCards (data: GridCard[]) {
  return data.map((item) => ({
    ...item,
    level: levelLocalize[item.level],
    peopleMinMax: item.peopleMinMax.length === 2 ?
      `${item.peopleMinMax[0]}-${item.peopleMinMax[1]}` :
      `${item.peopleMinMax[0]}`
  }));
}

export default dataToCards;
