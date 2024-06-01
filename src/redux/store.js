import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contacts/slice';
import filtersSlice from './filters/slice';
import authSlice from './auth/slice';


export const appState = configureStore({
  reducer: {
    contacts: contactsSlice,
    filters: filtersSlice,
    auth: authSlice
  },
});
