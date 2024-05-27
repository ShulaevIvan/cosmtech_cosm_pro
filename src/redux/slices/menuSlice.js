import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    mobileMenuActive: false,
};

const menuSlice = createSlice({
    name: 'subMenu',
    initialState,
    reducers: {
        mobileMenuActive(state, action) {
            state.mobileMenuActive = action.payload;
        },
    }
});


export const {
    mobileMenuActive, 
} = menuSlice.actions;
export default menuSlice.reducer;