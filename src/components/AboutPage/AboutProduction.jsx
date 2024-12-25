import React from "react";
import aboutImg2 from '../../img/about_test2.jpg';
import { Link } from "react-router-dom";

const AboutProduction = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="about-page-production-row">
                    <div className="about-page-short-content-wrap">
                        <img src={aboutImg2} alt="о компании Косметические технологии в Санкт-Петербурге" />
                    </div>
                    <div className="about-page-large-content-wrap">
                        <h3>Пару слов о компании</h3>
                        <p>ООО Космотех занимается производством косметики на заказ, предоставляя клиентам возможность создавать продукты, 
                            соответствующие их индивидуальным предпочтениям и требованиям.
                        </p>
                        <p>
                            Мы постоянно следим за новыми трендами, что позволяет нам 
                            расширять ассортимент и разрабатывать новые формулы, соответствующие самым высоким требованиям. 
                        </p>
                        <p>
                            Вся продукция проходит строгий контроль качества, что снижает вероятность появления брака. 
                            Кроме того, мы используем безопасные ингредиенты и не проводим тестирование на животных.</p>
                        <p>
                            Благодарим вас за доверие к нашей компании и готовы предложить вам только лучшее!
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default AboutProduction;