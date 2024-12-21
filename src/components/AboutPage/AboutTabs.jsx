import React from "react";
import { Link } from "react-router-dom";

const AboutTabs = (props) => {
    const activeTab = props.tabs.find((item) => item.active);

    return (
        <React.Fragment>
            <div className="container">
                <div className="about-page-production-tab-wrap">
                <div className="about-page-production-tab-links-row">
                    {props.tabs.map((tabItem) => {
                        return (
                            <React.Fragment key={tabItem.id}>
                                <div 
                                    className={tabItem.active ? "about-page-production-tab-link-wrap tab-active " : "about-page-production-tab-link-wrap"}
                                    onClick={() => props.tabHandler(tabItem.id)}
                                >
                                    <Link>{tabItem.title}</Link>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
                {activeTab ? 
                    <div className="about-page-production-tab-content">
                        {activeTab.name === 'coop' ? 
                            <React.Fragment>
                                <h3>{activeTab.tabHeader}</h3>
                                <div className="about-page-production-tab-coop-row">
                                    <div className="about-page-production-tab-coop-item">
                                        <p>
                                            Уважаемые поставщики! Просьба направлять ваши предложения только на указанный адрес электронной почты. 
                                            Ваши предложения помогают оптимизировать процессы, повышая качество наших услуг. </p>
                                        <div className="about-page-tab-cooperation-row">
                                            {activeTab.coopEmails.map((coopItem) => {
                                                return (
                                                    <React.Fragment key={coopItem.id}>
                                                        <div className="about-page-tab-cooperation-item">
                                                            <h4>{coopItem.name}</h4>
                                                            <span>email: <Link to={`mailto:${coopItem.email}`}target={'_blank'}>{coopItem.email}</Link></span>
                                                        </div>
                                                    </React.Fragment>
                                                )
                                            })}
                                        </div>
                                       
                                    </div>
                                </div>
                            </React.Fragment>
                        : null}
                        {activeTab.name === 'reviews' ? 
                            <React.Fragment>
                                <h3>{activeTab.tabHeader}</h3>
                                <p>Отставьте отзыв о нашей работе на любой из площадок</p>
                                <div className="about-page-production-reviews-logo-row">
                                    {activeTab.reviewPlaces.map((reviewItem) => {
                                        return (
                                            <React.Fragment key={reviewItem.id}>
                                                <div className="about-page-production-review-item">
                                                    <Link to={`${reviewItem.url}`} target={'_blank'}>
                                                        <img src={reviewItem.img} alt={reviewItem.imgAlt} />
                                                    </Link>
                                                </div>
                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                            </React.Fragment>
                        : null}
                        {activeTab.name === 'req' ? 
                            <React.Fragment>
                                <h3>{activeTab.tabHeader}</h3>
                            </React.Fragment>
                        : null}

                        {activeTab.name === 'address' ? 
                            <React.Fragment>
                                <h3>{activeTab.tabHeader}</h3>
                            </React.Fragment>
                        : null}
                    </div>
                : null}
               
                </div>
                
            </div>
        </React.Fragment>
    )
};


export default AboutTabs;