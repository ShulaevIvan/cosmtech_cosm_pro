import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

const initialState = { 
    callbackPopupActive: false,
};

const footerSlice = createSlice({
    name: 'footer',
    initialState,
    reducers: {
        goToTop(state, action) {

        }
    }
});


export const {
    goToTop, 
} = footerSlice.actions;
export default footerSlice.reducer;