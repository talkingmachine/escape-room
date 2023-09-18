const defaultContactsMapData = {
  lat: 59.968325,
  lng: 30.317421,
  zoom: 16.4
};

export enum ReducerNameSpaces {
  states = 'STATES',
  data = 'DATA'
}

enum questTypes {
  all = 'all',
  adventures = 'adventures',
  horror = 'horror',
  mystic = 'mystic',
  detective = 'detective',
  sciFi = 'sci-fi'
}

enum allowedDate {
  today = 'today',
  tomorrow = 'tomorrow'
}

enum difficultLevels {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard',
  any = 'any'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Uknown = 'UKNOWN'
}

export {difficultLevels, questTypes, AuthorizationStatus, allowedDate, defaultContactsMapData};
