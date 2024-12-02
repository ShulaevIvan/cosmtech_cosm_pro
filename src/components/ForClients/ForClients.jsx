import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import { forClientsFaqShowDescription } from "../../redux/slices/innerPageSlice";
import supplerDemo from '../../img/supplersImages/suppler_demo.png';
import proteiLogo from '../../img/supplersImages/protei.svg';
import calculateLogo from '../../img/supplersImages/calculate.svg';
import upakovkaLogo from '../../img/supplersImages/upakovka24.svg';
import plasticKitLogo from '../../img/supplersImages/plasticKit.svg';
import vitaplastLogo from '../../img/supplersImages/vitaplast.svg';
import cosmopackLogo from '../../img/supplersImages/cosmopack.svg';
import okilsatoLogo from '../../img/supplersImages/okilsato.svg';
import stickylineLogo from '../../img/supplersImages/stickyline.png';
import mdmLogo from '../../img/supplersImages/mdm.png';
import rpkLogo from '../../img/supplersImages/rpkr.png';
import alaskaLogo from '../../img/supplersImages/alaska.jpg';
import gospodinLogo from '../../img/supplersImages/pechatnik.png';

const ForClients = () => {
    const forClientsState = useSelector((state) => state.innerPage.forClientsPage);
    const dispatch = useDispatch();

    const faqDescriptionHandler = (faqItem) => {
        dispatch(forClientsFaqShowDescription({faqId: faqItem.id}))
    };

    return (
        <React.Fragment>
            <InnerPageHeader />

            <div className="for-clients-main-wrap">
                <section>
                    <div className="container">
                        <h2>Проверенные поставщики</h2>
                        <div className="for-clients-main-suppliers-description-row">
                            <div className="for-clients-main-suppliers-description">
                                <p>
                                    Поможем наладить прямые связи с проверенными поставщиками, 
                                    чтобы вы могли сосредоточиться на своем бизнесе, оставаясь уверенными в качестве упаковки и дизайна для ваших продуктов.
                                </p>
                            </div>
                            <div className="for-clients-main-suppliers-consult-wrap">
                                <div className="for-clients-main-suppliers-consult-btn-wrap">
                                    <Link className="for-clients-main-suppliers-consult-btn">Консультация</Link>
                                </div>
                            </div>
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
                                            <div className="clients-supplier-item-head-logo"></div>
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
                                <div className="clients-suppliers-wrap">
                                    <div className="clients-supplier-item-wrap">
                                        <div className="clients-supplier-item-head">
                                            <div className="clients-supplier-item-head-city">Город</div>
                                            <div className="clients-supplier-item-head-phone">Телефон</div>
                                            <div className="clients-supplier-item-head-logo"></div>
                                        </div>
                                        <div className="clients-supplier-item-row">
                                            <div className="clients-supplier-item-description">
                                                Санкт-Петербург
                                                <Link to={'+78123275737'}>+7 (812) 327-57-37</Link>
                                            </div>
                                            <div className="clients-supplier-item-logo">
                                                <Link 
                                                    to={'https://okil.ru/en/contact.html'}
                                                    target={'_blank'}
                                                >
                                                    <img src={okilsatoLogo} alt="#" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="clients-supplier-item-row">
                                            <div className="clients-supplier-item-description">
                                                Санкт-Петербург
                                                <Link to={'+78123356630'}>+7 (812) 335-66-30</Link>
                                            </div>
                                            <div className="clients-supplier-item-logo">
                                                <Link 
                                                    to={'https://stickyline.ru/contacts/'}
                                                    target={'_blank'}
                                                >
                                                    <img src={stickylineLogo} alt="#" />
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="clients-supplier-item-row">
                                            <div className="clients-supplier-item-description">
                                                Москва
                                                <Link to={'+74952561000'}>+7 (495) 256-10-00</Link>
                                            </div>
                                            <div className="clients-supplier-item-logo">
                                                <Link 
                                                    to={'https://mdmprint.ru/contacts/'}
                                                    target={'_blank'}
                                                >
                                                    <img src={mdmLogo} alt="#" />
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="clients-supplier-item-row">
                                            <div className="clients-supplier-item-description">
                                                Санкт-Петербург
                                                <Link to={'+78129859448'}>+7 (812) 985-94-48</Link>
                                            </div>
                                            <div className="clients-supplier-item-logo">
                                                <Link 
                                                    to={'https://rpkgr.ru/kontakty/'}
                                                    target={'_blank'}
                                                >
                                                    <img src={rpkLogo} alt="#" />
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="clients-supplier-item-row">
                                            <div className="clients-supplier-item-description">
                                                Санкт-Петербург
                                                <Link to={'+78123803359'}>+7 (812) 380-33-59</Link>
                                            </div>
                                            <div className="clients-supplier-item-logo">
                                                <Link 
                                                    to={'https://www.alaskapof.ru/contacts/'}
                                                    target={'_blank'}
                                                >
                                                    <img src={alaskaLogo} alt="#" />
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="clients-supplier-item-row">
                                            <div className="clients-supplier-item-description">
                                                Санкт-Петербург
                                                <Link to={'+78127708090'}>+7 (812) 770-80-90</Link>
                                            </div>
                                            <div className="clients-supplier-item-logo">
                                                <Link 
                                                    to={'https://gospechatnik.ru/'}
                                                    target={'_blank'}
                                                >
                                                    <img src={gospodinLogo} alt="#" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <h2>Порядок работы</h2>
                        <div className="for-clients-howtowork-wrap">
                        <ol>
                            {forClientsState.howToWorkSteps.map((stepItem) => {
                                return (
                                    <React.Fragment key={stepItem.id}>
                                        <li>
                                            <p className="event-date">{stepItem.name}</p>
                                            <p className="event-description">{stepItem.description}</p>
                                        </li>
                                    </React.Fragment>
                                )
                            })}
                        </ol>
                        </div>
                    </div>
                   
                </section>
                <section>
                    <div className="container">
                        <h2>Часто задаваемые вопросы</h2>
                        <div className="forclients-faq-main-row">
                            {forClientsState.faqQuestions.map((faqItem) => {
                                return (
                                    <React.Fragment key={faqItem.id}>
                                        <div className={faqItem.active ? "for-clients-question-item-row active" : "for-clients-question-item-row"}>
                                            <div className="for-clients-question-title-wrap"><h4>{faqItem.ask}</h4></div>
                                            <div className="for-clients-question-btn-wrap">
                                                <span 
                                                    className={faqItem.active ? "for-clients-question-btn-more rotate-for-clients-question-btn-more" 
                                                        : "question-item-btn-more"
                                                    }
                                                    onClick={() => faqDescriptionHandler(faqItem)}
                                                ></span>
                                            </div>
                                            {faqItem.active ? 
                                                <div className={"for-clients-question-item-description"}>
                                                    asdasdasd
                                                </div>
                                            
                                            : null}
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
};

export default ForClients;