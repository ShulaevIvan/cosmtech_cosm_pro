import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import validateName from '../../functions/validateName';
import validatePhone from '../../functions/validatePhone';
import validateMail from '../../functions/validateMail';
import validateCity from '../../functions/validateCity';
import validateWorkTime from "../../functions/validateWorkTime";
import validateDate from "../../functions/validateDate";
import galeryMoveSlide from '../../functions/galleryMoveSlide';

import promoVideo from '../../video/compress_promo_video.mp4';
import backgroundServices from '../../img/services_bg.jpg';
import backgroundAbout from '../../img/about.jpg';
import backgroundContacts from '../../img/contacts.jpg';
import innerHeaderImg from '../../img/1920x400.png';
import serviceLabImg from '../../img/service_lab.jpg';
import serviceStm from '../../img/service_stm.jpg';
import serviceTestLab from '../../img/service_test_lab.jpg';
import servicePacking from '../../img/service_packing.jpg';
import servicePacking2 from '../../img/packing_service.jpg';

import aboutFactFirst from '../../img/prize_cosm.svg';
import aboutFactSecond from '../../img/production_cosm.svg';
import aboutFactThird from '../../img/orders.svg';
import aboutFactFourth  from '../../img/lab_cosm.svg';

import aboutIconStart from '../../img/about_clock.svg';
import aboutIconReq from '../../img/about_requirements.svg';
import aboutIconMoney from '../../img/about_money.svg';
import aboutIconOk from '../../img/about_ok.svg';


const importAllImages = (ctxWebpuck) => {
    const images = {};
    ctxWebpuck.keys().forEach((item, index) => { images[item.replace('./', '').replace(/.\w+$/, '')] = ctxWebpuck(item); });
    return images;
};

const importAllVideos = (ctxWebpuck) => {
    const videos = {}
    ctxWebpuck.keys().forEach((item, index) => { videos[item.replace('./', '').replace(/.\w+$/, '')] = ctxWebpuck(item); });

    return videos;
};

const suppliersImages = importAllImages(require.context('../../img/supplersImages', false, /\.(png|jpe?g|svg)$/));
const reviewPlaces = importAllImages(require.context('../../img/reviewPlaces', false, /\.(png|jpe?g|svg)$/));
const aboutProductionImages = importAllImages(require.context('../../img/aboutProductionImages', false, /\.(png|jpe?g|jpeg|svg)$/));
const aboutUsGaleryImages = importAllImages(require.context('../../img/imageGalery/aboutUsImages/', false, /\.(png|jpe?g|jpeg|svg)$/));
const decorativeCosmeticsImages = importAllImages(require.context('../../img/decoraticeCosmeticsImages/cosmeticsTypes', false, /\.(png|jpe?g|jpeg|svg)$/));
const decorativeCosmeticsIcons = importAllImages(require.context('../../img/decoraticeCosmeticsImages/howToWorkIcons', false, /\.(png|jpe?g|jpeg|svg)$/));
const customTmGalleryImages = importAllImages(require.context('../../img/customTm/gallery', false, /\.(png|jpe?g|jpeg|svg)$/));
const customTmLogoImages = importAllImages(require.context('../../img/customTm', false, /\.(png|jpe?g|jpeg|svg)$/));
const aboutVideos = importAllVideos(require.context('../../video/', false, /\.(mp4)$/));

const { 
    protei, plasticKit, vitaplast, calculate, cosmopack, upakovka24, 
    okilsato, rpkr, mdm, pechatnik, stickyline, alaska
} = suppliersImages;

const { 
    productionHair, productionBody, productionFace, productionLaying, productionFeet, 
    productionHands, productionBaby, productionMan, productionSuncare, productionSaloon,
    productionAnimal, productionCosmetic
} = aboutProductionImages;

const { gisPlace, zoonPlace, yellPlace, yandexPlace } = reviewPlaces;

const { 
    demo1, demo2, demo3, demo4, demo5, demo6,
    demo8, demo9, demo10, demo11, demo12, demo13, demo14,
    demo15, demo16,
    demo1Full, demo2Full,demo3Full,demo4Full, demo5Full,demo6Full,
    demo8Full, demo9Full, demo10Full, demo11Full, demo12Full, demo13Full, demo14Full,
    demo15Full, demo16Full,
} = aboutUsGaleryImages;

const { 
    mascara, eyeliner, eyebrowGel, сoncealer, blush, highlighter, 
    foundationСream, creamBlush, makeupBase, lipGloss, lipstickForLips, hygenicLipstick,
    eyeShadow } = decorativeCosmeticsImages;

const { 
    deliveryIcon, recipeIcon, certificationIcon, breafIcon, 
    developIcon, orderIcon, sebesIcon, suppliesIcon
} = decorativeCosmeticsIcons;

const { labView, prodView, prodView2, equipView, equipView2, equipView3 } = aboutVideos;
const { logoSmProf } = customTmLogoImages;
const { 
    smMinImg1, smMinImg2, smMinImg3, smMinImg4, smMinImg5,
    smImg1, smImg2, smImg3, smImg4, smImg5,
} = customTmGalleryImages;


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
        {
            page: '/decorative-cosmetics',
            backgroundImg: '/static/media/services_bg.d242bb9d20339ff0fbff.jpg', 
            title: 'Производство декоративной косметики',
            description: 'Услуги по контрактному производству декоративной косметики в Санкт-Петербурге',
            seoDescription: 'Контрактное производство декоративной косметики',
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
                    name: 'производство декоративной косметики',
                    url: '/decorative-cosmetics',
                    main: false,
                    active: true,
                },
            ]
        },
        {
            page: '/articles',
            backgroundImg: '/static/media/services_bg.d242bb9d20339ff0fbff.jpg', 
            title: 'Статьи на тему производства косметики',
            description: 'Статьи на тему производства косметики',
            seoDescription: 'Полезная информация для тех, кто работает в сфере косметики',
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
                    name: 'Статьи',
                    url: '/articles',
                    main: false,
                    active: true,
                },
            ]
        },
        {
            page: '/how-to-create-cosmetic-brand',
            backgroundImg: '/static/media/services_bg.d242bb9d20339ff0fbff.jpg', 
            title: 'Cвой косметический бренд с нуля.',
            description: 'Как создать свой косметический бренд с нуля: пошаговое руководство.',
            seoDescription: 'Как создать свой косметический бренд с нуля: пошаговое руководство.',
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
                    name: 'Как создать свой косметический бренд с нуля',
                    url: '/how-to-create-cosmetic-brand',
                    main: false,
                    active: true,
                },
            ]
        },
        {
            page: '/advantages-of-contract-cosmetics-for-small-businesses',
            backgroundImg: '/static/media/services_bg.d242bb9d20339ff0fbff.jpg', 
            title: 'Производство косметики для малого бизнеса',
            description: 'Преимущества контрактного производства косметики для малого бизнеса.',
            seoDescription: 'Преимущества контрактного производства косметики для малого бизнеса.',
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
                    name: 'Преимущества контрактного производства косметики для малого бизнеса',
                    url: '/advantages-of-contract-cosmetics-for-small-businesses',
                    main: false,
                    active: true,
                },
            ]
        },
        {
            page: '/news',
            backgroundImg: '/static/media/services_bg.d242bb9d20339ff0fbff.jpg', 
            title: 'Новости компании Космотех',
            description: `Последние новости на дату ${new Date().toLocaleDateString('ru')}`,
            seoDescription: `Новости и анонсы компании  ООО Космотех`,
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
                    name: 'Новости',
                    url: '/news',
                    main: false,
                    active: true,
                },
            ]
        },
        {
            page: '/tm',
            backgroundImg: '/static/media/services_bg.d242bb9d20339ff0fbff.jpg', 
            title: 'Собственные разработки компании',
            description: `Косметические бренды выпускаемые нашей копанией`,
            seoDescription: 'Косметические бренды выпускаемые ООО Космотех. Список брендов и краткая презентация.',
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
                    name: 'Новости',
                    url: '/news',
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
                serviceItemHover: {
                    active: false,
                    minPrice: 25000,
                    descriptionTitle: 'Что входит в услугу',
                    descriptionList: [
                        {
                            id: 1,
                            name: 'Разработка концепции продукта',
                        },
                        {
                            id: 2,
                            name: 'Расчет себестоимости',
                        },
                        {
                            id: 3,
                            name: 'Создание рецептуры',
                        },
                        {
                            id: 4,
                            name: 'Подсчет и закупка необходимого сырья',
                        },
                        {
                            id: 5,
                            name: 'Производство продукции',
                        },
                        {
                            id: 6,
                            name: 'Сертификация',
                        },
                        {
                            id: 7,
                            name: 'Доставка и отгрузка',
                        }
                    ],
                    header: 'test header',
                    content: 'test 1',
                },
                description: 'Мы специализируемся на разработке косметики под собственную торговую марку (СТМ). Если у вас есть желание создать собственную линию косметики, мы поможем вам воплотить вашу идею в жизнь.',
                descriptionMini: 'Учитываем все ваши предпочтения и требования, чтобы создать продукт, который будет соответствовать вашей концепции и удовлетворять потребности вашей целевой аудитории.',
            },
            {
                id: 2,
                name: 'Разработка косметических рецептур',
                image: serviceLabImg,
                position: 'right',
                serviceItemHover: {
                    active: false,
                    minPrice: 10000,
                    descriptionTitle: 'Что входит в услугу',
                    descriptionList: [
                        { id: 1, name: 'Разработка и подготовка 3 вариантов состава косметической продукции'},
                        { id: 2, name: 'Поиск необходимых ингредиентов' },
                        { id: 3, name: 'Подготовка документации (рецептуры) с указание процентного содержания каждого ингредиента и контакты поставщиков' },
                        { id: 4, name: 'Подготовка технологической инструкции с описанием производственного процесса' },
                        { id: 5, name: 'Передача образцов и пакета документов заказчику' },
                    ],
                    header: 'test header',
                    content: 'test 1',
                },
                description: 'Наша команда состоит из профессиональных химиков и косметологов, которые имеют богатый опыт в создании инновационных и эффективных косметических продуктов.',
                descriptionMini: 'Также мы можем доработать уже существующий косметический продукт по вашему желанию.',
            },
            {
                id: 3,
                name: 'Контрактная фасовка косметики в различных форматах',
                image: servicePacking2,
                position: 'left',
                serviceItemHover: {
                    active: false,
                    minPrice: 6,
                    descriptionTitle: 'Варианты фасовки',
                    descriptionList: [
                        { id: 1, name: 'Упаковка' },
                        { id: 2, name: 'Ручная сборка' },
                        { id: 3, name: 'Переупаковка' },
                        { id: 4, name: 'Термоусадка - спайка' },
                        { id: 5, name: 'Упаковка сашет (саше, sachet)' },
                        { id: 6, name: 'Стикеровка' },
                        { id: 7, name: 'Этикетирование' },
                        { id: 8, name: 'Датирование' },
                    ],
                    header: 'test header',
                    content: 'test 1',
                },
                description: 'Мы работаем с мелкими партиями и крупными объемами, развивая гибкие условия сотрудничества.',
                descriptionMini: 'Фасуем косметику в банки, флаконы, тубы, бутылки или упаковки-саше.'
            },
            {
                id: 4,
                name: 'Химический анализ косметической продукции согласно ГОСТ',
                image: serviceTestLab,
                position: 'right',
                serviceItemHover: {
                    active: false,
                    minPrice: 0,
                    descriptionTitle: 'Что входит в услугу',
                    descriptionList: [
                        { id: 1, name: 'Приемка образцов косметики'},
                        { id: 2, name: 'Определение соответствия составу продукта '},
                        { id: 3, name: 'Физико-химический анализ'},
                        { id: 4, name: 'Микробиологическое исследование'},
                        { id: 5, name: 'Определение уровня безопасности продукта'},
                        { id: 6, name: 'Заключение'},
                    ],
                    header: 'test header',
                    content: 'test 1',
                },
                description: ' Услуги по химическому анализу косметической продукции в соответствии с ГОСТ. Наша лаборатория оборудована современным оборудованием, позволяющим проводить точные и надежные исследования.',
                descriptionMini: 'Придерживаемся демократичной политики цен и не завышаем стоимость услуг.',
            },
            {
                id: 5,
                name: 'Консультации по выбору упаковки и сопровождение на этапе сертификации готовой продукции',
                image: servicePacking,
                position: 'left',
                serviceItemHover: {
                    active: false,
                    minPrice: 0,
                    descriptionTitle: 'Что входит в услугу',
                    descriptionList: [
                        { id: 1, name: 'Консультационные услуги'},
                    ],
                    header: 'test header',
                    content: 'test 1',
                },
                description: 'Поможем вам выбрать оптимальный вид упаковки от производителей и поставщиков косметической тары, который будет соответствовать вашему бренду.',
                descriptionMini: 'Готовы помочь вам собрать все необходимые документы и подготовить продукцию к сертификации.',
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
                imgAlt: 'Полный цикл контроля качества продукции космотех',
            },
            {
                id: 2,
                name: '1 МЛН',
                description: 'Мощности производства до 1 миллиона единиц продукции в сутки.',
                image: aboutFactSecond,
                imgAlt: 'Производство космотех создает до 1мил. продукции в сутки',
            },
            {
                id: 3,
                name: '100+',
                description: 'Контактов и налаженные связи с лучшими поставщиками сырья и упаковки.',
                image: aboutFactThird,
                imgAlt: 'Налаженные связи с лучшими поставщиками сырья и упаковки',
            },
            {
                id: 4,
                name: '3 > лет',
                description: 'опыта в области разработки и реализации косметической продукции.',
                image: aboutFactFourth,
                imgAlt: 'Космотех работает с 2022 года',
            }
        ],
        videoPrezentation: {
            prezentationVideo: {file: promoVideo, type: 'video/mp4'},
            prezentationFileUrl: '/static/media/cosmtech-prezentation.pdf',
            prezentationIcons: [
                {
                    id: 1,
                    title: 'Легкий старт',
                    img: aboutIconStart,
                    imgAlt: 'Легкий старт контрактное производство космотех'
                },
                {
                    id: 2,
                    title: 'Гибкие условия',
                    img: aboutIconReq,
                    imgAlt: 'Гибкие условия сотрудничества космотех'
                },
                {
                    id: 3,
                    title: 'Высокая маржинальность',
                    img: aboutIconMoney,
                    imgAlt: 'Высокая маржинальность контрактное производство космотех'
                },
                {
                    id: 4,
                    title: 'Стабильное качество',
                    img: aboutIconOk,
                    imgAlt: 'Стабильное качество производства космотех'
                }
            ]
        },
        aboutProduction: {
            popupActive: false,
            productionForm: {
                policyActive: false,
                sendBtnActive: false,
                happyState: {
                    active: false,
                    description: ''
                },
                fields: [
                    {
                        id: 1,
                        title: 'Имя',
                        type: 'text',
                        fieldType: 'name',
                        value: '',
                        placeholder: 'Ваше имя',
                        fieldValid: true
                    },
                    {
                        id: 2,
                        title: 'Телефон',
                        type: 'text',
                        fieldType: 'phone',
                        value: '',
                        placeholder: '8xxxxxxxxxx',
                        fieldValid: true
                    },
                    {
                        id: 4,
                        title: 'Комментарий',
                        fieldType: 'comment',
                        value: '',
                        placeholder: 'Уточнение или вопрос...',
                        fieldValid: true
                    },
                ]
            },
            productionTypes: [
                { id: 1, name: 'Средства по уходу за лицом', img: productionFace, altImg: 'Средства по уходу за лицом на заказ от Космотех в спб'},
                { id: 2, name: 'Средства для укладки волос', img: productionLaying, altImg: 'Средства для укладки волос на заказ от производства Космотех в спб'},
                { id: 3, name: 'Средства по уходу за волосами', img: productionHair, altImg: 'Средства по уходу за волосами на заказ от производства Космотех в спб'},
                { id: 4, name: 'Средства по уходу за телом', img: productionBody, altImg: 'Средства по уходу за телом на заказ от производства Космотех в спб'},
                { id: 5, name: 'Средства по уходу за руками', img: productionHands, altImg: 'Средства по уходу за руками на заказ от производства Космотех в спб'},
                { id: 6, name: 'Средства по уходу за ногами', img: productionFeet, altImg: 'Средства по уходу за ногами на заказ от производства Космотех в спб'},
                { id: 7, name: 'Косметика для детей', img: productionBaby, altImg: 'Косметика для детей на заказ от производства Космотех в спб'},
                { id: 8, name: 'Солнцезащитная косметика', img: productionSuncare, altImg: 'Солнцезащитная косметика на заказ от производства Космотех в спб'},
                { id: 9, name: 'Косметика для мужчин', img: productionMan, altImg: 'Косметика для мужчин на заказ от производства Космотех в спб'},
                { id: 10, name: 'Косметика для животных', img: productionAnimal, altImg: 'Косметика для животных на заказ от производства Космотех в спб'},
                { id: 11, name: 'Профессиональная косметика', img: productionCosmetic, altImg: 'Профессиональная косметика на заказ от производства Космотех в спб'},
                { id: 12, name: 'Косметика для салонов красоты', img: productionSaloon, altImg: 'Косметика для салонов красоты на заказ от производства Космотех в спб'},
            ],
        },
        aboutGallery: {
            imagePopup: {
                active: false,
                image: '',
            },
            images: [
                {
                    id: 1, 
                    img: demo1, 
                    imgAlt: 'Фото с производственной площадки ООО космотех', 
                    active: false, 
                    imgFull: demo1Full, 
                    imgDescription: 'Фото с производственной площадки космотех'
                },
                {
                    id: 2, 
                    img: demo2, 
                    imgAlt: 'Фото с производственной площадки ООО космоте', 
                    active: false, 
                    imgFull: demo2Full, 
                    imgDescription: 'Фото с производственной площадки космотех'
                },
                {
                    id: 3, 
                    img: demo3, 
                    imgAlt: 'Фото с производственной площадки ООО космотех', 
                    active: false, imgFull: demo3Full, 
                    imgDescription: 'Фото с производственной площадки космотех'
                },
                {
                    id: 4, 
                    img: demo4, 
                    imgAlt: 'Фото с производственной площадки ООО космотех', 
                    active: false, 
                    imgFull: demo4Full, 
                    imgDescription: 'Фото с производственной площадки космотех'
                },
                {
                    id: 5, 
                    img: demo5, 
                    imgAlt: 'Фото с производственной площадки ООО космотех', 
                    active: false, 
                    imgFull: demo5Full, 
                    imgDescription: 'Фото с производственной площадки космотех'
                },
                {
                    id: 6, 
                    img: demo6, 
                    imgAlt: 'Фото с производственной площадки ООО космотех', 
                    active: false,
                    imgFull: demo6Full, 
                    imgDescription: 'Фото с производственной площадки космотех'
                },
                {
                    id: 8, 
                    img: demo8, 
                    imgAlt: 'Фото с производственной площадки ООО космотех', 
                    active: false, 
                    imgFull: demo8Full, 
                    imgDescription: 'Фото с производственной площадки космотех'
                },
                {
                    id: 9, 
                    img: demo9, 
                    imgAlt: 'Фото с производственной площадки ООО космотех', 
                    active: false, 
                    imgFull: demo9Full, 
                    imgDescription: 'Фото с производственной площадки космотех'
                },
                {
                    id: 10, 
                    img: demo10, 
                    imgAlt: 'Фото с производственной площадки ООО космотех', 
                    active: false, 
                    imgFull: demo10Full, 
                    imgDescription: 'Фото с производственной площадки космотех'
                },
                {
                    id: 11, 
                    img: demo11, 
                    imgAlt: 'Фото с производственной площадки ООО космотех', 
                    active: false, 
                    imgFull: demo11Full, 
                    imgDescription: 'Фото с производственной площадки космотех'
                },
                {
                    id: 12, 
                    img: demo12, 
                    imgAlt: 'Фото с производственной площадки ООО космотех', 
                    active: false, 
                    imgFull: demo12Full, 
                    imgDescription: 'Фото с производственной площадки космотех'
                },
                {
                    id: 13, 
                    img: demo13, 
                    imgAlt: 'Фото с производственной площадки ООО космотех',
                    active: false, 
                    imgFull: demo13Full, 
                    imgDescription: 'Фото с производственной площадки космотех'
                },
                {
                    id: 14, 
                    img: demo14, 
                    imgAlt: 'Фото с производственной площадки ООО космотех', 
                    active: false, 
                    imgFull: demo14Full, 
                    imgDescription: 'Фото с производственной площадки космотех'
                },
                {
                    id: 15, 
                    img: demo15, 
                    imgAlt: 'Фото с производственной площадки ООО космотех', 
                    active: false, 
                    imgFull: demo15Full, 
                    imgDescription: 'Фото с производственной площадки космотех'
                },
                {
                    id: 16, 
                    img: demo16, 
                    imgAlt: 'Фото с производственной площадки ООО космотех', 
                    active: false, 
                    imgFull: demo16Full, 
                    imgDescription: 'Фото с производственной площадки космотех'
                },
            ].sort((() => Math.random() - 0.5)),
        },
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
                    placeholder: '8xxxxxxxxxx',
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
        },
        aboutTabs: [
            {
                id: 1,
                name: 'coop',
                title: 'Сотрудничество',
                tabHeader: 'Для поставщиков',
                coopEmails: [
                    {id: 1, name: 'Предложения по сырью', email: 'supplier@cosmtech.ru'},
                    {id: 2, name: 'Предложения по упаковке', email: 'supplier@cosmtech.ru'},
                    {id: 3, name: 'Предложения по логистике', email: 'supplier@cosmtech.ru'},
                    {id: 4, name: 'Предложения по рекламе', email: 'media@cosmtech.ru'}
                ],
                active: false
            },
            {
                id: 2,
                name: 'reviews',
                title: 'Написать отзыв',
                tabHeader: 'Оставить отзыв о компании',
                reviewPlaces: [
                    {
                        id: 1, 
                        name: 'yandex', 
                        url: 'https://yandex.ru/maps/org/kosmeticheskiye_tekhnologii/238223588879/reviews/?ll=30.374016%2C59.895998&z=17', 
                        img: yandexPlace, 
                        imgAlt: 'оставить отзыв о космотех на яндекс картах'
                    },
                    {
                        id: 2, 
                        name: '2gis', 
                        url: 'https://2gis.ru/spb/search/%D0%9A%D0%BE%D1%81%D0%BC%D0%B5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8%20%D1%81%D0%B0%D0%BB%D0%BE%D0%B2%D0%B0/firm/70000001090431923/30.373679%2C59.896468/tab/reviews', 
                        img: gisPlace, 
                        imgAlt: 'оставить отзыв о космотех на 2gis'
                    },
                    {
                        id: 3, 
                        name: 'zoon', 
                        url: 'https://zoon.ru/spb/business/proizvodstvennaya_kompaniya_kosmeticheskie_tehnologii/', 
                        img: zoonPlace, 
                        imgAlt: 'оставить отзыв о космотех zoon'
                    },
                    {
                        id: 4, 
                        name: 'yell', 
                        url: 'https://www.yell.ru/spb/com/kosmeticheskie-texnologii_14480385/', 
                        img: yellPlace, 
                        imgAlt: 'оставить отзыв о космотех yell'},
                ],
                active: true
            },
            {
                id: 3,
                name: 'req',
                title: 'Реквизиты',
                tabHeader: 'Реквизиты Космотех',
                reqTableRows: [
                    { id: 1, title: 'Полное наименование', value: 'Общество с ограниченной ответственностью «КОСМЕТИЧЕСКИЕ ТЕХНОЛОГИИ»' },
                    { id: 2, title: 'Сокращенное наименование', value: 'ООО «КОСМОТЕХ»' },
                    { id: 3, title: 'ИНН', value: '7816737360' },
                    { id: 4, title: 'КПП', value: '781601001' },
                    { id: 5, title: 'ОГРН', value: '1227800166880' },
                    { id: 6, title: 'ОКПО', value: '78441840' },
                    { id: 7, title: 'Дата регистрации', value: '27.12.2022' },
                    { id: 8, title: 'Юридический Адрес:', value: '192102, г. Санкт-Петербург, вн. тер. г. Муниципальный округ Волковское, ул. Салова д.27, литера АБ, помещ. 24Н-4, офис 1' },
                    { id: 9, title: 'Фактический адрес:', value: '192102, г. Санкт-Петербург, ул. Салова, 27 АБ' },
                    { id: 10, title: 'Основной ОКВЭД', value: '20.42 – Производство парфюмерных и косметических средств' },
                    { id: 11, title: 'БИК', value: '044030653' },
                    { id: 12, title: 'Расчетный счет', value: '40702810355000000126' },
                    { id: 13, title: 'Корреспондентский счет', value: '30101810500000000653' },
                    { id: 14, title: 'Генеральный Директор', value: 'Кушникова Елена Александровна' },
                ],
                active: false
            },
            {
                id: 4,
                name: 'address',
                title: 'Режим работы и адрес',
                tabHeader: 'Контактная информация',
                active: false
            }
        ],
        aboutVideoProduction: {
            menuCategories: [
                {
                    id: 1,
                    name: 'production',
                    title: 'Производство',
                    content: {
                        title: 'Видео с производства',
                        textParagraphs: [
                            'Процесс фасовки и оклейки продукции – это сложный, многоэтапный процесс, требующий внимания к деталям и четкого соблюдения инструкций. ',
                            'От его правильной организации зависит не только внешний вид товара, но и его сохранность, а также соответствие требованиям законодательства.'
                        ],
                    },
                    videos: [
                        {
                            id: 1,
                            video: prodView,
                            type: 'video/mp4',
                            selected: true,
                        },
                        {
                            id: 2,
                            video: prodView2,
                            type: 'video/mp4',
                            selected: false,
                        },
                    ],
                    currentSelectedVideo: 0,
                    selected: true
                },
                {
                    id: 2,
                    name: 'lab',
                    title: 'Лаборатория',
                    content: {
                        title: 'Лаборатория',
                        textParagraphs: [
                            'Косметическая лаборатория – это не просто место, где смешиваются ингредиенты. Это сердце инноваций, требующее специализированного пространства, обеспечивающего как безопасность, так и эффективность работы.',
                        ],
                    },
                    videos: [
                        {
                            id: 1,
                            video: labView,
                            type: 'video/mp4',
                            selected: true,
                        }
                    ],
                    currentSelectedVideo: 0,
                    selected: false
                },
                {
                    id: 3,
                    name: 'eqip',
                    title: 'Оборудование',
                    content: {
                        title: 'Варочное оборудование',
                        textParagraphs: [
                            'Процесс варки косметической продукции – это сложное и многоступенчатое действо, требующее строгого соблюдения рецептур и технологических режимов.',
                            'От правильности проведения этого этапа зависит стабильность, эффективность и безопасность конечного продукта.'
                        ],
                    },
                    videos: [
                        {
                            id: 1,
                            video: equipView,
                            type: 'video/mp4',
                            selected: true,
                        },
                        {
                            id: 2,
                            video: equipView2,
                            type: 'video/mp4',
                            selected: false,
                        },
                        {
                            id: 3,
                            video: equipView3,
                            type: 'video/mp4',
                            selected: false,
                        }
                    ],
                    currentSelectedVideo: 0,
                    selected: false
                },
            ]
        }
    },
    productionExcuirsion: {
        popup: {
            popupActive: false,
            sendBtnActive: false,
            policyActive: false,
            happyState: {
                active: false,
                title: '',
                description: '',
            },
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
                },
                {
                    id: 3,
                    title: 'Дата визита',
                    name: 'date',
                    value: '',
                    type: 'date',
                    placeholder: 'мясяц/день/год',
                    minDate: new Date().toJSON().slice(0,10).replace(/-/g,'-'),
                    valid: true,
                },
                {
                    id: 4,
                    title: 'Время визита',
                    name: 'time',
                    value: '',
                    type: 'text',
                    min: '10:00',
                    max: '18:00',
                    placeholder: '14:00',
                    valid: true,
                }
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
                    title: 'Email',
                    name: 'email',
                    value: '',
                    type: 'text',
                    placeholder: 'demo@....ru',
                    valid: true,
                },
                {
                    id: 3,
                    title: 'Описание',
                    name: 'comment',
                    value: '',
                    type: 'textarea',
                    placeholder: 'Ваш вопрос....',
                    valid: true,
                }
            ],
            happyState: {
                active: false,
                description: ''
            }
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
            ],
            happyState: {
                active: false,
                description: ''
            }
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
            { id: 1, ask: 'Вы можете закупить под заказ дополнительное сырье?', ans: 'Да, можем закупить доп. сырьё по согласованной рецептуре.', active: false },
            { id: 2, ask: 'Как доставляется готовая продукция?', ans: 'Готовая продукция доставляется транспортными компаниями на ваш выбор.',  active: false },
            { id: 3, 
                ask: 'Есть ли услуги по хранению готовой продукции на вашем складе?', 
                ans: 'Нет, продукцию необходимо вывезти не позднее 7 дней с момента получения уведомления о готовности.', 
                active: false 
            },
            {
                id: 4, 
                ask: 'Мне не нужна разработка рецептуры. Могу ли я воспользоваться вашими разработками?', 
                ans: 'Вы можете воспользоваться предложенными нами рецептурами.', active: false 
            },
            { id: 5, 
              ask: 'Почему у вас платные пробники ?', 
              ans: 'Бесплатные пробники изготавливаются и корректируются до трёх раз, далее изготовление и корректировка платная.', 
              active: false
            },
            { id: 6, ask: 'Оказываете ли вы помощь со сбытом продукции и маркетинговым сопровождением?', ans: 'Нет', active: false },
            { id: 7, ask: 'Оформляете ли Вы Сертификаты?', ans: 'Не оформляем, консультируем и предоставляем контакты по сертификации продукции. ', active: false },
            {
                id: 8, 
                ask: 'Могу ли я получить универсальный прайс-лист?', 
                ans: 'Прайс-листа на готовые рецептуры нет. Стоимость рецептуры зависит от сложности её разработки. ', 
                active: false
            },
            { 
                id: 9, 
                ask: 'Оказывает ли ваша компания услуги фасовки и этикетировки?', 
                ans: 'Да, полный производственный цикл от разработки продукта до фасовки.', active: false},
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
            { id: 12, ask: 'У меня есть рецептура, можете ли вы ее доработать?', ans: 'Да, можем доработать вашу рецептуру.', active: false },
            { id: 13, ask: 'Как я могу отправить вам образцы?', ans: 'Образцы можете отправить курьером.', active: false },
            {
                id: 14, 
                ask: 'У меня нет рецептуры. Можете ли вы произвести мой продукт?', 
                ans: 'Да, мы можем произвести ваш продукт и предложить свои рецептуры.', 
                active: false
            },
            { id: 15, ask: 'Печатаете ли вы этикетки?', ans: 'Нет, предоставляем контакты типографий с кем уже сотрудничаем.', active: false },
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
    decorativeCosmeticsPage: {
        cosmeticTypes: [
            {id: 1, name: 'Гелевые тени', img: eyeShadow, imgAlt: 'Контрактное производство гелевых теней пример'},
            {id: 2, name: 'Помада гигиеническая', img: hygenicLipstick, imgAlt: 'Контрактное производство помады гигиенической пример'},
            {id: 3, name: 'Помада декоративная', img: lipstickForLips, imgAlt: 'Контрактное производство помады декоративной пример'},
            {id: 4, name: 'Блеск для губ', img: lipGloss, imgAlt: 'Контрактное производство блеск для губ пример'},
            {id: 5, name: 'Основа под макияж', img: makeupBase, imgAlt: 'Контрактное производство основы под макияж пример'},
            {id: 6, name: 'Тональный крем', img: foundationСream, imgAlt: 'Контрактное производство тонального крема пример'},
            {id: 7, name: 'Гелевый хайлайтер', img: highlighter, imgAlt: 'Контрактное производство гелевых теней пример'},
            {id: 8, name: 'Кремовые румяна', img: blush, imgAlt: 'Контрактное производство кремовых румян пример'},
            {id: 9, name: 'Тушь для ресниц', img: mascara, imgAlt: 'Контрактное производство nушь для ресниц пример'},
            {id: 10, name: 'Консилер', img: сoncealer, imgAlt: 'Контрактное производство консилера пример'},
            {id: 11, name: 'Масло для ногтей', img: creamBlush, imgAlt: 'Контрактное производство масла для ногтей пример'},
            {id: 12, name: 'Гель для бровей', img: eyebrowGel, imgAlt: 'Контрактное производство гелей для бровей пример'},
            {id: 13, name: 'Жидкая подводка для глаз', img: eyeliner, imgAlt: 'Контрактное производство Жидкая подводки для глаз пример'}
        ],
        howToWorkIcons: [
            {id: 1, name: 'Отправляете заявку', img: orderIcon, imgAlt: 'testAlt'},
            {id: 2, name: 'Получение консультации и заполнение брифа', img: breafIcon, imgAlt: 'testAlt'},
            {id: 3, name: 'Расчет себестоимости', img: sebesIcon, imgAlt: 'testAlt'},
            {id: 4, name: 'Создание рецептуры', img: recipeIcon, imgAlt: 'testAlt'},
            {id: 5, name: 'Доставка и отгрузка', img: deliveryIcon, imgAlt: 'testAlt'},
            {id: 6, name: 'Сертификация', img: certificationIcon, imgAlt: 'testAlt'},
            {id: 7, name: 'Разработка продукта', img: developIcon, imgAlt: 'testAlt'},
            {id: 8, name: 'Закупка необходимого сырья', img: suppliesIcon, imgAlt: 'testAlt'}
        ],
        faqQuestions: [
            { id: 1, ask: 'Вы можете закупить под заказ дополнительное сырье?', ans: 'Да, можем закупить доп. сырьё по согласованной рецептуре.', active: false },
            { id: 2, ask: 'Как доставляется готовая продукция?', ans: 'Готовая продукция доставляется транспортными компаниями на ваш выбор.',  active: false },
            { id: 3, ask: 'Оказываете ли вы помощь со сбытом продукции и маркетинговым сопровождением?', ans: 'Нет', active: false },
            {
                id: 4, 
                ask: 'Какие минимальные сроки производства?', 
                ans: 'Минимальный срок производства от 2-4-х недель, после поставки всех комплектующих и поступления предоплаты.', 
                active: false
            },
            {
                id: 5, 
                ask: 'Когда я смогу получить первые образцы продукта?', 
                ans: 'Первые образцы готовы через 2-4 недели после согласования рецептуры.', 
                active: false
            },
            { id: 6, 
                ask: 'Есть ли услуги по хранению готовой продукции на вашем складе?', 
                ans: 'Нет, продукцию необходимо вывезти не позднее 7 дней с момента получения уведомления о готовности.', 
                active: false 
            },
        ],
        consultPopup: {
            active: false,
            sendBtnActive: false,
            policyActive: false,
            happyState: {
                active: false,
                title: '',
                description: ''
            },
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
                    type: 'text',
                    placeholder: '8xxxxxxxxxx',
                    value: '',
                    valid: true
                },
                {
                    id: 3,
                    title: 'Email',
                    name: 'email',
                    value: '',
                    type: 'text',
                    placeholder: 'demo@....ru',
                    valid: true,
                },
            ],
            happyState: {
                active: false,
                description: ''
            }
        },
        orderPopup: {
            active: false,
            sendBtnActive: false,
            policyActive: false,
            happyState: {
                active: false,
                title: '',
                description: '',
                orderNumber: ''
            },
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
                    type: 'text',
                    placeholder: '8xxxxxxxxxx',
                    value: '',
                    valid: true
                },
                {
                    id: 3,
                    title: 'Email',
                    name: 'email',
                    value: '',
                    type: 'text',
                    placeholder: 'demo@....ru',
                    valid: true,
                },
                {
                    id: 4,
                    title: 'Прикрепить тз',
                    name: 'file',
                    type: 'file',
                    fileData: {},
                    displayName: '',
                    value: '',
                    valid: true
                },
                {
                    id: 5,
                    title: 'Комментарий',
                    name: 'comment',
                    type: 'textarea',
                    placeholder: 'Комментарий....',
                    value: '',
                    valid: true
                },
            ],
        },
        questionForm: {
            sendBtnActive: false,
            policyActive: false,
            happyState: {
                active: false,
                title: '',
                description: ''
            },
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
                    type: 'text',
                    placeholder: '8xxxxxxxxxx',
                    value: '',
                    valid: true
                },
                {
                    id: 3,
                    title: 'Email',
                    name: 'email',
                    value: '',
                    type: 'text',
                    placeholder: 'demo@....ru',
                    valid: true,
                },
            ]
        }
    },
    customTmPage: {
        tmItems: [
            {
                id: 1,
                name: 'sm',
                title: 'SM-Professional',
                logo: {
                    img: logoSmProf,
                    altImg: 'SM-Professional лаборатория космецевтических инноваций',
                },
                prezentationFileUrl: '',
                siteUrl: 'https://smprof.ru',
                siteName: 'smprof.ru',
                paragraphs: ['test', 'test2'],
                gallery: [
                    {
                        id: 1,
                        minImg: smMinImg1,
                        altMinImg: '',
                        fullImg: smImg1,
                        altFullImg: 'Производитель термоактивное массажное масло со скваланом SM prof',
                        shortDescr: 'Термоактивное массажное масло со скваланом, красным перцем чили, натуральными маслами и экстрактами, предназначено для разогревающих, моделирующих процедур.',
                        popupActive: false
                    },
                    {
                        id: 2,
                        minImg: smMinImg2,
                        altMinImg: '',
                        fullImg: smImg2,
                        altFullImg: 'Производитель Обертывание «СкинКонтур SM prof',
                        shortDescr: 'Обертывание «СкинКонтур» предназначено для тонизирующего и антиоксидантного ухода за кожей. Содержит концентрированный, активный комплекс Provislim, который предотвращает отложение липидов в обрабатываемых зонах, оказывает стимулирующее действие.',
                        popupActive: false
                    },
                    {
                        id: 3,
                        minImg: smMinImg3,
                        altMinImg: '',
                        fullImg: smImg3,
                        altFullImg: 'Производитель пилингов smprof',
                        shortDescr: 'Линейка профессиональных пилингов SM prof.',
                        popupActive: false
                    },
                    {
                        id: 4,
                        minImg: smMinImg4,
                        altMinImg: '',
                        fullImg: smImg4,
                        altFullImg: 'Производитель косметики для тела SM prof',
                        shortDescr: 'Линейка косметики для тела SM prof.',
                        popupActive: false
                    },
                    {
                        id: 5,
                        minImg: smMinImg5,
                        altMinImg: '',
                        fullImg: smImg5,
                        altFullImg: 'Производитель косметики для лица SM prof',
                        shortDescr: 'Линейка професcиональной косметики для лица smprof.',
                        popupActive: false
                    },
                ],
                video: {
                    file: promoVideo,
                    format: 'video/mp4'
                },
                showMoreActive: false
            }
        ]
    },
    mousePosition: {
        left: 0,
        top: 0,
    }
};

export const sendDecorativeOrderRequest = createAsyncThunk(
    'sendDecorativeOrder',
    async (sendData) => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/decorative-cosmetic/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
        });

        const data = response.json();

        return data;
    }
);

export const sendDecorativeQuestionRequest = createAsyncThunk(
    'sendDecorativeQuestion',
    async (sendData) => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/decorative-cosmetic/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
        });

        const data = await response.json();
        
        return data;
    }
);

export const sendDecorativeConsultRequest = createAsyncThunk(
    'sendDecorativeConsult',
    async (sendData) => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/decorative-cosmetic/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
        });

        const data = await response.json();
        
        return data;
    }
);

export const sendExcursionPorductionRequest = createAsyncThunk(
    'sendExcursionProductionReq',
    async (sendData) => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/clients/excursion/`, {
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

export const sendAboutProductionConsultForm = createAsyncThunk(
    'sendAboutProdConsult',
    async (sendData) => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/consultreq/`, {
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

export const sendForClientsConsultForm = createAsyncThunk(
    'sendForClientsConsult',
    async (sendData) => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/clients/request/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
        });

        const data = await response.json();

        return data;
    }
);

export const sendForClientsDetailsForm = createAsyncThunk(
    'sendForClientsDetails',
    async (sendData) => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/clients/request/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token: ${process.env.REACT_APP_API_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
        });

        const data = await response.json();

        return data;
    }
);

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
        showServiceHover(state, action) {
            const { serviceId } = action.payload;
            state.servicesPage.servicesItems = state.servicesPage.servicesItems.map((serviceItem) => {
                if (serviceItem.id === serviceId) {
                    return {
                        ...serviceItem,
                        serviceItemHover: {
                            ...serviceItem.serviceItemHover,
                            active: serviceItem.serviceItemHover.active ? false : true
                        }
                    }
                }
                return serviceItem;
            });
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
            else if (inputType === 'phone') {
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
        forClientsDetailsPolicy(state) {
            state.forClientsPage.detailsForm = {
                ...state.forClientsPage.detailsForm,
                policyActive: state.forClientsPage.detailsForm.policyActive ? false : true
            };
        },
        forClientsDetailsValidateForm(state, action) {
            const { inputId, inputName, inputValue } = action.payload;
            let validValue;
            let inputValid;

            if (inputName === 'name') {
                inputValid = validateName(inputValue) ? true : false;
                validValue = inputValue;
            }
            else if (inputName === 'email') {
                inputValid = validateMail(inputValue) ? false : true;
                validValue = inputValue;
            }
            else if (inputName === 'comment') {
                inputValid = inputValue.trim() !== '' &&  inputValue.length >= 1  ? true : false;
                validValue = inputValue;
            }

            state.forClientsPage.detailsForm.fields = state.forClientsPage.detailsForm.fields.map((fieldItem) => {
                if (fieldItem.id === inputId && fieldItem.name === inputName) {
                    return {
                        ...fieldItem,
                        value: validValue,
                        valid: inputValid
                    }
                }
                return fieldItem;
            });
        },
        forClientsDetailsCheckForm(state) {
            const nameField = state.forClientsPage.detailsForm.fields.find((item) => item.name === 'name');
            const emailField = state.forClientsPage.detailsForm.fields.find((item) => item.name === 'email');
            const checkEmpty = state.forClientsPage.detailsForm.fields.filter((item) => item.value !== '');
            const policyCheckbox = state.forClientsPage.detailsForm.policyActive;

            state.forClientsPage.detailsForm.sendBtnActive = nameField.valid && emailField.valid && policyCheckbox && checkEmpty.length >= 3 ? true : false;
        },
        forClientsHappyStatePopup(state, action) {
            const { status, happyStateType } = action.payload;

            if (happyStateType === 'suplconsult') {
                state.forClientsPage.consultForm.happyState = {
                    ...initialState.forClientsPage.consultForm.happyState,
                    active: status,
                }
            }
            else if (happyStateType === 'prodquestion') {
                state.forClientsPage.detailsForm.happyState = {
                    ...initialState.forClientsPage.detailsForm.happyState,
                    active: status,
                }
            }
        },
        abouProductionPopup(state) {
            if (!state.about.aboutProduction.popupActive) {
                state.about.aboutProduction.popupActive = true;
                return;
            }
            state.about.aboutProduction.popupActive = false;
            state.about.aboutProduction.productionForm = initialState.about.aboutProduction.productionForm;

        },
        validateAboutProductionForm(state, action) {
            const { inputType, inputValue } = action.payload;
            let validValue;
            let inputValid;
            if ((inputType === 'phone' && inputValue.length === 18) || inputValue.trim() === '') return;
            if (inputType === 'phone') {
                inputValid = false;
                validValue = validatePhone(inputValue);
                if (validValue && validValue.length === 18) {
                    inputValid = true;
                }
                
            }
            else if (inputType === 'name') {
                inputValid = validateName(inputValue);
                validValue = inputValue;
            }
            else if (inputType === 'comment') {
                inputValid = inputValue.trim().length < 5 ? false : true
                validValue = inputValue;
            }

            state.about.aboutProduction.productionForm.fields = state.about.aboutProduction.productionForm.fields.map((fieldItem) => {
                if (inputType === fieldItem.fieldType) {
                    return {
                        ...fieldItem,
                        value: validValue,
                        fieldValid: inputValid
                    }
                }
                return fieldItem;
            });
        },
        aboutProductionPolicy(state) {
            state.about.aboutProduction.productionForm = {
                ...state.about.aboutProduction.productionForm,
                policyActive: state.about.aboutProduction.productionForm.policyActive ? false : true
            }
        },
        aboutProductionClearInput(state, action) {
            const { inputType } = action.payload;

            state.about.aboutProduction.productionForm.fields = state.about.aboutProduction.productionForm.fields.map((fieldItem) => {
                if (inputType === fieldItem.fieldType) {
                    return {
                        ...fieldItem,
                        value: '',
                        fieldValid: false
                    }
                }
                return fieldItem;
            });

        },
        checkAboutProductionSendBtn(state) {
            const checkFields = state.about.aboutProduction.productionForm.fields.filter((item) => item.fieldValid && item.value !== '');
            const phoneField = checkFields.find((item) => item.fieldType === 'phone');
            const policyChecked = state.about.aboutProduction.productionForm.policyActive;

            if (checkFields && checkFields.length >= 2 && (phoneField && phoneField.fieldValid && policyChecked)) {
                state.about.aboutProduction.productionForm.sendBtnActive = true;
                return;
            }
            state.about.aboutProduction.productionForm.sendBtnActive = false;
        },
        aboutTabs(state, action) {
            const { tabId } = action.payload;
            const findActive = state.about.aboutTabs.find((item) => item.id === tabId);

            if (findActive && findActive.id === tabId && findActive.active) return;

            state.about.aboutTabs = state.about.aboutTabs.map((tabItem) => {
                if (tabItem.id === tabId && !tabItem.active) {
                    return {
                        ...tabItem,
                        active: true
                    }
                }
                return {
                    ...tabItem,
                    active: false
                }
            });
        },
        aboutGalleryMoveSlide(state, action) {
            const { direction } = action.payload;
            state.about.aboutGallery.images = state.about.aboutGallery.images.map((galleryItem) => {
                return {
                    ...galleryItem,
                    active: false
                }
            });
            state.about.aboutGallery.images = galeryMoveSlide(state.about.aboutGallery.images, direction);
        },
        aboutGalleryHover(state, action) {
            const { imageId, closeParam } = action.payload;

            if (closeParam) {
                state.about.aboutGallery.images = state.about.aboutGallery.images.map((galleryItem) => {
                    return {
                        ...galleryItem,
                        active: false
                    }
                });
                return;
            }
            
            state.about.aboutGallery.images = state.about.aboutGallery.images.map((galleryItem) => {
                if (galleryItem.id === imageId) {
                    return {
                        ...galleryItem,
                        active: true
                    }
                }
                return {
                    ...galleryItem,
                    active: false
                }
            });
        },
        aboutGalleryPopup(state, action) {
            const { imageItem, status } = action.payload;
            if (!imageItem) {
                state.about.aboutGallery.imagePopup = initialState.about.aboutGallery.imagePopup;
                return;
            }
            state.about.aboutGallery.imagePopup = {
                ...state.about.aboutGallery.imagePopup,
                active: status,
                image: imageItem.imgFull,
                imageAlt: imageItem.imgAlt,
                imageDescription: imageItem.imgDescription
            }
        },
        aboutGalleryPopupNextSlide(state, action) {
            const { direction } = action.payload;
            const targetImage = state.about.aboutGallery.images.slice(0, direction);

            if (targetImage && targetImage.length > 0) {
                state.about.aboutGallery.images = galeryMoveSlide(state.about.aboutGallery.images, direction);
                state.about.aboutGallery.imagePopup = {
                    ...state.about.aboutGallery.imagePopup,
                    image: targetImage[0].imgFull,
                    imageAlt: targetImage[0].imgAlt,
                    imageDescription: targetImage[0].imgDescription
                };
            }
        },
        decorCosmConsultPopup(state) {
            state.decorativeCosmeticsPage.consultPopup = {
                ...state.decorativeCosmeticsPage.consultPopup,
                active: state.decorativeCosmeticsPage.consultPopup.active ? false : true
            }
            if (!state.decorativeCosmeticsPage.consultPopup.active) {
                state.decorativeCosmeticsPage.consultPopup = initialState.decorativeCosmeticsPage.consultPopup;
            }
        },
        decorCosmOrderPopup(state) {
            state.decorativeCosmeticsPage.orderPopup = {
                ...state.decorativeCosmeticsPage.orderPopup,
                active: state.decorativeCosmeticsPage.orderPopup.active ? false : true
            }
            if (!state.decorativeCosmeticsPage.orderPopup.active) {
                state.decorativeCosmeticsPage.orderPopup = initialState.decorativeCosmeticsPage.orderPopup;
            }
        },
        decorCosmFaqAction(state, action) {
            const { faqId } = action.payload;
            state.decorativeCosmeticsPage.faqQuestions = state.decorativeCosmeticsPage.faqQuestions.map((faqItem) => {
                if (faqItem.id === faqId) {
                    return {
                        ...faqItem,
                        active: faqItem.active ? false : true
                    }
                }
                return faqItem;
            })
        },
        decorCosmConsultPopupInput(state, action) {
            const { fieldId, fieldType, fieldValue } = action.payload;

            if (fieldValue === ' ') return;

            let validValue;
            let inputValid = false;

            if (fieldId && (!fieldType && !fieldValue)) {
                state.decorativeCosmeticsPage.consultPopup.fields = state.decorativeCosmeticsPage.consultPopup.fields.map((fieldItem) => {
                    if (fieldItem.id === fieldId) {
                        return {
                            ...fieldItem,
                            value: '',
                            valid: false
                        }
                    }
                    return fieldItem
                });
                return
            }

            if (fieldType === 'name' && fieldValue) {
                inputValid = validateName(fieldValue)
                validValue = fieldValue
            }
            else if (fieldType === 'phone' && fieldValue && fieldValue.length !== 18) {
                const phoneStr = validatePhone(fieldValue);
                inputValid = phoneStr.length === 18 ? true : false
                validValue = phoneStr;
            }
            else if (fieldType === 'email' && fieldValue) {
                inputValid = !validateMail(fieldValue) ? true : false
                validValue = fieldValue;
            }

            state.decorativeCosmeticsPage.consultPopup.fields = state.decorativeCosmeticsPage.consultPopup.fields.map((fieldItem) => {
                if (fieldItem.id === fieldId && fieldItem.name === fieldType) {
                    return {
                        ...fieldItem,
                        value: validValue,
                        valid: inputValid,
                    }
                }
                return fieldItem
            });
        },
        decorCosmConsultPopupCheckbox(state) {
            state.decorativeCosmeticsPage.consultPopup.policyActive = state.decorativeCosmeticsPage.consultPopup.policyActive ? false : true;
        },
        decorCosmConsultPopupValidate(state) {
            const nameField = state.decorativeCosmeticsPage.consultPopup.fields.find((item) => item.name === 'name' && item.value !== '');
            const phoneField = state.decorativeCosmeticsPage.consultPopup.fields.find((item) => item.name === 'phone' && item.value !== '');
            const emailField = state.decorativeCosmeticsPage.consultPopup.fields.find((item) => item.name === 'email' && item.value !== '');
            const checkbox = state.decorativeCosmeticsPage.consultPopup.policyActive;

            if (nameField && nameField.valid && checkbox && (phoneField && phoneField.valid || emailField && emailField.valid)) {
                state.decorativeCosmeticsPage.consultPopup.sendBtnActive = true;
                return;
            }
            state.decorativeCosmeticsPage.consultPopup.sendBtnActive = false;
        },
        decorCosmOrderPopupInput(state, action) {
            const { fieldId, fieldType, fieldValue } = action.payload;
            let inputValid;
            let validValue;

            if (fieldValue && fieldType === 'name') {
                inputValid = validateName(fieldValue)
                validValue = fieldValue
            }
            else if (fieldType === 'phone' && fieldValue && fieldValue.length !== 18) {
                const phoneStr = validatePhone(fieldValue);
                inputValid = phoneStr.length === 18 ? true : false
                validValue = phoneStr;
            }
            else if (fieldType === 'email' && fieldValue) {
                inputValid = !validateMail(fieldValue) ? true : false
                validValue = fieldValue;
            }
            else if (fieldType === 'file' && fieldValue) {
                state.decorativeCosmeticsPage.orderPopup.fields = state.decorativeCosmeticsPage.orderPopup.fields.map((fieldItem) => {
                    if (fieldItem.id === fieldId && fieldItem.name === fieldType) {
                        return {
                            ...fieldItem,
                            fileData: fieldValue,
                            displayName: fieldValue.name
                        }
                    }
                    return fieldItem;
                });
            }
            else if (fieldType === 'comment') {
                inputValid = fieldValue.length > 3 && fieldValue !== ' ' ? true : false
                validValue = fieldValue;
            }

            state.decorativeCosmeticsPage.orderPopup.fields = state.decorativeCosmeticsPage.orderPopup.fields.map((fieldItem) => {
                if (fieldItem.id === fieldId && fieldItem.name === fieldType && validValue) {
                    return {
                        ...fieldItem,
                        value: validValue,
                        valid: inputValid
                    }
                }
                return fieldItem;
            });
        },
        decorCosmOrderClearInput(state, action) {
            const { fieldId, fieldType, fieldValue } = action.payload;
            if (!fieldValue) {
                state.decorativeCosmeticsPage.orderPopup.fields = state.decorativeCosmeticsPage.orderPopup.fields.map((fieldItem) => {
                    if (fieldItem.id === fieldId && fieldItem.name === fieldType) {
                        return {
                            ...fieldItem,
                            value: '',
                            valid: false
                        }
                    }
                    return fieldItem;
                })
            }
        },
        decorCosmOrderCheckbox(state) {
            state.decorativeCosmeticsPage.orderPopup.policyActive = state.decorativeCosmeticsPage.orderPopup.policyActive ? false : true;
        },
        decorCosmOrderPopupValidate(state) {
            const nameField = state.decorativeCosmeticsPage.orderPopup.fields.find((item) => item.name === 'name' && item.value !== '');
            const phoneField = state.decorativeCosmeticsPage.orderPopup.fields.find((item) => item.name === 'phone' && item.value !== '');
            const emailField = state.decorativeCosmeticsPage.orderPopup.fields.find((item) => item.name === 'email' && item.value !== '');
            const checkbox = state.decorativeCosmeticsPage.orderPopup.policyActive;

            if (nameField && nameField.valid && checkbox && (phoneField && phoneField.valid || emailField && emailField.valid)) {
                state.decorativeCosmeticsPage.orderPopup.sendBtnActive = true;
                return;
            }
            state.decorativeCosmeticsPage.orderPopup.sendBtnActive = false;
        },
        decorCosmQuestionFormInput(state, action) {
            const { fieldId, fieldType, fieldValue } = action.payload;
            let inputValid;
            let validValue;

            if (fieldValue && fieldType === 'name') {
                inputValid = validateName(fieldValue)
                validValue = fieldValue
            }
            else if (fieldType === 'phone' && fieldValue && fieldValue.length !== 18) {
                const phoneStr = validatePhone(fieldValue);
                inputValid = phoneStr.length === 18 ? true : false
                validValue = phoneStr;
            }
            else if (fieldType === 'email' && fieldValue) {
                inputValid = !validateMail(fieldValue) ? true : false
                validValue = fieldValue;
            }

            state.decorativeCosmeticsPage.questionForm.fields = state.decorativeCosmeticsPage.questionForm.fields.map((fieldItem) => {
                if (fieldItem.id === fieldId && fieldItem.name === fieldType) {
                    return {
                        ...fieldItem,
                        value: validValue,
                        valid: inputValid
                    }
                }
                return fieldItem;
            });
        },
        decorCosmQuestionFormClearInput(state, action) {
            const { fieldId, fieldType, fieldValue } = action.payload;
            if (!fieldValue) {
                state.decorativeCosmeticsPage.questionForm.fields = state.decorativeCosmeticsPage.questionForm.fields.map((fieldItem) => {
                    if (fieldItem.id === fieldId && fieldItem.name === fieldType) {
                        return {
                            ...fieldItem,
                            value: '',
                            valid: false
                        }
                    }
                    return fieldItem;
                })
            }
        },
        decorCosmQuestionFormCheckbox(state) {
            state.decorativeCosmeticsPage.questionForm.policyActive = state.decorativeCosmeticsPage.questionForm.policyActive ? false : true;
        },
        decorCosmQuestionFormValidate(state) {
            const nameField = state.decorativeCosmeticsPage.questionForm.fields.find((item) => item.name === 'name' && item.value !== '');
            const phoneField = state.decorativeCosmeticsPage.questionForm.fields.find((item) => item.name === 'phone' && item.value !== '');
            const emailField = state.decorativeCosmeticsPage.questionForm.fields.find((item) => item.name === 'email' && item.value !== '');
            const checkbox = state.decorativeCosmeticsPage.questionForm.policyActive;

            if (nameField && nameField.valid && checkbox && (phoneField && phoneField.valid || emailField && emailField.valid)) {
                state.decorativeCosmeticsPage.questionForm.sendBtnActive = true;
                return;
            }
            state.decorativeCosmeticsPage.questionForm.sendBtnActive = false;
        },
        excursionProductionPopup(state) {
            if (state.productionExcuirsion.popup.popupActive) {
                state.productionExcuirsion.popup = initialState.productionExcuirsion.popup;
                return;
            }
            state.productionExcuirsion.popup = {
                ...state.productionExcuirsion.popup,
                popupActive: state.productionExcuirsion.popup.popupActive ? false : true
            }
        },
        excursionProductionPopupInput(state, action) {
            const { fieldId, fieldType, fieldValue } = action.payload;
            let inputValid;
            let validValue;

            if (fieldValue && fieldType === 'name') {
                inputValid = validateName(fieldValue);
                validValue = fieldValue;
            }
            else if (fieldType === 'phone' && fieldValue && fieldValue.length !== 18) {
                const phoneStr = validatePhone(fieldValue);
                inputValid = phoneStr.length === 18 ? true : false
                validValue = phoneStr;
            }
            else if (fieldType === 'date' && fieldValue) {
                const workDayStr = validateDate(fieldValue);
                inputValid = workDayStr ? true : false;
                validValue = fieldValue
            }
            else if (fieldType === 'time' && fieldValue) {
                const workTimeStr = validateWorkTime(fieldValue);
                inputValid = workTimeStr ? true : false;
                validValue = workTimeStr ? workTimeStr : fieldValue;
            }

            state.productionExcuirsion.popup.fields = state.productionExcuirsion.popup.fields.map((fieldItem) => {
                if (fieldItem.id === fieldId && fieldItem.name === fieldType) {
                    return {
                        ...fieldItem,
                        value: validValue,
                        valid: inputValid
                    }
                }
                return fieldItem;
            });
        },
        excursionProductionPopupClearInput(state, action) {
            const { fieldId, fieldType } = action.payload;

            state.productionExcuirsion.popup.fields = state.productionExcuirsion.popup.fields.map((fieldItem) => {
                if (fieldItem.id === fieldId && fieldItem.name === fieldType) {
                    return {
                        ...fieldItem,
                        value: '',
                        valid: false
                    }
                }
                return fieldItem;
            });
        },
        excursionProductionPopupCheckbox(state) {
            state.productionExcuirsion.popup.policyActive = state.productionExcuirsion.popup.policyActive ? false : true;
        },
        excursionProductionPopupValidateForm(state) {
            const nameField = state.productionExcuirsion.popup.fields.find((item) => item.name === 'name' && item.value !== '');
            const phoneField = state.productionExcuirsion.popup.fields.find((item) => item.name === 'phone' && item.value !== '');
            const dateField = state.productionExcuirsion.popup.fields.find((item) => item.name === 'date' && item.value !== '');
            const timeField = state.productionExcuirsion.popup.fields.find((item) => item.name === 'time' && item.value !== '');
            const checkbox = state.productionExcuirsion.popup.policyActive;

            if (nameField && nameField.valid && (phoneField && phoneField.valid) && 
                (dateField && dateField.valid) && (timeField && timeField.valid) && checkbox) {
                    state.productionExcuirsion.popup.sendBtnActive = true;
                    return;
            }
            state.productionExcuirsion.popup.sendBtnActive = false;
        },
        excursionProductionHappyState(state) {
            state.productionExcuirsion.popup.happyState.active = state.productionExcuirsion.popup.happyState.active ? false : true;
        },
        decorativeConsultHappyState(state) {
            state.decorativeCosmeticsPage.consultPopup.happyState.active = state.decorativeCosmeticsPage.consultPopup.happyState.active ? false : true;
        },
        decorativeQuestionHappyState(state) {
            state.decorativeCosmeticsPage.questionForm.happyState.active = state.decorativeCosmeticsPage.questionForm.happyState.active ? false : true;
        },
        decorativeOrderHappyState(state) {
            state.decorativeCosmeticsPage.orderPopup.happyState.active = state.decorativeCosmeticsPage.orderPopup.happyState.active ? false : true;
        },
        aboutProductionVideoMenu(state, action) {
            const { catId, catName } = action.payload;
            state.about.aboutVideoProduction.menuCategories = state.about.aboutVideoProduction.menuCategories.map((videoCategory) => {
                if (videoCategory.id === catId && videoCategory.name === catName) {
                    return {
                        ...videoCategory,
                        selected: true
                    }
                }
                return {
                    ...videoCategory,
                    selected: false
                }
            })
        },
        aboutProductionSelectVideo(state) {
            const selectedMenu = state.about.aboutVideoProduction.menuCategories.find((item) => item.selected);
            const selectedVideo = selectedMenu.videos.find((item) => item.selected);
            const currentIndex = selectedMenu.videos.indexOf(selectedVideo);
            const nextIndex = Number(currentIndex) + 1  <= Number(selectedMenu.videos.length) - 1 ? Number(currentIndex) + 1 : 0;

            state.about.aboutVideoProduction.menuCategories = state.about.aboutVideoProduction.menuCategories.map((menuItem) => {
                if (menuItem.id === selectedMenu.id) {
                    return {
                        ...menuItem,
                        videos: menuItem.videos.map((videoItem, i) => {
                            return {
                                ...videoItem,
                                selected: i === nextIndex ? true : false
                            }
                        })
                    }
                }
                return menuItem;
            });
        },
        showMoreTmItem(state, action) {
           const { tmId, tmName } = action.payload;
           
           state.customTmPage.tmItems = state.customTmPage.tmItems.map((mainTmItem) => {
                if (mainTmItem.id === tmId && mainTmItem.name === tmName) {
                    return {
                        ...mainTmItem,
                        showMoreActive: mainTmItem.showMoreActive ? false : true
                    }
                }
                return {
                    ...mainTmItem,
                    showMoreActive: false
                }
           });
        },
        customTmLightbox(state, action) {
            const { tmId, tmName, imageId, status } = action.payload;
            console.log(tmId)
            state.customTmPage.tmItems =  state.customTmPage.tmItems.map((mainTmItem) => {
                if (mainTmItem.id === tmId && mainTmItem.name === tmName) {
                    return {
                        ...mainTmItem,
                        gallery: mainTmItem.gallery.map((galleryItem) => {
                            if (galleryItem.id === imageId) {
                                return {
                                    ...galleryItem,
                                    popupActive: status ? true : false,
                                }
                            }
                            return {
                                ...galleryItem,
                                popupActive: false
                            }
                        })
                    }
                }
                return mainTmItem;
             })

        }

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
            if (data && data.length > 0) {
                state.forClientsPage.suppliersType = [...data];
                return;
            }
            state.forClientsPage.suppliersType = [];
        })
        .addCase(getAvalibleSuppliers.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.forClientsPage.suppliers = [...data].sort((a, b) => a.type.localeCompare(b.type));
        })
        .addCase(sendForClientsConsultForm.fulfilled, (state, action) => {
            const { status, description } = action.payload;
            state.forClientsPage.consultForm = {
                ...initialState.forClientsPage.consultForm,
            };
            if (status !== 'err') {
                state.forClientsPage.consultForm.happyState = {
                    ...state.forClientsPage.consultForm.happyState,
                    active: true,
                    description: description
                }
            }
        })
        .addCase(sendForClientsDetailsForm.fulfilled, (state, action) => {
            const { status, description } = action.payload;
            state.forClientsPage.detailsForm = {
                ...initialState.forClientsPage.detailsForm,
            };
            if (status !== 'err') {
                state.forClientsPage.detailsForm.happyState = {
                    ...state.forClientsPage.detailsForm.happyState,
                    active: true,
                    description: description
                }
            }
        })
        .addCase(sendAboutProductionConsultForm.fulfilled, (state, action) => {
            const { status, description } = action.payload;
            if (status && status === 'ok') {
                state.about.aboutProduction.productionForm.happyState = {
                    ...state.about.aboutProduction.productionForm.happyState,
                    active: true,
                    description: description
                }
                return;
            };
            state.about.aboutProduction.productionForm.happyState = initialState.about.aboutProduction.productionForm.happyState;
        })
        .addCase(sendExcursionPorductionRequest.fulfilled, (state, action) => {
            const { status, description } = action.payload;
            if (status && status === 'ok') {
                state.productionExcuirsion.popup = {
                    ...initialState.productionExcuirsion.popup,
                    happyState: {
                        ...state.productionExcuirsion.popup.happyState,
                        active: true,
                        title: description.title,
                        order: description.order,
                        description: description.description
                    }
                };
                return;
            }
            state.productionExcuirsion.popup.happyState = initialState.productionExcuirsion.popup.happyState;
            
        })
        .addCase(sendDecorativeConsultRequest.fulfilled, (state, action) => {
            const { status, description } = action.payload;
            if (status && status === 'ok') {
                state.decorativeCosmeticsPage.consultPopup = {
                    ...initialState.decorativeCosmeticsPage.consultPopup,
                    happyState: {
                        ...state.decorativeCosmeticsPage.consultPopup.happyState,
                        active: true,
                        title: description.title,
                        description: description.description
                    }
                };
                return;
            }
            state.decorativeCosmeticsPage.consultPopup.happyState = initialState.decorativeCosmeticsPage.consultPopup;
        })
        .addCase(sendDecorativeQuestionRequest.fulfilled, (state, action) => {
            const { status, description } = action.payload;
            if (status && status === 'ok') {
                state.decorativeCosmeticsPage.questionForm = {
                    ...initialState.decorativeCosmeticsPage.questionForm,
                    happyState: {
                        ...state.decorativeCosmeticsPage.questionForm.happyState,
                        active: true,
                        title: description.title,
                        description: description.description
                    }
                };
                return;
            }
            state.decorativeCosmeticsPage.questionForm.happyState = initialState.decorativeCosmeticsPage.questionForm;
        })
        .addCase(sendDecorativeOrderRequest.fulfilled, (state, action) => {
            const { status, description } = action.payload;
            if (status && status === 'ok') {
                state.decorativeCosmeticsPage.orderPopup = {
                    ...initialState.decorativeCosmeticsPage.orderPopup,
                    happyState: {
                        ...state.decorativeCosmeticsPage.orderPopup.happyState,
                        active: true,
                        title: description.title,
                        description: description.description,
                        orderNumber: description.order
                    }
                };
            }
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
    forClientsDetailsForm,
    forClientsDetailsValidateForm,
    forClientsDetailsPolicy,
    forClientsDetailsCheckForm,
    forClientsHappyStatePopup,
    showServiceHover,
    abouProductionPopup,
    validateAboutProductionForm,
    aboutProductionPolicy,
    aboutProductionClearInput,
    checkAboutProductionSendBtn,
    aboutTabs,
    aboutGalleryMoveSlide,
    aboutGalleryHover,
    aboutGalleryPopup,
    aboutGalleryPopupNextSlide,
    decorCosmConsultPopup,
    decorCosmOrderPopup,
    decorCosmFaqAction,
    decorCosmConsultPopupInput,
    decorCosmConsultPopupCheckbox,
    decorCosmConsultPopupValidate,
    decorCosmOrderPopupInput,
    decorCosmOrderClearInput,
    decorCosmOrderCheckbox,
    decorCosmOrderPopupValidate,
    decorCosmQuestionFormInput,
    decorCosmQuestionFormClearInput,
    decorCosmQuestionFormCheckbox,
    decorCosmQuestionFormValidate,
    excursionProductionPopup,
    excursionProductionPopupInput,
    excursionProductionPopupClearInput,
    excursionProductionPopupCheckbox,
    excursionProductionPopupValidateForm,
    excursionProductionHappyState,
    decorativeConsultHappyState,
    decorativeQuestionHappyState,
    decorativeOrderHappyState,
    aboutProductionVideoMenu,
    aboutProductionSelectVideo,
    showMoreTmItem,
    customTmLightbox
} = innerPageSlice.actions;
export default innerPageSlice.reducer;