import { createSlice } from "@reduxjs/toolkit";
import backgroundServices from '../../img/services_bg.jpg';
import backgroundAbout from '../../img/about.jpg';
import backgroundContacts from '../../img/contacts.jpg';
import innerHeaderImg from '../../img/1920x400.png';
import serviceImg from '../../img/575x400.png';

const initialState = { 
    headerBackgrounds: [
        { 
            page: '/services',
            backgroundImg: backgroundServices, 
            title: 'Услуги',
            description: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
            breadcrumbs: [
                {
                    name: 'Контрактное производство',
                    url: '/',
                    main: true,
                    active: false,
                },
                {
                    name: 'Услуги',
                    url: '/services',
                    main: false,
                    active: true,
                },
            ]
        },
        { 
            page: '/about', 
            backgroundImg: backgroundAbout, 
            title: 'О компании',
            description: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
            breadcrumbs: [
                {
                    name: 'Контрактное производство',
                    url: '/',
                    main: true,
                    active: false,
                },
                {
                    name: 'О нас',
                    url: '/about',
                    main: false,
                    active: true,
                },
            ]
        },
        { 
            page: '/contacts', 
            backgroundImg: backgroundContacts, 
            title: 'Контакты',
            description: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
            breadcrumbs: [
                {
                    name: 'Контрактное производство',
                    url: '/',
                    main: true,
                    active: false,
                },
                {
                    name: 'Контакты',
                    url: '/contacts',
                    main: false,
                    active: true,
                },
            ]
        },
        { 
            page: '/about/policy', 
            backgroundImg: backgroundAbout, 
            title: 'Политика',
            description: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
            breadcrumbs: [
                {
                    id: 1,
                    name: 'Контрактное производство',
                    url: '/',
                    main: true,
                    active: false,
                },
                {
                    id: 2,
                    name: 'О Нас',
                    url: '/about',
                    main: false,
                    active: false,
                },
                {
                    id: 3,
                    name: 'Политика',
                    url: '/policy',
                    main: false,
                    active: true,
                },
            ]
        },
    ],
    activeBackground: innerHeaderImg,
    servicesPage: {
        serviceFormActive: false,
        servicesItems: [
            {
                id: 1,
                name: 'Разработка косметических рецептур',
                image: serviceImg,
                position: 'left',
                description: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». Благодаря их труду ежегодно сотни питомцев находят свой новый дом.Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым',
            },
            {
                id: 2,
                name: 'Разработка косметики под СТМ',
                image: serviceImg,
                position: 'right',
                description: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». Благодаря их труду ежегодно сотни питомцев находят свой новый дом.Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым',
            },
            {
                id: 3,
                name: 'Химический анализ косметической продукции согласно ГОСТ',
                image: serviceImg,
                position: 'left',
                description: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». Благодаря их труду ежегодно сотни питомцев находят свой новый дом.Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым',
            },
            {
                id: 4,
                name: 'Консультации по выбору упаковки и сопровождение на этапе сертификации готовой продукции',
                image: serviceImg,
                position: 'right',
                description: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». Благодаря их труду ежегодно сотни питомцев находят свой новый дом.Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым',
            }
        ]
    },
    mousePosition: {
        left: 0,
        top: 0,
    }
};

const innerPageSlice = createSlice({
    name: 'innerPage',
    initialState,
    reducers: {
        changeHeaderBackground(state, action) {
            const { currentPage } = action.payload;
            state.activeBackground = state.headerBackgrounds.find((background) => background.page === currentPage).backgroundImg;
        },
        servicePageOrderPopup(state, action) {
            const { status, left, top } = action.payload;
            state.mousePosition.left = left;
            state.mousePosition.top = top;
            state.servicesPage.serviceFormActive = status;
        }
    }
});


export const {
    changeHeaderBackground,
    servicePageOrderPopup
} = innerPageSlice.actions;
export default innerPageSlice.reducer;