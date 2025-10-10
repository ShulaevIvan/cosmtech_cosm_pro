import React from "react";
import { useEffect } from "react";
import ContractDesignHappyStatePopup from "./ContractDesignHappyStatePopup";
const ContractDesignPopup = (props) => {

    const serviceItem = props.serviceItem;
    const orderForm = serviceItem.orderForm;

    useEffect(() => {
        props.validateForm(serviceItem.id);
    }, [serviceItem.orderForm]);

    useEffect(() => {
        const targetService = orderForm.fields.find((item) => item.name === 'services');
        const selectedService = targetService.services.find((service) => service.selected);
        props.selectedServiceRef.current.value = selectedService.value;
    }, [props.selectedServiceRef.current]);

    return (
        <React.Fragment>
            <div className="popup-design-service-background-wrap">
                
                <div className="popup-design-service-wrap">
                    {props.happyStatePopup.active ? 
                        <ContractDesignHappyStatePopup 
                            closePopupHandler={props.happyStatePopupHandler}
                        /> 
                    : null}
                    <div className="sticky-sidemenu-tz-popup-close-btn-wrap">
                        <span 
                            className="sticky-sidemenu-tz-popup-close-btn"
                            onClick={() => props.popupHandler(serviceItem.id)}
                        ></span>
                    </div>
                    <div className="popup-design-service-body">
                        <form>
                            {orderForm.fields.map((formItem) => {
                                return (
                                    <React.Fragment key={`form-item-design-${formItem.id}`}>
                                        {formItem.type === 'options' ? 
                                            <React.Fragment>
                                                <label id="popup-design-service-input-services">Услуга</label>
                                                <div className="popup-design-service-select-wrap">
                                                    <select
                                                        ref={props.selectedServiceRef}
                                                        htmlFor={"popup-design-service-input-services"}
                                                        defaultValue={formItem.services.find((item) => item.selected).value}
                                                        onChange={() => props.inputHandler(
                                                            formItem.id, 
                                                            formItem.type, 
                                                            props.selectedServiceRef.current,
                                                            props.formId
                                                        )}
                                                    >
                                                        {formItem.services.map((optionItem) => {
                                                            return (
                                                                <React.Fragment key={optionItem.id}>
                                                                    <option 
                                                                        value={optionItem.value}
                                                                    >{optionItem.value}</option>
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </React.Fragment>
                                        
                                        : 
                                            <React.Fragment>
                                                <label htmlFor={`popup-design-service-input-${formItem.name}`}>{formItem.title}</label>
                                                <div className="popup-design-service-input-wrap">
                                                    <input
                                                        ref={props.findInputRef(formItem.name, props.inputRefs)}
                                                        className={!formItem.valid ? 'input-err' : null}
                                                        onChange={() => props.inputHandler(
                                                            formItem.id, 
                                                            formItem.name, 
                                                            props.findInputRef(formItem.name, props.inputRefs).current,
                                                            props.formId
                                                        )}
                                                        onKeyDown={(e) => props.clearInputHandler(
                                                            e,
                                                            formItem.id, 
                                                            formItem.name, 
                                                            props.selectedServiceRef.current,
                                                            props.formId
                                                        )}
                                                        id={`popup-design-service-input-${formItem.name}`}
                                                        type={formItem.type} 
                                                        value={formItem.value}
                                                        placeholder={formItem.placeholder}
                                                    />
                                                </div>
                                            </React.Fragment>
                                        
                                        }
                                        
                                        
                                    </React.Fragment>
                                )
                            })}
                            <div className="popup-design-service-checkbox-wrap">
                                <div className="form-mode-checkbox">
                                    <input type="checkbox" id="popup-service-design-service-policy" className="popup-service-design-service-policy" />
                                    <label 
                                        htmlFor="popup-service-design-service-policy"
                                        onClick={() => props.policyHandler(serviceItem.id)}
                                    ></label>
                                    <span>согласен с <a href="/policy">политикой конфидициальности</a></span>
                                </div>
                            </div>
                        </form>
                        <div className="popup-design-service-order-btn-wrap">
                            <span 
                                className={`popup-design-service-order-btn ${!props.designState.orderServiceForm.sendBtnActive ? 'btnDisabled' : ''}`}
                                onClick={props.sendFormHandler}
                            >Отправить</span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ContractDesignPopup;