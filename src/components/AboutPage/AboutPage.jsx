import React from "react";
import promo_video from '../../video/compress_promo_video.mp4';
import aboutImg2 from '../../img/about_test2.jpg';
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import InnerPageConsultForm from "../InnerPageConsultForm/InnerPageConsultForm";

import { useSelector, useDispatch } from "react-redux";

const AboutPage = () => {
    const aboutState = useSelector((state) => state.innerPage.about);
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
                        {aboutState.companyFacts.map((companyFact) => {
                            return (
                                <React.Fragment key={companyFact.id}>
                                    <div className="about-company-fact-item-wrap">
                                        <div className="about-conpany-fact-icon-wrap"><img src={companyFact.image} alt={companyFact.name} /></div>
                                            <div className="about-conpany-fact-text">{companyFact.name}</div>
                                            <div className="about-conpany-fact-descr">{companyFact.description}</div>
                                        </div>
                                </React.Fragment>
                            )
                        })}
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
                <InnerPageConsultForm />
            </section>
            </div>
        </React.Fragment>
    )
};

export default AboutPage;