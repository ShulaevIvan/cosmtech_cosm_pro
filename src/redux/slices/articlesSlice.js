import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import demoImg from '../../img/articles/articleItemDemo.png';

const initialState = {
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
            articleDate: '23.03.2025',
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
            articleDate: '23.03.2025',
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
            articleDate: '23.03.2025',
            articleCategory: ''
        },
        {
            id: 4,
            name: '',
            title: 'Article Title sales 1',
            shortDescription: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
            url: '/stm-cosmetic',
            imgMini: demoImg,
            author: 'Автор 3',
            articleDate: '23.03.2025',
            articleCategory: 'sales'
        },
        {
            id: 5,
            name: '',
            title: 'Article Title sales 2',
            shortDescription: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
            url: '/stm-cosmetic',
            imgMini: demoImg,
            author: 'Автор 3',
            articleDate: '23.03.2025',
            articleCategory: 'sales'
        },
        {
            id: 6,
            name: '',
            title: 'Article Title manual',
            shortDescription: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
            url: '/stm-cosmetic',
            imgMini: demoImg,
            author: 'Автор 3',
            articleDate: '23.03.2025',
            articleCategory: 'manual'
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