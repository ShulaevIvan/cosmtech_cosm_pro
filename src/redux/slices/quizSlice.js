import { createSlice, createAction, createAsyncThunk, current } from "@reduxjs/toolkit";
import demoImg from '../../img/quizImages/200x275.png';
import quizCheckbox from '../../img/quizImages/quiz_checkbox.svg';
import quizCheckboxActive from '../../img/quizImages/quiz_checkbox-active.svg';

const initialState = {
    maxSteps: 5,
    currentStep: 1,
    showPrevStepBtn: false,
    nextBtnText: 'Следующий шаг',
    prevBtnText: 'К предыдущему шагу',
    quizResult: {
        productName: '',
        productQuantity: '',
        orderDeadline: '',
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
            name: 'Скачать ТЗ',
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
            products: [
                { 
                    id: 1,
                    name: 'product description',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg
                },
                { 
                    id: 2,
                    name: 'product description',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg
                },
                { 
                    id: 3,
                    name: 'product description',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg
                },
                { 
                    id: 4,
                    name: 'product description',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg
                },
                { 
                    id: 5,
                    name: 'product description',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg
                },
                { 
                    id: 6,
                    name: 'product description',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg
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
            customPackageActive: false,
            package: [
                { 
                    id: 1, 
                    name: 'Флаконы косметические', 
                    sizes: [
                        {id: 1, name: 'ml', value: 20, selected: true,},
                        {id: 2, name: 'ml', value: 30, selected: false,},
                        {id: 3, name: 'ml', value: 40, selected: false,},
                        {id: 4, name: 'ml', value: 50, selected: false,},
                        {id: 5, name: 'ml', value: 60, selected: false,},
                    ],
                    page: 1,
                    selected: false
                },
                { 
                    id: 2, 
                    name: 'Тубы и тубофлаконы',
                    sizes: [
                        {id: 1, name: 'ml', value: 20, selected: true,},
                        {id: 2, name: 'ml', value: 30, selected: false,},
                        {id: 3, name: 'ml', value: 40, selected: false,},
                        {id: 4, name: 'ml', value: 50, selected: false,},
                        {id: 5, name: 'ml', value: 60, selected: false,},
                    ], 
                    page: 1,
                    selected: false
                },
                { 
                    id: 3, 
                    name: 'Банки косметические',
                    sizes: [
                        {id: 1, name: 'ml', value: 20, selected: true,},
                        {id: 2, name: 'ml', value: 30, selected: false,},
                        {id: 3, name: 'ml', value: 40, selected: false,},
                        {id: 4, name: 'ml', value: 50, selected: false,},
                        {id: 5, name: 'ml', value: 60, selected: false,},
                    ],
                    page: 1,
                    selected: false
                },
                { 
                    id: 4, 
                    name: 'Флаконы Roll-on (мини-ролл) ',
                    sizes: [
                        {id: 1, name: 'ml', value: 20, selected: true,},
                        {id: 2, name: 'ml', value: 30, selected: false,},
                        {id: 3, name: 'ml', value: 40, selected: false,},
                        {id: 4, name: 'ml', value: 50, selected: false,},
                        {id: 5, name: 'ml', value: 60, selected: false,},
                    ],
                    page: 1,
                    selected: false
                },
                { 
                    id: 5,
                    name: 'Вакуумные флаконы (диспенсеры)', 
                    sizes: [
                        {id: 1, name: 'ml', value: 20, selected: true,},
                        {id: 2, name: 'ml', value: 30, selected: false,},
                        {id: 3, name: 'ml', value: 40, selected: false,},
                        {id: 4, name: 'ml', value: 50, selected: false,},
                        {id: 5, name: 'ml', value: 60, selected: false,},
                    ],
                    page: 1,
                    selected: false
                },
                { 
                    id: 6, 
                    name: 'Флаконы-пенообразователи', 
                    selected: false,
                    sizes: [
                        {id: 1, name: 'ml', value: 20, selected: true,},
                        {id: 2, name: 'ml', value: 30, selected: false,},
                        {id: 3, name: 'ml', value: 40, selected: false,},
                        {id: 4, name: 'ml', value: 50, selected: false,},
                        {id: 5, name: 'ml', value: 60, selected: false,},
                    ],
                    page: 1,
                    selected: false
                },
            ],
            packagePages: [{id: 1, active: true }, {id: 2, active: false}],
            stepNum: 3,
            active: false,
            stepValid: false,
        },
        {
            id: 4,
            name: 'Дополнительно',
            stepTitle: 'Дополнительные условия',
            stepNum: 4,
            active: false,
            stepValid: false,
        },
        {
            id: 5,
            name: 'Результат',
            stepTitle: 'Укажите куда выслать рассчет',
            stepNum: 5,
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
                        customPackageActive: status,
                    }
                }
                return quizStep;
            });
        },
        selectPackage(state, action) {
            const { packageId } = action.payload;
            state.qizSteps.find((stepItem) => stepItem.stepNum === state.currentStep)
            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep && quizStep.id === 3) {
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
            })
        },
        validateStep(state) {
            if (state.currentStep === 2) {
                const stepIndex = state.currentStep - 1;
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
                    else if (quizStep.id === 2) {
                        return {
                            ...quizStep,
                            stepValid: false
                        }
                    }
                    return quizStep;
                })
            }
            else if (state.currentStep === 3) {
                console.log('test')
            }
        }
    },
    extraReducers: (builder) => builder.addCase(resetQuizState, () => initialState)
});

export const {
    nextStep,
    validateStep,
    selectProduct,
    resetQuiz,
    disableQuantity,
    changeQuantity,
    changeMaxQuantity,
    selectDeadline,
    showCustomPackageField,
    saveDeadlineCustomValue,
    selectPackage
} = qizSlice.actions;
export const resetQuizState = createAction('RESET_QUIZ');
export default qizSlice.reducer;