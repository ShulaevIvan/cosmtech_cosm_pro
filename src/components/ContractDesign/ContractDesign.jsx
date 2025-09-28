import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { 
    serviceFormBtnActive,
    serviceFormPopupActive
} from "../../redux/slices/designPageSlice";
import contractDesign from '../../img/contractDesign/test.jpg';
import supportIcon from '../../img/contractDesign/support.svg';
import expIcon from '../../img/contractDesign/exp.svg';
import firmsIcon from '../../img/contractDesign/firms.svg';

import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import ContractDesignPopup from "./ContractDesignPopup";
import ContractDesignPortfolio from "./ContractDesignPortfolio";

const ContractDesign = () => {
    const designState = useSelector((state) => state.design);
    const dispatch = useDispatch();

    const designServiceFormHandler = (serviceId, status=false) => {
        dispatch(serviceFormBtnActive({ serviceId: serviceId, hide: status }));
    };

    const servicePopupFormHandler = (serviceId) => {
        dispatch(serviceFormPopupActive({ serviceId: serviceId }));
    };


    return (
        <React.Fragment>
            <InnerPageHeader />
            <div className="inner-page-main-wrapper">
                <section>
                    <div className="container">
                        <div className="contract-design-text-row">
                            <div className="contract-design-image-wrap">
                                <img src={contractDesign} alt="test" />
                            </div>
                            <div className="contract-design-text-wrap">
                                <h3>Упаковка косметики под ключ</h3>
                                <p>Если вы ищете надежного партнера, способного создать успешный образ вашего бренда и обеспечить полный цикл работ по дизайну косметических продуктов, обращайтесь к профессиональному дизайнеру упаковки с шестилетним опытом работы в сфере косметики и бытовой химии.</p>
                                <div className="contract-design-advantage-wrap">
                                    <div className="contract-design-advantage-items-wrap">
                                        <div className="contract-design-advantage-items-row">
                                            <div className="contract-design-advantage-item-icon-wrap">
                                                <img src={expIcon} alt="#" />
                                            </div>
                                            <div className="contract-design-advantage-item-description">
                                                <p>Опыт работы с более чем пятнадцатью брендами, включающими разработку сотен уникальных SKU  в федеральном ритейле. </p>
                                            </div>
                                        </div>
                                        <div className="contract-design-advantage-items-row">
                                            <div className="contract-design-advantage-item-icon-wrap">
                                                <img src={firmsIcon} alt="#" />
                                            </div>
                                            <div className="contract-design-advantage-item-description">
                                                <p>Обширные знания рынка и тенденции развития сферы. </p>
                                            </div>
                                        </div>
                                        <div className="contract-design-advantage-items-row">
                                            <div className="contract-design-advantage-item-icon-wrap">
                                                <img src={supportIcon} alt="#" />
                                            </div>
                                            <div className="contract-design-advantage-item-description">
                                                <p>Поддержу Вас на каждом этапе процесса, гарантируя своевременное выполнение заказа и высокий уровень исполнения. </p>
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
                        <div className="contract-design-what-we-do-row">
                            <div className="contract-design-what-we-do">
                                <div className="contract-design-what-we-do-title-wrap">
                                    <h3>Что делаем</h3>
                                </div>
                                <div className="contract-design-what-we-do-text-wrap">
                                    <p>Бриф и быстрый аудит ниши/конкурентов;</p>
                                    <p>Запуск бренда: фирменный стиль и логотип под ДНК продукта и целевую аудиторию;</p>
                                    <p>Дизайн упаковки: архитектура линейки, ключевые SKU, расширение ассортимента;</p>
                                    <p>Производство: подбор материалов и отделок, колор-менеджмент, взаимодействие с типографиями, сопровождение тиража.</p>
                                </div>
                            </div>
                            <div className="contract-design-what-you-get">
                                <div className="contract-design-what-we-do-title-wrap">
                                    <h3>Что получаете</h3>
                                </div>
                                <div className="contract-design-what-we-do-text-wrap">
                                    <p>Узнаваемый визуальный язык и цельную линейку;</p>
                                    <p>Дизайн, который ускоряет выход на полку и повышает конверсию;</p>
                                    <p>Файлы, принятые типографией;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="about-company-production-title-wrap">
                            <h2>Услуги по дизайну упаковки</h2>
                        </div>
                        <div className="design-main-services-row">
                            {designState.mainServices.map((serviceItem) => {
                                return (
                                    <React.Fragment key={serviceItem.id}>
                                        <div 
                                            className="design-main-services-item"
                                            onMouseEnter={
                                                !designState.mainServices.find((item) => item.orderForm.popupFormActive) ? 
                                                () => designServiceFormHandler(serviceItem.id) : null
                                            }
                                            onMouseLeave={
                                                !designState.mainServices.find((item) => item.orderForm.popupFormActive) ? 
                                                () => designServiceFormHandler(serviceItem.id, true) : null
                                            }
                                        >
                                            <div
                                                id={serviceItem.id}
                                                className="design-main-services-item-title-wrap"
                                            >
                                                <h3>{serviceItem.title}</h3>
                                            </div>
                                            <div className="design-main-services-item-img-wrap">
                                                <img src={serviceItem.bgImage.src} alt={serviceItem.bgImage.alt} />
                                            </div>
                                            {serviceItem.orderForm && serviceItem.orderForm.active ? 
                                                <React.Fragment>
                                                    <div className={`design-main-services-order-btn-wrap ${serviceItem.orderForm.active ? 'active' : ''}`}>
                                                        <a onClick={() => servicePopupFormHandler(serviceItem.id)}>Получить консультацию</a>
                                                    </div>
                                                </React.Fragment>
                                            : null}
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                        {designState.mainServices.find((item) => item.orderForm.popupFormActive) ? 
                            <ContractDesignPopup 
                                popupHandler={servicePopupFormHandler}
                                serviceItem={designState.mainServices.find((item) => item.orderForm.popupFormActive)}
                            /> 
                        : null}
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="about-company-production-title-wrap">
                            <h2>Примеры работ с описанием</h2>
                        </div>
                        <ContractDesignPortfolio />
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="design-fits-row">
                            <div className="design-fits-text-wrap">
                                <h3>Хотите представить свою продукцию миру ярко и профессионально?</h3>
                                <p>Опишите вашу задачу и дедлайны — я пришлю релевантное портфолио и предложу решение.</p>
                                <p>Могу встретиться с вами лично, если находитесь в Санкт-Петербурге, и/или созвонимся для оценки бюджета и таймлайна.</p>
                                <div className="design-fits-personal-contacts">
                                    <p>phone: +7 xxx xxx xx xx</p>
                                    <p>messages: +7 xxx xxx xx xx</p>
                                </div>
                            </div>
                            <div className="design-fits-form-wrap">
                                <form>
                                    <h3>Отправить запрос</h3>
                                    <div className="design-fits-form-input-wrap">
                                        <label>Имя</label>
                                        <input type="text" placeholder="input" />
                                    </div>
                                    <div className="design-fits-form-input-wrap">
                                        <label>Телефон</label>
                                        <input type="text" placeholder="input" />
                                    </div>
                                    <div className="design-fits-form-input-wrap">
                                        <label>Комментарий</label>
                                        <textarea id="test" placeholder="input" />
                                    </div>
                                    <div className="form-mode-for-clients-get-detail-checkbox">
                                        <input
                                            type="checkbox" 
                                            id="for-clients-get-detail-checkbox" className="for-clients-get-detail-checkbox"
                                        />
                                        <label
                                            htmlFor="for-clients-get-detail-checkbox"
                                        ></label>
                                        <span>согласен с <Link to={'/policy'}>политикой конфидициальности</Link></span>
                                    </div>
                                    <div className="popup-design-service-order-btn-wrap">
                                        <span className="popup-design-service-order-btn">Отправить</span>
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


export default ContractDesign;