import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ExcursionToProductionPopup from "./ExcursionToProductionPopup";
import { 
    excursionProductionPopup,
    excursionProductionPopupInput,
    excursionProductionPopupClearInput,
    excursionProductionPopupCheckbox,
    excursionPorductionPopupValidateForm
} from "../../redux/slices/innerPageSlice";


const ExcursionToProduction = () => {

    const excusionState = useSelector((state) => state.innerPage.productionExcuirsion);
    const dispatch = useDispatch();

    const popupHandler = () => {
        dispatch(excursionProductionPopup());
    };

    const popupInputHandler = (fieldItem, fieldItemRef) => {
        dispatch(excursionProductionPopupInput({
            fieldId: fieldItem.id, 
            fieldType: fieldItem.name, 
            fieldValue: fieldItemRef.value
        }));
    };

    const popupClearInput = (e, fieldId, fieldType) => {
        if (e.key === 'Backspace') {
            dispatch(excursionProductionPopupClearInput({fieldId: fieldId, fieldType: fieldType}));
            return;
        }
    };

    const popupCheckboxHandler = () => {
        dispatch(excursionProductionPopupCheckbox());
    };

    const popupSendFormHandler = () => {
        const sendData = {
            name: excusionState.popup.fields.find((item) => item.name === 'name' && item.valid).value,
            phone: excusionState.popup.fields.find((item) => item.name === 'phone' && item.valid).value,
            date: excusionState.popup.fields.find((item) => item.name === 'date' && item.valid).value,
            time: excusionState.popup.fields.find((item) => item.name === 'time' && item.valid).value
        };
        console.log(sendData)
    };

    useEffect(() => {
        dispatch(excursionPorductionPopupValidateForm());
    }, [excusionState.popup]);


    return (
        <React.Fragment>
            <div className="container">
                <div className="excursion-production-row">
                    {excusionState.popup.popupActive ? 
                        <ExcursionToProductionPopup
                            formState={excusionState.popup} 
                            popupHandler={popupHandler}
                            inputHandler={popupInputHandler}
                            clearInputHandler={popupClearInput}
                            checkboxHandler={popupCheckboxHandler}
                            sendFormHandler={popupSendFormHandler}
                        /> : null
                    }
                    <div className="excursion-production-text-wrap">
                        <h3>Экскурсия на производство</h3>
                        <p>
                            Приезжайте к нам на производство где вы получите возможность не только увидеть как мы работаем, но и задать вопросы нашим специалистам. 
                        </p>
                        <p>
                            Мы верим, что открытость и прозрачность — ключевые факторы в построении доверительных отношений с нашими клиентами и партнерами.
                        </p>
                    </div>
                    <div className="excursion-production-btn-wrap">
                        <Link 
                            className="excursion-production-btn"
                            onClick={popupHandler}
                        >Записаться на экскурсию</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ExcursionToProduction;