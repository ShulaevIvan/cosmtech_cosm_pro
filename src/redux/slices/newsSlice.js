import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import base64ToFile from "../../functions/base64ToFile";
import validateName from "../../functions/validateName";
import validatePhone from "../../functions/validatePhone";
import yaNews from '../../img/news/yaNews.png';
import vkNews from '../../img/news/vkNews.png';
import { json } from "react-router-dom";

const initialState = {
    allnewsItems: [],
    newsItems: [],
    currentNewsStep: 0,
    showNewsStep: 1,
    newsLoadEnd: true,
    showMoreBtnDisabled: false,
    currencyData: [],
    socialBlock: [
        {
            id: 1,
            name: 'vk',
            img: yaNews,
            imgAlt: 'test',
            urlText: 'Яндекс',
            url: 'https://yandex.ru/maps/org/kosmeticheskiye_tekhnologii/238223588879/?ll=30.374016%2C59.895998&z=17'
        },
        {
            id: 1,
            name: 'yandex',
            img: vkNews,
            imgAlt: 'Контрактное производство косметики в Санкт-Петербурге Космотех группа вконтакте',
            urlText: 'Вконтакте',
            url: 'https://vk.com/cosmtech'
        }
    ],
    newsFormMainFields: [
        {
            id: 1,
            title: 'Имя',
            type: 'text',
            fieldType: 'name',
            value: '',
            placeholder: 'Ваше имя',
            fieldValid: true
        },
        {
            id: 2,
            title: 'Телефон',
            type: 'text',
            fieldType: 'phone',
            value: '',
            placeholder: '8xxxxxxxxxx',
            fieldValid: true
        },
        {
            id: 3,
            type: 'textarea',
            title: 'Комментарий',
            fieldType: 'comment',
            value: '',
            placeholder: 'Комментарий...',
            fieldValid: true
        },
    ],
    newsFormMainHappyState: {
        title: '',
        description: '',
        active: false
    },
    newsFormMainSendBtnActive: false
};

export const fetchAllNews = createAsyncThunk(
    'loadAllNews',
    async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/news/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        const data = response.json();
        return data;
    }
);

export const sendMainNewsForm = createAsyncThunk(
    'sendMainNewsForm',
    async (sendData) => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/news/?sendform=true`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sendData)
        });

        const data = response.json();
        return data;
    }
)

export const fetchCurrencyData = createAsyncThunk(
    'loadCurrencyCourse',
    async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/currency/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        const data = response.json();
        return data;
    }
);

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
            if (state.newsItems.length <= 3) {
                return;
            }
            const sortNews = state.newsItems.slice(0, state.currentNewsStep);
            
            if (sortNews.length !== state.allnewsItems.length) {
                state.newsItems = [...sortNews];
                state.showMoreBtnDisabled = false;
                return;
            }
            state.showMoreBtnDisabled = true;
            
        },
        showMoreNews(state) {
            const currentNews = state.newsItems;
            const step = state.showNewsStep;
            const nextIndex = currentNews.length + step;

            if (nextIndex <= state.allnewsItems.length) {
                state.newsItems = [...state.allnewsItems.slice(0, nextIndex)]
                state.currentNewsStep = nextIndex;
                state.showMoreBtnDisabled = false;
                return;
            }
            state.showMoreBtnDisabled = true;
        },
        showNewsPopup(state, action) {
            const { newsId } = action.payload;

            state.newsItems = state.newsItems.map((newsItem) => {
                if (newsItem.id === newsId) {
                    return {
                        ...newsItem,
                        newsPopup: {
                            ...newsItem.newsPopup,
                            active: newsItem.newsPopup.active ? false : true
                        }
                    }
                }
                return  {
                    ...newsItem,
                    newsPopup: {
                        ...newsItem.newsPopup,
                        active: false
                    }
                }
            });
        },
        mainNewsInput(state, action) {
            const { fieldId, fieldType, fieldValue, clear } = action.payload;
            let inputValid;
            let validValue;
            if (fieldId && fieldType && clear) {
                state.newsFormMainFields = state.newsFormMainFields.map((fieldItem) => {
                    if (fieldItem.id === fieldId && fieldItem.fieldType === fieldType) {
                        return {
                            ...fieldItem,
                            value: '',
                            fieldValid: false
                        }
                    }
                    return fieldItem;
                });
                return;
            }
            if ((fieldType === 'name') && fieldValue) {
                inputValid = validateName(fieldValue);
                validValue = fieldValue
            }
            else if (fieldType === 'phone' && fieldValue && fieldValue.length !== 18) {
                const phoneStr = validatePhone(fieldValue);
                inputValid = phoneStr.length === 18 ? true : false
                validValue = phoneStr;
            }
            else if (fieldType === 'comment') {
                const phoneStr = validatePhone(fieldValue);
                inputValid = fieldValue.length > 3 && fieldValue !== ' ' ? true : false
                validValue = fieldValue;
            }
            state.newsFormMainFields = state.newsFormMainFields.map((fieldItem) => {
                if (fieldItem.id === fieldId && fieldItem.fieldType === fieldType) {
                    return {
                        ...fieldItem,
                        value: validValue,
                        fieldValid: inputValid
                    }
                }
                return fieldItem;
            });
        },
        validateMainNewsForm(state) {
            const nameInput = state.newsFormMainFields.find((item) => item.fieldType === 'name' && item.fieldValid && item.value);
            const phoneInput = state.newsFormMainFields.find((item) => item.fieldType === 'phone' && item.fieldValid && item.value);
            const commentInput = state.newsFormMainFields.find((item) => item.fieldType === 'comment' && item.fieldValid && item.value);
            
            if ((nameInput && phoneInput) || (phoneInput && commentInput)) {
                state.newsFormMainSendBtnActive = true;
                return;
            }
            state.newsFormMainSendBtnActive = false;
        },
        mainNewsFormHappyStatePopup(state) {
            state.newsFormMainHappyState = {
                ...state.newsFormMainHappyState,
                active: state.newsFormMainHappyState.active ? false : true
            };
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllNews.fulfilled, (state, action) => {
            const { status, news } = action.payload;
            let newsData;
            if (status === 'ok' && news) {
                newsData = news.map((newsItem) => {
                    const minImgBlob = base64ToFile(newsItem.min_img.file, newsItem.min_img.mime)
                    const minImgBlobUrl = URL.createObjectURL(minImgBlob);
                    return {
                        id: newsItem.id,
                        shortDescription: newsItem.short_description,
                        minImg: {img: minImgBlobUrl, alt: `Новости космотех: ${newsItem.title}`},
                        title: newsItem.title,
                        date: new Date(newsItem.date),
                        newsContent: {
                            title: newsItem.title,
                            paragraphs: newsItem.text_content.map((parItem) => {
                                return {
                                    title: '',
                                    content: parItem     
                                }
                            }),
                            links: newsItem.urls.map((urlItem) => {
                                return {
                                    text: urlItem.url_text,
                                    url: urlItem.news_url
                                }
                            }),
                            banners: newsItem.banners.map((bannerItem) => {
                                const blob = base64ToFile(bannerItem.banner_file.file, bannerItem.banner_file.mime);
                                const blobUrl = URL.createObjectURL(blob);
                                return {
                                    ...bannerItem,
                                    blobData: blobUrl
                                }
                            }),
                            videos: newsItem.videos.map((videoItem) => {
                                const blob = base64ToFile(videoItem.video_file.file, videoItem.video_file.mime);
                                const blobUrl = URL.createObjectURL(blob);
                                return {
                                    blobData: blobUrl,
                                    file: videoItem.video_file,
                                    displayMode: videoItem.mode,
                                    videoTitle: videoItem.title

                                }
                            }),
                        },
                        newsPopup: {
                            active: false 
                        },
                    }
                });
                
                state.newsItems = [...newsData.sort((a, b) => Number(a.date) - Number(b.date)).reverse()];
                state.allnewsItems =  [...newsData];
                state.currentNewsStep = 3;
                state.newsLoadEnd = true;
                return;
            }
            state.allnewsItems = [];
            state.newsItems = [];
            state.currentNewsStep = 0;
            state.newsLoadEnd = true;
        })
        .addCase(sendMainNewsForm.fulfilled, (state, action) => {
            const { status, description } = action.payload;
            
            if (status === 'ok') {
                state.newsFormMainHappyState = {
                    ...state.newsFormMainHappyState,
                    title: description.title,
                    description: description.description,
                    active: true
                }
                state.newsFormMainFields = initialState.newsFormMainFields;
                return;
            }
            state.newsFormMainFields = initialState.newsFormMainFields;
            state.newsFormMainHappyState = initialState.state.newsFormMainHappyState;
        })
        .addCase(fetchCurrencyData.fulfilled, (state, action) => {
            const { status, data } = action.payload;

            if (status === 'ok') {
                state.currencyData = data;
                return;
            }
        })
    }
});

export const {
    hideExcessNews,
    showMoreNews,
    generateNewsLinks,
    showNewsPopup,
    mainNewsInput,
    validateMainNewsForm,
    mainNewsFormHappyStatePopup
} = newsSlice.actions;

export default newsSlice.reducer;