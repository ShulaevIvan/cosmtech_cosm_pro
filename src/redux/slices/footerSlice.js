import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

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
                fieldValid: false,
            },
            {
                id: 2,
                title: 'Телефон',
                fieldType: 'phone',
                type: 'tel',
                fieldValue: '',
                fieldValid: false,
            },
            {
                id: 3,
                title: 'Email',
                fieldType: 'email',
                type: 'email',
                fieldValue: '',
                fieldValid: false,
            },
            {
                id: 4,
                title: 'Город',
                fieldType: 'city',
                type: 'text',
                fieldValue: '',
                fieldValid: false,
            },
            {
                id: 5,
                title: 'Сообщение',
                fieldType: 'comment',
                type: 'textarea',
                fieldValue: '',
                fieldValid: false,
            }
        ],
        allInputsValid: true,
    }
};

const footerSlice = createSlice({
    name: 'footer',
    initialState,
    reducers: {
        goToTop(state, action) {

        },
        validatePrefooterForm(state, action) {
            const { fieldId, fieldType, fieldValue } = action.payload;
            console.log(fieldType)
            if (fieldType === 'name') {
                console.log('test')
            }
        }
    }
});


export const {
    goToTop,
    validatePrefooterForm, 
} = footerSlice.actions;
export default footerSlice.reducer;