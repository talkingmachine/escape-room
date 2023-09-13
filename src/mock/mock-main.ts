// function getMockData() {
//   return (
//     [
//       {
//         name: 'Склеп',
//         type: 'horror',
//         img: {
//           path: 'content/sklep',
//           image: 'sklep-size-s',
//           altText: 'Узник запертый в клетке.',
//         },
//         href: 'quest.html',
//         tags: {
//           data: {
//             person: '2–5 чел',
//             level: 'hard',
//           },
//         },
//       },
//       {
//         name: 'Маньяк',
//         type: 'horror',
//         img: {
//           path: 'content/maniac',
//           image: 'maniac-size-s',
//           altText: 'Мужчина в маске в тёмном переходе.',
//         },
//         href: 'quest.html',
//         tags: {
//           data: {
//             person: '3–6 чел',
//             level: 'middle',
//           },
//         },
//       },
//       {
//         name: 'История призраков',
//         type: 'horror',
//         img: {
//           path: 'content/ghots-story',
//           image: 'ghots-story-size-s',
//           altText: 'Призраки за стеклом.',
//         },
//         href: 'quest.html',
//         tags: {
//           data: {
//             person: '5–6 чел',
//             level: 'easy',
//           },
//         },
//       }
//     ]
//   );
// }

import { difficultLevels, questTypes } from '../const/consts';
import { GridCard } from '../types/types';

function getGridCards(): GridCard[] {
  return (
    [
      {
        id: 'aba664c3-bdf3-4fb3-b8f3-42e007864bbf',
        title: 'Склеп',
        previewImg: 'https://{server-url}/static/quest/sklep.jpg',
        previewImgWebp: 'https://{server-url}/static/quest/sklep.webp',
        level: difficultLevels.easy,
        type: questTypes.mystic,
        peopleMinMax: [5]
      },
      {
        id: 'aba6344c3-bdf3-41b3-b5f3-42e7864bbf',
        title: 'Маньяк',
        previewImg: 'https://{server-url}/static/quest/maniac.jpg',
        previewImgWebp: 'https://{server-url}/static/quest/maniac.webp',
        level: difficultLevels.middle,
        type: questTypes.horror,
        peopleMinMax: [3, 6]
      },
      {
        id: 'ab366423-bdf3-4f31-b8f3-42e034864bbf',
        title: 'История призраков',
        previewImg: 'https://{server-url}/static/quest/sklep.jpg',
        previewImgWebp: 'https://{server-url}/static/quest/sklep.webp',
        level: difficultLevels.hard,
        type: questTypes.adventures,
        peopleMinMax: [5, 6]
      },
    ]
  );
}

export default getGridCards;
