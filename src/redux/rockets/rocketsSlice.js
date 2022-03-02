import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const info = data.map((item) => ({
    id: item.id,
    rocket_name: item.rocket_name,
    description: item.description,
    flickr_images: item.flickr_images[0],
    reserved: false,
    wikipedia: item.wikipedia,
  }));
  return info;
});

const initialState = [];

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    toggleReservation: (state, action) => {
      state.map((item) => {
        const newItem = item;
        if (item.id === action.payload) {
          newItem.reserved = !newItem.reserved;
        }
        return newItem;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.fulfilled, (state, action) => action.payload);
  },
});

export const { toggleReservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
