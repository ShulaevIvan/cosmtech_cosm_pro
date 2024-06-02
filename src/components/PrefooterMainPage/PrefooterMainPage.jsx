import React from "react";

const PrefooterMainPage = () => {
    return (
        <React.Fragment>
            <section className="prefooter-order-section">
                <div className="prefooter-order-form-wrap">
                    <div className="prefooter-order-form-background">
                        <div className="prefooter-form-wrap">
                   
                            <form className="prefooter-form">
                                <div className="prefooter-from-title">
                                    <h3>Быстрый способ уточнить детали</h3>
                                </div>
                                <label>Имя</label>
                                <input type="text" />
                                <label>Телефон</label>
                                <input type="text" />
                                <label>Email</label>
                                <input type="text" />
                                <label>Город</label>
                                <input type="text" />
                                <label>Сообщение</label>
                                <textarea></textarea>
                                <div className="prefooter-form-checkbox-row">
                                    <div className="prefooter-checkbox-wrap">
                                        <input type="checkbox" id="custom-checkbox" className="checkbox-custom" />
                                        <label htmlFor="custom-checkbox"></label>
                                    </div>
                                    <div className="prefooter-form-checkbox-text">
                                        <p>Рыбатекст используется дизайнерами, 
                                            проектировщиками и фронтендерами, 
                                            когда нужно быстро заполнить макеты или прототипы содержимым
                                        </p>
                                    </div>
                            
                                </div>
                                <div className="prefooter-form-btn-wrap">
                                    <span className="prefooter-order-form-btn">Отправить</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default PrefooterMainPage;