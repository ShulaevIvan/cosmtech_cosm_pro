import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

const initialState = {
    staticFilesPath: {
        prezentationFile: `${process.env.REACT_APP_BACKEND_URL}/static/media/cosmtech-prezentation.pdf`,
        tzFile: `${process.env.REACT_APP_BACKEND_URL}/static/media/tz_template.doc`,
    },
    callbackHeader: {
        loadStatus: false,
        callbackPopupActive: false,
        checkboxPolicyActive: false,
        callbackInputValue: '',
        callbackInputValid: true,
        callbackSendBtnStatus: false,
        callbackHappyState: false,
        callbackHappyStateMsg: '',
    },
    pageTitles: [
        {
            id: 1,
            name: 'Контрактное производство косметики в Санкт-Петербурге',
            path: '/',
            title: 'test',
            canonical: 'https://cosmtech.ru',
            description: 'Разработаем, произведем и упакуем по вашему запросу косметику в необходимых объемах. Стм и Контрактное Производство Косметики в Санкт-Петербурге.',
        },
        {
            id: 2,
            name: 'Производство косметики на заказ',
            path: '/services',
            title: 'test',
            canonical: 'https://cosmtech.ru/services',
            description: 'Все услуги компании ООО Косметические Технологии. Производство косметики на заказ от от 15 000 рублей. Услуги колсметической лаборатории.',
        },
        {
            id: 3,
            name: 'О компании ООО Косметические Технологии',
            path: '/about',
            title: 'test',
            canonical: 'https://cosmtech.ru/about',
            description: 'Подробная информация о российском производителе косметики ООО "Косметические Технологии"',
        },
        {
            id: 4,
            name: 'Контакты ООО Косметические Технологии',
            path: '/contacts',
            title: 'test',
            canonical: 'https://cosmtech.ru/contacts',
            description: 'Телефон, email, мессенджеры и адрес производства для надежной связи с компанией "Космотех"',
        },
        {
            id: 5,
            name: 'Политика конфиденциальности Косметические Технологии',
            path: '/policy',
            title: 'test',
            canonical: 'https://cosmtech.ru/policy',
            description: 'Политика в отношении обработки персональных данных ООО &quot;Косметические Технологии&quot;',
        },
        {
            id: 6,
            name: 'Работа в компании Косметические Технологии',
            path: '/job',
            title: 'test',
            canonical: 'https://cosmtech.ru/job',
            description: 'Вакансии в компании ООО &quot;Косметические Технологии&quot;',
        },
        {
            id: 7,
            name: 'Полезная информация для клиентов',
            path: '/forclients',
            title: 'test',
            canonical: 'https://cosmtech.ru/forclients',
            description: 'Информация для клиентов и дополнительные возможности по эффективному производству контрактной косметики"',
        }
    ],
    currentPathUrl: '',
    stickyHeader: {
        scrollPercent: 0,
        stickyActive: false,
    }
};

export const fetchCallbackThunk = createAsyncThunk(
    'api/callbackreq/',
    async (sendData) => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/callbackreq/`, {
            method:'POST',
            headers: {
                'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`,
                'Content-Type': 'application/json',
            },
            
            body: JSON.stringify({phone: sendData.phone, type: 'callback', time: '30min'})
        });
        const data = await response.json();

        return data;
    }
);


const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        callbackPopupShow(state, action) {
            const { status } = action.payload;
            state.callbackHeader.callbackPopupActive = status;
            state.callbackHeader.callbackHappyState = false;
            state.callbackHeader.callbackInputValid = true;
            state.callbackHeader.callbackInputValue = '';
            state.callbackHeader.checkboxPolicyActive = false;
            state.callbackHeader.callbackSendBtnStatus = false;
        },
        callbackPolicy(state, action) {
            const { status } = action.payload;
            state.callbackHeader.checkboxPolicyActive = status;
        },
        callbackValidatePhone(state, action) {
            let { inputValue } = action.payload;
            if (inputValue.length > 11 && state.callbackHeader.callbackInputValue) {
                state.callbackHeader.callbackInputValid = true;
                return;
            }
            //eslint-disable-next-line
            const pattern = /^[0-9]\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})([0-9]{2})$/;
            //eslint-disable-next-line
            const symPattern = /[`!@№#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]|\w|\s/g;
            const checkSevenPattern = /^7|^8/;

            if ((inputValue.length === 10) && !checkSevenPattern.test(inputValue)) inputValue = `8${inputValue}`;
            if (pattern.test(inputValue) && symPattern.test(inputValue)) {
                const resultValue = inputValue.replace(pattern, (all, group2, group3, group4, group5) => {
                    return `+7 (${group2}) ${group3}-${group4}-${group5}`
                });
                state.callbackHeader.callbackInputValue = resultValue;
                state.callbackHeader.callbackInputValid = true;
                return;
            }
            state.callbackHeader.callbackInputValue = inputValue;
            state.callbackHeader.callbackInputValid = false;
            
        },
        clearCallbackInput(state) {
            state.callbackHeader.callbackInputValue = '';
            state.callbackHeader.callbackInputValid = false;
            state.callbackHeader.callbackSendBtnStatus = false;
        },
        callbackSendBtn(state) {
            if (state.callbackHeader.callbackInputValid && state.callbackHeader.checkboxPolicyActive) {
                state.callbackHeader.callbackSendBtnStatus = true;
                return;
            }
            state.callbackHeader.callbackSendBtnStatus = false;
            return;
        },
        setPathUrl(state, action) {
            const { url } = action.payload;
            state.currentPathUrl = url;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchCallbackThunk.pending, (state) => {
            state.loadingStatus = 'loading';
            state.error = null;
          })
          .addCase(fetchCallbackThunk.fulfilled, (state, action) => {
            state.loadingStatus = 'ready';
            state.error = null;
            state.callbackHeader.callbackHappyState = true;
            state.callbackHeader.callbackHappyStateMsg = action.payload.description ? action.payload.description : '';
          })
      },
});


export const {
    callbackPopupShow,
    callbackPolicy,
    callbackValidatePhone,
    callbackSendBtn,
    clearCallbackInput,
    setPathUrl
} = headerSlice.actions;
export default headerSlice.reducer;