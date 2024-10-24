import { createSlice, createAction, createAsyncThunk, current } from "@reduxjs/toolkit";
import demoImg from '../../img/quizImages/200x275.png';
import quizCheckbox from '../../img/quizImages/quiz_checkbox.svg';
import quizCheckboxActive from '../../img/quizImages/quiz_checkbox-active.svg';
import packageImgHold from '../../img/quizImages/250x250.png';
import cosmeticZooImg from '../../img/quizImages/cosmetic_zoo_quiz.jpeg'
import cosmeticBody from '../../img/quizImages/cosmetic_body.jpeg'
import cosmeticProf from '../../img/quizImages/cosmetic_professional.jpeg';
import babyCosm from '../../img/quizImages/baby_cosm.jpeg';
import cosmeticHair from '../../img/quizImages/cosmetic_hair_quiz.jpeg';
import cosmtechFace from '../../img/quizImages/cosmetic_face_quiz.jpeg';
import cosmtechHands from '../../img/quizImages/cosmetic_hands.jpg';
import cosmtechFeet from '../../img/quizImages/cosmetic_feet.jpg';
import cosmtechSpf from '../../img/quizImages/cosmetic_spf.jpg';
import cosmtechWash from '../../img/quizImages/wash.jpeg';
import pillings from '../../img/quizImages/pillings.jpg';
import apparat from '../../img/quizImages/cosmtech_cosmetic.jpg';
import packageBottle from '../../img/quizImages/bottle.png';
import packagePot from '../../img/quizImages/pot.png';
import packageTubes from '../../img/quizImages/tubes.png';
import packageRollon from '../../img/quizImages/rolon.png';
import packageDespencer from '../../img/quizImages/despencer.png';
import packagePena from '../../img/quizImages/penatrans.png';

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
        },
        conditions: {
            service: '',
            budget: '',
            customTechFile: ''
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
                    categories: [
                        { id: 1, name: 'Сыворотки', productId: 1, selected: true, priceValue: 26 },
                        { id: 2, name: 'Гели', productId: 1, selected: false,  priceValue: 26 },
                        { id: 3, name: 'Кремы', productId: 1, selected: false,  priceValue: 26 },
                        { id: 4, name: 'Маски', productId: 1, selected: false,  priceValue: 26 },
                        { id: 5, name: 'Пенки', productId: 1, selected: false,  priceValue: 18 },
                        { id: 6, name: 'Тоники', productId: 1, selected: false, priceValue: 17 },
                        { id: 7, name: 'Пилинги', productId: 1, selected: false, priceValue: 1 },
                        { id: 8, name: 'Фито-муссы', productId: 1, selected: false, priceValue: 1 },
                        { id: 9, name: 'Декоративная косметика', productId: 1, selected: false,  priceValue: 1 },
                        { id: 10, name: 'Другое', productId: 1, selected: false,  priceValue: 1 },
                    ],
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: cosmtechFace,
                    page: 1,
                },
                { 
                    id: 2,
                    name: 'Уход для тела',
                    categories: [
                        { id: 1, name: 'Гели для душа', productId: 2, selected: true, priceValue: 18 },
                        { id: 2, name: 'Молочко', productId: 2, selected: false,  priceValue: 23 },
                        { id: 3, name: 'Масла', productId: 2, selected: false,  priceValue: 23 },
                        { id: 4, name: 'Скрабы', productId: 2, selected: false,  priceValue: 23 },
                        { id: 5, name: 'Крем баттер', productId: 2, selected: false,  priceValue: 23 },
                        { id: 6, name: 'Гели для интимной гигиены', productId: 2, selected: false, priceValue: 21 },
                        { id: 7, name: 'Обертывания', productId: 2, selected: false, priceValue: 1 },
                        { id: 8, name: 'Дезодоранты', productId: 2, selected: false, priceValue: 1 },
                        { id: 9, name: 'Другое', productId: 2, selected: false, priceValue: 1 },
                    ],
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: cosmeticBody,
                    page: 1,
                },
                { 
                    id: 3,
                    name: 'Уход за волосами',
                    categories: [
                        { id: 1, name: 'Шампуни', productId: 3, selected: true, priceValue: 19 },
                        { id: 2, name: 'Бальзамы', productId: 3, selected: false,  priceValue: 23 },
                        { id: 3, name: 'Маски для волос', productId: 3, selected: false,  priceValue: 23 },
                        { id: 4, name: 'Масла для волос', productId: 3, selected: false,  priceValue: 23 },
                        { id: 5, name: 'Другое', productId: 3, selected: false, priceValue: 1 },
                    ],
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: cosmeticHair,
                    page: 1,
                },
                { 
                    id: 4,
                    name: 'Профессиональная косметика',
                    categories: [
                        { id: 1, name: 'Маски ', productId: 4, selected: true,  priceValue: 1 },
                        { id: 2, name: 'Кремы', productId: 4, selected: false, priceValue: 1 },
                        { id: 3, name: 'Бальзамы', productId: 4, selected: false,  priceValue: 1 },
                        { id: 4, name: 'Шампуни', productId: 4, selected: false,  priceValue: 1 },
                        { id: 5, name: 'Обертывания', productId: 4, selected: false,  priceValue: 1 },
                        { id: 6, name: 'Скрабы', productId: 4, selected: false,  priceValue: 1 },
                        { id: 7, name: 'Сыворотки', productId: 4, selected: false,  priceValue: 1 },
                        { id: 8, name: 'Гели', productId: 4, selected: false,  priceValue: 1 },
                        { id: 9, name: 'Пиллинги', productId: 4, selected: false,  priceValue: 1 },
                        { id: 10, name: 'Другое', productId: 4, selected: false, priceValue: 1 },
                    ],
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: cosmeticProf,
                    page: 1,
                },
                { 
                    id: 5,
                    name: 'Для животных',
                    categories: [
                        { id: 1, name: 'Шампуни', productId: 5, selected: true, priceValue: 28 },
                        { id: 2, name: 'Другое', productId: 5, selected: false, priceValue: 1 },
                    ],
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: cosmeticZooImg,
                    page: 1,
                },
                { 
                    id: 6,
                    name: 'Детская косметика',
                    categories: [
                        { id: 1, name: 'Бальзамы', productId: 6, selected: true,  priceValue: 28 },
                        { id: 2, name: 'Шампуни', productId: 6, selected: false, priceValue: 24 },
                        { id: 3, name: 'Гели', productId: 6, selected: false,  priceValue: 24 },
                        { id: 4, name: 'Другое', productId: 6, selected: false, priceValue: 1 },
                    ],
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: babyCosm,
                    page: 1,
                },
                { 
                    id: 7,
                    name: 'Уход за кожей рук',
                    description: '',
                    categories: [
                        { id: 1, name: 'Дезодорант', productId: 7, selected: true, priceValue: 1 },
                        { id: 2, name: 'Крем', productId: 7, selected: false, priceValue: 23 },
                        { id: 3, name: 'Бальзам', productId: 7, selected: false, priceValue: 26 },
                        { id: 4, name: 'Другое', productId: 7, selected: false, priceValue: 1 },
                    ],
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: cosmtechHands,
                    page: 2,
                },
                { 
                    id: 8,
                    name: 'Уход за кожей ног',
                    categories: [
                        { id: 1, name: 'Крем', productId: 8, selected: true, priceValue: 23 },
                        { id: 2, name: 'Бальзам', productId: 8, selected: false, priceValue: 26 },
                        { id: 3, name: 'Дезодорант', productId: 8, selected: false, priceValue: 1 },
                        { id: 4, name: 'Другое', productId: 8, selected: false, priceValue: 1 },
                    ],
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: cosmtechFeet,
                    page: 2,
                },
                { 
                    id: 9,
                    name: 'Солнцезащитные средства',
                    categories: [
                        { id: 1, name: 'Солнцезащитный крем', productId: 9, selected: true, priceValue: 1 },
                        { id: 2, name: 'Гидролат', selected: false, productId: 9, priceValue: 1 },
                        { id: 3, name: 'Масла для загара', productId: 9, selected: false, priceValue: 1 },
                        { id: 4, name: 'Крем после загара', productId: 9, selected: false, priceValue: 1 },
                        { id: 5, name: 'Другое', productId: 9, selected: false, priceValue: 1 },
                    ],
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: cosmtechSpf,
                    page: 2,
                },
                { 
                    id: 10,
                    name: 'Аппаратная косметика',
                    categories: [
                        { id: 1, name: 'Гели', productId: 10, selected: true, priceValue: 1 },
                        { id: 2, name: 'Сыворотки', productId: 10, selected: false, priceValue: 1 },
                        { id: 3, name: 'Эмульсии', productId: 10, selected: false, priceValue: 1 },
                    ],
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: apparat,
                    page: 2,
                },
                { 
                    id: 11,
                    name: 'Пилинги',
                    categories: [
                        { id: 1, name: 'Гель-пилинг', productId: 11, selected: true, priceValue: 1 },
                        { id: 2, name: 'Крем-пилинг', productId: 11, selected: false, priceValue: 1 },
                        { id: 3, name: 'Другое', productId: 11, selected: false, priceValue: 1 },
                    ],
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: pillings,
                    page: 2,
                },
                { 
                    id: 12,
                    name: 'Для ванны и душа',
                    categories: [
                        { id: 1, name: 'Жидкое мыло', productId: 12, selected: true, priceValue: 29 },
                        { id: 2, name: 'Гели для душа', productId: 12, selected: false, priceValue: 25 },
                        { id: 3, name: 'Соль для ванн', productId: 12, selected: false, priceValue: 31 },
                    ],
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: cosmtechWash,
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
                { id: 1, name: 'как можно скорее', selected: false, ratio: 1.2, },
                { id: 2, name: 'от 4 до 8 недель', selected: false, ratio: 1.05, },
                { id: 3, name: 'до 10 недель', selected: false, ratio: 1 },
                { id: 4, name: 'до 3 мес', selected: false, ratio: 0.9 },
                { id: 5, name: 'до 6 месяцев', selected: false, ratio: 0.8 },
                { id: 6, name: 'свой вариант', selected: false, ratio: 1, customValue: '' },
            ],
            deadLineCustomField: {
                fieldValue: '',
                fieldValid: false,
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
                fieldValid: false,
            },
            package: [
                { 
                    id: 1, 
                    name: 'Флаконы косметические', 
                    sizes: [
                        {id: 1, from: 'от', to: 'до', name: 'ml', value: 10, max: 50, selected: true, packageId: 1, price: 10},
                        {id: 2, from: 'от', to: 'до', name: 'ml', value: 50, max: 100, selected: false, packageId: 13 },
                        {id: 3, from: 'от', to: 'до', name: 'ml', value: 100, max: 150, selected: false, packageId: 15 },
                        {id: 4, from: 'от', to: 'до', name: 'ml', value: 150, max: 200, selected: false, packageId: 17 },
                        {id: 5, from: 'от', to: 'до', name: 'ml', value: 200, max: 250, selected: false, packageId: 19 },
                        {id: 6, from: 'от', to: 'до', name: 'ml', value: 250, max: 350, selected: false, packageId: 21 },
                        {id: 7, from: 'от', to: 'до', name: 'ml', value: 350, max: 450, selected: false, packageId: 23 },
                        {id: 8, from: 'от', to: 'до', name: 'ml', value: 450, max: 1000, selected: false, packageId: 25 },
                    ],
                    image: packageBottle,
                    page: 1,
                    selected: false
                },
                { 
                    id: 2, 
                    name: 'Тубы и тубофлаконы',
                    sizes: [
                        {id: 1, from: 'от', to: 'до', name: 'ml', value: 5, max: 10, selected: false, packageId: 16,},
                        {id: 2, from: 'от', to: 'до', name: 'ml', value: 30, max: 80, selected: false, packageId: 18,},
                        {id: 3, from: 'от', to: 'до', name: 'ml', value: 100, max: 150, selected: true, packageId: 20,},
                        {id: 4, from: 'от', to: 'до', name: 'ml', value: 150, max: 300, selected: false, packageId: 22,},
                    ],
                    image: packageTubes,
                    page: 1,
                    selected: false
                },
                { 
                    id: 3, 
                    name: 'Банки косметические',
                    sizes: [
                        {id: 1, from: 'от', to: 'до', name: 'ml', value: 2, max: 20, selected: false, packageId: 14,},
                        {id: 2, from: 'от', to: 'до', name: 'ml', value: 20, max: 40, selected: false, packageId: 18,},
                        {id: 3, from: 'от', to: 'до', name: 'ml', value: 40, max: 100, selected: true, packageId: 21,},
                        {id: 4, from: 'от', to: 'до', name: 'ml', value: 100, max: 200, selected: false, packageId: 24,},
                        {id: 5, from: 'от', to: 'до', name: 'ml', value: 200, max: 400, selected: false, packageId: 27,},
                        {id: 6, from: 'от', to: 'до', name: 'ml', value: 400, max: 800, selected: false, packageId: 29,},
                        {id: 7, from: 'от', to: 'до', name: 'ml', value: 800, max: 1200, selected: false, packageId: 31,},
                    ],
                    image: packagePot,
                    page: 1,
                    selected: false
                },
                { 
                    id: 4, 
                    name: 'Флаконы Roll-on',
                    sizes: [
                        {id: 1, from: 'от', to: 'до', name: 'ml', value: 10, max: 20, selected: false, packageId: 14,},
                        {id: 2, from: 'от', to: 'до', name: 'ml', value: 20, max: 50, selected: false, packageId: 21,},
                        {id: 3, from: 'от', to: 'до', name: 'ml', value: 50, max: 100, selected: true, packageId: 26,},
                        {id: 4, from: 'от', to: 'до', name: 'ml', value: 100, max: 200, selected: false, packageId: 31,},
                    ],
                    image: packageRollon,
                    page: 1,
                    selected: false
                },
                { 
                    id: 5,
                    name: 'Вакуумные флаконы', 
                    sizes: [
                        {id: 1, from: 'от', to: 'до', name: 'ml', value: 5, max: 15, selected: false, packageId: 65,},
                        {id: 2, from: 'от', to: 'до', name: 'ml', value: 15, max: 30, selected: false, packageId: 74,},
                        {id: 3, from: 'от', to: 'до', name: 'ml', value: 30, max: 80, selected: true, packageId: 88,},
                        {id: 4, from: 'от', to: 'до', name: 'ml', value: 80, max: 120, selected: false, packageId: 97,},
                    ],
                    image: packageDespencer,
                    page: 1,
                    selected: false
                },
                { 
                    id: 6, 
                    name: 'Флаконы-пенообразователи', 
                    sizes: [
                        {id: 1, from: 'от', to: 'до', name: 'ml', value: 50, max: 100, selected: false, packageId: 53,},
                        {id: 2, from: 'от', to: 'до', name: 'ml', value: 100, max: 200, selected: true, packageId: 59,},
                        {id: 3, from: 'от', to: 'до', name: 'ml', value: 200, max: 300, selected: false, packageId: 61,},
                    ],
                    image: packagePena,
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
                { id: 1, name: 'Разработка уникальной рецептуры', selected: false, price: 15000},
                { id: 2, name: 'Помощь с сертификацией', selected: false, price: 5000 },
                { id: 3, name: 'Помощь с разработкой дизайна', selected: false, price: 10000},
                { id: 4, name: 'Требуется разработка "под ключ"', selected: false, price: 27000 },
                { id: 5, name: 'Доп усулги не требуются', selected: false, price: 0},
                { id: 6, name: 'Опишите свой случай', selected: false, price: 0},
            ],
            budget: [
                { id: 1, name: 'от 50 000 руб до 100 000 руб', selected: false },
                { id: 2, name: 'от 100 000 руб до 300 000 руб', selected: false },
                { id: 3, name: 'от 300 000 руб до 500 000 руб', selected: false },
                { id: 4, name: 'от 500 000 руб до 1 000 000 руб', selected: false },
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
                { id: 3, name: 'Доставка транспортной компанией по России (нужна помощь)', selected: false },
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
            state.qizSteps = state.qizSteps.map((quizItem) => {
                if (quizItem.id === nextStep.id && quizItem.stepNum === nextStep.stepNum) {
                    state.currentStep = nextStep.stepNum;
                    return {
                        ...initialState.qizSteps.find((item) => item.id === quizItem.id), 
                        active: true 
                    }
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
        selectInnerProduct(state, action) {
            const { mainProductId, productName } = action.payload;
            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep && quizStep.products) {
                    return {
                        ...quizStep,
                        products: quizStep.products.map((productItem) => {
                           if (productItem.id === mainProductId) {
                            return {
                                ...productItem,
                                categories: productItem.categories.map((catItem) => {
                                    if (catItem.productId === mainProductId && catItem.name === productName) {
                                        return {
                                            ...catItem,
                                            selected: true
                                        }
                                    }
                                    return {
                                        ...catItem,
                                        selected: false
                                    }
                                })
                            }
                           }
                           return productItem;
                        })
                    }
                }
                return quizStep;
            });
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
                if (quizStep.stepNum === state.currentStep && quizStep.deadLineItems) {
                    quizStep.deadLineItems = quizStep.deadLineItems.map((deadlineItem) => {
                        if (deadlineItem.id === Array.from(quizStep.deadLineItems).length) {
                            return {
                                ...deadlineItem,
                                selected: true,
                                customValue:  /^\s*$/.test(customValue) ? '' : customValue
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
                        customPackage: status ? {
                            ...quizStep.customPackage,
                            active: status,
                        } :
                        {
                            ...quizStep.customPackage,
                            active: status,
                            fieldValue: '',
                            fieldFile: ''
                        },
                        package: initialState.qizSteps[2].package,
                    }
                }
                return quizStep;
            });
        },
        saveCustomPackageField(state, action) {
            const { textData, fileData } = action.payload;
            const checkFile = state.qizSteps.find((item) => item.customPackage);
            if (/^\s*$/.test(textData) && !fileData.file) return;

            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep && quizStep.customPackage) {
                    return {
                        ...quizStep,
                        customPackage: {
                            ...quizStep.customPackage,
                            fieldValue: textData ? textData : '',
                            fieldFile: fileData && fileData.file ? fileData : '',
                            fieldValid: true
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
                    return {
                        ...quizStep,
                        customPackage: {
                            ...quizStep.customPackage,
                            active: false,
                            fieldValue: '',
                            fieldFile: '',
                        }
                    }
                }
                return quizStep;
            });
        },
        selectPackageSize(state, action) {
            const { packageId, sizeValue } = action.payload;
            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep && quizStep.package) {
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
                    return {
                        ...quizStep,
                        customPackage: {
                            ...quizStep.customPackage,
                            fieldFile: '',
                            fieldValue: '',
                            fieldValid: false
                        }
                    }
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
        saveTechTaskCustom(state, action) {
            const { file } = action.payload;

            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep && quizStep.techTaskCustom) {
                    return {
                        ...quizStep,
                        techTaskCustom: {
                            ...quizStep.techTaskCustom,
                            file: file
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
                            if (deliveryItem.id === deliveryId && !deliveryItem.selected) {
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
                    if (checkCustomPackageValue || checkSelectedPackage || checkCustomPackageFile) {
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
                const customServiceId = Array.from(state.qizSteps[stepIndex].services).length;
                const checkSelectedService = state.qizSteps[stepIndex].services.find((item) => item.selected && item.id !== customServiceId);
                const checkSelectedBudget = state.qizSteps[stepIndex].budget.find((item) => item.selected);
                const checkCustomBudgetValue = state.qizSteps[stepIndex].budgetCustomField.value;
                state.qizSteps = state.qizSteps.map((quizStep) => {
                    if ((checkCustomServiceValue !== '' || checkSelectedService) && (checkSelectedBudget || checkCustomBudgetValue)) {
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
                const selectedCategory = selectedProduct.categories.find((item) => item.selected);
                state.quizResult = {
                    ...state.quizResult,
                    product: {
                        ...state.quizResult.product,
                        id: selectedProduct.id,
                        name: selectedProduct.name,
                        category: selectedCategory.name
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
                if (customPackage.active && customPackage.fieldValid && (customPackage.fieldValue || customPackage.fieldFile)) {
                    state.quizResult = {
                        ...state.quizResult,
                        package: {
                            ...state.quizResult.package,
                            id: 0,
                            name: 'custom',
                            file: customPackage.fieldFile,
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
            else if (stepNumber === 4) {
                const lastServiceId = Array.from(state.qizSteps[stepIndex].services).length;
                const lastBudgetId = Array.from(state.qizSteps[stepIndex].budget).length;
                const selectedServices = state.qizSteps[stepIndex].services.find((serviceItem) => serviceItem.selected && serviceItem.id !== lastServiceId);
                const customServiceValue = state.qizSteps[stepIndex].commentField.value;
                const selectedBudget = state.qizSteps[stepIndex].budget.find((budgetItem) => budgetItem.selected && budgetItem.id !== lastBudgetId);
                const customBudgetValue = state.qizSteps[stepIndex].budgetCustomField.value;
                const customTechFile = state.qizSteps[stepIndex].techTaskCustom.file;
                
                state.quizResult = {
                    ...state.quizResult,
                    conditions: {
                        ...state.quizResult.conditions,
                        service: selectedServices ? selectedServices.name : customServiceValue,
                        budget: selectedBudget ? selectedBudget.name : customBudgetValue,
                        customTechFile: customTechFile,
                    }
                };
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
    selectInnerProduct,
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
    saveTechTaskCustom,
    saveAdvancedServiceCustomValue,
    changeDelivery,
    saveDeliveryCity,
    saveResultStep
} = qizSlice.actions;
export const resetQuizState = createAction('RESET_QUIZ');
export default qizSlice.reducer;