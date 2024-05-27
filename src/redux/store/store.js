import {configureStore} from '@reduxjs/toolkit';
import menuSlice from '../slices/menuSlice';

export const store = configureStore({
    reducer: {
        mainMenu: menuSlice,
    },
    middleware: (getDefaultMiddleware)  => getDefaultMiddleware(),
});