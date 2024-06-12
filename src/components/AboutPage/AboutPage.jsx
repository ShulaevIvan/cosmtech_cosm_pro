import React from "react";
import demo80Img from '../../img/80x80.png';
import demo500Img from '../../img/500x500.png';
import promo_video from '../../video/compress_promo_video.mp4';
import aboutImg from '../../img/about_test.jpg';
import aboutImg2 from '../../img/about_test2.jpg';
import aboutIconPrize from '../../img/prize_cosm.svg';
import aboutIconProduction from '../../img/production_cosm.svg';
import ordersIcon from '../../img/orders.svg';
import labIcon from '../../img/lab_cosm.svg';
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";

const AboutPage = () => {
    return (
        <React.Fragment>
            <InnerPageHeader />
            <div className="inner-page-main-wrapper">
            <section>
                <div className="container">
                    <div className="about-title-wrap">
                        <h1>Косметические технологии в Цифрах</h1>
                    </div>
                    <div className="about-company-facts-row">
                        <div className="about-company-fact-item-wrap">
                            <div className="about-conpany-fact-icon-wrap"><img src={aboutIconPrize} alt="demo 80x80" /></div>
                            <div className="about-conpany-fact-text">100% </div>
                            <div className="about-conpany-fact-descr">
                                качество продукции полный цикл контроля качества, сертификаты ИСО 9001:2015 и 14001:2015
                            </div>
                        </div>
                        <div className="about-company-fact-item-wrap">
                            <div className="about-conpany-fact-icon-wrap"><img src={aboutIconProduction} alt="demo 80x80" /></div>
                            <div className="about-conpany-fact-text">1 МЛН</div>
                            <div className="about-conpany-fact-descr">
                                Мощности производства до 1 миллиона единиц продукции в сутки
                            </div>
                        </div>
                        <div className="about-company-fact-item-wrap">
                            <div className="about-conpany-fact-icon-wrap"><img src={ordersIcon} alt="demo 80x80" /></div>
                            <div className="about-conpany-fact-text">100+</div>
                            <div className="about-conpany-fact-descr">
                                Контактов и налаженные связи с лучшими мировыми поставщиками сырья и упаковки
                            </div>
                        </div>
                        <div className="about-company-fact-item-wrap">
                            <div className="about-conpany-fact-icon-wrap"><img src={labIcon} alt="demo 80x80" /></div>
                            <div className="about-conpany-fact-text">{'3 > лет'}</div>
                            <div className="about-conpany-fact-descr">
                                опыта в области разработки и реализации косметической продукции.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="about-title-wrap">
                        <h2>Видеопрезентация производства</h2>
                    </div>
                    <div className="about-company-video-wrap">
                        <video controls>
                            <source src={promo_video} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="about-company-textcontent-wrap">
                        <div className="container">
                            <div className="about-title-wrap">
                                <h1>Немного о Нас</h1>
                            </div>
                        </div>
                        
                        <div className="about-company-textcontent-row">
                            <div className="about-company-textcontent-image-wrap">
                                <img src={aboutImg2} alt="500" />
                            </div>
                            <div className="about-company-textcontent-texta-wrap">
                                <div className="about-company-description">
                                    <p>
                                        Здравствуйте! Вас приветствует компания ООО "Космотех". 
                                        Мы являемся производителем косметики с 2022 года. 
                                        Наша компания предлагает широкий ассортимент косметических продуктов высокого качества, разработанных с учетом последних тенденций в индустрии красоты. 
                                        В компании придерживаются высоких стандартов безопасности.
                                    </p>
                                    <p>Вся продукция проходит строгий контроль качества, что снижает вероятность появления брака. 
                                        Кроме того, компания Космотех использует безопасные ингредиенты и не проводит тестирование на животных.</p>
                                    <p>
                                        Мы понимаем, что время имеет решающее значение в индустрии красоты, поэтому наша эффективная система управления проектами и тесное сотрудничество с клиентами позволяют нам своевременно выполнять все заказы, независимо от их объема или сложности. 
                                        Мы также обеспечиваем гибкость в объемах производства, что позволяет нам удовлетворять потребности как крупного, так и малого бизнеса .
                                        Благодарим вас за доверие к нашей компании и готовы предложить вам только лучшее!
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="about-company-textcontent-row">
                            <div className="about-company-textcontent-texta-wrap">
                                <div className="about-company-description">
                                <p>
                                        Мы понимаем, что время имеет решающее значение в индустрии красоты, поэтому наша эффективная система управления проектами и тесное сотрудничество с клиентами позволяют нам своевременно выполнять все заказы, независимо от их объема или сложности. 
                                        Мы также обеспечиваем гибкость в объемах производства, что позволяет нам удовлетворять потребности как крупного, так и малого бизнеса .
                                        Благодарим вас за доверие к нашей компании и готовы предложить вам только лучшее!
                                        </p>
                                </div>
                            </div>
                            <div className="about-company-textcontent-image-wrap">
                                <img src={aboutImg2} alt="500" />
                            </div>
                        </div> */}
                        
                    </div>
                </div>
            </section>

            <section>
                <div className="inner-page-consult-form-wrap">
                    <div className="inner-page-form-background"></div>
                    <div className="inner-page-form-text">
                        <h3>Оставьте заявку для расчёта заказа</h3>
                        <div className="inner-page-form-description">
                            <p>Мы отправим образцы бла бла Рыбатекст используется дизайнерами, проектировщиками и фронтендерами</p>
                        </div>
                    </div>
                    <div className="inner-page-form-wrap">
                        
                        <div className="inner-page-form">
                            <form>
                               <div className="inner-page-form-row">
                                    <div className="inner-page-form-item">
                                        <label>Имя</label>
                                        <input type="text" />
                                    </div>
                                    <div className="inner-page-form-item">
                                        <label>Телефон</label>
                                        <input type="tel" />
                                    </div>
                                    <div className="inner-page-form-item">
                                        <label>Email</label>
                                        <input type="email" />
                                    </div>
                               </div>
                               <div className="inner-page-form-controls">
                                    <div className="inner-page-form-btn-wrap">
                                        <span className="inner-page-from-btn">Отправить</span>
                                    </div>
                               </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </React.Fragment>
    )
};

export default AboutPage;