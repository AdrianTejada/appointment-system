import { configureStore } from '@reduxjs/toolkit';
import { alertSlice } from './alertSlice';

const store = configureStore({
    reducer: {
        alerts: alertSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>

export default store;