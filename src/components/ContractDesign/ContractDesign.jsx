import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
    serviceFormBtnActive,
    serviceFormPopupActive,
    portfolioWorkCasePopup,
    designServiceFormInput,
    designServiceFormClearInput,
    designServicePolicy,
    designServiceValidateForm,
    designFormInput,
    designFormClearInput,
    designFormPolicy,
    designFormValidate
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

    const contractDesignFormInputRefs = [
        { id: 1, name: 'name', ref: useRef(null) },
        { id: 2, name: 'phone', ref: useRef(null) },
        { id: 3, name: 'services', ref: useRef(null) },
    ];
    const contractDesignConsultInputRefs = [
        { id: 1, name: 'name', ref: useRef(null) },
        { id: 2, name: 'phone', ref: useRef(null) },
        { id: 3, name: 'comment', ref: useRef(null) },
    ];
    const selectedServiceRef = useRef(null);

    const findInputRef = (inputType, inputRefs) => {
        return inputRefs.find((item) => item.name === inputType).ref;
    };

    const designServiceFormHandler = (serviceId, status=false) => {
        dispatch(serviceFormBtnActive({ serviceId: serviceId, hide: status }));
    };

    const servicePopupFormHandler = (serviceId) => {
        dispatch(serviceFormPopupActive({ serviceId: serviceId }));
    };

    const servicePopupFormInputHandler = (inputId, inputType, inputRef, formId) => {
        dispatch(designServiceFormInput({ inputId: inputId, inputType: inputType, inputValue: inputRef.value, formId}));
    };

    const servicePopupFormInputClear = (e, inputId, inputType, inputRef, formId) => {
        if (e.key === 'Backspace') {
            inputRef.value = '';
            dispatch(designServiceFormClearInput({ inputId: inputId, inputType: inputType, formId}));
        }
    };

    const servicePopupFormPolicyHandler = (formId) => {
        dispatch(designServicePolicy({ formId: formId}));
    };

    const servicePopupFormValidate = (formId) => {
        dispatch(designServiceValidateForm({formId : formId}));
    };

    const servicePopupFormSend = () => {
        const clientData = {
            clientName: designState.orderServiceForm.clientName.value,
            clientPhone: designState.orderServiceForm.clientPhone.value,
            service: selectedServiceRef.current.value,
        };
        console.log(clientData)
    };

    const designFormInputHandler = (inputId, inputType, inputRef) => {
        dispatch(designFormInput({ inputId: inputId, inputType: inputType, inputValue: inputRef.value}));
    };

    const designFormClearInputHandler = (e, inputId) => {
        if (e.key === 'Backspace') {
            dispatch(designFormClearInput({inputId: inputId}));
        }
    };

    const designFormPolicyHandler = () => {
        dispatch(designFormPolicy());
    };

    const sendDesignFormHandler = () => {
        const clientData = {
            clientName: designState.consultServiceForm.clientName,
            clientPhone: designState.consultServiceForm.clientPhone,
            clientComment: designState.consultServiceForm.clientComment,
        };
        console.log(clientData)
    };

    const portfolioPopupHandler = (portfolioId) => {
        dispatch(portfolioWorkCasePopup({portfolioId: portfolioId}));
    };

    useEffect(() => {
        dispatch(designFormValidate());
    }, [designState.consultServiceForm]);

    return (
        <React.Fragment>
            <InnerPageHeader />
            <div className="inner-page-main-wrapper">
                <section>
                    <div className="container">
                        <div className="contract-design-text-row">
                            <div className="contract-design-image-wrap">
                                <img src={contractDesign} alt="Услуги дизайна упаковки для косметики в Санкт-Петербурге" />
                            </div>
                            <div className="contract-design-text-wrap">
                                <h3>Разарботка дизайна упаковки под ключ</h3>
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
                                designState={designState}
                                serviceItem={designState.mainServices.find((item) => item.orderForm.popupFormActive)}
                                inputRefs={contractDesignFormInputRefs}
                                selectedServiceRef={selectedServiceRef}
                                findInputRef={findInputRef} 
                                popupHandler={servicePopupFormHandler}
                                inputHandler={servicePopupFormInputHandler}
                                clearInputHandler={servicePopupFormInputClear}
                                policyHandler={servicePopupFormPolicyHandler}
                                validateForm={servicePopupFormValidate}
                                sendFormHandler={servicePopupFormSend}
                                formId={designState.mainServices.find((item) => item.orderForm.popupFormActive).id}
                            /> 
                        : null}
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="about-company-production-title-wrap">
                            <h2>Примеры работ с описанием</h2>
                        </div>
                        <ContractDesignPortfolio
                            portfolioState={designState.portfolio} 
                            portfolioItems={designState.portfolio.portfolioItems}
                            portfolioInfoPopupHandler={portfolioPopupHandler}
                        />
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
                                    {designState.consultServiceForm.fields.map((fieldItem) => {
                                        return (
                                            <React.Fragment key={fieldItem.id}>
                                                <div className="design-fits-form-input-wrap">
                                                    <label>{fieldItem.title}</label>
                                                    {fieldItem.type === 'textarea' ? 
                                                        <textarea
                                                            ref={findInputRef(fieldItem.name, contractDesignConsultInputRefs)}
                                                            className={fieldItem.valid ? '' : 'input-err'}
                                                            onChange={() => designFormInputHandler(
                                                                fieldItem.id, 
                                                                fieldItem.name, 
                                                                findInputRef(fieldItem.name, contractDesignConsultInputRefs).current
                                                            )}
                                                            onKeyDown={(e) => designFormClearInputHandler(e, fieldItem.id)}
                                                            value={fieldItem.value}
                                                            placeholder={fieldItem.placeholder}
                                                        ></textarea>
                                                        
                                                    : 
                                                    <input
                                                        ref={findInputRef(fieldItem.name, contractDesignConsultInputRefs)}
                                                        className={fieldItem.valid ? '' : 'input-err'}
                                                        onChange={() => designFormInputHandler(
                                                            fieldItem.id, 
                                                            fieldItem.name, 
                                                            findInputRef(fieldItem.name, contractDesignConsultInputRefs).current
                                                        )}
                                                        onKeyDown={(e) => designFormClearInputHandler(e, fieldItem.id)}
                                                        type={fieldItem.type}
                                                        value={fieldItem.value} 
                                                        placeholder={fieldItem.placeholder}
                                                    />}
                                                </div>
                                            </React.Fragment>
                                        )
                                    })}
                                    <div className="form-mode-for-clients-get-detail-checkbox">
                                        <input
                                            type="checkbox" 
                                            id="for-clients-get-detail-checkbox" className="for-clients-get-detail-checkbox"
                                        />
                                        <label
                                            htmlFor="for-clients-get-detail-checkbox"
                                            onClick={designFormPolicyHandler}
                                        ></label>
                                        <span>согласен с <Link to={'/policy'}>политикой конфидициальности</Link></span>
                                    </div>
                                    <div className="popup-design-service-order-btn-wrap">
                                        <span 
                                            className={
                                                `popup-design-service-order-btn ${!designState.consultServiceForm.sendBtnActive ? 'btnDisabled': ''}`
                                            }
                                            onClick={sendDesignFormHandler}
                                        >Отправить</span>
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