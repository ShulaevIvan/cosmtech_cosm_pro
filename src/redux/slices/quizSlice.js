import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import demoImg from '../../img/quizImages/200x275.png';
import quizCheckbox from '../../img/quizImages/quiz_checkbox.svg';
import quizCheckboxActive from '../../img/quizImages/quiz_checkbox-active.svg';

const initialState = {
    maxSteps: 5,
    currentStep: 1,
    showPrevStepBtn: false,
    nextBtnText: 'Следующий шаг',
    prevBtnText: 'К предыдущему шагу',
    qizSteps: [
        {
            id: 1,
            name: 'Тип продукта',
            stepTitle: 'Выберите продукт для изготовления',
            stepNum: 1,
            active: true,
            products: [
                { 
                    id: 1,
                    name: 'product description',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg
                },
                { 
                    id: 2,
                    name: 'product description',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg
                },
                { 
                    id: 3,
                    name: 'product description',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg
                },
                { 
                    id: 4,
                    name: 'product description',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg
                },
                { 
                    id: 5,
                    name: 'product description',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg
                },
                { 
                    id: 6,
                    name: 'product description',
                    description: '',
                    selected: false,
                    checkboxIconActive: quizCheckboxActive,
                    checkboxIconInactive: quizCheckbox,
                    image: demoImg
                }
            ]
        },
        {
            id: 2,
            name: 'Количество',
            stepTitle: 'Выберите продукт для изготовления',
            stepNum: 2,
            active: false,
        },
        {
            id: 3,
            name: 'Дополнительно',
            stepTitle: 'Выберите продукт для изготовления',
            stepNum: 3,
            active: false,
        },
        {
            id: 4,
            name: 'Доставка',
            stepTitle: 'Выберите продукт для изготовления',
            stepNum: 4,
            active: false,
        },
        {
            id: 5,
            name: 'Результат',
            stepTitle: 'Выберите продукт для изготовления',
            stepNum: 5,
            active: false,
        }
        
    ]
}

const qizSlice = createSlice({
    name: 'quizSlice',
    initialState,
    reducers: {
        testRed(state, action) {

        },
        nextStep(state, action) {
            const { stepParam } = action.payload;
            let nextStep;
            if (Math.sign(stepParam) === -1) {
                nextStep = state.qizSteps.find((quizItem) => quizItem.stepNum === state.currentStep - 1);
            }
            else if (Math.sign(stepParam) === 1) {
                nextStep = state.qizSteps.find((quizItem) => quizItem.stepNum === state.currentStep + 1);
            }

            if ((nextStep && nextStep.stepNum > state.maxSteps) || !nextStep) return;
            state.qizSteps.map((quizItem) => {
                if (quizItem.id === nextStep.id && quizItem.stepNum === nextStep.stepNum) {
                    state.currentStep = nextStep.stepNum;
                    return {...quizItem, active: true }
                }
                return {...quizItem, active: false };
            });

            if (Number(state.currentStep) - 1 !== 0) {
                state.showPrevStepBtn = true;
                return;
            }
            state.showPrevStepBtn = false;
        },
        selectProduct(state, action) {
            const { selectItem } = action.payload;
        }
    }
});

export const {
    nextStep
} = qizSlice.actions;
export default qizSlice.reducer;