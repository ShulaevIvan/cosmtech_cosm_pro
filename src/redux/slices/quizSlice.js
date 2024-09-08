import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";


const initialState = {}

const qizSlice = createSlice({
    name: 'quizSlice',
    initialState,
    reducers: {
        testRed(state, action) {

        }
    }
});

export const {
    testRed
} = qizSlice.actions;
export default qizSlice.reducer;