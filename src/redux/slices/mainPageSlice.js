import { createSlice } from "@reduxjs/toolkit";
import imgHolder250 from '../../img/250.png';
import independenceIconOne from '../../img/independence_1.svg';
import independenceIconTwo from '../../img/independence_2.svg';
import independenceIconThree from '../../img/independence_3.svg';
import independenceIconFour from '../../img/independence_4.svg';
import independenceIconFive from '../../img/independence_5.svg';
import independenceIconSix from '../../img/independence_6.svg';

import validatePhone from "../../functions/validatePhone";


const initialState = { 
    calculatorForm: {
        popupOpen: false,
    },
    orderForm: {
        popupOpen: false,
        allFieldsValid: false,
        policyChecked: false,
        baseFields: [
            {
                id: 1,
                name: 'Имя',
                fieldName: 'name', 
                value: '',
                type: 'text',
                selected: false,
                placeholder: 'Ваше имя',
                err: false,
            },
            {
                id: 2,
                name: 'Телефон', 
                value: '',
                fieldName: 'phone', 
                type: 'tel',
                selected: false,
                placeholder: '812 xxx xx xx',
                err: false,
            },
            {
                id: 3,
                name: 'Email', 
                value: '',
                type: 'email',
                fieldName: 'email', 
                selected: false,
                placeholder: 'demo@....ru',
                err: false,
            },
            {
                id: 4,
                name: 'Комментарий', 
                value: '',
                type: 'textarea',
                fieldName: 'comment', 
                selected: false,
                err: false,
            },
        ],
        additionalFields: {
            fieldsActive: false,
            fieldsTypes: [
                {
                    name: 'Тип продукции', 
                    options: [
                        {name: 'Опция 1'},
                        {name: 'Опция 2'},
                        {name: 'Опция 3'},
                        {name: 'Опция 4'},
                    ]
                },
                {
                    name: 'Требуются ли сопутствующие услуги?', 
                    options: [
                        {name: 'Опция 1'},
                        {name: 'Опция 2'},
                        {name: 'Опция 3'},
                        {name: 'Опция 4'},
                    ]
                },
                {
                    name: 'Требуются ли сопутствующие услуги?', 
                    options: [
                        {name: 'Опция 1'},
                        {name: 'Опция 2'},
                        {name: 'Опция 3'},
                        {name: 'Опция 4'},
                    ]
                },
                {
                    name: 'На какой бюджет вы рассчитываете?', 
                    options: [
                        {name: 'Опция 1'},
                        {name: 'Опция 2'},
                        {name: 'Опция 3'},
                        {name: 'Опция 4'},
                    ]
                },
                {
                    name: 'Какое количество продукции планируете изготовить?',
                    options: [
                        {name: 'Опция 1'},
                        {name: 'Опция 2'},
                        {name: 'Опция 3'},
                        {name: 'Опция 4'},
                    ]
                },
            ]
        }
    },
    services: {
        serviceItemIdActive: undefined,
        showAll: false,
        showAllBtnText: 'Все продукты',
        servicePopupShow: false,
        servicesItems: [
            {
                id: 1,
                name: 'Очищающие средства для лица ',
                serviceImg: imgHolder250,
                serviceOrderActive: false,
            },
            {
                id: 2,
                name: ' Уходовая косметика для лица',
                serviceImg: imgHolder250,
                serviceOrderActive: false,
            },
            {
                id: 3,
                name: 'Средства для ухода за волосами',
                serviceImg: imgHolder250,
                serviceOrderActive: false,
            },
            {
                id: 4,
                name: 'Уходовая косметика для тела',
                serviceImg: imgHolder250,
                serviceOrderActive: false,
            },
            {
                id: 5,
                name: 'Средства для ухода за кожей рук',
                serviceImg: imgHolder250,
                serviceOrderActive: false,
                amimate: true
            },
            {
                id: 6,
                name: 'Средства для ухода за кожей ног',
                serviceImg: imgHolder250,
                serviceOrderActive: false,
                amimate: true
            },
            {
                id: 7,
                name: 'Солнцезащитные средства',
                serviceImg: imgHolder250,
                serviceOrderActive: false,
                amimate: true
            },
            {
                id: 8,
                name: 'Очищающая косметика для тела',
                serviceImg: imgHolder250,
                serviceOrderActive: false,
                amimate: true
            },
            {
                id: 9,
                name: 'Детская косметика',
                serviceImg: imgHolder250,
                serviceOrderActive: false,
                amimate: true
            },
            {
                id: 10,
                name: 'Аппаратная косметика',
                serviceImg: imgHolder250,
                serviceOrderActive: false,
                amimate: true
            },
            {
                id: 11,
                name: 'Профессиональная косметика',
                serviceImg: imgHolder250,
                serviceOrderActive: false,
                amimate: true
            },
            {
                id: 12,
                name: 'Пилинги',
                serviceImg: imgHolder250,
                serviceOrderActive: false,
                amimate: true
            }
        ]
    },
    production: {
        mousePosLeft: 0,
        mousePosRight: 0,
        productionItems: [
            {
                id: 1,
                name: 'Разрабатываем концепции',
                description: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». Благодаря их труду ежегодно сотни питомцев находят свой новый дом.1',
                nameNumber: 1,
                active: false
            },
            {
                id: 2,
                name: 'Создаем рецептуру',
                description: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». Благодаря их труду ежегодно сотни питомцев находят свой новый дом.2',
                nameNumber: 2,
                active: false
            },
            {
                id: 3,
                name: 'Подбор упаковки',
                description: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». Благодаря их труду ежегодно сотни питомцев находят свой новый дом.3',
                nameNumber: 3,
                active: false
            },
            {
                id: 4,
                name: 'Продумываем дизайн этикеток',
                description: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». Благодаря их труду ежегодно сотни питомцев находят свой новый дом. 4',
                nameNumber: 4,
                active: false
            },
            {
                id: 5,
                name: 'Производим продукцию',
                description: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». Благодаря их труду ежегодно сотни питомцев находят свой новый дом. 5',
                nameNumber: 5,
                active: false
            },
            {
                id: 6,
                name: 'Берем на себя вопросы сертификации и декларирования',
                description: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». Благодаря их труду ежегодно сотни питомцев находят свой новый дом. 6',
                nameNumber: 6,
                active: false
            },
            {
                id: 7,
                name: 'Доставляем продукцию вам',
                description: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». Благодаря их труду ежегодно сотни питомцев находят свой новый дом. 7',
                nameNumber: 7,
                active: false
            }
        ]
    },
    independence: {
        independenceItems: [
            {
                id: 1,
                title: 'Современные технологии',
                image: independenceIconOne,
                description: 'Можем производить продукцию линейки от масс маркета до премиума в короткие сроки.',
            },
            {
                id: 2,
                title: 'Современные технологии',
                image: independenceIconTwo,
                description: 'Можем производить продукцию линейки от масс маркета до премиума в короткие сроки.',
            },
            {
                id: 3,
                title: 'Современные технологии',
                image: independenceIconThree,
                description: 'Можем производить продукцию линейки от масс маркета до премиума в короткие сроки.',
            },
            {
                id: 4,
                title: 'Современные технологии',
                image: independenceIconFour,
                description: 'Можем производить продукцию линейки от масс маркета до премиума в короткие сроки.',
            },
            {
                id: 5,
                title: 'Современные технологии',
                image: independenceIconFive,
                description: 'Можем производить продукцию линейки от масс маркета до премиума в короткие сроки.',
            },
            {
                id: 6,
                title: 'Современные технологии',
                image: independenceIconSix,
                description: 'Можем производить продукцию линейки от масс маркета до премиума в короткие сроки.',
            },
        ],
        independenceForm: {
           nameFieldValid: true,
           phoneFieldValid: true,
           commentFieldValid: true,
           nameFieldValue: '',
           phoneFieldValue: '',
           commentFieldValue: '',
           allFieldsValid: false,
        },
    },
    mouseCords: {
        left: 0,
        top: 0,
    }
};

const mainPageSlice = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {
        openCalculatior(state, action) {
            const { status } = action.payload;
            state.calculatorForm.popupOpen = status;
        },
        openOrderFrom(state, action) {
            const { status } = action.payload;
            state.orderForm.popupOpen = status;
        },
        orderFormAdditionalFields(state, action) {
            const { status } = action.payload;
            if (state.orderForm.additionalFields.fieldsActive) {
                state.orderForm.additionalFields.fieldsActive = false;
                return;
            }
            state.orderForm.additionalFields.fieldsActive = status;
        },
        orderFormInputValidate(state, action) {
            const { fieldId, fieldName, fieldType, fieldValue } = action.payload;
            if (fieldValue === '') return;
            let checkErr;
            //eslint-disable-next-line
            if (fieldName === 'name') {
                //eslint-disable-next-line
                checkErr = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]|[0-9]/g.test(fieldValue);
                const checkEmpty = /\s/;
                if (fieldValue.length < 3 || checkEmpty.test(fieldValue)) checkErr = true;
                
            }
            if (fieldName === 'email') {
                const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                checkErr = !emailPattern.test(fieldValue);
            }
            state.orderForm.baseFields = state.orderForm.baseFields.map((baseField) => {
                if (baseField.id === Number(fieldId) && baseField.type === fieldType) {
                    return {
                        ...baseField,
                        value: fieldValue,
                        err: checkErr,
                    }
                }
                return baseField;
            });
        },
        orderFormPhoneInputValidate(state, action) {
            const { fieldId, fieldType, ref } = action.payload;
            //eslint-disable-next-line
            const pattern = /^[0-9]\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})([0-9]{2})$/;
            //eslint-disable-next-line
            const symPattern = /[`!@№#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
            const enRuPattern = /[a-zA-Zа-яА-Я]+/;

            if (ref.current.value.replace(symPattern, '').length > 11) ref.current.value = ref.current.value.replace(/.$/, '');
            ref.current.value = ref.current.value.replace(/\s/g, '').replace(symPattern, '');
            ref.current.value = ref.current.value.replace(enRuPattern, '');
            if (ref.current.value.length === 1 && (Number(ref.current.value[0]) <= 9)) ref.current.value = `7${ref.current.value}`;
            if (ref.current.value.length < 8 || ref.current.value === ' ') {
                state.orderForm.baseFields = state.orderForm.baseFields.map((baseField) => {
                    if (baseField.id === Number(fieldId) && baseField.type === fieldType) {
                        return {
                            ...baseField,
                            err: true,
                        }
                    }
                    return baseField;
                });
            }
            if ((pattern.test(ref.current.value)) && /^[7|8]/.test(ref.current.value)) {
                ref.current.value.replace(pattern, (all, group2, group3, group4, group5) => {
                    ref.current.value = `+7 (${group2}) ${group3}-${group4}-${group5}`;
                    return `+7 (${group2})-${group3}-${group4}-${group5}`
                });
                
                state.orderForm.baseFields = state.orderForm.baseFields.map((baseField) => {
                    if (baseField.id === Number(fieldId) && baseField.type === fieldType) {
                        return {
                            ...baseField,
                            value: ref.current.value,
                            err: false,
                        }
                    }
                    return baseField;
                });
            }
        },
        checkOrderFrom(state, action) {
            const { formRefs } = action.payload;
            const checkFields = state.orderForm.baseFields.filter((item) => !item.err && item.value !== ' ');
            const checkRefs = formRefs.filter(
                (item) => item.ref.current.value !== '' && (item.name === 'phone' || item.name === 'name' || item.name === 'email')
            );
            if (checkRefs.length >= 2 && checkFields.length === 4 && state.orderForm.policyChecked) {
                state.orderForm.allFieldsValid = true;
                return;
            }
            state.orderForm.allFieldsValid = false; 
        },
        orderFormPolicyCheckbox(state, action) {
            const { status } = action.payload;
            state.orderForm.policyChecked = status;
        },
        serviceShowBtn(state, action) {
            const { status, targetId } = action.payload;
            const targetService = state.services.servicesItems.find((item) => item.id === targetId);

            if (status === 'reset' && targetService && !state.services.showAll) {
                state.services.servicesItems = initialState.services.servicesItems.slice(0,4);
                return;
            }
            else if (status === 'show' && !targetService.serviceOrderActive) {
                state.services.servicesItems = state.services.servicesItems.map((item) => {
                    if (item.id === targetId && !item.serviceOrderActive && status === 'show') {
                        state.services.serviceItemIdActive = item.id;
                        return {
                            ...item,
                            serviceOrderActive: true,
                            amimate: false,
                        }
                    }
                    return {
                        ...item,
                        serviceOrderActive: false,
                        amimate: false,
                    }
                })
            }
            
        },
        showAllServices(state, action) {
            const { status } = action.payload;
            if (!status) {
                state.services.showAllBtnText = 'Показать больше';
                state.services.servicesItems = initialState.services.servicesItems.slice(0,4);
                state.services.showAll = status;
                return;
            }
            state.services.servicesItems = initialState.services.servicesItems;
            state.services.showAllBtnText = 'Показать меньше';
            state.services.showAll = status;
        },
        serviceOrderPopup(state, action) {
            const { status, left, top } = action.payload;
            state.mouseCords.left = left;
            state.mouseCords.top = top;
            state.services.servicePopupShow = status;
        },
        selectProduction(state, action) {
            const { status, productionId, left, right } = action.payload;

            state.production.mousePosLeft = left;
            state.production.mousePosRight = right;

            state.production.productionItems = state.production.productionItems.map((item) => {
                if (productionId === item.id) {
                    return {...item, active: status}
                }
                return { ...item, active: false }
            });
        },
        independenceFromInputValidate(state, action) {
            const { fieldType, fieldValue } = action.payload;
            //eslint-disable-next-line
            const notValidName = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]|[0-9]|\s/g.test(fieldValue);

            if (fieldType === 'name') {
                state.independence.independenceForm.nameFieldValue = fieldValue;
                state.independence.independenceForm.nameFieldValid = !notValidName;
                return;
            }
            else if (fieldType === 'phone') {
                state.independence.independenceForm.phoneFieldValue = validatePhone(fieldValue);
                if (state.independence.independenceForm.phoneFieldValue.length === 18) {
                    state.independence.independenceForm.phoneFieldValid = true;
                    return;
                }
                state.independence.independenceForm.phoneFieldValid = false;
                
                return;
            }
            else if (fieldType === 'comment' && fieldValue.length > 3 && !/\^s+/.test(fieldValue)) {
                state.independence.independenceForm.commentFieldValue = fieldValue;
                state.independence.independenceForm.commentFieldValid = true;
                return;
            }
            state.independence.independenceForm.allFieldsValid = false;
        },
        clearIndependenceFormInput(state, action) {
            const { fieldType } = action.payload;
            if (fieldType === 'name') {
                state.independence.independenceForm.nameFieldValue = '';
                state.independence.independenceForm.nameFieldValid = true;
                return;
            }
            else if (fieldType === 'phone') {
                state.independence.independenceForm.phoneFieldValue = '';
                state.independence.independenceForm.phoneFieldValid = true;
                return;
            }
            else if (fieldType === 'comment') {
                state.independence.independenceForm.commentFieldValue = '';
                state.independence.independenceForm.commentFieldValid = true
                return;
            }

        },
        mobileMenuActive(state, action) {
            state.mobileMenuActive = action.payload;
        },
    }
});


export const {
    mobileMenuActive,
    openCalculatior,
    openOrderFrom,
    orderFormAdditionalFields,
    serviceShowBtn,
    showAllServices,
    serviceOrderPopup,
    selectProduction,
    orderFormInputValidate,
    orderFormPhoneInputValidate,
    checkOrderFrom,
    orderFormPolicyCheckbox,
    independenceFromInputValidate,
    clearIndependenceFormInput
} = mainPageSlice.actions;
export default mainPageSlice.reducer;