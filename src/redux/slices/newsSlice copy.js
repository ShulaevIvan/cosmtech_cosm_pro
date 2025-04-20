import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import base64ToFile from "../../functions/base64ToFile";
import validateName from "../../functions/validateName";
import validatePhone from "../../functions/validatePhone";
import yaNews from '../../img/news/yaNews.png';
import vkNews from '../../img/news/vkNews.png';

const initialState = {
    allnewsItems: [],
    newsItems: [],
    showNewsStep: 1,
    maxNewsLength: 0,
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
        title: 'Title',
        description: 'Спасибо, с вами свяжутся в ближайшее время!',
        active: true
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
)

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
                state.allnewsItems = state.newsItems.sort((a, b) => Number(a.date) - Number(b.date)).reverse();
                state.maxNewsLength = newsLength
                return;
            }
            if (state.maxNewsLength > 3) {
                console.log('test')
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
                state.maxNewsLength = state.newsItems.length;
                return;
            }
            state.newsItems = [];
            state.maxNewsLength = 0;
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