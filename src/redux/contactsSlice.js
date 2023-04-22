import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'redux/operations';

const hendlePanding = state => {
  state.isLoading = true;
};
const hendleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    //fetch
    [fetchContacts.pending]: hendlePanding,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: hendleRejected,
    //add
    [addContact.pending]: hendlePanding,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items.push(action.payload);
    },
    [addContact.rejected]: hendleRejected,
    //delete
    [deleteContact]: hendlePanding,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;