import React from "react";

const DecorativeCosmeticsFaq = (props) => {
    const questions = props.questions;
    return (
        <React.Fragment>
            <div className="about-company-production-title-wrap">
                <h2>Часто задаваемые вопросы</h2>
            </div>
            {questions.map((faqItem) => {
                return (
                    <React.Fragment key={faqItem.id}>
                        <div className={faqItem.active ? "for-clients-faq-accordion-item active" : "for-clients-faq-accordion-item"}>
                            <div  onClick={() => props.faqHandler(faqItem.id)} className="for-clients-faq-accordion-item-title" >
                                <h4>{faqItem.ask}</h4>
                            </div>
                            <div className="for-clients-faq-accordion-item-btn-wrap">
                                <span 
                                    className={faqItem.active ? 
                                        "for-clients-faq-accordion-item-btn active" : "for-clients-faq-accordion-item-btn"
                                    }
                                    onClick={() => props.faqHandler(faqItem.id)}
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
        </React.Fragment>
    )
};

export default DecorativeCosmeticsFaq;