import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import brandServiceImg from '../../img/contractDesign/cosmeticBrand.jpg';
import predmetCameraServiceImg from '../../img/contractDesign/predmetCamera.jpg';
import redesignServiceImg from '../../img/contractDesign/redesign.jpg';
import portfolioDemoImg from '../../img/contractDesign/portfolio/portfolioDemo.jpg'
const importAllImages = (ctxWebpuck) => {
    const images = {};
    ctxWebpuck.keys().forEach((item, index) => { images[item.replace('./', '').replace(/.\w+$/, '')] = ctxWebpuck(item); });
    return images;
};
const designImages = importAllImages(require.context('../../img/articles', false, /\.(png|jpe?g|svg)$/));

// const { 
//     independenceContractMin,
//     stmCosmeticMin,
//     stmCosmeticBanner,
//     stmCosmeticBanner2,
// } = articlesImages;

const initialState = {
    mainServices: [
        {
            id: 1,
            bgImage: {
                src: brandServiceImg,
                imgAlt: 'Дизайн упаковки для косметики и запуск бренда с нуля'
            },
            title: 'Запуск бренда с нуля',
            orderForm: {
                popupFormActive: false,
                active: false,
                fields: [
                    {
                        id: 1,
                        name: 'name',
                        type: 'text',
                        title: 'Имя',
                        placeholder: 'Ваше имя',
                        value: '',
                        valid: true
                    },
                    {
                        id: 2,
                        name: 'phone',
                        title: 'Телефон',
                        type: 'text',
                        placeholder: '8xxxxxxxxxx',
                        value: '',
                        valid: true
                    },
                    {
                        id: 3,
                        name: 'services',
                        title: 'Услуга',
                        type: 'options',
                        services: [
                            {
                                id: 1,
                                name: 'service1',
                                title: 'Услуга 1',
                                selected: false
                            },
                            {
                                id: 2,
                                name: 'service2',
                                title: 'Услуга 2',
                                 selected: false
                            },
                            {
                                id: 3,
                                name: 'service3',
                                title: 'Услуга 3',
                                selected: false
                            }
                        ]
                    }
                ],
            }
        },
        {
            id: 2,
            bgImage: {
                src: redesignServiceImg,
                imgAlt: 'Редизайн упаковки для косметики услуги'
            },
            title: 'Редизайн и расширение',
            orderForm: {
                popupFormActive: false,
                active: false,
                fields: [
                    {
                        id: 1,
                        name: 'name',
                        type: 'text',
                        title: 'Имя',
                        placeholder: 'Ваше имя',
                        value: '',
                        valid: true
                    },
                    {
                        id: 2,
                        name: 'phone',
                        title: 'Телефон',
                        type: 'text',
                        placeholder: '8xxxxxxxxxx',
                        value: '',
                        valid: true
                    },
                    {
                        id: 3,
                        name: 'services',
                        title: 'Услуга',
                        type: 'options',
                        services: [
                            {
                                id: 1,
                                name: 'service1',
                                title: 'Услуга 1',
                                selected: false
                            },
                            {
                                id: 2,
                                name: 'service2',
                                title: 'Услуга 2',
                                 selected: false
                            },
                            {
                                id: 3,
                                name: 'service3',
                                title: 'Услуга 3',
                                selected: false
                            }
                        ]
                    }
                ],
            }
        },
        {
            id: 3,
            bgImage: {
                src: predmetCameraServiceImg,
                imgAlt: 'Предметная съемка косметики'
            },
            title: 'Предметная съемка',
            orderForm: {
                popupFormActive: false,
                active: false,
                fields: [
                    {
                        id: 1,
                        name: 'name',
                        type: 'text',
                        title: 'Имя',
                        placeholder: 'Ваше имя',
                        value: '',
                        valid: true
                    },
                    {
                        id: 2,
                        name: 'phone',
                        title: 'Телефон',
                        type: 'text',
                        placeholder: '8xxxxxxxxxx',
                        value: '',
                        valid: true
                    },
                    {
                        id: 3,
                        name: 'services',
                        title: 'Услуга',
                        type: 'options',
                        services: [
                            {
                                id: 1,
                                name: 'service1',
                                title: 'Услуга 1',
                                selected: false
                            },
                            {
                                id: 2,
                                name: 'service2',
                                title: 'Услуга 2',
                                 selected: false
                            },
                            {
                                id: 3,
                                name: 'service3',
                                title: 'Услуга 3',
                                selected: false
                            }
                        ]
                    }
                ],
            }
        }
    ],
    portfolio: {
        portfolioItems: [
            {
                id: 1,
                name: 'Дизайн упаковки мыла',
                title: '',
                img: portfolioDemoImg,
                imgAlt: '#',
                imgBig: portfolioDemoImg,
                imgBigAlt: '#',
            },
            {
                id: 2,
                name: 'Дизайн подарочного набора',
                title: '',
                img: portfolioDemoImg,
                imgAlt: '#',
                imgBig: portfolioDemoImg,
                imgBigAlt: '#',
            },
            {
                id: 3,
                name: 'Дизайн линии антиперспирантов',
                title: '',
                img: portfolioDemoImg,
                imgAlt: '#',
                imgBig: portfolioDemoImg,
                imgBigAlt: '#',
            },
            {
                id: 4,
                name: 'Дизайн упаковки мыла',
                title: '',
                img: portfolioDemoImg,
                imgAlt: '#',
                imgBig: portfolioDemoImg,
                imgBigAlt: '#',
            },
            {
                id: 5,
                name: 'Дизайн упаковки кремов для рук',
                title: '',
                img: portfolioDemoImg,
                imgAlt: '#',
                imgBig: portfolioDemoImg,
                imgBigAlt: '#',
            },
            {
                id: 6,
                name: 'Дизайн упаковки мыла',
                title: '',
                img: portfolioDemoImg,
                imgAlt: '#',
                imgBig: portfolioDemoImg,
                imgBigAlt: '#',
            },
            {
                id: 7,
                name: 'Дизайн упаковки кремов для рук',
                title: '',
                img: portfolioDemoImg,
                imgAlt: '#',
                imgBig: portfolioDemoImg,
                imgBigAlt: '#',
            },
            {
                id: 8,
                name: 'Дизайн упаковки кремов для рук',
                title: '',
                img: portfolioDemoImg,
                imgAlt: '#',
                imgBig: portfolioDemoImg,
                imgBigAlt: '#',
            }
        ],
        portfolioPopupInfo: {
            popupActive: false,
            selectedPortfolio: false
        }
    }
};


const designPageSlice = createSlice({
    name: 'designPage',
    initialState,
    reducers: {
        serviceFormBtnActive(state, action) {
            const { serviceId, hide } = action.payload;

            if (hide) {
                state.mainServices = initialState.mainServices;
                return;
            }

            state.mainServices = state.mainServices.map((serviceItem) => {
                if (serviceItem && serviceItem.id === serviceId) {
                    return {
                        ...serviceItem,
                        orderForm: {
                            ...serviceItem.orderForm,
                            active: true,
                        }
                    }
                }
                return {
                    ...serviceItem,
                    orderForm: {
                        ...serviceItem.orderForm,
                        active: false
                    }
                }
            });
        },
        serviceFormPopupActive(state, action) {
            const { serviceId } = action.payload;

            state.mainServices = state.mainServices.map((serviceItem) => {
                if (serviceItem && serviceItem.id === serviceId && !serviceItem.orderForm.popupFormActive) {
                    return {
                        ...serviceItem,
                        orderForm: {
                            ...serviceItem.orderForm,
                            active: false,
                            popupFormActive: true
                        }
                    }
                }
                return {
                    ...serviceItem,
                    orderForm: {
                        ...serviceItem.orderForm,
                        active: false,
                        popupFormActive:false
                    }
                }
            })
        },
        portfolioPopupHandler(state) {
            state.portfolio.portfolioPopupInfo =  {
                popupActive: state.portfolio.portfolioPopupInfo.popupActive ? false : true,
                selectedPortfolio: false
            }
        },
        testRed(state, action) {

        }
    }
});

export const {
    serviceFormBtnActive,
    serviceFormPopupActive,
    portfolioPopupHandler,
    testRed
} = designPageSlice.actions;
export default designPageSlice.reducer;