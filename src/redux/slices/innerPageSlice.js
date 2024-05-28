import { createSlice } from "@reduxjs/toolkit";
import backgroundServices from '../../img/services_bg.jpg';
import backgroundAbout from '../../img/about.jpg';
import backgroundContacts from '../../img/contacts.jpg';
import innerHeaderImg from '../../img/1920x400.png';

const initialState = { 
    headerBackgrounds: [
        { page: '/services', backgroundImg: backgroundServices },
        { page: '/about', backgroundImg: backgroundAbout },
        { page: '/contacts', backgroundImg: backgroundContacts}
    ],
    activeBackground: innerHeaderImg,
};

const innerPageSlice = createSlice({
    name: 'innerPage',
    initialState,
    reducers: {
        changeHeaderBackground(state, action) {
            const { currentPage } = action.payload;
            state.activeBackground = state.headerBackgrounds.find((background) => background.page === currentPage).backgroundImg;
        }
    }
});


export const {
    changeHeaderBackground, 
} = innerPageSlice.actions;
export default innerPageSlice.reducer;