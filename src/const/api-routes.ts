const APIRoutes = {
  Login: ():string => '/v1/escape-room/login',
  GetQuestsList: ():string => '/v1/escape-room/quest',
  GetQuest: (id: string):string => `/v1/escape-room/quest/${id}`,
  GetBookingInfo: (id: string):string => `/v1/escape-room/quest/${id}/booking`,
  GetBookedQuests: ():string => '/v1/escape-room/reservation',
  PostBookingData: (id: string):string => `/v1/escape-room/quest/${id}/booking`,
  RemoveReservation: (id: string):string => `/v1/escape-room/reservation/${id}`,
  Logout: ():string => '/v1/escape-room/logout',
};

export default APIRoutes;
