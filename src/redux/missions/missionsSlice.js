import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  const info = data.map((item) => ({
    mission_id: item.mission_id,
    mission_name: item.mission_name,
    description: item.description,
    reserved: false,
    wikipedia: item.wikipedia,
  }));
  return info;
});

const initialState = [];

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    toggleMissionReservation: (state, action) => {
      state.map((item) => {
        const newItem = item;
        if (newItem.mission_id === action.payload) newItem.reserved = !newItem.reserved;
        return newItem;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.fulfilled, (state, action) => action.payload);
  },
});

export const { toggleMissionReservation } = missionsSlice.actions;

export default missionsSlice.reducer;
