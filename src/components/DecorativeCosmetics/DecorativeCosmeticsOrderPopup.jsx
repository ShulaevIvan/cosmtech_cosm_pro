import React from "react";
import { Link } from "react-router-dom";

const DecorativeCosmeticsOrderPopup = (props) => {
    const popupState = props.popupState;
    return (
        <React.Fragment>
            <div className="decorative-cosmetic-order-popup-wrap">
                <div className="decorative-cosmetic-consult-popup-close-btn-wrap">
                    <span 
                        className="decorative-cosmetic-consult-popup-close-btn"
                        onClick={props.popupHandler}
                    ></span>
                </div>
                <div className="decorative-cosmetic-order-popup-body">
                    <div className="decorative-cosmetic-order-popup-title">
                        <h3>Запросить рассчет</h3>
                    </div>
                    <div className="decorative-cosmetic-order-form-wrap">
                        {popupState.fields.map((fieldItem) => {
                            return (
                                <React.Fragment key={fieldItem.id}>
                                    <div className="decorative-cosmetic-order-form-input-wrap">
                                        {fieldItem.name === 'comment' ? 
                                            <div className="decorative-cosmetic-order-form-input-wrap">
                                                <div className="decorative-cosmetic-order-form-input-title-wrap">
                                                    <label htmlFor={`decorative-cosmetic-order-form-input-${fieldItem.id}`}>{fieldItem.title}</label>
                                                </div>
                                                <textarea
                                                    id={`decorative-cosmetic-order-form-input-${fieldItem.id}`} 
                                                    placeholder={fieldItem.placeholder}
                                                ></textarea>
                                            </div>
                                        
                                        : 
                                            <React.Fragment>
                                                {fieldItem.type === 'file' ? 
                                                
                                                <div className="decorative-cosmetic-order-form-file-input">
                                                    <label className="input-file">
                                                        <span className="input-file-text" type="text"></span>
                                                        <input type="file" name="file" multiple={false} />
                                                        <span className="input-file-btn">Прикрепить ТЗ</span>
                                                    </label>
                                                </div>
                                                :
                                                    <React.Fragment>
                                                        <div className="decorative-cosmetic-order-form-input-title-wrap">
                                                            <label htmlFor={`decorative-cosmetic-order-form-input-${fieldItem.id}`}>{fieldItem.title}</label>
                                                        </div>
                                                        <input 
                                                            id={`decorative-cosmetic-order-form-input-${fieldItem.id}`}
                                                            type={fieldItem.type}
                                                            placeholder={fieldItem.placeholder}
                                                        />
                                                    </React.Fragment>
                                                }
                                                
                                            </React.Fragment>
                                            
                                        }
                                        
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                    <div className="form-mode-decor-cosmetic-get-consult-checkbox">
                        <input
                            type="checkbox" 
                            id="decor-cosmetic-consult-checkbox" className="decor-cosmetic-get-consult-checkbox"
                        />
                        <label
                            htmlFor="decor-cosmetic-consult-checkbox"
                        ></label>
                        <span>согласен с <Link to={'/policy'}>политикой конфидициальности</Link></span>
                    </div>
                    <div className="decorative-cosmetic-order-form-btn-wrap">
                        <a className="decorative-cosmetic-order-form-btn">Отправить</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default DecorativeCosmeticsOrderPopup;