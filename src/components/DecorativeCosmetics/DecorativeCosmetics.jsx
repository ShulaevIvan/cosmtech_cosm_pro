import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import ExcursionToProduction from "../ExcursionToProduction/ExcursionToProduction";
import DecorativeCosmeticsFaq from "./DecorativeCosmeticsFaq";
import DecorativeCosmeticsQuestForm from "./DecorativeCosmeticsQuestForm";
import DecorativeCosmeticsConsultPopup from "./DecorativeCosmeticsConsultPopup";
import DecorativeCosmeticsOrderPopup from "./DecorativeCosmeticsOrderPopup";
import PopupHappyState from "./PopupHappyState";
import fileToBase64 from "../../functions/fileToBase64";

import { 
    decorCosmConsultPopup,
    decorCosmOrderPopup,
    decorCosmFaqAction,
    decorCosmConsultPopupInput,
    decorCosmConsultPopupCheckbox,
    decorCosmConsultPopupValidate,
    decorCosmOrderPopupInput,
    decorCosmOrderClearInput,
    decorCosmOrderCheckbox,
    decorCosmOrderPopupValidate,
    decorCosmQuestionFormInput,
    decorCosmQuestionFormClearInput,
    decorCosmQuestionFormCheckbox,
    decorCosmQuestionFormValidate
} from "../../redux/slices/innerPageSlice";

import cosmeticTypesImg from '../../img/decoraticeCosmeticsImages/decorativeCosmeticType.jpg'
import decorativeCosmeticBrand from '../../img/decoraticeCosmeticsImages/decorativeStm.jpg'

const DecorativeCosmetics = () => {
    const decorativeCosmState = useSelector((state) => state.innerPage.decorativeCosmeticsPage);
    const dispatch = useDispatch();

    const decorCosmeticPopupHandler = () => {
        dispatch(decorCosmConsultPopup());
    };

    const decorCosmeticPopupOrderHandler = () => {
        dispatch(decorCosmOrderPopup());
    };

    const decorCosmeticFaqHandler = (faqId) => {
        dispatch(decorCosmFaqAction({faqId: faqId}));
    };

    const popupConsultInputHandler = (inputId, inputType, inputRef) => {
        dispatch(decorCosmConsultPopupInput({fieldId: inputId, fieldType: inputType, fieldValue: inputRef.value}));
    };

    const popupConsultClearInputHandler = (e, inputId, inputType) => {
        if (e.key === 'Backspace') {
            dispatch(decorCosmConsultPopupInput({fieldId: inputId, fieldType: '', fieldValue: ''}));
            return;
        }
    };

    const popupConsultCheckboxHandler = (status) => {
        dispatch(decorCosmConsultPopupCheckbox({status: status}));
    };

    const sendConsultPopupFormHandler = () => {
        const data = {
            name: decorativeCosmState.consultPopup.fields.find((item) => item.name === 'name').value,
            phone: decorativeCosmState.consultPopup.fields.find((item) => item.name === 'phone').value,
            email: decorativeCosmState.consultPopup.fields.find((item) => item.name === 'email').value
        };
    };

    const popupOrderInputHandler = async (fieldItem, fieldRef) => {
        if (fieldRef.files && fieldRef.files.length > 0) {
            await fileToBase64(fieldRef.files[0])
            .then((data) => {
                dispatch(decorCosmOrderPopupInput({
                    fieldId: fieldItem.id, 
                    fieldType: fieldItem.name,
                    fieldValue: data,
                }));
            })
            return;
        }
        dispatch(decorCosmOrderPopupInput({
            fieldId: fieldItem.id, 
            fieldType: fieldItem.name,
            fieldValue: fieldRef.value,
        }));
    };

    const popupOrderClearInputHandler = (e, fieldItemId, fieldItemType) => {
        if (e.key === 'Backspace') {
            dispatch(decorCosmOrderClearInput({
                fieldId: fieldItemId, 
                fieldType: fieldItemType,
                fieldValue: '',
            }));
        }
    };

    const popupOrderCheckboxHandler = () => {
        dispatch(decorCosmOrderCheckbox());
    };

    const sendOrderPopupFormHandler = () => {
        const data = {
            name: decorativeCosmState.orderPopup.fields.find((item) => item.name === 'name').value,
            phone: decorativeCosmState.orderPopup.fields.find((item) => item.name === 'phone').value,
            email: decorativeCosmState.orderPopup.fields.find((item) => item.name === 'email').value,
            comment: decorativeCosmState.orderPopup.fields.find((item) => item.name === 'comment').value,
            file: decorativeCosmState.orderPopup.fields.find((item) => item.name === 'file').fileData,
        };
        console.log(data);
    };

    const questFromInputHandler = (fieldId, fieldType, fieldRef) => {
        dispatch(decorCosmQuestionFormInput({
            fieldId: fieldId, 
            fieldType: fieldType, 
            fieldValue: fieldRef.value
        }));
    };

    const questFromClearInputHandler = (e, fieldId, fieldType) => {
        if (e.key === 'Backspace') {
            dispatch(decorCosmQuestionFormClearInput({
                fieldId: fieldId, 
                fieldType: fieldType, 
                fieldValue: ''
            }));
            return;
        }
    };

    const questFromCheckboxHandler = () => {
        dispatch(decorCosmQuestionFormCheckbox());
    };

    const sendQuestFormHandler = () => {
        const data = {
            name: decorativeCosmState.questionForm.fields.find((item) => item.name === 'name').value,
            phone: decorativeCosmState.questionForm.fields.find((item) => item.name === 'phone').value,
            email: decorativeCosmState.questionForm.fields.find((item) => item.name === 'email').value,
        };
        console.log(data);
    };
    

    useEffect(() => {
        dispatch(decorCosmConsultPopupValidate());
    }, [decorativeCosmState.consultPopup]);

    useEffect(() => {
        dispatch(decorCosmOrderPopupValidate());
    }, [decorativeCosmState.orderPopup]);

    useEffect(() => {
        dispatch(decorCosmQuestionFormValidate());
    }, [decorativeCosmState.questionForm]);

    return (
        <React.Fragment>
            <InnerPageHeader />
            <div className="inner-page-main-wrapper">
                <section>
                    <div className="container">
                        <div className="about-company-production-title-wrap">
                            <h2>Производимая декоративная косметика</h2>
                        </div>
                        <div className="decorative-cosmetics-types-row">
                            {decorativeCosmState.consultPopup.active ? 
                                <DecorativeCosmeticsConsultPopup
                                    popupState={decorativeCosmState.consultPopup}
                                    popupHandler={decorCosmeticPopupHandler}
                                    inputHandler={popupConsultInputHandler}
                                    clearInputHandler={popupConsultClearInputHandler}
                                    policyHandler={popupConsultCheckboxHandler}
                                    sendFormHandler={sendConsultPopupFormHandler}
                                />
                            : null}
                           
                            <div className="decorative-cosmetics-types-items-row">
                                {decorativeCosmState.cosmeticTypes.map((cosmeticItem) => {
                                    return (
                                        <React.Fragment key={cosmeticItem.id}>
                                            <div className="decorative-cosmetics-type-item-row">
                                                <div className="decorative-cosmetics-type-item-icon">
                                                    <img src={cosmeticItem.img} alt={cosmeticItem.imgAlt} />
                                                </div>
                                                <div className="decorative-cosmetics-type-item-text">
                                                    {cosmeticItem.name}
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                            <div className="decorative-cosmetics-types-image-wrap">
                                <div className="decorative-cosmetics-types-photo-wrap">
                                    <img src={cosmeticTypesImg} alt="Производимая декоративная косметика на производстве ООО Космотех" />
                                </div>
                                <div className="decorative-cosmetics-types-btn-wrap">
                                    <Link 
                                        to={'#'} 
                                        className="decorative-cosmetics-types-btn"
                                        onClick={() => decorCosmeticPopupHandler(true)}
                                    >Получить консультацию</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="about-company-production-title-wrap">
                            <h2>Косметика под вашим брендом</h2>
                        </div>
                        <div className="decorative-cosmetics-information-row">
                            {decorativeCosmState.orderPopup.active ? 
                                <DecorativeCosmeticsOrderPopup 
                                    popupState={decorativeCosmState.orderPopup}
                                    popupHandler={decorCosmeticPopupOrderHandler}
                                    inputHandler={popupOrderInputHandler}
                                    clearInputHandler={popupOrderClearInputHandler}
                                    policyHandler={popupOrderCheckboxHandler}
                                    sendFormHandler={sendOrderPopupFormHandler}
                                /> 
                            : null}
                           
                            <div className="decorative-cosmetics-information-text-wrap">
                                <p>
                                    Лаборатория "Космотех" предлагает услуги по созданию декоративной косметики под вашим брендом.
                                    Разработаем для вас новые или доработаем имеющиеся рецептуры. 
                                    
                                </p>
                            
                                <p>
                                    Специалисты компании помогут вам выбрать текстуру, цвет и аромат для вашей продукции, а также подберут упаковку у проверенных поставщиков.
                                </p>
                                <p>Для снижения ваших рисков вы можете заказать небольшую партию для тестирования рынка, 
                                минимальный объем заказа на производстве - 50 кг. Вы можете скачать и заполнить ТЗ, после чего отправить его нам удобным для вас способом или через форму.</p>
                                <p>Мы готовы ответить на любые вопросы по техпроцессу, выборе сырья, срокам, упаковке и доставке, 
                                    а также проконсультировать по вопросам реализации.
                                </p>
                                <div className="decorative-cosmetics-btns-row">
                                    <div className="decorative-cosmetics-btn-wrap">
                                        <Link 
                                            to={'#'} 
                                            className="decorative-cosmetics-btn"
                                            onClick={decorCosmeticPopupOrderHandler}
                                        >Запросить рассчет</Link>
                                    </div>
                                    <div className="decorative-cosmetics-btn-wrap">
                                        <Link to={'#'} className="decorative-cosmetics-btn">Скачать ТЗ</Link>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="decorative-cosmetics-information-image-wrap">
                                <img src={decorativeCosmeticBrand} alt="Контрактное производство декоративной косметики" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="about-company-production-title-wrap">
                            <h2>Порядок работы</h2>
                        </div>
                        <div className="decorative-cosmetics-how-to-work-row">
                            {decorativeCosmState.howToWorkIcons.map((iconItem) => {
                                return (
                                    <React.Fragment key={iconItem.id}>
                                        <div className="decorative-cosmetics-how-to-work-item-wrap">
                                            <div className="decorative-cosmetics-how-to-work-item-icon">
                                                <img src={iconItem.img} alt={iconItem.imgAlt} />
                                            </div>
                                            <div className="decorative-cosmetics-how-to-work-item-text">
                                                {iconItem.name}
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <section>
                    <ExcursionToProduction />
                </section>
                <section>
                    <div className="container">
                        <DecorativeCosmeticsFaq 
                            questions={decorativeCosmState.faqQuestions}
                            faqHandler={decorCosmeticFaqHandler}
                        />
                    </div>
                </section>
                <section>
                    <DecorativeCosmeticsQuestForm 
                        formState={decorativeCosmState.questionForm}
                        inputHandler={questFromInputHandler}
                        clearInputHandler={questFromClearInputHandler}
                        policyHandler={questFromCheckboxHandler}
                        sendFormHandler={sendQuestFormHandler}
                    />
                </section>
            </div>
            
        </React.Fragment>
    )
};

export default DecorativeCosmetics;