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
                    id: 1,
                    name: 'Контрактное производство',
                    url: '/',
                    main: true,
                    active: false,
                },
                {
                    id: 2,
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
                    id: 1,
                    name: 'Контрактное производство',
                    url: '/',
                    main: true,
                    active: false,
                },
                {
                    id: 2,
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
                    id: 1,
                    name: 'Контрактное производство',
                    url: '/',
                    main: true,
                    active: false,
                },
                {
                    id: 2,
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
    contacts: {
        contactsForm: {
            fields: [
                {
                    id: 1,
                    title: 'Имя',
                    fieldType: 'text',
                    fieldName: 'name',
                    fieldValid: true
                },
                {
                    id: 2,
                    title: 'Тип обращения',
                    fieldType: 'select',
                    fieldName: 'orderType',
                    options: [
                        { id: 1, name: 'тип обращения 1', selected: true},
                        { id: 2, name: 'тип обращения 2', selected: false},
                        { id: 3, name: 'тип обращения 3', selected: false},
                        { id: 4, name: 'тип обращения 4', selected: false},
                        { id: 5, name: 'тип обращения 5', selected: false},
                    ],
                    fieldValid: true
                },
                {
                    id: 3,
                    title: 'Телефон',
                    fieldType: 'tel',
                    fieldName: 'phone',
                    fieldValid: true
                },
                {
                    id: 4,
                    title: 'Город',
                    fieldType: 'text',
                    fieldName: 'city',
                    fieldValid: true
                },
                {
                    id: 5,
                    title: 'email',
                    fieldType: 'email',
                    fieldName: 'email',
                    fieldValid: true
                },
                {
                    id: 6,
                    title: 'Предпочтительный способ связи',
                    fieldType: 'options',
                    fieldName: 'callOption',
                    options: [
                        {id: 1, name: 'Телефон', selected: true}, 
                        {id: 2, name: 'Telegram', selected: false}, 
                        {id: 3, name: 'Whatsapp', selected: false}
                    ],
                    fieldValid: true
                },
                {
                    id: 7,
                    title: 'Прикрепить файл',
                    fieldType: 'file',
                    fieldName: 'file',
                    fieldValid: true
                },
                {
                    id: 8,
                    title: 'Комментарий',
                    fieldType: 'textarea',
                    fieldName: 'comment',
                    fieldValid: true
                },
            ]
        }
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
        },
        validateContactsInput(state, action) {
            const { inputType, inputValue } = action.payload;
            console.log(state.contacts.contactsForm.fields.find((fieldItem) => fieldItem.fieldName === inputType).fieldType);
            console.log(inputType);
            console.log(inputValue);
        }
    }
});


export const {
    changeHeaderBackground,
    servicePageOrderPopup,
    validateContactsInput
} = innerPageSlice.actions;
export default innerPageSlice.reducer;