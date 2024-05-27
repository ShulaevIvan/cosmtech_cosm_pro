import React from "react";

const MainPageOrderForm = () => {
    return (
        <React.Fragment>
            <div class="hero-order-form-popup-wrap">
                <div class="hero-order-form-popup-close-wrap">
                    <span class="close-popup-btn"></span>
                </div>
                <div class="hero-order-form-wrap">
                    <form class="hero-order-form">
                        <div class="hero-order-form-mode-wrap">
                            <div class="form-mode-checkbox">
                                <input type="checkbox" id="checkbox-custom-hero-form" class="checkbox-custom-hero-form" />
                                <label for="checkbox-custom-hero-form"></label>
                                <span>Уточнить</span>
                            </div>
                        </div>
                        <div class="hero-order-additional-fields-wrap">
                            <div class="hero-order-form-options-wrap">
                                <div class="hero-order-form-options-title">Тип продукции</div>
                                <select name="hero">
                                    <option selected>Выберите</option>
                                    <option value="t1">Опция 1</option>
                                    <option value="t2">Опция 2</option>
                                    <option value="t3">Опция 3</option>
                                    <option value="t4">Опция 4</option>
                                </select>
                            </div>
                            <div class="hero-order-form-options-wrap">
                                <div class="hero-order-form-options-title">Требуются ли сопутствующие услуги?</div>
                                <select name="hero">
                                    <option selected>Выберите</option>
                                    <option value="t1">Опция 1</option>
                                    <option value="t2">Опция 2</option>
                                    <option value="t3">Опция 3</option>
                                    <option value="t4">Опция 4</option>
                                </select>
                            </div>
                            <div class="hero-order-form-options-wrap">
                                <div class="hero-order-form-options-title">Требуются ли сопутствующие услуги?</div>
                                <select name="hero">
                                    <option selected>Выберите</option>
                                    <option value="t1">Опция 1</option>
                                    <option value="t2">Опция 2</option>
                                    <option value="t3">Опция 3</option>
                                    <option value="t4">Опция 4</option>
                                </select>
                            </div>
    
                            <div class="hero-order-form-options-wrap">
                                <div class="hero-order-form-options-title">На какой бюджет вы рассчитываете?</div>
                                <select name="hero">
                                    <option selected>Выберите</option>
                                    <option value="t1">Опция 1</option>
                                    <option value="t2">Опция 2</option>
                                    <option value="t3">Опция 3</option>
                                    <option value="t4">Опция 4</option>
                                </select>
                            </div>
    
                            <div class="hero-order-form-options-wrap">
                                <div class="hero-order-form-options-title">Какое количество продукции планируете изготовить?</div>
                                <select name="hero">
                                    <option selected>Выберите</option>
                                    <option value="t1">Опция 1</option>
                                    <option value="t2">Опция 2</option>
                                    <option value="t3">Опция 3</option>
                                    <option value="t4">Опция 4</option>
                                </select>
                            </div>
                        </div>
                        <div class="hero-order-main-fields-wrap">
                            <div class="hero-order-main-fields-title-wrap">
                                <label>Имя</label>
                            </div>
                            <div class="hero-order-main-fields-input-wrap">
                                <input type="text" />
                            </div>
                            <div class="hero-order-main-fields-title-wrap">
                                <label>Телефон</label>
                            </div>
                            <div class="hero-order-main-fields-input-wrap">
                                <input type="tel" />
                            </div>
                            <div class="hero-order-main-fields-title-wrap">
                                <label>Email</label>
                            </div>
                            <div class="hero-order-main-fields-input-wrap">
                                <input type="email" />
                            </div>
                            <div class="hero-order-main-fields-title-wrap">
                                <label>Комментарий</label>
                            </div>
                            <div class="hero-order-main-fields-input-wrap">
                                <textarea></textarea>
                            </div>
                        </div>
                        <div class="hero-order-main-fields-checkbox-wrap">
                            <div class="form-mode-checkbox">
                                <input type="checkbox" id="checkbox-custom-hero-form-policy" class="checkbox-custom-hero-form-policy" />
                                <label for="checkbox-custom-hero-form-policy"></label>
                                <span>согласен с <a href="#">политикой конфидициальности</a></span>
                            </div>
                        </div>
                        <div class="hero-order-main-fields-send-btn-wrap">
                            <span class="hero-order-main-fields-send-btn">Отправить</span>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
};

export default MainPageOrderForm;