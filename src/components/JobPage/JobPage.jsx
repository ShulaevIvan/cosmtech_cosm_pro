import React from "react";
import { useSelector } from "react-redux";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import { Helmet } from "react-helmet-async";
const JobPage = () => {
    const jobState = useSelector((state) => state.innerPage.jobPage);
    return (
        <React.Fragment>
            <InnerPageHeader />
            <div className="inner-page-main-wrapper">
                <section>
                    <div className="container">
                        <div className="vacancy-wrap">
                            <div className="vacancy-header-row">
                                {jobState.vacancyHeader.map((headerItem) => {
                                    return (
                                        <React.Fragment key={headerItem.id}>
                                            <div className="vacancy-header-item-name">
                                                <h3>{headerItem.name}</h3>
                                            </div>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                            {jobState.vacancyList.map((vacancyItem) => {
                                return (
                                    <React.Fragment key={vacancyItem.id}>
                                        <div className="vacancy-item-row">
                                
                                            <div className="vacancy-item-name">Инженер-строитель</div>
                                            <div className="vacancy-item-requirements">
                                                {vacancyItem.description}
                                            </div>
                                            <div className="vacancy-item-contacts">
                                                <ul>
                                                {vacancyItem.contacts.map((item) => {
                                                    return (
                                                        <React.Fragment key={item.id}>
                                                            <li>{item.description} :  {item.value}</li>
                                                        </React.Fragment>
                                                    )
                                                })}
                                                </ul>
                                            </div>
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

export default JobPage;