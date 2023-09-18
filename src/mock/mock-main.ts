function getQuestData() {
  return (
    [
      {
        'id': 'aba664c3-bdf3-4fb3-b8f3-42e007864bbf',
        'title': 'Склеп',
        'previewImg': 'https://{server-url}/static/quest/sklep.jpg',
        'previewImgWebp': 'https://{server-url}/static/quest/sklep.webp',
        'level': 'easy',
        'type': 'adventures',
        'peopleMinMax': [5, 6],
        'description': 'Средневековое кладбище таит в себе много страшных тайн. Местные жители говорят, что в склепе похоронен граф вампир, который по ночам выходит на охоту, чтобы испить человеческой крови. Через час солнце опустится за горизонт, успеете ли вы убить вампира и выбраться из склепа?',
        'coverImg': 'https://{server-url}/static/quest/sklep@2x.jpg',
        'coverImgWebp': 'https://{server-url}/static/quest/sklep@2x.webp'
      },
    ]
  );
}

function getGridCards() {
  return (
    [
      {
        id: '1',
        title: 'Склеп',
        previewImg: 'https://{server-url}/static/quest/sklep.jpg',
        previewImgWebp: 'https://{server-url}/static/quest/sklep.webp',
        level: 'easy',
        type: 'mystic',
        peopleMinMax: [5, 7]
      },
      {
        id: '2',
        title: 'Маньяк',
        previewImg: 'https://{server-url}/static/quest/maniac.jpg',
        previewImgWebp: 'https://{server-url}/static/quest/maniac.webp',
        level: 'middle',
        type: 'horror',
        peopleMinMax: [3, 6]
      },
      {
        id: '3',
        title: 'История призраков',
        previewImg: 'https://{server-url}/static/quest/sklep.jpg',
        previewImgWebp: 'https://{server-url}/static/quest/sklep.webp',
        level: 'hard',
        type: 'adventures',
        peopleMinMax: [5, 6]
      },
    ]
  );
}

export {getGridCards, getQuestData};
