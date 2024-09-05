import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import imgVolos from '../../img/product_volos.jpg';
import imgSlide6 from '../../img/slide_6.jpg';
import imgSlide7 from '../../img/slide_7.jpg';
import imgSlide8 from '../../img/slide_8.jpg';
import imgSlide9 from '../../img/slide_9.jpg';
import imgSlide10 from '../../img/slide_10.jpg';
import independenceIconOne from '../../img/independence_1.svg';
import independenceIconTwo from '../../img/independence_2.svg';
import independenceIconThree from '../../img/independence_3.svg';
import independenceIconFour from '../../img/independence_4.svg';
import independenceIconFive from '../../img/independence_5.svg';
import independenceIconSix from '../../img/independence_6.svg';
import buissnessHotel from '../../img/buissness_hotels.jpg';
import buissnessOpt from '../../img/buissness_opt.jpg';
import buissnessMarketplace from '../../img/buissness_marketpalce.jpg';
import buissnessSpa from '../../img/buissness_spa.jpg';
import validatePhone from '../../functions/validatePhone';
import validateMail from '../../functions/validateMail';
import test from '../../img/500x500.png';
import contractImgClear from '../../img/contract_celar_face_cosm.jpg';
import contractImgClear2 from '../../img/contract_celar_face_cosm2.jpg';
import contractShampoo from '../../img/contract_shampoo_cosm.jpg';
import contractHandsImg from '../../img/contract_hands_clear_cosm.jpg';
import contractBodyImg from '../../img/contract_celar_body_cosm.jpg';
import contractBodyImg2 from '../../img/contract_celar_body_cosm2.jpg';
import contractSpfImg from '../../img/contract_spf_cosm.jpg';
import contractPilling from '../../img/contract_celar_pillings_cosm.jpg';
import contractFootCream from '../../img/contract_footcream_cosm.jpg';
import contractProfessional from '../../img/contract_professional_cosm.jpg';
import contractApparat from '../../img/contract_apparat_cosm.jpg';
import contractChildrenCosm from '../../img/contract_children_cosm.jpg';
import userPhoto from '../../img/user-review-img-holder.png'

const initialState = { 
    calculatorForm: {
        popupOpen: false,
    },
    orderForm: {
        popupOpen: false,
        allFieldsValid: false,
        policyChecked: false,
        happyState: false,
        happyStateDescription: '',
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
                placeholder: '8 xxx xxx xx xx',
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
                    name: 'Какое количество продукции изготовить?',
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
        servicePopupForm: {
            sendBtnActive: false,
            servicePopupHappyState: false,
            servicePopupHappyStateDescription: '',
            formFields: [
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
                    placeholder: '8 xxx xxx xx xx',
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
                    name: 'Услуга', 
                    value: '',
                    type: 'options',
                    fieldName: 'options', 
                    selected: false,
                    err: false,
                    options: [
                        {id: 1, name: 'Очищающие средства для лица', selected: false},
                        {id: 2, name: 'Уходовая косметика для лица', selected: false},
                        {id: 3, name: 'Средства для ухода за волосами', selected: false},
                        {id: 4, name: 'Уходовая косметика для тела', selected: false},
                        {id: 5, name: 'Средства для ухода за кожей рук', selected: false},
                        {id: 6, name: 'Солнцезащитные средства', selected: false},
                        {id: 7, name: 'Очищающая косметика для тела', selected: false},
                        {id: 8, name: 'Детская косметика', selected: false},
                        {id: 9, name: 'Аппаратная косметика', selected: false},
                        {id: 10, name: 'Профессиональная косметика', selected: false},
                        {id: 11, name: 'Пилинги', selected: false},
                    ]
                },
                {
                    id: 5,
                    name: 'Комментарий', 
                    value: '',
                    type: 'textarea',
                    fieldName: 'comment', 
                    selected: false,
                    err: false,
                },
            ]
        },
        servicesItems: [
            {
                id: 1,
                name: 'Очищающие средства для лица ',
                altName: 'Контрактное производство очищающих средств для лица в спб',
                serviceImg: contractImgClear,
                serviceOrderActive: false,
            },
            {
                id: 2,
                name: 'Профессиональная косметика',
                altName: 'Контрактное производство профессиональной косметики в спб',
                serviceImg: contractProfessional,
                serviceOrderActive: false,
            },
            {
                id: 3,
                name: 'Средства для ухода за волосами',
                altName: 'Контрактное производство шампуней в спб',
                serviceImg: contractShampoo,
                serviceOrderActive: false,
            },
            {
                id: 4,
                name: 'Уходовая косметика для тела',
                altName: 'Контрактное производство косметики для тела в спб',
                serviceImg: contractBodyImg,
                serviceOrderActive: false,
            },
            {
                id: 5,
                name: 'Средства для ухода за кожей рук',
                altName: 'Контрактное производство крема для рук в спб',
                serviceImg: contractHandsImg,
                serviceOrderActive: false,
                amimate: true
            },
            {
                id: 6,
                name: 'Средства для ухода за кожей ног',
                altName: 'Контрактное производство крема для ног в спб',
                serviceImg: contractFootCream,
                serviceOrderActive: false,
                amimate: true
            },
            {
                id: 7,
                name: 'Солнцезащитные средства',
                altName: 'Контрактное производство солнцезащитной косметики в спб',
                serviceImg: contractSpfImg,
                serviceOrderActive: false,
                amimate: true
            },
            {
                id: 8,
                name: 'Очищающая косметика для тела',
                altName: 'Контрактное производство очищающей косметики для тела в спб',
                serviceImg: contractBodyImg2,
                serviceOrderActive: false,
                amimate: true
            },
            {
                id: 9,
                name: 'Детская косметика',
                altName: 'Контрактное производство детская косметики в спб',
                serviceImg: contractChildrenCosm,
                serviceOrderActive: false,
                amimate: true
            },
            {
                id: 10,
                name: 'Аппаратная косметика',
                altName: 'Контрактное производство аппаратной косметики в спб',
                serviceImg: contractApparat,
                serviceOrderActive: false,
                amimate: true
            },
            {
                id: 11,
                name: 'Уходовая косметика для лица',
                altName: 'Контрактное производство уходовой косметики для лица в спб',
                serviceImg: contractImgClear2,
                serviceOrderActive: false,
                amimate: true
            },
            {
                id: 12,
                name: 'Пилинги',
                altName: 'Контрактное производство пиллингов в спб',
                serviceImg: contractPilling,
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
                description: 'Наша команда опытных специалистов работает над разработкой уникальных и инновационных концепций для вашего товара. Мы учитываем все ваши требования и пожелания, чтобы создать продукт, который будет соответствовать вашим ожиданиям и потребностям потребителей.',
                nameNumber: 1,
                active: false
            },
            {
                id: 2,
                name: 'Создаем рецептуру',
                description: 'После разработки концепции мы переходим к созданию рецептуры продукта. Наша команда проводит исследования и эксперименты, чтобы достичь оптимального сочетания ингредиентов и получить высокое качество и вкусовые характеристики продукта.',
                nameNumber: 2,
                active: false
            },
            {
                id: 3,
                name: 'Подбор упаковки',
                description: 'Мы также предлагаем услуги по подбору упаковки для вашего товара. Мы учитываем не только визуальные аспекты, но и функциональность упаковки, чтобы обеспечить безопасность и сохранность продукта в течение всего его срока годности.',
                nameNumber: 3,
                active: false
            },
            {
                id: 4,
                name: 'Продумываем дизайн этикеток',
                description: 'Мы также заботимся о визуальном облике вашего продукта. Наша команда разрабатывает уникальный дизайн этикеток, который подчеркнет индивидуальность вашего товара и привлечет внимание потребителей.',
                nameNumber: 4,
                active: false
            },
            {
                id: 5,
                name: 'Производим продукцию',
                description: 'Когда все этапы разработки завершены, мы приступаем к производству продукции. Мы используем только высококачественные ингредиенты и современное оборудование, чтобы гарантировать стабильно высокое качество нашей продукции.',
                nameNumber: 5,
                active: false
            },
            {
                id: 6,
                name: 'Берем на себя вопросы сертификации и декларирования',
                description: 'Мы также берем на себя все вопросы сертификации и декларирования, чтобы вы могли быть уверены в соответствии вашего товара всем необходимым стандартам и требованиям.',
                nameNumber: 6,
                active: false
            },
            {
                id: 7,
                name: 'Доставляем продукцию вам',
                description: 'Наконец, мы доставляем продукцию вам. Мы работаем с надежными партнерами по логистике, чтобы обеспечить своевременную и безопасную доставку вашего товара.',
                nameNumber: 7,
                active: false
            }
        ]
    },
    independence: {
        independenceItems: [
            {
                id: 1,
                title: 'Полный цикл',
                image: independenceIconOne,
                description: 'Полный производственный цикл – от формулы к готовому продукту',
            },
            {
                id: 2,
                title: 'Быстрый старт под СТМ',
                image: independenceIconThree,
                description: 'Высокие производственные мощности для выпуска продукции под собственной торговой маркой.',
            },
            {
                id: 3,
                title: 'Уникальные рецептуры',
                image: independenceIconTwo,
                description: 'Лаборатория с опытными технологами и уникальными рецептурами собственных разработок.',
            },
            {
                id: 4,
                title: 'Качественное сырье',
                image: independenceIconFive,
                description: 'Использование в производстве сырья и оборудования ведущих мировых компаний.',
            },
            {
                id: 5,
                title: 'Упаковка и хранение',
                image: independenceIconFour,
                description: 'Упаковка готовой продукции и хранение комплектующих.',
            },
            {
                id: 6,
                title: 'Оперативность',
                image: independenceIconSix,
                description: 'Высокое качество по доступной цене. Оперативность выполнения заказов.',
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
           sendBtnActive: false,
        },
    },
    reviews: {
        reviewsItems: [
            {
                id: 1,
                userName: 'Testname ',
                userSecondName: 'TestFamil',
                userAvatar: userPhoto,
                userChangeRating: 5,
                userOriginalLink: '',
                reviewDescription: 'ddddddddddddddddddddddddddddd Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            },
            {
                id: 2,
                userName: 'Testname ',
                userSecondName: 'TestFamil',
                userAvatar: userPhoto,
                userChangeRating: 5,
                userOriginalLink: '',
                reviewDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            },
            {
                id: 3,
                userName: 'Testname ',
                userSecondName: 'TestFamil',
                userAvatar: userPhoto,
                userChangeRating: 5,
                userOriginalLink: '',
                reviewDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            },
            {
                id: 4,
                userName: 'Testname ',
                userSecondName: 'TestFamil',
                userAvatar: userPhoto,
                userChangeRating: 5,
                userOriginalLink: '',
                reviewDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            },
            {
                id: 5,
                userName: 'Testname ',
                userSecondName: 'TestFamil',
                userAvatar: userPhoto,
                userChangeRating: 5,
                userOriginalLink: '',
                reviewDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            }
        ],
        yandexRating: 5,
        yandexMapUrl: 'https://yandex.ru/maps/org/kosmeticheskiye_tekhnologii/238223588879/reviews/?ll=30.374016%2C59.895998&z=17',

    },
    mouseCords: {
        left: 0,
        top: 0,
    },
    videoMainPage: {
        videoMainPageBlob: '',
        loadEnd: false,
    },
    faq: {
        faqItems: [
            {
                id: 1,
                title: 'Какая минимальная партия заказа ?',
                description: 'Минимальная варка по любой позиции от 50 кг. ',
                active: false
            },
            {
                id: 2,
                title: 'Как происходит отправка товара?',
                description: 'Доставка заказов производится самовывозом с производства или транспортными компаниями на ваш выбор по тарифам перевозчика за счет покупателя. Точная стоимость доставки рассчитывается перевозчиком при заборе груза на основании его веса, объёма и дальности перевозки. Все подробности, включая способ доставки (до двери, до терминала или до пунктов выдачи), уточняйте у менеджеров.',
                active: false
            },
            {
                id: 3,
                title: 'Сколько стоит разработка 1 продукта?',
                description: 'Есть цена за единицу продукции, при условии, что заказчик выкупает рецептуру и владеет интеллектуальной собственностью в виде рецептуры от 15 000 руб.',
                active: false
            },
            {
                id: 4,
                title: 'У вас есть универсальный прайс-лист?',
                description: 'В контрактном производстве не существует универсальных прайс-листов, так как стоимость конечного продукта - динамическая величина, и она постоянно меняется в зависимости от упаковки, состава, этикетки, объема партии и прочих вводных данных.',
                active: false
            },
            {
                id: 5,
                title: 'Как проходит заключение договора?',
                description: 'Производитель делает расчет индивидуального заказа и заключается договор контрактного производства. Заказчик производит 100% предоплату и заказ уходит в производство.',
                active: false
            },
            {
                id: 6,
                title: 'Каковы сроки изготовления продукта?',
                description: 'В порядке живой очереди. Зависит от объемов заказа, сложности рецептуры, а также от сезона. В любом случае, оговаривается с каждым клиентом индивидуально. До 1 месяца может варьироваться срок изготовления.',
                active: false
            },
            {
                id: 7,
                title: 'Кто разрабатывает рецептуру?',
                description: 'Если необходимо разработать уникальную рецептуру, которая будет ориентирована на требуемый ценовой сегмент, планируется использование активных компонентов или же расширение существующей линии продуктов, то наши технологи решат даже самую сложную задачу.',
                active: false
            }
           
        ]
    },
    ourProjects: {
        nextSlideId: 1,
        currentSlideIndex: 0,
        slides: [
            {
                id: 1,
                slideImage: imgSlide10,
                projectName: 'Космецевтика Stella-Marina',
                slideActive: false,
            },
            {
                id: 2,
                slideImage: imgSlide6,
                projectName: 'Молодежная косметика PIXEL',
                slideActive: false,
            },
            {
                id: 3,
                slideImage: imgSlide8,
                projectName: 'Профессиональная косметика SM Prof',
                slideActive: true,
            },
            {
                id: 4,
                slideImage: imgSlide7,
                projectName: 'Уходовая косметика Stella-Marina',
                slideActive: false,
            },
            {
                id: 5,
                slideImage: imgSlide9,
                projectName: 'Профессиональные пилинги Stella-Marina',
                slideActive: false,
            },
        ],
    },
    useForBuissness: {
        buissnessTypes: [
            {
                id: 1,
                name: 'Отели',
                imageAlt: 'Косметика для Отелей',
                image: buissnessHotel,
                activeHover: false,
                description: 'Помогаем владельцам гостиниц создавать собственные линии косметики, предлагая широкий выбор продуктов: шампуни, кондиционеры, гели для душа, кремы для тела, маски для лица и многое другое',

            },
            {
                id: 2,
                name: 'Салоны красоты и СПА',
                imageAlt: 'Косметика для Салоны красоты и СПА',
                image: buissnessSpa,
                activeHover: false,
                description: 'Разработка собственной линии косметики - это отличная инвестиция в будущее вашего СПА-салона. Это позволит вам выделиться на рынке, повысить лояльность клиентов и получить дополнительный доход. Важно только выбрать надежного партнера, который обеспечит высокое качество и эффективность продукции.',
                
            },
            {
                id: 3,
                name: 'Маркетплейсы',
                imageAlt: 'Косметика для маркетплейсов',
                image: buissnessMarketplace,
                activeHover: false,
                description: 'Поможем произвести продукцию для продажи на популярных маркетплейсах, таких как OZON и Wildberries. Заказывая косметику по своему дизайну и бренду, вы получаете возможность предложить уникальные продукты, привлекая больше внимания покупателей.',
                
            },
            {
                id: 4,
                name: 'Оптовый бизнес',
                imageAlt: 'Косметика оптом от производителя',
                image: buissnessOpt,
                activeHover: false,
                description: 'Мы специализируются на производстве больших объемов косметики, что позволяет нам предложить конкурентоспособные цены и быстрые сроки выполнения заказа.',
                
            }
        ]
    }
};

export const sendOrderThunk = createAsyncThunk(
    'api/order/',
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
                options: false,
            })
        });

        const data = await response.json();

        return data;
    }
);

export const sendOrderThunkServiceMainPage = createAsyncThunk(
    'serviceMainPageOrder',
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
                options: sendData.options,
            })
        });

        const data = await response.json();

        return data;
    }
);

export const sendConsultRequest = createAsyncThunk(
    'api/consultreq/',
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
                city: sendData.city,
                comment: sendData.comment,
            })
        });

        const data = response.json();

        return data;
    }
);

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
            if (!status) {
                state.orderForm = initialState.orderForm;
                return;
            }
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
            if ((pattern.test(ref.current.value))) {
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
            state.services.servicePopupForm.servicePopupHappyState = false;
            state.services.servicePopupForm.servicePopupHappyStateDescription = '';
            state.services.servicePopupForm.sendBtnActive = false;
            state.mouseCords.left = left - 200;
            state.mouseCords.top = top - 400;
            state.services.servicePopupForm.formFields = state.services.servicePopupForm.formFields.map((formField) => {
                return { ...formField, value: '' }
            });
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
        validateServiceFormMainPage(state, action) {
            const { fieldType, fieldValue } = action.payload;
            const phoneValue = validatePhone(fieldValue);
            
            state.services.servicePopupForm.formFields = state.services.servicePopupForm.formFields.map((formField) => {
                if (formField.fieldName === fieldType && fieldType === 'name') {
                    const notValidName = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]|[0-9]|\s/g.test(fieldValue);
                    return {
                        ...formField,
                        value: fieldValue,
                        err: notValidName | fieldValue.length < 3 ? true : false
                    }
                }
                else if (formField.fieldName === fieldType && fieldType === 'phone') {
                    return {
                        ...formField,
                        value: phoneValue,
                        err: phoneValue.length === 18 ? false : true
                    }
                }
                else if (formField.fieldName === fieldType && fieldType === 'email') {
                    return {
                        ...formField,
                        value: fieldValue,
                        err: validateMail(fieldValue),
                    }
                }
                return formField;
            });
        },
        selectServiceOptionMainPage(state, action) {
            const { optionName } = action.payload;
            state.services.servicePopupForm.formFields = state.services.servicePopupForm.formFields.map((formField) => {
                if (formField.options) {
                    formField.options = formField.options.map((option) => {
                        if (option.name === optionName) {
                            return {
                                ...option,
                                selected: true,
                            }
                        }
                        return {
                            ...option,
                            selected: false,
                        }
                    });
                }
                return formField;
            });
        },
        serviceFormMainPageClearInput(state, action) {
            const { fieldType } = action.payload;
            state.services.servicePopupForm.sendBtnActive = false;
            state.services.servicePopupForm.formFields = state.services.servicePopupForm.formFields.map((formField) => {
                if (formField.fieldName === fieldType) {
                    return {
                        ...formField,
                        value: '',
                        err: false
                    }
                }
                return formField;
            });
        },
        serviceFormSendBtnActive(state) {
            const checkEmpty = state.services.servicePopupForm.formFields.filter((item) => item.value === '');
            const checkFieldsErr = state.services.servicePopupForm.formFields.filter(
                (formField) => formField.err && (formField.fieldName === 'email' | formField.fieldName === 'phone')
            );
            if (checkFieldsErr.length === 0 && checkEmpty.length < 3) {
                state.services.servicePopupForm.sendBtnActive = true;
                return;
            }
            state.services.servicePopupForm.sendBtnActive = false;
            
        },
        independenceFromInputValidate(state, action) {
            const { fieldType, fieldValue } = action.payload;
            //eslint-disable-next-line
            const notValidName = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]|[0-9]|\s/g.test(fieldValue);
            if (fieldType === 'name') {
                state.independence.independenceForm.nameFieldValue = fieldValue;
                state.independence.independenceForm.nameFieldValid = !notValidName && fieldValue.length >= 3;
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
        },
        clearIndependenceFormInput(state, action) {
            const { fieldType } = action.payload;
            
            if (fieldType === 'name') {
                state.independence.independenceForm.nameFieldValue = '';
                state.independence.independenceForm.nameFieldValid = true;
                state.independence.independenceForm.sendBtnActive = false;
                return;
            }
            else if (fieldType === 'phone') {
                state.independence.independenceForm.phoneFieldValue = '';
                state.independence.independenceForm.phoneFieldValid = true;
                state.independence.independenceForm.sendBtnActive = false;
                return;
            }
            else if (fieldType === 'comment') {
                state.independence.independenceForm.commentFieldValue = '';
                state.independence.independenceForm.commentFieldValid = true;
                state.independence.independenceForm.sendBtnActive = false;
                return;
            }
        },
        addVideoBlob(state, action) {
            const { blobData } = action.payload;
            if (!blobData) return;
            state.videoMainPage.videoMainPageBlob = blobData;
        },
        mainOrderFormHappyState(state, action) {
            const { status } = action.payload;
            state.orderForm.happyState = status;
            state.orderForm = initialState.orderForm;
        },
        activeFaq(state, action) {
            const { id, status } = action.payload;
            state.faq.faqItems = state.faq.faqItems.map((faqItem) => {
                if (faqItem.id === id) {
                    return {
                        ...faqItem,
                        active: status,
                    }
                }
                return faqItem;
            });
        },
        projectSlideMove(state, action) {
            const { position } = action.payload;
            if (position === -1) {
                const currentSlide = state.ourProjects.slides.find((item) => item.slideActive);
                const currentSlideIndex = state.ourProjects.slides.indexOf(currentSlide);
                const nextSlideIndex = currentSlideIndex - 1;
                state.ourProjects.nextSlideId = state.ourProjects.slides[nextSlideIndex].id;
                state.ourProjects.slides = state.ourProjects.slides.map((slideItem, i) => {
                    if (slideItem.slideActive) {
                        return {
                            ...slideItem,
                            slideActive: false,
                        }
                    }
                    else if (i === nextSlideIndex) {
                        return {
                            ...slideItem,
                            slideActive: true
                        }
                    }
                    return slideItem;
                });
                const slide = state.ourProjects.slides[currentSlideIndex];
                state.ourProjects.slides.splice(currentSlideIndex, 1);
                state.ourProjects.slides.splice(nextSlideIndex, 0, slide);
                return;
            }

            const findIndex = state.ourProjects.slides.findIndex((item) => item.slideActive);
            const nextIndex = findIndex + 1;
            state.ourProjects.slides = state.ourProjects.slides.map((slideItem, i) => {
                if (slideItem.slideActive) {
                    return {
                        ...slideItem,
                        slideActive: false,
                    }
                }
                else if (i === nextIndex) {
                    return {
                        ...slideItem,
                        slideActive: true
                    }
                }
                return slideItem;
            });

            const nextSlide = state.ourProjects.slides.splice(0, 1)[0];
            
            state.ourProjects.slides = [...state.ourProjects.slides, nextSlide]
            return;
        },
        buissnesHoverShow(state, action) {
            const { buissnessItemId, status, hide } = action.payload;

            state.useForBuissness.buissnessTypes = state.useForBuissness.buissnessTypes.map((buissnessItem) => {
                if (buissnessItemId === buissnessItem.id && !hide) {
                    return {
                        ...buissnessItem,
                       activeHover: status,
                    };
                }
                return {
                    ...buissnessItem,
                    activeHover: false,
                };
            });
        },
        reviewsMoveSlide(state, action) {
            const { position } = action.payload;
            state.reviews.reviewsItems = [...state.reviews.reviewsItems.slice(-1), ...state.reviews.reviewsItems.slice(0,-1)];
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(sendOrderThunk.pending, (state) => {
            state.loadingStatus = 'loading';
            state.error = null;
          })
          .addCase(sendOrderThunk.fulfilled, (state, action) => {
            const { message, description } = action.payload;
            state.loadingStatus = 'ready';
            state.error = null;
            state.orderForm.happyState = true;
            state.orderForm.happyStateDescription = description;
            state.orderForm.popupOpen = false;
          })
          .addCase(sendConsultRequest.pending, (state) => {
            state.loadingStatus = 'loading';
            state.error = null;
          })
          .addCase(sendConsultRequest.fulfilled, (state, action) => {
            state.loadingStatus = 'ready';
            state.error = null;
            state.independence.independenceForm = initialState.independence.independenceForm;
          })
           .addCase(sendOrderThunkServiceMainPage.pending, (state) => {
            state.loadingStatus = 'loading';
            state.error = null;
          })
          .addCase(sendOrderThunkServiceMainPage.fulfilled, (state, action) => {
            const { message, description } = action.payload;
            state.loadingStatus = 'ready';
            state.error = null;
            state.services.servicePopupForm.servicePopupHappyState = true;
            state.services.servicePopupForm.servicePopupHappyStateDescription = description;
          });
    }
});


export const {
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
    clearIndependenceFormInput,
    addVideoBlob,
    mainOrderFormHappyState,
    sendIndependenceFormBtnStatus,
    validateServiceFormMainPage,
    serviceFormMainPageClearInput,
    selectServiceOptionMainPage,
    serviceFormSendBtnActive,
    activeFaq,
    projectSlideMove,
    buissnesHoverShow,
    reviewsMoveSlide
} = mainPageSlice.actions;
export default mainPageSlice.reducer;