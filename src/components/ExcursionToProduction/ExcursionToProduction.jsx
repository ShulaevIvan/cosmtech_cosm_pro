import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { excursionProductionPopup } from "../../redux/slices/innerPageSlice";

import ExcursionToProductionPopup from "./ExcursionToProductionPopup";

const ExcursionToProduction = () => {

    const excusionState = useSelector((state) => state.innerPage.productionExcuirsion);
    const dispatch = useDispatch();

    const popupHandler = () => {
        dispatch(excursionProductionPopup());
    };

    const popupInputHandler = (fieldItem, fieldItemValue) => {
        console.log(fieldItem)
        console.log(fieldItemValue)
    };


    return (
        <React.Fragment>
            <div className="container">
                <div className="excursion-production-row">
                    {excusionState.popup.popupActive ? 
                        <ExcursionToProductionPopup
                            formState={excusionState.popup} 
                            popupHandler={popupHandler}
                            inputHandler={popupInputHandler}
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