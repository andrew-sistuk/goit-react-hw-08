import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsSlice from './contacts/slice';
import filtersSlice from './filters/slice';
import authSlice from './auth/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

const authPersistedReducer = persistReducer(authPersistConfig, authSlice);

export const appState = configureStore({
  reducer: {
    contacts: contactsSlice,
    filters: filtersSlice,
    auth: authPersistedReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(appState);
