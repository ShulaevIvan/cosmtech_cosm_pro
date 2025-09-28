import React from "react";

const ContractDesignPopup = (props) => {

    const serviceItem = props.serviceItem;
    const orderForm = serviceItem.orderForm;
    console.log(serviceItem)
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
                                                <label id="popup-design-service-input-email">Услуга</label>
                                                <div className="popup-design-service-select-wrap">
                                                    <select>
                                                        {formItem.services.map((optionItem) => {
                                                            return (
                                                                <React.Fragment key={optionItem.id}>
                                                                    <option>{optionItem.title}</option>
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </React.Fragment>
                                        
                                        : 
                                            <React.Fragment>
                                                <label htmlFor="popup-design-service-input-name">{formItem.title}</label>
                                                <div className="popup-design-service-input-wrap">
                                                    <input type="text" placeholder="test" id="popup-design-service-input-name" />
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