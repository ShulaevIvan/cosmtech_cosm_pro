import React from "react";

const TzPopup = (props) => {
    const tzState = props.tzState;

    return (
        <React.Fragment>
            <div className="sticky-sidemenu-tz-background">
            <div className="sticky-sidemenu-tz-popup-wrap">
                <div className="sticky-sidemenu-tz-popup-close-btn-wrap">
                    <span 
                        className="sticky-sidemenu-tz-popup-close-btn"
                        onClick={() => props.closeHandler(false, 'tz')}
                    ></span>
                </div>
                <div className="sticky-sidemenu-tz-popup-body">
                    <div className="sticky-sidemenu-tz-title-wrap">
                        <h2>Заполнить тз онлайн</h2>
                    </div>
                    <div className="sticky-sidemenu-tz-form-customer-row">
                        <div className="sticky-sidemenu-tz-form-customer-wrap">
                            <h3>Сведения о заказчике:</h3>
                            {tzState.customerPopup.allFieldsValid ? 
                                <React.Fragment>
                                    <div className="sticky-sidemenu-tz-form-customer-info-item">
                                        <div className="sticky-sidemenu-tz-form-customer-info-item-value">ООО Тест</div>
                                        <div className="sticky-sidemenu-tz-form-customer-info-item-control">
                                            <span className="sticky-sidemenu-tz-edit-btn"></span>
                                            <span className="sticky-sidemenu-tz-remove-btn"></span>
                                        </div>
                                    </div>
                                </React.Fragment>

                            : null}
                            <div className="sticky-sidemenu-tz-form-customer-info-item">
                                <div className="sticky-sidemenu-tz-form-customer-info-item-value">......</div>
                                <div className="sticky-sidemenu-tz-form-customer-info-item-control">
                                    <span className="sticky-sidemenu-tz-add-btn"></span>
                                    <span className="sticky-sidemenu-tz-remove-btn"></span>
                                </div>
                            </div>
                        </div>
                        <div className="sticky-sidemenu-tz-form-product-type-wrap">
                            <h3>Тип продукта</h3>
                            <div className="sticky-sidemenu-tz-form">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
};

export default TzPopup;