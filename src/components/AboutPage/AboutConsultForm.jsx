import React from "react";

const AboutConsultForm = () => {
    return (
        <React.Fragment>
            <div className="about-production-consult-popup-background">
                <div className="about-production-consult-popup-wrap">
                    <h4>Получить консультацию по производству</h4>
                    <div className="about-production-form-wrap">
                        <div className="about-production-consult-form-row">
                            <div className="about-production-consult-form-item">
                                <label>Имя</label>
                                <div className="about-production-form-input-wrap">
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="about-production-consult-form-item">
                                <label>Телефон</label>
                                <div className="about-production-form-input-wrap">
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="about-production-form-textarea-wrap">
                            <label>Комментарий</label>
                            <textarea></textarea>
                        </div>
                        <div className="about-production-checkbox-wrap">
                            <div className="form-mode-about-production-checkbox">
                                <input type="checkbox" id="about-production-checkbox" className="about-production-checkbox" />
                                <label for="fabout-production-checkbox"></label>
                                <span>согласен с <a href="/policy">политикой конфидициальности</a></span>
                            </div>
                        </div>
                        <div className="about-production-send-btn-wrap">
                            <a className="about-production-send-btn">Отправить</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
};

export default AboutConsultForm;