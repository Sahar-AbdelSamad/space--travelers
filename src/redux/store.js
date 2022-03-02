import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer, { fetchRockets } from './rockets/rocketsSlice';
import missionsReducer, { fetchMissions } from './missions/missionsSlice';
import mobileMenuReducer from './mobileMenu/mobileMenuSlice';

export const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
    mobileMenu: mobileMenuReducer,
  },
});

store.dispatch(fetchRockets());
store.dispatch(fetchMissions());

export default store;
