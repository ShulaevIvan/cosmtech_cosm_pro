import { createSlice } from "@reduxjs/toolkit";
import validateName from '../../functions/validateName';
import validatePhone from '../../functions/validatePhone';
import validateMail from "../../functions/validateMail";
import validateCity from "../../functions/validateCity";

import backgroundServices from '../../img/services_bg.jpg';
import backgroundAbout from '../../img/about.jpg';
import backgroundContacts from '../../img/contacts.jpg';
import innerHeaderImg from '../../img/1920x400.png';
import serviceLabImg from '../../img/service_lab.jpg';
import serviceStm from '../../img/service_stm.jpg';
import serviceTestLab from '../../img/service_test_lab.jpg';
import servicePacking from '../../img/service_packing.jpg';

import aboutFactFirst from '../../img/prize_cosm.svg';
import aboutFactSecond from '../../img/production_cosm.svg';
import aboutFactThird from '../../img/orders.svg';
import aboutFactFourth  from '../../img/lab_cosm.svg';

const initialState = { 
    headerBackgrounds: [
        { 
            page: '/services',
            backgroundImg: backgroundServices, 
            title: 'Услуги',
            description: 'Сотрудничество с нами позволит вам успешно войти на рынок косметической продукции и получить прибыль от продаж.',
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
            description: 'У нас есть опыт работы с различными клиентами и мы готовы помочь вам добиться успеха в вашем бизнесе.',
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
            description: 'Свяжитесь с нами по телефону, электронной почте или через социальные сети. Мы готовы ответить на все ваши вопросы',
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
        serviceForm: {
            fields: [
                {
                    id: 1,
                    title: 'Имя',
                    fieldType: 'text',
                    fieldName: 'name',
                    fieldValue: '',
                    fieldValid: true
                },
                {
                    id: 2,
                    title: 'Телефон',
                    fieldType: 'tel',
                    fieldName: 'phone',
                    fieldValue: '',
                    fieldValid: true
                },
                {
                    id: 3,
                    title: 'email',
                    fieldType: 'email',
                    fieldName: 'email',
                    fieldValue: '',
                    fieldValid: true
                },
                {
                    id: 4,
                    title: 'Тип Услуги',
                    fieldType: 'select',
                    fieldName: 'serviceType',
                    fieldValue: '',
                    options: [
                        { id: 1, name: 'Тип услуги 1', value: 'тип услуги 1', selected: true},
                        { id: 2, name: 'Тип услуги 2', value: 'тип услуги 2', selected: false},
                        { id: 3, name: 'Тип услуги 3', value: 'тип услуги 3', selected: false},
                        { id: 4, name: 'Тип услуги 4', value: 'тип услуги 4', selected: false},
                        { id: 5, name: 'Тип услуги 5', value: 'тип услуги 5', selected: false},
                    ],
                    fieldValid: true
                },
                {
                    id: 5,
                    title: 'Комментарий',
                    fieldType: 'textarea',
                    fieldName: 'comment',
                    fieldValue: '',
                    fieldValid: true
                },
            ]
        },
        servicesItems: [
            
            {
                id: 1,
                name: 'Разработка косметики под СТМ',
                image: serviceStm,
                position: 'left',
                description: 'Мы специализируемся на разработке косметики под собственную торговую марку (СТМ). Если у вас есть желание создать собственную линию косметики, мы поможем вам воплотить вашу идею в жизнь.',
                descriptionMini: 'Учитываем все ваши предпочтения и требования, чтобы создать продукт, который будет соответствовать вашей концепции и удовлетворять потребности вашей целевой аудитории.',
            },
            {
                id: 2,
                name: 'Разработка косметических рецептур',
                image: serviceLabImg,
                position: 'right',
                description: 'Предлагаем вам услуги по разработке косметических рецептур. Наша команда состоит из профессиональных химиков и косметологов, которые имеют богатый опыт в создании инновационных и эффективных косметических продуктов.',
                descriptionMini: '',
            },
            {
                id: 3,
                name: 'Химический анализ косметической продукции согласно ГОСТ',
                image: serviceTestLab,
                position: 'left',
                description: ' Услуги по химическому анализу косметической продукции в соответствии с ГОСТ. Наша лаборатория оборудована современным оборудованием, позволяющим проводить точные и надежные исследования.',
                descriptionMini: 'Мы гарантируем высокое качество проводимых анализов и предоставляем подробные отчеты о составе и безопасности продукции.',
            },
            {
                id: 4,
                name: 'Консультации по выбору упаковки и сопровождение на этапе сертификации готовой продукции',
                image: servicePacking,
                position: 'right',
                description: 'Консультируем по выбору упаковки для вашей косметической продукции. Поможем вам выбрать оптимальный вид упаковки, который будет соответствовать вашему бренду и обеспечит удобство использования для ваших клиентов',
                descriptionMini: 'Мы знаем, что сертификация может быть сложным и трудоемким процессом, поэтому мы готовы помочь вам собрать все необходимые документы и подготовить продукцию к сертификации.',
            },
            
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
                    fieldValue: '',
                    fieldValid: true
                },
                {
                    id: 2,
                    title: 'Тип обращения',
                    fieldType: 'select',
                    fieldName: 'orderType',
                    fieldValue: '',
                    options: [
                        { id: 1, name: 'тип обращения 1', value: 'тип обращения 1', selected: true},
                        { id: 2, name: 'тип обращения 2', value: 'тип обращения 2', selected: false},
                        { id: 3, name: 'тип обращения 3', value: 'тип обращения 3', selected: false},
                        { id: 4, name: 'тип обращения 4', value: 'тип обращения 4', selected: false},
                        { id: 5, name: 'тип обращения 5', value: 'тип обращения 5', selected: false},
                    ],
                    fieldValid: true
                },
                {
                    id: 3,
                    title: 'Телефон',
                    fieldType: 'tel',
                    fieldName: 'phone',
                    fieldValue: '',
                    fieldValid: true
                },
                {
                    id: 4,
                    title: 'Город',
                    fieldType: 'text',
                    fieldName: 'city',
                    fieldValue: '',
                    fieldValid: true
                },
                {
                    id: 5,
                    title: 'email',
                    fieldType: 'email',
                    fieldName: 'email',
                    fieldValue: '',
                    fieldValid: true
                },
                {
                    id: 6,
                    title: 'Предпочтительный способ связи',
                    fieldType: 'options',
                    fieldName: 'callOption',
                    fieldValue: '',
                    options: [
                        {id: 1, name: 'phone', selected: false}, 
                        {id: 2, name: 'email', selected: false}, 
                        {id: 3, name: 'msg', selected: false}
                    ],
                    fieldValid: true
                },
                {
                    id: 7,
                    title: 'Прикрепить файл',
                    fieldType: 'file',
                    fieldName: 'file',
                    fieldValue: '',
                    fieldValid: true
                },
                {
                    id: 8,
                    title: 'Комментарий',
                    fieldType: 'textarea',
                    fieldName: 'comment',
                    fieldValue: '',
                    fieldValid: true
                },
            ],
            contactFormFileUpload: {
                fileUploaded: false,
                fileName: '',
            },
            checkboxPolicyStatus: false,
            allFieldsValid: true,
        }
    },
    about: {
        companyFacts: [
            {
                id: 1,
                name: '100%',
                description: 'качество продукции полный цикл контроля качества, сертификаты ИСО 9001:2015 и 14001:2015.',
                image: aboutFactFirst,
            },
            {
                id: 2,
                name: '1 МЛН',
                description: 'Мощности производства до 1 миллиона единиц продукции в сутки.',
                image: aboutFactSecond,
            },
            {
                id: 3,
                name: '100+',
                description: 'Контактов и налаженные связи с лучшими мировыми поставщиками сырья и упаковки.',
                image: aboutFactThird,
            },
            {
                id: 4,
                name: '3 > лет',
                description: 'опыта в области разработки и реализации косметической продукции.',
                image: aboutFactFourth,
            }
        ],
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
            state.contacts.contactsForm.fields = state.contacts.contactsForm.fields.map((fieldItem) => {
                if (fieldItem.fieldName === inputType && inputType === 'name') {
                    return {
                        ...fieldItem,
                        fieldValue: inputValue,
                        fieldValid: validateName(inputValue),
                    }
                }
                else if (fieldItem.fieldName === inputType && inputType === 'phone' && fieldItem.fieldValue.length < 18) {
                    const phoneNumber = validatePhone(inputValue);
                    return {
                        ...fieldItem,
                        fieldValid: phoneNumber.length === 18 ? true : false,
                        fieldValue: phoneNumber,
                    };
                }
                else if (fieldItem.fieldName === inputType && inputType === 'email') {
                    return {
                        ...fieldItem,
                        fieldValue: inputValue,
                        fieldValid: !validateMail(inputValue) ? true : false,
                    }
                }
                else if (fieldItem.fieldName === inputType && inputType === 'city') {
                    return {
                        ...fieldItem,
                        fieldValue: inputValue,
                        fieldValid: validateCity(inputValue),
                    }
                }
                else if (fieldItem.fieldName === inputType && inputType === 'comment') {
                    return {
                        ...fieldItem,
                        fieldValue: inputValue,
                        fieldValid: inputValue.length >= 3 ? true : false,
                    }
                }
                
                return fieldItem;
            });
        },
        selectFieldContactsForm(state, action) {
            const { inputType, optionName, status, inputValue } = action.payload;
            state.contacts.contactsForm.fields = state.contacts.contactsForm.fields.map((fieldItem) => {
                if (fieldItem.options && fieldItem.fieldName === inputType && fieldItem.fieldType !== 'select') {
                    
                    return {
                        ...fieldItem,
                        options: fieldItem.options.map((optionItem) => {
                            if (optionItem.name === optionName) {
                                return {
                                    ...optionItem,
                                    selected: true
                                }
                            }
                            return {
                                ...optionItem,
                                selected: false
                            }
                        })
                    }
                }
                else if (fieldItem.options && fieldItem.fieldName === inputType &&  fieldItem.fieldType === 'select') {
                    return {
                        ...fieldItem,
                        options: fieldItem.options.map((optionItem) => {
                            if (optionItem.name === inputValue) {
                                return {
                                    ...optionItem,
                                    selected: true
                                }
                            }
                            return {
                                ...optionItem,
                                selected: false
                            }
                        })
                    }
                }
                return fieldItem;
            });
        },
        clearContactsInput(state, action) {
            const { inputType, inputValue } = action.payload;
            state.contacts.contactsForm.fields = state.contacts.contactsForm.fields.map((fieldItem) => {
                if (fieldItem.fieldName === inputType) {
                    return {
                        ...fieldItem,
                        fieldValue: '',
                        fieldValid: true,
                    };
                }
                return fieldItem;
            });
        },
        contactsCheckboxPolicy(state, action) {
            const { status } = action.payload;
            state.contacts.contactsForm.checkboxPolicyStatus = status;
        },
        uploadFile(state, action) {
            const { file } = action.payload;
            if (file) {
                state.contacts.contactsForm.contactFormFileUpload = {
                    ...state.contacts.contactsForm.contactFormFileUpload,
                    fileUploaded: true,
                    fileName: 'test',
                }
            }
            
        }
    }
});


export const {
    changeHeaderBackground,
    servicePageOrderPopup,
    validateContactsInput,
    clearContactsInput,
    selectFieldContactsForm,
    contactsCheckboxPolicy,
    uploadFile
} = innerPageSlice.actions;
export default innerPageSlice.reducer;