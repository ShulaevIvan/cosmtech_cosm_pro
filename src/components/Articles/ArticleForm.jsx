import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ArticleForm = () => {
    const dispatch = useDispatch();
    const articleState = useSelector((state) => state.articles);

    return (
        <React.Fragment>
            <section>
                <div className="article-inner-form-row">
                    <div className="article-inner-form-content">
                        <h3>Требуется помощь ?</h3>
                        <p>Заполните форму и получите ответ на свой вопрос по телефону или через мессаджер.</p>
                    </div>
                    <div className="article-inner-form-wrap">
                        <form className="article-inner-form">
                            {articleState.articleForm.map((formItem) => {
                                return (
                                    <React.Fragment key={`article-inner-form-${formItem.id}`}>
                                        {formItem.inputType === 'fieldset' ? 
                                            <fieldset>
                                                <legend>{formItem.inputTitle}</legend>
                                                {formItem.radioButtons.map((radioItem) => {
                                                    return (
                                                        <React.Fragment key={`article-inner-form-contact-radio-${radioItem.id}`}>
                                                            <div className="article-inner-form-contact-radio">
                                                                <input 
                                                                    type={radioItem.inputType} 
                                                                    id={`article-inner-form-contact-radio-${radioItem.id}`}
                                                                    name={radioItem.radioGroup} 
                                                                    value={radioItem.value}
                                                                />
                                                                <label 
                                                                    htmlFor={`article-inner-form-contact-radio-${radioItem.id}`}
                                                                >
                                                                    {radioItem.inputTitle}
                                                                </label>
                                                            </div>
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </fieldset>
                                        
                                        : 
                                            <div className="article-inner-form-input">
                                                {formItem.inputType === 'textarea' ? 
                                                    <React.Fragment>
                                                        <label htmlFor={`article-inner-form-${formItem.id}`}>{formItem.inputTitle}</label>
                                                        <textarea 
                                                            id={`article-inner-form-${formItem.id}`}
                                                            placeholder={formItem.placeholder}
                                                        ></textarea>

                                                    </React.Fragment>
                                                : 
                                                   <React.Fragment>
                                                        <label htmlFor={`article-inner-form-${formItem.id}`}>{formItem.inputTitle}</label>
                                                        <input 
                                                            id={`article-inner-form-${formItem.id}`} 
                                                            type={formItem.inputType}
                                                            placeholder={formItem.placeholder} 
                                                        />
                                                   </React.Fragment>
                                                
                                                }
                                                
                                            </div>
                                        }
                                        
                                    </React.Fragment>
                                )
                            })}
                            {/* <div className="article-inner-form-input">
                                <label>Имя</label>
                                <input type="text" />
                            </div>
                            <div className="article-inner-form-input">
                                <label>Телефон</label>
                                <input type="tel" />
                            </div>
                            <div className="article-inner-form-input">
                                <fieldset>
                                    <legend>Способ связи:</legend>
                                    <div className="article-inner-form-contact-radio">
                                        <input type="radio" id="acticle-contact-phone" name="acticle-contact-radio" value="phone" />
                                        <label htmlFor="acticle-contact-phone">Телефон</label>
                                    </div>
                                    <div className="article-inner-form-contact-radio">
                                        <input type="radio" id="acticle-contact-wp" name="acticle-contact-radio" value="wp" />
                                        <label htmlFor="acticle-contact-wp">Whatsapp</label>
                                    </div>
                                    <div className="article-inner-form-contact-radio">
                                        <input type="radio" id="acticle-contact-tg" name="acticle-contact-radio" value="tg" />
                                        <label htmlFor="acticle-contact-tg">Telegram</label>
                                    </div>

                                    
                                </fieldset>
                            </div>
                            <div className="article-inner-form-input">
                                <label>Вопрос</label>
                                <textarea></textarea>
                            </div> */}
                        </form>
                        <div className="article-inner-form-send-btn-wrap">
                            <Link className="article-inner-form-send-btn">Отправить</Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default ArticleForm;