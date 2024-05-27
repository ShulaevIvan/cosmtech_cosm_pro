import React from "react";

const HeroMainPage = () => {
    return (
        <React.Fragment>
            <section class="hero-section">
                <div class="hero-img-wrap">
                    <div class="hero-img-main-title-wrap">
                        <h1>Контрактное Производство косметики в Санкт-Петербурге</h1>
                        <div class="hero-img-main-title-description">
                            <p>
                                Рыбатекст используется дизайнерами, 
                                проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. 
                                Это тестовый контент, который не должен нести 
                                никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.
                            </p>
                        </div>
                        <div class="hero-img-main-title-controls-wrap">
                            <div class="hero-img-action-button-wrap">
                                <span class="hero-img-action-button-main">Кальклулятор</span>
                            </div>
                            <div class="hero-img-action-button-wrap">
                                <span class="hero-img-action-button-main">Получить рассчет</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </React.Fragment>
    )
};

export default HeroMainPage;