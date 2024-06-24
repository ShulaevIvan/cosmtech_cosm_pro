import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { mainOrderFormHappyState } from "../../redux/slices/mainPageSlice";

const MainPageOrderFormHappy = () => {
    const dispatch = useDispatch();
    const orderFormState = useSelector((state) => state.mainPage.orderForm);

    const happyStatePopupHanlder = (status) => {
        dispatch(mainOrderFormHappyState({status: status}));
    };

    return (
        <React.Fragment>
            <div className="main-order-form-happy-state-wrap">
                <div className="hero-order-form-popup-close-wrap">
                    <span 
                        className="close-popup-btn"
                        onClick={() => happyStatePopupHanlder(false)}
                    ></span>
                </div>
                <div className="main-order-form-happy-state-descr">
                    <p>{orderFormState.happyStateDescription}</p>
                </div>
            </div>
        </React.Fragment>
    )
};

export default MainPageOrderFormHappy;