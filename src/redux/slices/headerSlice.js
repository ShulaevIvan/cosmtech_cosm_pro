import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { 
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
            name: 'Контрактное производство в Санкт-Петербурге',
            path: '/',
            title: 'test',
            description: 'Контрактное производство',
        },
        {
            id: 2,
            name: 'Услуги косметическое производство',
            path: '/services',
            title: 'test',
            description: 'Контрактное производство',
        },
        {
            id: 3,
            name: 'О компании ООО Косметические Технологии',
            path: '/about',
            title: 'test',
            description: 'Контрактное производство',
        },
        {
            id: 4,
            name: 'Контакты ООО Косметические Технологии',
            path: '/contacts',
            title: 'test',
            description: 'Контрактное производство',
        },
        {
            id: 5,
            name: 'Политика конфиденциальности Косметические Технологии',
            path: '/about/policy',
            title: 'test',
            description: 'Контрактное производство',
        }
    ],
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
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchCallbackThunk.pending, (state) => {
            state.loadingStatus = 'loading';
            state.error = null;
          })
          .addCase(fetchCallbackThunk.fulfilled, (state, action) => {
            console.log(action.payload)
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
} = headerSlice.actions;
export default headerSlice.reducer;