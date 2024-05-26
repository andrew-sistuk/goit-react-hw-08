import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice';
import filtersSlice from './filtersSlice';


export const appState = configureStore({
  reducer: {
    contacts: contactsSlice,
    filters: filtersSlice,
  },
});
