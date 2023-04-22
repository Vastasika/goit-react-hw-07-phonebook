import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReduce } from './filterSlice';

export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReduce },
});