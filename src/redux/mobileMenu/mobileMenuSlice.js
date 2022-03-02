import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

export const mobileMenuSlice = createSlice({
  name: 'mobileMenu',
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
      let newState = state;
      newState = !action.payload;
      return newState;
    },
  },
});

export const { toggleMenu } = mobileMenuSlice.actions;

export default mobileMenuSlice.reducer;
