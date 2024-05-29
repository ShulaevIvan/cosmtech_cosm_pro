import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

const initialState = { 
    callbackPopupActive: false,
};

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        callbackPopupShow(state, action) {
            const { status } = action.payload;
            state.callbackPopupActive = status;
        },
    }
});


export const {
    callbackPopupShow, 
} = headerSlice.actions;
export default headerSlice.reducer;