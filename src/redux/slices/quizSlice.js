import { createSlice, createAction, createAsyncThunk, current } from "@reduxjs/toolkit";
import validateName from '../../functions/validateName';
import validateMail from '../../functions/validateMail';
import validatePhone from '../../functions/validatePhone';
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
        },
        calculateResult: {
            totalQuantity: 0,
            totalWeight: 0,
            totalProductName: '',
            totalProductPricePerItem: 0,
            totalDeliveryPrice: 0,
            totalDeliveryRange: 0,
            totalSum: 0,
            totalProductWeight: 0,
            dateStart: '',
            dateEnd: '',
        },
        resultOrderForm: {
            name: { value: '', valid: true },
            phone: { value: '', valid: true },
            email: { value: '', valid: true },
            sendData: {}
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
                    name: 'Проф. косметика',
                    categories: [
                        { id: 1, name: 'Маски ', productId: 4, selected: true,  priceValue: 34 },
                        { id: 2, name: 'Кремы', productId: 4, selected: false, priceValue: 33 },
                        { id: 3, name: 'Бальзамы', productId: 4, selected: false,  priceValue: 36 },
                        { id: 4, name: 'Шампуни', productId: 4, selected: false,  priceValue: 24 },
                        { id: 5, name: 'Обертывания', productId: 4, selected: false,  priceValue: 35 },
                        { id: 6, name: 'Скрабы', productId: 4, selected: false,  priceValue: 28 },
                        { id: 7, name: 'Сыворотки', productId: 4, selected: false,  priceValue: 31 },
                        { id: 8, name: 'Гели', productId: 4, selected: false,  priceValue: 24 },
                        { id: 9, name: 'Пиллинги', productId: 4, selected: false,  priceValue: 38 },
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
                { id: 1, name: 'как можно скорее', selected: false, minDays: 1, maxDays: 7, ratio: 1.1, },
                { id: 2, name: 'от 4 до 8 недель', selected: false, minDays: 32, maxDays: 56, ratio: 1.05, },
                { id: 3, name: 'до 10 недель', selected: false, minDays: 1, maxDays: 70, ratio: 1 },
                { id: 4, name: 'до 3 мес', selected: false, minDays: 1, maxDays: 99, ratio: 0.9 },
                { id: 5, name: 'до 6 месяцев', selected: false, minDays: 1, maxDays: 180, ratio: 0.8 },
                { id: 6, name: 'свой вариант', selected: false, minDays: 1, maxDays: 1, ratio: 1, customValue: '' },
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
                        {id: 2, from: 'от', to: 'до', name: 'ml', value: 50, max: 100, selected: false, packageId: 1, price: 13 },
                        {id: 3, from: 'от', to: 'до', name: 'ml', value: 100, max: 150, selected: false, packageId: 1, price: 15 },
                        {id: 4, from: 'от', to: 'до', name: 'ml', value: 150, max: 200, selected: false, packageId: 1, price: 17 },
                        {id: 5, from: 'от', to: 'до', name: 'ml', value: 200, max: 250, selected: false, packageId: 1, price: 19 },
                        {id: 6, from: 'от', to: 'до', name: 'ml', value: 250, max: 350, selected: false, packageId: 1, price: 21 },
                        {id: 7, from: 'от', to: 'до', name: 'ml', value: 350, max: 450, selected: false, packageId: 1, price: 23 },
                        {id: 8, from: 'от', to: 'до', name: 'ml', value: 450, max: 1000, selected: false, packageId: 1, price: 25 },
                    ],
                    image: packageBottle,
                    page: 1,
                    selected: false
                },
                { 
                    id: 2, 
                    name: 'Тубы и тубофлаконы',
                    sizes: [
                        {id: 1, from: 'от', to: 'до', name: 'ml', value: 5, max: 10, selected: false, packageId: 2, price: 16},
                        {id: 2, from: 'от', to: 'до', name: 'ml', value: 30, max: 80, selected: false, packageId: 2, price: 18},
                        {id: 3, from: 'от', to: 'до', name: 'ml', value: 100, max: 150, selected: true, packageId: 2, price: 20},
                        {id: 4, from: 'от', to: 'до', name: 'ml', value: 150, max: 300, selected: false, packageId: 2, price: 22},
                    ],
                    image: packageTubes,
                    page: 1,
                    selected: false
                },
                { 
                    id: 3, 
                    name: 'Банки косметические',
                    sizes: [
                        {id: 1, from: 'от', to: 'до', name: 'ml', value: 2, max: 20, selected: false, packageId: 3, price: 14},
                        {id: 2, from: 'от', to: 'до', name: 'ml', value: 20, max: 40, selected: false, packageId: 3, price: 18},
                        {id: 3, from: 'от', to: 'до', name: 'ml', value: 40, max: 100, selected: true, packageId: 3, price: 21},
                        {id: 4, from: 'от', to: 'до', name: 'ml', value: 100, max: 200, selected: false, packageId: 3, price: 24},
                        {id: 5, from: 'от', to: 'до', name: 'ml', value: 200, max: 400, selected: false, packageId: 3, price: 27},
                        {id: 6, from: 'от', to: 'до', name: 'ml', value: 400, max: 800, selected: false, packageId: 3, price: 29},
                        {id: 7, from: 'от', to: 'до', name: 'ml', value: 800, max: 1200, selected: false, packageId: 3, price: 31},
                    ],
                    image: packagePot,
                    page: 1,
                    selected: false
                },
                { 
                    id: 4, 
                    name: 'Флаконы Roll-on',
                    sizes: [
                        {id: 1, from: 'от', to: 'до', name: 'ml', value: 10, max: 20, selected: false, packageId: 4, price: 14},
                        {id: 2, from: 'от', to: 'до', name: 'ml', value: 20, max: 50, selected: false, packageId: 4, price: 21},
                        {id: 3, from: 'от', to: 'до', name: 'ml', value: 50, max: 100, selected: true, packageId: 4, price: 26},
                        {id: 4, from: 'от', to: 'до', name: 'ml', value: 100, max: 200, selected: false, packageId: 4, price: 31},
                    ],
                    image: packageRollon,
                    page: 1,
                    selected: false
                },
                { 
                    id: 5,
                    name: 'Вакуумные флаконы', 
                    sizes: [
                        {id: 1, from: 'от', to: 'до', name: 'ml', value: 5, max: 15, selected: false, packageId: 5, price: 65},
                        {id: 2, from: 'от', to: 'до', name: 'ml', value: 15, max: 30, selected: false, packageId: 5, price: 75},
                        {id: 3, from: 'от', to: 'до', name: 'ml', value: 30, max: 80, selected: true, packageId: 5, price: 88},
                        {id: 4, from: 'от', to: 'до', name: 'ml', value: 80, max: 120, selected: false, packageId: 5, price: 97},
                    ],
                    image: packageDespencer,
                    page: 1,
                    selected: false
                },
                { 
                    id: 6, 
                    name: 'Флаконы-пенообразователи', 
                    sizes: [
                        {id: 1, from: 'от', to: 'до', name: 'ml', value: 50, max: 100, selected: false, packageId: 6, price: 53},
                        {id: 2, from: 'от', to: 'до', name: 'ml', value: 100, max: 200, selected: true, packageId: 6, price: 59},
                        {id: 3, from: 'от', to: 'до', name: 'ml', value: 200, max: 300, selected: false, packageId: 6, price: 61},
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
            stepTitle: 'Доставка и рассчет',
            stepNum: 5,
            delivery: [
                { id: 1, name: 'Вывоз продукции своими силами или ТК (вопрос решен)', selected: true, price: 0 },
                { id: 2, name: 'Доставка в пределах Санкт-Петербурга И ЛО', selected: false, price: 15 },
                { id: 3, name: 'Доставка транспортной компанией по России (нужна помощь)', selected: false, price: 24 },
            ],
            deliveryCityForm: {
                active: false,
                value: '',
                inputValid: true,
                cityData: '',
                deliveryPricePoint: 33,
            },
            active: false,
            stepValid: false,
        }
        
    ]
};

export const getDeliveryCity = createAsyncThunk(
    'api/city/',
    async (cityValue) => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/city/?city=${cityValue}`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`,
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();
        return data;
    }
);

export const sendQuizOrder = createAsyncThunk(
    'api/quiz/',
    async (sendData) => {
        console.log(sendData)
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/quiz/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sendData)
        });

        const data = await response.json();
        return data;
    }
);

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
            const { deliveryId } = action.payload;
            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep && quizStep.delivery) {
                    return {
                        ...quizStep,
                        deliveryCityForm: deliveryId === quizStep.delivery.length ? {
                            
                            active: true,
                            value: '',
                            inputValid: true,
                            cityData: '', 
                        }
                        : {
                            ...quizStep.deliveryCityForm,
                            active: false,
                            value: '',
                            inputValid: true,
                            cityData: '',
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
                            value: !/^\s*$/.test(cityValue) ? cityValue : '',
                            inputValid: true,
                        }
                    }
                }
                return quizStep;
            });
        },
        clearDeliveryCityInput(state) {
            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep && quizStep.deliveryCityForm) {
                    return {
                        ...quizStep,
                        deliveryCityForm: {
                            ...quizStep.deliveryCityForm,
                            value: '',
                            inputValid: false,
                            cityData: {}
                        }
                    }
                }
                return quizStep;
            });
        },
        saveCalculateResult(state, action) {
            const date = new Date();
            const conditionsPrice = Number(state.quizResult.conditions.price);
            const deadlineModifer = isNaN(state.quizResult.deadLine.ratio) ? 1 : Number(state.quizResult.deadLine.ratio);
            const packagePricePerItem = isNaN(state.quizResult.package.price) ? 0 : Number(state.quizResult.package.price);
            const productPricePerItem = Number(state.quizResult.product.price);
            const deadLineMaxDays = Number(state.quizResult.deadLine.maxDays);
            const totalQuantity = Number(state.quizResult.quantity.value);
            const productItemSum = (packagePricePerItem + productPricePerItem);
            const allProductSum = ((productItemSum * totalQuantity) + conditionsPrice) * deadlineModifer;
            const nextDate = new Date().setDate(date.getDate() + deadLineMaxDays);
            const currentPrintDate = ('' + (new Date(date)).toLocaleDateString('ru'));
            const endPrintDate = ('' + (new Date(nextDate)).toLocaleDateString('ru'));

            state.quizResult = {
                ...state.quizResult,
                calculateResult: {
                    ...state.quizResult.calculateResult,
                    totalQuantity: totalQuantity,
                    totalProductName: '',
                    totalProductPricePerItem: productItemSum,
                    totalDeliveryPrice: 0,
                    totalDeliveryRange: 0,
                    totalSum: allProductSum,
                    totalProductWeight: 0,
                    dateStart: currentPrintDate,
                    dateEnd: endPrintDate,
                }
            };
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
                        price: selectedCategory.priceValue,
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
                        minDays: !deadlineItem.customValue ? deadlineItem.minDays : 0,
                        maxDays: !deadlineItem.customValue ? deadlineItem.maxDays : 0,
                        ratio: deadlineItem.ratio,
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
                        price: packageSize.price,
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
                        price: selectedServices ? selectedServices.price : 0,
                        budget: selectedBudget ? selectedBudget.name : customBudgetValue,
                        customTechFile: customTechFile,
                    }
                };
            }

        },
        saveQuizOrderSize(state, action) {
            const { minWeight, maxWeight } = action.payload;
            state.quizResult.calculateResult.totalWeight = `от ${minWeight} - до ${maxWeight} кг`;
        },
        saveQuizOrderInput(state, action) {
            const { inputValue, inputType, clearInput } = action.payload;
            let validateInput;
            if (inputType === 'name' && !clearInput) validateInput =  validateName(inputValue) ? true : false;
            else if (inputType === 'email' && !clearInput) validateInput = validateMail(inputValue) ? false : true;
            else if (inputType === 'phone' && !clearInput) validateInput = validatePhone(inputValue).length === 18 ? true : false;
            if (inputValue && inputType && !clearInput) {
                state.quizResult.resultOrderForm = {
                    ...state.quizResult.resultOrderForm,
                    [inputType]: {
                        value: inputType === 'phone' ? validatePhone(inputValue) : inputValue,
                        valid: validateInput
                    },
                }
            }
            else if (clearInput) {
                state.quizResult.resultOrderForm = {
                    ...state.quizResult.resultOrderForm,
                    [inputType]: {
                        value: '',
                        valid: false
                    },
                }
            }
        },
        saveQuizUserdata(state) {
            const totalQuantity = state.quizResult.calculateResult.totalQuantity;
            const totalProductWeight = state.quizResult.calculateResult.totalWeight;
            const totalDeliveryRange = state.quizResult.calculateResult.totalDeliveryRange;
            const totalDeliveryPrice = state.quizResult.calculateResult.totalDeliveryPrice;
            const productionDate = `${state.quizResult.calculateResult.dateStart} - ${state.quizResult.calculateResult.dateEnd}`;
            const totalSum = state.quizResult.calculateResult.totalSum;
            const clientBudget = state.quizResult.conditions.budget;
            const additionalService = state.quizResult.conditions.service;
            const additionalServicePrice = state.quizResult.conditions.price;
            const deadLineName = state.quizResult.deadLine.name;
            const productCategory = state.quizResult.product.category;
            const productPricePerItem = state.quizResult.calculateResult.totalProductPricePerItem
            const productName = state.quizResult.product.name;
            const deliverySelected = state.qizSteps.find((stepItem) => stepItem.stepNum === 5);
            const customTech = state.quizResult.conditions.customTechFile ? state.quizResult.conditions.customTechFile : 'empty';
            const packageSize = `${state.quizResult.package.name} (${state.quizResult.package.size})`;
            const customPackageFile = state.quizResult.package.file ? state.quizResult.package.file : 'empty';

            state.quizResult.resultOrderForm = {
                ...state.quizResult.resultOrderForm,
                sendData: {
                    ...state.quizResult.resultOrderForm.sendData,
                    orderProduct: productName,
                    orderProductPricePerItem: productPricePerItem,
                    orderProductCategory: productCategory,
                    orderPackage: packageSize,
                    clientBudget: `${clientBudget}`,
                    orderDeadline: deadLineName,
                    orderService: additionalService,
                    orderServicePrice: additionalServicePrice,
                    orderProductionDate: productionDate,
                    orderQnt: totalQuantity,
                    orderWeight: totalProductWeight,
                    orderDeliveryRange: totalDeliveryRange,
                    orderDeliveryPrice: totalDeliveryPrice,
                    orderCalcSum: totalSum,
                    deliveryPricePerPoint:  deliverySelected.delivery.find((item) => item.selected).price,
                    deliveryPriceSum: deliverySelected.deliveryCityForm.totalPrice,
                    customDelivery: deliverySelected && deliverySelected.deliveryCityForm.cityData ? {
                        from: 'Санкт-Петербург',
                        to: deliverySelected.deliveryCityForm.cityData.name,
                        range: deliverySelected.deliveryCityForm.cityData.range,
                        population: deliverySelected.deliveryCityForm.cityData.population,
                        subject: deliverySelected.deliveryCityForm.cityData.subject,
                    } : 'empty',
                    customTz: customTech,
                    customPackage: customPackageFile,
                },
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(resetQuizState, () => initialState)
        .addCase(getDeliveryCity.fulfilled, (state, action) => {
            const { cities } = action.payload;
            if (cities && cities.length > 0) {
                state.qizSteps = state.qizSteps.map((quizStep) => {
                    if (quizStep.stepNum === state.currentStep && quizStep.deliveryCityForm) {
                        return {
                            ...quizStep,
                            deliveryCityForm: {
                                ...quizStep.deliveryCityForm,
                                value: cities[0].name,
                                totalPrice: cities[0].range * state.qizSteps.find((item) => item.delivery).delivery.find((item) => item.selected).price,
                                inputValid: true,
                                cityData: cities[0]
                            }
                        }
                    }
                    return quizStep;
                });
                return;
            }
            state.qizSteps = state.qizSteps.map((quizStep) => {
                if (quizStep.stepNum === state.currentStep && quizStep.deliveryCityForm) {
                    return {
                        ...quizStep,
                        deliveryCityForm: {
                            ...quizStep.deliveryCityForm,
                            value: '',
                            inputValid: false,
                            cityData: {},
                        }
                    }
                }
                return quizStep;
            });
        })
        // .addCase(sendQuizOrder.pending, (state) => {
        //     state.quizResult.resultOrderForm = {
        //         ...state.quizResult.resultOrderForm,
        //         name: { value: '', valid: true },
        //         phone: { value: '', valid: true },
        //         email: { value: '', valid: true },
        //     }
        // })
        .addCase(sendQuizOrder.fulfilled, (state, action) => {
            const { status } = action.payload;
            console.log(status)
            console.log('end')
        })

    }
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
    clearDeliveryCityInput,
    saveResultStep,
    saveCalculateResult,
    saveQuizOrderInput,
    saveQuizUserdata,
    saveQuizOrderSize
} = qizSlice.actions;
export const resetQuizState = createAction('RESET_QUIZ');
export default qizSlice.reducer;