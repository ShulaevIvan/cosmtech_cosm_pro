import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
import mobileHeaderTelegrmIcon from '../../img/mobileTelegramMenu.svg'
import mobileHeaderWhatsappIcon from '../../img/mobileWhatsappMenu.svg'
import tzIcon from '../../img/stickyMenu/tzIcon.svg';
import calcIcon from '../../img/stickyMenu/calculatorIcon.svg';
import communicationIcon from '../../img/stickyMenu/communication.svg';
import demo from '../../img/decoraticeCosmeticsImages/demo.png';

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
                type: 'contact',
                active: false
            },
        ],
        tzPopup: {
            active: false,
            customerPopup: {
                active: false,
                allFieldsValid: true,
                fields: [
                    {
                        id: 1,
                        title: 'Название компании (ООО ИП ФИЗ.лицо)',
                        name: 'comment',
                        type: 'text',
                        placeholder: 'Название компании',
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
            active: false
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
                case 'contact' :
                    state.sideMenu.contactsPopup = {
                        ...state.sideMenu.contactsPopup,
                        active: state.sideMenu.contactsPopup.active ? false : true
                    } 
                    break
                default : break;
            }
        }
    }
});


export const {
    mobileMenuActive,
    submenuActive,
    resetMenu,
    sidemenuActive,
    sidemenuTzPopupOpen,
    sidemenuPopup
} = menuSlice.actions;
export default menuSlice.reducer;