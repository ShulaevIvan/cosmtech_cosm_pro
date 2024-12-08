import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

import supplierLogo from '../../img/supplersImages/suppler_demo.png';

const importAllImages = (ctxWebpuck) => {
    const images = {};
    ctxWebpuck.keys().forEach((item, index) => { images[item.replace('./', '').replace(/.\w+$/, '')] = ctxWebpuck(item); });
    return images;
};
const suppliersImages = importAllImages(require.context('../../img/supplersImages', false, /\.(png|jpe?g|svg)$/));
const { 
    protei, plasticKit, vitaplast, calculate, cosmopack, upakovka24, 
    okilsato, pechatnik2, rpkr, mdm, pechatnik, stickyline, alaska
} = suppliersImages;

const initialState = { 
    headerBackgrounds: [
        { 
            page: '/services',
            backgroundImg: backgroundServices, 
            title: 'Услуги',
            description: 'Сотрудничество с нами позволит вам успешно войти на рынок косметической продукции и получить прибыль от продаж.',
            seoDescription: 'Услуги компании ООО Косметические Технологии',
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
            seoDescription: 'О Компании Косметические Технологии, богатый опыт работы',
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
            seoDescription: 'Телефоны, email и мессенджеры для надежной связи с нашими клиентами',
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
            page: '/policy', 
            backgroundImg: '/static/media/about.b6207ae7a6046a88abdf.jpg', 
            title: 'Политика',
            description: 'Политика в отношении обработки персональных данных ООО "Косметические Технологии" ',
            seoDescription: 'Политика в отношении обработки персональных данных ООО "Косметические Технологии"',
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
                    name: 'Политика',
                    url: '/policy',
                    main: false,
                    active: true,
                },
            ]
        },
        { 
            page: '/job', 
            backgroundImg: '/static/media/services_bg.d242bb9d20339ff0fbff.jpg', 
            title: 'Вакансии',
            description: 'Работа в ООО "Косметические Технологии" ',
            seoDescription: 'Вакансии в компании ООО "Косметические Технологии"',
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
                    name: 'Вакансии',
                    url: '/job',
                    main: false,
                    active: true,
                },
            ]
        },
        { 
            page: '/forclients', 
            backgroundImg: '/static/media/services_bg.d242bb9d20339ff0fbff.jpg', 
            title: 'Для клиентов',
            description: 'Полезная информация и дополнительные услуги ',
            seoDescription: 'Полезная информация и дополнительная выгода для клиентов компании "Косметические Технологии"',
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
                    name: 'Клиентам',
                    url: '/forclients',
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
            serviceFormSendBtnActive: false,
            serviceFormHappyState: false,
            serviceFormHappyStateDescription: '',
            selectedService: '',
            fields: [
                {
                    id: 1,
                    title: 'Имя',
                    fieldType: 'text',
                    fieldName: 'name',
                    fieldValue: '',
                    placeholder: 'Ваше имя',
                    err: false
                },
                {
                    id: 2,
                    title: 'Телефон',
                    fieldType: 'tel',
                    fieldName: 'phone',
                    fieldValue: '',
                    placeholder: '8 xxx xxx xx xx',
                    err: false
                },
                {
                    id: 3,
                    title: 'Email',
                    fieldType: 'email',
                    fieldName: 'email',
                    fieldValue: '',
                    placeholder: 'demo@....ru',
                    err: false
                },
                {
                    id: 4,
                    title: 'Тип Услуги',
                    fieldType: 'select',
                    fieldName: 'serviceType',
                    fieldValue: '',
                    options: [
                        { id: 1, name: 'Разработка косметики под СТМ', value: 'Разработка косметики под СТМ', selected: true },
                        { id: 2, name: 'Разработка косметических рецептур', value: 'Разработка косметических рецептур', selected: false },
                        { id: 3, name: 'Химический анализ косметической продукции согласно ГОСТ', value: 'Химический анализ', selected: false },
                        { id: 4, name: 'Консультации по выбору упаковки и сопровождение на этапе сертификации готовой продукции', value: 'Упаковка и соправождение', selected: false },
                    ],
                    err: false
                },
                {
                    id: 5,
                    title: 'Комментарий',
                    fieldType: 'textarea',
                    fieldName: 'comment',
                    fieldValue: '',
                    err: false
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
                        { id: 1, name: 'contract', value: 'Контрактное производство', selected: true},
                        { id: 2, name: 'lab', value: 'Услуги лаборатории', selected: false},
                        { id: 3, name: 'pack', value: 'Упаковка и сопровождение', selected: false},
                        { id: 4, name: 'cert', value: 'Сертификация продукции', selected: false },
                        { id: 5, name: 'trade', value: 'Торговое предложение', selected: false },
                        { id: 6, name: 'cooperation', value: 'Сотрудничество', selected: false },
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
            contactFormFileUpload: [],
            contactFormHappyState: false,
            contactFormHappyStateDescription: '',
            sendBtnActive: false,
            filesLoaded: false,
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
        innerForm: {
            sendBtnActive: false,
            innerConsultFormHappyState: false,
            innerConsultFormHappyStateDescription: '',
            fields: [
                {
                    id: 1,
                    fieldTitle: 'Имя',
                    fieldType: 'text',
                    fieldName: 'name',
                    fieldValue: '',
                    placeholder: 'Ваше Имя',
                    err: false
                },
                {
                    id: 2,
                    fieldTitle: 'Телефон',
                    fieldType: 'phone',
                    fieldName: 'phone',
                    fieldValue: '',
                    placeholder: '8 xxx xxx xx xx',
                    err: false
                },
                {
                    id: 3,
                    fieldTitle: 'Email',
                    fieldType: 'email',
                    fieldName: 'email',
                    fieldValue: '',
                    placeholder: 'demo@......ru',
                    err: false
                },
            ]
        }
    },
    jobPage: {
        vacancyList: [],
        jobPopup: {
            active: false,
            vacancyActive: false,
            vacancyTitle: '',
            policyActive: false,
            sendBtnActive: false,
            checkboxStatus: false,
            haapyStatePopup: {
                active: false,
                data: '',
            },
            sendData: {
                name: '',
                phone: '',
                file: '',
                vacancy: ''
            },
            inputs: [
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
                    name: 'file',
                    type: 'file',
                    value: '',
                    file: {},
                    valid: true
                },
            ]
        }
    },
    forClientsPage: {
        detailsForm: {
            active: false,
            sendBtnActive: false,
            policyActive: false,
            fields: [],
        },
        consultForm: {
            active: false,
            sendBtnActive: false,
            policyActive: false,
            fields: [
                {
                    id: 1,
                    title: 'Имя',
                    name: 'name',
                    value: '',
                    type: 'text',
                    placeholder: 'Ваше имя',
                    valid: true,
                },
                {
                    id: 2,
                    title: 'Телефон',
                    name: 'phone',
                    value: '',
                    type: 'text',
                    placeholder: '8xxxxxxxxxx',
                    valid: true,
                }
            ]
        },
        suppliers: [],
        suppliersType:[],
        suppliersLogo: [
            { id: 1, img: protei, altName: 'Поставщик упаковки Протей'},
            { id: 2, img: plasticKit, altName: 'Поставщик упаковки PlasticKit'},
            { id: 3, img: calculate, altName: 'Поставщик упаковки Калкулэйт'},
            { id: 4, img: vitaplast, altName: 'Поставщик упаковки vitaplast'},
            { id: 5, img: cosmopack, altName: 'Поставщик упаковки cosmopack'},
            { id: 6, img: upakovka24, altName: 'Поставщик упаковки upakovka24'},
            { id: 7, img: okilsato, altName: 'Услуги дизайна okilsato'},
            { id: 8, img: stickyline, altName: 'Услуги дизайна Stickyline'},
            { id: 9, img: rpkr, altName: 'Услуги дизайна RPKGroup'},
            { id: 10, img: pechatnik, altName: 'Услуги дизайна Господин-Печатник'},
            { id: 11, img: mdm, altName: 'Услуги дизайна MDMPrint'},
            { id: 12, img: alaska, altName: 'Услуги дизайна Аляска'}
        ],
        howToWorkSteps: [
            {id: 1, name: 'Отправка заявки', description: 'Отправляете заявку'},
            {id: 2, name: 'Первичная консультация', description: 'Обсуждение производственных возможностей и мощностей'},
            {id: 3, name: 'Заполнение ТЗ (Бриф)', description: 'Заполнение технического задания на основе ваших пожеланий'},
            {id: 4, name: 'Расчет себестоимости', description: 'Производим расчет стоимости на основе техзадания'},
            {id: 5, name: 'Корректировка стоимости', description: 'Корректировка стоимости если требуется'},
            {id: 6, name: 'Подписание договора', description: 'Юридическое оформление сделки'},
            {id: 7, name: 'Создание рецептуры', description: 'создание рецептуры продукта'},
            {id: 8, name: 'Получение заявки на производсвто', description: 'Согласование сроков производства'},
            {id: 9, name: 'Подсчет и закупка необходимого сырья', description: 'Закупка необходимого сырья в срок от 1 до 2 недель'},
            {id: 10, name: 'Производство продукции', description: 'Производство вашей продукции'},
            {id: 11, name: 'Сертификация', description: 'Сертификация продукции через партнеров'},
            {id: 12, name: 'Доставка и отгрузка', description: 'Отгрузка клиенту, доставка по СПБ, транспортной компанией или самовывоз.'},
        ],
        faqQuestions: [
            {
                id: 1, 
                ask: 'Вы можете закупить под заказ дополнительное сырье?', 
                ans: 'Да, можем закупить доп. сырьё по согласованной рецептуре.', 
                active: false
            },
            {
                id: 2, 
                ask: 'Как доставляется готовая продукция?', 
                ans: 'Готовая продукция доставляется транспортными компаниями на ваш выбор.', 
                active: false
            },
            {
                id: 3, 
                ask: 'Есть ли услуги по хранению готовой продукции на вашем складе?', 
                ans: 'Нет', 
                active: false
            },
            {
                id: 4, 
                ask: 'Мне не нужна разработка рецептуры. Могу ли я воспользоваться вашими разработками?', 
                ans: 'Вы можете воспользоваться предложенными нами рецептурами.', 
                active: false
            },
            {
                id: 5, 
                ask: 'Почему у вас платные пробники ?', 
                ans: 'Бесплатные пробники изготавливаются и корректируются до трёх раз, далее изготовление и корректировка платная.', 
                active: false
            },
            {
                id: 6, 
                ask: 'Оказываете ли вы помощь со сбытом продукции и маркетинговым сопровождением?', 
                ans: 'Нет', 
                active: false
            },
            {
                id: 7, 
                ask: 'Оформляете ли Вы Сертификаты?', 
                ans: 'Не оформляем, консультируем и предоставляем контакты по сертификации продукции. ', 
                active: false
            },
            {
                id: 8, 
                ask: 'Могу ли я получить универсальный прайс-лист?', 
                ans: 'Прайс-листа на готовые рецептуры нет. Стоимость рецептуры зависит от сложности её разработки. ', 
                active: false
            },
            {
                id: 9, 
                ask: 'Оказывает ли ваша компания услуги фасовки и этикетировки?', 
                ans: 'Да, оказываем полный производственный цикл.', 
                active: false
            },
            {
                id: 10, 
                ask: 'Какие минимальные сроки производства?', 
                ans: 'Минимальный срок производства от 2-4-х недель, после поставки всех комплектующих и поступления предоплаты.', 
                active: false
            },
            {
                id: 11, 
                ask: 'Когда я смогу получить первые образцы продукта?', 
                ans: 'Первые образцы готовы через 2-4 недели после согласования рецептуры.', 
                active: false
            },
            {
                id: 12, 
                ask: 'У меня есть рецептура, можете ли вы ее доработать?', 
                ans: 'Да, можем доработать вашу рецептуру.', 
                active: false
            },
            {
                id: 13, 
                ask: 'Как я могу отправить вам образцы?', 
                ans: 'Образцы можете отправить курьером.', 
                active: false
            },
            {
                id: 14, 
                ask: 'У меня нет рецептуры. Можете ли вы произвести мой продукт?', 
                ans: 'Да, мы можем произвести ваш продукт и предложить свои рецептуры.', 
                active: false
            },
            {
                id: 15, 
                ask: 'Печатаете ли вы этикетки?', 
                ans: 'Нет, предоставляем контакты типографий с кем уже сотрудничаем.', 
                active: false
            },
            {
                id: 16, 
                ask: 'Что из себя представляют тестовые образцы?', 
                ans: 'Тестовый образец представляет собой, изготовленный образец по вашей рецептуре в упаковке (диспенсер, банка, тубус, флакон) 100 мл.', 
                active: false
            },
            {
                id: 17, 
                ask: 'Когда вы приступите к разработке рецептуры?', 
                ans: 'К разработке рецептуры приступаем сразу после обсуждения всех нюансов.', 
                active: false
            }
        ]
    },
    mousePosition: {
        left: 0,
        top: 0,
    }
};

export const getAvalibleSuppliersType = createAsyncThunk(
    'getSuppliersType',
    async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/suppliers-type/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        return data;
    }
);

export const getAvalibleSuppliers = createAsyncThunk(
    'getSuppliers',
    async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/suppliers/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        return data;
    }
);

export const getAvalibleVacancy = createAsyncThunk(
    'api/vacancy/',
    async (sendData) => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/vacancy/`, {
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

export const sendVacancyRequest = createAsyncThunk(
    'api/vacancy/(post)',
    async (sendData) => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/vacancy/`, {
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
)

export const sendServiceOrderThunk = createAsyncThunk(
    'sendServiceOrder',
    async (sendData) => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/order/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: sendData.name,
                email: sendData.email,
                phone: sendData.phone,
                comment: sendData.comment,
                options: sendData.serviceType,
            })
        });

        const data = await response.json();

        return data;
    }
);

export const sendInnerConsultThunk = createAsyncThunk(
    'sendInnerConsult',
    async (sendData) => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/consultreq/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: sendData.name,
                email: sendData.email,
                phone: sendData.phone,
            })
        });

        const data = await response.json();
        return data;
    }
);

export const sendContactUsOrder = createAsyncThunk(
    'sendContactUs',
    async (sendData) => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contactreq/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: sendData.name,
                email: sendData.email,
                phone: sendData.phone,
                callOption: sendData.callOption,
                city: sendData.city,
                orderType: sendData.orderType,
                comment: sendData.comment,
                file: sendData.file
            }),
        });
        const data = await response.json();
        return data;
    }
);
const innerPageSlice = createSlice({
    name: 'innerPage',
    initialState,
    reducers: {
        changeHeaderBackground(state, action) {
            const { currentPage } = action.payload;
            if (currentPage) {
                state.activeBackground = state.headerBackgrounds.find((background) => background.page === currentPage).backgroundImg;
            }
            
        },
        servicePageOrderPopup(state, action) {
            const { status, left, top, service } = action.payload;
            state.servicesPage.serviceForm.fields = initialState.servicesPage.serviceForm.fields;
            state.servicesPage.serviceForm.serviceFormHappyState = false;
            state.servicesPage.serviceForm.selectedService = '';
            if (service) state.servicesPage.serviceForm.selectedService = service;
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
            const { inputType, optionName, orderName, inputValue } = action.payload;
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
                            if (optionItem.value === inputValue) {
                                return {
                                    ...optionItem,
                                    orderName: orderName,
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
        contactsAddFiles(state, action) {
            const { files } = action.payload;
            state.contacts.contactsForm.contactFormFileUpload = files;
            state.contacts.contactsForm.filesLoaded = false;
        },
        contactsSendBtnActive(state) {
            const checkFieldsErr = state.contacts.contactsForm.fields.filter(
                (formField) => formField.fieldValue !== '' && formField.fieldValid && (formField.fieldName === 'email' | formField.fieldName === 'phone')
            );
            if (checkFieldsErr.length >= 2 && state.contacts.contactsForm.checkboxPolicyStatus) {
                state.contacts.contactsForm.sendBtnActive = true;
                return;
            }
            state.contacts.contactsForm.sendBtnActive = false;
        },
        uploadFile(state, action) {
            const { status } = action.payload;
            state.contacts.contactsForm.filesLoaded = status;
        },
        serviceOrderValidateInput(state, action) {
            const { fieldType, fieldValue } = action.payload;
            state.servicesPage.serviceForm.fields = state.servicesPage.serviceForm.fields.map((formField) => {
                if (formField.fieldName === fieldType && fieldType === 'name') {
                    const notValidName = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]|[0-9]|\s/g.test(fieldValue);
                    return {
                        ...formField,
                        fieldValue: fieldValue,
                        err: notValidName | fieldValue.length < 3 ? true : false
                    }
                }
                else if (formField.fieldName === fieldType && fieldType === 'phone') {
                    const phoneValue = validatePhone(fieldValue);
                    return {
                        ...formField,
                        fieldValue: phoneValue,
                        err: phoneValue.length === 18 ? false : true
                    }
                }
                else if (formField.fieldName === fieldType && fieldType === 'email') {
                    return {
                        ...formField,
                        fieldValue: fieldValue,
                        err: validateMail(fieldValue),
                    }
                }
                else if (formField.fieldName === fieldType && fieldType === 'comment') {
                    return {
                        ...formField,
                        fieldValue: fieldValue,
                        err: false,
                    }
                }
                return formField;
            });
        },
        serviceOrderInputClear(state, action) {
            const { fieldName } = action.payload;
            state.servicesPage.serviceForm.fields = state.servicesPage.serviceForm.fields.map((formField) => {
                if (formField.fieldName === fieldName) {
                    return {
                        ...formField,
                        fieldValue: ''
                    }
                }
                return formField;
            });
            
        },
        serviceOrderSendBtnActive(state) {
            const checkEmpty = state.servicesPage.serviceForm.fields.filter((item) => item.fieldValue === '');
            const checkFieldsErr = state.servicesPage.serviceForm.fields.filter(
                (formField) => formField.err && (formField.fieldName === 'email' | formField.fieldName === 'phone')
            );
            if (checkFieldsErr.length === 0 && checkEmpty.length < 3) {
                state.servicesPage.serviceForm.serviceFormSendBtnActive = true;
                return;
            }
            state.servicesPage.serviceForm.serviceFormSendBtnActive = false;
        },
        validateInnerConsultForm(state, action) {
            const { fieldName, fieldValue } = action.payload;
            state.about.innerForm.fields = state.about.innerForm.fields.map((formField) => {
                if (formField.fieldName === fieldName && fieldName === 'name') {
                    const notValidName = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]|[0-9]|\s/g.test(fieldValue);
                    return {
                        ...formField,
                        fieldValue: fieldValue,
                        err: notValidName | fieldValue.length < 3 ? true : false
                    }
                }
                else if (formField.fieldName === fieldName && fieldName === 'phone') {
                    const phoneValue = validatePhone(fieldValue);
                    return {
                        ...formField,
                        fieldValue: phoneValue,
                        err: phoneValue.length === 18 ? false : true
                    }
                }
                else if (formField.fieldName === fieldName && fieldName === 'email') {
                    return {
                        ...formField,
                        fieldValue: fieldValue,
                        err: validateMail(fieldValue),
                    }
                }
                return formField;
            });
        },
        clearInnerConsultInput(state, action) {
            const { fieldName } = action.payload;
            state.about.innerForm.fields = state.about.innerForm.fields.map((formField) => {
                if (formField.fieldName === fieldName) {
                    return {
                        ...formField,
                        fieldValue: '',
                        err: false
                    }
                }
                return formField;
            });
        },
        innerCounsultSendBtn(state) {
            const checkEmpty = state.about.innerForm.fields.filter((item) => item.fieldValue === '' || item.err).length;
            if (checkEmpty === 0) {
                state.about.innerForm.sendBtnActive = true;
                return;
            }
            state.about.innerForm.sendBtnActive = false;
        },
        contactUsHappyState(state, action) {
            const { status } = action.payload;
            state.contacts.contactsForm.contactFormHappyState = status;
        },
        showMoreVacanyDescription(state, action) {
            const { vacancyId } = action.payload;
            state.jobPage.vacancyList = state.jobPage.vacancyList.map((vacancyItem) => {
                if (vacancyItem.id === vacancyId) {
                    return {
                        ...vacancyItem,
                        btnText: vacancyItem.active ? 'Свернуть' : 'Читать далее',
                        active: vacancyItem.active ? false : true,
                    }
                }
                return vacancyItem;
            });
        },
        showJobPopup(state, action) {
            const { vacancy, status } = action.payload;
            if (!status) {
                state.jobPage.jobPopup = initialState.jobPage.jobPopup;
                return;
            }
            state.jobPage.jobPopup = {
                ...state.jobPage.jobPopup,
                haapyStatePopup: {
                    ...state.jobPage.jobPopup.haapyStatePopup,
                    active: false
                },
                inputs: initialState.jobPage.jobPopup.inputs,
                active: status,
                vacancyTitle: vacancy.name,
                vacancyActive: status ? vacancy : {},
            }
        },
        validateJobForm(state, action) {
            const { inputType, inputValue } = action.payload;
            let inputValidValue = '';
            let inputValid;
            if (inputType === 'phone') {
                inputValidValue = validatePhone(inputValue);
                if (inputValue.length === 18) return;
                inputValid = inputValidValue.length === 18 ? true : false;
            }
            if (inputType === 'name') {
                inputValidValue = inputValue;
                inputValid = validateName(inputValue);
            }
            if (inputType === 'file') {
                console.log(inputValue)
                inputValidValue = inputValue && inputValue.name ? inputValue : {};
                inputValid = inputValue && inputValue.name ? true : false
            }
            
            state.jobPage.jobPopup.inputs = state.jobPage.jobPopup.inputs.map((inputItem) => {
                if (inputItem.name === inputType) {
                    return {
                        ...inputItem,
                        value: inputValidValue,
                        valid: inputValid
                    }
                }
                return inputItem;
            });

            const file = state.jobPage.jobPopup.inputs.find((item) => item.name === 'file');

            state.jobPage.jobPopup.sendData = {
                name: state.jobPage.jobPopup.inputs.find((item) => item.name === 'name').value,
                phone: state.jobPage.jobPopup.inputs.find((item) => item.name === 'phone').value,
                file: file ? file.value : '',
                vacancy: state.jobPage.jobPopup.vacancyTitle,
            }
        },
        jobPolicyActive(state, action) {
            const { status } = action.payload;
            state.jobPage.jobPopup.checkboxStatus = status;
        },
        jobSendBtnActive(state, action) {
            const { status } = action.payload;
            state.jobPage.jobPopup.sendBtnActive = status;
        },
        jobHappyStatePopupShow(state, action) {
            const { status } = action.payload;
            state.jobPage.jobPopup.haapyStatePopup = {
                ...state.jobPage.jobPopup.haapyStatePopup,
                active: status,
            };
        },
        forClientsFaqShowDescription(state, action) {
            const { faqId } = action.payload;
            state.forClientsPage.faqQuestions = state.forClientsPage.faqQuestions.map((faqItem) => {
                if (faqItem.id === faqId) {
                    return {
                        ...faqItem,
                        active: faqItem.active ? false : true
                    }
                }
                return faqItem;
            });
        },
        showForClientsConsultForm(state, action) {
            const { status } = action.payload;
            state.forClientsPage.consultForm = {
                ...initialState.forClientsPage.consultForm,
                active: status
            };
        },
        forClientsConsultPolicyCheckbox(state) {
            state.forClientsPage.consultForm = {
                ...state.forClientsPage.consultForm,
                policyActive: state.forClientsPage.consultForm.policyActive ? false : true
            };
        },
        forClientsValidateConsultForm(state, action) {
            const { inputType, inputValue, inputId } = action.payload;
            let inputValid;
            let validValue;

            if (inputType === 'name') {
                inputValid = validateName(inputValue) ? true : false;
                validValue = inputValue;
            }
            if (inputType === 'phone') {
                const phoneStr = validatePhone(inputValue)
                if (inputValue.length === 18) return;
                inputValid = phoneStr.length === 18 ? true : false;
                validValue = phoneStr;
            } 
            
            state.forClientsPage.consultForm = {
                ...state.forClientsPage.consultForm,
                fields: state.forClientsPage.consultForm.fields.map((fieldItem) => {
                    if (fieldItem.name === inputType && inputId === fieldItem.id) {
                        return (
                            {
                                ...fieldItem,
                                value: validValue,
                                valid: inputValid ? true : false
                            }
                        )
                    }
                    return fieldItem;
                })
            };
        },
        forClientsConsultCheckForm(state) {
            const nameField = state.forClientsPage.consultForm.fields.find((item) => item.name === 'name');
            const phoneField = state.forClientsPage.consultForm.fields.find((item) => item.name === 'phone');
            const checkEmpty = state.forClientsPage.consultForm.fields.filter((item) => item.value !== '');
            const policyCheckbox = state.forClientsPage.consultForm.policyActive;

            state.forClientsPage.consultForm.sendBtnActive = nameField.valid && phoneField.valid && policyCheckbox && checkEmpty.length >= 2 ? true : false;
        },
        forClientsConsultClearInput(state, action) {
            const { inputType, inputId } = action.payload;

            state.forClientsPage.consultForm = {
                ...state.forClientsPage.consultForm,
                fields: state.forClientsPage.consultForm.fields.map((fieldItem) => {
                    if (fieldItem.name === inputType && inputId === fieldItem.id) {
                        return (
                            {
                                ...fieldItem,
                                value: '',
                                valid:false
                            }
                        )
                    }
                    return fieldItem;
                })
            };
        },
        forClientsDetailsForm(state, action) {
            const { status } = action.payload;
            if (!status) {
                state.forClientsPage.detailsForm = {
                    ...initialState.forClientsPage.detailsForm,
                    active : false
                };
                return;
            }
            state.forClientsPage.detailsForm = {
                ...state.forClientsPage.detailsForm,
                active : state.forClientsPage.detailsForm.active ? false : true
            };
        },
    },
    
    extraReducers: (builder) => {
        builder
        .addCase(sendServiceOrderThunk.pending, (state) => {
          state.loadingStatus = 'loading';
          state.error = null;
        })
        .addCase(sendServiceOrderThunk.fulfilled, (state, action) => {
          const { message, description } = action.payload;
          state.loadingStatus = 'ready';
          state.error = null;
          state.servicesPage.serviceForm.serviceFormHappyState = true;
          state.servicesPage.serviceForm.serviceFormHappyStateDescription = description;
          state.servicesPage.serviceForm.fields = initialState.servicesPage.serviceForm.fields;
        })
        .addCase(sendInnerConsultThunk.pending, (state) => {
            state.loadingStatus = 'loading';
            state.error = null;
          })
        .addCase(sendInnerConsultThunk.fulfilled, (state, action) => {
            const { message, description } = action.payload;
            state.loadingStatus = 'ready';
            state.error = null;
            state.about.innerForm.innerConsultFormHappyState = true;
            state.about.innerForm.innerConsultFormHappyStateDescription = description;
            state.about.innerForm.fields = initialState.about.innerForm.fields;
        })
        .addCase(sendContactUsOrder.pending, (state) => {
            state.loadingStatus = 'loading';
            state.error = null;
            state.contacts.contactsForm.fields = initialState.contacts.contactsForm.fields;
            state.contacts.contactsForm.contactFormFileUpload = [];
          })
        .addCase(sendContactUsOrder.fulfilled, (state, action) => {
            const { message, description } = action.payload;
            state.loadingStatus = 'ready';
            state.error = null;
            state.contacts.contactsForm.contactFormHappyState = true;
            state.contacts.contactsForm.contactFormHappyStateDescription = description;
        })
        .addCase(getAvalibleVacancy.fulfilled, (state, action) => {
            const { vacancy } = action.payload;
            state.jobPage.vacancyList = vacancy.map((item) => {
                return {
                    ...item,
                    active: false,
                }
            });
        })
        .addCase(sendVacancyRequest.fulfilled, (state, action) => {
            const { status, data } = action.payload;
            if (status === 'ok' && data) {
                state.jobPage.jobPopup = {
                    ...state.jobPage.jobPopup,
                    active: false,
                    haapyStatePopup: {
                        ...state.jobPage.jobPopup.haapyStatePopup,
                        active: true,
                        data: data
                    }
                }
                return;
            }
            state.jobPage.jobPopup.haapyStatePopup = initialState.jobPage.jobPopup.haapyStatePopup;
        })
        .addCase(getAvalibleSuppliersType.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.forClientsPage.suppliersType = [...data]
        })
        .addCase(getAvalibleSuppliers.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.forClientsPage.suppliers = [...data].sort((a, b) => a.type.localeCompare(b.type));
        })
    }
});


export const {
    changeHeaderBackground,
    servicePageOrderPopup,
    validateContactsInput,
    clearContactsInput,
    selectFieldContactsForm,
    contactsCheckboxPolicy,
    uploadFile,
    contactsAddFiles,
    serviceOrderValidateInput,
    serviceOrderSendBtnActive,
    serviceOrderInputClear,
    validateInnerConsultForm,
    clearInnerConsultInput,
    innerCounsultSendBtn,
    contactsSendBtnActive,
    contactUsHappyState,
    showMoreVacanyDescription,
    showJobPopup,
    validateJobForm,
    jobPolicyActive,
    jobSendBtnActive,
    jobHappyStatePopupShow,
    forClientsFaqShowDescription,
    showForClientsConsultForm,
    forClientsConsultPolicyCheckbox,
    forClientsValidateConsultForm,
    forClientsConsultSendBtn,
    forClientsConsultCheckForm,
    forClientsConsultClearInput,
    forClientsDetailsForm
} = innerPageSlice.actions;
export default innerPageSlice.reducer;