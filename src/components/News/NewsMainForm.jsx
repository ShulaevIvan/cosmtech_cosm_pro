import React from "react";
import { Link } from "react-router-dom";

const NewsMainForm = (props) => {
    const newsState = props.newsState;

    return (
        <React.Fragment>
            <div className="news-company-form-wrap">
                <h3>Обратная связь</h3>
                <form className="news-company-form">
                    {newsState.newsFormMainFields.map((formItem) => {
                        return (
                            <React.Fragment key={formItem.id}>
                                <label htmlFor={`news-item-id-${formItem.id}`}>{formItem.title}</label>
                                <div className="news-company-form-item-wrap">
                                    {formItem.type === 'textarea' ? 
                                        <textarea
                                            ref={props.findInputRef(formItem.fieldType)}
                                            onChange={() => props.inputHandler(
                                                formItem.id,
                                                formItem.fieldType,
                                                props.findInputRef(formItem.fieldType).current
                                            )}
                                            id={`news-item-id-${formItem.id}`}
                                            type="textarea"
                                            value={formItem.value} 
                                            placeholder={formItem.placeholder} 
                                        ></textarea>
                                    : null}
                    
                                    {formItem.type === 'text' ? 
                                        <input
                                            ref={props.findInputRef(formItem.fieldType)}
                                            onChange={() => props.inputHandler(
                                                formItem.id,
                                                formItem.fieldType,
                                                props.findInputRef(formItem.fieldType).current
                                            )}
                                            id={`news-item-id-${formItem.id}`} 
                                            type="text"
                                            value={formItem.value} 
                                            placeholder={formItem.placeholder} 
                                        />
                                    : null}
                                </div>
                            </React.Fragment>
                        )
                    })}
                    <div className="news-company-form-send-btn-wrap">
                        <Link 
                            className={`news-company-form-send-btn ${!newsState.newsFormMainSendBtnActive ? 'btnDisabled' : ''}`}
                        >Отправить</Link>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
};

export default NewsMainForm;