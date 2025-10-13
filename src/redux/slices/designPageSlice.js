import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import validateName from "../../functions/validateName";
import validatePhone from "../../functions/validatePhone";


import brandServiceImg from '../../img/contractDesign/cosmeticBrand.jpg';
import predmetCameraServiceImg from '../../img/contractDesign/predmetCamera.jpg';
import redesignServiceImg from '../../img/contractDesign/redesign.jpg';
import portfolioDemoImg from '../../img/contractDesign/portfolio/portfolioDemo.jpg'


const importAllImages = (ctxWebpuck) => {
    const images = {};
    ctxWebpuck.keys().forEach((item, index) => { images[item.replace('./', '').replace(/.\w+$/, '')] = ctxWebpuck(item); });
    return images;
};

const workcaseMain1Img = importAllImages(require.context('../../img/contractDesign/workcase/case_1/', false, /\.(png|jpe?g|svg)$/));
const workcaseMain2Img = importAllImages(require.context('../../img/contractDesign/workcase/case_2/', false, /\.(png|jpe?g|svg)$/));
const workcaseMain3Img = importAllImages(require.context('../../img/contractDesign/workcase/case_3/', false, /\.(png|jpe?g|svg)$/));
const workcaseMain4Img = importAllImages(require.context('../../img/contractDesign/workcase/case_4/', false, /\.(png|jpe?g|svg)$/));
const workcaseMain5Img = importAllImages(require.context('../../img/contractDesign/workcase/case_5/', false, /\.(png|jpe?g|svg)$/));
const workcaseMain6Img = importAllImages(require.context('../../img/contractDesign/workcase/case_6/', false, /\.(png|jpe?g|svg)$/));
const workcaseMain7Img = importAllImages(require.context('../../img/contractDesign/workcase/case_7/', false, /\.(png|jpe?g|svg)$/));
const workcaseMain8Img = importAllImages(require.context('../../img/contractDesign/workcase/case_8/', false, /\.(png|jpe?g|svg)$/));
const workcaseOther1 = importAllImages(require.context('../../img/contractDesign/workcase/case_1/other', false, /\.(png|jpe?g|svg)$/));
const workcaseOther2 = importAllImages(require.context('../../img/contractDesign/workcase/case_2/other', false, /\.(png|jpe?g|svg)$/));
const workcaseOther3 = importAllImages(require.context('../../img/contractDesign/workcase/case_3/other', false, /\.(png|jpe?g|svg)$/));
const workcaseOther4 = importAllImages(require.context('../../img/contractDesign/workcase/case_4/other', false, /\.(png|jpe?g|svg)$/));
const workcaseOther5 = importAllImages(require.context('../../img/contractDesign/workcase/case_5/other', false, /\.(png|jpe?g|svg)$/));
const workcaseOther6 = importAllImages(require.context('../../img/contractDesign/workcase/case_6/other', false, /\.(png|jpe?g|svg)$/));
const workcaseOther7 = importAllImages(require.context('../../img/contractDesign/workcase/case_7/other', false, /\.(png|jpe?g|svg)$/));
const workcaseOther8 = importAllImages(require.context('../../img/contractDesign/workcase/case_8/other', false, /\.(png|jpe?g|svg)$/));

const { workcase_1_main_min, workcase_1_main } = workcaseMain1Img
const { workcase_2_main_min, workcase_2_main } = workcaseMain2Img
const { workcase_3_main_min, workcase_3_main } = workcaseMain3Img
const { workcase_4_main_min, workcase_4_main } = workcaseMain4Img
const { workcase_5_main_min, workcase_5_main } = workcaseMain5Img
const { workcase_6_main_min, workcase_6_main } = workcaseMain6Img
const { workcase_7_main_min, workcase_7_main } = workcaseMain7Img
const { workcase_8_main_min, workcase_8_main } = workcaseMain8Img
const { workcase1Other1, workcase1Other2, workcase1Other3, workcase1Other4, workcase1Other5,} = workcaseOther1;
const { workcase2Other1, workcase2Other2, workcase2Other3, workcase2Other4, workcase2Other5, workcase2Other6 } = workcaseOther2;
const { workcase3Other1, workcase3Other2, workcase3Other3, workcase3Other4, workcase3Other5, workcase3Other6 } = workcaseOther3;
const { workcase4Other1, workcase4Other2, } = workcaseOther4;
const { workcase5Other1, workcase5Other2, workcase5Other3 } = workcaseOther5;
const { workcase6Other1, workcase6Other2, workcase6Other4, workcase6Other5, } = workcaseOther6;
const { workcase7Other1, workcase7Other2, workcase7Other3, workcase7Other4, } = workcaseOther7;
const { workcase8Other1, workcase8Other2, workcase8Other3, workcase8Other4, workcase8Other5, workcase8Other6} = workcaseOther8;


const initialState = {
    mainServices: [
        {
            id: 1,
            bgImage: {
                src: brandServiceImg,
                imgAlt: 'Дизайн упаковки для косметики и запуск бренда с нуля'
            },
            title: 'Запуск бренда с нуля',
            orderForm: {
                popupFormActive: false,
                active: false,
                policyActive: false,
                fields: [
                    {
                        id: 1,
                        name: 'name',
                        type: 'text',
                        title: 'Имя',
                        placeholder: 'Ваше имя',
                        value: '',
                        valid: true
                    },
                    {
                        id: 2,
                        name: 'phone',
                        title: 'Телефон',
                        type: 'text',
                        placeholder: '8xxxxxxxxxx',
                        value: '',
                        valid: true
                    },
                    {
                        id: 3,
                        name: 'services',
                        title: 'Услуга',
                        type: 'options',
                        services: [
                            {
                                id: 1,
                                name: 'brand',
                                value: 'Запуск бренда с нуля',
                                selected: true
                            },
                            {
                                id: 2,
                                name: 'design',
                                value: 'Усулги дизайна',
                                selected: false
                            },
                            {
                                id: 3,
                                name: 'camera',
                                value: 'Предметная съемка косметики',
                                selected: false
                            }
                        ]
                    }
                ],
            }
        },
        {
            id: 2,
            bgImage: {
                src: redesignServiceImg,
                imgAlt: 'Редизайн упаковки для косметики услуги'
            },
            title: 'Редизайн и расширение',
            orderForm: {
                popupFormActive: false,
                active: false,
                policyActive: false,
                fields: [
                    {
                        id: 1,
                        name: 'name',
                        type: 'text',
                        title: 'Имя',
                        placeholder: 'Ваше имя',
                        value: '',
                        valid: true
                    },
                    {
                        id: 2,
                        name: 'phone',
                        title: 'Телефон',
                        type: 'text',
                        placeholder: '8xxxxxxxxxx',
                        value: '',
                        valid: true
                    },
                    {
                        id: 3,
                        name: 'services',
                        title: 'Услуга',
                        type: 'options',
                        services: [
                            {
                                id: 1,
                                name: 'brand',
                                value: 'Запуск бренда с нуля',
                                selected: false
                            },
                            {
                                id: 2,
                                name: 'design',
                                value: 'Усулги дизайна',
                                selected: true
                            },
                            {
                                id: 3,
                                name: 'camera',
                                value: 'Предметная съемка косметики',
                                selected: false
                            }
                        ]
                    }
                ],
            }
        },
        {
            id: 3,
            bgImage: {
                src: predmetCameraServiceImg,
                imgAlt: 'Предметная съемка косметики'
            },
            title: 'Предметная съемка',
            orderForm: {
                popupFormActive: false,
                active: false,
                policyActive: false,
                fields: [
                    {
                        id: 1,
                        name: 'name',
                        type: 'text',
                        title: 'Имя',
                        placeholder: 'Ваше имя',
                        value: '',
                        valid: true
                    },
                    {
                        id: 2,
                        name: 'phone',
                        title: 'Телефон',
                        type: 'text',
                        placeholder: '8xxxxxxxxxx',
                        value: '',
                        valid: true
                    },
                    {
                        id: 3,
                        name: 'services',
                        title: 'Услуга',
                        type: 'options',
                        services: [
                            {
                                id: 1,
                                name: 'brand',
                                value: 'Запуск бренда с нуля',
                                selected: false
                            },
                            {
                                id: 2,
                                name: 'design',
                                value: 'Усулги дизайна',
                                selected: false
                            },
                            {
                                id: 3,
                                name: 'camera',
                                value: 'Предметная съемка косметики',
                                selected: true
                            }
                        ]
                    }
                ],
            }
        },
    ],
    orderServiceForm: {
        clientName: '',
        clientPhone: '',
        selectedService: '',
        allFieldsValid: false,
        happyStatePopup: {
            active: false,
            title: 'Test Title',
            description: 'Message'
        }
    },
    consultServiceForm: {
        clientName: '',
        clientPhone: '',
        clientComment: '',
        policyActive: false,
        sendBtnActive: false,
        happyStatePopup: {
            active: false,
            title: 'Test Title',
            description: 'Message'
        },
        fields: [
            {
                id: 1,
                name: 'name',
                type: 'text',
                title: 'Имя',
                placeholder: 'Ваше имя',
                value: '',
                valid: true
            },
            {
                id: 2,
                name: 'phone',
                title: 'Телефон',
                type: 'text',
                placeholder: '8xxxxxxxxxx',
                value: '',
                valid: true
            },
            {
                id: 3,
                name: 'comment',
                title: 'Комментарий',
                type: 'textarea',
                placeholder: 'Комментарий',
                value: '',
                valid: true
            },
        ]
    },
    portfolio: {
        portfolioItems: [
            {
                id: 1,
                name: 'Фирменный стиль уходовой косметики',
                title: '',
                mainImg: workcase_1_main_min,
                mainImgAlt: '#',
                mainImgBig: workcase_1_main,
                mainImgBigAlt: '#',
                selected: false,
                content: {
                    paragraphs: [
                        'Центром концепции фирменного стиля линии уходовой косметики Delicare стали чистота, прозрачность и натуральность, которые транслируются через изящный минималистичный дизайн упаковки. Главный акцент — четко узнаваемые визуальные образы натуральных ингредиентов (алоэ, кокос, масло ши) и лаконичная цветовая кодировка различных продуктов. Белый фон и открытое пространство на упаковке подчеркивают клиническую чистоту, эффективность и безопасность продуктов.',
                        'Типографика поддерживает общее ощущение легкости и достоверности. Реалистичные изображения основных ингредиентов сразу сообщают о составе продукта, делают упаковку визуально запоминающейся и дружелюбной, чем выгодно отличают ее на полке. Упаковка выглядит минималистично и экспертно за счет чистого белого фона и структурированной информации, выделяя бренд среди перегруженных упаковок конкурентов, создавая ассоциацию с аптечной, профессиональной косметикой.',
                        'Четкая логика навигации в виде цветовых акцентов помогает легко различать продукты внутри одной линии, ускоряя выбор покупателя. Упаковка вызывает доверие и прозрачность, так как на ней представлены ключевые свойства, научные подтверждения эффективности и безопасный состав — всё, что важно современному потребителю.',
                        'Благодаря данному графическому решению упаковка органично смотрится как на полках аптек и супермаркетов, так и на фотографиях в социальных сетях, усиливая визуальное присутствие бренда.'
                    ],
                    gallery: [
                        {
                            id: 1,
                            img: workcase1Other1,
                            imgAlt: 'Услуги по созданию фирменного стиля для уходовой косметики портфолио дизайна космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 2,
                            img: workcase1Other2,
                            imgAlt: 'Услуги по созданию фирменного стиля для уходовой косметики портфолио дизайна космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 3,
                            img: workcase1Other3,
                            imgAlt: 'Услуги по созданию фирменного стиля для уходовой косметики портфолио дизайна космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                            {
                            id: 4,
                            img: workcase1Other4,
                            imgAlt: 'Фирменный стиль для уходовой косметики портфолио дизайна космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 5,
                            img: workcase1Other5,
                            imgAlt: 'Услуги по созданию фирменного стиля для уходовой косметики портфолио дизайна космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                    ]
                }
            },
            {
                id: 2,
                name: 'Дизайн подарочного набора  «House of Elegance»',
                title: '',
                mainImg: workcase_2_main_min,
                mainImgAlt: '#',
                mainImgBig: workcase_2_main,
                mainImgBigAlt: '#',
                selected: false,
                content: {
                    paragraphs: [
                        'При создании дизайна подарочного набора “House of Elegance”, была поставлена цель разработать не просто красивую коробку, а настоящий маленький праздничный ритуал. Концепция была вдохновлена образом уютного дома, наполненного заботой и теплом, в котором каждый подарок становится отдельной комнатой с приятным сюрпризом. Именно поэтому форма упаковки повторяет силуэт домика, а каждая составляющая набора размещена в отдельном выдвижном ящичке, словно в настоящем кукольном доме.',
                        'Центральное место в визуальной айдентике заняли нежные розовые оттенки и элегантные акценты золота, создающие ощущение утончённости и праздника. Детали упаковочных материалов — блестящий картон, акценты с золотой фольгой — вызывают ассоциации с предвкушением и радостным открытием подарка. Каждый элемент, от надписей до звездочек на поверхности, работает на общее ощущение волшебства и персонального внимания к получателю.',
                        'Важной частью концепции стала идея сенсорной радости: упаковка не только радует взгляд, но и создает тактильное удовольствие — выдвижные ящички приятно открывать, а само оформление упаковки превращает распаковку в праздничное чудо, наполненное теплом и уютом. Преимущество такого дизайна — в его универсальности и эмоциональности. Он одинаково хорошо подходит для подарка любимым, близким, коллегам: благодаря мягкой палитре, гармоничным формам и продуманной архитектуре коробки набор приобретает особенную, запоминающуюся ценность.',
                        'К тому же, подарочная упаковка-сюрприз впоследствии может использоваться как шкатулка для хранения милых мелочей, продлевая тем самым радость от подарка. Этот подход в создании упаковки позволяет не просто выделиться на полке, но и создать положительный личный опыт для каждого, кто возьмёт в руки этот набор. House of Elegance — это не просто подарок, это маленькая история, рассказанная через дизайн, уют и заботу.'
                    ],
                    gallery: [
                        {
                            id: 1,
                            img: workcase2Other1,
                            imgAlt: 'Услуги дизайна упаковки для подарочного набора  «House of Elegance» портфолио космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 2,
                            img: workcase2Other2,
                            imgAlt: 'Услуги дизайна упаковки для подарочного набора  «House of Elegance» портфолио космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 3,
                            img: workcase2Other3,
                            imgAlt: 'Услуги дизайна упаковки для подарочного набора  «House of Elegance» портфолио космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 4,
                            img: workcase2Other4,
                            imgAlt: 'Услуги дизайна упаковки для подарочного набора  «House of Elegance» портфолио космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 5,
                            img: workcase2Other5,
                            imgAlt: 'Услуги дизайна упаковки для подарочного набора  «House of Elegance» портфолио космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 6,
                            img: workcase2Other6,
                            imgAlt: 'Услуги дизайна упаковки для подарочного набора  «House of Elegance» портфолио космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                    ]
                }
            },
            {
                id: 3,
                name: 'Дизайн упаковки антивозрастных кремов',
                title: '',
                mainImg: workcase_6_main_min,
                mainImgAlt: '#',
                mainImgBig: workcase_6_main,
                mainImgBigAlt: '#',
                selected: false,
                content: {
                    paragraphs: [
                        'Цель упаковки для линейки антивозрастных кремов – подчеркнуть главное преимущество: реальное золото в составе крема. Эта задача проста и сложна одновременно: сделать упаковку, которая бы сразу говорила о премиуме, но при этом выглядела честно, понятно и вызывала доверие у зрелой аудитории.',
                        'Метафорой бренда стало «маленькое сокровище», где золото – это не декоративный элемент, а язык продукта: фольгированная поверхность с лёгкой текстурой играет бликами, напоминает ювелирную вещь и сразу привлекает взгляд. Чтобы не перегружать восприятие, добавлены контрастные зоны: чистый белый для дневных и глубокий чёрный для ночных формул. Это не только эстетично, но и помогает покупателю мгновенно ориентироваться на полке.',
                        'Шрифт — лаконичный, элегантный; слово GOLD вынесено в фокус, остальные надписи ясны и читаемы. Возрастные категории выделены насыщенными, но ненавязчивыми цветами, чтобы навигация была интуитивной. На боковой стороне размещено выразительное изображение банки крема, чтобы создать у покупателя еще большую ассоциацию продукта с некой драгоценностью. Вся информация расположена на контрастном фоне, чтобы внушать доверие и не перегружать взгляд.',
                        'В результате это линейка, которая выделяется на полке и при этом остаётся честной и понятной для целевой аудитории. Упаковка передаёт ценность — не просто словами, а визуально: продукт выглядит как маленькое золотое вложение в уход за кожей.'
                    ],
                    gallery: [
                        {
                            id: 1,
                            img: workcase6Other1,
                            imgAlt: 'Услуги для дизайна упаковки антивозрастных кремов портфолио космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 2,
                            img: workcase6Other2,
                            imgAlt: 'Услуги для дизайна упаковки антивозрастных кремов портфолио космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 3,
                            img: workcase6Other4,
                            imgAlt: 'Услуги для дизайна упаковки антивозрастных кремов портфолио космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 4,
                            img: workcase6Other5,
                            imgAlt: 'Услуги для дизайна упаковки антивозрастных кремов портфолио космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                    ]
                }
            },
            {
                id: 4,
                name: 'Дизайн упаковки кремов для рук',
                title: '',
                mainImg: workcase_4_main_min,
                mainImgAlt: '#',
                mainImgBig: workcase_4_main,
                mainImgBigAlt: '#',
                selected: false,
                content: {
                    paragraphs: [
                        'Цель дизайна упаковки кремов для рук — рассказать о комплексном экспертном уходе и мотивировать покупателя взять сразу два продукта, а не один. Для этого важно не только выгодно отличаться от конкурентов, но и сделать акцент на доступной цене, сохраняя ощущение профессионального подхода. Вдохновением для визуальной концепции упаковки стала идея многослойности — как символ комплексного действия кремов. Конструкция дизайна построена на контрасте ярких геометрических фигур и чистого белого фона. Перекрывающиеся прямоугольники создают баланс между динамикой и строгой геометрией, формируя современное и яркое, но одновременно лаконичное оформление.',
                        'У обоих кремов схожая визуальная платформа, что подчеркивает их единую линейку и комплексный характер. Однако в каждой упаковке продукта сделан акцент на уникальном торговом предложении: на одном — конкретный активный ингредиент и его процентное содержание, на втором — показатель результата и особенности состава. Такой подход не только выгодно выделяет продукцию на полке, но и усложняет выбор «только одного»: покупателю буквально предлагается собрать полный уход, дополнив действие одного крема вторым. Технология печати и цветовое решение:  В упаковке использована печать цветов исключительно по системе Pantone.',
                        'Эффект наложения цветов, когда оттенки выглядят напечатанными друг над другом, достигнут не путем смешивания на оттиске, а за счет точной раздельной печати отдельных пантонных цветов, которые создают эту визуальную иллюзию. Результат: система использования цветов Pantone обеспечивает стабильные и предсказуемые результаты при большом количестве цветовых комбинаций, что упрощает контроль качества при производстве. Дизайн упаковки каждого крема выглядит взаимодополняющим. Кремы могут существовать как вместе, так и отдельно друг от друга. В будущем серия легко масштабируется и адаптируется к другим форматам.',
                        'На полке магазина упаковка выделяется среди конкурентов, не теряя при этом основных визуальных характеристик категории. Концепция формирует ощущение экспертного, доступного и комплексного подхода — и подталкивает покупателя к решению попробовать оба крема одновременно.'
                    ],
                    gallery: [
                        {
                            id: 1,
                            img: workcase4Other1,
                            imgAlt: 'Усулги по дизайну упаковки кремов для рук портфолио космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 2,
                            img: workcase4Other2,
                            imgAlt: 'Усулги по дизайну упаковки кремов для рук портфолио космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                    ]
                }
            },
            {
                id: 5,
                name: 'Дизайн упаковки мыла',
                title: '',
                mainImg: workcase_5_main_min,
                mainImgAlt: '#',
                mainImgBig: workcase_5_main,
                mainImgBigAlt: '#',
                selected: false,
                content: {
                    paragraphs: [
                        'Иногда задача не в том, чтобы придумать что-то принципиально новое, а в том, чтобы стать достойным конкурентом существующего продукта. В этом кейсе рамки были четкими: редизайн упаковки линейки мыла с кремом. Ограничения упростили процесс принятия решений, но не ограничили творческий поиск. Необходимо было удовлетворить такую потребность покупателя, как использование мыла не только как средства для рук и тела, но и как продукта, подходящего для лица. С помощью этого инсайта было решено сместить графический язык в сторону декоративной косметики, где больше заигрывания с аудиторией, романтичности, нежности и женственности в графике. Подход: адаптировать визуальную систему под язык категории «для лица» и декоративной косметики — больше цвета, контраста и текстур, но в сдержанной форме.',
                        'Палитра: розовый, голубой, персиковый — с черной типографикой для читаемости и «перчинкой» образа. Иллюстративный мотив — абстрактный, лаконичный; для тонкого акцента использовано золотое тиснение. Результат: упаковка получила новый, узнаваемый образ, соотносимый с категориями ухода за лицом и декоративной косметики, при этом не теряется связь с исходным продуктом. Решение усиливает выделение на полке и снижает риск смешения с конкурентами. Предметная фотосъемка мыла выполнена в стиле яркой, воздушной и «вкусной» визуализации, с явным акцентом на сладкую, десертную ассоциацию. Главная идея съемки — показать мыло как продукт, доставляющий удовольствие, ассоциирующийся с заботой о себе и нежностью.',
                        'Мыло здесь дано не только как средство гигиены, но как маленькая радость, эстетика сладостей и красоты. Использование зефира, маршмеллоу и пастельных посыпок создает иллюзию аппетитного десерта, подчеркивая нежность и кремовую текстуру мыла. Мыло обыграно как конфета — соблазнительная, лакомая, с привлекательной упаковкой. Данная интеграция косметического продукта в необычный, гастрономический контекст усиливает желание «попробовать», ассоциирует средство с заботой и удовольствием. Необычная цветочная и десертная подложка добавляет легкость, радость и игривость снимкам. Голубой, розовый, мятный, персиковый, ванильный цвета подчеркивают деликатность продукта, создают атмосферу безмятежности и лёгкости, выглядят очень современно и уютно.',
                        'В целом:   Такой подход выделяет фотографию среди привычных снимков косметики, дарит ассоциации с удовольствием и баловством, делает изображение привлекательным, легким для восприятия и запоминающимся. Эта съёмка — не просто красивые картинки. Это инструмент, который напрямую увеличит продажи, упростит маркетинг и сделает бренд заметным в подарочном и лайфстайл‑сегменте.'
                    ],
                    gallery: [
                        {
                            id: 1,
                            img: workcase5Other1,
                            imgAlt: 'Усулги дизайна упаковки мыла портфолио космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 2,
                            img: workcase5Other2,
                            imgAlt: 'Усулги дизайна упаковки мыла портфолио космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 3,
                            img: workcase5Other3,
                            imgAlt: 'Усулги дизайна упаковки мыла портфолио космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        }
                    ]
                }
            },
            {
                id: 6,
                name: 'Дизайн линии антиперспирантов',
                title: '',
                mainImg: workcase_3_main_min,
                mainImgAlt: '#',
                mainImgBig: workcase_3_main,
                mainImgBigAlt: '#',
                selected: false,
                content: {
                    paragraphs: [
                        'Этот кейс — о создании визуальной идентичности антиперспиранта для активных девушек, стремящихся к движению и свободе. Основой дизайна упаковки стала изогнутая графическая форма: она не только символизирует чистую, сухую зону тела, но и транслирует ассоциации с динамикой, энергией и гибкостью, которые близки целевой аудитории продукта. Изогнутые линии на упаковке визуально вызывают ассоциации с привлекательными изгибами тела и создают ощущение легкости и стремительного движения вперёд.',
                        'Абстрактный точечный орнамент — важная часть визуального языка бренда. Эти графические элементы символизируют невидимые частицы парфюмерной отдушки, деликатно окружающие кожу и создающие приятную атмосферу даже во время самых интенсивных тренировок. Это решение подчеркивает заботу о чувственности момента, свежесть и индивидуальность каждого аромата.',
                        'Процесс разработки дизайна основывался на глубоком погружении в образ современной девушки: активной, уверенной и стремящейся к комфорту на любом этапе дня. Палитра упаковки и рекламных визуалов эмоциональна, с градиентами, оттенками голубого, розового, сиреневого и насыщенного фиолетового, что тонко подчеркивает разнообразие ароматов и настроений, подходящих для разных типов личности и активности. В материалах для социальных сетей и наружной рекламы продолжена концепция динамизма и легкости: все элементы наполнены движением, цвет всплесков перекликается с упаковкой, а акцент на точечном орнаменте усиливает впечатление невесомой свежести.',
                        'Каждая реклама транслирует главный посыл бренда — антиперспирант становится неотъемлемой частью жизни, поддерживая свободу и комфорт в любой ситуации. Концепция проекта — объединить эстетику спорта, женственности и технологий, сделать продукт ярким акцентом среди средств личной гигиены для активных девушек, визуально выделив его индивидуальность и эмоциональную привлекательность.'
                    ],
                    gallery: [
                        {
                            id: 1,
                            img: workcase3Other1,
                            imgAlt: '#',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: 'Усулги по дизайну упаковки для антиперспирантов космотех',
                        },
                        {
                            id: 2,
                            img: workcase3Other2,
                            imgAlt: '#',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: 'Усулги по дизайну упаковки для антиперспирантов космотех',
                        },
                        {
                            id: 3,
                            img: workcase3Other3,
                            imgAlt: 'Усулги по дизайну упаковки для антиперспирантов космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                         {
                            id: 4,
                            img: workcase3Other4,
                            imgAlt: '#',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: 'Усулги по дизайну упаковки для антиперспирантов космотех',
                        },
                        {
                            id: 5,
                            img: workcase3Other5,
                            imgAlt: 'Усулги по дизайну упаковки для антиперспирантов космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 6,
                            img: workcase3Other6,
                            imgAlt: 'Усулги по дизайну упаковки для антиперспирантов космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                    ]
                }
            },
            {
                id: 7,
                name: 'Фирменный стиль для космецевтики',
                title: '',
                mainImg: workcase_7_main_min,
                mainImgAlt: '#',
                mainImgBig: workcase_7_main,
                mainImgBigAlt: '#',
                selected: false,
                content: {
                    paragraphs: [
                        'При создании фирменного стиля бренда Medis требовалось создать логотип и упаковку, отражающие его клиническую строгость, медицинскую надёжность и сдержанную, полуаптечную идентичность. В основе построения лежит жёсткая модульная сетка, задающая пропорции рамок, полос и полей для текста, что дает строгую систему и выверенную типографику. Белое поле используется как основной фон для максимальной читабельности и ощущения стерильности, а чёрные рамки — чтобы структурировать композицию и создать «аптечный» лейбл: рамка служит визуальным якорем, из‑за которого всё содержимое воспринимается как клиническая информация. Внутри белого поля расположена горизонтальная полоска с градиентом воды.',
                        'Она служит привлекающим внимание ярким пятном, одновременно добавляющим эмоциональную мягкость и ассоциативную связь с увлажнением и биологическими растворами. Чёрный текст выполнен строгим гротеском без засечек, с жирными заголовками для максимальной контрастности и удобочитаемости. Значок микроскопа будто имитирует врачебную печать или отметку пробы у препаратов, добавляя при этом «живости» общему виду упаковки. Это еще одна запоминающаяся отличительная черта в фирменном стиле бренда.',
                        'Логотип строится по горизонтальной оси: название бренда набрано жирным шрифтом, красный крест и полоска выступают ярким акцентом. Жирный шрифт задаёт визуальную «массу» и узнаваемость, крест привлекает взгляд за счёт цвета. Важную роль играет баланс: яркий крест компенсирует тяжёлый блок шрифта, а полоска задаёт направление взгляда — ведёт от акцента к названию или наоборот. Дизайн упаковки продаёт не только продукт — он продаёт доверие, делает бренд профессиональным, по-медицински надёжным и понятным для покупателя.',
                        'Единство линейки — повторяемые элементы – укрепляет узнаваемость на полке и повышают вероятность кросс-продаж. А логичная система цветового кодирования позволяет покупателю ориентироваться быстрее, ассортимент читается с полуслова. Акцент на безопасности и эффективности — формулировки вроде «без спирта», «99,9% уничтожения микробов», «кератолитик» – работают как доверительный маркер для целевой аудитории.'
                    ],
                    gallery: [
                        {
                            id: 1,
                            img: workcase7Other1,
                            imgAlt: 'Усулги по дизайну упаковки для косметики портфолио космотех',
                            imgBigAlt: '#',
                        },
                        {
                            id: 2,
                            img: workcase7Other2,
                            imgAlt: 'Усулги по дизайну упаковки для косметики портфолио космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 3,
                            img: workcase7Other3,
                            imgAlt: 'Усулги по дизайну упаковки для косметики портфолио космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 4,
                            img: workcase7Other4,
                            imgAlt: 'Усулги по дизайну упаковки для косметики портфолио космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                    ]
                }
            },
             {
                id: 8,
                name: 'Фирменный стиль гипоаллергенной косметики',
                title: '',
                mainImg: workcase_8_main_min,
                mainImgAlt: '#',
                mainImgBig: workcase_8_main,
                mainImgBigAlt: '#',
                selected: false,
                content: {
                    paragraphs: [
                        'При создании фирменного стиля бренда Medis требовалось создать логотип и упаковку, отражающие его клиническую строгость, медицинскую надёжность и сдержанную, полуаптечную идентичность. В основе построения лежит жёсткая модульная сетка, задающая пропорции рамок, полос и полей для текста, что дает строгую систему и выверенную типографику. Белое поле используется как основной фон для максимальной читабельности и ощущения стерильности, а чёрные рамки — чтобы структурировать композицию и создать «аптечный» лейбл: рамка служит визуальным якорем, из‑за которого всё содержимое воспринимается как клиническая информация. Внутри белого поля расположена горизонтальная полоска с градиентом воды.',
                        'Она служит привлекающим внимание ярким пятном, одновременно добавляющим эмоциональную мягкость и ассоциативную связь с увлажнением и биологическими растворами. Чёрный текст выполнен строгим гротеском без засечек, с жирными заголовками для максимальной контрастности и удобочитаемости. Значок микроскопа будто имитирует врачебную печать или отметку пробы у препаратов, добавляя при этом «живости» общему виду упаковки. Это еще одна запоминающаяся отличительная черта в фирменном стиле бренда.',
                        'Логотип строится по горизонтальной оси: название бренда набрано жирным шрифтом, красный крест и полоска выступают ярким акцентом. Жирный шрифт задаёт визуальную «массу» и узнаваемость, крест привлекает взгляд за счёт цвета. Важную роль играет баланс: яркий крест компенсирует тяжёлый блок шрифта, а полоска задаёт направление взгляда — ведёт от акцента к названию или наоборот. Дизайн упаковки продаёт не только продукт — он продаёт доверие, делает бренд профессиональным, по-медицински надёжным и понятным для покупателя.',
                        'Единство линейки — повторяемые элементы – укрепляет узнаваемость на полке и повышают вероятность кросс-продаж. А логичная система цветового кодирования позволяет покупателю ориентироваться быстрее, ассортимент читается с полуслова. Акцент на безопасности и эффективности — формулировки вроде «без спирта», «99,9% уничтожения микробов», «кератолитик» – работают как доверительный маркер для целевой аудитории.'
                    ],
                    gallery: [
                        {
                            id: 1,
                            img: workcase8Other1,
                            imgAlt: 'Услуги создание фирменного стиля для гипоаллергенной косметики космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 2,
                            img: workcase8Other2,
                            imgAlt: 'Услуги создание фирменного стиля для гипоаллергенной косметики космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 3,
                            img: workcase8Other3,
                            imgAlt: 'Услуги создание фирменного стиля для гипоаллергенной косметики космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 4,
                            img: workcase8Other4,
                            imgAlt: 'Услуги создание фирменного стиля для гипоаллергенной косметики космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 5,
                            img: workcase8Other5,
                            imgAlt: 'Услуги создание фирменного стиля для гипоаллергенной косметики космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                        {
                            id: 6,
                            img: workcase8Other6,
                            imgAlt: 'Услуги создание фирменного стиля для гипоаллергенной косметики космотех',
                            imgBig: portfolioDemoImg,
                            imgBigAlt: '#',
                        },
                    ]
                }
            },
          
        ],
        portfolioPopupInfo: {
            popupActive: false,
            selectedPortfolio: false
        }
    }
};

export const sendDesignServiceForm = createAsyncThunk(
    'sendDesignServiceForm',
    async (sendData) => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/design-service/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`,
            },
            body: JSON.stringify({
                name: sendData.clientName,
                phone: sendData.clientPhone,
                service: sendData.service,
                orderType: 'order',
            }),
        });
        const data = await response.json();

        return data;
    }
);

export const sendDesignConsultForm = createAsyncThunk(
    'sendDesignConsultForm',
    async (sendData) => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/design-service/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`,
            },
            body: JSON.stringify({
                name: sendData.clientName,
                phone: sendData.clientPhone,
                comment: sendData.clientComment,
                orderType: 'consult',
            }),
        });
        const data = await response.json();

        return data;
    }
);


const designPageSlice = createSlice({
    name: 'designPage',
    initialState,
    reducers: {
        serviceFormBtnActive(state, action) {
            const { serviceId, hide } = action.payload;

            if (hide) {
                state.mainServices = initialState.mainServices;
                return;
            }

            state.mainServices = state.mainServices.map((serviceItem) => {
                if (serviceItem && serviceItem.id === serviceId) {
                    return {
                        ...serviceItem,
                        orderForm: {
                            ...serviceItem.orderForm,
                            active: true,
                        }
                    }
                }
                return {
                    ...serviceItem,
                    orderForm: {
                        ...serviceItem.orderForm,
                        active: false
                    }
                }
            });
        },
        serviceFormPopupActive(state, action) {
            const { serviceId } = action.payload;
            state.mainServices = state.mainServices.map((serviceItem) => {
                if (serviceItem && serviceItem.id === serviceId && !serviceItem.orderForm.popupFormActive) {
                    return {
                        ...serviceItem,
                        orderForm: {
                            ...serviceItem.orderForm,
                            active: true,
                            popupFormActive: true
                        }
                    }
                }
                return {
                    ...serviceItem,
                    orderForm: {
                        ...serviceItem.orderForm,
                        active: false,
                        popupFormActive:false,
                        fields: initialState.mainServices.find((item) => item.id === serviceItem.id).orderForm.fields,
                    }
                }
            })
        },
        serviceFormHappyState(state) {
            state.orderServiceForm.happyStatePopup = {
                ...state.orderServiceForm.happyStatePopup,
                active: state.orderServiceForm.happyStatePopup.active ? false : true
            }
            state.mainServices = initialState.mainServices;
        },
        portfolioWorkCasePopup(state, action) {
            const { portfolioId } = action.payload;
            if (!portfolioId) {
                state.portfolio.portfolioItems = initialState.portfolio.portfolioItems;
                state.portfolio.portfolioPopupInfo = initialState.portfolio.portfolioPopupInfo;
                return;
            }

            state.portfolio.portfolioItems = state.portfolio.portfolioItems.map((portfolioItem) => {
                if (portfolioItem.id === portfolioId) {
                    return {
                        ...portfolioItem,
                        selected: true,
                    }
                }
                return {
                    ...portfolioItem,
                    selected: false,
                }
            });

            state.portfolio.portfolioPopupInfo =  {
                ...state.portfolio.portfolioPopupInfo,
                popupActive: state.portfolio.portfolioPopupInfo.popupActive ? false : true,
                selectedPortfolio: state.portfolio.portfolioItems.find((item) => item.selected)
            };
        },
        designServiceFormInput(state, action) {
            const { inputId, inputType, inputValue, formId } = action.payload;
            let validValue;
            let inputValid;
            if (inputType !== 'options') {
                state.mainServices = state.mainServices.map((mainService) => {
                    if (formId === mainService.id) {
                        return {
                            ...mainService,
                            orderForm: {
                                ...mainService.orderForm,
                                fields: mainService.orderForm.fields.map((fieldItem) => {
                                    if (inputId === fieldItem.id && inputType === 'name') {
                                        inputValid = validateName(inputValue);
                                        validValue = inputValue;
                                        return {
                                            ...fieldItem,
                                            valid: inputValid,
                                            value: validValue,
                                        };
                                    }
                                    if (inputId === fieldItem.id && inputType === 'phone') {
                                        const phoneNumber = validValue = validatePhone(inputValue);
                                        return {
                                            ...fieldItem,
                                            valid: phoneNumber.length === 18 ? true : false,
                                            value: phoneNumber,
                                        };
                                    }
                                    
                                    return fieldItem;
                                })
                            }
                        }
                    }
                    return mainService;
                });
            }

        },
        designServiceFormClearInput(state, action) {
            const { inputId, inputType, formId } = action.payload;
            state.mainServices = state.mainServices.map((mainService) => {
                if (formId === mainService.id) {
                    return {
                        ...mainService,
                        orderForm: {
                            ...mainService.orderForm,
                            fields: mainService.orderForm.fields.map((fieldItem) => {
                                if (fieldItem.id === inputId && fieldItem.name === inputType) {
                                    return {
                                        ...fieldItem,
                                        value: '',
                                        valid: false
                                    }
                                }
                                return fieldItem;
                            })
                        }
                    }
                }
                return mainService;
            })
        },
        designServicePolicy(state, action) {
            const { formId } = action.payload;
            state.mainServices = state.mainServices.map((serviceItem) => {
                if (serviceItem.id === formId) {
                    return {
                        ...serviceItem,
                        orderForm: {
                            ...serviceItem.orderForm,
                            policyActive: !serviceItem.orderForm.policyActive ? true : false
                        }
                    }
                }
                return serviceItem;
            })
        },
        designServiceValidateForm(state, action) {
            const { formId } = action.payload;
            const targetService = state.mainServices.find((service) => service.id === formId);
            const checkClientName = targetService.orderForm.fields.find(
                (item) => item.name === 'name' && item.value !== '' && item.valid
            );
            const checkClientPhone = targetService.orderForm.fields.find(
                (item) => item.name === 'phone' && item.value !== '' && item.valid
            );
            const checkPolicy = targetService.orderForm.policyActive;

            if (checkClientName && checkClientPhone && checkPolicy) {
                state.orderServiceForm = {
                    ...state.orderServiceForm,
                    clientName: checkClientName,
                    clientPhone: checkClientPhone,
                    allFieldsValid: true,
                    sendBtnActive: true
                }
                return;
            }
            state.orderServiceForm = {
                ...state.orderServiceForm,
                allFieldsValid: false,
                sendBtnActive: false
            };
        },
        designFormInput(state, action) {
            const { inputId, inputType, inputValue } = action.payload;
            let validValue;
            let inputValid;
            state.consultServiceForm.fields = state.consultServiceForm.fields.map((fieldItem) => {
                if (inputId === fieldItem.id && fieldItem.name === inputType) {
                    switch(inputType){
                        case 'name':
                            inputValid = validateName(inputValue);
                            validValue = inputValue;
                            break;
                        case 'phone':
                            validValue = validatePhone(inputValue);
                            inputValid = validValue.length === 18 ? true : false;
                            break;
                        case 'comment':
                            validValue = inputValue;
                            inputValid = inputType && inputValue.length > 3 ? true : false;
                            break;
                        default:
                            break;
                    }
                    return {
                        ...fieldItem,
                        value: validValue,
                        valid: inputValid
                    }
                }
                return fieldItem;
            });
            state.consultServiceForm.clientName = state.consultServiceForm.fields.find((item) => item.name === 'name').value
            state.consultServiceForm.clientPhone = state.consultServiceForm.fields.find((item) => item.name === 'phone').value
            state.consultServiceForm.clientComment = state.consultServiceForm.fields.find((item) => item.name === 'comment').value
        },
        designFormClearInput(state, action) {
            const { inputId } = action.payload;
            state.consultServiceForm.fields = state.consultServiceForm.fields.map((fieldItem) => {
                if (inputId === fieldItem.id) {
                    return {
                        ...fieldItem,
                        value: '',
                        valid: false
                    }
                }
                return fieldItem;
            }) 
        },
        designFormPolicy(state) {
            state.consultServiceForm.policyActive = state.consultServiceForm.policyActive ? false : true;
        },
        designFormValidate(state) {
            const checkClientName = state.consultServiceForm.fields.find((item) => item.name === 'name' && item.valid);
            const checkClientPhone = state.consultServiceForm.fields.find((item) => item.name === 'phone' && item.valid);
            const checkPolicy = state.consultServiceForm.policyActive;
            if (checkClientName && checkClientName.value && checkClientName.valid && 
                checkClientPhone && checkClientPhone.value && checkClientPhone.valid && checkPolicy) {
                state.consultServiceForm.sendBtnActive = true;
                return;
            }
            state.consultServiceForm.sendBtnActive = false;
        },
        designFormHappyState(state) {
            state.consultServiceForm.happyStatePopup = {
                ...state.consultServiceForm.happyStatePopup,
                active: state.consultServiceForm.happyStatePopup.active ? false : true
            }
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(sendDesignServiceForm.pending, (state) => {
            state.orderServiceForm = initialState.orderServiceForm;
        })
        .addCase(sendDesignServiceForm.fulfilled, (state, action) => {
            const { status, message, description } = action.payload;
            if (status === 'ok') {
                state.orderServiceForm.happyStatePopup = {
                    ...state.orderServiceForm.happyStatePopup,
                    active: true,
                    title: message,
                    description: description
                }
                return;
            }
            state.consultServiceForm.happyStatePopup = {
                ...state.consultServiceForm.happyStatePopup,
                active: false,
                title: '',
                description: ''
            }
        })
        .addCase(sendDesignConsultForm.pending, (state) => {
           state.consultServiceForm = initialState.consultServiceForm;
        })
        .addCase(sendDesignConsultForm.fulfilled, (state, action) => {
            const { status, message, description } = action.payload;
            if (status === 'ok') {
                state.consultServiceForm.happyStatePopup = {
                    ...state.consultServiceForm.happyStatePopup,
                    active: true,
                    title: message,
                    description: description
                }
                return;
            }
            state.consultServiceForm.happyStatePopup = {
                ...state.consultServiceForm.happyStatePopup,
                active: false,
                title: '',
                description: ''
            }
            
        })
    }
});

export const {
    serviceFormBtnActive,
    serviceFormPopupActive,
    portfolioWorkCasePopup,
    designServiceFormInput,
    designServiceFormClearInput,
    designServicePolicy,
    designServiceValidateForm,
    designFormInput,
    designFormClearInput,
    designFormPolicy,
    designFormValidate,
    designFormHappyState,
    serviceFormHappyState
} = designPageSlice.actions;
export default designPageSlice.reducer;