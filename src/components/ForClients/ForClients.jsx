import React from "react";
import { Link } from "react-router-dom";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import supplerDemo from '../../img/supplersImages/suppler_demo.png';
import proteiLogo from '../../img/supplersImages/protei.svg';
import calculateLogo from '../../img/supplersImages/calculate.svg';
import upakovkaLogo from '../../img/supplersImages/upakovka24.svg';
import plasticKitLogo from '../../img/supplersImages/plasticKit.svg';
import vitaplastLogo from '../../img/supplersImages/vitaplast.svg';
import cosmopackLogo from '../../img/supplersImages/cosmopack.svg';

const ForClients = () => {
    return (
        <React.Fragment>
            <InnerPageHeader />

            <div className="for-clients-main-wrap">
                <section>
                    <div className="container">
                        <h2>Проверенные поставщики</h2>
                        <div className="for-clients-main-suppliers-description">
                            <p>Рыбатекст используется дизайнерами, 
                                проектировщиками и фронтендерами, 
                                когда нужно быстро заполнить макеты или прототипы содержимым. 
                                Это тестовый контент, который не должен нести никакого смысла, 
                                лишь показать наличие самого текста или продемонстрировать типографику в деле.
                            </p>
                        </div>
                        <div className="for-clients-main-suppliers-row">
                            <div className="for-clients-suppliers-item">
                                <div className="for-clients-supplier-main-title">
                                    <h3>Упаковка</h3>
                                </div>
                                <div className="clients-suppliers-wrap">
                                    <div className="clients-supplier-item-wrap">
                                        <div className="clients-supplier-item-head">
                                            <div className="clients-supplier-item-head-city">Город</div>
                                            <div className="clients-supplier-item-head-phone">Телефон</div>
                                            <div className="clients-supplier-item-head-logo">Сайт</div>
                                        </div>
                                        <div className="clients-supplier-item-row">
                                            <div className="clients-supplier-item-description">
                                                 Москва
                                                <Link to={"tel:+74992838818"}>+7 (499) 283-88-18</Link>
                                            </div>
                                            <div className="clients-supplier-item-logo">
                                                <Link 
                                                    to={'https://www.cosmopack.ru/kontakty'}
                                                    target={'_blank'}
                                                >
                                                    <img src={cosmopackLogo} alt="#" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clients-supplier-item-wrap">
                                        <div className="clients-supplier-item-row">
                                            <div className="clients-supplier-item-description">
                                                Москва
                                                <Link to={"tel:88005008942"}>8 (800) 500-89-42</Link>
                                            </div>
                                            <div className="clients-supplier-item-logo">
                                                <Link 
                                                    to={'https://upakovka24.com/contacts/'}
                                                    target={'_blank'}
                                                >
                                                    <img src={upakovkaLogo} alt="#" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clients-supplier-item-wrap">
                                        <div className="clients-supplier-item-row">
                                            <div className="clients-supplier-item-description">
                                                 Санкт-Петербург
                                                <Link to={"tel:+78126330110"}>+7 (812) 633-01-10</Link>
                                            </div>
                                            <div className="clients-supplier-item-logo">
                                                <Link 
                                                    to={'https://www.calculate.ru/contacts'}
                                                    target={'_blank'}
                                                >
                                                    <img src={calculateLogo} alt="#" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clients-supplier-item-wrap">
                                        <div className="clients-supplier-item-row">
                                            <div className="clients-supplier-item-description">
                                                Санкт-Петербург
                                                <Link to={'tel:+78126027818'}>+7 (812) 602-78-18</Link>
                                            </div>
                                            <div className="clients-supplier-item-logo">
                                                <Link 
                                                    to={'https://plastic-kit.ru/kontakty'} 
                                                    target={'_blank'}
                                                >
                                                    <img src={plasticKitLogo} alt="#" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clients-supplier-item-wrap">
                                        <div className="clients-supplier-item-row">
                                            <div className="clients-supplier-item-description">
                                                Москва
                                                <Link href="+74959792288">+7 (495) 979-22-88</Link>
                                            </div>
                                            <div className="clients-supplier-item-logo">
                                                <Link 
                                                    to={'https://vitaplastpack.ru/contacts'}
                                                    target={'_blank'}
                                                >
                                                    <img src={vitaplastLogo} alt="#" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clients-supplier-item-wrap">
                                        <div className="clients-supplier-item-row">
                                            <div className="clients-supplier-item-description">
                                                Санкт-Петербург
                                                <Link to={'88003013774'}>8 (800) 301-37-74</Link>
                                            </div>
                                            <div className="clients-supplier-item-logo">
                                                <Link 
                                                    to={'https://zavodprotey.ru/contacts'}
                                                    target={'_blank'}
                                                >
                                                    <img src={proteiLogo} alt="#" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="for-clients-suppliers-item">
                                <div className="for-clients-supplier-main-title">
                                    <h3>Дизайн</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <h2>Обратная связь</h2>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <h2>Порядок работы</h2>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <h2>Вопросы по услугам и доставке</h2>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <h2>Шаблоны</h2>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
};

export default ForClients;