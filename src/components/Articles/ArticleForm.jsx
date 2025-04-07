import React from "react";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { 
    articleFormInput,
    validateArticleForm
} from "../../redux/slices/articlesSlice";

const ArticleForm = () => {
    const dispatch = useDispatch();
    const articleState = useSelector((state) => state.articles);
    const formRefs = [
        {name: 'name', ref: useRef(null)},
        {name: 'phone', ref: useRef(null)},
        {name: 'contactType', ref: useRef(null)},
        {name: 'comment', ref: useRef(null)},
    ];

    const findInputRef = (inputType) => {
        const targetRef = formRefs.find((item) => item.name === inputType);
        return targetRef.ref;
    };

    const articleFromInputHandler = (inputType, inputRef) => {
        if (inputType === 'contactType') {
            dispatch(articleFormInput({inputType: inputType, inputValue: inputRef.inputValue}));
            return;
        }
        dispatch(articleFormInput({inputType: inputType, inputValue: inputRef.value}));
    };

    const clearFormInputHandler = (e, inputType, inputRef) => {
        if (e && e.key === 'Backspace') {
            dispatch(articleFormInput({inputType: inputType, inputValue: ''}));

        }
    };

    const sendFormHandler = () => {
        const sendData = articleState.formSendData;
        console.log(sendData)
    };

    useEffect(() => {
        dispatch(validateArticleForm());
    }, [articleState.articleForm]);

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
                                                                    ref={findInputRef(formItem.inputName)}
                                                                    onChange={() => articleFromInputHandler(
                                                                        formItem.inputName, radioItem
                                                                    )} 
                                                                    type={radioItem.inputType} 
                                                                    id={`article-inner-form-contact-radio-${radioItem.id}`}
                                                                    name={radioItem.radioGroup} 
                                                                    value={radioItem.value}
                                                                    checked={radioItem.selected}
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
                                                            className={!formItem.valid ? 'input-err' : ''}
                                                            ref={findInputRef(formItem.inputName)}
                                                            onKeyDown={((e) => clearFormInputHandler(
                                                                e, formItem.inputName, findInputRef(formItem.inputName).current
                                                            ))}
                                                            onChange={() => articleFromInputHandler(
                                                                formItem.inputName, findInputRef(formItem.inputName).current
                                                            )} 
                                                            id={`article-inner-form-${formItem.id}`}
                                                            placeholder={formItem.placeholder}
                                                            value={formItem.inputValue}
                                                        ></textarea>

                                                    </React.Fragment>
                                                : 
                                                   <React.Fragment>
                                                        <label htmlFor={`article-inner-form-${formItem.id}`}>{formItem.inputTitle}</label>
                                                        <input
                                                            className={!formItem.valid ? 'input-err' : ''}
                                                            ref={findInputRef(formItem.inputName)}
                                                            onKeyDown={((e) => clearFormInputHandler(
                                                                e, formItem.inputName, findInputRef(formItem.inputName).current
                                                            ))}
                                                            onChange={() => articleFromInputHandler(
                                                                formItem.inputName, findInputRef(formItem.inputName).current
                                                            )} 
                                                            id={`article-inner-form-${formItem.id}`} 
                                                            type={formItem.inputType}
                                                            placeholder={formItem.placeholder}
                                                            value={formItem.inputValue} 
                                                        />
                                                   </React.Fragment>
                                                }
                                            </div>
                                        }
                                        
                                    </React.Fragment>
                                )
                            })}
                        </form>
                        <div className="article-inner-form-send-btn-wrap">
                            <Link 
                                className={articleState.sendBtnActive ? "article-inner-form-send-btn" : "article-inner-form-send-btn btnDisabled"}
                                onClick={sendFormHandler}
                            >Отправить</Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default ArticleForm;