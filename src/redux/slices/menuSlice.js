import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import mobileHeaderTelegrmIcon from '../../img/mobileTelegramMenu.svg'
import mobileHeaderWhatsappIcon from '../../img/mobileWhatsappMenu.svg'
import tzIcon from '../../img/stickyMenu/tzIcon.svg';
import calcIcon from '../../img/stickyMenu/calculatorIcon.svg';
import communicationIcon from '../../img/stickyMenu/communication.svg';
import whatsappIcon from '../../img/whatsapp_footer.svg';
import telegramIcon from '../../img/telegram_footer.svg';

import validateName from '../../functions/validateName'
import validatePhone from '../../functions/validatePhone';
import validateMail from '../../functions/validateMail';
import validateCity from "../../functions/validateCity";
import fileToBase64 from '../../functions/fileToBase64';
import validateUrl from "../../functions/validateUrl";

const initialState = { 
    mobileMenuActive: false,
    mobileHeader: {
        icons: [
            {
                id: 1,
                name: 'https://wa.me/+79643637272',
                img: mobileHeaderWhatsappIcon,
                imgAlt: 'Написать в whtasapp космотех',
                url: ''
            },
            {
                id: 2,
                name: 'https://t.me/+79643637272',
                img: mobileHeaderTelegrmIcon,
                imgAlt: 'Написать в telegram космотех',
                url: 'https://t.me/+79643637272'
            },
        ]
    },
    mainMenu: {
        menuItems: [
            {
                id: 1,
                name: 'Контрактное производство',
                url: '/',
                submenu: {
                    active: false,
                    menuItems: [
                        {
                            id: 1,
                            name: 'Декоративная косметика',
                            url: '/decorative-cosmetics'
                        },
                    ]
                }
            },
            {
                id: 2,
                name: 'Услуги',
                url: '/services',
                submenu: false
            },
            {
                id: 3,
                name: 'О Нас',
                url: '/about',
                submenu: false
            },
            {
                id: 4,
                name: 'Контакты',
                url: '/contacts',
                submenu: false
            }
        ]
    },
    footerMenu: {
        menuItems: [
            {
                id: 1,
                name: 'Клиентам',
                url: '/forclients',
                submenu: false
            },
            {
                id: 2,
                name: 'Вакансии',
                url: '/job',
                submenu: false
            },
        ]
    },
    sideMenu: {
        menuItems: [
            {
                id: 1,
                name: 'ТЗ на производство',
                img: tzIcon,
                imgAlt: 'Заполнить тз на производство косметики онлайн',
                type: 'tz',
                active: false
            },
            {
                id: 2,
                name: 'Кальклуятор',
                img: calcIcon,
                imgAlt: '#',
                type: 'calc',
                active: false
            },
            {
                id: 3,
                name: 'Консультация',
                img: communicationIcon,
                imgAlt: '',
                type: 'contacts',
                active: false
            },
        ],
        tzPopup: {
            active: false,
            allFieldsValid: false,
            resultData: {
                customer: {
                    allFieldsValid: false,
                    companyName: '',
                    customerName: '',
                    customerPhone: '',
                    customerEmail: '',
                },
                product: {
                    cosmeticCategory: '',
                    cosmeticName: '',
                    cosmeticParam: '',
                    cosmeticSize: '',
                    cosmeticCustomUrl: '',
                    customFile: '',
                },
                additionalServices: {
                    selectedServices: [],
                }
            },
            customerPopup: {
                active: false,
                allFieldsValid: false,
                showAddBtn: true,
                fields: [
                    {
                        id: 1,
                        title: 'Название компании (ООО, ИП, ФИЗ.лицо)',
                        name: 'company',
                        type: 'text',
                        placeholder: 'Название компании или ФИО',
                        value: '',
                        valid: true
                    },
                    {
                        id: 2,
                        title: 'Город',
                        name: 'city',
                        type: 'text',
                        placeholder: 'Город',
                        value: '',
                        valid: true
                    },
                    {
                        id: 3,
                        title: 'Телефон',
                        name: 'phone',
                        type: 'text',
                        placeholder: '8xxxxxxxxxx',
                        value: '',
                        valid: true
                    },
                    {
                        id: 4,
                        title: 'Email',
                        name: 'email',
                        type: 'email',
                        placeholder: 'demo@....ru',
                        value: '',
                        valid: true
                    },
                ],
            },
            productPopup: {
                active: false,
                allFieldsValid: false,
                showAddBtn: true,
                productTypes: [
                    { id: 1, name: '--Выберите тип косметики--', type: 'default', value: '--Выберите тип косметики--', selected: false},
                    { id: 2, name: 'косметика', type: 'cosmetic', value: 'косметика', selected: false },
                    { id: 3, name: 'декоративная косметика', type: 'decorative', value: 'декоративная косметика', selected: false }
                ],
                cosmeticProducts: [
                    { id: 1, name: '--Выберите тип продукта--', type: 'default', value: '--Выберите тип продукта--', selected: false},
                    { id: 2, name: 'косметика продукт 1', type: 'cosmetic', value: 'косметика продукт 1', selected: false },
                    { id: 3, name: 'косметика продукт 2', type: 'cosmetic', value: 'косметика продукт 2', selected: false },
                    { id: 4, name: 'косметика продукт 3', type: 'cosmetic', value: 'косметика продукт 3', selected: false },
                    { id: 5, name: 'свой вариант', type: 'cosmetic', value: 'свой вариант', selected: false, customField: true },
                ],
                decorProducts: [
                    { id: 1, name: '--Выберите тип продукта--', type: 'default', value: '--Выберите тип продукта--', selected: false},
                    { id: 2, name: 'декор косметика продукт 1', type: 'decorCosmetic', value: 'декор косметика продукт 1', selected: false },
                    { id: 3, name: 'декор косметика продукт 2', type: 'decorCosmetic', value: 'декор косметика продукт 2', selected: false },
                    { id: 4, name: 'декор косметика продукт 3', type: 'decorCosmetic', value: 'декор косметика продукт 3', selected: false },
                    { id: 5, name: 'свой вариант', type: 'decorCosmetic', value: 'свой вариант', selected: false, customField: true, },
                ],
                cosmeticProductsCustomField: {
                    title: 'cosmeticProductsCustomField',
                    name: 'cosmeticProductsCustomField',
                    type: 'text',
                    placeholder: 'Описание cosmeticProductsCustomField',
                    value: '',
                    valid: true
                },
                decorProductsCustomField: {
                    title: 'decorProductsCustomField',
                    name: 'decorProductsCustomField',
                    type: 'text',
                    placeholder: 'Описание decorProductsCustomField',
                    value: '',
                    valid: true
                },
                cosmeticProductsCustomFile: {
                    name: '',
                    type: '',
                    fileData: '',
                    url: '',
                    date: '',
                    displayName: '',
                },
                priceSegment: [],
                fields : [
                    {
                        id: 1,
                        title: 'Желаемые характеристики',
                        name: 'productStats',
                        type: 'textarea',
                        placeholder: 'Описание характеристики продукта',
                        value: '',
                        valid: true
                    },
                    {
                        id: 2,
                        title: 'Пример продукта (ссылка)',
                        name: 'productLink',
                        type: 'text',
                        placeholder: 'https://my-site.com',
                        value: '',
                        valid: true
                    },
                    {
                        id: 3,
                        title: 'Объем единицы',
                        name: 'productSize',
                        type: 'text',
                        placeholder: 'например 200мл',
                        value: '',
                        valid: true
                    },
                    {
                        id: 4,
                        title: 'Прикрепить файл / фото / тех.карта',
                        name: 'productDoc',
                        type: 'file',
                        placeholder: 'Описание характеристики продукта',
                        value: '',
                        valid: true
                    },
                ],
                customDecorFields: [
                    {
                        id: 1,
                        title: 'Свой вариант',
                        name: 'customDecor',
                        type: 'text',
                        placeholder: 'Название желаемого продукта',
                        value: '',
                        valid: true
                    },
                ],
                customCosmFields: [
                    {
                        id: 1,
                        title: 'Свой вариант',
                        name: 'customCosm',
                        type: 'text',
                        placeholder: 'Название желаемого продукта',
                        value: '',
                        valid: true
                    },
                ]
    
            },
            packageOptions: {
                packageCustomField: {
                    id: 1,
                    title: 'Желаемые характеристики',
                    name: 'requestPackage',
                    type: 'text',
                    placeholder: 'Ваш формат упаковки',
                    value: '',
                    valid: true
                },
                packageTypeOptions: [
                    { 
                        id: 1, 
                        name: '--Выберите тип косметики--',
                        type: 'default', 
                        value: '--Выберите тип косметики--',
                        additionalOptions: [],
                        selected: true
                    },
                    { 
                        id: 2, 
                        name: 'Косметика', 
                        type: 'cosmetic', 
                        value: 'Косметика', 
                        selected: false 
                    },
                    { 
                        id: 3, 
                        name: 'Декоративная косметика', 
                        type: 'decorativeCosm', 
                        value: 'Декоративная косметика', 
                        selected: false 
                    },
                ],
                packageFormatOptions: {
                    cosmetic: [
                        { 
                            id: 1, 
                            name: '--Выберите формат упаковки--',
                            type: 'default', 
                            value: '--Выберите тип упаковки--',
                            additionalOptions: [],
                            selected: true
                        },
                        { 
                            id: 2, 
                            name: 'Флакон D20', 
                            type: 'package', 
                            value: 'Флакон D20', 
                            additionalOptions: [
                                {
                                    id: 1, 
                                    name: '--Выберите формат головы--',
                                    type: 'default', 
                                    value: '--Выберите формат головы--',
                                    selected: true 
                                },
                                { 
                                    id: 2, 
                                    name: 'Дозатор 20', 
                                    type: 'head', 
                                    value: 'Дозатор 20', 
                                    selected: false 
                                },
                                { 
                                    id: 3, 
                                    name: 'Флип-топ 20', 
                                    type: 'head', 
                                    value: 'Флип-топ 20', 
                                    selected: false 
                                },
                                { 
                                    id: 4, 
                                    name: 'Дозатор 20', 
                                    type: 'head', 
                                    value: 'Дозатор 20', 
                                    selected: false 
                                },
                                { 
                                    id: 5, 
                                    name: 'Спрей 20', 
                                    type: 'head', 
                                    value: 'Спрей 20', 
                                    selected: false 
                                },
                                { 
                                    id: 6, 
                                    name: 'Носик 20', 
                                    type: 'head', 
                                    value: 'Носик 20', 
                                    selected: false 
                                },
                                { 
                                    id: 7, 
                                    name: 'Мини-триггер 20', 
                                    type: 'head', 
                                    value: 'Мини-триггер 20', 
                                    selected: false 
                                },
                            ],
                            selected: false 
                        },
                        { 
                            id: 3, 
                            name: 'Флакон D24', 
                            type: 'package', 
                            value: 'Флакон D24', 
                            additionalOptions: [
                                {
                                    id: 1, 
                                    name: '--Выберите формат головы--',
                                    type: 'default', 
                                    value: '--Выберите формат головы--',
                                    selected: true 
                                },
                                { 
                                    id: 2, 
                                    name: 'Дозатор 24', 
                                    type: 'head', 
                                    value: 'Дозатор 24', 
                                    selected: false 
                                },
                                { 
                                    id: 3, 
                                    name: 'Флип-топ 24', 
                                    type: 'head', 
                                    value: 'Флип-топ 24', 
                                    selected: false 
                                },
                                { 
                                    id: 4, 
                                    name: 'Дозатор 24', 
                                    type: 'head', 
                                    value: 'Дозатор 24', 
                                    selected: false 
                                },
                                { 
                                    id: 5, 
                                    name: 'Спрей 24', 
                                    type: 'head', 
                                    value: 'Спрей 24', 
                                    selected: false 
                                },
                                { 
                                    id: 6, 
                                    name: 'Носик 24', 
                                    type: 'head', 
                                    value: 'Носик 24', 
                                    selected: false 
                                },
                                { 
                                    id: 7, 
                                    name: 'Мини-триггер 24', 
                                    type: 'head', 
                                    value: 'Мини-триггер 24', 
                                    selected: false 
                                },
                            ],
                            selected: false 
                        },
                        { 
                            id: 4, 
                            name: 'Флакон D28', 
                            type: 'package', 
                            value: 'Флакон D28', 
                            additionalOptions: [
                                {
                                    id: 1, 
                                    name: '--Выберите формат головы--',
                                    type: 'default', 
                                    value: '--Выберите формат головы--',
                                    selected: true 
                                },
                                { 
                                    id: 2, 
                                    name: 'Дозатор 28', 
                                    type: 'head', 
                                    value: 'Дозатор 28', 
                                    selected: false 
                                },
                                { 
                                    id: 3, 
                                    name: 'Флип-топ 28', 
                                    type: 'head', 
                                    value: 'Флип-топ 28', 
                                    selected: false 
                                },
                                { 
                                    id: 4, 
                                    name: 'Дозатор 28', 
                                    type: 'head', 
                                    value: 'Дозатор 28', 
                                    selected: false 
                                },
                                { 
                                    id: 5, 
                                    name: 'Спрей 28', 
                                    type: 'head', 
                                    value: 'Спрей 28', 
                                    selected: false 
                                },
                                { 
                                    id: 6, 
                                    name: 'Носик 28', 
                                    type: 'head', 
                                    value: 'Носик 28', 
                                    selected: false 
                                },
                                { 
                                    id: 7, 
                                    name: 'Мини-триггер 28', 
                                    type: 'head', 
                                    value: 'Мини-триггер 28', 
                                    selected: false 
                                },
                            ],
                            selected: false 
                        },
                        { 
                            id: 5, 
                            name: 'Флакон D42 пенный + помпа', 
                            type: 'package', 
                            value: 'Флакон D42 пенный + помпа', 
                            additionalOptions: [
                                {
                                    id: 1, 
                                    name: '--Выберите формат головы--',
                                    type: 'default', 
                                    value: '--Выберите формат головы--',
                                    selected: true 
                                },
                                { 
                                    id: 2, 
                                    name: 'В сборе', 
                                    type: 'head', 
                                    value: 'В сборе', 
                                    selected: false 
                                },
                            ],
                            selected: false 
                        },
                        { 
                            id: 6, 
                            name: 'Банка', 
                            type: 'package', 
                            value: 'Банка', 
                            additionalOptions: [
                                {
                                    id: 1, 
                                    name: '--Выберите формат головы--',
                                    type: 'default', 
                                    value: '--Выберите формат головы--',
                                    selected: true 
                                },
                                { 
                                    id: 2, 
                                    name: 'В сборе', 
                                    type: 'head', 
                                    value: 'В сборе', 
                                    selected: false 
                                },
                            ],
                            selected: false 
                        },
                        { 
                            id: 7, 
                            name: 'Вакуумный диспенсер', 
                            type: 'package', 
                            value: 'Вакуумный диспенсер', 
                            additionalOptions: [
                                {
                                    id: 1, 
                                    name: '--Выберите формат головы--',
                                    type: 'default', 
                                    value: '--Выберите формат головы--',
                                    selected: true 
                                },
                                { 
                                    id: 2, 
                                    name: 'В сборе', 
                                    type: 'head', 
                                    value: 'В сборе', 
                                    selected: false 
                                },
                            ],
                            selected: false 
                        },
                        { 
                            id: 8, 
                            name: 'Флакон стекло D18', 
                            type: 'package', 
                            value: 'Флакон стекло D18', 
                            additionalOptions: [
                                {
                                    id: 1, 
                                    name: '--Выберите формат головы--',
                                    type: 'default', 
                                    value: '--Выберите формат головы--',
                                    selected: true 
                                },
                                { 
                                    id: 2, 
                                    name: 'Пипетка', 
                                    type: 'head', 
                                    value: 'Пипетка', 
                                    selected: false 
                                },
                                { 
                                    id: 3, 
                                    name: 'Крышка накрутка', 
                                    type: 'head', 
                                    value: 'Крышка накрутка', 
                                    selected: false 
                                },
                            ],
                            selected: false 
                        },
                        { 
                            id: 9, 
                            name: 'Туба', 
                            type: 'package', 
                            value: 'Туба', 
                            additionalOptions: [
                                {
                                    id: 1, 
                                    name: '--Выберите формат головы--',
                                    type: 'default', 
                                    value: '--Выберите формат головы--',
                                    selected: true 
                                },
                                { 
                                    id: 2, 
                                    name: 'Диаметр D25', 
                                    type: 'head', 
                                    value: 'Диаметр D25', 
                                    selected: false 
                                },
                                { 
                                    id: 3, 
                                    name: 'Диаметр D50', 
                                    type: 'head', 
                                    value: 'Диаметр D50', 
                                    selected: false 
                                },
                            ],
                            selected: false 
                        },
                        { 
                            id: 11, 
                            name: 'Предложите мне вариант', 
                            type: 'requestPackage', 
                            value: 'Предложите мне вариант', 
                            additionalOptions: [],
                            selected: false 
                        },
                        { 
                            id: 10, 
                            name: 'Cвой вариант', 
                            type: 'customField', 
                            value: 'Cвой вариант', 
                            additionalOptions: [],
                            selected: false 
                        },
                    ],
                    decorative: [
                        { 
                            id: 1, 
                            name: '--Выберите формат упаковки--',
                            type: 'default', 
                            value: '--Выберите тип упаковки--',
                            additionalOptions: [],
                            selected: true
                        },
                        { 
                            id: 2, 
                            name: 'Предложите мне вариант', 
                            type: 'requestPackage', 
                            value: 'Предложите мне вариант', 
                            additionalOptions: [],
                            selected: false 
                        },
                        { 
                            id: 3, 
                            name: 'Cвой вариант', 
                            type: 'customField', 
                            value: 'Cвой вариант', 
                            additionalOptions: [],
                            selected: false 
                        },
                    ]
                }
            },
            additionalOptionsPopup: {
                active: false,
                allFieldsValid: true,
                showAddBtn: true,
                saveBtnActive: true,
                services: [
                    { id: 1, name: 'Термоусадка',  selected: false },
                    { id: 2, name: 'Cборка в пенал',  selected: false },
                    { id: 3, name: 'Индукционная запайка',  selected: false },
                    { id: 4, name: 'Поклейка этикеток крышки / донышки',  selected: false },
                ]
            }
        },
        calcPopup: {
            active: false,
        },
        contactsPopup: {
            active: false,
            sendBtnActive: false,
            checkboxActive: false,
            messagers: [
                {
                    id: 1,
                    name: 'whatsapp',
                    img: whatsappIcon,
                    imgAlt: 'написать в whatsapp космотех',
                    url: 'https://wa.me/+79643637272',
                },
                {
                    id: 2,
                    name: 'telegram',
                    img: telegramIcon,
                    imgAlt: 'написать в телеграм космотех',
                    url: 'https://t.me/+79643637272',
                },
            ],
            fields: [
                {
                    id: 1,
                    title: 'Имя',
                    name: 'name',
                    type: 'text',
                    placeholder: 'Ваше Имя',
                    value: '',
                    valid: true
                },
                {
                    id: 2,
                    title: 'Телефон',
                    name: 'phone',
                    type: 'text',
                    placeholder: '8xxxxxxxxxx',
                    value: '',
                    valid: true
                }
            ],
        }
    }
};

export const uploadProductFile = createAsyncThunk(
    'uploadTzProductFile',
    async (file) => {
        const data = await fileToBase64(file);
        return data;
    }
);

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        mobileMenuActive(state, action) {
            const { status } = action.payload;
            state.mobileMenuActive = status;
        },
        submenuActive(state, action) {
            const { menuId, menuName, mobile } = action.payload;
            const findActiveMenu = state.mainMenu.menuItems.find((item) => item.id === menuId && item.name === menuName && item.submenu);
            if (findActiveMenu && findActiveMenu.id === menuId && findActiveMenu.name === menuName) {
                state.mainMenu.menuItems = state.mainMenu.menuItems.map((menuItem) => {
                    if (menuItem.id === menuId && menuItem.name === menuName && menuItem.submenu) {
                        return {
                            ...menuItem,
                            submenu: {
                                ...menuItem.submenu,
                                active: true
                            }
                        }
                    }
                    return menuItem;
                });
                return
            }
            state.mainMenu.menuItems = initialState.mainMenu.menuItems;
        },
        resetMenu(state) {
            state.mainMenu.menuItems = initialState.mainMenu.menuItems;
        },
        sidemenuActive(state, action) {
            const { menuId, status } = action.payload;
            state.sideMenu.menuItems = state.sideMenu.menuItems.map((menuItem) => {
                if (menuId === menuItem.id) {
                    return {
                        ...menuItem,
                        active: status
                    }
                }
                return {
                    ...menuItem,
                    active: false
                };
            });
        },
        sidemenuPopup(state, action) {
            const { status, popupType } = action.payload;
            switch (popupType) {
                case 'tz' : 
                    state.sideMenu.tzPopup = {
                        ... state.sideMenu.tzPopup,
                        active:  state.sideMenu.tzPopup.active ? false : true
                    }
                    break;
                case 'calc' : 
                    state.sideMenu.calcPopup = {
                        ... state.sideMenu.calcPopup,
                        active:  state.sideMenu.calcPopup.active ? false : true
                    }
                    break
                case 'contacts' :
                    !status ? state.sideMenu.contactsPopup = initialState.sideMenu.contactsPopup :
                        state.sideMenu.contactsPopup = {
                            ...state.sideMenu.contactsPopup,
                            active: state.sideMenu.contactsPopup.active ? false : true
                        } 
                    break
                default : break;
            }
        },
        sidemenuTzInnerPopup(state, action) {
            const { status, popupType } = action.payload;
            if (!status) {
                state.sideMenu.tzPopup.customerPopup = initialState.sideMenu.tzPopup.customerPopup;
                state.sideMenu.tzPopup.productPopup = initialState.sideMenu.tzPopup.productPopup;
                return;
            }
            switch (popupType) {
                case 'customer':
                    state.sideMenu.tzPopup.customerPopup = {
                        ...state.sideMenu.tzPopup.customerPopup,
                        active: status
                    }
                    break;
                case 'product':
                    state.sideMenu.tzPopup.productPopup = {
                        ...state.sideMenu.tzPopup.productPopup,
                        active: status
                    }

                default : break;
            }
        },
        sidemenuPolicyCheckboxHandler(state, action) {
            const { formName } = action.payload;
            
            switch (formName) {
                case 'tz':
                    state.sideMenu.contactsPopup.checkboxActive = state.sideMenu.contactsPopup.checkboxActive ? false : true;
                    break;
                case 'consult':
                    state.sideMenu.contactsPopup.checkboxActive = state.sideMenu.contactsPopup.checkboxActive ? false : true;
                    break;
 
                default : break
            }
        },
        tzInnerPopupCustomerInput(state, action) {
            const { inputId, inputType, inputValue } = action.payload;
            let validValue = inputValue;
            let inputValid;
            
            switch(inputType) {
                case 'company':
                    inputValid = validateName(inputValue);
                    validValue = inputValue;
                    break;
                case 'email':
                    inputValid = !validateMail(inputValue) ? true : false;
                    validValue = inputValue;
                    break;
                case 'phone':
                    const phoneStr = validatePhone(inputValue);
                    inputValid = phoneStr.length === 18 ? true : false
                    validValue = phoneStr;
                    break;
                case 'city':
                    inputValid = validateCity(inputValue);
                    validValue = inputValue;
                    break;
                default:
                    break;
            }
            state.sideMenu.tzPopup.customerPopup.fields = state.sideMenu.tzPopup.customerPopup.fields.map((fieldItem) => {
                if (fieldItem.id === inputId, fieldItem.name === inputType) {
                    return {
                        ...fieldItem,
                        value: validValue,
                        valid: inputValid
                    }
                }
                return fieldItem;
            });
        },
        validateTzPopupCustomer(state) {
            const checkCompany = state.sideMenu.tzPopup.customerPopup.fields.find((item) => item.name === 'company' && item.value && item.valid);
            const checkEmail= state.sideMenu.tzPopup.customerPopup.fields.find((item) => item.name === 'email' && item.value && item.valid);
            const checkPhone = state.sideMenu.tzPopup.customerPopup.fields.find((item) => item.name === 'phone' && item.value && item.valid);

            if (checkCompany && (checkEmail || checkPhone)) {
                state.sideMenu.tzPopup.customerPopup.allFieldsValid = true;
                return;
            }
            state.sideMenu.tzPopup.customerPopup.allFieldsValid = false;
        },
        clearTzPopupInput(state, action) {
            const { popupType, inputId, inputType } = action.payload;

            if (popupType === 'product' && inputType === 'customCosm') {
                state.sideMenu.tzPopup.productPopup.customCosmFields = state.sideMenu.tzPopup.productPopup.customCosmFields.map((fieldItem) => {
                    if (inputId === fieldItem.id && fieldItem.name === inputType) {
                        return ({
                            ...fieldItem,
                            valid: true,
                            value: ''
                        })
                    }
                    return fieldItem;
                })
                return;
            }
            else if (popupType === 'product' && inputType === 'customDecor') {
                state.sideMenu.tzPopup.productPopup.customDecorFields = state.sideMenu.tzPopup.productPopup.customDecorFields.map((fieldItem) => {
                    if (inputId === fieldItem.id && fieldItem.name === inputType) {
                        return ({
                            ...fieldItem,
                            valid: true,
                            value: ''
                        })
                    }
                    return fieldItem;
                });
                return;
            }

            switch(popupType) {
                case 'customer':
                    state.sideMenu.tzPopup.customerPopup.fields = state.sideMenu.tzPopup.customerPopup.fields.map((fieldItem) => {
                        if (fieldItem.id === inputId && fieldItem.name === inputType) {
                            return {
                                ...fieldItem,
                                value: '',
                                valid: false
                            }
                        }
                        return fieldItem;
                    })
                    break;
                case 'product':
                    state.sideMenu.tzPopup.productPopup.fields = state.sideMenu.tzPopup.productPopup.fields.map((fieldItem) => {
                        if (fieldItem.id === inputId && fieldItem.name === inputType) {
                            return {
                                ...fieldItem,
                                value: '',
                                valid: false
                            }
                        }
                        return fieldItem;
                    });
                    break;
                default:
                    break;
            }
        },
        saveTzInnerPopup(state, action) {
            const { popupType } = action.payload;

            switch (popupType) {
                case 'customer':
                    state.sideMenu.tzPopup.resultData.customer = {
                        ...state.sideMenu.tzPopup.resultData.customer,
                        allFieldsValid: true,
                        companyName:  state.sideMenu.tzPopup.customerPopup.fields.find((item) => item.name === 'company').value,
                        customerName: state.sideMenu.tzPopup.customerPopup.fields.find((item) => item.name === 'city').value,
                        customerPhone: state.sideMenu.tzPopup.customerPopup.fields.find((item) => item.name === 'phone').value,
                        customerEmail: state.sideMenu.tzPopup.customerPopup.fields.find((item) => item.name === 'email').value,
                    }
                    state.sideMenu.tzPopup.customerPopup.active = false;
                    break;
                case 'product':
                    const cosmeticTypeSelected = state.sideMenu.tzPopup.productPopup.productTypes.find((item) => item.selected && item.type !== 'default');
                    const cosmeticSelected = state.sideMenu.tzPopup.productPopup.cosmeticProducts.find(
                        (item) => item.selected && !item.customField && item.type !== 'default'
                    );
                    const decorCosmeticSelected = state.sideMenu.tzPopup.productPopup.decorProducts.find(
                        (item) => item.selected && !item.customField && item.type !== 'default'
                    );
                    const cosmeticSelectedCustom = state.sideMenu.tzPopup.productPopup.cosmeticProducts.find((item) => item.selected && item.customField);
                    const decorCosmeticSelectedCustom = state.sideMenu.tzPopup.productPopup.decorProducts.find((item) => item.selected && item.customField);
                    let productName = '';

                    if (cosmeticSelectedCustom) {
                        productName = state.sideMenu.tzPopup.productPopup.customCosmFields.find((item) => item.name === 'customCosm').value;
                    }
                    if (decorCosmeticSelectedCustom) {
                        productName = state.sideMenu.tzPopup.productPopup.customDecorFields.find((item) => item.name === 'customDecor').value;
                    }
                    if (cosmeticSelected) productName = cosmeticSelected.value;
                    else if (decorCosmeticSelected) productName = decorCosmeticSelected.value;

                    state.sideMenu.tzPopup.resultData.product = {
                        ...state.sideMenu.tzPopup.resultData.product,
                        allFieldsValid: true,
                        cosmeticCategory: cosmeticTypeSelected.value,
                        cosmeticName: productName,
                        cosmeticParam: state.sideMenu.tzPopup.productPopup.fields.find((item) => item.name === 'productStats').value,
                        cosmeticSize: state.sideMenu.tzPopup.productPopup.fields.find((item) => item.name === 'productSize').value,
                        cosmeticCustomUrl: state.sideMenu.tzPopup.productPopup.fields.find((item) => item.name === 'productLink').value,
                        customFile: state.sideMenu.tzPopup.productPopup.cosmeticProductsCustomFile,
                    };
                    state.sideMenu.tzPopup.productPopup.active = false;
                    break;
                default : break;
            }
        },
        removeTzPopupInfo(state, action) {
            const { popupType } = action.payload;
            switch (popupType) {
                case 'customer':
                    state.sideMenu.tzPopup.resultData.customer = initialState.sideMenu.tzPopup.resultData.customer;
                    state.sideMenu.tzPopup.customerPopup = initialState.sideMenu.tzPopup.customerPopup;
                    break;
                case 'product':
                    state.sideMenu.tzPopup.resultData.product = initialState.sideMenu.tzPopup.resultData.product;
                    state.sideMenu.tzPopup.productPopup = initialState.sideMenu.tzPopup.productPopup;
                    break;
                default:
                    break;
            }
        },
        tzInnerPopupProductInput(state, action) {
            const { inputId, inputType, inputValue } = action.payload;
            let validValue = inputValue;
            let inputValid;
            if (inputType === 'customCosm') {
                state.sideMenu.tzPopup.productPopup.customCosmFields = state.sideMenu.tzPopup.productPopup.customCosmFields.map((fieldItem) => {
                    if (inputId === fieldItem.id && fieldItem.name === inputType) {
                        return ({
                            ...fieldItem,
                            valid: true,
                            value: inputValue
                        })
                    }
                    return fieldItem;
                })
                return;
            }
            else if (inputType === 'customDecor') {
                state.sideMenu.tzPopup.productPopup.customDecorFields = state.sideMenu.tzPopup.productPopup.customDecorFields.map((fieldItem) => {
                    if (inputId === fieldItem.id && fieldItem.name === inputType) {
                        return ({
                            ...fieldItem,
                            valid: true,
                            value: inputValue
                        })
                    }
                    return fieldItem;
                });
                return;
            }

            switch(inputType) {
                case 'productSize':
                    inputValid = /^\d{0,4}\w[а-я]{2,4}$/.test(inputValue);
                    validValue = inputValue;
                    break;
                case 'productLink':
                    inputValid = validateUrl(inputValue);
                    validValue = inputValue;
                    break;
                default:
                    break;
            }


            state.sideMenu.tzPopup.productPopup.fields = state.sideMenu.tzPopup.productPopup.fields.map((fieldItem) => {
                if (inputId === fieldItem.id && inputType === fieldItem.name) {
                    return {
                        ...fieldItem,
                        value: validValue,
                        valid: inputValid
                    }
                }
                return fieldItem;
            });
        },
        tzInnerPopupSelect(state, action) {
            const { selectType, selectValue, popupType } = action.payload;
            if (!popupType || !selectType) return;
            if (popupType === 'product') {
                state.sideMenu.tzPopup.productPopup.cosmeticProducts = initialState.sideMenu.tzPopup.productPopup.cosmeticProducts;
                state.sideMenu.tzPopup.productPopup.decorProducts = initialState.sideMenu.tzPopup.productPopup.decorProducts;
                state.sideMenu.tzPopup.productPopup.customCosmFields = initialState.sideMenu.tzPopup.productPopup.customCosmFields;
                state.sideMenu.tzPopup.productPopup.customDecorFields = initialState.sideMenu.tzPopup.productPopup.customDecorFields;

                state.sideMenu.tzPopup.productPopup[selectType] = state.sideMenu.tzPopup.productPopup[selectType].map((productType, i) => {
                    if (productType.value === selectValue) {
                        return {
                            ...productType,
                            selected: true
                        }
                    }
                    return {
                        ...productType,
                        selected: false
                    }
                });
            }
        },
        validateTzPopupProduct(state) {
            const checkProductType = state.sideMenu.tzPopup.productPopup.productTypes.find(
                (item) => item.selected && item.type !== 'default' && !item.customField
            );
            const checkCosmeticProduct = state.sideMenu.tzPopup.productPopup.cosmeticProducts.find(
                (item) => item.selected && item.type !== 'default' && !item.customField
            );
            const checkDecorativeProduct = state.sideMenu.tzPopup.productPopup.decorProducts.find(
                (item) => item.selected && item.type !== 'default' && !item.customField
            );
            
            const checkCustomCosmFields = state.sideMenu.tzPopup.productPopup.customCosmFields.find((item) => item.value && item.valid);
            const checkCustomDecorFields = state.sideMenu.tzPopup.productPopup.customDecorFields.find((item) => item.value && item.valid);
           
            if ((checkProductType && checkCosmeticProduct) || (checkProductType && checkDecorativeProduct) ||
                (checkProductType && checkCustomCosmFields) || (checkProductType && checkCustomDecorFields)) {
                state.sideMenu.tzPopup.productPopup.allFieldsValid = true;
                return;
            }
            state.sideMenu.tzPopup.productPopup.allFieldsValid = false;
        },
        optionsPopupShow(state) {
            state.sideMenu.tzPopup.additionalOptionsPopup.active = state.sideMenu.tzPopup.additionalOptionsPopup.active ? false : true;
        },
        optionSelectItemPopup(state, action) {
            const { optionId, optionName } = action.payload;
            state.sideMenu.tzPopup.additionalOptionsPopup.services = state.sideMenu.tzPopup.additionalOptionsPopup.services.map((serviceItem) => {
                if (optionId === serviceItem.id && optionName === serviceItem.name) {
                    return {
                        ...serviceItem,
                        selected: serviceItem.selected ? false : true
                    }
                }
                return serviceItem;
            });
        },
        optionSelectSavePopup(state) {
            state.sideMenu.tzPopup.resultData.additionalServices.selectedServices = [
                ...state.sideMenu.tzPopup.additionalOptionsPopup.services.filter((serviceItem) => serviceItem.selected)
            ];
            state.sideMenu.tzPopup.additionalOptionsPopup.active = false;
        },
        validateAdditionalOptions(state) {
            const countSelectedOptions = state.sideMenu.tzPopup.additionalOptionsPopup.services.filter((item) => item.selected).length;
            if (countSelectedOptions === state.sideMenu.tzPopup.resultData.additionalServices.selectedServices.length) {
                state.sideMenu.tzPopup.additionalOptionsPopup.saveBtnActive = false;
                return;
            }
            state.sideMenu.tzPopup.additionalOptionsPopup.saveBtnActive = true;
        },
        packageSelect(state, action) {
            const { selectType, selectValue } = action.payload;

            switch(selectType) {
                case 'packageType':
                    state.sideMenu.tzPopup.packageOptions.packageFormatOptions = initialState.sideMenu.tzPopup.packageOptions.packageFormatOptions;
                    state.sideMenu.tzPopup.packageOptions.packageTypeOptions = 
                        state.sideMenu.tzPopup.packageOptions.packageTypeOptions.map((packageType) => {
                            if (selectValue === packageType.value) {
                                return {
                                    ...packageType,
                                    selected: true
                                }
                            }
                            return {
                                ...packageType,
                                selected: false
                            }  
                    });
                    break
                case 'cosmetic':
                case 'decorative':
                    state.sideMenu.tzPopup.packageOptions.packageFormatOptions[selectType] = 
                        state.sideMenu.tzPopup.packageOptions.packageFormatOptions[selectType].map((formatItem) => {
                            if (formatItem.value === selectValue) {
                                return {
                                    ...formatItem,
                                    additionalOptions: formatItem.additionalOptions ? [...formatItem.additionalOptions] : [],
                                    selected: true
                                }
                            }
                            return {
                                ...formatItem,
                                additionalOptions: formatItem.additionalOptions ? [...formatItem.additionalOptions] : [],
                                selected: false
                            }
                    });
                    break
                case 'cosmeticOption':
                case 'decorativeOption':
                    const param = selectType === 'cosmeticOption' ? 'cosmetic' : 'decorative';
                    const selectedItem = state.sideMenu.tzPopup.packageOptions.packageFormatOptions[param].find((item) => item.selected);
                    state.sideMenu.tzPopup.packageOptions.packageFormatOptions[param] = 
                        state.sideMenu.tzPopup.packageOptions.packageFormatOptions[param].map((cosmeticItem) => {
                            if (cosmeticItem.id === selectedItem.id) {
                                return {
                                    ...cosmeticItem,
                                    additionalOptions: cosmeticItem.additionalOptions.map((additionalOption) => {
                                        if (additionalOption.value === selectValue) {
                                            return {
                                                ...additionalOption,
                                                selected: true
                                            }
                                        }
                                        return {
                                            ...additionalOption,
                                            selected: false
                                        }
                                    })
                                }
                            }
                            return cosmeticItem;
                    });
                    break;
                default:
                    break
            }
        },
        customPackageInput(state, action) {
            const { inputValue } = action.payload;
            state.sideMenu.tzPopup.packageOptions.packageCustomField = {
                ...state.sideMenu.tzPopup.packageOptions.packageCustomField,
                value: inputValue
            }
        },
        validateTzPackage(state) {
            const cosmPackageSelected = state.sideMenu.tzPopup.packageOptions.packageFormatOptions.cosmetic.find(
                (item) => item.selected && item.type !== 'default'
            );
            const decorPackageSelected = state.sideMenu.tzPopup.packageOptions.packageFormatOptions.decorative.find(
                (item) => item.selected && item.type !== 'default'
            );
            const customField = state.sideMenu.tzPopup.packageOptions.packageCustomField;

            const cosmPackageAdditional = cosmPackageSelected && cosmPackageSelected.additionalOptions ? 
                cosmPackageSelected.additionalOptions.find((item) => item.selected) : null;

            const decorPackageAdditional = decorPackageSelected && decorPackageSelected.additionalOptions ? 
            decorPackageSelected.additionalOptions.find((item) => item.selected) : null;

            const cosmeticPackageValid = (cosmPackageSelected && cosmPackageSelected.value 
                && cosmPackageAdditional && cosmPackageAdditional.type !== 'default') ||  customField.value !== '';

            const decorativePackageValid = (decorPackageSelected && decorPackageSelected.value 
                && decorPackageAdditional && decorPackageAdditional.type !== 'default') ||  customField.value !== '';

            if (cosmeticPackageValid || decorativePackageValid) {
                state.sideMenu.tzPopup.packageOptions.allFieldsValid = true;
                return;
            }
            state.sideMenu.tzPopup.packageOptions.allFieldsValid = false;
        },
        consultFormInput(state, action) {
            const { inputId, inputType, inputValue } = action.payload;
            let validValue = inputValue;
            let inputValid;
            if (inputType === 'name') {
                inputValid = validateName(inputValue)
                validValue = inputValue
            }
            else if (inputType === 'phone' && inputValue && inputValue.length !== 18) {
                const phoneStr = validatePhone(inputValue);
                inputValid = phoneStr.length === 18 ? true : false
                validValue = phoneStr;
            }
            state.sideMenu.contactsPopup.fields = state.sideMenu.contactsPopup.fields.map((fieldItem) => {
                if (inputId === fieldItem.id && inputType === fieldItem.name) {
                    return {
                        ...fieldItem,
                        value: validValue,
                        valid: inputValid
                    }
                }
                return fieldItem;
            });
        },
        consultFormClearInput(state, action) {
            const { inputId, inputType } = action.payload;
            state.sideMenu.contactsPopup.fields = state.sideMenu.contactsPopup.fields.map((fieldItem) => {
                if (inputId === fieldItem.id && inputType === fieldItem.name) {
                    return {
                        ...fieldItem,
                        value: '',
                        valid : false
                    }
                }
                return fieldItem;
            })
        },
        validateConsultForm(state) {
            const nameField = state.sideMenu.contactsPopup.fields.find((item) => item.name === 'name' && item.valid);
            const phoneField = state.sideMenu.contactsPopup.fields.find((item) => item.name === 'phone' && item.valid);
            const checkbox = state.sideMenu.contactsPopup.checkboxActive;
            if (checkbox && nameField && nameField.value && phoneField && phoneField.value) {
                state.sideMenu.contactsPopup.sendBtnActive = true;
                return;
            }
            state.sideMenu.contactsPopup.sendBtnActive = false;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(uploadProductFile.fulfilled, (state, action) => {
            const { file, name, type, url, date } = action.payload;
            const nameLength = name.length;
            const displayFilename = nameLength > 10 ? `${name.match(/^.{10}/)}... ${name.match(/.\w+$/)[0]}` : name;
            state.sideMenu.tzPopup.productPopup.cosmeticProductsCustomFile  = {
                ...state.sideMenu.tzPopup.productPopup.cosmeticProductsCustomFile,
                name: name,
                type: type,
                url: url,
                date: date,
                displayName: displayFilename,
                fileData: file
            }
        })
    }
});


export const {
    mobileMenuActive,
    submenuActive,
    resetMenu,
    sidemenuActive,
    sidemenuTzPopupOpen,
    sidemenuPopup,
    sidemenuTzInnerPopup,
    sidemenuPolicyCheckboxHandler,
    saveTzInnerPopup,
    tzInnerPopupCustomerInput,
    clearTzPopupInput,
    validateTzPopupCustomer,
    removeTzPopupInfo,
    tzInnerPopupProductInput,
    tzInnerPopupSelect,
    validateTzPopupProduct,
    optionsPopupShow,
    optionSelectItemPopup,
    optionSelectSavePopup,
    validateAdditionalOptions,
    packageSelect,
    customPackageInput,
    validateTzPackage,
    consultFormInput,
    consultFormClearInput,
    validateConsultForm,
} = menuSlice.actions;
export default menuSlice.reducer;