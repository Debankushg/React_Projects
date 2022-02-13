import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/Car/carSlice';
import menuReducer from '../features/Car/menuSlice';


export const store = configureStore({
  reducer: {
    car: carReducer,
    menu: menuReducer,
  },
});
