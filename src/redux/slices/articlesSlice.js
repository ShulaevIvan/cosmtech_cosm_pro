import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import demoImg from '../../img/articles/articleItemDemo.png';

const initialState = {
    articlesSorted: {
        byDate: false,
        byAuthor: false,
    },
    sorted: false,
    articleCategories: [
        {id: 1, name: 'default', title: '-- Выберите категорию --', selected: true},
        {id: 2, name: 'production', title: 'Производство', selected: false},
        {id: 3, name: 'sales', title: 'Рыонк косметики', selected: false },
        {id: 4, name: 'manual', title: 'Руководства', selected: false },
    ],
    articles: [
        {
            id: 1,
            name: 'contract-stm',
            title: 'Преимущества контрактного производства косметики для малого бизнеса',
            shortDescription: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
            url: '/stm-cosmetic',
            imgMini: demoImg,
            author: 'Автор 1',
            articleDate: new Date(2025, 11, 10),
            articleCategory: 'production'
        },
        {
            id: 2,
            name: 'test1',
            title: 'Как создать свой косметический бренд с нуля: пошаговое руководство',
            shortDescription: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
            url: '/stm-cosmetic',
            imgMini: demoImg,
            author: 'Автор 2',
            articleDate: new Date(2022, 1, 1),
            articleCategory: 'production'
        },
        {
            id: 3,
            name: '',
            title: 'Article Title',
            shortDescription: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
            url: '/stm-cosmetic',
            imgMini: demoImg,
            author: 'Автор 3',
            articleDate: new Date(2021, 2, 25),
            articleCategory: ''
        },
        {
            id: 4,
            name: '',
            title: 'Article Title sales 1',
            shortDescription: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
            url: '/stm-cosmetic',
            imgMini: demoImg,
            author: 'Автор 4',
            articleDate:  new Date(2022, 2, 10),
            articleCategory: 'sales'
        },
        {
            id: 5,
            name: '',
            title: 'Article Title sales 2',
            shortDescription: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
            url: '/stm-cosmetic',
            imgMini: demoImg,
            author: 'Автор 1',
            articleDate: new Date(2023, 3, 15),
            articleCategory: 'sales'
        },
        {
            id: 6,
            name: '',
            title: 'Article Title manual',
            shortDescription: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
            url: '/stm-cosmetic',
            imgMini: demoImg,
            author: 'Автор 6',
            articleDate: new Date(2025, 1, 15),
            articleCategory: 'manual'
        }
    ]
};

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        articlesSort(state, action) {
            const { sortType } = action.payload;
            switch (sortType) {
                case 'dateSort':
                    state.articlesSorted.byAuthor = false;
                    if (state.articlesSorted.byDate) {
                        state.articles = initialState.articles;
                        state.articlesSorted.byDate = false;
                        return;
                    }
                    state.articles = state.articles.sort((a, b) => a.articleDate - b.articleDate).reverse();
                    state.articlesSorted.byDate = true;
                    break;
                case 'authorSort':
                    state.articlesSorted.byDate = false;
                    if (state.articlesSorted.byAuthor) {
                        state.articles = initialState.articles;
                        state.articlesSorted.byAuthor = false;
                        return;
                    }
                    state.articles = state.articles.sort((a, b) => a.author.localeCompare(b.author));
                    state.articlesSorted.byAuthor = true;
                    break;
                default:
                    state.articles = initialState.articles;
                    state.articlesSorted = initialState.articlesSorted;
                    break;
            }
        },
        testHandler(state, action) {
            const { status } = action.payload;
        }
    }
});

export const {
    articlesSort
} = articlesSlice.actions;
export default articlesSlice.reducer;