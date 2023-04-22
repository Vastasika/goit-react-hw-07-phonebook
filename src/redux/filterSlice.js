import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    findContact(state, action) {
      state.value = action.payload;
    },
  },
});

export const { findContact } = filterSlice.actions;
export const filterReduce = filterSlice.reducer;