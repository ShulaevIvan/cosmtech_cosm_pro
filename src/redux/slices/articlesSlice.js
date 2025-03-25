import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    articles: [
        {
            id: 1,
            name: '',
            title: '',
            shortDescription: '',
            url: ''
        },
        {
            id: 2,
            name: '',
            title: '',
            shortDescription: '',
            url: ''
        },
        {
            id: 3,
            name: '',
            title: '',
            shortDescription: '',
            url: ''
        }
    ]
};

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        testHandler(state, action) {
            const { status } = action.payload;
        }
    }
});

export const {
    testHandler
} = articlesSlice.actions;
export default articlesSlice.reducer;