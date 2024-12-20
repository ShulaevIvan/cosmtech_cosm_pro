import React from "react";
import { useSelector, useDispatch } from "react-redux";

import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import InnerPageConsultForm from "../InnerPageConsultForm/InnerPageConsultForm";
import AboutVideoPrezentation from "./AboutVideoPrezentation";
import ProductionTypes from "./ProductionTypes";
import AboutProduction from "./AboutProduction";
import AboutTabs from "./AboutTabs";
import OurTeam from "./OurTeam";

import { 
    aboutTabs 
} from "../../redux/slices/innerPageSlice";


const AboutPage = () => {
    const aboutState = useSelector((state) => state.innerPage.about);
    const dispatch = useDispatch();
    
    const aboutTabHandler = (tabId) => {
        dispatch(aboutTabs({tabId: tabId}));
    };

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
                <AboutVideoPrezentation />
            </section>
            <section>
                <ProductionTypes />
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