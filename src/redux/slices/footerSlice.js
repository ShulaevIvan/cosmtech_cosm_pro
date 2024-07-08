import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import validateName from "../../functions/validateName";
import validatePhone from "../../functions/validatePhone";
import validateMail from "../../functions/validateMail";
import validateCity from "../../functions/validateCity";

const initialState = { 
    callbackPopupActive: false,
    preFooterForm: {
        inputs: [
            {
                id: 1,
                title: 'Имя',
                fieldType: 'name',
                type: 'text',
                fieldValue: '',
                placeholder: 'Имя',
                fieldValid: true,
            },
            {
                id: 2,
                title: 'Телефон',
                fieldType: 'phone',
                type: 'tel',
                fieldValue: '',
                placeholder: '8 xxx xxx-xx-xx',
                fieldValid: true,
            },
            {
                id: 3,
                title: 'Email',
                fieldType: 'email',
                type: 'email',
                fieldValue: '',
                placeholder: 'test@yandex.ru',
                fieldValid: true,
            },
            {
                id: 4,
                title: 'Город',
                fieldType: 'city',
                type: 'text',
                fieldValue: '',
                placeholder: 'Москва',
                fieldValid: true,
            },
            {
                id: 5,
                title: 'Сообщение',
                fieldType: 'comment',
                type: 'textarea',
                fieldValue: '',
                placeholder: 'Комментарий ...',
                fieldValid: true,
            }
        ],
        policyCheckboxStatus: true,
        allInputsValid: true,
    },
    footerFormCallbackValid: true,
    footerFormCallbackValue: '',
    footerFormHappyStateStatus: false,
    footerFormHappyStateDescription: '',
};

export const fetchFooterCallback = createAsyncThunk(
    'api/callbackreq/',
    async (sendData) => {
        console.log(sendData)
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

export const fetchFooterConsultReq = createAsyncThunk(
    'api/consultreq/',
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
)

const footerSlice = createSlice({
    name: 'footer',
    initialState,
    reducers: {
        goToTop(state, action) {

        },
        validatePrefooterForm(state, action) {
            const { fieldId, fieldType, fieldValue } = action.payload;
            if (fieldType === 'phone' && fieldValue.length > 18) return;
            let isValid = false;
            let phoneNumber;
            if (fieldType === 'name') isValid = validateName(fieldValue);
            else if (fieldType === 'phone') {
                phoneNumber = validatePhone(fieldValue);
                isValid = false;
                if (phoneNumber.length === 18) isValid = true;

                
            }
            else if (fieldType === 'email') isValid = !validateMail(fieldValue);
            else if (fieldType === 'city') isValid = (validateCity(fieldValue));
            else if (fieldType === 'comment') isValid = !/^\s|\s+/.test(fieldValue);

            state.preFooterForm.inputs = state.preFooterForm.inputs.map((fieldObj) => {
                if (fieldObj.id === fieldId && fieldObj.fieldType === fieldType) {
                    return {
                        ...fieldObj,
                        fieldValue: fieldType === 'phone' ? phoneNumber : fieldValue,
                        fieldValid: isValid,
                    }
                }
                return fieldObj;
            });
        },
        prefooterClearInput(state, action) {
            const { inputId, inputType, inputValue } = action.payload;
            state.preFooterForm.inputs = state.preFooterForm.inputs.map((fieldItem) => {
                if (inputId === fieldItem.id && inputType === fieldItem.fieldType) {
                    return {
                        ...fieldItem,
                        fieldValue: inputValue,
                    }
                }
                return fieldItem;
            })
        },
        prefooterFormCheckbox(state, action) {
            const { status } = action.payload;
            state.preFooterForm.policyCheckboxStatus = status;
        },
        validateFooterCallback(state, action) {
            const { inputValue } = action.payload;
            if (inputValue.length > 18) return;
            const phone = validatePhone(inputValue);
            if (phone.length < 18) {
                state.footerFormCallbackValue = phone;
                state.footerFormCallbackValid = false;
                return;
            }
            state.footerFormCallbackValue = phone;
            state.footerFormCallbackValid = true;
        },
        footerFormHappyState(state, action) {
            const { status } = action.payload;
            state.footerFormHappyStateStatus = status;
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchFooterCallback.pending, (state) => {
            state.loadingStatus = 'loading';
            state.error = null;
            state.preFooterForm = initialState.preFooterForm;
          })
          .addCase(fetchFooterCallback.fulfilled, (state, action) => {
            state.loadingStatus = 'ready';
            state.error = null;
            state.footerFormCallbackValue = '';
            state.footerFormCallbackValid = true;
          })
          .addCase(fetchFooterConsultReq.pending, (state) => {
            state.loadingStatus = 'loading';
            state.error = null;
            state.preFooterForm = initialState.preFooterForm;
          })
          .addCase(fetchFooterConsultReq.fulfilled, (state, action) => {
            const { message, description } = action.payload;
            console.log(description)
            state.loadingStatus = 'ready';
            state.error = null;
            state.footerFormHappyStateDescription = description;
            state.footerFormHappyStateStatus = true;
          })
    },
});


export const {
    goToTop,
    validatePrefooterForm,
    prefooterClearInput,
    prefooterFormCheckbox,
    validateFooterCallback,
    footerFormHappyState
} = footerSlice.actions;
export default footerSlice.reducer;