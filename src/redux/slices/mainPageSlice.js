import { createSlice } from "@reduxjs/toolkit";
import imgHolder250 from '../../img/250.png';
const initialState = { 
    calculatorForm: {
        popupOpen: false,
    },
    orderForm: {
        popupOpen: false,
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
                name: 'product title',
                serviceImg: imgHolder250,
                serviceOrderActive: false,
            },
            {
                id: 2,
                name: 'product title',
                serviceImg: imgHolder250,
                serviceOrderActive: false,
            },
            {
                id: 3,
                name: 'product title',
                serviceImg: imgHolder250,
                serviceOrderActive: false,
            },
            {
                id: 4,
                name: 'product title',
                serviceImg: imgHolder250,
                serviceOrderActive: false,
            },
            {
                id: 5,
                name: 'product title',
                serviceImg: imgHolder250,
                serviceOrderActive: false,
                amimate: true
            },
            {
                id: 6,
                name: 'product title',
                serviceImg: imgHolder250,
                serviceOrderActive: false,
                amimate: true
            },
            {
                id: 7,
                name: 'product title',
                serviceImg: imgHolder250,
                serviceOrderActive: false,
                amimate: true
            },
            {
                id: 8,
                name: 'product title',
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
            const { status } = action.payload;
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
                return {...item, active: false }
            });
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
    selectProduction
} = mainPageSlice.actions;
export default mainPageSlice.reducer;