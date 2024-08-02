// store.js
import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    // filter: filterReducer,
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
  // The middleware and devTools enhancer are automatically included by default, so you don't need to specify them.
});
