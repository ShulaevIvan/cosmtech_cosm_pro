import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import demo from '../../img/news/300x300.png'

const initialState = {
    allnewsItems: [],
    newsItems: [
        {
            id: 1,
            fullUrl: '/news/news-item-1',
            title: 'Мы любим животных и стараемся поддерживать тех из них 1',
            date: new Date("2024-01-01"),
            minImg: {img: demo, alt: 'test'},
            shortDescription: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь'
        },
        {
            id: 2,
            fullUrl: '/news/news-item-2',
            title: 'Мы любим животных и стараемся поддерживать тех из них 2',
            date: new Date("2024-01-14"),
            minImg: {img: demo, alt: 'test'},
            shortDescription: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь'
        },
        {
            id: 3,
            fullUrl: '/news/news-item-3',
            title: 'Мы любим животных и стараемся поддерживать тех из них 3',
            date: new Date("2021-01-03"),
            minImg: {img: demo, alt: 'test'},
            shortDescription: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь'
        },
        {
            id: 4,
            fullUrl: '/news/news-item-4',
            title: 'Мы любим животных и стараемся поддерживать тех из них 4',
            date: new Date("2023-01-21"),
            minImg: {img: demo, alt: 'test'},
            shortDescription: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь'
        },
        {
            id: 5,
            fullUrl: '/news/news-item-5',
            title: 'Мы любим животных и стараемся поддерживать тех из них 5',
            date: new Date("2022-05-13"),
            minImg: {img: demo, alt: 'test'},
            shortDescription: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь'
        },
        {
            id: 6,
            fullUrl: '/news/news-item-6',
            title: 'Мы любим животных и стараемся поддерживать тех из них 6',
            date: new Date("2024-02-19"),
            minImg: {img: demo, alt: 'test'},
            shortDescription: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь'
        },
        {
            id: 7,
            fullUrl: '/news/news-item-7',
            title: 'Мы любим животных и стараемся поддерживать тех из них 7',
            date: new Date("2023-04-03"),
            minImg: {img: demo, alt: 'test'},
            shortDescription: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь'
        },
    ],
    showNewsStep: 1,
    maxNewsLength: 0,
    showMoreBtnDisabled: false
};

const newsSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        generateNewsLinks(state) {
            state.newsItems = state.newsItems.map((newsItem) => {
                return  {
                    ...newsItem,
                    url: `/news-item-${newsItem.id}`
                }
            })
        },
        hideExcessNews(state) {
            const newsLength = state.newsItems.length;
            if (state.maxNewsLength === 0) {
                state.maxNewsLength = newsLength;
                state.allnewsItems = state.newsItems.sort((a, b) => Number(a.date) - Number(b.date)).reverse();
            }
            if (state.maxNewsLength > 3) {
                const sortNews = state.newsItems.slice(0, 3);
                state.newsItems = [...sortNews];
                if (newsLength === state.maxNewsLength) {
                    state.showMoreBtnDisabled = false;
                    return;
                }
                return;
            }
            state.showMoreBtnDisabled = true;
        },
        showMoreNews(state) {
            const currentNews = state.newsItems;
            const nextIndex = state.newsItems.length;
            const step = state.showNewsStep;
            if (state.newsItems.length + step === state.allnewsItems.length) state.showMoreBtnDisabled = true;
            if (nextIndex + step <= state.allnewsItems.length) {
                const addNews = state.allnewsItems.slice(nextIndex, nextIndex + step);
                state.newsItems = [...currentNews, ...addNews];
                return;
            }
            state.newsItems = [...currentNews, ...state.allnewsItems.slice(nextIndex)];
        }
    }

});

export const {
    hideExcessNews,
    showMoreNews,
    generateNewsLinks
} = newsSlice.actions;

export default newsSlice.reducer;