import {configureStore} from '@reduxjs/toolkit';
import headerSlice from '../slices/headerSlice';
import innerPageSlice from '../slices/innerPageSlice';
import mainPageSlice from '../slices/mainPageSlice';
import footerSlice from '../slices/footerSlice';

export const store = configureStore({
    reducer: {
        header: headerSlice,
        innerPage: innerPageSlice,
        mainPage: mainPageSlice,
        footer: footerSlice,
    },
    middleware: (getDefaultMiddleware)  => getDefaultMiddleware({serializableCheck: false}),
});