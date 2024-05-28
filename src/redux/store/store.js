import {configureStore} from '@reduxjs/toolkit';
import innerPageSlice from '../slices/innerPageSlice';
import mainPageSlice from '../slices/mainPageSlice';

export const store = configureStore({
    reducer: {
        innerPage: innerPageSlice,
        mainPage: mainPageSlice,
    },
    middleware: (getDefaultMiddleware)  => getDefaultMiddleware(),
});