import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

const initialState = { 
    mobileMenuActive: false,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        mobileMenuActive(state, action) {
            const { status } = action.payload;
            console.log(status)
            state.mobileMenuActive = status;
        },
    }
});


export const {
    mobileMenuActive, 
} = menuSlice.actions;
export default menuSlice.reducer;