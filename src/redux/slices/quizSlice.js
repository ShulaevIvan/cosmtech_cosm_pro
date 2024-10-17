import { createSlice, createAction, createAsyncThunk, current } from "@reduxjs/toolkit";
import demoImg from '../../img/quizImages/200x275.png';
import quizCheckbox from '../../img/quizImages/quiz_checkbox.svg';
import quizCheckboxActive from '../../img/quizImages/quiz_checkbox-active.svg';
import packageImgHold from '../../img/quizImages/250x250.png';

const initialState = {
    maxSteps: 5,
    currentStep: 1,
    showPrevStepBtn: false,
    nextBtnText: 'Следующий шаг',
    prevBtnText: 'К предыдущему шагу',
    quizResult: {
        product: {
            id: '',
            name: ''
        },
        deadLine: {},
        quantity: {},
        package: {
            name: "",
            format: "",
        }
    },
    quizMenu: [
        {
            id: 1,
            name: 'Расчитайте стоимость',
            active: true,
            icon: '',
        },
        {
            id: 2,
            name: 'Задайте вопрос технологу',
            active: false,
            icon: '',
        },
        {
            id: 3,
            name: 'Отправить ТЗ',
            active: false,
            icon: '',
        }
    ],
    qizSteps: [
        {
            id: 1,
            name: 'Тип продукта',
            stepTitle: 'Выберите продукт для изготовления',
            stepNum: 1,
            active: true,
            stepValid: false,
            productActivePage: 1,
            productPages: [{ id: 1, page: 1, selected: true}, { id: 2, page: 2, selected: false}],
            products: [
                { 
                    id: 1,
                    name: 'Уход для лица',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg,
                    page: 1,
                },
                { 
                    id: 2,
                    name: 'Уход для тела',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg,
                    page: 1,
                },
                { 
                    id: 3,
                    name: 'Уход за волосами',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg,
                    page: 1,
                },
                { 
                    id: 4,
                    name: 'Профессиональная косметика',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg,
                    page: 1,
                },
                { 
                    id: 5,
                    name: 'Для животных',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg,
                    page: 1,
                },
                { 
                    id: 6,
                    name: 'Детская косметика',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg,
                    page: 1,
                },
                { 
                    id: 7,
                    name: 'Уход за кожей рук',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg,
                    page: 2,
                },
                { 
                    id: 8,
                    name: 'Уход за кожей ног',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg,
                    page: 2,
                },
                { 
                    id: 9,
                    name: 'Солнцезащитные средства',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg,
                    page: 2,
                },
                { 
                    id: 10,
                    name: 'Аппаратная косметика',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg,
                    page: 2,
                },
                { 
                    id: 11,
                    name: 'Пилинги',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg,
                    page: 2,
                },
                { 
                    id: 12,
                    name: 'Для ванны и душа',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg,
                    page: 2,
                }
            ],
        },
        {
            id: 2,
            name: 'Количество',
            stepTitle: 'Количество продукции и сроки',
            stepNum: 2,
            quantity: {
                value: 25000,
                defaultValue: 25000,
                minQnt: 1500,
                maxQnt: 500000,
                customValue: 0,
                inputActive: false
            },
            deadLineItems: [
                { id: 1, name: 'как можно скорее', selected: false },
                { id: 2, name: 'от 4 до 8 недель', selected: false },
                { id: 3, name: 'до 12 недель', selected: false },
                { id: 4, name: 'до 3 мес', selected: false },
                { id: 5, name: 'до 6 месяцев', selected: false },
                { id: 6, name: 'свой вариант', selected: false, customValue: '' },
            ],
            deadLineCustomField: {
                fieldValue: '',
                active: false,
            },
            active: false,
            stepValid: false,
        },
        {
            id: 3,
            name: 'Упаковка и ссылка на похожую',
            stepTitle: 'Формат планируемой упаковки',
            stepNum: 3,
            customPackage: {
                active: false,
                fieldValue: '',
                fieldFile: '',
                fieldValid: true,
            },
            package: [
                { 
                    id: 1, 
                    name: 'Флаконы косметические', 
                    sizes: [
                        {id: 1, from: 'от', to: 'до', name: 'ml', value: 10, max: 50, selected: true, packageId: 1,},
                        {id: 2, from: 'от', to: 'до', name: 'ml', value: 50, max: 100, selected: false, packageId: 1,},
                        {id: 3, from: 'от', to: 'до', name: 'ml', value: 100, max: 150, selected: false, packageId: 1,},
                        {id: 4, from: 'от', to: 'до', name: 'ml', value: 150, max: 200, selected: false, packageId: 1,},
                        {id: 5, from: 'от', to: 'до', name: 'ml', value: 200, max: 250, selected: false, packageId: 1,},
                        {id: 6, from: 'от', to: 'до', name: 'ml', value: 250, max: 350, selected: false, packageId: 1,},
                        {id: 7, from: 'от', to: 'до', name: 'ml', value: 350, max: 450, selected: false, packageId: 1,},
                        {id: 8, from: 'от', to: 'до', name: 'ml', value: 450, max: 1000, selected: false, packageId: 1,},
                    ],
                    image: packageImgHold,
                    page: 1,
                    selected: false
                },
                { 
                    id: 2, 
                    name: 'Тубы и тубофлаконы',
                    sizes: [
                        {id: 1, from: 'от', to: 'до', name: 'ml', value: 5, max: 10, selected: false, packageId: 2,},
                        {id: 2, from: 'от', to: 'до', name: 'ml', value: 30, max: 80, selected: false, packageId: 2,},
                        {id: 3, from: 'от', to: 'до', name: 'ml', value: 100, max: 150, selected: true, packageId: 2,},
                        {id: 4, from: 'от', to: 'до', name: 'ml', value: 150, max: 300, selected: false, packageId: 2,},
                    ],
                    image: packageImgHold,
                    page: 1,
                    selected: false
                },
                { 
                    id: 3, 
                    name: 'Банки косметические',
                    sizes: [
                        {id: 1, from: 'от', to: 'до', name: 'ml', value: 2, max: 20, selected: false, packageId: 3,},
                        {id: 2, from: 'от', to: 'до', name: 'ml', value: 20, max: 40, selected: false, packageId: 3,},
                        {id: 3, from: 'от', to: 'до', name: 'ml', value: 40, max: 100, selected: true, packageId: 3,},
                        {id: 4, from: 'от', to: 'до', name: 'ml', value: 100, max: 200, selected: false, packageId: 3,},
                        {id: 5, from: 'от', to: 'до', name: 'ml', value: 200, max: 400, selected: false, packageId: 3,},
                        {id: 6, from: 'от', to: 'до', name: 'ml', value: 400, max: 800, selected: false, packageId: 3,},
                        {id: 7, from: 'от', to: 'до', name: 'ml', value: 800, max: 1200, selected: false, packageId: 3,},
                    ],
                    image: packageImgHold,
                    page: 1,
                    selected: false
                },
                { 
                    id: 4, 
                    name: 'Флаконы Roll-on (мини-ролл) ',
                    sizes: [
                        {id: 1, from: 'от', to: 'до', name: 'ml', value: 10, max: 20, selected: false, packageId: 4,},
                        {id: 2, from: 'от', to: 'до', name: 'ml', value: 20, max: 50, selected: false, packageId: 4,},
                        {id: 3, from: 'от', to: 'до', name: 'ml', value: 50, max: 100, selected: true, packageId: 4,},
                        {id: 4, from: 'от', to: 'до', name: 'ml', value: 100, max: 200, selected: false, packageId: 4,},
                    ],
                    image: packageImgHold,
                    page: 1,
                    selected: false
                },
                { 
                    id: 5,
                    name: 'Вакуумные флаконы (диспенсеры)', 
                    sizes: [
                        {id: 1, from: 'от', to: 'до', name: 'ml', value: 5, max: 15, selected: false, packageId: 5,},
                        {id: 2, from: 'от', to: 'до', name: 'ml', value: 15, max: 30, selected: false, packageId: 5,},
                        {id: 3, from: 'от', to: 'до', name: 'ml', value: 30, max: 80, selected: true, packageId: 5,},
                        {id: 4, from: 'от', to: 'до', name: 'ml', value: 80, max: 120, selected: false, packageId: 5,},
                    ],
                    image: packageImgHold,
                    page: 1,
                    selected: false
                },
                { 
                    id: 6, 
                    name: 'Флаконы-пенообразователи', 
                    sizes: [
                        {id: 1, from: 'от', to: 'до', name: 'ml', value: 50, max: 100, selected: false, packageId: 6,},
                        {id: 2, from: 'от', to: 'до', name: 'ml', value: 100, max: 200, selected: true, packageId: 6,},
                        {id: 3, from: 'от', to: 'до', name: 'ml', value: 200, max: 300, selected: false, packageId: 6,},
                    ],
                    image: packageImgHold,
                    page: 1,
                    selected: false
                },
            ],
            packagePages: [{id: 1, active: true }],
            active: false,
            stepValid: false,
        },
        {
            id: 4,
            name: 'Дополнительно',
            stepTitle: 'Дополнительные условия',
            stepNum: 4,
            services: [
                { id: 1, name: 'Разработка уникальной рецептуры', selected: false},
                { id: 2, name: 'Помощь с сертификацией', selected: false},
                { id: 3, name: 'Помощь с разработкой дизайна', selected: false},
                { id: 4, name: 'Под ключ', selected: false},
                { id: 5, name: 'Не требуются', selected: false},
                { id: 6, name: 'Опишите свой случай', selected: false},
            ],
            budget: [
                { id: 1, name: 'от 1 единиц до 100 единиц', selected: false },
                { id: 2, name: 'от 2 единиц до 100 единиц', selected: false },
                { id: 3, name: 'от 3 единиц до 100 единиц', selected: false },
                { id: 4, name: 'от 4 единиц до 100 единиц', selected: false },
                { id: 5, name: 'пока не определен', selected: false},
                { id: 6, name: 'свой вариант', selected: false},
            ],
            budgetCustomField: {
                active: false,
                min: 25000,
                max: 10000000,
                step: 5000,
                value: 0,
                currency: 'руб'
            },
            techTaskCustom: {
                active: false,
                file: '',
            },
            commentField: {
                active: false,
                value: '',
            },
            active: false,
            stepValid: false,
        },
        {
            id: 5,
            name: 'Результат',
            stepTitle: 'Дотставка и рассчет',
            stepNum: 5,
            delivery: [
                { id: 1, name: 'Вывоз продукции своими силами или ТК (вопрос решен)', selected: true },
                { id: 2, name: 'Доставка в пределах Санкт-Петербурга И ЛО', selected: false },
                { id: 3, name: 'Доставка транспортной компанией (нужна помощь)', selected: false },
            ],
            deliveryCityForm: {
                active: false,
                value: '',
            },
            active: false,
            stepValid: false,
        }
        
    ]
}

const qizSlice = createSlice({
    name: 'quizSlice',
    initialState,
    reducers: {
        nextStep(state, action) {
            const { stepParam } = action.payload;
            let nextStep;
            if (Math.sign(stepParam) === -1) {
                nextStep = state.qizSteps.find((quizItem) => quizItem.stepNum === state.currentStep - 1);
            }
            else if (Math.sign(stepParam) === 1) {
                nextStep = state.qizSteps.find((quizItem) => quizItem.stepNum === state.currentStep + 1);
            }

            if ((nextStep && nextStep.stepNum > state.maxSteps) || !nextStep) return;
            state.qizSteps.map((quizItem) => {
                if (quizItem.id === nextStep.id && quizItem.stepNum === nextStep.stepNum) {
                    state.currentStep = nextStep.stepNum;
                    return {...quizItem, active: true }
                }
                return {...quizItem, active: false };
            });

            if (Number(state.currentStep) - 1 !== 0) {
                state.showPrevStepBtn = true;
                return;
            }
            state.showPrevStepBtn = false;
        },
        selectProduct(state, action) {
            const { selectItem } = action.payload;
            const productStep = state.qizSteps.find((quizItem) => quizItem.stepNum === state.currentStep);
            if (!productStep.products) return;
            state.qizSteps = state.qizSteps.map((stepItem) => {
                if (stepItem.id === productStep.id){
                    return {
                        ...stepItem,
                        products: stepItem.products.map((productItem) => {
                            if (productItem.id === selectItem.id) {
                                return {
                                    ...productItem,
                                    selected: productItem.selected ? false : true
                                }
                            }
                            return {
                                ...productItem,
                                selected: false
                            }
                        })
                    }
                }
                return stepItem;
            });
            if (state.currentStep === 1) {
                state.qizSteps = [...state.qizSteps.map((stepItem) => {
                    if (stepItem.stepNum === state.currentStep && stepItem.products.find((item) => item.selected)) {
                        return {
                            ...stepItem,
                            stepValid: true
                        }
                    }
                    return {
                        ...stepItem,
                        stepValid: false
                    }
                })];
            }
        },
        selectProductPage(state, action) {
            const { nextPageId } = action.payload;
            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep && quizStep.productPages) {
                    return {
                        ...quizStep,
                        productPages: quizStep.productPages.map((productPageItem) => {
                            if (productPageItem.id === nextPageId) {
                                return {
                                    ...productPageItem,
                                    selected: true
                                }
                            }
                            return {
                                ...productPageItem,
                                selected: false
                            }
                        }),
                        productActivePage: quizStep.productPages.find((productPageItem) => productPageItem.selected).page,
                    }
                }
                return quizStep;
            })
        },
        resetQuiz(state) {
            state = initialState;
        },
        disableQuantity(state, action) {
            const { status } = action.payload;
            state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep) {
                    quizStep.quantity = {
                        ...quizStep.quantity,
                        inputActive: status,
                    }
                }
            });
        },
        changeQuantity(state, action) {
            const { qntValue } = action.payload;
            state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep) {
                    quizStep.quantity = {
                        ...quizStep.quantity,
                        customValue: 0,
                        value: qntValue,
                    }
                }
            });
        },
        changeMaxQuantity(state, action) {
            const { qntValue } = action.payload;
            state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep) {
                    quizStep.quantity = {
                        ...quizStep.quantity,
                        value: qntValue,
                        maxQnt: Number(qntValue),
                    }
                }
            });
        },
        selectDeadline(state, action) {
            const { itemId, customValue } = action.payload;
            state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep && quizStep.deadLineItems) {
                    quizStep.deadLineItems = quizStep.deadLineItems.map((deadlineItem) => {
                        if (itemId === Array.from(quizStep.deadLineItems.length) && customValue) {
                            return {
                                ...deadlineItem,
                                selected: true,
                                customValue: '',
                            }
                        }
                        else if (deadlineItem.id === itemId && itemId !== Array.from(quizStep.deadLineItems.length)) {
                            return {
                                ...deadlineItem,
                                selected: true,
                                customValue: '',
                            }
                        }
                        return {
                            ...deadlineItem,
                            selected: false,
                        }
                    });
                }
                return quizStep;
            });
        },
        saveDeadlineCustomValue(state, action) {
            const { customValue } = action.payload;
            state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep) {
                    quizStep.deadLineItems = quizStep.deadLineItems.map((deadlineItem) => {
                        if (deadlineItem.id === Array.from(quizStep.deadLineItems).length) {
                            return {
                                ...deadlineItem,
                                selected: true,
                                customValue: customValue
                            }
                        }
                        return deadlineItem;
                    });
                }
                return quizStep;
            });
        },
        showCustomPackageField(state, action) {
            const { status } = action.payload;

            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep) {
                    return {
                        ...quizStep,
                        customPackage: {
                            ...quizStep,
                            customPackage: status ? {
                                ...quizStep.customPackage,
                            } : {
                                ...quizStep.customPackage,
                                fieldValue: '',
                                fieldFile: ''
                            },
                            active: status
                        },
                        package: initialState.qizSteps[2].package,
                    }
                }
                return quizStep;
            });
        },
        saveCustomPackageField(state, action) {
            const { textData, fileData } = action.payload;

            if (/^\s*$/.test(textData)) return;
            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep && quizStep.customPackage) {
                    return {
                        ...quizStep,
                        customPackage: {
                            ...quizStep.customPackage,
                            fieldValue: textData ? textData : '',
                            fieldFile: fileData ? fileData : '',
                            fieldValid: /^\s*$/.test(textData) ? false : true
                        },
                        package: initialState.qizSteps[2].package,
                    }
                }
                return quizStep;
            });
        },
        clearCustomPackageField(state) {
            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep && quizStep.customPackage) {
                    console.log('test2')
                    return {
                        ...quizStep,
                        customPackage: {
                            ...quizStep.customPackage,
                            fieldValue: '',
                            fieldValid: false
                        },
                        package: initialState.qizSteps[2].package,
                    }
                }
                return quizStep;
            });
            
        },
        selectPackage(state, action) {
            const { packageId } = action.payload;

            state.qizSteps.find((stepItem) => stepItem.stepNum === state.currentStep)
            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep) {
                    quizStep.package = quizStep.package.map((packageItem) => {
                        if (packageItem.id === packageId) {
                            return {
                                ...packageItem,
                                selected: packageItem.selected ? false : true
                            }
                        }
                        return {
                            ...packageItem,
                            selected: false
                        }
                    });
                }
                return quizStep;
            });
        },
        selectPackageSize(state, action) {
            const { packageId, sizeValue } = action.payload;
            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep) {
                    quizStep.package = quizStep.package.map((packageItem) => {
                        if (packageItem.id === packageId) {
                            return {
                                ...packageItem,
                                sizes: packageItem.sizes = packageItem.sizes.map((sizeItem) => {
                                    const sizeString = `${sizeItem.from} ${sizeItem.value} ${sizeItem.to} ${sizeItem.max} ${sizeItem.name}`;
                                    if (sizeString === sizeValue && sizeItem.packageId === packageId ) {
                                        return {
                                            ...sizeItem,
                                            selected: true,
                                        }
                                    }
                                    return {
                                        ...sizeItem,
                                        selected: false,
                                    }
                                })
                            }
                        }
                        return packageItem;
                    });
                    return quizStep;
                }
                return quizStep;
            });
        },
        advancedServiceChange(state, action) {
            const { status, serviceId } = action.payload;
            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep && quizStep.services) {
                    return {
                        ...quizStep,
                        customValue: {
                            ...quizStep.customValue,
                            value: '',
                        },
                        services: quizStep.services.map((serviceItem) => {
                            if (serviceItem.id === serviceId) {
                                return {
                                    ...serviceItem,
                                    selected: status
                                }
                            }
                            return {
                                ...serviceItem,
                                selected: false
                            }
                        })
                    }
                }
                return quizStep;
            });
        },
        advancedBudgetChange(state, action) {
            const { status, budgetId } = action.payload;
            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep && quizStep.budget) {
                    return {
                        ...quizStep,
                        budgetCustomField: {
                            ...quizStep.budgetCustomField,
                            value: quizStep.budgetCustomField.min
                        },
                        budget: quizStep.budget.map((budgetItem) => {
                            if (budgetItem.id === budgetId) {
                                return {
                                    ...budgetItem,
                                    selected: status
                                }
                            }
                            return {
                                ...budgetItem,
                                selected: false
                            }
                        })
                    }
                }
                return quizStep;
            });
        },
        customBudgetChange(state, action) {
            const { value } = action.payload;
            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep && quizStep.budgetCustomField) {
                    return {
                        ...quizStep,
                        budgetCustomField: {
                            ...quizStep.budgetCustomField,
                            value: value
                        }
                    }
                }
                return quizStep;
            });
        },
        saveAdvancedServiceCustomValue(state, action) {
            const { commentValue } = action.payload;
            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep && quizStep.commentField) {
                    return {
                        ...quizStep,
                        commentField: {
                            ...quizStep.commentField,
                            value: commentValue
                        }
                    }
                }
                return quizStep;
            });
        },
        showTechTask(state, action) {
            const { status } = action.payload;
            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep && quizStep.techTaskCustom) {
                    return {
                        ...quizStep,
                        techTaskCustom: {
                            ...quizStep.techTaskCustom,
                            active: status
                        }
                    }
                }
                return quizStep;
            });
        },
        changeDelivery(state, action) {
            const { deliveryId, status } = action.payload;
            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep && quizStep.delivery) {
                    return {
                        ...quizStep,
                        deliveryCityForm: deliveryId === quizStep.delivery.length ? {
                            ...quizStep.deliveryCityForm,
                            active: true
                        }
                        : {
                            ...quizStep.deliveryCityForm,
                            active: false
                        },
                        delivery: quizStep.delivery.map((deliveryItem) => {
                            if (deliveryItem.id === deliveryId) {
                                return {
                                    ...deliveryItem,
                                    selected: true
                                }
                            }
                            return {
                                ...deliveryItem,
                                selected: false
                            }
                        }),
                    }
                }
                return quizStep;
            });
        },
        saveDeliveryCity(state, action) {
            const { cityValue } = action.payload;
            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep && quizStep.deliveryCityForm) {
                    return {
                        ...quizStep,
                        deliveryCityForm: {
                            ...quizStep.deliveryCityForm,
                            value: cityValue
                        }
                    }
                }
                return quizStep;
            });
        },
        validateStep(state) {
            const stepIndex = state.currentStep - 1;
            if (state.currentStep === 2) {
                const checkDeadlines = state.qizSteps[stepIndex].deadLineItems.find((item) => item.selected);
                const checkCustomValue = state.qizSteps[stepIndex].deadLineItems.find((item) => item.customValue);
                const deadlineLastId = state.qizSteps[stepIndex].deadLineItems.length;
                const checkQuantity = state.qizSteps[stepIndex].quantity.value;
                state.qizSteps = state.qizSteps.map((quizStep) => {
                    if ((checkDeadlines && checkDeadlines.id !== deadlineLastId && checkQuantity) || (checkDeadlines && checkCustomValue && checkQuantity)) {
                        return {
                            ...quizStep,
                            stepValid: true
                        }
                    }
                    else if (quizStep.stepNum === state.currentStep) {
                        return {
                            ...quizStep,
                            stepValid: false
                        }
                    }
                    return quizStep;
                })
            }
            if (state.currentStep === 3) {
                const checkCustomPackageValue = state.qizSteps[stepIndex].customPackage.fieldValue;
                const checkCustomPackageValid = state.qizSteps[stepIndex].customPackage.fieldValid;
                const checkCustomPackageFile = state.qizSteps[stepIndex].customPackage.fieldFile;
                const checkSelectedPackage = state.qizSteps[stepIndex].package.find((item) => item.selected);
                state.qizSteps = state.qizSteps.map((quizStep) => {
                    if (checkCustomPackageValue || checkSelectedPackage) {
                        return {
                            ...quizStep,
                            stepValid: true
                        }
                    }
                    return {
                        ...quizStep,
                        stepValid: false
                    }
                })
            }
            if(state.currentStep === 4) {
                const checkCustomServiceValue = state.qizSteps[stepIndex].commentField.value;
                const checkSelectedService = state.qizSteps[stepIndex].services.find((item) => item.selected);
                const checkSelectedBudget = state.qizSteps[stepIndex].budget.find((item) => item.selected);
                const checkCustomBudgetValue = state.qizSteps[stepIndex].budgetCustomField.value;
                state.qizSteps = state.qizSteps.map((quizStep) => {
                    if ((checkCustomServiceValue || checkSelectedService) && (checkSelectedBudget || checkCustomBudgetValue)) {
                        return {
                            ...quizStep,
                            stepValid: true
                        }
                    }
                    return {
                        ...quizStep,
                        stepValid: false
                    }
                })

            }
        },
        resetStep(state, action) {
            const { stepNumber } = action.payload;
            const prevStep = stepNumber - 1;
            const stepIndex = state.currentStep - 1;
            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === prevStep) {
                    return {
                        ...initialState.qizSteps[stepIndex]
                    }
                }
                return quizStep;
            });
        },
        saveResultStep(state, action) {
            const { stepNumber } = action.payload;
            const stepIndex = stepNumber - 1;
            if (stepNumber === 1) {
                const selectedProduct = state.qizSteps[stepIndex].products.find((item) => item.selected);
                state.quizResult = {
                    ...state.quizResult,
                    product: {
                        ...state.quizResult.product,
                        id: selectedProduct.id,
                        name: selectedProduct.name
                    }
                }
            }
            else if (stepNumber === 2) {
                const deadlineItem = state.qizSteps[stepIndex].deadLineItems.find((item) => item.selected);
                const quantity = state.qizSteps[stepIndex].quantity.value;
                const customQuantity = state.qizSteps[stepIndex].quantity.customValue;
                state.quizResult = {
                    ...state.quizResult,
                    quantity: {
                        ...state.quizResult.quantity,
                        value: customQuantity !== 0 ? Number(customQuantity) : Number(quantity),
                    },
                    deadLine: {
                        ...state.quizResult.deadLine,
                        id: deadlineItem.id,
                        name: deadlineItem.id === state.qizSteps[stepIndex].deadLineItems.length ? deadlineItem.customValue : deadlineItem.name,
                    },
                }
            }
            else if (stepNumber === 3) {
                const customPackage = state.qizSteps[stepIndex].customPackage;
                if (customPackage.active && customPackage.fieldValid && customPackage.fieldValue) {
                    state.quizResult = {
                        ...state.quizResult,
                        package: {
                            ...state.quizResult.package,
                            id: 0,
                            name: 'custom',
                            size: `${customPackage.fieldValue}`,
                        }
                    }
                    return;
                }

                const selectedPackage = state.qizSteps[stepIndex].package.find((item) => item.selected);
                const packageSize = selectedPackage.sizes.find((item) => item.selected);

                state.quizResult = {
                    ...state.quizResult,
                    package: {
                        ...state.quizResult.package,
                        id: selectedPackage.id,
                        name: selectedPackage.name,
                        size: `${packageSize.from} ${packageSize.value} ${packageSize.to} ${packageSize.max}`,
                    }
                } 
            }

        }
    },
    extraReducers: (builder) => builder.addCase(resetQuizState, () => initialState)
});

export const {
    nextStep,
    validateStep,
    resetStep,
    selectProduct,
    selectProductPage,
    resetQuiz,
    disableQuantity,
    changeQuantity,
    changeMaxQuantity,
    selectDeadline,
    showCustomPackageField,
    saveDeadlineCustomValue,
    selectPackage,
    selectPackageSize,
    saveCustomPackageField,
    clearCustomPackageField,
    advancedServiceChange,
    advancedBudgetChange,
    customBudgetChange,
    showTechTask,
    saveAdvancedServiceCustomValue,
    changeDelivery,
    saveDeliveryCity,
    saveResultStep
} = qizSlice.actions;
export const resetQuizState = createAction('RESET_QUIZ');
export default qizSlice.reducer;