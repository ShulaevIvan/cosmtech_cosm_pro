import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import demoImg from '../../img/articles/articleItemDemo.png';

const importAllImages = (ctxWebpuck) => {
    const images = {};
    ctxWebpuck.keys().forEach((item, index) => { images[item.replace('./', '').replace(/.\w+$/, '')] = ctxWebpuck(item); });
    return images;
};

const articlesImages = importAllImages(require.context('../../img/articles', false, /\.(png|jpe?g|svg)$/));

const { 
    independenceContractMin,
    stmCosmeticMin,
    stmCosmeticBanner,
    stmCosmeticBanner2,
} = articlesImages;

const initialState = {
    articlesSorted: {
        byDate: false,
        byAuthor: false,
    },
    sorted: false,
    selectedCategory: {name: 'default', autoSelect: false},
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
            url: '/advantages-of-contract-cosmetics-for-small-businesses',
            imgMini: independenceContractMin,
            mainBanner: {img: stmCosmeticBanner, alt: 'Преимущества контрактного производства косметики для малого бизнеса'},
            author: 'Автор 1',
            articleDate: new Date(2025, 11, 10),
            articleCategory: 'production',
            selected: false,
            readingTime: 15
        },
        {
            id: 2,
            name: 'test1',
            title: 'Как создать свой косметический бренд с нуля: пошаговое руководство',
            shortDescription: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
            url: '/how-to-create-cosmetic-brand',
            imgMini: stmCosmeticMin,
            mainBanner: {img: stmCosmeticBanner, alt: 'Как создать свой косметический бренд с нуля: пошаговое руководство'},
            author: 'Автор 2',
            articleDate: new Date(2022, 1, 1),
            articleCategory: 'production',
            selected: false,
            readingTime: 15
        },
        {
            id: 3,
            name: '',
            title: 'Article Title',
            shortDescription: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
            url: '/stm-cosmetic3',
            imgMini: demoImg,
            mainBanner: {img: stmCosmeticBanner, alt: 'Article Title'},
            author: 'Автор 3',
            articleDate: new Date(2021, 2, 25),
            articleCategory: '',
            selected: false,
            readingTime: 15
        },
        {
            id: 4,
            name: '',
            title: 'Article Title sales 1',
            shortDescription: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
            url: '/stm-cosmetic4',
            imgMini: demoImg,
            mainBanner: {img: stmCosmeticBanner, alt: 'Article Title sales 1'},
            author: 'Автор 4',
            articleDate:  new Date(2022, 2, 10),
            articleCategory: 'sales',
            selected: false,
            readingTime: 15
        },
        {
            id: 5,
            name: '',
            title: 'Article Title sales 2',
            shortDescription: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
            url: '/stm-cosmetic5',
            imgMini: demoImg,
            mainBanner: {img: stmCosmeticBanner, alt: 'Article Title sales 2'},
            author: 'Автор 1',
            articleDate: new Date(2023, 3, 15),
            articleCategory: 'sales',
            selected: false,
            readingTime: 15
        },
        {
            id: 6,
            name: '',
            title: 'Article Title manual',
            shortDescription: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
            url: '/stm-cosmetic6',
            imgMini: demoImg,
            mainBanner: {img: stmCosmeticBanner, alt: 'Article Title manual'},
            author: 'Автор 6',
            articleDate: new Date(2025, 1, 15),
            articleCategory: 'manual',
            selected: false,
            readingTime: 15
        }
    ],
    articleForm: [
        {
            id: 1,
            inputType: 'text',
            inputTag: 'input',
            inputName: 'name',
            inputValue: '',
            inputTitle: 'Имя',
            placeholder: 'Ваше имя',
            valid: true,
        },
        {
            id: 2,
            inputType: 'text',
            inputTag: 'input',
            inputName: 'phone',
            inputValue: '',
            inputTitle: 'Телефон',
            placeholder: '8 xxx xxx xx xx',
            valid: true,
        },
        {
            id: 3,
            inputType: 'fieldset',
            inputTag: 'fieldset',
            inputName: 'contactType',
            inputValue: '',
            inputTitle: 'Способ связи:',
            placeholder: '',
            valid: true,
            radioButtons: [
                {
                    id: 1,
                    radioGroup: 'acticleContactRadio',
                    inputType: 'radio',
                    inputTag: 'radio',
                    inputName: 'radio-phone',
                    inputValue: 'phone',
                    inputTitle: 'Телефон',
                    selected: false
                },
                {
                    id: 2,
                    radioGroup: 'acticleContactRadio',
                    inputType: 'radio',
                    inputTag: 'radio',
                    inputName: 'radio-wp',
                    inputValue: 'wp',
                    inputTitle: 'Whatsapp',
                    selected: false
                },
                {
                    id: 3,
                    radioGroup: 'acticleContactRadio',
                    inputType: 'radio',
                    inputTag: 'radio',
                    inputName: 'radio-tg',
                    inputValue: 'tg',
                    inputTitle: 'Telegram',
                    selected: false
                },
            ]
        },
        {
            id: 4,
            inputType: 'textarea',
            inputTag: 'textarea',
            inputName: 'comment',
            inputValue: '',
            inputTitle: 'Ваш вопрос',
            placeholder: 'Ваш вопрос...',
            valid: true,
        },
    ]
};

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        articlesSort(state, action) {
            const { sortType } = action.payload;
            state.selectedCategory = initialState.selectedCategory;
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
                    state.articleCategories = initialState.articleCategories;
                    break;
            }
        },
        articleCategory(state, action) {
            const { category } = action.payload;
            if (!category || category === 'default') {
                state.articles = initialState.articles;
                return;
            }
            state.articleCategories = state.articleCategories.map((catItem) => {
                if (catItem.name === category) {
                    return {
                        ...catItem,
                        selected: true
                    }
                }
                return {
                    ...catItem,
                    selected: false
                }
            });
            state.articles = initialState.articles.filter((articleItem) => articleItem.articleCategory === category);
            state.selectedCategory = {
                ...state.selectedCategory,
                name: category,
                autoSelect: false
            }
        },
        selectArticleCategory(state, action) {
            const { category } = action.payload;
            
            state.articleCategories = state.articleCategories.map((catItem) => {
                if (catItem.name === category) {
                    return {
                        ...catItem,
                        selected: true
                    }
                }
                return {
                    ...catItem,
                    selected: false
                }
            });
            state.selectedCategory = {
                ...state.selectedCategory,
                name: category,
                autoSelect: true
            }
        },
        selectArticle(state, action) {
            const { articleId } = action.payload;
            if (!articleId) {
                state.articles = initialState.articles;
                return;
            }
            state.articles = state.articles.map((articleItem) => {
                if (articleItem.id === articleId) {
                    return {
                        ...articleItem,
                        selected: true
                    }
                }
                return {
                    ...articleItem,
                    selected: false
                }
            });
        },
    }
});

export const {
    articlesSort,
    articleCategory,
    selectArticleCategory,
    selectArticle
} = articlesSlice.actions;
export default articlesSlice.reducer;