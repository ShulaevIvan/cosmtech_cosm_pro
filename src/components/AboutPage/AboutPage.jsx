import React from "react";
import demo80Img from '../../img/80x80.png';
import demo500Img from '../../img/500x500.png';
import promo_video from '../../video/promo_video.mp4';
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
                            <div className="about-conpany-fact-icon-wrap"><img src={demo80Img} alt="demo 80x80" /></div>
                            <div className="about-conpany-fact-text">50 %</div>
                            <div className="about-conpany-fact-descr">
                                Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров.
                            </div>
                        </div>
                        <div className="about-company-fact-item-wrap">
                            <div className="about-conpany-fact-icon-wrap"><img src={demo80Img} alt="demo 80x80" /></div>
                            <div className="about-conpany-fact-text">250000 m2</div>
                            <div className="about-conpany-fact-descr">
                                Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров.
                            </div>
                        </div>
                        <div className="about-company-fact-item-wrap">
                            <div className="about-conpany-fact-icon-wrap"><img src={demo80Img} alt="demo 80x80" /></div>
                            <div className="about-conpany-fact-text">2400+</div>
                            <div className="about-conpany-fact-descr">
                                Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров.
                            </div>
                        </div>
                        <div className="about-company-fact-item-wrap">
                            <div className="about-conpany-fact-icon-wrap"><img src={demo80Img} alt="demo 80x80" /></div>
                            <div className="about-conpany-fact-text">{'100 >'}</div>
                            <div className="about-conpany-fact-descr">
                                Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров.
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
                                <img src={demo500Img} alt="500" />
                            </div>
                            <div className="about-company-textcontent-texta-wrap">
                                <div className="about-company-description">
                                    <p>
                                        Ясность нашей позиции очевидна: 
                                        повышение уровня гражданского сознания в значительной степени обусловливает важность модели развития. 
                                        Задача организации, в особенности же повышение уровня гражданского сознания играет важную роль в 
                                        формировании системы массового участия. Также как глубокий уровень погружения 
                                        способствует повышению качества поэтапного и последовательного развития общества. 
                                        Учитывая ключевые сценарии поведения, выбранный нами инновационный путь 
                                        предполагает неза
                                    </p>
                                    <p>
                                        Есть над чем задуматься: многие известные личности, превозмогая сложившуюся непростую экономическую ситуацию, 
                                        ассоциативно распределены по отраслям. В своём стремлении повысить качество жизни, они забывают, 
                                        что сплочённость команды профессионалов влечет за собой процесс внедрения и модернизации форм воздействия. 
                                        Ясность нашей позиции очевидна: дальнейшее развитие различных форм деятельности обеспечивает актуальность 
                                        укрепления моральных ценностей. Прежде всего, синтетическое тестирование способствует повышению качества 
                                        поэтапного и последовательного развития общества. Разнообразный и богатый опыт говорит нам, что новая модель 
                                        организационной деятельности создаёт необходимость включения в производственный план целого ряда внеочередных 
                                        мероприятий с учётом комплекса дальнейших направлений развития. Но постоянное информационно-пропагандистское 
                                        обеспечение нашей деятельности позволяет оценить значение прогресса профессионального сообщества.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="about-company-textcontent-row">
                            <div className="about-company-textcontent-texta-wrap">
                                <div className="about-company-description">
                                    <p>В целом, конечно, экономическая повестка сегодняшнего дня позволяет выполнить важные задания по разработке благоприятных перспектив. 
                                        В своём стремлении улучшить пользовательский опыт мы упускаем, что некоторые особенности внутренней политики лишь добавляют 
                                        фракционных разногласий и подвергнуты целой серии независимых исследований. И нет сомнений, что стремящиеся вытеснить 
                                        традиционное производство, нанотехнологии будут описаны максимально подробно.
                                    </p>
                                    <p>
                                        А ещё предприниматели в сети интернет набирают популярность среди определенных слоев населения,
                                        а значит, должны быть заблокированы в рамках своих собственных рациональных ограничений. 
                                        Ясность нашей позиции очевидна: постоянное информационно-пропагандистское обеспечение нашей 
                                        деятельности способствует подготовке и реализации укрепления моральных ценностей. 
                                        Однозначно, реплицированные с зарубежных источников, современные исследования разоблачены. 
                                        Есть над чем задуматься: сторонники тоталитаризма в науке призывают нас к новым свершениям, которые, 
                                        в свою очередь, должны быть объективно рассмотрены соответствующими инстанциями. С 
                                        учётом сложившейся международной обстановки, базовый вектор развития, в своём классическом представлении, 
                                        допускает внедрение приоретизации разума над эмоциями. Внезапно, тщательные исследования конкурентов, 
                                        инициированные исключительно синтетически, смешаны с не уникальными данными до степени совершенной 
                                        неузнаваемости, из-за чего возрастает их статус бесполезности.
                                    </p>
                                </div>
                            </div>
                            <div className="about-company-textcontent-image-wrap">
                                <img src={demo500Img} alt="500" />
                            </div>
                        </div>
                        
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