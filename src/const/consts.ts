enum questTypes {
  all = 'all',
  adventures = 'adventures',
  horror = 'horror',
  mystic = 'mystic',
  detective = 'detective',
  sciFi = 'sciFi'
}

enum difficultLevels {
  easy = 'easy',
  middle = 'middle',
  hard = 'hard',
  any = 'any'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Uknown = 'UKNOWN'
}

export {difficultLevels, questTypes, AuthorizationStatus};
