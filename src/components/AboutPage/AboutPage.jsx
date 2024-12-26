import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { sendAboutProductionConsultForm } from "../../redux/slices/innerPageSlice";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import InnerPageConsultForm from "../InnerPageConsultForm/InnerPageConsultForm";
import AboutVideoPrezentation from "./AboutVideoPrezentation";
import ProductionTypes from "./ProductionTypes";
import AboutProduction from "./AboutProduction";
import AboutConsultForm from './AboutConsultForm';
import AboutTabs from "./AboutTabs";
// import OurTeam from "./OurTeam";

import { 
    aboutTabs,
    abouProductionPopup,
    validateAboutProductionForm,
    aboutProductionPolicy,
    aboutProductionClearInput,
    checkAboutProductionSendBtn,
} from "../../redux/slices/innerPageSlice";


const AboutPage = () => {
    const aboutState = useSelector((state) => state.innerPage.about);
    const dispatch = useDispatch();
    
    const aboutTabHandler = (tabId) => {
        dispatch(aboutTabs({tabId: tabId}));
    };

    const aboutProdTypesPopupHandler = () => {
        dispatch(abouProductionPopup());
    };

    const aboutProdInputHandler = (inputType, inputRef) => {
        dispatch(validateAboutProductionForm({inputType: inputType, inputValue: inputRef.value}));
    };

    const aboutProdPolicyHandler = () => {
        dispatch(aboutProductionPolicy());
    };

    const aboutProdClearInputHandler = (e, fieldType) => {
        if (e.key === 'Backspace' && fieldType) {
            dispatch(aboutProductionClearInput({inputType: fieldType}));
        }
        return;
    };

    const aboutProdSendConsultHandler = () => {
        const data = {
            name: aboutState.aboutProduction.productionForm.fields.find((item) => item.fieldType === 'name').value,
            phone: aboutState.aboutProduction.productionForm.fields.find((item) => item.fieldType === 'phone').value,
            comment: aboutState.aboutProduction.productionForm.fields.find((item) => item.fieldType === 'comment').value,
        };
        dispatch(sendAboutProductionConsultForm(data));
    };

    useEffect(() => {
        dispatch(checkAboutProductionSendBtn());
    }, [aboutState.aboutProduction.productionForm]);

    return (
        <React.Fragment>
            <InnerPageHeader />
            <div className="inner-page-main-wrapper">
            <section>
                <div className="container">
                    <div className="about-title-wrap">
                        <h2>Косметические технологии в Цифрах</h2>
                    </div>
                    <div className="about-company-facts-row">
                        {aboutState.companyFacts.map((companyFact) => {
                            return (
                                <React.Fragment key={companyFact.id}>
                                    <div className="about-company-fact-item-wrap">
                                        <div className="about-conpany-fact-icon-wrap"><img src={companyFact.image} alt={companyFact.imgAlt} /></div>
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
                <AboutVideoPrezentation 
                    prezentationState={aboutState.videoPrezentation} 
                />
            </section>
            <section>
                {aboutState.aboutProduction.popupActive ? 
                    <AboutConsultForm 
                        popupHandler={aboutProdTypesPopupHandler}
                        inputHandler={aboutProdInputHandler}
                        policyHandler={aboutProdPolicyHandler}
                        clearInputHandler={aboutProdClearInputHandler}
                        sendFormHandler={aboutProdSendConsultHandler}
                        formState={aboutState.aboutProduction.productionForm}

                    /> : null}
                <ProductionTypes
                    popupHandler={aboutProdTypesPopupHandler} 
                    productionTypes={aboutState.aboutProduction.productionTypes}
                />
            </section>
            <section>
                <AboutProduction />
            </section>
            <section>
                <AboutTabs
                    tabs={aboutState.aboutTabs}
                    tabHandler={aboutTabHandler}
                />
            </section>
            <section>
                <InnerPageConsultForm />
            </section>
            </div>
        </React.Fragment>
    )
};

export default AboutPage;