import React from "react";
import aboutImg2 from '../../img/about_test2.jpg';
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import InnerPageConsultForm from "../InnerPageConsultForm/InnerPageConsultForm";
import AboutVideoPrezentation from "./AboutVideoPrezentation";
import ProductionTypes from "./ProductionTypes";
import AboutProduction from "./AboutProduction";
import OurTeam from "./OurTeam";

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
                <InnerPageConsultForm />
            </section>
            </div>
        </React.Fragment>
    )
};

export default AboutPage;