import {configureStore} from '@reduxjs/toolkit';
import headerSlice from '../slices/headerSlice';
import innerPageSlice from '../slices/innerPageSlice';
import mainPageSlice from '../slices/mainPageSlice';
import footerSlice from '../slices/footerSlice';
import menuSlice from '../slices/menuSlice';
import quizSlice from '../slices/quizSlice';

export const store = configureStore({
    reducer: {
        header: headerSlice,
        innerPage: innerPageSlice,
        mainPage: mainPageSlice,
        footer: footerSlice,
        menu: menuSlice,
        quiz: quizSlice,
    },
    middleware: (getDefaultMiddleware)  => getDefaultMiddleware({serializableCheck: false}),
});