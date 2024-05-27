import React from "react";

const PrefooterMainPage = () => {
    return (
        <React.Fragment>
            <section class="prefooter-order-section">
                <div class="prefooter-order-form-wrap">
                    <div class="prefooter-order-form-background">
                        <div class="prefooter-form-wrap">
                   
                            <form class="prefooter-form">
                                <div class="prefooter-from-title">
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
                                <div class="prefooter-form-checkbox-row">
                                    <div class="prefooter-checkbox-wrap">
                                        <input type="checkbox" id="custom-checkbox" class="checkbox-custom" />
                                        <label for="custom-checkbox"></label>
                                    </div>
                                    <div class="prefooter-form-checkbox-text">
                                        <p>Рыбатекст используется дизайнерами, 
                                            проектировщиками и фронтендерами, 
                                            когда нужно быстро заполнить макеты или прототипы содержимым
                                        </p>
                                    </div>
                            
                                </div>
                                <div class="prefooter-form-btn-wrap">
                                    <span class="prefooter-order-form-btn">Отправить</span>
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