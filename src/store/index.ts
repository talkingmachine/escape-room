import { configureStore } from '@reduxjs/toolkit';
import createAPI from '../services/api-axios';
import { rootReducer } from './root-resucer';

const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
      serializableCheck: false,
    }),
});
