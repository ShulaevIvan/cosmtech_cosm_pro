import { createSlice } from "@reduxjs/toolkit";
import mobileHeaderTelegrmIcon from '../../img/mobileTelegramMenu.svg'
import mobileHeaderWhatsappIcon from '../../img/mobileWhatsappMenu.svg'
import tzIcon from '../../img/stickyMenu/tzIcon.svg';
import calcIcon from '../../img/stickyMenu/calculatorIcon.svg';
import communicationIcon from '../../img/stickyMenu/communication.svg';
import whatsappIcon from '../../img/whatsapp_footer.svg';
import telegramIcon from '../../img/telegram_footer.svg';

import validateName from '../../functions/validateName'
import validatePhone from '../../functions/validatePhone';

const initialState = { 
    mobileMenuActive: false,
    mobileHeader: {
        icons: [
            {
                id: 1,
                name: 'https://wa.me/+79643637272',
                img: mobileHeaderWhatsappIcon,
                imgAlt: 'Написать в whtasapp космотех',
                url: ''
            },
            {
                id: 2,
                name: 'https://t.me/+79643637272',
                img: mobileHeaderTelegrmIcon,
                imgAlt: 'Написать в telegram космотех',
                url: 'https://t.me/+79643637272'
            },
        ]
    },
    mainMenu: {
        menuItems: [
            {
                id: 1,
                name: 'Контрактное производство',
                url: '/',
                submenu: {
                    active: false,
                    menuItems: [
                        {
                            id: 1,
                            name: 'Декоративная косметика',
                            url: '/decorative-cosmetics'
                        },
                    ]
                }
            },
            {
                id: 2,
                name: 'Услуги',
                url: '/services',
                submenu: false
            },
            {
                id: 3,
                name: 'О Нас',
                url: '/about',
                submenu: false
            },
            {
                id: 4,
                name: 'Контакты',
                url: '/contacts',
                submenu: false
            }
        ]
    },
    footerMenu: {
        menuItems: [
            {
                id: 1,
                name: 'Клиентам',
                url: '/forclients',
                submenu: false
            },
            {
                id: 2,
                name: 'Вакансии',
                url: '/job',
                submenu: false
            },
        ]
    },
    sideMenu: {
        menuItems: [
            {
                id: 1,
                name: 'ТЗ на производство',
                img: tzIcon,
                imgAlt: 'Заполнить тз на производство косметики онлайн',
                type: 'tz',
                active: false
            },
            {
                id: 2,
                name: 'Кальклуятор',
                img: calcIcon,
                imgAlt: '#',
                type: 'calc',
                active: false
            },
            {
                id: 3,
                name: 'Консультация',
                img: communicationIcon,
                imgAlt: '',
                type: 'contacts',
                active: false
            },
        ],
        tzPopup: {
            active: false,
            resultData: {
                customer: {
                    allFieldsValid: false,
                    companyName: '',
                    customerName: '',
                    customerPhone: '',
                    customerEmail: '',
                }
            },
            customerPopup: {
                active: false,
                allFieldsValid: true,
                showAddBtn: true,
                fields: [
                    {
                        id: 1,
                        title: 'Название компании (ООО, ИП, ФИЗ.лицо)',
                        name: 'company',
                        type: 'text',
                        placeholder: 'Название компании или ФИО',
                        value: '',
                        valid: true
                    },
                    {
                        id: 2,
                        title: 'Город',
                        name: 'city',
                        type: 'text',
                        placeholder: 'Город',
                        value: '',
                        valid: true
                    },
                    {
                        id: 3,
                        title: 'Телефон',
                        name: 'phone',
                        type: 'text',
                        placeholder: '8xxxxxxxxxx',
                        value: '',
                        valid: true
                    },
                    {
                        id: 4,
                        title: 'Email',
                        name: 'email',
                        type: 'email',
                        placeholder: 'demo@....ru',
                        value: '',
                        valid: true
                    },
                ],
            }
        },
        calcPopup: {
            active: false,
        },
        contactsPopup: {
            active: false,
            sendBtnActive: false,
            checkboxActive: false,
            messagers: [
                {
                    id: 1,
                    name: 'whatsapp',
                    img: whatsappIcon,
                    imgAlt: 'написать в whatsapp космотех',
                    url: 'https://wa.me/+79643637272',
                },
                {
                    id: 2,
                    name: 'telegram',
                    img: telegramIcon,
                    imgAlt: 'написать в телеграм космотех',
                    url: 'https://t.me/+79643637272',
                },
            ],
            fields: [
                {
                    id: 1,
                    title: 'Имя',
                    name: 'name',
                    type: 'text',
                    placeholder: 'Ваше Имя',
                    value: '',
                    valid: true
                },
                {
                    id: 2,
                    title: 'Телефон',
                    name: 'phone',
                    type: 'text',
                    placeholder: '8xxxxxxxxxx',
                    value: '',
                    valid: true
                }
            ],
        }
    }
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        mobileMenuActive(state, action) {
            const { status } = action.payload;
            state.mobileMenuActive = status;
        },
        submenuActive(state, action) {
            const { menuId, menuName, mobile } = action.payload;
            const findActiveMenu = state.mainMenu.menuItems.find((item) => item.id === menuId && item.name === menuName && item.submenu);
            if (findActiveMenu && findActiveMenu.id === menuId && findActiveMenu.name === menuName) {
                state.mainMenu.menuItems = state.mainMenu.menuItems.map((menuItem) => {
                    if (menuItem.id === menuId && menuItem.name === menuName && menuItem.submenu) {
                        return {
                            ...menuItem,
                            submenu: {
                                ...menuItem.submenu,
                                active: true
                            }
                        }
                    }
                    return menuItem;
                });
                return
            }
            state.mainMenu.menuItems = initialState.mainMenu.menuItems;
        },
        resetMenu(state) {
            state.mainMenu.menuItems = initialState.mainMenu.menuItems;
        },
        sidemenuActive(state, action) {
            const { menuId, status } = action.payload;
            state.sideMenu.menuItems = state.sideMenu.menuItems.map((menuItem) => {
                if (menuId === menuItem.id) {
                    return {
                        ...menuItem,
                        active: status
                    }
                }
                return {
                    ...menuItem,
                    active: false
                };
            });
        },
        sidemenuPopup(state, action) {
            const { status, popupType } = action.payload;
            switch (popupType) {
                case 'tz' : 
                    state.sideMenu.tzPopup = {
                        ... state.sideMenu.tzPopup,
                        active:  state.sideMenu.tzPopup.active ? false : true
                    }
                    break;
                case 'calc' : 
                    state.sideMenu.calcPopup = {
                        ... state.sideMenu.calcPopup,
                        active:  state.sideMenu.calcPopup.active ? false : true
                    }
                    break
                case 'contacts' :
                    !status ? state.sideMenu.contactsPopup = initialState.sideMenu.contactsPopup :
                        state.sideMenu.contactsPopup = {
                            ...state.sideMenu.contactsPopup,
                            active: state.sideMenu.contactsPopup.active ? false : true
                        } 
                    break
                default : break;
            }
        },
        sidemenuTzInnerPopup(state, action) {
            const { status, popupType } = action.payload;

            switch (popupType) {
                case 'customer':
                    state.sideMenu.tzPopup.customerPopup = {
                        ...state.sideMenu.tzPopup.customerPopup,
                        active: status
                    }
                    break;
                default : break;
            }
        },
        sidemenuPolicyCheckboxHandler(state, action) {
            const { formName } = action.payload;
            
            switch (formName) {
                case 'tz':
                    state.sideMenu.contactsPopup.checkboxActive = state.sideMenu.contactsPopup.checkboxActive ? false : true;
                    break;
                case 'consult':
                    state.sideMenu.contactsPopup.checkboxActive = state.sideMenu.contactsPopup.checkboxActive ? false : true;
                    break;
 
                default : break
            }
        },
        tzInnerPopupCustomerInput(state, action) {
            const { inputId, inputType, inputValue } = action.payload;
            let validValue = inputValue;
            let inputValid;
            state.sideMenu.tzPopup.customerPopup.fields = state.sideMenu.tzPopup.customerPopup.fields.map((fieldItem) => {
                if (fieldItem.id === inputId, fieldItem.name === inputType) {
                    return {
                        ...fieldItem,
                        value: validValue
                    }
                }
                return fieldItem;
            });
        },
        saveTzInnerPopup(state, action) {
            const { popupType } = action.payload;

            switch (popupType) {
                case 'customer':
                    state.sideMenu.tzPopup.resultData.customer = {
                        ...state.sideMenu.tzPopup.resultData.customer,
                        allFieldsValid: true,
                        companyName:  state.sideMenu.tzPopup.customerPopup.fields.find((item) => item.name === 'company').value,
                        customerName: state.sideMenu.tzPopup.customerPopup.fields.find((item) => item.name === 'city').value,
                        customerPhone: state.sideMenu.tzPopup.customerPopup.fields.find((item) => item.name === 'phone').value,
                        customerEmail: state.sideMenu.tzPopup.customerPopup.fields.find((item) => item.name === 'email').value,
                    }
                    state.sideMenu.tzPopup.customerPopup.active = false;
                    break;
                default : break;
            }
        },
        removeTzCustomerInfo(state) {
            state.sideMenu.tzPopup.resultData.customer = initialState.sideMenu.tzPopup.resultData.customer;
            state.sideMenu.tzPopup.customerPopup = initialState.sideMenu.tzPopup.customerPopup;
        },
        consultFormInput(state, action) {
            const { inputId, inputType, inputValue } = action.payload;
            let validValue = inputValue;
            let inputValid;
            if (inputType === 'name') {
                inputValid = validateName(inputValue)
                validValue = inputValue
            }
            else if (inputType === 'phone' && inputValue && inputValue.length !== 18) {
                const phoneStr = validatePhone(inputValue);
                inputValid = phoneStr.length === 18 ? true : false
                validValue = phoneStr;
            }
            state.sideMenu.contactsPopup.fields = state.sideMenu.contactsPopup.fields.map((fieldItem) => {
                if (inputId === fieldItem.id && inputType === fieldItem.name) {
                    return {
                        ...fieldItem,
                        value: validValue,
                        valid: inputValid
                    }
                }
                return fieldItem;
            });
        },
        consultFormClearInput(state, action) {
            const { inputId, inputType } = action.payload;
            state.sideMenu.contactsPopup.fields = state.sideMenu.contactsPopup.fields.map((fieldItem) => {
                if (inputId === fieldItem.id && inputType === fieldItem.name) {
                    return {
                        ...fieldItem,
                        value: '',
                        valid : false
                    }
                }
                return fieldItem;
            })
        },
        validateConsultForm(state) {
            const nameField = state.sideMenu.contactsPopup.fields.find((item) => item.name === 'name' && item.valid);
            const phoneField = state.sideMenu.contactsPopup.fields.find((item) => item.name === 'phone' && item.valid);
            const checkbox = state.sideMenu.contactsPopup.checkboxActive;
            if (checkbox && nameField && nameField.value && phoneField && phoneField.value) {
                state.sideMenu.contactsPopup.sendBtnActive = true;
                return;
            }
            state.sideMenu.contactsPopup.sendBtnActive = false;
        }
        
    }
});


export const {
    mobileMenuActive,
    submenuActive,
    resetMenu,
    sidemenuActive,
    sidemenuTzPopupOpen,
    sidemenuPopup,
    sidemenuTzInnerPopup,
    sidemenuPolicyCheckboxHandler,
    saveTzInnerPopup,
    tzInnerPopupCustomerInput,
    removeTzCustomerInfo,
    consultFormInput,
    consultFormClearInput,
    validateConsultForm,
} = menuSlice.actions;
export default menuSlice.reducer;