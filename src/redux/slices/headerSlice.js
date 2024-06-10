import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    callbackHeader: {
        callbackPopupActive: false,
        checkboxPolicyActive: false,
        callbackInputValue: '',
        callbackInputValid: true,
        callbackSendBtnStatus: false,
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


const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        callbackPopupShow(state, action) {
            const { status } = action.payload;
            state.callbackHeader.callbackPopupActive = status;
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
            if (inputValue.length > 11 && state.callbackHeader.callbackInputValue) return;
            //eslint-disable-next-line
            const pattern = /^[0-9]\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})([0-9]{2})$/;
            //eslint-disable-next-line
            const symPattern = /[`!@№#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]|\w|\s/g;
            const checkSevenPattern = /^7/;

            if ((inputValue.length === 10) && !checkSevenPattern.test(inputValue)) inputValue = `8${inputValue}`;
            if (pattern.test(inputValue) && symPattern.test(inputValue)) {
                const resultValue = inputValue.replace(pattern, (all, group2, group3, group4, group5) => {
                    return `+7 (${group2}) ${group3}-${group4}-${group5}`
                });
                console.log(resultValue)
                state.callbackHeader.callbackInputValue = resultValue;
                state.callbackHeader.callbackInputValid = true;
                state.callbackHeader.checkboxPolicyActive = false;
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
        }
    }
});


export const {
    callbackPopupShow,
    callbackPolicy,
    callbackValidatePhone,
    callbackSendBtn,
    clearCallbackInput,
} = headerSlice.actions;
export default headerSlice.reducer;