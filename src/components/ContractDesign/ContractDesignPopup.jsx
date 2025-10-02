import React from "react";
import { useEffect, useRef } from "react";

const ContractDesignPopup = (props) => {

    const serviceItem = props.serviceItem;
    const orderForm = serviceItem.orderForm;
    const selectedServiceRef = useRef('test');
    const inputRefs = [
        { id: 1, name: 'name', ref: useRef(null) },
        { id: 2, name: 'phone', ref: useRef(null) },
        { id: 3, name: 'services', ref: useRef(null) },
    ];
    const findInputRef = (inputType) => {
        console.log(inputRefs.find((item) => item.name === inputType).ref)
        return inputRefs.find((item) => item.name === inputType).ref;
    };

    useEffect(() => {
        const targetService = orderForm.fields.find((item) => item.name === 'services');
        const selectedService = targetService.services.find((service) => service.selected);
        selectedServiceRef.current.value = selectedService.value;
    }, [selectedServiceRef.current])

    return (
        <React.Fragment>
            <div className="popup-design-service-background-wrap">
                <div className="popup-design-service-wrap">
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
                                                        ref={selectedServiceRef}
                                                        htmlFor={"popup-design-service-input-services"}
                                                        defaultValue={formItem.services.find((item) => item.selected).value}
                                                        onChange={() => props.inputHandler(
                                                            formItem.id, 
                                                            formItem.type, 
                                                            selectedServiceRef.current,
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
                                                        ref={findInputRef(formItem.name)}
                                                        onChange={() => props.inputHandler(
                                                            formItem.id, 
                                                            formItem.name, 
                                                            findInputRef(formItem.name).current,
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
                                    <label htmlFor="popup-service-design-service-policy"></label>
                                    <span>согласен с <a href="/policy">политикой конфидициальности</a></span>
                                </div>
                            </div>
                        </form>
                        <div className="popup-design-service-order-btn-wrap">
                            <span className="popup-design-service-order-btn">Отправить</span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ContractDesignPopup;