import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import base64ToFile from "../../functions/base64ToFile";
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
            const { fieldId, fieldType, fieldValue } = action.payload;
            state.newsFormMainFields = state.newsFormMainFields.map((fieldItem) => {
                if (fieldItem.id === fieldId && fieldItem.fieldType === fieldType) {
                    return {
                        ...fieldItem,
                        value: fieldValue
                    }
                }
                return fieldItem;
            });
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
                        minImg: {img: minImgBlobUrl, alt: 'test'},
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
                return;
            }
            state.newsItems = [];
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
    mainNewsInput
} = newsSlice.actions;

export default newsSlice.reducer;