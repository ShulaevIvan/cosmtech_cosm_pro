import React from "react";
import { Link } from "react-router-dom";
import NewsMainFormHappyState from "./NewsMainFormHappyState";

const NewsMainForm = (props) => {
    const newsState = props.newsState;

    return (
        <React.Fragment>
            <div className="news-company-form-wrap">
                {newsState.newsFormMainHappyState.active ? 
                    <NewsMainFormHappyState  
                        closeHandler={props.happyStateHandler} 
                        title={newsState.newsFormMainHappyState.title}
                        description={newsState.newsFormMainHappyState.description}
                    />
                : null}
               
                <form className="news-company-form">
                    <h3>Обратная связь</h3>
                    {newsState.newsFormMainFields.map((formItem) => {
                        return (
                            <React.Fragment key={formItem.id}>
                                <label htmlFor={`news-item-id-${formItem.id}`}>{formItem.title}</label>
                                <div className="news-company-form-item-wrap">
                                    {formItem.type === 'textarea' ? 
                                        <textarea
                                            className={!formItem.fieldValid ? 'input-err' : ''}
                                            ref={props.findInputRef(formItem.fieldType)}
                                            onKeyDown={(e) => props.clearInputHandler(e, formItem.id, formItem.fieldType, true)}
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
                                            className={!formItem.fieldValid ? 'input-err' : ''}
                                            ref={props.findInputRef(formItem.fieldType)}
                                            onKeyDown={(e) => props.clearInputHandler(e, formItem.id, formItem.fieldType, true)}
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
                            onClick={props.sendFormHandler} 
                            className={`news-company-form-send-btn ${!newsState.newsFormMainSendBtnActive ? 'btnDisabled' : ''}`}
                        >Отправить</Link>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
};

export default NewsMainForm;