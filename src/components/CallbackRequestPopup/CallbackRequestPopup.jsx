import React from "react";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import OrderFormHappyMsg from "../OrderFormHappyMsg/OrderFormHappyMsg";
import sendMetrik from "../../functions/sendMetrik";
import { 
    callbackPolicy, 
    callbackValidatePhone, 
    callbackSendBtn, 
    clearCallbackInput,
    fetchCallbackThunk
} from "../../redux/slices/headerSlice";


const CallbackRequestPopup = (props) => {
    const dispatch = useDispatch();
    const callbackState = props.callbackState;
    const phoneRef = useRef(null);
    const policyRef = useRef(null);
    const popupWrapperRef = useRef(null);
    const closePopupBtnRef = useRef(null);
    
    const callbackCheckboxHandler = (status) => {
        dispatch(callbackPolicy({status: status}));
    };

    const callbackInputHandler = () => {
        dispatch(callbackValidatePhone({ inputValue: phoneRef.current.value}));
    };

    const clearInputHandler = (e) => {
        if (e.key === 'Backspace') {
            if (callbackState.checkboxPolicyActive) policyRef.current.click();
            phoneRef.current.value = '';
            dispatch(clearCallbackInput());
        }
    };

    const sendCallbackReq = () => {
        if (callbackState.callbackInputValid && callbackState.checkboxPolicyActive) {
            dispatch(fetchCallbackThunk({phone: callbackState.callbackInputValue}));
            sendMetrik('reachGoal','headerConsultRequest');
        }
    };

    const closePopupOutsideHandler = (e) => {
        if (popupWrapperRef.current && !popupWrapperRef.current.contains(e.target)) {
            closePopupBtnRef.current.click();
            return;
        }
    };

    useEffect(() => {
        if (!phoneRef.current.value) return;
        dispatch(callbackSendBtn());
    }, [
        phoneRef.current,
        callbackState.callbackInputValue,
        callbackState.checkboxPolicyActive, 
        callbackState.callbackInputValue
    ]);

    useEffect(() => {
        document.addEventListener('mousedown', closePopupOutsideHandler);
        return () => {
            document.removeEventListener('mousedown', closePopupOutsideHandler);
        };
    }, [popupWrapperRef]);

    return (
        <React.Fragment>
            <div className="callback-request-popup" ref={popupWrapperRef}>
                <div className="callback-request-popup-close">
                    <span 
                        ref={closePopupBtnRef}
                        className="close-popup-btn"
                        onClick={() => props.callbackPopupHander(false)}
                    ></span>
                </div>
                {callbackState.callbackHappyState ? <OrderFormHappyMsg happyMsg={callbackState.callbackHappyStateMsg} /> : null}
                {!callbackState.callbackHappyState ? 
                    <React.Fragment>
                        <div className="callback-request-popup-title">
                            <h3>Получить консультацию</h3>
                        </div>
                        <div className="callback-request-description">
                            <p>Отправьте запрос и мы перезвоним вам в течении 30 мин </p>
                        </div>
                        <div className="callback-request-popup-from-wrap">
                            <div className="callback-time-wrap">
                                <div className="callback-time-value"></div>
                            </div>
                            <form>
                                <div className="callback-request-inputs-row">
                                    <div className="callback-input-wrap">
                                        <div className="callback-input-title"><label htmlFor="callback-form-request-input-id">Телефон</label></div>
                                        <input
                                            id="callback-form-request-input-id" 
                                            className={callbackState.callbackInputValid ? "callback-input-phone" : "callback-input-phone input-err"}
                                            type="tel"
                                            ref={phoneRef}
                                            value={callbackState.callbackInputValue}
                                            onChange={callbackInputHandler}
                                            onKeyDown={clearInputHandler}
                                            placeholder="8 xxx xxx xx xx"
                                        />
                                    </div>
                                </div>
                                <div className="form-mode-checkbox-callback-wrap">
                                    <input id="checkbox-custom-hero-form-policy" className="checkbox-custom-hero-form-policy" type="checkbox" />
                                    <label
                                        ref={policyRef} 
                                        onClick={() => callbackCheckboxHandler(callbackState.checkboxPolicyActive ? false : true)}
                                        htmlFor="checkbox-custom-hero-form-policy"
                                    ></label>
                                    <span className="callback-policy-wrap">согласен с <Link target={'_blank'} to={'/about/policy'}>политикой конфидициальности</Link></span>
                                </div>
                            </form>
                            <div className="callback-from-btn-wrap">
                                <span
                                    onClick={sendCallbackReq}
                                    className={
                                    callbackState.callbackSendBtnStatus ? 
                                        "callback-send-btn" : "callback-send-btn btnDisabled"
                                    }
                                >Отправить</span>
                            </div>
                        </div>
                    </React.Fragment>
                : null}
                
            </div>
        </React.Fragment>
    )
};

export default CallbackRequestPopup;