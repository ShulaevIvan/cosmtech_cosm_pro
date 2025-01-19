import React from "react";
import { Link } from "react-router-dom";

const DecorativeCosmeticsQuestForm = (props) => {
    const fromState = props.formState;

    return (
        <React.Fragment>
            <div className="container">
                <div className="decorative-cosmetics-consult-form-wrap">
                    <h3>Остались вопросы?</h3>
                    <p>Вы сможете задать их относительно наших услуг заполнив форму.</p>
                    <div className="decorative-cosmetics-consult-form">
                        {fromState.fields.map((fieldItem) => {
                            return (
                                <React.Fragment key={fieldItem.id}>
                                    <div className="decorative-cosmetics-consult-form-input-wrap">
                                        <div className="decorative-cosmetics-consult-form-input-wrap">
                                            <label htmlFor={`decorative-cosmetics-consult-form-input-${fieldItem.id}`}>
                                                {fieldItem.title}
                                            </label>
                                            <input
                                                id={`decorative-cosmetics-consult-form-input-${fieldItem.id}`} 
                                                type={fieldItem.type}
                                                placeholder={fieldItem.placeholder} 
                                            />
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                        <div className="decor-cosmetic-quest-from-checkbox-wrap">
                            <input
                                type="checkbox" 
                                id="decor-quest-from-checkbox" className="decor-cosmetic-quest-from-checkbox"
                            />
                            <label
                                htmlFor="decor-quest-from-checkbox"
                            ></label>
                            <span>согласен с <Link to={'/policy'}>политикой конфидициальности</Link></span>
                        </div>
                        <div className="decorative-cosmetics-consult-form-btn-wrap">
                            <span to={'#'} className="decorative-cosmetics-consult-form-btn">Отправить</span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default DecorativeCosmeticsQuestForm;