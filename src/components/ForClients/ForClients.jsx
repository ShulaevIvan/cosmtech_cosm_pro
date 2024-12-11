import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { 
    forClientsFaqShowDescription, 
    getAvalibleSuppliers,
    getAvalibleSuppliersType,
    showForClientsConsultForm,
    forClientsConsultPolicyCheckbox,
    forClientsValidateConsultForm,
    forClientsConsultCheckForm,
    forClientsConsultClearInput,
    forClientsDetailsForm,
    forClientsDetailsValidateForm,
    forClientsDetailsPolicy,
    forClientsDetailsCheckForm,
    sendForClientsConsultForm,
    sendForClientsDetailsForm,
    forClientsHappyStatePopup
} from "../../redux/slices/innerPageSlice";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import ForClientsConsultForm from "./ForClientsConsultForm";
import ForClientsDetailsForm from "./ForClientsDetailsForm";
import ForClientsFormHappyState from "./ForClientsFromHappyState";


const ForClients = () => {
    const forClientsState = useSelector((state) => state.innerPage.forClientsPage);
    const staticFilesPath = useSelector((state) => state.header.staticFilesPath);
    console.log(staticFilesPath)
    const dispatch = useDispatch();

    const faqDescriptionHandler = (faqItem) => {
        dispatch(forClientsFaqShowDescription({faqId: faqItem.id}))
    };

    const consultPopupHandler = (status) => {
        dispatch(showForClientsConsultForm({status: status}));
    };

    const policyCheckboxHandler = () => {
        dispatch(forClientsConsultPolicyCheckbox());
    };

    const consultInputPopupHandler = (inputId, inputType, inputRef, clear=false) => {
        dispatch(forClientsValidateConsultForm({ 
            inputType: inputType, 
            inputValue: inputRef.value, 
            inputId: inputId,
            clear: clear
        }));
    };

    const consultInputClearPopupHandler = (e, inputType, inputId) => {
        if (e.key === 'Backspace' && inputType && inputId) {
            dispatch(forClientsConsultClearInput({inputType: inputType, inputId: inputId}));
            return;
        }
    };

    const sendConsultFormHandler = () => {
        const sendData = {
            name: forClientsState.consultForm.fields.find((item) => item.name === 'name').value,
            phone: forClientsState.consultForm.fields.find((item) => item.name === 'phone').value,
            requestType: 'suplconsult'
        };
        dispatch(sendForClientsConsultForm(sendData));
    };

    const detailsFormPopupHandler = (status) => {
        dispatch(forClientsDetailsForm({status: status}));
    };

    const detailsInputHandler = (inputId, inputName, inputRef) => {
        dispatch(forClientsDetailsValidateForm({
            inputId: inputId,
            inputName: inputName,
            inputValue: inputRef.value
        }));
    };

    const detailsCheckboxHandler = () => {
        dispatch(forClientsDetailsPolicy());
    };

    const sendDetailsFormHandler = () => {
        const sendData = {
            name: forClientsState.detailsForm.fields.find((item) => item.name === 'name').value,
            email: forClientsState.detailsForm.fields.find((item) => item.name === 'email').value,
            comment: forClientsState.detailsForm.fields.find((item) => item.name === 'comment').value,
            requestType: 'prodquestion'
        };
        dispatch(sendForClientsDetailsForm(sendData));
    };

    const forClientsHappyStateHandler = (status, happyStateType) => {
        dispatch(forClientsHappyStatePopup({status: status, happyStateType: happyStateType}));
    };

    useEffect(() => {
        dispatch(getAvalibleSuppliersType());
        dispatch(getAvalibleSuppliers());
    }, []);

    useEffect(() => {
        dispatch(forClientsConsultCheckForm());
    }, [forClientsState.consultForm]);

    useEffect(() => {
        dispatch(forClientsDetailsCheckForm());
    }, [forClientsState.detailsForm]);


    return (
        <React.Fragment>
            <InnerPageHeader />

            <div className="for-clients-main-wrap">
                <section>
                    {forClientsState.consultForm.active ? 
                        <ForClientsConsultForm
                            formState={forClientsState.consultForm}
                            popupHandler={consultPopupHandler}
                            policyHandler={policyCheckboxHandler}
                            inputHandler={consultInputPopupHandler}
                            clearInputHandler={consultInputClearPopupHandler}
                            sendFormHandler={sendConsultFormHandler}
                        /> 
                    : null}
                    {forClientsState.consultForm.happyState.active ? 
                        <ForClientsFormHappyState
                            happyStateType={'suplconsult'}
                            happyState={forClientsState.consultForm.happyState}
                            closeHandler={forClientsHappyStateHandler}
                        /> 
                    : null}
                    <div className="container">
                        <h2>Проверенные поставщики</h2>
                        <div className="for-clients-suppliers-logo-wrap">
                            <div className="for-clients-suppliers-logo-row">
                                {forClientsState.suppliersLogo.map((logoItem) => {
                                    return (
                                        <React.Fragment key={logoItem.id}>
                                            <div className="for-clients-suppliers-logo-item">
                                                <img src={logoItem.img} alt={logoItem.altName} />
                                            </div>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="for-clients-main-suppliers-description-row">
                            <div className="for-clients-main-suppliers-description">
                                <p>
                                    Поможем наладить прямые связи с проверенными поставщиками, 
                                    чтобы вы могли сосредоточиться на своем бизнесе, оставаясь уверенными в качестве упаковки и дизайна для ваших продуктов.
                                </p>
                            </div>
                            <div className="for-clients-main-suppliers-consult-wrap">
                                <div className="for-clients-main-suppliers-consult-btn-wrap">
                                    <Link 
                                        className="for-clients-main-suppliers-consult-btn"
                                        onClick={() => consultPopupHandler(true)}
                                    >Консультация</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="for-clients-main-suppliers-row">
                            {forClientsState.suppliersType ? forClientsState.suppliersType.map((supplierTypeItem) => {
                                return (
                                    <React.Fragment key={supplierTypeItem.id}>
                                        <div className="for-clients-suppliers-item">
                                            <div className="for-clients-supplier-main-title">
                                                <h3>{supplierTypeItem.name}</h3>
                                            </div>
                                            <div className="clients-suppliers-wrap">
                                                <div className="clients-supplier-item-head">
                                                    <div className="clients-supplier-item-head-city">Город</div>
                                                    <div className="clients-supplier-item-head-phone">Телефон</div>
                                                    <div className="clients-supplier-item-head-logo">Сайт</div>
                                                </div>
                                                {forClientsState.suppliers.filter((item) => item.type === supplierTypeItem.name).map((supplierItem) => {
                                                    return (
                                                        <React.Fragment key={supplierItem.id + Math.random()}>
                                                            <div className="clients-supplier-item-row">
                                                                <div className="clients-supplier-item-description">
                                                                    {supplierItem.city}
                                                                    <Link to={`tel:${supplierItem.phonelink}`}>{supplierItem.phone}</Link>
                                                                </div>
                                                                <div className="clients-supplier-item-logo">
                                                                    <Link 
                                                                        to={`${supplierItem.url}`}
                                                                        target={'_blank'}
                                                                    >
                                                                        {supplierItem.name}
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            }) : null}
                        </div>
                    </div>
                </section>

                <section>
                    {forClientsState.detailsForm.active ? 
                        <ForClientsDetailsForm 
                            formState={forClientsState.detailsForm}
                            popupHandler={detailsFormPopupHandler}
                            inputHandler={detailsInputHandler}
                            policyHandler={detailsCheckboxHandler}
                            sendFormHandler={sendDetailsFormHandler}
                        /> 
                    : null}
                     {forClientsState.detailsForm.happyState.active ? 
                        <ForClientsFormHappyState
                            happyStateType={'prodquestion'}
                            happyState={forClientsState.detailsForm.happyState}
                            closeHandler={forClientsHappyStateHandler}
                        /> 
                    : null}
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
                    <div className="for-clients-howtowork-send-consult-wrap">
                        <a
                            onClick={() => detailsFormPopupHandler(true)}
                            className="for-clients-not-found-tz-btn"
                        >Уточнить детали</a>
                    </div>
                   
                </section>
                <section>
                    <div className="container">
                        <div className="forclients-faq-main-row">
                            <h2>Ответы на часто задаваемые вопросы</h2>
                            {forClientsState.faqQuestions.map((faqItem) => {
                                return (
                                    <React.Fragment key={faqItem.id}>
                                        <div className={faqItem.active ? "for-clients-faq-accordion-item active" : "for-clients-faq-accordion-item"}>
                                            <div 
                                                className="for-clients-faq-accordion-item-title" 
                                                onClick={() => faqDescriptionHandler(faqItem)}
                                            >
                                                <h4>{faqItem.ask}</h4>
                                            </div>
                                            <div 
                                                className="for-clients-faq-accordion-item-btn-wrap"
                                                onClick={() => faqDescriptionHandler(faqItem)}
                                            >
                                                <span className={faqItem.active ? 
                                                    "for-clients-faq-accordion-item-btn active" : "for-clients-faq-accordion-item-btn"}
                                                ></span>
                                            </div>
                                            <div className={faqItem.active ? 
                                                'for-clients-faq-accordion-item-description active' : 'for-clients-faq-accordion-item-description'}>
                                                <p>{faqItem.ans}</p>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="for-clients-not-found-row">
                            <h2>Не нашли что искали ?</h2>
                            <div className="for-clients-not-found-description">
                                <p>
                                    Вы можете задать интересующий вас вопрос 
                                    в по телефону <Link to={'tel:78123630614'}>+7 (812) 363-06-14</Link>, 
                                    в 
                                    <Link to={'https://wa.me/+79643637272'} target={'_blank'}> whatsapp</Link> / 
                                    <Link to={'https://t.me/+79643637272'} target={'_blank'}> telegram</Link>,
                                     написать нам на электронную почту 
                                    <Link to={'mailto:pro@cosmtech.ru'} target={'_blank'}> pro@cosmtech.ru</Link> или 
                                    отправить техническое задание на нужную вам продукцию.
                                </p>
                                <div className="for-clients-not-found-tz-row">
                                    <div className="for-clients-not-found-btn-item">
                                        <div className="for-clients-not-found-tz-wrap">
                                            <Link 
                                                className="for-clients-not-found-tz-btn"
                                                to={staticFilesPath.prezentationFile}
                                                target={'_blank'}
                                                download={true}
                                            >Скачать презентацию</Link>
                                        </div>
                                    </div>
                                    <div className="for-clients-not-found-btn-item">
                                        <div className="for-clients-not-found-tz-wrap">
                                            <Link 
                                                className="for-clients-not-found-tz-btn"
                                                to={staticFilesPath.tzFile}
                                                target={'_blank'}
                                                download={true}
                                            >Скачать шаблон тз</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="for-clients-not-found-tz-wrap">
                                    <a className="for-clients-not-found-tz-btn">Скачать презентацию</a>
                                </div>
                                <div className="for-clients-not-found-tz-wrap">
                                    <a className="for-clients-not-found-tz-btn">Скачать шаблон тз</a>
                                </div> */}
                            </div>
                        </div>
                        
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
};

export default ForClients;